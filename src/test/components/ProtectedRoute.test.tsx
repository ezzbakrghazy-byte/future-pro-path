import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from '@/components/ProtectedRoute';

// Mock the Auth context
vi.mock('@/contexts/AuthContext', () => ({
  useAuth: vi.fn(),
  AuthProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

import { useAuth } from '@/contexts/AuthContext';

const TestComponent = () => <div>Protected Content</div>;

const renderWithRouter = (isAuthenticated: boolean) => {
  vi.mocked(useAuth).mockReturnValue({
    user: isAuthenticated ? { id: 'test-id', email: 'test@example.com' } as any : null,
    session: isAuthenticated ? { access_token: 'token' } as any : null,
    loading: false,
    signUp: vi.fn(),
    signIn: vi.fn(),
    signOut: vi.fn(),
    resetPassword: vi.fn(),
    updateProfile: vi.fn(),
  });

  return render(
    <MemoryRouter initialEntries={['/protected']}>
      <Routes>
        <Route path="/sign-in" element={<div>Sign In Page</div>} />
        <Route
          path="/protected"
          element={
            <ProtectedRoute>
              <TestComponent />
            </ProtectedRoute>
          }
        />
      </Routes>
    </MemoryRouter>
  );
};

describe('ProtectedRoute Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('redirects to sign in when not authenticated', () => {
    renderWithRouter(false);
    
    expect(screen.getByText('Sign In Page')).toBeInTheDocument();
    expect(screen.queryByText('Protected Content')).not.toBeInTheDocument();
  });

  it('renders children when authenticated', () => {
    renderWithRouter(true);
    
    expect(screen.getByText('Protected Content')).toBeInTheDocument();
    expect(screen.queryByText('Sign In Page')).not.toBeInTheDocument();
  });
});
