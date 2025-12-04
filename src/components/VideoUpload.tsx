import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Video, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface VideoUploadProps {
  onAnalysisComplete?: (data: { analysis: any; highlights: any[]; playerInfo: any }) => void;
}

const POSITIONS = [
  { value: "GK", label: "Goalkeeper" },
  { value: "CB", label: "Center Back" },
  { value: "LB", label: "Left Back" },
  { value: "RB", label: "Right Back" },
  { value: "CDM", label: "Defensive Midfielder" },
  { value: "CM", label: "Central Midfielder" },
  { value: "CAM", label: "Attacking Midfielder" },
  { value: "LM", label: "Left Midfielder" },
  { value: "RM", label: "Right Midfielder" },
  { value: "LW", label: "Left Winger" },
  { value: "RW", label: "Right Winger" },
  { value: "ST", label: "Striker" },
];

const VideoUpload = ({ onAnalysisComplete }: VideoUploadProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [position, setPosition] = useState<string>("");
  const [playerName, setPlayerName] = useState<string>("");
  const [playerAge, setPlayerAge] = useState<string>("");
  const [playerHeight, setPlayerHeight] = useState<string>("");
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [analyzing, setAnalyzing] = useState(false);
  const [status, setStatus] = useState<"idle" | "uploading" | "analyzing" | "complete" | "error">("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (!selectedFile.type.startsWith("video/")) {
        toast({ title: "Invalid file type", description: "Please select a video file", variant: "destructive" });
        return;
      }
      if (selectedFile.size > 100 * 1024 * 1024) {
        toast({ title: "File too large", description: "Maximum file size is 100MB", variant: "destructive" });
        return;
      }
      setFile(selectedFile);
      setStatus("idle");
    }
  };

  const uploadAndAnalyze = async () => {
    if (!file || !position) {
      toast({ title: "Missing information", description: "Please select a video and position", variant: "destructive" });
      return;
    }

    setUploading(true);
    setStatus("uploading");
    setUploadProgress(0);

    try {
      const progressInterval = setInterval(() => {
        setUploadProgress((prev) => Math.min(prev + 10, 90));
      }, 200);

      await new Promise(r => setTimeout(r, 1000));
      clearInterval(progressInterval);
      setUploadProgress(100);

      setUploading(false);
      setAnalyzing(true);
      setStatus("analyzing");

      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/analyze-video`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          videoId: crypto.randomUUID(),
          position,
          fileName: file.name,
          playerAge: playerAge || undefined,
          playerHeight: playerHeight || undefined,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Analysis failed");
      }

      const data = await response.json();
      setStatus("complete");
      toast({ title: "Analysis Complete", description: "Your video has been analyzed!" });

      onAnalysisComplete?.({
        analysis: data.analysis,
        highlights: data.highlights,
        playerInfo: { name: playerName || "Unknown", age: playerAge ? parseInt(playerAge) : undefined, height: playerHeight ? parseInt(playerHeight) : undefined, position, fileName: file.name },
      });
    } catch (error) {
      setStatus("error");
      toast({ title: "Error", description: error instanceof Error ? error.message : "Analysis failed", variant: "destructive" });
    } finally {
      setUploading(false);
      setAnalyzing(false);
    }
  };

  const resetUpload = () => {
    setFile(null);
    setPosition("");
    setPlayerName("");
    setPlayerAge("");
    setPlayerHeight("");
    setStatus("idle");
    setUploadProgress(0);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <Video className="h-6 w-6 text-primary" />
          <CardTitle>Upload Match Video</CardTitle>
        </div>
        <CardDescription>Upload your footage for AI-powered analysis, scouting reports, and club matching</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label>Player Name</Label>
            <Input placeholder="Your name" value={playerName} onChange={(e) => setPlayerName(e.target.value)} disabled={uploading || analyzing} />
          </div>
          <div className="space-y-2">
            <Label>Age</Label>
            <Input type="number" placeholder="18" value={playerAge} onChange={(e) => setPlayerAge(e.target.value)} disabled={uploading || analyzing} />
          </div>
          <div className="space-y-2">
            <Label>Height (cm)</Label>
            <Input type="number" placeholder="180" value={playerHeight} onChange={(e) => setPlayerHeight(e.target.value)} disabled={uploading || analyzing} />
          </div>
          <div className="space-y-2">
            <Label>Position *</Label>
            <Select value={position} onValueChange={setPosition} disabled={uploading || analyzing}>
              <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
              <SelectContent>{POSITIONS.map((pos) => <SelectItem key={pos.value} value={pos.value}>{pos.label}</SelectItem>)}</SelectContent>
            </Select>
          </div>
        </div>

        <div onClick={() => fileInputRef.current?.click()} className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer ${file ? "border-accent bg-accent/5" : "border-muted-foreground/25 hover:border-primary/50"}`}>
          <input ref={fileInputRef} type="file" accept="video/*" onChange={handleFileSelect} className="hidden" />
          {file ? (
            <div className="space-y-2"><CheckCircle className="h-10 w-10 mx-auto text-accent" /><p className="font-medium">{file.name}</p><p className="text-sm text-muted-foreground">{(file.size / (1024 * 1024)).toFixed(2)} MB</p></div>
          ) : (
            <div className="space-y-2"><Upload className="h-10 w-10 mx-auto text-muted-foreground" /><p className="font-medium">Click to upload video</p><p className="text-sm text-muted-foreground">MP4, MOV up to 100MB</p></div>
          )}
        </div>

        {(status === "uploading" || status === "analyzing") && (
          <div className="space-y-3">
            <div className="flex items-center gap-2"><Loader2 className="h-4 w-4 animate-spin text-primary" /><span className="text-sm font-medium">{status === "uploading" ? "Uploading..." : "AI analyzing..."}</span></div>
            <Progress value={status === "uploading" ? uploadProgress : 100} className="h-2" />
          </div>
        )}

        {status === "complete" && <div className="flex items-center gap-2 text-accent"><CheckCircle className="h-5 w-5" /><span className="font-medium">Analysis complete!</span></div>}
        {status === "error" && <div className="flex items-center gap-2 text-destructive"><AlertCircle className="h-5 w-5" /><span className="font-medium">Something went wrong.</span></div>}

        <div className="flex gap-3">
          <Button onClick={uploadAndAnalyze} disabled={!file || !position || uploading || analyzing} className="flex-1">
            {uploading || analyzing ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" />{uploading ? "Uploading..." : "Analyzing..."}</> : <><Upload className="h-4 w-4 mr-2" />Analyze Video</>}
          </Button>
          {(file || status !== "idle") && <Button variant="outline" onClick={resetUpload}>Reset</Button>}
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoUpload;
