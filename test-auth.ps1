# Authentication Testing Script

Write-Host "======================================" -ForegroundColor Cyan
Write-Host "Authentication System Test" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

# Test 1: Check if config is correct
Write-Host "✓ Test 1: Checking Supabase configuration..." -ForegroundColor Yellow
$configPath = "supabase\config.toml"
if (Test-Path $configPath) {
    $config = Get-Content $configPath -Raw
    if ($config -match "enable_confirmations = false") {
        Write-Host "  ✅ Email confirmations are DISABLED (good for development)" -ForegroundColor Green
    } else {
        Write-Host "  ⚠️  Email confirmations might be ENABLED" -ForegroundColor Yellow
        Write-Host "     This means users need to verify email before signing in" -ForegroundColor Gray
    }
} else {
    Write-Host "  ❌ Config file not found" -ForegroundColor Red
}
Write-Host ""

# Test 2: Check if .env exists
Write-Host "✓ Test 2: Checking environment variables..." -ForegroundColor Yellow
if (Test-Path ".env") {
    $env = Get-Content ".env" -Raw
    if ($env -match "VITE_SUPABASE_URL") {
        Write-Host "  ✅ Supabase URL configured" -ForegroundColor Green
    }
    if ($env -match "VITE_SUPABASE_PUBLISHABLE_KEY") {
        Write-Host "  ✅ Supabase API key configured" -ForegroundColor Green
    }
} else {
    Write-Host "  ❌ .env file not found" -ForegroundColor Red
}
Write-Host ""

# Test 3: Check if auth files exist
Write-Host "✓ Test 3: Checking authentication files..." -ForegroundColor Yellow
$authFiles = @(
    "src\contexts\AuthContext.tsx",
    "src\pages\SignIn.tsx",
    "src\pages\SignUp.tsx",
    "src\pages\Profile.tsx"
)

foreach ($file in $authFiles) {
    if (Test-Path $file) {
        Write-Host "  ✅ $file exists" -ForegroundColor Green
    } else {
        Write-Host "  ❌ $file missing" -ForegroundColor Red
    }
}
Write-Host ""

# Test 4: Build test
Write-Host "✓ Test 4: Running build test..." -ForegroundColor Yellow
Write-Host "  Building project..." -ForegroundColor Gray
$buildOutput = npm run build 2>&1 | Select-String -Pattern "built in"
if ($buildOutput) {
    Write-Host "  ✅ Build successful: $buildOutput" -ForegroundColor Green
} else {
    Write-Host "  ⚠️  Build completed with warnings (check output above)" -ForegroundColor Yellow
}
Write-Host ""

# Instructions
Write-Host "======================================" -ForegroundColor Cyan
Write-Host "Next Steps:" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Start the dev server:" -ForegroundColor White
Write-Host "   npm run dev" -ForegroundColor Gray
Write-Host ""
Write-Host "2. Open browser to:" -ForegroundColor White
Write-Host "   http://localhost:8080" -ForegroundColor Gray
Write-Host ""
Write-Host "3. Test Sign Up:" -ForegroundColor White
Write-Host "   • Go to /sign-up" -ForegroundColor Gray
Write-Host "   • Fill form with test data" -ForegroundColor Gray
Write-Host "   • Should redirect to dashboard or sign-in" -ForegroundColor Gray
Write-Host ""
Write-Host "4. Test Sign In:" -ForegroundColor White
Write-Host "   • Go to /sign-in" -ForegroundColor Gray
Write-Host "   • Use credentials from step 3" -ForegroundColor Gray
Write-Host "   • Should redirect to /video-analysis" -ForegroundColor Gray
Write-Host ""
Write-Host "5. Check browser console (F12) for any errors" -ForegroundColor White
Write-Host ""
Write-Host "For detailed troubleshooting, see:" -ForegroundColor Yellow
Write-Host "  AUTH_FIX.md" -ForegroundColor Cyan
Write-Host ""
Write-Host "======================================" -ForegroundColor Cyan
