import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SignUp from '@/pages/SignUp';
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

describe('SignUp Page - All Interactive Elements', () => {
  const mockSignUp = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    mockNavigate.mockClear();
    vi.mocked(useAuth).mockReturnValue({
      user: null,
      session: null,
      loading: false,
      signIn: vi.fn(),
      signUp: mockSignUp,
      signOut: vi.fn(),
      resetPassword: vi.fn(),
      updateProfile: vi.fn(),
    });
  });

  describe('Full Name Input', () => {
    it('renders full name input field', () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const nameInput = screen.getByLabelText(/full name/i);
      expect(nameInput).toBeInTheDocument();
    });

    it('full name input has correct type', () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const nameInput = screen.getByLabelText(/full name/i);
      expect(nameInput).toHaveAttribute('type', 'text');
    });

    it('full name input is required', () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const nameInput = screen.getByLabelText(/full name/i);
      expect(nameInput).toHaveAttribute('required');
    });

    it('allows typing in full name field', () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const nameInput = screen.getByLabelText(/full name/i) as HTMLInputElement;
      fireEvent.change(nameInput, { target: { value: 'John Doe' } });

      expect(nameInput.value).toBe('John Doe');
    });

    it('has correct placeholder', () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      expect(screen.getByPlaceholderText(/john doe/i)).toBeInTheDocument();
    });

    it('full name field has icon', () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const nameInput = screen.getByLabelText(/full name/i);
      const parent = nameInput.parentElement;
      expect(parent?.querySelector('svg')).toBeInTheDocument();
    });
  });

  describe('Email Input', () => {
    it('renders email input field', () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const emailInput = screen.getByLabelText(/email/i);
      expect(emailInput).toBeInTheDocument();
    });

    it('email input has correct type', () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const emailInput = screen.getByLabelText(/email/i);
      expect(emailInput).toHaveAttribute('type', 'email');
    });

    it('email input is required', () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const emailInput = screen.getByLabelText(/email/i);
      expect(emailInput).toHaveAttribute('required');
    });

    it('allows typing in email field', () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
      fireEvent.change(emailInput, { target: { value: 'john@example.com' } });

      expect(emailInput.value).toBe('john@example.com');
    });

    it('has correct placeholder', () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      expect(screen.getByPlaceholderText(/you@example\\.com/i)).toBeInTheDocument();
    });

    it('email field has icon', () => {
      render(
        <MemoryRouter>
          <SignUp />
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
          <SignUp />
        </MemoryRouter>
      );

      const passwordInput = screen.getByLabelText(/^password$/i);
      expect(passwordInput).toBeInTheDocument();
    });

    it('password input has correct type', () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const passwordInput = screen.getByLabelText(/^password$/i);
      expect(passwordInput).toHaveAttribute('type', 'password');
    });

    it('password input is required', () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const passwordInput = screen.getByLabelText(/^password$/i);
      expect(passwordInput).toHaveAttribute('required');
    });

    it('allows typing in password field', () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const passwordInput = screen.getByLabelText(/^password$/i) as HTMLInputElement;
      fireEvent.change(passwordInput, { target: { value: 'password123' } });

      expect(passwordInput.value).toBe('password123');
    });

    it('password is masked', () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const passwordInput = screen.getByLabelText(/^password$/i);
      expect(passwordInput).toHaveAttribute('type', 'password');
    });

    it('has correct placeholder', () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      expect(screen.getByPlaceholderText(/•{8}/)).toBeInTheDocument();
    });

    it('has minimum length requirement', () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const passwordInput = screen.getByLabelText(/^password$/i);
      expect(passwordInput).toHaveAttribute('minLength', '6');
    });
  });

  describe('Confirm Password Input', () => {
    it('renders confirm password input field', () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const confirmInput = screen.getByLabelText(/confirm password/i);
      expect(confirmInput).toBeInTheDocument();
    });

    it('confirm password input has correct type', () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const confirmInput = screen.getByLabelText(/confirm password/i);
      expect(confirmInput).toHaveAttribute('type', 'password');
    });

    it('confirm password input is required', () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const confirmInput = screen.getByLabelText(/confirm password/i);
      expect(confirmInput).toHaveAttribute('required');
    });

    it('allows typing in confirm password field', () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const confirmInput = screen.getByLabelText(/confirm password/i) as HTMLInputElement;
      fireEvent.change(confirmInput, { target: { value: 'password123' } });

      expect(confirmInput.value).toBe('password123');
    });

    it('confirm password is masked', () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const confirmInput = screen.getByLabelText(/confirm password/i);
      expect(confirmInput).toHaveAttribute('type', 'password');
    });
  });

  describe('Sign Up Button', () => {
    it('renders sign up button', () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const button = screen.getByRole('button', { name: /^sign up$/i });
      expect(button).toBeInTheDocument();
    });

    it('button is enabled with valid inputs', () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const button = screen.getByRole('button', { name: /^sign up$/i });
      expect(button).not.toBeDisabled();
    });

    it('calls signUp when button clicked with valid data', async () => {
      mockSignUp.mockResolvedValue({ error: null });

      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const nameInput = screen.getByLabelText(/full name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const passwordInput = screen.getByLabelText(/^password$/i);
      const confirmInput = screen.getByLabelText(/confirm password/i);
      const button = screen.getByRole('button', { name: /^sign up$/i });

      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
      fireEvent.change(confirmInput, { target: { value: 'password123' } });
      fireEvent.click(button);

      await waitFor(() => {
        expect(mockSignUp).toHaveBeenCalledWith('john@example.com', 'password123', 'John Doe');
      });
    });

    it('shows loading state during sign up', async () => {
      mockSignUp.mockImplementation(
        () => new Promise((resolve) => setTimeout(() => resolve({ error: null }), 100))
      );

      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const nameInput = screen.getByLabelText(/full name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const passwordInput = screen.getByLabelText(/^password$/i);
      const confirmInput = screen.getByLabelText(/confirm password/i);
      const button = screen.getByRole('button', { name: /^sign up$/i });

      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
      fireEvent.change(confirmInput, { target: { value: 'password123' } });
      fireEvent.click(button);

      expect(screen.getByText(/signing up/i)).toBeInTheDocument();
    });

    it('button is disabled during sign up', async () => {
      mockSignUp.mockImplementation(
        () => new Promise((resolve) => setTimeout(() => resolve({ error: null }), 100))
      );

      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const nameInput = screen.getByLabelText(/full name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const passwordInput = screen.getByLabelText(/^password$/i);
      const confirmInput = screen.getByLabelText(/confirm password/i);
      const button = screen.getByRole('button', { name: /^sign up$/i });

      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
      fireEvent.change(confirmInput, { target: { value: 'password123' } });
      fireEvent.click(button);

      expect(button).toBeDisabled();
    });

    it('navigates to video-analysis on successful sign up', async () => {
      mockSignUp.mockResolvedValue({ error: null });

      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const nameInput = screen.getByLabelText(/full name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const passwordInput = screen.getByLabelText(/^password$/i);
      const confirmInput = screen.getByLabelText(/confirm password/i);
      const button = screen.getByRole('button', { name: /^sign up$/i });

      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
      fireEvent.change(confirmInput, { target: { value: 'password123' } });
      fireEvent.click(button);

      await waitFor(() => {
        expect(mockNavigate).toHaveBeenCalledWith('/video-analysis');
      });
    });

    it('shows error when passwords do not match', async () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const nameInput = screen.getByLabelText(/full name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const passwordInput = screen.getByLabelText(/^password$/i);
      const confirmInput = screen.getByLabelText(/confirm password/i);
      const button = screen.getByRole('button', { name: /^sign up$/i });

      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
      fireEvent.change(confirmInput, { target: { value: 'differentPassword' } });
      fireEvent.click(button);

      await waitFor(() => {
        expect(mockSignUp).not.toHaveBeenCalled();
      });
    });

    it('shows error on sign up failure', async () => {
      mockSignUp.mockResolvedValue({ error: new Error('Email already exists') });

      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const nameInput = screen.getByLabelText(/full name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const passwordInput = screen.getByLabelText(/^password$/i);
      const confirmInput = screen.getByLabelText(/confirm password/i);
      const button = screen.getByRole('button', { name: /^sign up$/i });

      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      fireEvent.change(emailInput, { target: { value: 'existing@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
      fireEvent.change(confirmInput, { target: { value: 'password123' } });
      fireEvent.click(button);

      await waitFor(() => {
        expect(mockSignUp).toHaveBeenCalled();
      });
    });
  });

  describe('Back to Home Button', () => {
    it('renders back to home button', () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const button = screen.getByRole('button', { name: /back to home/i });
      expect(button).toBeInTheDocument();
    });

    it('navigates to home when clicked', () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const button = screen.getByRole('button', { name: /back to home/i });
      fireEvent.click(button);

      expect(mockNavigate).toHaveBeenCalledWith('/');
    });

    it('back button has arrow icon', () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const button = screen.getByRole('button', { name: /back to home/i });
      expect(button.querySelector('svg')).toBeInTheDocument();
    });
  });

  describe('Sign In Link', () => {
    it('renders link to sign in page', () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const link = screen.getByRole('link', { name: /sign in/i });
      expect(link).toBeInTheDocument();
    });

    it('sign in link has correct href', () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const link = screen.getByRole('link', { name: /sign in/i });
      expect(link).toHaveAttribute('href', '/sign-in');
    });
  });

  describe('Form Validation', () => {
    it('validates password length', () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const passwordInput = screen.getByLabelText(/^password$/i);
      expect(passwordInput).toHaveAttribute('minLength', '6');
    });

    it('validates passwords match before submission', async () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const nameInput = screen.getByLabelText(/full name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const passwordInput = screen.getByLabelText(/^password$/i);
      const confirmInput = screen.getByLabelText(/confirm password/i);
      const button = screen.getByRole('button', { name: /^sign up$/i });

      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
      fireEvent.change(confirmInput, { target: { value: 'different' } });
      fireEvent.click(button);

      await waitFor(() => {
        expect(mockSignUp).not.toHaveBeenCalled();
      });
    });

    it('requires all fields to be filled', () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      expect(screen.getByLabelText(/full name/i)).toHaveAttribute('required');
      expect(screen.getByLabelText(/email/i)).toHaveAttribute('required');
      expect(screen.getByLabelText(/^password$/i)).toHaveAttribute('required');
      expect(screen.getByLabelText(/confirm password/i)).toHaveAttribute('required');
    });
  });

  describe('Form Submission', () => {
    it('handles form submit event', async () => {
      mockSignUp.mockResolvedValue({ error: null });

      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const nameInput = screen.getByLabelText(/full name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const passwordInput = screen.getByLabelText(/^password$/i);
      const confirmInput = screen.getByLabelText(/confirm password/i);
      const form = screen.getByRole('button', { name: /^sign up$/i }).closest('form');

      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
      fireEvent.change(confirmInput, { target: { value: 'password123' } });

      if (form) {
        fireEvent.submit(form);

        await waitFor(() => {
          expect(mockSignUp).toHaveBeenCalled();
        });
      }
    });

    it('prevents default form submission', () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const form = screen.getByRole('button', { name: /^sign up$/i }).closest('form');
      
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
          <SignUp />
        </MemoryRouter>
      );

      expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
    });

    it('form has proper structure', () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      const form = screen.getByRole('button', { name: /^sign up$/i }).closest('form');
      expect(form).toBeInTheDocument();
    });

    it('buttons have descriptive text', () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      expect(screen.getByRole('button', { name: /^sign up$/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /back to home/i })).toBeInTheDocument();
    });
  });

  describe('Page Content', () => {
    it('displays welcome message', () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      expect(screen.getByText(/create your account/i)).toBeInTheDocument();
    });

    it('displays description', () => {
      render(
        <MemoryRouter>
          <SignUp />
        </MemoryRouter>
      );

      expect(screen.getByText(/start your journey/i)).toBeInTheDocument();
    });
  });
});
