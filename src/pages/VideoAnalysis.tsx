import { useState } from "react";
import Navigation from "@/components/Navigation";
import VideoUpload from "@/components/VideoUpload";
import VideoAnalysisResults from "@/components/VideoAnalysisResults";

const VideoAnalysis = () => {
  const [completedVideoId, setCompletedVideoId] = useState<string | undefined>();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Video Analysis
            </h1>
            <p className="text-xl text-muted-foreground">
              Upload your match footage for AI-powered performance analysis
            </p>
          </div>

          <div className="space-y-8">
            <VideoUpload onUploadComplete={setCompletedVideoId} />
            <VideoAnalysisResults videoId={completedVideoId} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default VideoAnalysis;
