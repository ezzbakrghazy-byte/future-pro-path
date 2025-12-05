import { vi } from 'vitest';

export const mockSupabaseClient = {
  auth: {
    signUp: vi.fn(),
    signInWithPassword: vi.fn(),
    signOut: vi.fn(),
    getUser: vi.fn().mockResolvedValue({ data: { user: null }, error: null }),
    getSession: vi.fn().mockResolvedValue({ data: { session: null }, error: null }),
    onAuthStateChange: vi.fn(() => ({
      data: { subscription: { unsubscribe: vi.fn() } },
    })),
  },
  functions: {
    invoke: vi.fn(),
  },
  storage: {
    from: vi.fn(() => ({
      upload: vi.fn(),
      getPublicUrl: vi.fn(),
      list: vi.fn(),
      remove: vi.fn(),
    })),
  },
  from: vi.fn(() => ({
    select: vi.fn().mockReturnThis(),
    insert: vi.fn().mockReturnThis(),
    update: vi.fn().mockReturnThis(),
    delete: vi.fn().mockReturnThis(),
    eq: vi.fn().mockReturnThis(),
    single: vi.fn(),
    order: vi.fn().mockReturnThis(),
    limit: vi.fn().mockReturnThis(),
  })),
};

export const mockUser = {
  id: 'test-user-id',
  email: 'test@example.com',
  user_metadata: {
    name: 'Test User',
  },
};

export const mockSession = {
  access_token: 'mock-access-token',
  refresh_token: 'mock-refresh-token',
  user: mockUser,
};

export const mockVideoAnalysis = {
  id: 'test-analysis-id',
  user_id: 'test-user-id',
  video_url: 'https://example.com/video.mp4',
  position: 'Midfielder',
  player_age: 18,
  player_height: 175,
  overall_score: 75,
  potential_rating: 85,
  analysis_data: {
    technical: { passing: 80, dribbling: 75, shooting: 70 },
    physical: { pace: 85, strength: 70, stamina: 80 },
    tactical: { positioning: 75, vision: 80, awareness: 75 },
    mental: { composure: 70, aggression: 65, workRate: 85 },
  },
  created_at: new Date().toISOString(),
};

export const mockClub = {
  id: 'test-club-id',
  name: 'Ajax Youth Academy',
  league: 'Eredivisie Youth',
  level: 'Elite',
  playing_style: ['Total football', 'Possession-based'],
  positions_needed: ['CM', 'LW', 'RB'],
  age_preference: '16-19',
  location: 'Amsterdam',
  country: 'Netherlands',
  reputation: 92,
  description: 'World-renowned academy famous for technical development',
};

export const mockChatMessage = {
  id: 'test-message-id',
  user_id: 'test-user-id',
  role: 'assistant',
  content: 'Here are some tips to improve your passing accuracy...',
  created_at: new Date().toISOString(),
};
