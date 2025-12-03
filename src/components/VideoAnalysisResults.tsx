import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Activity, 
  Target, 
  Zap, 
  TrendingUp, 
  Clock, 
  Play,
  Shield,
  Footprints
} from "lucide-react";

interface AnalysisResult {
  overall_score: number;
  technical_skills: {
    passing: number;
    ball_control: number;
    shooting: number;
    dribbling: number;
  };
  physical_metrics: {
    speed: number;
    stamina: number;
    agility: number;
  };
  tactical_awareness: {
    positioning: number;
    decision_making: number;
    vision: number;
  };
  events_detected: {
    passes: number;
    shots: number;
    tackles: number;
    interceptions: number;
    sprints: number;
  };
  summary: string;
  improvement_tips: string[];
}

interface Highlight {
  timestamp: string;
  type: string;
  description: string;
  rating: number;
}

interface VideoAnalysisResultsProps {
  videoId?: string;
}

// Helper function to fetch videos
async function fetchLatestVideo() {
  const response = await fetch(
    `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/player_videos?status=eq.complete&order=created_at.desc&limit=1`,
    {
      headers: {
        apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
    }
  );
  if (!response.ok) return null;
  const data = await response.json();
  return data[0] || null;
}

async function fetchVideoById(id: string) {
  const response = await fetch(
    `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/player_videos?id=eq.${id}`,
    {
      headers: {
        apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
    }
  );
  if (!response.ok) return null;
  const data = await response.json();
  return data[0] || null;
}

const VideoAnalysisResults = ({ videoId }: VideoAnalysisResultsProps) => {
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        const data = videoId ? await fetchVideoById(videoId) : await fetchLatestVideo();
        if (data) {
          setAnalysis(data.analysis_result as AnalysisResult);
          setHighlights((data.highlights as Highlight[]) || []);
        }
      } catch (error) {
        console.error("Error fetching analysis:", error);
      }
      setLoading(false);
    };

    fetchAnalysis();
  }, [videoId]);

  if (loading) {
    return (
      <Card className="border-accent/20">
        <CardContent className="p-8 text-center">
          <Activity className="h-8 w-8 mx-auto animate-pulse text-accent" />
          <p className="mt-2 text-muted-foreground">Loading analysis results...</p>
        </CardContent>
      </Card>
    );
  }

  if (!analysis) {
    return (
      <Card className="border-muted">
        <CardContent className="p-8 text-center">
          <Target className="h-8 w-8 mx-auto text-muted-foreground" />
          <p className="mt-2 text-muted-foreground">No analysis results yet. Upload a video to get started!</p>
        </CardContent>
      </Card>
    );
  }

  const StatBar = ({ label, value, icon: Icon }: { label: string; value: number; icon: React.ComponentType<{ className?: string }> }) => (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="flex items-center gap-2 text-muted-foreground">
          <Icon className="h-4 w-4" />
          {label}
        </span>
        <span className="font-medium">{value}%</span>
      </div>
      <Progress value={value} className="h-2" />
    </div>
  );

  return (
    <Card className="border-accent/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Activity className="h-6 w-6 text-accent" />
            <CardTitle>AI Analysis Results</CardTitle>
          </div>
          <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 text-lg px-4 py-1">
            {analysis.overall_score}/100
          </Badge>
        </div>
        <CardDescription>
          Comprehensive performance analysis based on motion tracking and event detection
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="technical" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="technical">Technical</TabsTrigger>
            <TabsTrigger value="physical">Physical</TabsTrigger>
            <TabsTrigger value="tactical">Tactical</TabsTrigger>
            <TabsTrigger value="highlights">Highlights</TabsTrigger>
          </TabsList>

          <TabsContent value="technical" className="space-y-4">
            <StatBar label="Passing Accuracy" value={analysis.technical_skills.passing} icon={Target} />
            <StatBar label="Ball Control" value={analysis.technical_skills.ball_control} icon={Footprints} />
            <StatBar label="Shooting" value={analysis.technical_skills.shooting} icon={Zap} />
            <StatBar label="Dribbling" value={analysis.technical_skills.dribbling} icon={Activity} />
          </TabsContent>

          <TabsContent value="physical" className="space-y-4">
            <StatBar label="Speed" value={analysis.physical_metrics.speed} icon={Zap} />
            <StatBar label="Stamina" value={analysis.physical_metrics.stamina} icon={Clock} />
            <StatBar label="Agility" value={analysis.physical_metrics.agility} icon={Activity} />
          </TabsContent>

          <TabsContent value="tactical" className="space-y-4">
            <StatBar label="Positioning" value={analysis.tactical_awareness.positioning} icon={Target} />
            <StatBar label="Decision Making" value={analysis.tactical_awareness.decision_making} icon={TrendingUp} />
            <StatBar label="Vision" value={analysis.tactical_awareness.vision} icon={Shield} />
          </TabsContent>

          <TabsContent value="highlights" className="space-y-3">
            {highlights.length > 0 ? (
              highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-accent/10">
                    <Play className="h-4 w-4 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">{highlight.type}</span>
                      <Badge variant="outline" className="text-xs">
                        {highlight.timestamp}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {highlight.description}
                    </p>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`${
                      highlight.rating >= 8 
                        ? "bg-accent/10 text-accent" 
                        : highlight.rating >= 6 
                        ? "bg-primary/10 text-primary" 
                        : "bg-muted"
                    }`}
                  >
                    {highlight.rating}/10
                  </Badge>
                </div>
              ))
            ) : (
              <p className="text-center text-muted-foreground py-4">
                No highlights detected in this video
              </p>
            )}
          </TabsContent>
        </Tabs>

        {/* Events Summary */}
        <div className="mt-6 pt-6 border-t border-border">
          <h4 className="font-medium mb-3 flex items-center gap-2">
            <Activity className="h-4 w-4 text-primary" />
            Events Detected
          </h4>
          <div className="grid grid-cols-5 gap-3">
            {Object.entries(analysis.events_detected).map(([key, value]) => (
              <div key={key} className="text-center p-3 rounded-lg bg-muted/50">
                <p className="text-2xl font-bold text-primary">{value}</p>
                <p className="text-xs text-muted-foreground capitalize">{key}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Summary */}
        <div className="mt-6 pt-6 border-t border-border">
          <h4 className="font-medium mb-3 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-accent" />
            AI Summary
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {analysis.summary}
          </p>
        </div>

        {/* Improvement Tips */}
        <div className="mt-6 pt-6 border-t border-border">
          <h4 className="font-medium mb-3 flex items-center gap-2">
            <Target className="h-4 w-4 text-primary" />
            Improvement Tips
          </h4>
          <ul className="space-y-2">
            {analysis.improvement_tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="flex items-center justify-center h-5 w-5 rounded-full bg-primary/10 text-primary text-xs font-medium shrink-0">
                  {index + 1}
                </span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoAnalysisResults;
