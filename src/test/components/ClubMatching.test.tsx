import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ClubMatching from '@/components/ClubMatching';
import { supabase } from '@/integrations/supabase/client';
import { mockVideoAnalysis, mockClub } from '../mocks/supabase';

const mockPlayerProfile = {
  name: 'Test Player',
  age: 18,
  position: 'Midfielder',
  height: 180,
};

describe('ClubMatching Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders find clubs button', () => {
    render(<ClubMatching playerProfile={mockPlayerProfile} analysisData={mockVideoAnalysis} />);
    
    const button = screen.getByRole('button', { name: /find.*clubs?/i });
    expect(button).toBeInTheDocument();
  });

  it('successfully finds matching clubs', async () => {
    const mockInvoke = vi.mocked(supabase.functions.invoke);
    mockInvoke.mockResolvedValue({
      data: {
        matches: [
          {
            club: mockClub,
            match_score: 92,
            match_grade: 'A+',
            reasons: [
              'Perfect position match',
              'Excellent technical fit',
              'Age range ideal',
            ],
          },
          {
            club: { ...mockClub, name: 'Sporting CP Academy', reputation: 90 },
            match_score: 88,
            match_grade: 'A',
            reasons: ['Good technical fit', 'Strong development focus'],
          },
        ],
      },
      error: null,
    } as any);

    render(<ClubMatching playerProfile={mockPlayerProfile} analysisData={mockVideoAnalysis} />);
    
    const button = screen.getByRole('button', { name: /find.*clubs?/i });
    fireEvent.click(button);

    await waitFor(() => {
      expect(mockInvoke).toHaveBeenCalledWith('player-club-matching', {
        body: expect.objectContaining({
          playerPosition: mockVideoAnalysis.position,
          playerAge: mockVideoAnalysis.player_age,
        }),
      });
    });

    await waitFor(() => {
      expect(screen.getByText(/ajax youth academy/i)).toBeInTheDocument();
      expect(screen.getByText(/sporting cp academy/i)).toBeInTheDocument();
      expect(screen.getByText('92')).toBeInTheDocument();
      expect(screen.getByText('A+')).toBeInTheDocument();
    });
  });

  it('displays club details', async () => {
    const mockInvoke = vi.mocked(supabase.functions.invoke);
    mockInvoke.mockResolvedValue({
      data: {
        matches: [
          {
            club: mockClub,
            match_score: 92,
            match_grade: 'A+',
            reasons: ['Perfect fit'],
          },
        ],
      },
      error: null,
    } as any);

    render(<ClubMatching playerProfile={mockPlayerProfile} analysisData={mockVideoAnalysis} />);
    
    const button = screen.getByRole('button', { name: /find.*clubs?/i });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(/amsterdam/i)).toBeInTheDocument();
      expect(screen.getByText(/netherlands/i)).toBeInTheDocument();
      expect(screen.getByText(/eredivisie youth/i)).toBeInTheDocument();
      expect(screen.getByText(/elite/i)).toBeInTheDocument();
    });
  });

  it('displays match reasons', async () => {
    const mockInvoke = vi.mocked(supabase.functions.invoke);
    mockInvoke.mockResolvedValue({
      data: {
        matches: [
          {
            club: mockClub,
            match_score: 85,
            match_grade: 'A',
            reasons: [
              'Position matches club needs',
              'Playing style is compatible',
              'Age fits club preference',
            ],
          },
        ],
      },
      error: null,
    } as any);

    render(<ClubMatching playerProfile={mockPlayerProfile} analysisData={mockVideoAnalysis} />);
    
    const button = screen.getByRole('button', { name: /find.*clubs?/i });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(/position matches club needs/i)).toBeInTheDocument();
      expect(screen.getByText(/playing style is compatible/i)).toBeInTheDocument();
      expect(screen.getByText(/age fits club preference/i)).toBeInTheDocument();
    });
  });

  it('displays error message on matching failure', async () => {
    const mockInvoke = vi.mocked(supabase.functions.invoke);
    mockInvoke.mockResolvedValue({
      data: null,
      error: { message: 'Failed to find matches', name: 'FunctionError' },
    } as any);

    render(<ClubMatching playerProfile={mockPlayerProfile} analysisData={mockVideoAnalysis} />);
    
    const button = screen.getByRole('button', { name: /find.*clubs?/i });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(/failed to find matches/i)).toBeInTheDocument();
    });
  });

  it('shows loading state during matching', async () => {
    const mockInvoke = vi.mocked(supabase.functions.invoke);
    mockInvoke.mockImplementation(() => new Promise(() => {}));

    render(<ClubMatching playerProfile={mockPlayerProfile} analysisData={mockVideoAnalysis} />);
    
    const button = screen.getByRole('button', { name: /find.*clubs?/i });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(/finding.*matches?/i)).toBeInTheDocument();
    });
  });

  it('sorts clubs by match score', async () => {
    const mockInvoke = vi.mocked(supabase.functions.invoke);
    mockInvoke.mockResolvedValue({
      data: {
        matches: [
          { club: { ...mockClub, name: 'Club A' }, match_score: 70, match_grade: 'B' },
          { club: { ...mockClub, name: 'Club B' }, match_score: 95, match_grade: 'A+' },
          { club: { ...mockClub, name: 'Club C' }, match_score: 85, match_grade: 'A' },
        ],
      },
      error: null,
    } as any);

    render(<ClubMatching playerProfile={mockPlayerProfile} analysisData={mockVideoAnalysis} />);
    
    const button = screen.getByRole('button', { name: /find.*clubs?/i });
    fireEvent.click(button);

    await waitFor(() => {
      const clubs = screen.getAllByText(/club [ABC]/i);
      expect(clubs[0]).toHaveTextContent('Club B'); // Highest score first
    });
  });

  it('displays no results message when no matches found', async () => {
    const mockInvoke = vi.mocked(supabase.functions.invoke);
    mockInvoke.mockResolvedValue({
      data: { matches: [] },
      error: null,
    } as any);

    render(<ClubMatching playerProfile={mockPlayerProfile} analysisData={mockVideoAnalysis} />);
    
    const button = screen.getByRole('button', { name: /find.*clubs?/i });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(/no.*matches.*found/i)).toBeInTheDocument();
    });
  });
});
