import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Trophy, Plus, Calendar, Trash2 } from "lucide-react";
import { format } from "date-fns";

interface Achievement {
  id: string;
  title: string;
  description: string | null;
  date: string | null;
}

interface PlayerAchievementsProps {
  achievements: Achievement[];
  isOwner: boolean;
  onAdd?: (achievement: { title: string; description: string; date: string }) => Promise<void>;
  onDelete?: (id: string) => Promise<void>;
}

const PlayerAchievements = ({ achievements, isOwner, onAdd, onDelete }: PlayerAchievementsProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newAchievement, setNewAchievement] = useState({ title: "", description: "", date: "" });

  const handleAdd = async () => {
    if (onAdd && newAchievement.title) {
      await onAdd(newAchievement);
      setNewAchievement({ title: "", description: "", date: "" });
      setIsDialogOpen(false);
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-yellow-500" />
          Achievements
        </CardTitle>
        {isOwner && (
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline">
                <Plus className="h-4 w-4 mr-1" />
                Add
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Achievement</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input
                    value={newAchievement.title}
                    onChange={(e) => setNewAchievement({ ...newAchievement, title: e.target.value })}
                    placeholder="e.g., Regional Champion 2024"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea
                    value={newAchievement.description}
                    onChange={(e) => setNewAchievement({ ...newAchievement, description: e.target.value })}
                    placeholder="Brief description..."
                  />
                </div>
                <div className="space-y-2">
                  <Label>Date</Label>
                  <Input
                    type="date"
                    value={newAchievement.date}
                    onChange={(e) => setNewAchievement({ ...newAchievement, date: e.target.value })}
                  />
                </div>
                <Button onClick={handleAdd} className="w-full">Add Achievement</Button>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </CardHeader>
      <CardContent>
        {achievements.length === 0 ? (
          <p className="text-muted-foreground text-center py-4">No achievements yet</p>
        ) : (
          <div className="space-y-3">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="flex items-start justify-between p-3 bg-muted/50 rounded-lg"
              >
                <div>
                  <h4 className="font-semibold">{achievement.title}</h4>
                  {achievement.description && (
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  )}
                  {achievement.date && (
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                      <Calendar className="h-3 w-3" />
                      {format(new Date(achievement.date), "MMM yyyy")}
                    </p>
                  )}
                </div>
                {isOwner && onDelete && (
                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-destructive hover:text-destructive"
                    onClick={() => onDelete(achievement.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PlayerAchievements;
