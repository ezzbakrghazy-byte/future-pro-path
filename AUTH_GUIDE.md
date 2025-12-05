# User Authentication Guide

## Overview
The application uses **Supabase Authentication** for secure user management, providing email/password authentication, session management, and user profile functionality.

## Features Implemented

### ✅ Core Authentication
1. **Sign Up** - New user registration with email verification
2. **Sign In** - Secure login with email and password
3. **Sign Out** - Logout with session cleanup
4. **Password Reset** - Email-based password recovery
5. **Protected Routes** - Automatic redirection for unauthenticated users
6. **Session Persistence** - Users stay logged in across browser sessions

### ✅ User Profile Management
1. **View Profile** - Display user information
2. **Update Profile** - Edit name and other metadata
3. **Account Information** - View account creation date, last login, etc.

### ✅ Security Features
- Password validation (minimum 6 characters)
- Email verification required
- Secure session management
- Protected API routes
- Automatic token refresh

## File Structure

```
src/
├── contexts/
│   └── AuthContext.tsx          # Authentication state management
├── pages/
│   ├── SignIn.tsx              # Login page
│   ├── SignUp.tsx              # Registration page
│   └── Profile.tsx             # User profile page
├── components/
│   ├── ProtectedRoute.tsx      # Route protection wrapper
│   └── Navigation.tsx          # Updated with auth menu
└── App.tsx                     # Routes configuration
```

## Authentication Context API

### Available Methods

```typescript
const { 
  user,              // Current user object or null
  session,           // Current session or null
  loading,           // Loading state (true during initialization)
  signIn,            // Sign in with email/password
  signUp,            // Register new user
  signOut,           // Log out user
  resetPassword,     // Send password reset email
  updateProfile      // Update user metadata
} = useAuth();
```

### Usage Examples

#### 1. Sign In
```typescript
const { signIn } = useAuth();

const handleLogin = async () => {
  const { error } = await signIn(email, password);
  if (error) {
    console.error('Login failed:', error.message);
  } else {
    console.log('Login successful!');
  }
};
```

#### 2. Sign Up
```typescript
const { signUp } = useAuth();

const handleRegister = async () => {
  const { error } = await signUp(email, password, fullName);
  if (error) {
    console.error('Registration failed:', error.message);
  } else {
    console.log('Account created! Check email for verification.');
  }
};
```

#### 3. Sign Out
```typescript
const { signOut } = useAuth();

const handleLogout = async () => {
  await signOut(); // Automatically redirects to home page
};
```

#### 4. Reset Password
```typescript
const { resetPassword } = useAuth();

const handleForgotPassword = async () => {
  const { error } = await resetPassword(email);
  if (error) {
    console.error('Failed to send reset email:', error.message);
  } else {
    console.log('Password reset email sent!');
  }
};
```

#### 5. Update Profile
```typescript
const { updateProfile } = useAuth();

const handleUpdateProfile = async () => {
  const { error } = await updateProfile({ 
    full_name: 'New Name',
    avatar_url: 'https://example.com/avatar.jpg'
  });
  if (error) {
    console.error('Update failed:', error.message);
  } else {
    console.log('Profile updated!');
  }
};
```

#### 6. Check Authentication Status
```typescript
const { user, loading } = useAuth();

if (loading) {
  return <LoadingSpinner />;
}

if (!user) {
  return <SignInPrompt />;
}

return <AuthenticatedContent />;
```

## Protected Routes

Use the `ProtectedRoute` component to restrict access to authenticated users only:

```typescript
<Route
  path="/protected-page"
  element={
    <ProtectedRoute>
      <YourProtectedComponent />
    </ProtectedRoute>
  }
/>
```

If a user tries to access a protected route while not authenticated, they will be automatically redirected to `/sign-in`.

## Pages

### Sign In Page (`/sign-in`)
- Email and password input
- "Forgot password?" link
- Validation and error handling
- Loading states
- Link to sign up page

### Sign Up Page (`/sign-up`)
- Full name input
- Email and password input
- Password confirmation
- Validation (email format, password length, password match)
- Email verification notice
- Link to sign in page

### Profile Page (`/profile`)
- Display user email (read-only)
- Edit full name
- View account information (creation date, last sign in)
- Save changes button
- Loading states

## Navigation Integration

The Navigation component now includes:
- **Desktop**: User dropdown menu with profile and sign out options
- **Mobile**: Profile and sign out buttons in mobile menu
- **Guest Users**: Sign In and Get Started buttons

## Form Validation

### Sign In
- Email: Required, valid email format
- Password: Required

### Sign Up
- Full Name: Required
- Email: Required, valid email format
- Password: Required, minimum 6 characters
- Confirm Password: Must match password

## Error Handling

All authentication methods return errors in a consistent format:
```typescript
const { error } = await authMethod();
if (error) {
  // error.message contains user-friendly error description
  toast.error(error.message);
}
```

Common error messages:
- "Invalid login credentials"
- "User already registered"
- "Email not confirmed"
- "Password should be at least 6 characters"

## Email Verification

When a new user signs up:
1. Account is created in Supabase
2. Verification email is sent automatically
3. User must click the link in the email to verify
4. After verification, user can sign in

**Note**: In development, check Supabase dashboard for verification links if email delivery is not configured.

## Session Management

- Sessions are automatically persisted in localStorage
- Tokens are automatically refreshed before expiration
- `onAuthStateChange` listener updates auth state in real-time
- Sign out clears all session data and redirects to home

## Security Best Practices Implemented

1. ✅ Passwords never stored in plain text (handled by Supabase)
2. ✅ Email verification required for new accounts
3. ✅ Secure password reset flow
4. ✅ Session tokens automatically expire
5. ✅ Protected routes prevent unauthorized access
6. ✅ HTTPS enforced in production
7. ✅ Client-side validation + server-side validation

## Testing Authentication

### Manual Testing Steps

1. **Sign Up Flow**:
   - Navigate to `/sign-up`
   - Fill in all fields
   - Submit form
   - Check email for verification link
   - Click verification link
   - Sign in with credentials

2. **Sign In Flow**:
   - Navigate to `/sign-in`
   - Enter email and password
   - Submit form
   - Should redirect to `/video-analysis`

3. **Protected Routes**:
   - Sign out
   - Try accessing `/video-analysis`
   - Should redirect to `/sign-in`

4. **Profile Management**:
   - Sign in
   - Navigate to `/profile`
   - Update full name
   - Save changes
   - Verify update persists

5. **Password Reset**:
   - Go to `/sign-in`
   - Click "Forgot password?"
   - Enter email
   - Check email for reset link
   - Follow link to reset password

## Troubleshooting

### Issue: Email verification not received
**Solution**: Check Supabase dashboard → Authentication → Email Templates. In development, verification links appear in the Supabase logs.

### Issue: "Email not confirmed" error
**Solution**: User must click verification link in email before signing in.

### Issue: Session expires quickly
**Solution**: Check Supabase project settings → Authentication → JWT expiry time.

### Issue: Redirect loop after sign in
**Solution**: Ensure `ProtectedRoute` component properly checks loading state before redirecting.

## Future Enhancements

Potential additions:
- [ ] Social authentication (Google, GitHub, etc.)
- [ ] Two-factor authentication (2FA)
- [ ] Role-based access control (RBAC)
- [ ] User avatar upload
- [ ] Account deletion
- [ ] Email change functionality
- [ ] Password strength indicator
- [ ] Remember me checkbox
- [ ] Sign in with magic link (passwordless)

## Supabase Configuration

Ensure your Supabase project has:
1. Email authentication enabled
2. Email templates configured
3. Site URL set correctly
4. Redirect URLs whitelisted

## Environment Variables

Required in `.env`:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

**Last Updated**: December 5, 2024
**Version**: 1.0
**Status**: ✅ Fully Implemented
