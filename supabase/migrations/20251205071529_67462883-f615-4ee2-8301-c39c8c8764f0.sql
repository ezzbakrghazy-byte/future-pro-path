-- Create player_profiles table for showcasing player info
CREATE TABLE public.player_profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT NOT NULL,
  position TEXT,
  age INTEGER,
  height_cm INTEGER,
  weight_kg INTEGER,
  preferred_foot TEXT CHECK (preferred_foot IN ('Left', 'Right', 'Both')),
  nationality TEXT,
  current_club TEXT,
  bio TEXT,
  avatar_url TEXT,
  
  -- Stats
  pace INTEGER DEFAULT 50 CHECK (pace >= 0 AND pace <= 100),
  shooting INTEGER DEFAULT 50 CHECK (shooting >= 0 AND shooting <= 100),
  passing INTEGER DEFAULT 50 CHECK (passing >= 0 AND passing <= 100),
  dribbling INTEGER DEFAULT 50 CHECK (dribbling >= 0 AND dribbling <= 100),
  defending INTEGER DEFAULT 50 CHECK (defending >= 0 AND defending <= 100),
  physical INTEGER DEFAULT 50 CHECK (physical >= 0 AND physical <= 100),
  
  -- Social/Contact
  instagram_url TEXT,
  youtube_url TEXT,
  
  is_public BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  UNIQUE(user_id)
);

-- Create player_videos table
CREATE TABLE public.player_videos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  player_id UUID NOT NULL REFERENCES public.player_profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  video_url TEXT,
  thumbnail_url TEXT,
  analysis_data JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create player_achievements table
CREATE TABLE public.player_achievements (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  player_id UUID NOT NULL REFERENCES public.player_profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  date DATE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.player_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.player_videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.player_achievements ENABLE ROW LEVEL SECURITY;

-- Player profiles policies
CREATE POLICY "Public profiles are viewable by everyone"
ON public.player_profiles FOR SELECT
USING (is_public = true);

CREATE POLICY "Users can view their own profile"
ON public.player_profiles FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own profile"
ON public.player_profiles FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile"
ON public.player_profiles FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own profile"
ON public.player_profiles FOR DELETE
USING (auth.uid() = user_id);

-- Player videos policies
CREATE POLICY "Videos of public profiles are viewable"
ON public.player_videos FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.player_profiles 
    WHERE id = player_id AND (is_public = true OR user_id = auth.uid())
  )
);

CREATE POLICY "Users can manage their own videos"
ON public.player_videos FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.player_profiles 
    WHERE id = player_id AND user_id = auth.uid()
  )
);

CREATE POLICY "Users can update their own videos"
ON public.player_videos FOR UPDATE
USING (
  EXISTS (
    SELECT 1 FROM public.player_profiles 
    WHERE id = player_id AND user_id = auth.uid()
  )
);

CREATE POLICY "Users can delete their own videos"
ON public.player_videos FOR DELETE
USING (
  EXISTS (
    SELECT 1 FROM public.player_profiles 
    WHERE id = player_id AND user_id = auth.uid()
  )
);

-- Player achievements policies
CREATE POLICY "Achievements of public profiles are viewable"
ON public.player_achievements FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.player_profiles 
    WHERE id = player_id AND (is_public = true OR user_id = auth.uid())
  )
);

CREATE POLICY "Users can manage their own achievements"
ON public.player_achievements FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM public.player_profiles 
    WHERE id = player_id AND user_id = auth.uid()
  )
);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add trigger for player_profiles
CREATE TRIGGER update_player_profiles_updated_at
BEFORE UPDATE ON public.player_profiles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();