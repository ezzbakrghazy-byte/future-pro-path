import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Target, Zap, Brain, Clock, TrendingUp, 
  User, Dumbbell, Eye, Star, AlertCircle
} from "lucide-react";

interface EnhancedAnalysisResultsProps {
  analysis: any;
  highlights: any[];
}

const EnhancedAnalysisResults = ({ analysis, highlights }: EnhancedAnalysisResultsProps) => {
  if (!analysis) return null;

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500";
    if (score >= 60) return "text-yellow-500";
    return "text-red-500";
  };

  const getGradeColor = (score: number) => {
    if (score >= 80) return "bg-green-500/20 text-green-500";
    if (score >= 60) return "bg-yellow-500/20 text-yellow-500";
    return "bg-red-500/20 text-red-500";
  };

  const renderSkillCard = (title: string, data: any, icon: React.ReactNode) => {
    const score = typeof data === 'object' ? data.score : data;
    const analysis_text = typeof data === 'object' ? data.analysis : null;
    
    return (
      <div className="p-4 rounded-lg bg-card border">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            {icon}
            <span className="text-sm font-medium">{title}</span>
          </div>
          <span className={`text-lg font-bold ${getScoreColor(score)}`}>{score}</span>
        </div>
        <Progress value={score} className="h-2 mb-2" />
        {analysis_text && (
          <p className="text-xs text-muted-foreground">{analysis_text}</p>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Overall Scores */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
          <CardContent className="p-4 text-center">
            <p className="text-sm text-muted-foreground mb-1">Overall Score</p>
            <p className={`text-4xl font-bold ${getScoreColor(analysis.overall_score)}`}>
              {analysis.overall_score}
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5">
          <CardContent className="p-4 text-center">
            <p className="text-sm text-muted-foreground mb-1">Potential</p>
            <p className={`text-4xl font-bold ${getScoreColor(analysis.potential_rating)}`}>
              {analysis.potential_rating}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-sm text-muted-foreground mb-1">Player Comparison</p>
            <p className="text-lg font-semibold text-foreground">
              {analysis.player_comparison || "N/A"}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-sm text-muted-foreground mb-1">Recommended Style</p>
            <p className="text-lg font-semibold text-foreground">
              {analysis.recommended_playing_style || "Flexible"}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Scout Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{analysis.summary}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="outline" className={getGradeColor(analysis.club_fit_profile?.ready_for_first_team ? 80 : 60)}>
              {analysis.club_fit_profile?.ideal_league_level || "Development"}
            </Badge>
            <Badge variant="outline">
              {analysis.club_fit_profile?.development_potential || "High"} Potential
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Analysis Tabs */}
      <Tabs defaultValue="technical" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="technical">Technical</TabsTrigger>
          <TabsTrigger value="physical">Physical</TabsTrigger>
          <TabsTrigger value="tactical">Tactical</TabsTrigger>
          <TabsTrigger value="mental">Mental</TabsTrigger>
          <TabsTrigger value="stats">Stats</TabsTrigger>
        </TabsList>

        <TabsContent value="technical" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {analysis.technical_skills && Object.entries(analysis.technical_skills).map(([key, value]) => (
              <div key={key}>
                {renderSkillCard(
                  key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                  value,
                  <Target className="h-4 w-4 text-primary" />
                )}
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="physical" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {analysis.physical_metrics && Object.entries(analysis.physical_metrics).map(([key, value]) => (
              <div key={key}>
                {renderSkillCard(
                  key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                  value,
                  <Dumbbell className="h-4 w-4 text-primary" />
                )}
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tactical" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {analysis.tactical_awareness && Object.entries(analysis.tactical_awareness).map(([key, value]) => (
              <div key={key}>
                {renderSkillCard(
                  key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                  value,
                  <Brain className="h-4 w-4 text-primary" />
                )}
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="mental" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {analysis.mental_attributes && Object.entries(analysis.mental_attributes).map(([key, value]) => (
              <div key={key}>
                {renderSkillCard(
                  key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                  value as number,
                  <Eye className="h-4 w-4 text-primary" />
                )}
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="stats" className="mt-4">
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {analysis.events_detected && Object.entries(analysis.events_detected).map(([key, value]) => (
                  <div key={key} className="text-center p-3 rounded-lg bg-muted/50">
                    <p className="text-2xl font-bold text-foreground">{value as number}</p>
                    <p className="text-xs text-muted-foreground">
                      {key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Frame Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Frame-by-Frame Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px]">
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="p-4 rounded-lg border bg-card/50 hover:bg-card transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline">{highlight.timestamp}</Badge>
                      <span className="font-medium">{highlight.event_type}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(highlight.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{highlight.description}</p>
                  {highlight.coaching_point && (
                    <p className="text-xs text-primary flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      {highlight.coaching_point}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Strengths & Weaknesses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-500">
              <Star className="h-5 w-5" />
              Key Strengths
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {analysis.strengths?.map((strength: string, index: number) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  {strength}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-500">
              <AlertCircle className="h-5 w-5" />
              Areas for Improvement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {analysis.weaknesses?.map((weakness: string, index: number) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-yellow-500" />
                  {weakness}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Training Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Personalized Training Program
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {analysis.training_recommendations?.map((rec: any, index: number) => (
              <div key={index} className="p-4 rounded-lg border">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{rec.focus_area}</span>
                  <Badge variant={rec.priority === "High" ? "destructive" : rec.priority === "Medium" ? "default" : "secondary"}>
                    {rec.priority} Priority
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{rec.expected_improvement}</p>
                <div className="flex flex-wrap gap-2">
                  {rec.drills?.map((drill: string, i: number) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {drill}
                    </Badge>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Duration: {rec.duration_weeks} weeks
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EnhancedAnalysisResults;
