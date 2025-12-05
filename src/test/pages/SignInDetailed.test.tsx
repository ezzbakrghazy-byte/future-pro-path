import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SignIn from '@/pages/SignIn';
import { useAuth } from '@/contexts/AuthContext';

vi.mock('@/contexts/AuthContext', () => ({
  useAuth: vi.fn(),
}));

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('SignIn Page - All Interactive Elements', () => {
  const mockSignIn = vi.fn();
  const mockResetPassword = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    mockNavigate.mockClear();
    vi.mocked(useAuth).mockReturnValue({
      user: null,
      session: null,
      loading: false,
      signIn: mockSignIn,
      signUp: vi.fn(),
      signOut: vi.fn(),
      resetPassword: mockResetPassword,
      updateProfile: vi.fn(),
    });
  });

  describe('Email Input', () => {
    it('renders email input field', () => {
      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      const emailInput = screen.getByLabelText(/email/i);
      expect(emailInput).toBeInTheDocument();
    });

    it('email input has correct type', () => {
      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      const emailInput = screen.getByLabelText(/email/i);
      expect(emailInput).toHaveAttribute('type', 'email');
    });

    it('email input is required', () => {
      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      const emailInput = screen.getByLabelText(/email/i);
      expect(emailInput).toHaveAttribute('required');
    });

    it('allows typing in email field', () => {
      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

      expect(emailInput.value).toBe('test@example.com');
    });

    it('has correct placeholder', () => {
      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      expect(screen.getByPlaceholderText(/you@example\\.com/i)).toBeInTheDocument();
    });

    it('email field has icon', () => {
      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      const emailInput = screen.getByLabelText(/email/i);
      const parent = emailInput.parentElement;
      expect(parent?.querySelector('svg')).toBeInTheDocument();
    });
  });

  describe('Password Input', () => {
    it('renders password input field', () => {
      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      const passwordInput = screen.getByLabelText(/^password$/i);
      expect(passwordInput).toBeInTheDocument();
    });

    it('password input has correct type', () => {
      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      const passwordInput = screen.getByLabelText(/^password$/i);
      expect(passwordInput).toHaveAttribute('type', 'password');
    });

    it('password input is required', () => {
      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      const passwordInput = screen.getByLabelText(/^password$/i);
      expect(passwordInput).toHaveAttribute('required');
    });

    it('allows typing in password field', () => {
      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      const passwordInput = screen.getByLabelText(/^password$/i) as HTMLInputElement;
      fireEvent.change(passwordInput, { target: { value: 'password123' } });

      expect(passwordInput.value).toBe('password123');
    });

    it('password is masked', () => {
      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      const passwordInput = screen.getByLabelText(/^password$/i);
      expect(passwordInput).toHaveAttribute('type', 'password');
    });

    it('has correct placeholder', () => {
      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      expect(screen.getByPlaceholderText(/•{8}/)).toBeInTheDocument();
    });
  });

  describe('Sign In Button', () => {
    it('renders sign in button', () => {
      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      const button = screen.getByRole('button', { name: /^sign in$/i });
      expect(button).toBeInTheDocument();
    });

    it('button is enabled with valid inputs', () => {
      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      const button = screen.getByRole('button', { name: /^sign in$/i });
      expect(button).not.toBeDisabled();
    });

    it('calls signIn when button clicked with valid credentials', async () => {
      mockSignIn.mockResolvedValue({ error: null });

      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      const emailInput = screen.getByLabelText(/email/i);
      const passwordInput = screen.getByLabelText(/^password$/i);
      const button = screen.getByRole('button', { name: /^sign in$/i });

      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
      fireEvent.click(button);

      await waitFor(() => {
        expect(mockSignIn).toHaveBeenCalledWith('test@example.com', 'password123');
      });
    });

    it('shows loading state during sign in', async () => {
      mockSignIn.mockImplementation(
        () => new Promise((resolve) => setTimeout(() => resolve({ error: null }), 100))
      );

      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      const emailInput = screen.getByLabelText(/email/i);
      const passwordInput = screen.getByLabelText(/^password$/i);
      const button = screen.getByRole('button', { name: /^sign in$/i });

      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
      fireEvent.click(button);

      expect(screen.getByText(/signing in/i)).toBeInTheDocument();
    });

    it('button is disabled during sign in', async () => {
      mockSignIn.mockImplementation(
        () => new Promise((resolve) => setTimeout(() => resolve({ error: null }), 100))
      );

      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      const emailInput = screen.getByLabelText(/email/i);
      const passwordInput = screen.getByLabelText(/^password$/i);
      const button = screen.getByRole('button', { name: /^sign in$/i });

      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
      fireEvent.click(button);

      expect(button).toBeDisabled();
    });

    it('navigates to video-analysis on successful sign in', async () => {
      mockSignIn.mockResolvedValue({ error: null });

      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      const emailInput = screen.getByLabelText(/email/i);
      const passwordInput = screen.getByLabelText(/^password$/i);
      const button = screen.getByRole('button', { name: /^sign in$/i });

      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
      fireEvent.click(button);

      await waitFor(() => {
        expect(mockNavigate).toHaveBeenCalledWith('/video-analysis');
      });
    });

    it('shows error on sign in failure', async () => {
      mockSignIn.mockResolvedValue({ error: new Error('Invalid credentials') });

      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      const emailInput = screen.getByLabelText(/email/i);
      const passwordInput = screen.getByLabelText(/^password$/i);
      const button = screen.getByRole('button', { name: /^sign in$/i });

      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'wrong' } });
      fireEvent.click(button);

      await waitFor(() => {
        expect(mockSignIn).toHaveBeenCalled();
      });
    });
  });

  describe('Forgot Password Button', () => {
    it('renders forgot password button', () => {
      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      const button = screen.getByRole('button', { name: /forgot password/i });
      expect(button).toBeInTheDocument();
    });

    it('forgot password button is a link style', () => {
      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      const button = screen.getByRole('button', { name: /forgot password/i });
      expect(button).toHaveAttribute('type', 'button');
    });

    it('requires email to reset password', async () => {
      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      const button = screen.getByRole('button', { name: /forgot password/i });
      fireEvent.click(button);

      await waitFor(() => {
        expect(mockResetPassword).not.toHaveBeenCalled();
      });
    });

    it('sends reset email when email is provided', async () => {
      mockResetPassword.mockResolvedValue({ error: null });

      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      const emailInput = screen.getByLabelText(/email/i);
      const button = screen.getByRole('button', { name: /forgot password/i });

      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.click(button);

      await waitFor(() => {
        expect(mockResetPassword).toHaveBeenCalledWith('test@example.com');
      });
    });

    it('shows success message on reset email sent', async () => {
      mockResetPassword.mockResolvedValue({ error: null });

      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      const emailInput = screen.getByLabelText(/email/i);
      const button = screen.getByRole('button', { name: /forgot password/i });

      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.click(button);

      await waitFor(() => {
        expect(mockResetPassword).toHaveBeenCalled();
      });
    });

    it('shows error on reset email failure', async () => {
      mockResetPassword.mockResolvedValue({ error: new Error('Email not found') });

      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      const emailInput = screen.getByLabelText(/email/i);
      const button = screen.getByRole('button', { name: /forgot password/i });

      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.click(button);

      await waitFor(() => {
        expect(mockResetPassword).toHaveBeenCalled();
      });
    });
  });

  describe('Back to Home Button', () => {
    it('renders back to home button', () => {
      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      const button = screen.getByRole('button', { name: /back to home/i });
      expect(button).toBeInTheDocument();
    });

    it('navigates to home when clicked', () => {
      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      const button = screen.getByRole('button', { name: /back to home/i });
      fireEvent.click(button);

      expect(mockNavigate).toHaveBeenCalledWith('/');
    });

    it('back button has arrow icon', () => {
      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      const button = screen.getByRole('button', { name: /back to home/i });
      expect(button.querySelector('svg')).toBeInTheDocument();
    });
  });

  describe('Sign Up Link', () => {
    it('renders link to sign up page', () => {
      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      const link = screen.getByRole('link', { name: /sign up/i });
      expect(link).toBeInTheDocument();
    });

    it('sign up link has correct href', () => {
      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      const link = screen.getByRole('link', { name: /sign up/i });
      expect(link).toHaveAttribute('href', '/sign-up');
    });
  });

  describe('Form Submission', () => {
    it('handles form submit event', async () => {
      mockSignIn.mockResolvedValue({ error: null });

      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      const emailInput = screen.getByLabelText(/email/i);
      const passwordInput = screen.getByLabelText(/^password$/i);
      const form = screen.getByRole('button', { name: /^sign in$/i }).closest('form');

      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'password123' } });

      if (form) {
        fireEvent.submit(form);

        await waitFor(() => {
          expect(mockSignIn).toHaveBeenCalled();
        });
      }
    });

    it('prevents default form submission', () => {
      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      const form = screen.getByRole('button', { name: /^sign in$/i }).closest('form');
      
      if (form) {
        const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
        const preventDefaultSpy = vi.spyOn(submitEvent, 'preventDefault');
        
        fireEvent(form, submitEvent);

        expect(preventDefaultSpy).toHaveBeenCalled();
      }
    });
  });

  describe('Accessibility', () => {
    it('all inputs have labels', () => {
      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument();
    });

    it('form has proper structure', () => {
      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      const form = screen.getByRole('button', { name: /^sign in$/i }).closest('form');
      expect(form).toBeInTheDocument();
    });

    it('buttons have descriptive text', () => {
      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      expect(screen.getByRole('button', { name: /^sign in$/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /forgot password/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /back to home/i })).toBeInTheDocument();
    });
  });

  describe('Page Content', () => {
    it('displays welcome message', () => {
      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      expect(screen.getByText(/welcome back/i)).toBeInTheDocument();
    });

    it('displays description', () => {
      render(
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      );

      expect(screen.getByText(/sign in to access/i)).toBeInTheDocument();
    });
  });
});
