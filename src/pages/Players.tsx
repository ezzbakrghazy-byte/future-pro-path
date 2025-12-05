import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import AICoachChat from "@/components/AICoachChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { 
  User, 
  Video, 
  BarChart3, 
  MessageSquare, 
  Calendar,
  Trophy,
  TrendingUp,
  Upload,
  Search,
  MapPin,
  Loader2
} from "lucide-react";

interface PlayerProfile {
  id: string;
  display_name: string;
  position: string | null;
  age: number | null;
  nationality: string | null;
  current_club: string | null;
  avatar_url: string | null;
  pace: number;
  shooting: number;
  passing: number;
  dribbling: number;
  defending: number;
  physical: number;
}

const Players = () => {
  const navigate = useNavigate();
  const [players, setPlayers] = useState<PlayerProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("player_profiles")
        .select("id, display_name, position, age, nationality, current_club, avatar_url, pace, shooting, passing, dribbling, defending, physical")
        .eq("is_public", true)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPlayers(data || []);
    } catch (error) {
      console.error("Error fetching players:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPlayers = players.filter((player) =>
    player.display_name.toLowerCase().includes(search.toLowerCase()) ||
    player.position?.toLowerCase().includes(search.toLowerCase()) ||
    player.nationality?.toLowerCase().includes(search.toLowerCase())
  );

  const getOverall = (p: PlayerProfile) =>
    Math.round((p.pace + p.shooting + p.passing + p.dribbling + p.defending + p.physical) / 6);

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
            <Card 
              className="border-primary/20 hover:border-primary/40 transition-colors cursor-pointer"
              onClick={() => navigate("/video-analysis")}
            >
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

            <Card 
              className="border-accent/20 hover:border-accent/40 transition-colors cursor-pointer"
              onClick={() => navigate("/video-analysis")}
            >
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

            <Card 
              className="border-secondary/20 hover:border-secondary/40 transition-colors cursor-pointer"
              onClick={() => navigate("/player-profile")}
            >
              <CardHeader>
                <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-3">
                  <User className="h-6 w-6 text-secondary-foreground" />
                </div>
                <CardTitle>My Profile</CardTitle>
                <CardDescription>
                  Edit your player profile
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Browse Players Section */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold">Browse Players</h2>
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, position, or nationality..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {loading ? (
              <div className="flex justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : filteredPlayers.length === 0 ? (
              <Card className="p-8 text-center">
                <p className="text-muted-foreground mb-4">
                  {players.length === 0 
                    ? "No player profiles yet. Be the first to create one!"
                    : "No players match your search."}
                </p>
                <Button onClick={() => navigate("/player-profile")}>
                  Create Your Profile
                </Button>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredPlayers.map((player) => (
                  <Card 
                    key={player.id} 
                    className="cursor-pointer hover:border-primary/40 transition-colors"
                    onClick={() => navigate(`/player-profile/${player.id}`)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={player.avatar_url || undefined} />
                          <AvatarFallback className="text-lg">
                            {player.display_name.charAt(0).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold truncate">{player.display_name}</h3>
                            <span className="text-xl font-bold text-primary">{getOverall(player)}</span>
                          </div>
                          {player.position && (
                            <Badge variant="secondary" className="mt-1">{player.position}</Badge>
                          )}
                          <div className="flex flex-wrap gap-2 mt-2 text-xs text-muted-foreground">
                            {player.nationality && (
                              <span className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />{player.nationality}
                              </span>
                            )}
                            {player.age && (
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />{player.age} yrs
                              </span>
                            )}
                          </div>
                          {player.current_club && (
                            <p className="text-xs text-muted-foreground mt-1 truncate">
                              {player.current_club}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* AI Coach Chat */}
          <div className="mb-12">
            <AICoachChat />
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
            <Button size="lg" className="gap-2" onClick={() => navigate("/player-profile")}>
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
