import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import VideoUpload from '@/components/VideoUpload';
import { supabase } from '@/integrations/supabase/client';
import { mockVideoAnalysis } from '../mocks/supabase';

describe('VideoUpload Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders video upload form', () => {
    render(<VideoUpload />);
    
    expect(screen.getByText(/upload your video/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/position/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/age/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/height/i)).toBeInTheDocument();
  });

  it('accepts video file upload', async () => {
    render(<VideoUpload />);
    
    const file = new File(['video content'], 'test-video.mp4', { type: 'video/mp4' });
    const input = screen.getByLabelText(/choose video file/i) as HTMLInputElement;
    
    fireEvent.change(input, { target: { files: [file] } });

    await waitFor(() => {
      expect(input.files?.[0]).toBe(file);
      expect(input.files?.[0].name).toBe('test-video.mp4');
    });
  });

  it('validates required fields before upload', async () => {
    render(<VideoUpload />);
    
    const uploadButton = screen.getByRole('button', { name: /analyze video/i });
    fireEvent.click(uploadButton);

    expect(supabase.storage.from).not.toHaveBeenCalled();
    expect(supabase.functions.invoke).not.toHaveBeenCalled();
  });

  it('successfully uploads video and triggers analysis', async () => {
    const mockUpload = vi.fn().mockResolvedValue({
      data: { path: 'videos/test-video.mp4' },
      error: null,
    });
    const mockGetPublicUrl = vi.fn().mockReturnValue({
      data: { publicUrl: 'https://example.com/video.mp4' },
    });
    const mockFrom = vi.mocked(supabase.storage.from);
    mockFrom.mockReturnValue({
      upload: mockUpload,
      getPublicUrl: mockGetPublicUrl,
    } as any);

    const mockInvoke = vi.mocked(supabase.functions.invoke);
    mockInvoke.mockResolvedValue({
      data: mockVideoAnalysis,
      error: null,
    } as any);

    render(<VideoUpload />);
    
    const file = new File(['video content'], 'test-video.mp4', { type: 'video/mp4' });
    const fileInput = screen.getByLabelText(/choose video file/i);
    fireEvent.change(fileInput, { target: { files: [file] } });

    const positionSelect = screen.getByLabelText(/position/i);
    fireEvent.change(positionSelect, { target: { value: 'Midfielder' } });

    const ageInput = screen.getByLabelText(/age/i);
    fireEvent.change(ageInput, { target: { value: '18' } });

    const heightInput = screen.getByLabelText(/height/i);
    fireEvent.change(heightInput, { target: { value: '175' } });

    const uploadButton = screen.getByRole('button', { name: /analyze video/i });
    fireEvent.click(uploadButton);

    await waitFor(() => {
      expect(mockFrom).toHaveBeenCalledWith('videos');
      expect(mockUpload).toHaveBeenCalled();
    });

    await waitFor(() => {
      expect(mockInvoke).toHaveBeenCalledWith('analyze-video', {
        body: expect.objectContaining({
          videoUrl: 'https://example.com/video.mp4',
          position: 'Midfielder',
          playerAge: 18,
          playerHeight: 175,
        }),
      });
    });
  });

  it('displays error message on upload failure', async () => {
    const mockFrom = vi.mocked(supabase.storage.from);
    mockFrom.mockReturnValue({
      upload: vi.fn().mockResolvedValue({
        data: null,
        error: { message: 'Upload failed', name: 'StorageError' },
      }),
    } as any);

    render(<VideoUpload />);
    
    const file = new File(['video content'], 'test-video.mp4', { type: 'video/mp4' });
    const fileInput = screen.getByLabelText(/choose video file/i);
    fireEvent.change(fileInput, { target: { files: [file] } });

    const positionSelect = screen.getByLabelText(/position/i);
    fireEvent.change(positionSelect, { target: { value: 'Midfielder' } });

    const uploadButton = screen.getByRole('button', { name: /analyze video/i });
    fireEvent.click(uploadButton);

    await waitFor(() => {
      expect(screen.getByText(/upload failed/i)).toBeInTheDocument();
    });
  });

  it('shows loading state during upload', async () => {
    const mockFrom = vi.mocked(supabase.storage.from);
    mockFrom.mockReturnValue({
      upload: vi.fn().mockImplementation(() => new Promise(() => {})),
    } as any);

    render(<VideoUpload />);
    
    const file = new File(['video content'], 'test-video.mp4', { type: 'video/mp4' });
    const fileInput = screen.getByLabelText(/choose video file/i);
    fireEvent.change(fileInput, { target: { files: [file] } });

    const positionSelect = screen.getByLabelText(/position/i);
    fireEvent.change(positionSelect, { target: { value: 'Midfielder' } });

    const uploadButton = screen.getByRole('button', { name: /analyze video/i });
    fireEvent.click(uploadButton);

    await waitFor(() => {
      expect(screen.getByText(/uploading/i)).toBeInTheDocument();
    });
  });

  it('validates file type', async () => {
    render(<VideoUpload />);
    
    const file = new File(['content'], 'test.txt', { type: 'text/plain' });
    const fileInput = screen.getByLabelText(/choose video file/i);
    fireEvent.change(fileInput, { target: { files: [file] } });

    const uploadButton = screen.getByRole('button', { name: /analyze video/i });
    fireEvent.click(uploadButton);

    await waitFor(() => {
      expect(screen.getByText(/please upload a video file/i)).toBeInTheDocument();
    });
  });

  it('validates file size', async () => {
    render(<VideoUpload />);
    
    const largeFile = new File(['x'.repeat(101 * 1024 * 1024)], 'large-video.mp4', { 
      type: 'video/mp4' 
    });
    Object.defineProperty(largeFile, 'size', { value: 101 * 1024 * 1024 });
    
    const fileInput = screen.getByLabelText(/choose video file/i);
    fireEvent.change(fileInput, { target: { files: [largeFile] } });

    const uploadButton = screen.getByRole('button', { name: /analyze video/i });
    fireEvent.click(uploadButton);

    await waitFor(() => {
      expect(screen.getByText(/file size must be less than 100mb/i)).toBeInTheDocument();
    });
  });
});
