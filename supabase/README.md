# Future Pro Path - Backend Documentation

## Overview
Secure, production-ready backend built on Supabase Edge Functions with PostgreSQL database.

## 🔒 Security Features

### Authentication
- **JWT Verification Enabled**: All endpoints require valid authentication tokens
- **Row Level Security (RLS)**: Database policies ensure users can only access their own data
- **Rate Limiting**: Protects against abuse with per-endpoint limits

### API Rate Limits
- `analyze-video`: 50 requests per day per user
- `generate-scouting-report`: 30 requests per day per user
- `player-club-matching`: 20 requests per day per user
- `sports-coach-chat`: 200 messages per day per user

## 📊 Database Schema

### Tables

#### `players`
Stores player profile information.
```sql
- id: UUID (primary key)
- user_id: UUID (references auth.users)
- name, age, height_cm, position, nationality
- secondary_positions: TEXT[]
- created_at, updated_at
```

#### `video_analyses`
Stores video analysis results with AI-generated insights.
```sql
- id: UUID (primary key)
- player_id: UUID (references players)
- user_id: UUID (references auth.users)
- video_url, file_name, position
- overall_score, potential_rating
- analysis_data: JSONB (full analysis)
- highlights: JSONB (frame-by-frame)
```

#### `scouting_reports`
Professional scouting reports generated from analyses.
```sql
- id: UUID (primary key)
- player_id, video_analysis_id, user_id
- report_data: JSONB (full report)
- scout_classification (A+/A/B/etc)
- recommendation_action
```

#### `clubs`
Football clubs available for player matching.
```sql
- id: UUID (primary key)
- name, league, level, location, country
- playing_style: TEXT[]
- positions_needed: TEXT[]
- age_preference, reputation
- verified: BOOLEAN
```

#### `club_matches`
Player-to-club matching results.
```sql
- id: UUID (primary key)
- player_id, club_id, video_analysis_id
- match_score, match_grade
- matching_data: JSONB
- status (pending/contacted/interested/rejected)
```

#### `chat_messages`
AI coach chat history.
```sql
- id: UUID (primary key)
- user_id, player_id
- role (user/assistant/system)
- content, intent
```

#### `api_usage`
Tracks API usage for rate limiting.
```sql
- id: UUID (primary key)
- user_id, endpoint
- request_count, last_request_at
```

## 🔧 Edge Functions

### 1. `analyze-video`
Analyzes football video footage using AI.

**Endpoint**: `/functions/v1/analyze-video`

**Request**:
```json
{
  "videoUrl": "https://...",
  "position": "CM",
  "fileName": "match.mp4",
  "playerAge": 18,
  "playerHeight": 175,
  "playerId": "uuid" // optional
}
```

**Response**:
```json
{
  "analysis": {
    "overall_score": 75,
    "potential_rating": 82,
    "technical_skills": { ... },
    "physical_metrics": { ... },
    "tactical_awareness": { ... },
    "events_detected": { ... },
    "strengths": [...],
    "weaknesses": [...],
    "training_recommendations": [...]
  },
  "highlights": [...],
  "analysis_id": "uuid"
}
```

### 2. `generate-scouting-report`
Generates professional scouting reports.

**Endpoint**: `/functions/v1/generate-scouting-report`

**Request**:
```json
{
  "playerData": { ... },
  "analysisData": { ... },
  "videoAnalysisId": "uuid", // optional
  "playerId": "uuid" // optional
}
```

**Response**:
```json
{
  "report": {
    "scout_classification": "A",
    "executive_summary": "...",
    "technical_assessment": { ... },
    "recommendation": {
      "action": "Sign Immediately",
      "confidence": "High"
    }
  },
  "report_id": "uuid"
}
```

### 3. `player-club-matching`
Matches players with suitable clubs.

**Endpoint**: `/functions/v1/player-club-matching`

**Request**:
```json
{
  "playerProfile": { ... },
  "analysisData": { ... },
  "preferences": { ... },
  "playerId": "uuid", // optional
  "videoAnalysisId": "uuid" // optional
}
```

**Response**:
```json
{
  "matches": [
    {
      "club_id": "uuid",
      "club_name": "Elite Academy FC",
      "match_score": 87,
      "match_grade": "A",
      "reasons": [...],
      "club_details": { ... }
    }
  ],
  "top_recommendation": { ... }
}
```

### 4. `sports-coach-chat`
AI coaching chat with streaming responses.

**Endpoint**: `/functions/v1/sports-coach-chat`

**Request**:
```json
{
  "messages": [
    { "role": "user", "content": "How can I improve my passing?" }
  ],
  "intent": "improvement", // pitch/evaluation/improvement/profile/general
  "playerId": "uuid" // optional
}
```

**Response**: Server-Sent Events (SSE) stream

## 🚀 Deployment

### 1. Set Up Environment Variables

In your Supabase project dashboard, set:
```
LOVABLE_API_KEY=your_lovable_api_key
```

### 2. Run Database Migration

```bash
# Connect to Supabase
supabase link --project-ref iizdsoqzntkloqqrnerj

# Run migration
supabase db push
```

### 3. Deploy Edge Functions

```bash
# Deploy all functions
supabase functions deploy analyze-video
supabase functions deploy generate-scouting-report
supabase functions deploy player-club-matching
supabase functions deploy sports-coach-chat
```

## 📝 Usage Example

### Frontend Integration

```typescript
import { supabase } from '@/integrations/supabase/client';

// Analyze video
const { data, error } = await supabase.functions.invoke('analyze-video', {
  body: {
    videoUrl: 'https://...',
    position: 'CM',
    playerAge: 18
  }
});

// Generate scouting report
const { data: report } = await supabase.functions.invoke('generate-scouting-report', {
  body: {
    playerData: { ... },
    analysisData: data.analysis
  }
});

// Match with clubs
const { data: matches } = await supabase.functions.invoke('player-club-matching', {
  body: {
    playerProfile: { ... },
    analysisData: data.analysis
  }
});

// Chat with AI coach (streaming)
const response = await supabase.functions.invoke('sports-coach-chat', {
  body: {
    messages: [{ role: 'user', content: 'Help me improve' }],
    intent: 'improvement'
  }
});
```

## 🛡️ Error Handling

All functions return consistent error responses:

```json
{
  "error": "Error message",
  "details": "Additional context"
}
```

**Common Status Codes**:
- `200`: Success
- `400`: Bad request (validation failed)
- `401`: Unauthorized (missing/invalid auth)
- `429`: Rate limit exceeded
- `500`: Server error

## 🔍 Monitoring

Check function logs:
```bash
supabase functions logs analyze-video
```

View API usage:
```sql
SELECT * FROM api_usage 
WHERE user_id = 'user-uuid' 
ORDER BY created_at DESC;
```

## 🐛 Troubleshooting

### "Unauthorized" errors
- Ensure user is logged in: `supabase.auth.getUser()`
- Check JWT token is being sent in Authorization header

### Rate limit issues
- Check current usage in `api_usage` table
- Limits reset daily at midnight UTC

### AI errors (429, 402)
- 429: Lovable API rate limit - retry later
- 402: AI credits depleted - add credits

## 📈 Performance Tips

1. **Batch operations**: Analyze multiple videos in sequence, not parallel
2. **Cache results**: Store analysis results in database for reuse
3. **Optimize queries**: Use indexes for fast lookups
4. **Monitor costs**: Track AI API usage to control expenses

## 🔐 Security Best Practices

1. ✅ JWT verification enabled on all functions
2. ✅ RLS policies enforce data isolation
3. ✅ Rate limiting prevents abuse
4. ✅ Input validation on all endpoints
5. ✅ Sensitive data in environment variables
6. ✅ HTTPS only (enforced by Supabase)

## 📞 Support

For issues:
1. Check function logs
2. Verify database migrations applied
3. Ensure environment variables set
4. Check Supabase project status

---

**Version**: 1.0.0  
**Last Updated**: December 5, 2025
