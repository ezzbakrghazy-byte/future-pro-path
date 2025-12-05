import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface PlayerStatsProps {
  pace: number;
  shooting: number;
  passing: number;
  dribbling: number;
  defending: number;
  physical: number;
}

const StatBar = ({ label, value, color }: { label: string; value: number; color: string }) => (
  <div className="space-y-1">
    <div className="flex justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
    <Progress value={value} className={`h-2 ${color}`} />
  </div>
);

const PlayerStats = ({ pace, shooting, passing, dribbling, defending, physical }: PlayerStatsProps) => {
  const overall = Math.round((pace + shooting + passing + dribbling + defending + physical) / 6);

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <span>Player Stats</span>
          <span className="text-3xl font-bold text-primary">{overall}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <StatBar label="Pace" value={pace} color="[&>div]:bg-green-500" />
        <StatBar label="Shooting" value={shooting} color="[&>div]:bg-red-500" />
        <StatBar label="Passing" value={passing} color="[&>div]:bg-blue-500" />
        <StatBar label="Dribbling" value={dribbling} color="[&>div]:bg-yellow-500" />
        <StatBar label="Defending" value={defending} color="[&>div]:bg-orange-500" />
        <StatBar label="Physical" value={physical} color="[&>div]:bg-purple-500" />
      </CardContent>
    </Card>
  );
};

export default PlayerStats;
