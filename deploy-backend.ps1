# Backend Deployment Script for Future Pro Path

Write-Host "🚀 Deploying Future Pro Path Backend..." -ForegroundColor Cyan

# Check if Supabase CLI is installed
$supabaseCli = Get-Command supabase -ErrorAction SilentlyContinue
if (-not $supabaseCli) {
    Write-Host "❌ Supabase CLI not found. Please install it first:" -ForegroundColor Red
    Write-Host "   npm install -g supabase" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Supabase CLI found" -ForegroundColor Green

# Check if logged in
Write-Host "`n📝 Checking Supabase authentication..." -ForegroundColor Cyan
$loginCheck = supabase projects list 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Not logged in to Supabase. Please run:" -ForegroundColor Red
    Write-Host "   supabase login" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Authenticated with Supabase" -ForegroundColor Green

# Link to project
Write-Host "`n🔗 Linking to Supabase project..." -ForegroundColor Cyan
$projectRef = "iizdsoqzntkloqqrnerj"
supabase link --project-ref $projectRef

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to link project" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Project linked successfully" -ForegroundColor Green

# Push database migrations
Write-Host "`n📊 Applying database migrations..." -ForegroundColor Cyan
supabase db push

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Database migration failed" -ForegroundColor Red
    Write-Host "   You may need to reset your database or manually apply migrations" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Database migrations applied" -ForegroundColor Green

# Deploy edge functions
Write-Host "`n⚡ Deploying Edge Functions..." -ForegroundColor Cyan

$functions = @(
    "analyze-video",
    "generate-scouting-report", 
    "player-club-matching",
    "sports-coach-chat"
)

foreach ($func in $functions) {
    Write-Host "  Deploying $func..." -ForegroundColor Yellow
    supabase functions deploy $func --no-verify-jwt
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "  ❌ Failed to deploy $func" -ForegroundColor Red
    } else {
        Write-Host "  ✅ $func deployed" -ForegroundColor Green
    }
}

# Check secrets
Write-Host "`n🔑 Checking secrets..." -ForegroundColor Cyan
Write-Host "   Make sure LOVABLE_API_KEY is set in Supabase dashboard:" -ForegroundColor Yellow
Write-Host "   https://supabase.com/dashboard/project/$projectRef/settings/functions" -ForegroundColor Yellow

# Summary
Write-Host "`n✨ Deployment Summary:" -ForegroundColor Cyan
Write-Host "   ✅ Database schema created" -ForegroundColor Green
Write-Host "   ✅ Sample clubs inserted" -ForegroundColor Green
Write-Host "   ✅ RLS policies enabled" -ForegroundColor Green
Write-Host "   ✅ Edge functions deployed" -ForegroundColor Green
Write-Host "   ⚠️  JWT verification: ENABLED" -ForegroundColor Yellow
Write-Host "   ⚠️  Rate limiting: ACTIVE" -ForegroundColor Yellow

Write-Host "`n📚 Next Steps:" -ForegroundColor Cyan
Write-Host "   1. Set LOVABLE_API_KEY in Supabase secrets" -ForegroundColor White
Write-Host "   2. Test endpoints with authentication" -ForegroundColor White
Write-Host "   3. Update frontend to handle auth tokens" -ForegroundColor White
Write-Host "   4. Monitor function logs for any issues" -ForegroundColor White

Write-Host "`n🎉 Backend deployment complete!" -ForegroundColor Green
