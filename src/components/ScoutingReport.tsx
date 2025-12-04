import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { 
  FileText, Download, User, Target, Dumbbell, 
  Brain, TrendingUp, DollarSign, CheckCircle, Loader2
} from "lucide-react";

interface ScoutingReportProps {
  playerData: any;
  analysisData: any;
}

const ScoutingReport = ({ playerData, analysisData }: ScoutingReportProps) => {
  const [report, setReport] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const generateReport = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/generate-scouting-report`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ playerData, analysisData }),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to generate report");
      }

      const data = await response.json();
      setReport(data.report);
      toast({
        title: "Report Generated",
        description: "Your professional scouting report is ready.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to generate report",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getGradeColor = (grade: string) => {
    if (grade === "A" || grade === "A+") return "bg-green-500/20 text-green-500";
    if (grade === "B" || grade === "B+") return "bg-blue-500/20 text-blue-500";
    if (grade === "C") return "bg-yellow-500/20 text-yellow-500";
    return "bg-red-500/20 text-red-500";
  };

  const getActionColor = (action: string) => {
    if (action === "Sign Immediately") return "bg-green-500 text-white";
    if (action === "Monitor Closely") return "bg-blue-500 text-white";
    if (action === "Development Loan") return "bg-yellow-500 text-black";
    return "bg-muted text-muted-foreground";
  };

  if (!report) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Professional Scouting Report
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center py-8">
          <p className="text-muted-foreground mb-4">
            Generate a comprehensive professional scouting report based on the video analysis.
          </p>
          <Button onClick={generateReport} disabled={loading || !analysisData}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating Report...
              </>
            ) : (
              <>
                <FileText className="mr-2 h-4 w-4" />
                Generate Scouting Report
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-2">
      <CardHeader className="bg-muted/50">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Official Scouting Report
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Report ID: {report.report_id} | Date: {report.report_date}
            </p>
          </div>
          <Badge className={getGradeColor(report.scout_classification)} variant="outline">
            Classification: {report.scout_classification}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[600px]">
          <div className="p-6 space-y-6">
            {/* Player Profile */}
            <section>
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                <User className="h-4 w-4" />
                Player Profile
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Name</p>
                  <p className="font-medium">{report.player_profile?.name || "Unknown"}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Age</p>
                  <p className="font-medium">{report.player_profile?.age || "N/A"}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Position</p>
                  <p className="font-medium">{report.player_profile?.position}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Preferred Foot</p>
                  <p className="font-medium">{report.player_profile?.preferred_foot}</p>
                </div>
              </div>
            </section>

            <Separator />

            {/* Executive Summary */}
            <section>
              <h3 className="text-lg font-semibold mb-3">Executive Summary</h3>
              <p className="text-muted-foreground bg-muted/30 p-4 rounded-lg">
                {report.executive_summary}
              </p>
            </section>

            <Separator />

            {/* Assessments Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Technical */}
              <div className="p-4 rounded-lg border">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    Technical
                  </h4>
                  <Badge className={getGradeColor(report.technical_assessment?.grade)}>
                    {report.technical_assessment?.grade}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {report.technical_assessment?.summary}
                </p>
                <div className="flex flex-wrap gap-1">
                  {report.technical_assessment?.key_strengths?.map((s: string, i: number) => (
                    <Badge key={i} variant="outline" className="text-xs">{s}</Badge>
                  ))}
                </div>
              </div>

              {/* Physical */}
              <div className="p-4 rounded-lg border">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium flex items-center gap-2">
                    <Dumbbell className="h-4 w-4" />
                    Physical
                  </h4>
                  <Badge className={getGradeColor(report.physical_assessment?.grade)}>
                    {report.physical_assessment?.grade}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {report.physical_assessment?.summary}
                </p>
                <div className="flex gap-2">
                  <Badge variant="secondary">{report.physical_assessment?.physical_profile}</Badge>
                  <Badge variant="outline">Risk: {report.physical_assessment?.injury_risk}</Badge>
                </div>
              </div>

              {/* Tactical */}
              <div className="p-4 rounded-lg border">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium flex items-center gap-2">
                    <Brain className="h-4 w-4" />
                    Tactical
                  </h4>
                  <Badge className={getGradeColor(report.tactical_assessment?.grade)}>
                    {report.tactical_assessment?.grade}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {report.tactical_assessment?.summary}
                </p>
                <p className="text-xs">Best Role: <span className="font-medium">{report.tactical_assessment?.best_role}</span></p>
              </div>

              {/* Mental */}
              <div className="p-4 rounded-lg border">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium flex items-center gap-2">
                    <Brain className="h-4 w-4" />
                    Mental
                  </h4>
                  <Badge className={getGradeColor(report.mental_assessment?.grade)}>
                    {report.mental_assessment?.grade}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {report.mental_assessment?.summary}
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline">Leadership: {report.mental_assessment?.leadership_potential}</Badge>
                </div>
              </div>
            </div>

            <Separator />

            {/* Comparison Analysis */}
            <section>
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                <TrendingUp className="h-4 w-4" />
                Player Comparisons
              </h3>
              <div className="space-y-2">
                {report.comparison_analysis?.similar_players?.map((player: any, i: number) => (
                  <div key={i} className="p-3 rounded-lg bg-muted/30 flex items-center justify-between">
                    <div>
                      <p className="font-medium">{player.name}</p>
                      <p className="text-xs text-muted-foreground">{player.comparison_notes}</p>
                    </div>
                    <Badge variant="outline">{player.similarity} match</Badge>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="p-3 rounded-lg border">
                  <p className="text-xs text-muted-foreground">Ceiling Comparison</p>
                  <p className="font-medium">{report.comparison_analysis?.ceiling_comparison}</p>
                </div>
                <div className="p-3 rounded-lg border">
                  <p className="text-xs text-muted-foreground">Floor Comparison</p>
                  <p className="font-medium">{report.comparison_analysis?.floor_comparison}</p>
                </div>
              </div>
            </section>

            <Separator />

            {/* Market Assessment */}
            <section>
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                <DollarSign className="h-4 w-4" />
                Market Assessment
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-3 rounded-lg bg-muted/30">
                  <p className="text-xs text-muted-foreground">Current Value</p>
                  <p className="font-medium">{report.market_assessment?.current_value_estimate}</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/30">
                  <p className="text-xs text-muted-foreground">Potential Value</p>
                  <p className="font-medium">{report.market_assessment?.potential_value_estimate}</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/30">
                  <p className="text-xs text-muted-foreground">Contract Rec.</p>
                  <p className="font-medium">{report.market_assessment?.contract_recommendation}</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/30">
                  <p className="text-xs text-muted-foreground">Competition</p>
                  <p className="font-medium">{report.market_assessment?.competition_level}</p>
                </div>
              </div>
            </section>

            <Separator />

            {/* Final Recommendation */}
            <section className="bg-muted/30 p-4 rounded-lg">
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                <CheckCircle className="h-4 w-4" />
                Final Recommendation
              </h3>
              <div className="flex items-center gap-4 mb-3">
                <Badge className={getActionColor(report.recommendation?.action)}>
                  {report.recommendation?.action}
                </Badge>
                <Badge variant="outline">Confidence: {report.recommendation?.confidence}</Badge>
                <Badge variant="outline">Risk: {report.recommendation?.risk_level}</Badge>
              </div>
              <p className="text-muted-foreground">
                {report.recommendation?.detailed_recommendation}
              </p>
            </section>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default ScoutingReport;
