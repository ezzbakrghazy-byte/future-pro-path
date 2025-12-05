import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Save } from "lucide-react";

interface PlayerProfileData {
  display_name: string;
  position: string;
  age: number | null;
  height_cm: number | null;
  weight_kg: number | null;
  preferred_foot: string;
  nationality: string;
  current_club: string;
  bio: string;
  pace: number;
  shooting: number;
  passing: number;
  dribbling: number;
  defending: number;
  physical: number;
  instagram_url: string;
  youtube_url: string;
  is_public: boolean;
}

interface PlayerProfileEditorProps {
  initialData?: Partial<PlayerProfileData>;
  onSave: (data: PlayerProfileData) => Promise<void>;
  loading?: boolean;
}

const positions = [
  "Goalkeeper",
  "Right Back",
  "Center Back",
  "Left Back",
  "Defensive Midfielder",
  "Central Midfielder",
  "Attacking Midfielder",
  "Right Winger",
  "Left Winger",
  "Striker",
];

const PlayerProfileEditor = ({ initialData, onSave, loading }: PlayerProfileEditorProps) => {
  const [formData, setFormData] = useState<PlayerProfileData>({
    display_name: initialData?.display_name || "",
    position: initialData?.position || "",
    age: initialData?.age || null,
    height_cm: initialData?.height_cm || null,
    weight_kg: initialData?.weight_kg || null,
    preferred_foot: initialData?.preferred_foot || "",
    nationality: initialData?.nationality || "",
    current_club: initialData?.current_club || "",
    bio: initialData?.bio || "",
    pace: initialData?.pace || 50,
    shooting: initialData?.shooting || 50,
    passing: initialData?.passing || 50,
    dribbling: initialData?.dribbling || 50,
    defending: initialData?.defending || 50,
    physical: initialData?.physical || 50,
    instagram_url: initialData?.instagram_url || "",
    youtube_url: initialData?.youtube_url || "",
    is_public: initialData?.is_public ?? true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSave(formData);
  };

  const StatSlider = ({ label, field }: { label: string; field: keyof PlayerProfileData }) => (
    <div className="space-y-2">
      <div className="flex justify-between">
        <Label>{label}</Label>
        <span className="font-bold text-primary">{formData[field] as number}</span>
      </div>
      <Slider
        value={[formData[field] as number]}
        onValueChange={(value) => setFormData({ ...formData, [field]: value[0] })}
        max={100}
        min={0}
        step={1}
      />
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="display_name">Display Name *</Label>
            <Input
              id="display_name"
              value={formData.display_name}
              onChange={(e) => setFormData({ ...formData, display_name: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="position">Position</Label>
            <Select
              value={formData.position}
              onValueChange={(value) => setFormData({ ...formData, position: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select position" />
              </SelectTrigger>
              <SelectContent>
                {positions.map((pos) => (
                  <SelectItem key={pos} value={pos}>{pos}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              type="number"
              value={formData.age || ""}
              onChange={(e) => setFormData({ ...formData, age: e.target.value ? parseInt(e.target.value) : null })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="nationality">Nationality</Label>
            <Input
              id="nationality"
              value={formData.nationality}
              onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="height_cm">Height (cm)</Label>
            <Input
              id="height_cm"
              type="number"
              value={formData.height_cm || ""}
              onChange={(e) => setFormData({ ...formData, height_cm: e.target.value ? parseInt(e.target.value) : null })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="weight_kg">Weight (kg)</Label>
            <Input
              id="weight_kg"
              type="number"
              value={formData.weight_kg || ""}
              onChange={(e) => setFormData({ ...formData, weight_kg: e.target.value ? parseInt(e.target.value) : null })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="preferred_foot">Preferred Foot</Label>
            <Select
              value={formData.preferred_foot}
              onValueChange={(value) => setFormData({ ...formData, preferred_foot: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select foot" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Right">Right</SelectItem>
                <SelectItem value="Left">Left</SelectItem>
                <SelectItem value="Both">Both</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="current_club">Current Club</Label>
            <Input
              id="current_club"
              value={formData.current_club}
              onChange={(e) => setFormData({ ...formData, current_club: e.target.value })}
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              rows={3}
              placeholder="Tell scouts about yourself..."
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Player Stats</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2">
          <StatSlider label="Pace" field="pace" />
          <StatSlider label="Shooting" field="shooting" />
          <StatSlider label="Passing" field="passing" />
          <StatSlider label="Dribbling" field="dribbling" />
          <StatSlider label="Defending" field="defending" />
          <StatSlider label="Physical" field="physical" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Social Links</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="instagram_url">Instagram URL</Label>
            <Input
              id="instagram_url"
              value={formData.instagram_url}
              onChange={(e) => setFormData({ ...formData, instagram_url: e.target.value })}
              placeholder="https://instagram.com/username"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="youtube_url">YouTube URL</Label>
            <Input
              id="youtube_url"
              value={formData.youtube_url}
              onChange={(e) => setFormData({ ...formData, youtube_url: e.target.value })}
              placeholder="https://youtube.com/@channel"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Privacy Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <Label>Public Profile</Label>
              <p className="text-sm text-muted-foreground">
                Allow scouts and clubs to view your profile
              </p>
            </div>
            <Switch
              checked={formData.is_public}
              onCheckedChange={(checked) => setFormData({ ...formData, is_public: checked })}
            />
          </div>
        </CardContent>
      </Card>

      <Button type="submit" className="w-full" size="lg" disabled={loading}>
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Saving...
          </>
        ) : (
          <>
            <Save className="mr-2 h-4 w-4" />
            Save Profile
          </>
        )}
      </Button>
    </form>
  );
};

export default PlayerProfileEditor;
