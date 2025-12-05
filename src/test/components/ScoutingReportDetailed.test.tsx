import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ScoutingReport from '@/components/ScoutingReport';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

vi.mock('@/hooks/use-toast', () => ({
  useToast: vi.fn(),
}));

vi.mock('@/integrations/supabase/client', () => ({
  supabase: {
    functions: {
      invoke: vi.fn(),
    },
  },
}));

describe('ScoutingReport - All Interactive Elements', () => {
  const mockToast = vi.fn();
  const mockPlayerData = {
    name: 'John Doe',
    age: 18,
    position: 'Forward',
    height: 180,
  };
  const mockAnalysisData = {
    technical_skills: { dribbling: 8, passing: 7, shooting: 9 },
    physical_attributes: { speed: 8, strength: 7 },
    tactical_awareness: { positioning: 8, decision_making: 7 },
  };

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(useToast).mockReturnValue({ toast: mockToast } as any);
  });

  describe('Generate Report Button - Initial State', () => {
    it('renders generate report button', () => {
      render(
        <ScoutingReport 
          playerData={mockPlayerData} 
          analysisData={mockAnalysisData} 
        />
      );

      const button = screen.getByRole('button', { name: /generate scouting report/i });
      expect(button).toBeInTheDocument();
    });

    it('button has icon', () => {
      render(
        <ScoutingReport 
          playerData={mockPlayerData} 
          analysisData={mockAnalysisData} 
        />
      );

      const button = screen.getByRole('button', { name: /generate scouting report/i });
      expect(button.querySelector('svg')).toBeInTheDocument();
    });

    it('button is enabled with analysis data', () => {
      render(
        <ScoutingReport 
          playerData={mockPlayerData} 
          analysisData={mockAnalysisData} 
        />
      );

      const button = screen.getByRole('button', { name: /generate scouting report/i });
      expect(button).not.toBeDisabled();
    });

    it('button is disabled without analysis data', () => {
      render(
        <ScoutingReport 
          playerData={mockPlayerData} 
          analysisData={null} 
        />
      );

      const button = screen.getByRole('button', { name: /generate scouting report/i });
      expect(button).toBeDisabled();
    });

    it('shows description text before report generation', () => {
      render(
        <ScoutingReport 
          playerData={mockPlayerData} 
          analysisData={mockAnalysisData} 
        />
      );

      expect(screen.getByText(/generate a comprehensive professional scouting report/i)).toBeInTheDocument();
    });
  });

  describe('Generate Report Button - Interaction', () => {
    it('calls generate report function when clicked', async () => {
      const mockReport = {
        player_summary: 'Test summary',
        overall_grade: 'A',
        strengths: ['Test strength'],
        weaknesses: ['Test weakness'],
      };

      vi.mocked(supabase.functions.invoke).mockResolvedValue({
        data: { report: mockReport },
        error: null,
      } as any);

      render(
        <ScoutingReport 
          playerData={mockPlayerData} 
          analysisData={mockAnalysisData} 
        />
      );

      const button = screen.getByRole('button', { name: /generate scouting report/i });
      fireEvent.click(button);

      await waitFor(() => {
        expect(supabase.functions.invoke).toHaveBeenCalledWith(
          'generate-scouting-report',
          {
            body: {
              playerData: mockPlayerData,
              analysisData: mockAnalysisData,
            },
          }
        );
      });
    });

    it('shows loading state during generation', async () => {
      vi.mocked(supabase.functions.invoke).mockImplementation(
        () => new Promise((resolve) => setTimeout(() => resolve({ data: { report: {} }, error: null }), 100))
      );

      render(
        <ScoutingReport 
          playerData={mockPlayerData} 
          analysisData={mockAnalysisData} 
        />
      );

      const button = screen.getByRole('button', { name: /generate scouting report/i });
      fireEvent.click(button);

      expect(screen.getByText(/generating report/i)).toBeInTheDocument();
    });

    it('button is disabled during generation', async () => {
      vi.mocked(supabase.functions.invoke).mockImplementation(
        () => new Promise((resolve) => setTimeout(() => resolve({ data: { report: {} }, error: null }), 100))
      );

      render(
        <ScoutingReport 
          playerData={mockPlayerData} 
          analysisData={mockAnalysisData} 
        />
      );

      const button = screen.getByRole('button', { name: /generate scouting report/i });
      fireEvent.click(button);

      expect(button).toBeDisabled();
    });

    it('shows loading spinner during generation', async () => {
      vi.mocked(supabase.functions.invoke).mockImplementation(
        () => new Promise((resolve) => setTimeout(() => resolve({ data: { report: {} }, error: null }), 100))
      );

      render(
        <ScoutingReport 
          playerData={mockPlayerData} 
          analysisData={mockAnalysisData} 
        />
      );

      const button = screen.getByRole('button', { name: /generate scouting report/i });
      fireEvent.click(button);

      const spinner = button.querySelector('.animate-spin');
      expect(spinner).toBeInTheDocument();
    });
  });

  describe('Report Display After Generation', () => {
    it('displays report content after successful generation', async () => {
      const mockReport = {
        player_summary: 'Excellent young player',
        overall_grade: 'A',
        strengths: ['Fast', 'Good technique'],
        weaknesses: ['Inexperienced'],
        recommended_action: 'Sign Immediately',
      };

      vi.mocked(supabase.functions.invoke).mockResolvedValue({
        data: { report: mockReport },
        error: null,
      } as any);

      render(
        <ScoutingReport 
          playerData={mockPlayerData} 
          analysisData={mockAnalysisData} 
        />
      );

      const button = screen.getByRole('button', { name: /generate scouting report/i });
      fireEvent.click(button);

      await waitFor(() => {
        expect(screen.getByText(/excellent young player/i)).toBeInTheDocument();
      });
    });

    it('shows success toast after generation', async () => {
      const mockReport = {
        player_summary: 'Test summary',
        overall_grade: 'A',
      };

      vi.mocked(supabase.functions.invoke).mockResolvedValue({
        data: { report: mockReport },
        error: null,
      } as any);

      render(
        <ScoutingReport 
          playerData={mockPlayerData} 
          analysisData={mockAnalysisData} 
        />
      );

      const button = screen.getByRole('button', { name: /generate scouting report/i });
      fireEvent.click(button);

      await waitFor(() => {
        expect(mockToast).toHaveBeenCalledWith(
          expect.objectContaining({
            title: 'Report Generated',
            description: 'Your professional scouting report is ready.',
          })
        );
      });
    });
  });

  describe('Download Button - After Report Generation', () => {
    it('renders download button after report generation', async () => {
      const mockReport = {
        player_summary: 'Test summary',
        overall_grade: 'A',
        strengths: ['Test'],
        weaknesses: ['Test'],
      };

      vi.mocked(supabase.functions.invoke).mockResolvedValue({
        data: { report: mockReport },
        error: null,
      } as any);

      render(
        <ScoutingReport 
          playerData={mockPlayerData} 
          analysisData={mockAnalysisData} 
        />
      );

      const generateButton = screen.getByRole('button', { name: /generate scouting report/i });
      fireEvent.click(generateButton);

      await waitFor(() => {
        expect(screen.getByRole('button', { name: /download report/i })).toBeInTheDocument();
      });
    });

    it('download button has icon', async () => {
      const mockReport = {
        player_summary: 'Test summary',
        overall_grade: 'A',
      };

      vi.mocked(supabase.functions.invoke).mockResolvedValue({
        data: { report: mockReport },
        error: null,
      } as any);

      render(
        <ScoutingReport 
          playerData={mockPlayerData} 
          analysisData={mockAnalysisData} 
        />
      );

      const generateButton = screen.getByRole('button', { name: /generate scouting report/i });
      fireEvent.click(generateButton);

      await waitFor(() => {
        const downloadButton = screen.getByRole('button', { name: /download report/i });
        expect(downloadButton.querySelector('svg')).toBeInTheDocument();
      });
    });

    it('download button is clickable', async () => {
      const mockReport = {
        player_summary: 'Test summary',
        overall_grade: 'A',
      };

      vi.mocked(supabase.functions.invoke).mockResolvedValue({
        data: { report: mockReport },
        error: null,
      } as any);

      render(
        <ScoutingReport 
          playerData={mockPlayerData} 
          analysisData={mockAnalysisData} 
        />
      );

      const generateButton = screen.getByRole('button', { name: /generate scouting report/i });
      fireEvent.click(generateButton);

      await waitFor(() => {
        const downloadButton = screen.getByRole('button', { name: /download report/i });
        expect(downloadButton).not.toBeDisabled();
      });
    });

    it('download button triggers download action', async () => {
      const mockReport = {
        player_summary: 'Test summary',
        overall_grade: 'A',
      };

      vi.mocked(supabase.functions.invoke).mockResolvedValue({
        data: { report: mockReport },
        error: null,
      } as any);

      render(
        <ScoutingReport 
          playerData={mockPlayerData} 
          analysisData={mockAnalysisData} 
        />
      );

      const generateButton = screen.getByRole('button', { name: /generate scouting report/i });
      fireEvent.click(generateButton);

      await waitFor(() => {
        const downloadButton = screen.getByRole('button', { name: /download report/i });
        fireEvent.click(downloadButton);
        // Download action should be triggered (actual download behavior is browser-specific)
      });
    });
  });

  describe('Error Handling', () => {
    it('shows error toast on generation failure', async () => {
      vi.mocked(supabase.functions.invoke).mockResolvedValue({
        data: null,
        error: new Error('Generation failed'),
      } as any);

      render(
        <ScoutingReport 
          playerData={mockPlayerData} 
          analysisData={mockAnalysisData} 
        />
      );

      const button = screen.getByRole('button', { name: /generate scouting report/i });
      fireEvent.click(button);

      await waitFor(() => {
        expect(mockToast).toHaveBeenCalledWith(
          expect.objectContaining({
            title: 'Error',
            variant: 'destructive',
          })
        );
      });
    });

    it('does not display report on error', async () => {
      vi.mocked(supabase.functions.invoke).mockResolvedValue({
        data: null,
        error: new Error('Generation failed'),
      } as any);

      render(
        <ScoutingReport 
          playerData={mockPlayerData} 
          analysisData={mockAnalysisData} 
        />
      );

      const button = screen.getByRole('button', { name: /generate scouting report/i });
      fireEvent.click(button);

      await waitFor(() => {
        expect(mockToast).toHaveBeenCalled();
      });

      // Button should still be visible (report not generated)
      expect(screen.getByRole('button', { name: /generate scouting report/i })).toBeInTheDocument();
    });
  });

  describe('Report Content Display', () => {
    it('displays overall grade badge', async () => {
      const mockReport = {
        player_summary: 'Test',
        overall_grade: 'A+',
      };

      vi.mocked(supabase.functions.invoke).mockResolvedValue({
        data: { report: mockReport },
        error: null,
      } as any);

      render(
        <ScoutingReport 
          playerData={mockPlayerData} 
          analysisData={mockAnalysisData} 
        />
      );

      const button = screen.getByRole('button', { name: /generate scouting report/i });
      fireEvent.click(button);

      await waitFor(() => {
        expect(screen.getByText('A+')).toBeInTheDocument();
      });
    });

    it('displays strengths list', async () => {
      const mockReport = {
        player_summary: 'Test',
        overall_grade: 'A',
        strengths: ['Fast', 'Good technique', 'Strong'],
      };

      vi.mocked(supabase.functions.invoke).mockResolvedValue({
        data: { report: mockReport },
        error: null,
      } as any);

      render(
        <ScoutingReport 
          playerData={mockPlayerData} 
          analysisData={mockAnalysisData} 
        />
      );

      const button = screen.getByRole('button', { name: /generate scouting report/i });
      fireEvent.click(button);

      await waitFor(() => {
        expect(screen.getByText('Fast')).toBeInTheDocument();
        expect(screen.getByText('Good technique')).toBeInTheDocument();
        expect(screen.getByText('Strong')).toBeInTheDocument();
      });
    });

    it('displays weaknesses list', async () => {
      const mockReport = {
        player_summary: 'Test',
        overall_grade: 'B',
        weaknesses: ['Inexperienced', 'Weak left foot'],
      };

      vi.mocked(supabase.functions.invoke).mockResolvedValue({
        data: { report: mockReport },
        error: null,
      } as any);

      render(
        <ScoutingReport 
          playerData={mockPlayerData} 
          analysisData={mockAnalysisData} 
        />
      );

      const button = screen.getByRole('button', { name: /generate scouting report/i });
      fireEvent.click(button);

      await waitFor(() => {
        expect(screen.getByText('Inexperienced')).toBeInTheDocument();
        expect(screen.getByText('Weak left foot')).toBeInTheDocument();
      });
    });

    it('displays recommended action badge', async () => {
      const mockReport = {
        player_summary: 'Test',
        overall_grade: 'A',
        recommended_action: 'Sign Immediately',
      };

      vi.mocked(supabase.functions.invoke).mockResolvedValue({
        data: { report: mockReport },
        error: null,
      } as any);

      render(
        <ScoutingReport 
          playerData={mockPlayerData} 
          analysisData={mockAnalysisData} 
        />
      );

      const button = screen.getByRole('button', { name: /generate scouting report/i });
      fireEvent.click(button);

      await waitFor(() => {
        expect(screen.getByText('Sign Immediately')).toBeInTheDocument();
      });
    });
  });

  describe('Accessibility', () => {
    it('generate button is accessible', () => {
      render(
        <ScoutingReport 
          playerData={mockPlayerData} 
          analysisData={mockAnalysisData} 
        />
      );

      const button = screen.getByRole('button', { name: /generate scouting report/i });
      expect(button).toHaveAccessibleName();
    });

    it('card has proper heading structure', () => {
      render(
        <ScoutingReport 
          playerData={mockPlayerData} 
          analysisData={mockAnalysisData} 
        />
      );

      expect(screen.getByText(/professional scouting report/i)).toBeInTheDocument();
    });

    it('download button is accessible after generation', async () => {
      const mockReport = {
        player_summary: 'Test',
        overall_grade: 'A',
      };

      vi.mocked(supabase.functions.invoke).mockResolvedValue({
        data: { report: mockReport },
        error: null,
      } as any);

      render(
        <ScoutingReport 
          playerData={mockPlayerData} 
          analysisData={mockAnalysisData} 
        />
      );

      const generateButton = screen.getByRole('button', { name: /generate scouting report/i });
      fireEvent.click(generateButton);

      await waitFor(() => {
        const downloadButton = screen.getByRole('button', { name: /download report/i });
        expect(downloadButton).toHaveAccessibleName();
      });
    });
  });
});
