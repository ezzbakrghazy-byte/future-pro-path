import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ScoutingReport from '@/components/ScoutingReport';
import { supabase } from '@/integrations/supabase/client';
import { mockVideoAnalysis } from '../mocks/supabase';

const mockPlayerData = {
  name: 'Test Player',
  age: 18,
  position: 'Midfielder',
  height: 180,
};

describe('ScoutingReport Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders generate report button', () => {
    render(<ScoutingReport playerData={mockPlayerData} analysisData={mockVideoAnalysis} />);
    
    const button = screen.getByRole('button', { name: /generate.*report/i });
    expect(button).toBeInTheDocument();
  });

  it('successfully generates scouting report', async () => {
    const mockInvoke = vi.mocked(supabase.functions.invoke);
    mockInvoke.mockResolvedValue({
      data: {
        id: 'report-id',
        report_data: {
          scout_classification: 'High Potential',
          recommendation_action: 'Immediate Signing',
          strengths: ['Excellent passing', 'Good vision'],
          weaknesses: ['Needs to improve shooting'],
          summary: 'Promising midfielder with excellent technical skills',
        },
      },
      error: null,
    } as any);

    render(<ScoutingReport playerData={mockPlayerData} analysisData={mockVideoAnalysis} />);
    
    const button = screen.getByRole('button', { name: /generate.*report/i });
    fireEvent.click(button);

    await waitFor(() => {
      expect(mockInvoke).toHaveBeenCalledWith('generate-scouting-report', {
        body: expect.objectContaining({
          analysisData: mockVideoAnalysis,
        }),
      });
    });

    await waitFor(() => {
      expect(screen.getByText(/high potential/i)).toBeInTheDocument();
      expect(screen.getByText(/immediate signing/i)).toBeInTheDocument();
    });
  });

  it('displays error message on report generation failure', async () => {
    const mockInvoke = vi.mocked(supabase.functions.invoke);
    mockInvoke.mockResolvedValue({
      data: null,
      error: { message: 'Failed to generate report', name: 'FunctionError' },
    } as any);

    render(<ScoutingReport playerData={mockPlayerData} analysisData={mockVideoAnalysis} />);
    
    const button = screen.getByRole('button', { name: /generate.*report/i });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(/failed to generate report/i)).toBeInTheDocument();
    });
  });

  it('shows loading state during report generation', async () => {
    const mockInvoke = vi.mocked(supabase.functions.invoke);
    mockInvoke.mockImplementation(() => new Promise(() => {}));

    render(<ScoutingReport playerData={mockPlayerData} analysisData={mockVideoAnalysis} />);
    
    const button = screen.getByRole('button', { name: /generate.*report/i });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(/generating/i)).toBeInTheDocument();
    });
  });

  it('displays scout recommendations', async () => {
    const mockInvoke = vi.mocked(supabase.functions.invoke);
    mockInvoke.mockResolvedValue({
      data: {
        report_data: {
          scout_classification: 'Excellent Prospect',
          recommendation_action: 'Monitor Closely',
          strengths: ['Fast', 'Technical', 'Good decision making'],
          weaknesses: ['Physical strength', 'Aerial ability'],
          summary: 'Outstanding young player with great potential',
          market_value: '€500,000',
          development_areas: ['Strength training', 'Heading practice'],
        },
      },
      error: null,
    } as any);

    render(<ScoutingReport playerData={mockPlayerData} analysisData={mockVideoAnalysis} />);
    
    const button = screen.getByRole('button', { name: /generate.*report/i });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(/excellent prospect/i)).toBeInTheDocument();
      expect(screen.getByText(/monitor closely/i)).toBeInTheDocument();
      expect(screen.getByText(/fast/i)).toBeInTheDocument();
      expect(screen.getByText(/technical/i)).toBeInTheDocument();
    });
  });

  it('allows downloading report as PDF', async () => {
    const mockInvoke = vi.mocked(supabase.functions.invoke);
    mockInvoke.mockResolvedValue({
      data: {
        report_data: {
          scout_classification: 'Top Prospect',
          recommendation_action: 'Sign Immediately',
        },
      },
      error: null,
    } as any);

    render(<ScoutingReport playerData={mockPlayerData} analysisData={mockVideoAnalysis} />);
    
    const generateButton = screen.getByRole('button', { name: /generate.*report/i });
    fireEvent.click(generateButton);

    await waitFor(() => {
      const downloadButton = screen.getByRole('button', { name: /download.*pdf/i });
      expect(downloadButton).toBeInTheDocument();
    });
  });
});
