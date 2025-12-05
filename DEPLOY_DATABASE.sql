-- COMPLETE DATABASE DEPLOYMENT SCRIPT
-- Copy and paste this entire file into Supabase SQL Editor and click "Run"
-- URL: https://app.supabase.com/project/iizdsoqzntkloqqrnerj/sql/new

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- TABLE DEFINITIONS
-- ============================================

-- Players table
CREATE TABLE IF NOT EXISTS players (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT,
  age INTEGER,
  height_cm INTEGER,
  position TEXT NOT NULL,
  secondary_positions TEXT[],
  preferred_foot TEXT,
  nationality TEXT,
  bio TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Video analyses table
CREATE TABLE IF NOT EXISTS video_analyses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  player_id UUID REFERENCES players(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  video_url TEXT NOT NULL,
  file_name TEXT,
  position TEXT NOT NULL,
  player_age INTEGER,
  player_height INTEGER,
  overall_score INTEGER,
  potential_rating INTEGER,
  analysis_data JSONB NOT NULL,
  highlights JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Scouting reports table
CREATE TABLE IF NOT EXISTS scouting_reports (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  player_id UUID REFERENCES players(id) ON DELETE CASCADE,
  video_analysis_id UUID REFERENCES video_analyses(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  report_data JSONB NOT NULL,
  scout_classification TEXT,
  recommendation_action TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Clubs table
CREATE TABLE IF NOT EXISTS clubs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  league TEXT,
  level TEXT NOT NULL,
  playing_style TEXT[],
  positions_needed TEXT[],
  age_preference TEXT,
  development_focus BOOLEAN DEFAULT true,
  location TEXT,
  country TEXT,
  reputation INTEGER DEFAULT 50,
  description TEXT,
  contact_email TEXT,
  website TEXT,
  logo_url TEXT,
  verified BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Club matches table
CREATE TABLE IF NOT EXISTS club_matches (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  player_id UUID REFERENCES players(id) ON DELETE CASCADE,
  club_id UUID REFERENCES clubs(id) ON DELETE CASCADE,
  video_analysis_id UUID REFERENCES video_analyses(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  match_score INTEGER NOT NULL,
  match_grade TEXT,
  matching_data JSONB NOT NULL,
  status TEXT DEFAULT 'pending', -- pending, contacted, interested, rejected
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Chat messages table for AI coach
CREATE TABLE IF NOT EXISTS chat_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  player_id UUID REFERENCES players(id) ON DELETE SET NULL,
  role TEXT NOT NULL, -- user, assistant, system
  content TEXT NOT NULL,
  intent TEXT, -- pitch, evaluation, improvement, profile
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- API usage tracking for rate limiting
CREATE TABLE IF NOT EXISTS api_usage (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  endpoint TEXT NOT NULL,
  request_count INTEGER DEFAULT 1,
  last_request_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, endpoint, created_at::date)
);

-- ============================================
-- INDEXES FOR PERFORMANCE
-- ============================================

CREATE INDEX IF NOT EXISTS idx_players_user_id ON players(user_id);
CREATE INDEX IF NOT EXISTS idx_video_analyses_player_id ON video_analyses(player_id);
CREATE INDEX IF NOT EXISTS idx_video_analyses_user_id ON video_analyses(user_id);
CREATE INDEX IF NOT EXISTS idx_scouting_reports_player_id ON scouting_reports(player_id);
CREATE INDEX IF NOT EXISTS idx_scouting_reports_video_analysis_id ON scouting_reports(video_analysis_id);
CREATE INDEX IF NOT EXISTS idx_club_matches_player_id ON club_matches(player_id);
CREATE INDEX IF NOT EXISTS idx_club_matches_club_id ON club_matches(club_id);
CREATE INDEX IF NOT EXISTS idx_chat_messages_user_id ON chat_messages(user_id);
CREATE INDEX IF NOT EXISTS idx_api_usage_user_endpoint ON api_usage(user_id, endpoint, created_at);

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

ALTER TABLE players ENABLE ROW LEVEL SECURITY;
ALTER TABLE video_analyses ENABLE ROW LEVEL SECURITY;
ALTER TABLE scouting_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE club_matches ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE api_usage ENABLE ROW LEVEL SECURITY;
ALTER TABLE clubs ENABLE ROW LEVEL SECURITY;

-- Players policies
DROP POLICY IF EXISTS "Users can view their own players" ON players;
CREATE POLICY "Users can view their own players"
  ON players FOR SELECT
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert their own players" ON players;
CREATE POLICY "Users can insert their own players"
  ON players FOR INSERT
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update their own players" ON players;
CREATE POLICY "Users can update their own players"
  ON players FOR UPDATE
  USING (auth.uid() = user_id);

-- Video analyses policies
DROP POLICY IF EXISTS "Users can view their own analyses" ON video_analyses;
CREATE POLICY "Users can view their own analyses"
  ON video_analyses FOR SELECT
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert their own analyses" ON video_analyses;
CREATE POLICY "Users can insert their own analyses"
  ON video_analyses FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Scouting reports policies
DROP POLICY IF EXISTS "Users can view their own reports" ON scouting_reports;
CREATE POLICY "Users can view their own reports"
  ON scouting_reports FOR SELECT
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert their own reports" ON scouting_reports;
CREATE POLICY "Users can insert their own reports"
  ON scouting_reports FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Club matches policies
DROP POLICY IF EXISTS "Users can view their own matches" ON club_matches;
CREATE POLICY "Users can view their own matches"
  ON club_matches FOR SELECT
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert their own matches" ON club_matches;
CREATE POLICY "Users can insert their own matches"
  ON club_matches FOR INSERT
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update their own matches" ON club_matches;
CREATE POLICY "Users can update their own matches"
  ON club_matches FOR UPDATE
  USING (auth.uid() = user_id);

-- Chat messages policies
DROP POLICY IF EXISTS "Users can view their own messages" ON chat_messages;
CREATE POLICY "Users can view their own messages"
  ON chat_messages FOR SELECT
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert their own messages" ON chat_messages;
CREATE POLICY "Users can insert their own messages"
  ON chat_messages FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- API usage policies
DROP POLICY IF EXISTS "Users can view their own usage" ON api_usage;
CREATE POLICY "Users can view their own usage"
  ON api_usage FOR SELECT
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Service role can manage usage" ON api_usage;
CREATE POLICY "Service role can manage usage"
  ON api_usage FOR ALL
  USING (auth.role() = 'service_role');

-- Clubs are publicly readable
DROP POLICY IF EXISTS "Anyone can view clubs" ON clubs;
CREATE POLICY "Anyone can view clubs"
  ON clubs FOR SELECT
  USING (true);

-- ============================================
-- STORAGE BUCKET & POLICIES
-- ============================================

-- Create storage bucket for videos
INSERT INTO storage.buckets (id, name, public)
VALUES ('videos', 'videos', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies
DROP POLICY IF EXISTS "Authenticated users can upload videos" ON storage.objects;
CREATE POLICY "Authenticated users can upload videos"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'videos');

DROP POLICY IF EXISTS "Authenticated users can view videos" ON storage.objects;
CREATE POLICY "Authenticated users can view videos"
ON storage.objects FOR SELECT
TO authenticated
USING (bucket_id = 'videos');

DROP POLICY IF EXISTS "Users can delete their own videos" ON storage.objects;
CREATE POLICY "Users can delete their own videos"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'videos' AND auth.uid()::text = (storage.foldername(name))[1]);

-- ============================================
-- SEED DATA - 10 REAL EUROPEAN CLUBS
-- ============================================

INSERT INTO clubs (name, league, level, playing_style, positions_needed, age_preference, location, country, reputation, description) VALUES
('Ajax Youth Academy', 'Eredivisie Youth', 'Elite', ARRAY['Total football', 'Possession-based'], ARRAY['CM', 'LW', 'RB'], '16-19', 'Amsterdam', 'Netherlands', 92, 'World-renowned academy famous for technical development and youth-to-first-team pathway'),
('Benfica B', 'Segunda Liga', 'Top Division', ARRAY['Attacking football', 'Wing play'], ARRAY['ST', 'LW', 'RW', 'CAM'], '18-21', 'Lisbon', 'Portugal', 82, 'Strong B team competing professionally, excellent stepping stone to first team'),
('Celtic Youth Academy', 'Scottish Premier Youth', 'Top Division', ARRAY['High tempo', 'Direct play'], ARRAY['CB', 'CDM', 'ST'], '16-20', 'Glasgow', 'Scotland', 75, 'Historic club with commitment to youth development and European competition'),
('Red Bull Academy', 'Austrian Bundesliga Youth', 'Elite', ARRAY['High pressing', 'Fast transitions'], ARRAY['CM', 'LB', 'RB', 'ST'], '17-20', 'Salzburg', 'Austria', 88, 'Modern academy focused on athleticism, pressing, and selling players to top leagues'),
('Sporting CP Academy', 'Portuguese Youth League', 'Elite', ARRAY['Technical football', 'Youth development'], ARRAY['CM', 'CAM', 'RB', 'CB'], '15-19', 'Lisbon', 'Portugal', 90, 'One of Europe''s best academies producing world-class talents like Ronaldo and Bruno Fernandes'),
('Bayern Munich II', 'Regionalliga Bayern', 'Top Division', ARRAY['Possession football', 'Technical excellence'], ARRAY['CM', 'CB', 'RW'], '18-21', 'Munich', 'Germany', 85, 'Reserve team of German giants, perfect environment for player development'),
('Real Sociedad B', 'Primera Federación', 'Championship', ARRAY['Possession-based', 'High pressing'], ARRAY['CM', 'CAM', 'LB', 'ST'], '18-22', 'San Sebastián', 'Spain', 78, 'Basque club known for developing technical midfielders and forwards'),
('Feyenoord Youth', 'Eredivisie Youth', 'Elite', ARRAY['Physical football', 'Direct play'], ARRAY['ST', 'CB', 'CDM'], '16-19', 'Rotterdam', 'Netherlands', 80, 'Dutch academy producing strong, physical players with excellent mentality'),
('Lille OSC Academy', 'Championnat National U19', 'Elite', ARRAY['Counter-attacking', 'Fast transitions'], ARRAY['LW', 'RW', 'ST', 'LB'], '17-20', 'Lille', 'France', 82, 'French academy with track record of developing attacking talent for top leagues'),
('Southampton Academy', 'Premier League 2', 'Elite', ARRAY['Technical football', 'Youth development'], ARRAY['CM', 'CAM', 'RB', 'CB'], '16-19', 'Southampton', 'England', 84, 'Famous English academy that produced Bale, Walcott, and many Premier League stars')
ON CONFLICT DO NOTHING;

-- ============================================
-- TRIGGERS FOR AUTO-UPDATE
-- ============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Add triggers for updated_at
DROP TRIGGER IF EXISTS update_players_updated_at ON players;
CREATE TRIGGER update_players_updated_at BEFORE UPDATE ON players FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_video_analyses_updated_at ON video_analyses;
CREATE TRIGGER update_video_analyses_updated_at BEFORE UPDATE ON video_analyses FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_scouting_reports_updated_at ON scouting_reports;
CREATE TRIGGER update_scouting_reports_updated_at BEFORE UPDATE ON scouting_reports FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_clubs_updated_at ON clubs;
CREATE TRIGGER update_clubs_updated_at BEFORE UPDATE ON clubs FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_club_matches_updated_at ON club_matches;
CREATE TRIGGER update_club_matches_updated_at BEFORE UPDATE ON club_matches FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- VERIFICATION QUERIES
-- ============================================

-- Run these after deployment to verify:
-- SELECT COUNT(*) FROM clubs; -- Should return 10
-- SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'; -- Should show all 7 tables
-- SELECT * FROM clubs ORDER BY reputation DESC; -- Should show 10 clubs

-- SUCCESS! Database is now ready for use.
