-- Disable email confirmation requirement for development
-- This allows users to sign in immediately without email verification
-- To apply this, run: supabase db reset or supabase db push

-- Note: In production, you should enable email confirmation for security
-- You can configure this in the Supabase Dashboard:
-- Authentication > Providers > Email > Confirm email = OFF (for development)

-- This migration doesn't actually change database schema
-- It's a reminder that you need to configure email settings in Supabase Dashboard

-- For development: Go to your Supabase project dashboard
-- 1. Navigate to Authentication > Providers
-- 2. Click on Email
-- 3. Disable "Confirm email" toggle
-- 4. Save changes

-- Alternative: You can also configure this via Supabase CLI config
-- Edit supabase/config.toml and set:
-- [auth.email]
-- enable_signup = true
-- enable_confirmations = false

SELECT 'Email confirmation settings must be configured in Supabase Dashboard or config.toml' as reminder;
