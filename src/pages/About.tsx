import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Users, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About في ضهرك
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're revolutionizing football scouting by connecting talented youth players 
              with professional clubs through AI-powered analysis and intelligent matching.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To democratize access to professional football by giving every talented 
                  player the tools and visibility they need to succeed.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Our Technology</h3>
                <p className="text-muted-foreground">
                  Advanced AI and machine learning power our video analysis, performance 
                  tracking, and intelligent player-club matching systems.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">For Players</h3>
                <p className="text-muted-foreground">
                  Professional profile creation, AI-powered video highlights, performance 
                  analysis, and direct connections with clubs scouting your position.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">For Clubs</h3>
                <p className="text-muted-foreground">
                  Advanced search and filtering, AI recommendations, detailed analytics, 
                  and a streamlined scouting process to find the perfect talent.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 text-center">
              The Future of Football Scouting
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto">
              في ضهرك (meaning "at your back" in Arabic) represents our commitment to 
              supporting players throughout their journey to professional football. We combine 
              cutting-edge technology with deep football expertise to create opportunities 
              that were previously out of reach.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
