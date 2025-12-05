import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";
import PlayerStats from "@/components/PlayerStats";
import PlayerProfileEditor from "@/components/PlayerProfileEditor";
import PlayerAchievements from "@/components/PlayerAchievements";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { 
  Loader2, ArrowLeft, Edit, Eye, MapPin, Calendar, Ruler, Weight, 
  Instagram, Youtube, User, Video, Trophy, FileText
} from "lucide-react";

interface PlayerProfile {
  id: string;
  user_id: string;
  display_name: string;
  position: string | null;
  age: number | null;
  height_cm: number | null;
  weight_kg: number | null;
  preferred_foot: string | null;
  nationality: string | null;
  current_club: string | null;
  bio: string | null;
  avatar_url: string | null;
  pace: number;
  shooting: number;
  passing: number;
  dribbling: number;
  defending: number;
  physical: number;
  instagram_url: string | null;
  youtube_url: string | null;
  is_public: boolean;
  created_at: string;
}

interface Achievement {
  id: string;
  title: string;
  description: string | null;
  date: string | null;
}

interface PlayerVideo {
  id: string;
  title: string;
  description: string | null;
  video_url: string | null;
  thumbnail_url: string | null;
  analysis_data: any;
  created_at: string;
}

const PlayerProfile = () => {
  const { id } = useParams<{ id?: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [profile, setProfile] = useState<PlayerProfile | null>(null);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [videos, setVideos] = useState<PlayerVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const isOwnProfile = !id || (profile && profile.user_id === user?.id);

  useEffect(() => {
    fetchProfile();
  }, [id, user]);

  const fetchProfile = async () => {
    setLoading(true);
    try {
      let query = supabase.from("player_profiles").select("*");
      
      if (id) {
        query = query.eq("id", id);
      } else if (user) {
        query = query.eq("user_id", user.id);
      } else {
        setLoading(false);
        return;
      }

      const { data, error } = await query.maybeSingle();
      
      if (error) throw error;
      
      setProfile(data);

      if (data) {
        const [achievementsRes, videosRes] = await Promise.all([
          supabase.from("player_achievements").select("*").eq("player_id", data.id).order("date", { ascending: false }),
          supabase.from("player_videos").select("*").eq("player_id", data.id).order("created_at", { ascending: false })
        ]);

        if (achievementsRes.data) setAchievements(achievementsRes.data);
        if (videosRes.data) setVideos(videosRes.data);
      }
    } catch (error: any) {
      toast({
        title: "Error loading profile",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSaveProfile = async (data: any) => {
    if (!user) return;
    setSaving(true);

    try {
      if (profile) {
        const { error } = await supabase
          .from("player_profiles")
          .update(data)
          .eq("id", profile.id);
        
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("player_profiles")
          .insert({ ...data, user_id: user.id });
        
        if (error) throw error;
      }

      toast({
        title: "Profile saved",
        description: "Your player profile has been updated.",
      });
      
      setIsEditing(false);
      fetchProfile();
    } catch (error: any) {
      toast({
        title: "Error saving profile",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleAddAchievement = async (achievement: { title: string; description: string; date: string }) => {
    if (!profile) return;

    try {
      const { error } = await supabase.from("player_achievements").insert({
        player_id: profile.id,
        ...achievement,
        date: achievement.date || null,
      });

      if (error) throw error;
      
      toast({ title: "Achievement added" });
      fetchProfile();
    } catch (error: any) {
      toast({
        title: "Error adding achievement",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleDeleteAchievement = async (achievementId: string) => {
    try {
      const { error } = await supabase.from("player_achievements").delete().eq("id", achievementId);
      if (error) throw error;
      
      toast({ title: "Achievement deleted" });
      setAchievements(achievements.filter(a => a.id !== achievementId));
    } catch (error: any) {
      toast({
        title: "Error deleting achievement",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  if (!user && !id) {
    navigate("/sign-in");
    return null;
  }

  // Show create profile form if user has no profile
  if (!profile && isOwnProfile) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8 mt-16 max-w-4xl">
          <h1 className="text-3xl font-bold mb-6">Create Your Player Profile</h1>
          <PlayerProfileEditor onSave={handleSaveProfile} loading={saving} />
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8 mt-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Profile Not Found</h1>
          <p className="text-muted-foreground mb-4">This player profile doesn't exist or is private.</p>
          <Button onClick={() => navigate("/players")}>Browse Players</Button>
        </div>
      </div>
    );
  }

  if (isEditing && isOwnProfile) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8 mt-16 max-w-4xl">
          <Button variant="ghost" onClick={() => setIsEditing(false)} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Profile
          </Button>
          <h1 className="text-3xl font-bold mb-6">Edit Profile</h1>
          <PlayerProfileEditor initialData={profile} onSave={handleSaveProfile} loading={saving} />
        </div>
      </div>
    );
  }

  const overall = Math.round(
    (profile.pace + profile.shooting + profile.passing + profile.dribbling + profile.defending + profile.physical) / 6
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8 mt-16">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        {/* Hero Section */}
        <Card className="mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-background">
                <AvatarImage src={profile.avatar_url || undefined} />
                <AvatarFallback className="text-3xl">
                  {profile.display_name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl md:text-4xl font-bold">{profile.display_name}</h1>
                  <span className="text-4xl font-bold text-primary">{overall}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {profile.position && <Badge variant="secondary">{profile.position}</Badge>}
                  {profile.preferred_foot && <Badge variant="outline">{profile.preferred_foot} Footed</Badge>}
                  {profile.is_public ? (
                    <Badge variant="outline" className="text-green-600">
                      <Eye className="mr-1 h-3 w-3" />Public
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="text-muted-foreground">Private</Badge>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  {profile.nationality && (
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />{profile.nationality}
                    </span>
                  )}
                  {profile.age && (
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />{profile.age} years old
                    </span>
                  )}
                  {profile.height_cm && (
                    <span className="flex items-center gap-1">
                      <Ruler className="h-4 w-4" />{profile.height_cm} cm
                    </span>
                  )}
                  {profile.weight_kg && (
                    <span className="flex items-center gap-1">
                      <Weight className="h-4 w-4" />{profile.weight_kg} kg
                    </span>
                  )}
                </div>

                {profile.current_club && (
                  <p className="mt-2 text-sm">
                    <span className="text-muted-foreground">Current Club:</span> {profile.current_club}
                  </p>
                )}
              </div>

              <div className="flex gap-2">
                {profile.instagram_url && (
                  <Button size="icon" variant="outline" asChild>
                    <a href={profile.instagram_url} target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {profile.youtube_url && (
                  <Button size="icon" variant="outline" asChild>
                    <a href={profile.youtube_url} target="_blank" rel="noopener noreferrer">
                      <Youtube className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {isOwnProfile && (
                  <Button onClick={() => setIsEditing(true)}>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit Profile
                  </Button>
                )}
              </div>
            </div>

            {profile.bio && (
              <p className="mt-4 text-muted-foreground">{profile.bio}</p>
            )}
          </div>
        </Card>

        {/* Tabs Section */}
        <Tabs defaultValue="stats" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
            <TabsTrigger value="stats" className="gap-2">
              <User className="h-4 w-4" />
              Stats
            </TabsTrigger>
            <TabsTrigger value="videos" className="gap-2">
              <Video className="h-4 w-4" />
              Videos
            </TabsTrigger>
            <TabsTrigger value="achievements" className="gap-2">
              <Trophy className="h-4 w-4" />
              Achievements
            </TabsTrigger>
            <TabsTrigger value="reports" className="gap-2">
              <FileText className="h-4 w-4" />
              Reports
            </TabsTrigger>
          </TabsList>

          <TabsContent value="stats">
            <div className="grid md:grid-cols-2 gap-6">
              <PlayerStats
                pace={profile.pace}
                shooting={profile.shooting}
                passing={profile.passing}
                dribbling={profile.dribbling}
                defending={profile.defending}
                physical={profile.physical}
              />
              <Card>
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <p className="text-3xl font-bold text-primary">{videos.length}</p>
                    <p className="text-sm text-muted-foreground">Videos</p>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <p className="text-3xl font-bold text-primary">{achievements.length}</p>
                    <p className="text-sm text-muted-foreground">Achievements</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="videos">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Player Videos</CardTitle>
                {isOwnProfile && (
                  <Button onClick={() => navigate("/video-analysis")}>
                    <Video className="mr-2 h-4 w-4" />
                    Upload Video
                  </Button>
                )}
              </CardHeader>
              <CardContent>
                {videos.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">
                    No videos uploaded yet.
                    {isOwnProfile && " Upload your first video to showcase your skills!"}
                  </p>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {videos.map((video) => (
                      <Card key={video.id} className="overflow-hidden">
                        <div className="aspect-video bg-muted flex items-center justify-center">
                          {video.thumbnail_url ? (
                            <img src={video.thumbnail_url} alt={video.title} className="w-full h-full object-cover" />
                          ) : (
                            <Video className="h-12 w-12 text-muted-foreground" />
                          )}
                        </div>
                        <CardContent className="p-4">
                          <h4 className="font-semibold truncate">{video.title}</h4>
                          {video.description && (
                            <p className="text-sm text-muted-foreground truncate">{video.description}</p>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements">
            <PlayerAchievements
              achievements={achievements}
              isOwner={isOwnProfile || false}
              onAdd={handleAddAchievement}
              onDelete={handleDeleteAchievement}
            />
          </TabsContent>

          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Scouting Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground py-8">
                  Upload videos for AI-powered scouting reports in the Video Analysis section.
                </p>
                {isOwnProfile && (
                  <div className="flex justify-center">
                    <Button onClick={() => navigate("/video-analysis")}>
                      <FileText className="mr-2 h-4 w-4" />
                      Generate Scouting Report
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PlayerProfile;
