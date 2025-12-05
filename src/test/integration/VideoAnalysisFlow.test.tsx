import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import VideoAnalysis from '@/pages/VideoAnalysis';
import { AuthProvider } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';

const renderWithAuth = (component: React.ReactElement) => {
  return render(
    <MemoryRouter>
      <AuthProvider>{component}</AuthProvider>
    </MemoryRouter>
  );
};

describe('Video Analysis Full Flow Integration Test', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('completes full video analysis workflow', async () => {
    // Mock authenticated user
    vi.mocked(supabase.auth.getUser).mockResolvedValue({
      data: { user: { id: 'test-id', email: 'test@example.com' } },
      error: null,
    } as any);

    // Mock video upload
    const mockUpload = vi.fn().mockResolvedValue({
      data: { path: 'videos/test.mp4' },
      error: null,
    });
    const mockGetPublicUrl = vi.fn().mockReturnValue({
      data: { publicUrl: 'https://example.com/video.mp4' },
    });
    vi.mocked(supabase.storage.from).mockReturnValue({
      upload: mockUpload,
      getPublicUrl: mockGetPublicUrl,
    } as any);

    // Mock analysis
    const mockInvoke = vi.mocked(supabase.functions.invoke);
    mockInvoke.mockResolvedValueOnce({
      data: {
        id: 'analysis-id',
        overall_score: 80,
        potential_rating: 90,
        analysis_data: {
          technical: { passing: 85, dribbling: 80, shooting: 75 },
          physical: { pace: 90, strength: 75, stamina: 85 },
        },
      },
      error: null,
    } as any);

    renderWithAuth(<VideoAnalysis />);

    // Step 1: Upload video
    const file = new File(['video'], 'test.mp4', { type: 'video/mp4' });
    const fileInput = screen.getByLabelText(/choose video file/i);
    fireEvent.change(fileInput, { target: { files: [file] } });

    // Step 2: Fill form
    const positionSelect = screen.getByLabelText(/position/i);
    fireEvent.change(positionSelect, { target: { value: 'Forward' } });

    const ageInput = screen.getByLabelText(/age/i);
    fireEvent.change(ageInput, { target: { value: '19' } });

    const heightInput = screen.getByLabelText(/height/i);
    fireEvent.change(heightInput, { target: { value: '180' } });

    // Step 3: Submit
    const uploadButton = screen.getByRole('button', { name: /analyze/i });
    fireEvent.click(uploadButton);

    // Step 4: Verify upload and analysis
    await waitFor(() => {
      expect(mockUpload).toHaveBeenCalled();
    });

    await waitFor(() => {
      expect(mockInvoke).toHaveBeenCalledWith('analyze-video', {
        body: expect.objectContaining({
          videoUrl: 'https://example.com/video.mp4',
          position: 'Forward',
          playerAge: 19,
          playerHeight: 180,
        }),
      });
    });

    // Step 5: Verify results displayed
    await waitFor(() => {
      expect(screen.getByText('80')).toBeInTheDocument(); // Overall score
      expect(screen.getByText('90')).toBeInTheDocument(); // Potential
    });

    // Step 6: Generate scouting report
    mockInvoke.mockResolvedValueOnce({
      data: {
        report_data: {
          scout_classification: 'High Potential',
          recommendation_action: 'Monitor',
        },
      },
      error: null,
    } as any);

    const reportButton = screen.getByRole('button', { name: /generate.*report/i });
    fireEvent.click(reportButton);

    await waitFor(() => {
      expect(mockInvoke).toHaveBeenCalledWith('generate-scouting-report', expect.any(Object));
    });

    await waitFor(() => {
      expect(screen.getByText(/high potential/i)).toBeInTheDocument();
    });
  });
});
