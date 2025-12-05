import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { AuthProvider } from '@/contexts/AuthContext';

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <MemoryRouter>
      <AuthProvider>{component}</AuthProvider>
    </MemoryRouter>
  );
};

describe('Navigation Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders navigation bar', () => {
    renderWithRouter(<Navigation />);
    
    expect(screen.getByText(/في ضهرك/)).toBeInTheDocument();
  });

  it('displays navigation links', () => {
    renderWithRouter(<Navigation />);
    
    expect(screen.getByText(/video analysis/i)).toBeInTheDocument();
    expect(screen.getByText(/players/i)).toBeInTheDocument();
    expect(screen.getByText(/clubs/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
  });

  it('has correct link hrefs', () => {
    renderWithRouter(<Navigation />);
    
    const homeLink = screen.getByText(/players|video|clubs|about/i).closest('a');
    const videoLink = screen.getByText(/video analysis/i).closest('a');
    const playersLink = screen.getByText(/players/i).closest('a');
    const clubsLink = screen.getByText(/clubs/i).closest('a');
    const aboutLink = screen.getByText(/about/i).closest('a');

    expect(homeLink).toHaveAttribute('href', '/');
    expect(videoLink).toHaveAttribute('href', '/video-analysis');
    expect(playersLink).toHaveAttribute('href', '/players');
    expect(clubsLink).toHaveAttribute('href', '/clubs');
    expect(aboutLink).toHaveAttribute('href', '/about');
  });

  it('shows sign in button when not authenticated', () => {
    renderWithRouter(<Navigation />);
    
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
  });

  it('shows sign up button when not authenticated', () => {
    renderWithRouter(<Navigation />);
    
    expect(screen.getByText(/get started/i)).toBeInTheDocument();
  });

  it('is responsive on mobile', () => {
    renderWithRouter(<Navigation />);
    
    const mobileMenuButton = screen.getByRole('button', { name: /menu/i });
    expect(mobileMenuButton).toBeInTheDocument();
  });

  it('toggles mobile menu when menu button clicked', () => {
    renderWithRouter(<Navigation />);
    
    const menuButton = screen.getByRole('button', { name: /menu/i });
    fireEvent.click(menuButton);

    // Mobile menu should appear with nav links
    const mobileLinks = screen.getAllByText(/home/i);
    expect(mobileLinks.length).toBeGreaterThan(1); // Desktop + mobile versions
  });
});
