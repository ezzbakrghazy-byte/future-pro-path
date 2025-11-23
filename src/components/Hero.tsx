import { Button } from "@/components/ui/button";
import { ArrowRight, Video, LineChart, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-accent/10 border border-accent/20 rounded-full">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-foreground">
              AI-Powered Scouting Platform
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Your Path to
            <span className="block text-primary mt-2">Professional Football</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Connect youth football talent with professional clubs through AI-powered analysis, 
            professional video creation, and intelligent scouting tools.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="text-lg px-8 py-6 gap-2">
              Join as Player
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Scout Talent
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-20">
            <div className="bg-card border border-border rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Video className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                AI Video Creation
              </h3>
              <p className="text-muted-foreground">
                Upload your clips and let our AI create professional highlight reels automatically
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <LineChart className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Performance Analysis
              </h3>
              <p className="text-muted-foreground">
                Get detailed AI-powered analysis of your technical and tactical abilities
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Smart Matching
              </h3>
              <p className="text-muted-foreground">
                AI-powered recommendations connect you with clubs looking for your profile
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Hero;
