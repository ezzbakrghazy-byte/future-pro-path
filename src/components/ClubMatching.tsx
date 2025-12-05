import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { 
  Building2, MapPin, Trophy, TrendingUp, 
  CheckCircle, AlertCircle, Loader2, Star, Target
} from "lucide-react";

interface ClubMatchingProps {
  playerProfile: any;
  analysisData: any;
}

const ClubMatching = ({ playerProfile, analysisData }: ClubMatchingProps) => {
  const [matchingResults, setMatchingResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const findMatches = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('player-club-matching', {
        body: { 
          playerProfile, 
          analysisData,
          preferences: {} 
        },
      });

      if (error) {
        throw new Error(error.message || "Failed to find matches");
      }

      setMatchingResults(data);
      toast({
        title: "Matches Found",
        description: `Found ${data.matches?.length || 0} suitable clubs for you.`,
      });
    } catch (error) {
      console.error("Club matching error:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to find matches",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getMatchColor = (score: number) => {
    if (score >= 80) return "text-green-500";
    if (score >= 60) return "text-blue-500";
    if (score >= 40) return "text-yellow-500";
    return "text-red-500";
  };

  const getGradeColor = (grade: string) => {
    if (grade === "A+" || grade === "A") return "bg-green-500/20 text-green-500 border-green-500/30";
    if (grade === "B+" || grade === "B") return "bg-blue-500/20 text-blue-500 border-blue-500/30";
    if (grade === "C") return "bg-yellow-500/20 text-yellow-500 border-yellow-500/30";
    return "bg-red-500/20 text-red-500 border-red-500/30";
  };

  if (!matchingResults) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            AI Club Matching
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center py-8">
          <p className="text-muted-foreground mb-4">
            Find clubs that match your playing style, skill level, and career goals using AI-powered matching.
          </p>
          <Button onClick={findMatches} disabled={loading || !analysisData}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Finding Matches...
              </>
            ) : (
              <>
                <Target className="mr-2 h-4 w-4" />
                Find Matching Clubs
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    );
  }

  const topMatch = matchingResults.matches?.find(
    (m: any) => m.club_id === matchingResults.top_recommendation?.club_id
  );

  return (
    <div className="space-y-6">
      {/* Top Recommendation */}
      {topMatch && (
        <Card className="border-2 border-primary/50 bg-gradient-to-br from-primary/5 to-primary/10">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-primary fill-primary" />
                Top Recommendation
              </CardTitle>
              <Badge className="bg-primary text-primary-foreground">
                {topMatch.match_score}% Match
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold">{topMatch.club_name}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                  <MapPin className="h-4 w-4" />
                  {topMatch.club_details?.location}
                  <span>•</span>
                  <Trophy className="h-4 w-4" />
                  {topMatch.club_details?.league}
                </div>
              </div>
              <Badge className={getGradeColor(topMatch.match_grade)} variant="outline">
                Grade {topMatch.match_grade}
              </Badge>
            </div>
            <p className="text-muted-foreground mb-4">
              {matchingResults.top_recommendation?.explanation}
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">
                <CheckCircle className="h-3 w-3 mr-1" />
                {topMatch.style_compatibility} Style Fit
              </Badge>
              <Badge variant="outline">
                <TrendingUp className="h-3 w-3 mr-1" />
                {topMatch.development_opportunity} Development
              </Badge>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Overall Assessment */}
      <Card>
        <CardHeader>
          <CardTitle>Career Assessment</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="p-3 rounded-lg bg-muted/30">
              <p className="text-xs text-muted-foreground">Market Readiness</p>
              <p className="font-semibold">{matchingResults.overall_assessment?.market_readiness}</p>
            </div>
            <div className="p-3 rounded-lg bg-muted/30">
              <p className="text-xs text-muted-foreground">Recommended Level</p>
              <p className="font-semibold">{matchingResults.overall_assessment?.recommended_level}</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-4">
            {matchingResults.overall_assessment?.career_advice}
          </p>
          <div>
            <p className="text-sm font-medium mb-2">Next Steps:</p>
            <ul className="space-y-1">
              {matchingResults.overall_assessment?.next_steps?.map((step: string, i: number) => (
                <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* All Matches */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            All Club Matches
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px]">
            <div className="space-y-4">
              {matchingResults.matches?.map((match: any, index: number) => (
                <div 
                  key={match.club_id} 
                  className={`p-4 rounded-lg border ${
                    match.club_id === matchingResults.top_recommendation?.club_id 
                      ? 'border-primary/50 bg-primary/5' 
                      : 'bg-card'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">#{index + 1}</span>
                        <h4 className="font-semibold">{match.club_name}</h4>
                        {match.club_id === matchingResults.top_recommendation?.club_id && (
                          <Star className="h-4 w-4 text-primary fill-primary" />
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                        <MapPin className="h-3 w-3" />
                        {match.club_details?.location}
                        <span>•</span>
                        {match.club_details?.level}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`text-2xl font-bold ${getMatchColor(match.match_score)}`}>
                        {match.match_score}%
                      </p>
                      <Badge className={getGradeColor(match.match_grade)} variant="outline">
                        {match.match_grade}
                      </Badge>
                    </div>
                  </div>
                  
                  <Progress value={match.match_score} className="h-2 mb-3" />
                  
                  <div className="grid grid-cols-3 gap-2 mb-3 text-xs">
                    <div className="p-2 rounded bg-muted/30">
                      <p className="text-muted-foreground">Position Fit</p>
                      <p className="font-medium">{match.position_fit}</p>
                    </div>
                    <div className="p-2 rounded bg-muted/30">
                      <p className="text-muted-foreground">Style Match</p>
                      <p className="font-medium">{match.style_compatibility}</p>
                    </div>
                    <div className="p-2 rounded bg-muted/30">
                      <p className="text-muted-foreground">Development</p>
                      <p className="font-medium">{match.development_opportunity}</p>
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="text-xs font-medium mb-1">Why this club?</p>
                    <ul className="space-y-1">
                      {match.reasons?.slice(0, 2).map((reason: string, i: number) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-1">
                          <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {match.concerns?.length > 0 && (
                    <div className="mb-3">
                      <p className="text-xs font-medium mb-1">Considerations</p>
                      <ul className="space-y-1">
                        {match.concerns?.slice(0, 1).map((concern: string, i: number) => (
                          <li key={i} className="text-xs text-muted-foreground flex items-start gap-1">
                            <AlertCircle className="h-3 w-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                            {concern}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <p className="text-xs text-muted-foreground italic">
                    {match.recommendation}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-3">
                    {match.club_details?.playing_style?.map((style: string, i: number) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {style}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClubMatching;
