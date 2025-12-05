import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import App from '@/App';
import { supabase } from '@/integrations/supabase/client';

const renderApp = () => {
  return render(<App />);
};

describe('App Integration Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders homepage by default', () => {
    renderApp();
    
    expect(screen.getByText(/your path to/i)).toBeInTheDocument();
    expect(screen.getByText(/professional football/i)).toBeInTheDocument();
  });

  it('has navigation component', () => {
    renderApp();
    
    expect(screen.getByText(/future pro path/i)).toBeInTheDocument();
  });

  it('wraps app in AuthProvider', async () => {
    const mockOnAuthStateChange = vi.mocked(supabase.auth.onAuthStateChange);
    
    renderApp();

    await waitFor(() => {
      expect(mockOnAuthStateChange).toHaveBeenCalled();
    });
  });

  it('has all main routes configured', () => {
    renderApp();
    
    // Check if navigation has all expected links
    expect(screen.getByText(/^home$/i)).toBeInTheDocument();
    expect(screen.getByText(/video analysis/i)).toBeInTheDocument();
    expect(screen.getByText(/players/i)).toBeInTheDocument();
    expect(screen.getByText(/clubs/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
  });
});
