// Shared types for Supabase Edge Functions
export interface ApiError {
  error: string;
  details?: string;
  code?: string;
}

export interface PlayerProfile {
  id?: string;
  name: string;
  age?: number;
  height_cm?: number;
  position: string;
  secondary_positions?: string[];
  preferred_foot?: string;
  nationality?: string;
}

export interface VideoAnalysisRequest {
  videoId?: string;
  videoUrl: string;
  position: string;
  fileName?: string;
  playerAge?: number;
  playerHeight?: number;
  playerId?: string;
}

export interface TechnicalSkill {
  score: number;
  analysis: string;
}

export interface PhysicalMetric {
  score: number;
  analysis: string;
}

export interface TacticalAwareness {
  score: number;
  analysis: string;
}

export interface VideoAnalysisData {
  overall_score: number;
  potential_rating: number;
  technical_skills: {
    passing: TechnicalSkill;
    ball_control: TechnicalSkill;
    shooting: TechnicalSkill;
    dribbling: TechnicalSkill;
    heading: TechnicalSkill;
    weak_foot: TechnicalSkill;
  };
  physical_metrics: {
    speed: PhysicalMetric;
    stamina: PhysicalMetric;
    agility: PhysicalMetric;
    strength: PhysicalMetric;
    jumping: PhysicalMetric;
  };
  tactical_awareness: {
    positioning: TacticalAwareness;
    decision_making: TacticalAwareness;
    vision: TacticalAwareness;
    pressing: TacticalAwareness;
    off_ball_movement: TacticalAwareness;
  };
  mental_attributes: {
    composure: number;
    concentration: number;
    leadership: number;
    work_rate: number;
  };
  events_detected: {
    passes_completed: number;
    passes_attempted: number;
    key_passes: number;
    shots_on_target: number;
    shots_off_target: number;
    tackles_won: number;
    tackles_lost: number;
    interceptions: number;
    aerial_duels_won: number;
    aerial_duels_lost: number;
    dribbles_completed: number;
    dribbles_failed: number;
    sprints: number;
    touches: number;
  };
  frame_analysis?: FrameAnalysis[];
  strengths: string[];
  weaknesses: string[];
  summary: string;
  player_comparison?: string;
  training_recommendations?: TrainingRecommendation[];
  recommended_playing_style?: string;
  club_fit_profile?: ClubFitProfile;
}

export interface FrameAnalysis {
  timestamp: string;
  event_type: string;
  description: string;
  rating: number;
  coaching_point: string;
}

export interface TrainingRecommendation {
  focus_area: string;
  priority: string;
  drills: string[];
  expected_improvement: string;
  duration_weeks: number;
}

export interface ClubFitProfile {
  ideal_league_level: string;
  playing_style_fit: string[];
  development_potential: string;
  ready_for_first_team: boolean;
}

export interface ClubProfile {
  id: string;
  name: string;
  league: string;
  level: string;
  playing_style: string[];
  positions_needed: string[];
  age_preference: string;
  development_focus: boolean;
  location: string;
  country?: string;
  reputation: number;
  description?: string;
}

export interface ClubMatch {
  club_id: string;
  club_name: string;
  match_score: number;
  match_grade: string;
  position_fit: string;
  style_compatibility: string;
  development_opportunity: string;
  reasons: string[];
  concerns: string[];
  recommendation: string;
  pathway_to_first_team: string;
  competition_level: string;
  club_details?: ClubProfile;
}

export interface RateLimitInfo {
  allowed: boolean;
  current_count: number;
  limit: number;
  reset_at?: Date;
}
