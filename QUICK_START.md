# Quick Start - Backend Deployment

## Prerequisites
- Supabase CLI installed: `npm install -g supabase`
- Supabase account and project created
- LOVABLE_API_KEY obtained

## 1-Minute Deploy

### Step 1: Login
```bash
supabase login
```

### Step 2: Link Project
```bash
supabase link --project-ref iizdsoqzntkloqqrnerj
```

### Step 3: Deploy Database
```bash
supabase db push
```

### Step 4: Deploy Functions
```bash
supabase functions deploy analyze-video
supabase functions deploy generate-scouting-report
supabase functions deploy player-club-matching
supabase functions deploy sports-coach-chat
```

### Step 5: Set Secrets
Go to: https://supabase.com/dashboard/project/iizdsoqzntkloqqrnerj/settings/functions

Add secret:
- Key: `LOVABLE_API_KEY`
- Value: `your_lovable_api_key`

## ✅ Done!

Your backend is now live at:
- Video Analysis: `https://iizdsoqzntkloqqrnerj.supabase.co/functions/v1/analyze-video`
- Scouting Report: `https://iizdsoqzntkloqqrnerj.supabase.co/functions/v1/generate-scouting-report`
- Club Matching: `https://iizdsoqzntkloqqrnerj.supabase.co/functions/v1/player-club-matching`
- AI Coach Chat: `https://iizdsoqzntkloqqrnerj.supabase.co/functions/v1/sports-coach-chat`

## Test It

```javascript
const { data } = await supabase.functions.invoke('analyze-video', {
  body: {
    videoUrl: 'https://example.com/video.mp4',
    position: 'CM',
    playerAge: 18
  }
});
```

## Troubleshooting

**"Unauthorized" error?**
- Make sure user is logged in: `supabase.auth.signInWithPassword(...)`
- Check Authorization header is being sent

**"Rate limit exceeded"?**
- Wait 24 hours or check `api_usage` table
- Consider implementing subscription tiers

**Function not found?**
- Re-deploy: `supabase functions deploy <name>`
- Check function logs: `supabase functions logs <name>`

## Security Checklist
- ✅ JWT verification enabled
- ✅ RLS policies active
- ✅ Rate limiting configured
- ✅ Secrets in environment variables
- ⚠️ CORS allows all origins (restrict in production!)

## What's Protected?
- 50 video analyses per day
- 30 scouting reports per day
- 20 club matches per day
- 200 chat messages per day

All per user, resets daily at midnight UTC.

---

Need help? Check `BACKEND_FIXES.md` for detailed documentation.
