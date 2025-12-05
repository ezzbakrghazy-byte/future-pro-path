# Future Pro Path - Deployment Guide

## ✅ Completed Work

### Backend Implementation
- ✅ Secure JWT authentication on all endpoints
- ✅ Complete database schema with 7 tables
- ✅ Row-level security (RLS) policies
- ✅ Rate limiting per user per endpoint
- ✅ Input validation and error handling
- ✅ 4 edge functions with AI integration
- ✅ Shared utilities module (_shared/)
- ✅ Storage bucket setup for video uploads

### Frontend Implementation
- ✅ Sign Up / Sign In pages
- ✅ Auth context with session management
- ✅ Protected routes middleware
- ✅ Navigation with user menu
- ✅ All components connected to backend APIs
- ✅ Hero CTAs linked to auth flow

## 🚀 Deployment Steps

### 1. Deploy Database Schema

```bash
# Navigate to project root
cd "c:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path"

# Install Supabase CLI if not already installed
npm install -g supabase

# Login to Supabase
supabase login

# Link your project (get reference from Supabase dashboard)
supabase link --project-ref YOUR_PROJECT_REF

# Apply migrations (creates all tables, RLS, storage bucket)
supabase db push
```

### 2. Set Environment Variables

In your Supabase Dashboard → Project Settings → Edge Functions:

```bash
# Required for AI features
LOVABLE_API_KEY=your_lovable_api_key_here
```

### 3. Deploy Edge Functions

```bash
# Deploy all functions at once
supabase functions deploy analyze-video
supabase functions deploy generate-scouting-report
supabase functions deploy player-club-matching
supabase functions deploy sports-coach-chat

# Or deploy them all together
supabase functions deploy
```

### 4. Configure Storage Bucket

In Supabase Dashboard → Storage:
- The `videos` bucket should be automatically created by the migration
- Verify public access is enabled
- Check file size limit is set to 100MB

### 5. Update Frontend Environment

Create `.env` file in project root if not exists:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Get these values from: Supabase Dashboard → Project Settings → API

### 6. Build and Deploy Frontend

```bash
# Install dependencies
npm install

# Build for production
npm run build

# The dist/ folder is ready to deploy to any static hosting:
# - Netlify
# - Vercel
# - Cloudflare Pages
# - GitHub Pages
```

## 🧪 Testing Checklist

### Authentication Flow
- [ ] Visit homepage → Click "Join as Player"
- [ ] Sign up with email/password
- [ ] Verify email sent (check Supabase Auth settings)
- [ ] Sign in with credentials
- [ ] User menu appears in navigation
- [ ] Protected routes accessible after sign in
- [ ] Sign out works correctly

### Video Analysis
- [ ] Navigate to Video Analysis page (must be signed in)
- [ ] Upload a video file (MP4, MOV, AVI)
- [ ] Verify video uploads to Supabase Storage
- [ ] Check video analysis results appear
- [ ] Verify data saved to `video_analyses` table

### Scouting Report
- [ ] Click "Generate Report" from analysis results
- [ ] Verify scouting report appears
- [ ] Check data saved to `scouting_reports` table

### Club Matching
- [ ] Navigate to Players page
- [ ] Click "Find Clubs" button
- [ ] Verify 10 European clubs appear with match scores
- [ ] Check data saved to `club_matches` table

### AI Coach Chat
- [ ] Navigate to About page
- [ ] Type a football training question
- [ ] Verify streaming response works
- [ ] Check conversation saved to `chat_messages` table

### Rate Limiting
- [ ] Make 51 video analysis requests in quick succession
- [ ] Verify rate limit error appears (50/day limit)
- [ ] Check `api_usage` table for request tracking

## 📊 Monitoring

### Supabase Dashboard
- **Database**: Monitor table row counts and query performance
- **Auth**: Check user registrations and sessions
- **Storage**: Track video upload sizes
- **Edge Functions**: View logs and error rates
- **API**: Monitor request counts and response times

### Key Metrics
- Active users (Auth → Users)
- Video analyses per day (`video_analyses` table)
- AI API usage (`api_usage` table)
- Storage usage (Storage → Usage)
- Function invocations (Edge Functions → Logs)

## 🔒 Security Notes

### Already Implemented
- JWT verification on all endpoints
- RLS policies restrict data to owning user
- Rate limiting prevents API abuse
- Input validation on all endpoints
- Secure password requirements (min 6 chars)

### Additional Recommendations
1. Enable email verification in Supabase Auth settings
2. Set up custom SMTP for branded emails
3. Configure CORS origins for production domain
4. Enable database backups (automatic in paid plans)
5. Set up monitoring alerts for error rates

## 🐛 Troubleshooting

### "Invalid JWT" errors
- Verify `verify_jwt=true` in config.toml
- Check SUPABASE_ANON_KEY is correct
- Ensure user is signed in

### Video upload fails
- Check `videos` bucket exists
- Verify RLS policies on storage.objects
- Confirm file size under 100MB

### AI features not working
- Verify LOVABLE_API_KEY is set
- Check Edge Function logs for errors
- Confirm API key has credits

### Rate limit too strict
- Edit `_shared/utils.ts` RATE_LIMITS object
- Redeploy affected functions
- Update values in database for existing users

## 📝 Database Schema

### Tables Created
1. **players** - Player profiles (name, position, age, height)
2. **video_analyses** - AI analysis results from uploaded videos
3. **scouting_reports** - Professional scouting reports
4. **clubs** - 10 pre-populated European football clubs
5. **club_matches** - Player-club matching results
6. **chat_messages** - AI coach conversation history
7. **api_usage** - Rate limiting and usage tracking

### Pre-Populated Data
- 10 European clubs (Real Madrid, Barcelona, Bayern Munich, etc.)
- Each with league, country, playing style, tier classification

## 🔗 Important URLs

- **Supabase Dashboard**: https://app.supabase.com
- **Edge Functions Logs**: Dashboard → Edge Functions → Logs
- **Storage Dashboard**: Dashboard → Storage → videos
- **Database Tables**: Dashboard → Table Editor
- **API Docs**: Dashboard → API Docs

## ✨ Next Steps

After successful deployment:

1. **Test all features** using the checklist above
2. **Monitor logs** for the first 24 hours
3. **Gather feedback** from initial users
4. **Optimize** based on usage patterns
5. **Scale** rate limits as needed

## 🎉 You're All Set!

Your Future Pro Path platform is now:
- ✅ Fully authenticated and secure
- ✅ Connected to real database
- ✅ Using AI-powered analysis
- ✅ Ready for real user traffic
- ✅ Monitoring and rate-limited

Happy deploying! ⚽
