import { describe, it, expect, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import VideoAnalysisResults from '@/components/VideoAnalysisResults';

describe('VideoAnalysisResults Component', () => {
  beforeEach(() => {
    // Mock environment variables
    import.meta.env.VITE_SUPABASE_URL = 'https://test.supabase.co';
    import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY = 'test-key';
  });

  it('renders without crashing', () => {
    const { container } = render(<VideoAnalysisResults />);
    expect(container).toBeInTheDocument();
  });

  it('renders with videoId prop', () => {
    const { container } = render(<VideoAnalysisResults videoId="test-id" />);
    expect(container).toBeInTheDocument();
  });
});
