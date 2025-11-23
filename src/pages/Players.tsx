import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Video, 
  BarChart3, 
  MessageSquare, 
  Calendar,
  Trophy,
  TrendingUp,
  Upload
} from "lucide-react";

const Players = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Player Portal
            </h1>
            <p className="text-xl text-muted-foreground">
              Build your professional profile and get discovered by top clubs
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors cursor-pointer">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <Upload className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Upload Videos</CardTitle>
                <CardDescription>
                  Add your latest match footage
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-accent/20 hover:border-accent/40 transition-colors cursor-pointer">
              <CardHeader>
                <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                  <Video className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Create Highlights</CardTitle>
                <CardDescription>
                  AI-powered video montage
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-secondary/20 hover:border-secondary/40 transition-colors cursor-pointer">
              <CardHeader>
                <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-3">
                  <MessageSquare className="h-6 w-6 text-secondary-foreground" />
                </div>
                <CardTitle>AI Coach</CardTitle>
                <CardDescription>
                  Get personalized advice
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Features Overview */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <User className="h-6 w-6 text-primary" />
                  <CardTitle>Complete Profile</CardTitle>
                </div>
                <CardDescription>
                  Showcase your skills, stats, and achievements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1">
                      <Trophy className="h-3 w-3 mr-1" />
                      Bio
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      Personal info, physical attributes, position, and playing style
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1">
                      <BarChart3 className="h-3 w-3 mr-1" />
                      Stats
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      Technical abilities, match statistics, and performance metrics
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1">
                      <Calendar className="h-3 w-3 mr-1" />
                      History
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      Club history, achievements, and career progression
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="h-6 w-6 text-accent" />
                  <CardTitle>AI Analysis</CardTitle>
                </div>
                <CardDescription>
                  Automated performance insights and reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 bg-accent/10 text-accent border-accent/20">
                      Video
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      AI-generated highlight reels with automatic editing
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 bg-accent/10 text-accent border-accent/20">
                      Reports
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      Monthly progress reports with coach evaluations
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 bg-accent/10 text-accent border-accent/20">
                      Tracking
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      Motion tracking, event detection, and performance data
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Create your profile today and start your journey to professional football
            </p>
            <Button size="lg" className="gap-2">
              Create Player Profile
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Players;
