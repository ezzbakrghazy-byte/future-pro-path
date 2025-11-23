import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Filter,
  Users,
  TrendingUp,
  Target,
  Star,
  Download,
  Eye
} from "lucide-react";

const Clubs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Club Dashboard
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover and scout the next generation of football talent
            </p>
          </div>

          {/* Search Bar */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Search by name, position, or attributes..." 
                    className="pl-10"
                  />
                </div>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Advanced Filters
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary">U18</Badge>
                <Badge variant="secondary">Right Wing</Badge>
                <Badge variant="secondary">High Speed</Badge>
                <Badge variant="secondary">Spain</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Dashboard Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Smart Search</CardTitle>
                <CardDescription>
                  Filter by age, position, stats, nationality
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Advanced filtering system to find exactly the talent you're looking for
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 hover:border-accent/40 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>AI Rankings</CardTitle>
                <CardDescription>
                  Intelligent player scoring system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Machine learning algorithms rank players based on your requirements
                </p>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 hover:border-secondary/40 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-3">
                  <Target className="h-6 w-6 text-secondary-foreground" />
                </div>
                <CardTitle>Match Profiles</CardTitle>
                <CardDescription>
                  Find players that fit your needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  AI-powered recommendations based on your club's requirements
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sample Player Cards */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Top Matches</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          Player Name {i}
                          <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                            95% Match
                          </Badge>
                        </CardTitle>
                        <CardDescription className="mt-2">
                          Right Midfielder • 17 years • Spain
                        </CardDescription>
                      </div>
                      <Star className="h-5 w-5 text-muted-foreground hover:text-accent cursor-pointer" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">Speed: 92</Badge>
                      <Badge variant="outline">Dribbling: 88</Badge>
                      <Badge variant="outline">Passing: 85</Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="default" size="sm" className="flex-1 gap-2">
                        <Eye className="h-4 w-4" />
                        View Profile
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 gap-2">
                        <Download className="h-4 w-4" />
                        Report
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Access Full Scouting Dashboard
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Unlock advanced search, AI recommendations, and detailed player reports
            </p>
            <Button size="lg" className="gap-2">
              Subscribe Now
              <TrendingUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Clubs;
