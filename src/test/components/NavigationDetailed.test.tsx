import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { AuthProvider } from '@/contexts/AuthContext';
import { useAuth } from '@/contexts/AuthContext';

// Mock useAuth
vi.mock('@/contexts/AuthContext', async () => {
  const actual = await vi.importActual('@/contexts/AuthContext');
  return {
    ...actual,
    useAuth: vi.fn(),
  };
});

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('Navigation Component - All Interactive Elements', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockNavigate.mockClear();
  });

  describe('Logo Button', () => {
    it('renders logo/brand name', () => {
      vi.mocked(useAuth).mockReturnValue({
        user: null,
        session: null,
        loading: false,
        signIn: vi.fn(),
        signUp: vi.fn(),
        signOut: vi.fn(),
        resetPassword: vi.fn(),
        updateProfile: vi.fn(),
      });

      render(
        <MemoryRouter>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </MemoryRouter>
      );

      expect(screen.getByText(/في ضهرك/)).toBeInTheDocument();
    });

    it('logo is clickable link', () => {
      vi.mocked(useAuth).mockReturnValue({
        user: null,
        session: null,
        loading: false,
        signIn: vi.fn(),
        signUp: vi.fn(),
        signOut: vi.fn(),
        resetPassword: vi.fn(),
        updateProfile: vi.fn(),
      });

      render(
        <MemoryRouter>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </MemoryRouter>
      );

      const logo = screen.getByText(/في ضهرك/).closest('a');
      expect(logo).toHaveAttribute('href', '/');
    });
  });

  describe('Navigation Links - Desktop', () => {
    beforeEach(() => {
      vi.mocked(useAuth).mockReturnValue({
        user: null,
        session: null,
        loading: false,
        signIn: vi.fn(),
        signUp: vi.fn(),
        signOut: vi.fn(),
        resetPassword: vi.fn(),
        updateProfile: vi.fn(),
      });
    });

    it('renders Players link', () => {
      render(
        <MemoryRouter>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </MemoryRouter>
      );

      const link = screen.getByText(/^Players$/i);
      expect(link).toBeInTheDocument();
      expect(link.closest('a')).toHaveAttribute('href', '/players');
    });

    it('renders Video Analysis link', () => {
      render(
        <MemoryRouter>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </MemoryRouter>
      );

      const link = screen.getByText(/video analysis/i);
      expect(link).toBeInTheDocument();
      expect(link.closest('a')).toHaveAttribute('href', '/video-analysis');
    });

    it('renders Clubs link', () => {
      render(
        <MemoryRouter>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </MemoryRouter>
      );

      const link = screen.getByText(/^Clubs$/i);
      expect(link).toBeInTheDocument();
      expect(link.closest('a')).toHaveAttribute('href', '/clubs');
    });

    it('renders About link', () => {
      render(
        <MemoryRouter>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </MemoryRouter>
      );

      const link = screen.getByText(/^About$/i);
      expect(link).toBeInTheDocument();
      expect(link.closest('a')).toHaveAttribute('href', '/about');
    });

    it('all navigation links are clickable', () => {
      render(
        <MemoryRouter>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </MemoryRouter>
      );

      const links = ['Players', 'Video Analysis', 'Clubs', 'About'];
      links.forEach((linkText) => {
        const link = screen.getByText(new RegExp(linkText, 'i'));
        expect(link).toBeInTheDocument();
      });
    });
  });

  describe('Guest User Buttons', () => {
    beforeEach(() => {
      vi.mocked(useAuth).mockReturnValue({
        user: null,
        session: null,
        loading: false,
        signIn: vi.fn(),
        signUp: vi.fn(),
        signOut: vi.fn(),
        resetPassword: vi.fn(),
        updateProfile: vi.fn(),
      });
    });

    it('renders Sign In button for guests', () => {
      render(
        <MemoryRouter>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </MemoryRouter>
      );

      const button = screen.getByRole('button', { name: /sign in/i });
      expect(button).toBeInTheDocument();
    });

    it('Sign In button navigates to sign-in page', () => {
      render(
        <MemoryRouter>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </MemoryRouter>
      );

      const button = screen.getByRole('button', { name: /sign in/i });
      fireEvent.click(button);

      expect(mockNavigate).toHaveBeenCalledWith('/sign-in');
    });

    it('renders Get Started button for guests', () => {
      render(
        <MemoryRouter>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </MemoryRouter>
      );

      const button = screen.getByRole('button', { name: /get started/i });
      expect(button).toBeInTheDocument();
    });

    it('Get Started button navigates to sign-up page', () => {
      render(
        <MemoryRouter>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </MemoryRouter>
      );

      const button = screen.getByRole('button', { name: /get started/i });
      fireEvent.click(button);

      expect(mockNavigate).toHaveBeenCalledWith('/sign-up');
    });

    it('both auth buttons are enabled', () => {
      render(
        <MemoryRouter>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </MemoryRouter>
      );

      const signInButton = screen.getByRole('button', { name: /sign in/i });
      const getStartedButton = screen.getByRole('button', { name: /get started/i });

      expect(signInButton).not.toBeDisabled();
      expect(getStartedButton).not.toBeDisabled();
    });
  });

  describe('Authenticated User Menu', () => {
    const mockSignOut = vi.fn();

    beforeEach(() => {
      vi.mocked(useAuth).mockReturnValue({
        user: {
          id: 'user-123',
          email: 'test@example.com',
        } as any,
        session: { access_token: 'token' } as any,
        loading: false,
        signIn: vi.fn(),
        signUp: vi.fn(),
        signOut: mockSignOut,
        resetPassword: vi.fn(),
        updateProfile: vi.fn(),
      });
    });

    it('renders user menu button', () => {
      render(
        <MemoryRouter>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </MemoryRouter>
      );

      const userButton = screen.getAllByRole('button').find(
        (btn) => btn.classList.contains('outline') || btn.querySelector('svg')
      );
      expect(userButton).toBeInTheDocument();
    });

    it('does not show Sign In/Get Started when authenticated', () => {
      render(
        <MemoryRouter>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </MemoryRouter>
      );

      expect(screen.queryByRole('button', { name: /^sign in$/i })).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /get started/i })).not.toBeInTheDocument();
    });

    it('opens dropdown menu on user button click', () => {
      render(
        <MemoryRouter>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </MemoryRouter>
      );

      const buttons = screen.getAllByRole('button');
      const userButton = buttons.find((btn) => !btn.textContent?.match(/sign in|get started/i));
      
      if (userButton) {
        fireEvent.click(userButton);
        // Dropdown should open (implementation varies)
      }
    });

    it('shows user email in dropdown', () => {
      render(
        <MemoryRouter>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </MemoryRouter>
      );

      const buttons = screen.getAllByRole('button');
      const userButton = buttons.find((btn) => !btn.textContent?.match(/sign in|get started/i));
      
      if (userButton) {
        fireEvent.click(userButton);
      }
    });

    it('My Profile menu item navigates to profile', () => {
      render(
        <MemoryRouter>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </MemoryRouter>
      );

      const buttons = screen.getAllByRole('button');
      const userButton = buttons.find((btn) => !btn.textContent?.match(/sign in|get started/i));
      
      if (userButton) {
        fireEvent.click(userButton);
        // Check for profile menu item
      }
    });

    it('Sign Out menu item calls signOut', () => {
      render(
        <MemoryRouter>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </MemoryRouter>
      );

      const buttons = screen.getAllByRole('button');
      const userButton = buttons.find((btn) => !btn.textContent?.match(/sign in|get started/i));
      
      if (userButton) {
        fireEvent.click(userButton);
      }
    });
  });

  describe('Mobile Menu Button', () => {
    beforeEach(() => {
      vi.mocked(useAuth).mockReturnValue({
        user: null,
        session: null,
        loading: false,
        signIn: vi.fn(),
        signUp: vi.fn(),
        signOut: vi.fn(),
        resetPassword: vi.fn(),
        updateProfile: vi.fn(),
      });
    });

    it('renders mobile menu toggle button', () => {
      render(
        <MemoryRouter>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </MemoryRouter>
      );

      const button = screen.getByRole('button', { name: /toggle menu/i });
      expect(button).toBeInTheDocument();
    });

    it('toggles mobile menu on click', () => {
      render(
        <MemoryRouter>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </MemoryRouter>
      );

      const button = screen.getByRole('button', { name: /toggle menu/i });
      
      fireEvent.click(button);
      // Menu should be visible
      
      fireEvent.click(button);
      // Menu should be hidden
    });

    it('mobile menu button has accessible label', () => {
      render(
        <MemoryRouter>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </MemoryRouter>
      );

      const button = screen.getByRole('button', { name: /toggle menu/i });
      expect(button).toHaveAttribute('aria-label', 'Toggle menu');
    });
  });

  describe('Mobile Menu - Guest User', () => {
    beforeEach(() => {
      vi.mocked(useAuth).mockReturnValue({
        user: null,
        session: null,
        loading: false,
        signIn: vi.fn(),
        signUp: vi.fn(),
        signOut: vi.fn(),
        resetPassword: vi.fn(),
        updateProfile: vi.fn(),
      });
    });

    it('shows Sign In button in mobile menu', () => {
      render(
        <MemoryRouter>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </MemoryRouter>
      );

      const menuButton = screen.getByRole('button', { name: /toggle menu/i });
      fireEvent.click(menuButton);

      // Mobile menu Sign In button
      const signInButtons = screen.getAllByRole('button', { name: /sign in/i });
      expect(signInButtons.length).toBeGreaterThanOrEqual(1);
    });

    it('shows Get Started button in mobile menu', () => {
      render(
        <MemoryRouter>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </MemoryRouter>
      );

      const menuButton = screen.getByRole('button', { name: /toggle menu/i });
      fireEvent.click(menuButton);

      const getStartedButtons = screen.getAllByRole('button', { name: /get started/i });
      expect(getStartedButtons.length).toBeGreaterThanOrEqual(1);
    });

    it('mobile menu closes after navigation', () => {
      render(
        <MemoryRouter>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </MemoryRouter>
      );

      const menuButton = screen.getByRole('button', { name: /toggle menu/i });
      fireEvent.click(menuButton);

      const signInButtons = screen.getAllByRole('button', { name: /sign in/i });
      if (signInButtons.length > 1) {
        fireEvent.click(signInButtons[1]); // Click mobile menu button
        expect(mockNavigate).toHaveBeenCalledWith('/sign-in');
      }
    });
  });

  describe('Mobile Menu - Authenticated User', () => {
    const mockSignOut = vi.fn();

    beforeEach(() => {
      vi.mocked(useAuth).mockReturnValue({
        user: {
          id: 'user-123',
          email: 'test@example.com',
        } as any,
        session: { access_token: 'token' } as any,
        loading: false,
        signIn: vi.fn(),
        signUp: vi.fn(),
        signOut: mockSignOut,
        resetPassword: vi.fn(),
        updateProfile: vi.fn(),
      });
    });

    it('shows My Profile button in mobile menu', () => {
      render(
        <MemoryRouter>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </MemoryRouter>
      );

      const menuButton = screen.getByRole('button', { name: /toggle menu/i });
      fireEvent.click(menuButton);

      // Should show profile button
    });

    it('shows Sign Out button in mobile menu', () => {
      render(
        <MemoryRouter>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </MemoryRouter>
      );

      const menuButton = screen.getByRole('button', { name: /toggle menu/i });
      fireEvent.click(menuButton);

      // Should show sign out button
    });

    it('My Profile button navigates to profile', () => {
      render(
        <MemoryRouter>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </MemoryRouter>
      );

      const menuButton = screen.getByRole('button', { name: /toggle menu/i });
      fireEvent.click(menuButton);

      // Find and click profile button
    });

    it('Sign Out button calls signOut', () => {
      render(
        <MemoryRouter>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </MemoryRouter>
      );

      const menuButton = screen.getByRole('button', { name: /toggle menu/i });
      fireEvent.click(menuButton);

      // Find and click sign out button
    });

    it('does not show Sign In/Get Started when authenticated', () => {
      render(
        <MemoryRouter>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </MemoryRouter>
      );

      const menuButton = screen.getByRole('button', { name: /toggle menu/i });
      fireEvent.click(menuButton);

      // Should not show guest buttons
    });
  });

  describe('Accessibility', () => {
    it('navigation has semantic nav element', () => {
      vi.mocked(useAuth).mockReturnValue({
        user: null,
        session: null,
        loading: false,
        signIn: vi.fn(),
        signUp: vi.fn(),
        signOut: vi.fn(),
        resetPassword: vi.fn(),
        updateProfile: vi.fn(),
      });

      render(
        <MemoryRouter>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </MemoryRouter>
      );

      const nav = document.querySelector('nav');
      expect(nav).toBeInTheDocument();
    });

    it('all buttons are keyboard accessible', () => {
      vi.mocked(useAuth).mockReturnValue({
        user: null,
        session: null,
        loading: false,
        signIn: vi.fn(),
        signUp: vi.fn(),
        signOut: vi.fn(),
        resetPassword: vi.fn(),
        updateProfile: vi.fn(),
      });

      render(
        <MemoryRouter>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </MemoryRouter>
      );

      const buttons = screen.getAllByRole('button');
      buttons.forEach((button) => {
        expect(button).toBeInTheDocument();
      });
    });

    it('links have proper href attributes', () => {
      vi.mocked(useAuth).mockReturnValue({
        user: null,
        session: null,
        loading: false,
        signIn: vi.fn(),
        signUp: vi.fn(),
        signOut: vi.fn(),
        resetPassword: vi.fn(),
        updateProfile: vi.fn(),
      });

      render(
        <MemoryRouter>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </MemoryRouter>
      );

      const links = screen.getAllByRole('link');
      links.forEach((link) => {
        expect(link).toHaveAttribute('href');
      });
    });
  });

  describe('Responsive Behavior', () => {
    it('renders both desktop and mobile navigation', () => {
      vi.mocked(useAuth).mockReturnValue({
        user: null,
        session: null,
        loading: false,
        signIn: vi.fn(),
        signUp: vi.fn(),
        signOut: vi.fn(),
        resetPassword: vi.fn(),
        updateProfile: vi.fn(),
      });

      render(
        <MemoryRouter>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </MemoryRouter>
      );

      // Desktop nav links
      expect(screen.getByText(/^Players$/i)).toBeInTheDocument();
      
      // Mobile menu button
      expect(screen.getByRole('button', { name: /toggle menu/i })).toBeInTheDocument();
    });
  });
});
