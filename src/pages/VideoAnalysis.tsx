import { useState } from "react";
import Navigation from "@/components/Navigation";
import VideoUpload from "@/components/VideoUpload";
import EnhancedAnalysisResults from "@/components/EnhancedAnalysisResults";
import ScoutingReport from "@/components/ScoutingReport";
import ClubMatching from "@/components/ClubMatching";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Video, FileText, Building2 } from "lucide-react";

const VideoAnalysis = () => {
  const [analysisData, setAnalysisData] = useState<any>(null);
  const [highlights, setHighlights] = useState<any[]>([]);
  const [playerData, setPlayerData] = useState<any>(null);

  const handleAnalysisComplete = (data: { analysis: any; highlights: any[]; playerInfo: any }) => {
    setAnalysisData(data.analysis);
    setHighlights(data.highlights);
    setPlayerData(data.playerInfo);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              AI Video Analysis
            </h1>
            <p className="text-xl text-muted-foreground">
              Upload your match footage for comprehensive AI-powered performance analysis, 
              professional scouting reports, and club matching.
            </p>
          </div>

          <div className="space-y-8">
            <VideoUpload onAnalysisComplete={handleAnalysisComplete} />
            
            {analysisData && (
              <Tabs defaultValue="analysis" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="analysis" className="flex items-center gap-2">
                    <Video className="h-4 w-4" />
                    Analysis
                  </TabsTrigger>
                  <TabsTrigger value="report" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Scouting Report
                  </TabsTrigger>
                  <TabsTrigger value="clubs" className="flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    Club Matching
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="analysis" className="mt-6">
                  <EnhancedAnalysisResults analysis={analysisData} highlights={highlights} />
                </TabsContent>

                <TabsContent value="report" className="mt-6">
                  <ScoutingReport playerData={playerData} analysisData={analysisData} />
                </TabsContent>

                <TabsContent value="clubs" className="mt-6">
                  <ClubMatching playerProfile={playerData} analysisData={analysisData} />
                </TabsContent>
              </Tabs>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default VideoAnalysis;
