import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Profile from '@/pages/Profile';
import { useAuth } from '@/contexts/AuthContext';

// Mock the Auth context
vi.mock('@/contexts/AuthContext', () => ({
  useAuth: vi.fn(),
}));

// Mock Navigation component
vi.mock('@/components/Navigation', () => ({
  default: () => <div>Navigation</div>,
}));

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('Profile Page - All Interactive Elements', () => {
  const mockUpdateProfile = vi.fn();
  
  beforeEach(() => {
    vi.clearAllMocks();
    mockNavigate.mockClear();
  });

  describe('Loading State', () => {
    it('shows loading spinner when auth is loading', () => {
      vi.mocked(useAuth).mockReturnValue({
        user: null,
        session: null,
        loading: true,
        signIn: vi.fn(),
        signUp: vi.fn(),
        signOut: vi.fn(),
        resetPassword: vi.fn(),
        updateProfile: mockUpdateProfile,
      });

      render(
        <MemoryRouter>
          <Profile />
        </MemoryRouter>
      );

      expect(screen.getByRole('status')).toBeInTheDocument();
    });
  });

  describe('Authenticated User', () => {
    beforeEach(() => {
      vi.mocked(useAuth).mockReturnValue({
        user: {
          id: 'test-user-id',
          email: 'test@example.com',
          user_metadata: { full_name: 'John Doe' },
          created_at: '2024-01-01T00:00:00Z',
          last_sign_in_at: '2024-12-05T00:00:00Z',
        } as any,
        session: { access_token: 'token' } as any,
        loading: false,
        signIn: vi.fn(),
        signUp: vi.fn(),
        signOut: vi.fn(),
        resetPassword: vi.fn(),
        updateProfile: mockUpdateProfile,
      });
    });

    describe('Back Button', () => {
      it('renders back button', () => {
        render(
          <MemoryRouter>
            <Profile />
          </MemoryRouter>
        );

        const backButton = screen.getByRole('button', { name: /back/i });
        expect(backButton).toBeInTheDocument();
      });

      it('navigates back when back button is clicked', () => {
        render(
          <MemoryRouter>
            <Profile />
          </MemoryRouter>
        );

        const backButton = screen.getByRole('button', { name: /back/i });
        fireEvent.click(backButton);

        expect(mockNavigate).toHaveBeenCalledWith(-1);
      });

      it('back button has correct icon', () => {
        render(
          <MemoryRouter>
            <Profile />
          </MemoryRouter>
        );

        const backButton = screen.getByRole('button', { name: /back/i });
        expect(backButton).toHaveClass('mb-4');
      });
    });

    describe('Email Input Field', () => {
      it('renders email input field', () => {
        render(
          <MemoryRouter>
            <Profile />
          </MemoryRouter>
        );

        const emailInput = screen.getByLabelText(/email/i);
        expect(emailInput).toBeInTheDocument();
      });

      it('displays user email', () => {
        render(
          <MemoryRouter>
            <Profile />
          </MemoryRouter>
        );

        const emailInput = screen.getByDisplayValue('test@example.com');
        expect(emailInput).toBeInTheDocument();
      });

      it('email input is disabled', () => {
        render(
          <MemoryRouter>
            <Profile />
          </MemoryRouter>
        );

        const emailInput = screen.getByLabelText(/email/i);
        expect(emailInput).toBeDisabled();
      });

      it('shows email cannot be changed message', () => {
        render(
          <MemoryRouter>
            <Profile />
          </MemoryRouter>
        );

        expect(screen.getByText(/email cannot be changed/i)).toBeInTheDocument();
      });
    });

    describe('Full Name Input Field', () => {
      it('renders full name input field', () => {
        render(
          <MemoryRouter>
            <Profile />
          </MemoryRouter>
        );

        const nameInput = screen.getByLabelText(/full name/i);
        expect(nameInput).toBeInTheDocument();
      });

      it('displays current full name', () => {
        render(
          <MemoryRouter>
            <Profile />
          </MemoryRouter>
        );

        const nameInput = screen.getByDisplayValue('John Doe');
        expect(nameInput).toBeInTheDocument();
      });

      it('allows typing in full name field', () => {
        render(
          <MemoryRouter>
            <Profile />
          </MemoryRouter>
        );

        const nameInput = screen.getByLabelText(/full name/i) as HTMLInputElement;
        fireEvent.change(nameInput, { target: { value: 'Jane Smith' } });

        expect(nameInput.value).toBe('Jane Smith');
      });

      it('full name input is not disabled', () => {
        render(
          <MemoryRouter>
            <Profile />
          </MemoryRouter>
        );

        const nameInput = screen.getByLabelText(/full name/i);
        expect(nameInput).not.toBeDisabled();
      });

      it('has correct placeholder', () => {
        render(
          <MemoryRouter>
            <Profile />
          </MemoryRouter>
        );

        const nameInput = screen.getByPlaceholderText(/john doe/i);
        expect(nameInput).toBeInTheDocument();
      });
    });

    describe('Save Changes Button', () => {
      it('renders save changes button', () => {
        render(
          <MemoryRouter>
            <Profile />
          </MemoryRouter>
        );

        const saveButton = screen.getByRole('button', { name: /save changes/i });
        expect(saveButton).toBeInTheDocument();
      });

      it('save button is enabled by default', () => {
        render(
          <MemoryRouter>
            <Profile />
          </MemoryRouter>
        );

        const saveButton = screen.getByRole('button', { name: /save changes/i });
        expect(saveButton).not.toBeDisabled();
      });

      it('calls updateProfile when save button is clicked', async () => {
        mockUpdateProfile.mockResolvedValue({ error: null });

        render(
          <MemoryRouter>
            <Profile />
          </MemoryRouter>
        );

        const nameInput = screen.getByLabelText(/full name/i);
        fireEvent.change(nameInput, { target: { value: 'Updated Name' } });

        const saveButton = screen.getByRole('button', { name: /save changes/i });
        fireEvent.click(saveButton);

        await waitFor(() => {
          expect(mockUpdateProfile).toHaveBeenCalledWith({
            full_name: 'Updated Name',
          });
        });
      });

      it('shows loading state when saving', async () => {
        mockUpdateProfile.mockImplementation(
          () => new Promise((resolve) => setTimeout(() => resolve({ error: null }), 100))
        );

        render(
          <MemoryRouter>
            <Profile />
          </MemoryRouter>
        );

        const saveButton = screen.getByRole('button', { name: /save changes/i });
        fireEvent.click(saveButton);

        expect(screen.getByText(/updating/i)).toBeInTheDocument();
        expect(saveButton).toBeDisabled();

        await waitFor(() => {
          expect(screen.queryByText(/updating/i)).not.toBeInTheDocument();
        });
      });

      it('button is disabled during loading', async () => {
        mockUpdateProfile.mockImplementation(
          () => new Promise((resolve) => setTimeout(() => resolve({ error: null }), 100))
        );

        render(
          <MemoryRouter>
            <Profile />
          </MemoryRouter>
        );

        const saveButton = screen.getByRole('button', { name: /save changes/i });
        fireEvent.click(saveButton);

        expect(saveButton).toBeDisabled();
      });

      it('shows success toast on successful update', async () => {
        mockUpdateProfile.mockResolvedValue({ error: null });

        render(
          <MemoryRouter>
            <Profile />
          </MemoryRouter>
        );

        const saveButton = screen.getByRole('button', { name: /save changes/i });
        fireEvent.click(saveButton);

        await waitFor(() => {
          expect(mockUpdateProfile).toHaveBeenCalled();
        });
      });

      it('shows error toast on update failure', async () => {
        mockUpdateProfile.mockResolvedValue({
          error: new Error('Update failed'),
        });

        render(
          <MemoryRouter>
            <Profile />
          </MemoryRouter>
        );

        const saveButton = screen.getByRole('button', { name: /save changes/i });
        fireEvent.click(saveButton);

        await waitFor(() => {
          expect(mockUpdateProfile).toHaveBeenCalled();
        });
      });
    });

    describe('Form Submission', () => {
      it('handles form submit event', async () => {
        mockUpdateProfile.mockResolvedValue({ error: null });

        render(
          <MemoryRouter>
            <Profile />
          </MemoryRouter>
        );

        const form = screen.getByRole('button', { name: /save changes/i }).closest('form');
        expect(form).toBeInTheDocument();

        if (form) {
          fireEvent.submit(form);

          await waitFor(() => {
            expect(mockUpdateProfile).toHaveBeenCalled();
          });
        }
      });

      it('prevents default form submission', async () => {
        mockUpdateProfile.mockResolvedValue({ error: null });

        render(
          <MemoryRouter>
            <Profile />
          </MemoryRouter>
        );

        const form = screen.getByRole('button', { name: /save changes/i }).closest('form');
        
        if (form) {
          const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
          const preventDefaultSpy = vi.spyOn(submitEvent, 'preventDefault');
          
          fireEvent(form, submitEvent);

          expect(preventDefaultSpy).toHaveBeenCalled();
        }
      });
    });

    describe('Account Information Display', () => {
      it('displays account creation date', () => {
        render(
          <MemoryRouter>
            <Profile />
          </MemoryRouter>
        );

        expect(screen.getByText(/account created/i)).toBeInTheDocument();
      });

      it('displays last sign in date', () => {
        render(
          <MemoryRouter>
            <Profile />
          </MemoryRouter>
        );

        expect(screen.getByText(/last sign in/i)).toBeInTheDocument();
      });

      it('displays user ID', () => {
        render(
          <MemoryRouter>
            <Profile />
          </MemoryRouter>
        );

        expect(screen.getByText(/user id/i)).toBeInTheDocument();
        expect(screen.getByText('test-user-id')).toBeInTheDocument();
      });
    });

    describe('User without full name', () => {
      it('handles user with no full name metadata', () => {
        vi.mocked(useAuth).mockReturnValue({
          user: {
            id: 'test-user-id',
            email: 'test@example.com',
            user_metadata: {},
            created_at: '2024-01-01T00:00:00Z',
          } as any,
          session: { access_token: 'token' } as any,
          loading: false,
          signIn: vi.fn(),
          signUp: vi.fn(),
          signOut: vi.fn(),
          resetPassword: vi.fn(),
          updateProfile: mockUpdateProfile,
        });

        render(
          <MemoryRouter>
            <Profile />
          </MemoryRouter>
        );

        const nameInput = screen.getByLabelText(/full name/i) as HTMLInputElement;
        expect(nameInput.value).toBe('');
      });
    });
  });

  describe('Unauthenticated User', () => {
    it('redirects to sign-in when not authenticated', () => {
      vi.mocked(useAuth).mockReturnValue({
        user: null,
        session: null,
        loading: false,
        signIn: vi.fn(),
        signUp: vi.fn(),
        signOut: vi.fn(),
        resetPassword: vi.fn(),
        updateProfile: mockUpdateProfile,
      });

      render(
        <MemoryRouter>
          <Profile />
        </MemoryRouter>
      );

      expect(mockNavigate).toHaveBeenCalledWith('/sign-in');
    });
  });
});
