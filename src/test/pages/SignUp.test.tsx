import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SignUp from '@/pages/SignUp';
import { supabase } from '@/integrations/supabase/client';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<MemoryRouter>{component}</MemoryRouter>);
};

describe('SignUp Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders sign up form', () => {
    renderWithRouter(<SignUp />);
    
    expect(screen.getByText('Create Your Account')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('John Doe')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('your.email@example.com')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('••••••••')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument();
  });

  it('shows validation errors for empty fields', async () => {
    renderWithRouter(<SignUp />);
    
    const signUpButton = screen.getByRole('button', { name: /sign up/i });
    fireEvent.click(signUpButton);

    // Form should not submit with empty fields
    expect(supabase.auth.signUp).not.toHaveBeenCalled();
  });

  it('shows validation error for invalid email', async () => {
    renderWithRouter(<SignUp />);
    
    const emailInput = screen.getByPlaceholderText('your.email@example.com');
    const passwordInput = screen.getByPlaceholderText('••••••••');
    const nameInput = screen.getByPlaceholderText('John Doe');
    
    fireEvent.change(nameInput, { target: { value: 'Test User' } });
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.change(passwordInput, { target: { value: 'Test123!' } });

    const signUpButton = screen.getByRole('button', { name: /sign up/i });
    fireEvent.click(signUpButton);

    expect(supabase.auth.signUp).not.toHaveBeenCalled();
  });

  it('shows validation error for short password', async () => {
    renderWithRouter(<SignUp />);
    
    const emailInput = screen.getByPlaceholderText('your.email@example.com');
    const passwordInput = screen.getByPlaceholderText('••••••••');
    const nameInput = screen.getByPlaceholderText('John Doe');
    
    fireEvent.change(nameInput, { target: { value: 'Test User' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: '123' } });

    const signUpButton = screen.getByRole('button', { name: /sign up/i });
    fireEvent.click(signUpButton);

    await waitFor(() => {
      expect(screen.getByText(/password must be at least 6 characters/i)).toBeInTheDocument();
    });
  });

  it('successfully signs up with valid credentials', async () => {
    const mockSignUp = vi.mocked(supabase.auth.signUp);
    mockSignUp.mockResolvedValue({
      data: {
        user: { id: 'test-id', email: 'test@example.com' },
        session: null,
      },
      error: null,
    } as any);

    renderWithRouter(<SignUp />);
    
    const nameInput = screen.getByPlaceholderText('John Doe');
    const emailInput = screen.getByPlaceholderText('your.email@example.com');
    const passwordInput = screen.getByPlaceholderText('••••••••');
    
    fireEvent.change(nameInput, { target: { value: 'Test User' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'Test123!' } });

    const signUpButton = screen.getByRole('button', { name: /sign up/i });
    fireEvent.click(signUpButton);

    await waitFor(() => {
      expect(mockSignUp).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'Test123!',
        options: {
          data: {
            name: 'Test User',
          },
        },
      });
    });
  });

  it('displays error message on sign up failure', async () => {
    const mockSignUp = vi.mocked(supabase.auth.signUp);
    mockSignUp.mockResolvedValue({
      data: { user: null, session: null },
      error: { message: 'Email already registered', name: 'AuthError', status: 400 },
    } as any);

    renderWithRouter(<SignUp />);
    
    const nameInput = screen.getByPlaceholderText('John Doe');
    const emailInput = screen.getByPlaceholderText('your.email@example.com');
    const passwordInput = screen.getByPlaceholderText('••••••••');
    
    fireEvent.change(nameInput, { target: { value: 'Test User' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'Test123!' } });

    const signUpButton = screen.getByRole('button', { name: /sign up/i });
    fireEvent.click(signUpButton);

    await waitFor(() => {
      expect(screen.getByText(/email already registered/i)).toBeInTheDocument();
    });
  });

  it('shows loading state during sign up', async () => {
    const mockSignUp = vi.mocked(supabase.auth.signUp);
    mockSignUp.mockImplementation(() => new Promise(() => {})); // Never resolves

    renderWithRouter(<SignUp />);
    
    const nameInput = screen.getByPlaceholderText('John Doe');
    const emailInput = screen.getByPlaceholderText('your.email@example.com');
    const passwordInput = screen.getByPlaceholderText('••••••••');
    
    fireEvent.change(nameInput, { target: { value: 'Test User' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'Test123!' } });

    const signUpButton = screen.getByRole('button', { name: /sign up/i });
    fireEvent.click(signUpButton);

    await waitFor(() => {
      expect(screen.getByText(/creating account/i)).toBeInTheDocument();
    });
  });

  it('has link to sign in page', () => {
    renderWithRouter(<SignUp />);
    
    const signInLink = screen.getByText(/sign in/i);
    expect(signInLink).toBeInTheDocument();
    expect(signInLink.closest('a')).toHaveAttribute('href', '/signin');
  });

  it('has back to home button', () => {
    renderWithRouter(<SignUp />);
    
    const backButton = screen.getByRole('button', { name: /back to home/i });
    expect(backButton).toBeInTheDocument();
  });
});
