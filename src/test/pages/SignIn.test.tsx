import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SignIn from '@/pages/SignIn';
import { supabase } from '@/integrations/supabase/client';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<MemoryRouter>{component}</MemoryRouter>);
};

describe('SignIn Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders sign in form', () => {
    renderWithRouter(<SignIn />);
    
    expect(screen.getByText('Welcome Back')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('your.email@example.com')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('••••••••')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
  });

  it('shows validation errors for empty fields', async () => {
    renderWithRouter(<SignIn />);
    
    const signInButton = screen.getByRole('button', { name: /sign in/i });
    fireEvent.click(signInButton);

    expect(supabase.auth.signInWithPassword).not.toHaveBeenCalled();
  });

  it('successfully signs in with valid credentials', async () => {
    const mockSignIn = vi.mocked(supabase.auth.signInWithPassword);
    mockSignIn.mockResolvedValue({
      data: {
        user: { id: 'test-id', email: 'test@example.com' },
        session: { access_token: 'token', refresh_token: 'refresh' },
      },
      error: null,
    } as any);

    renderWithRouter(<SignIn />);
    
    const emailInput = screen.getByPlaceholderText('your.email@example.com');
    const passwordInput = screen.getByPlaceholderText('••••••••');
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'Test123!' } });

    const signInButton = screen.getByRole('button', { name: /sign in/i });
    fireEvent.click(signInButton);

    await waitFor(() => {
      expect(mockSignIn).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'Test123!',
      });
    });
  });

  it('displays error message on sign in failure', async () => {
    const mockSignIn = vi.mocked(supabase.auth.signInWithPassword);
    mockSignIn.mockResolvedValue({
      data: { user: null, session: null },
      error: { message: 'Invalid credentials', name: 'AuthError', status: 401 },
    } as any);

    renderWithRouter(<SignIn />);
    
    const emailInput = screen.getByPlaceholderText('your.email@example.com');
    const passwordInput = screen.getByPlaceholderText('••••••••');
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'WrongPassword' } });

    const signInButton = screen.getByRole('button', { name: /sign in/i });
    fireEvent.click(signInButton);

    await waitFor(() => {
      expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument();
    });
  });

  it('shows loading state during sign in', async () => {
    const mockSignIn = vi.mocked(supabase.auth.signInWithPassword);
    mockSignIn.mockImplementation(() => new Promise(() => {}));

    renderWithRouter(<SignIn />);
    
    const emailInput = screen.getByPlaceholderText('your.email@example.com');
    const passwordInput = screen.getByPlaceholderText('••••••••');
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'Test123!' } });

    const signInButton = screen.getByRole('button', { name: /sign in/i });
    fireEvent.click(signInButton);

    await waitFor(() => {
      expect(screen.getByText(/signing in/i)).toBeInTheDocument();
    });
  });

  it('has link to sign up page', () => {
    renderWithRouter(<SignIn />);
    
    const signUpLink = screen.getByText(/sign up/i);
    expect(signUpLink).toBeInTheDocument();
    expect(signUpLink.closest('a')).toHaveAttribute('href', '/signup');
  });

  it('has back to home button', () => {
    renderWithRouter(<SignIn />);
    
    const backButton = screen.getByRole('button', { name: /back to home/i });
    expect(backButton).toBeInTheDocument();
  });
});
