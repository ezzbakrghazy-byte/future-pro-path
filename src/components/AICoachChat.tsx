import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send, Lightbulb, Target, TrendingUp, FileText } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type ChatIntent = "pitch" | "evaluation" | "improvement" | "profile" | "general";

const intentOptions = [
  { value: "pitch" as ChatIntent, label: "Write Pitch", icon: FileText, description: "Craft a message to clubs" },
  { value: "evaluation" as ChatIntent, label: "Evaluate Potential", icon: Target, description: "Analyze your abilities" },
  { value: "improvement" as ChatIntent, label: "Get Tips", icon: TrendingUp, description: "Improve your game" },
  { value: "profile" as ChatIntent, label: "Build Profile", icon: Lightbulb, description: "Strengthen your profile" },
];

const AICoachChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIntent, setSelectedIntent] = useState<ChatIntent>("general");
  const scrollRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const streamChat = async (userMessage: string) => {
    const newMessages: Message[] = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("sports-coach-chat", {
        body: { 
          messages: newMessages,
          intent: selectedIntent 
        },
      });

      if (error) throw error;

      const reader = data.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = "";
      let buffer = "";

      setMessages(prev => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (let line of lines) {
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") continue;

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              assistantMessage += content;
              setMessages(prev => {
                const updated = [...prev];
                updated[updated.length - 1] = { role: "assistant", content: assistantMessage };
                return updated;
              });
            }
          } catch (e) {
            console.error("Parse error:", e);
          }
        }
      }
    } catch (error: any) {
      console.error("Chat error:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to get response. Please try again.",
        variant: "destructive",
      });
      setMessages(prev => prev.slice(0, -1));
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = () => {
    if (!input.trim() || isLoading) return;
    streamChat(input);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Card className="flex flex-col h-[600px] bg-background border-border">
      <div className="p-4 border-b border-border">
        <h3 className="text-lg font-semibold text-foreground mb-3">AI Coach Assistant</h3>
        <div className="grid grid-cols-2 gap-2">
          {intentOptions.map((option) => {
            const Icon = option.icon;
            return (
              <button
                key={option.value}
                onClick={() => setSelectedIntent(option.value)}
                className={`p-3 rounded-lg border transition-all text-left ${
                  selectedIntent === option.value
                    ? "bg-primary/10 border-primary text-primary"
                    : "bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                <div className="flex items-start gap-2">
                  <Icon className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium">{option.label}</div>
                    <div className="text-xs opacity-80">{option.description}</div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <ScrollArea ref={scrollRef} className="flex-1 p-4">
        {messages.length === 0 && (
          <div className="flex items-center justify-center h-full text-center text-muted-foreground">
            <div>
              <Lightbulb className="h-12 w-12 mx-auto mb-3 text-accent" />
              <p className="text-sm">Select a category above and ask me anything!</p>
              <p className="text-xs mt-2">I'm here to help you succeed.</p>
            </div>
          </div>
        )}
        <div className="space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
              </div>
            </div>
          ))}
          {isLoading && messages[messages.length - 1]?.role === "assistant" && (
            <div className="flex justify-start">
              <Badge variant="secondary" className="gap-2">
                <Loader2 className="h-3 w-3 animate-spin" />
                Thinking...
              </Badge>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ask me anything about your football career..."
            className="resize-none"
            rows={2}
            disabled={isLoading}
          />
          <Button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            size="icon"
            className="h-auto"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default AICoachChat;
