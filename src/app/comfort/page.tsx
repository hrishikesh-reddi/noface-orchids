"use client";

import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, Heart, Phone, MessageCircle, Send, Sparkles } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useState } from "react";

const guidedExercises = [
  { title: "5-Minute Breathing Exercise", duration: "5 min", category: "Breathing" },
  { title: "Grounding Techniques", duration: "10 min", category: "Grounding" },
  { title: "Journaling Prompts", duration: "15 min", category: "Writing" },
];

export default function ComfortPage() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello, I'm here to listen and support you. You're in a safe space. Would you like to talk about what brought you here today?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", content: input }]);
    setInput("");
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "I hear you, and I want you to know that your feelings are valid. It takes courage to reach out. Would you like to explore some coping strategies, or would you prefer to continue talking?",
      }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-pink-500/20 text-pink-400 border-pink-500/30">
            <Heart className="h-3 w-3 mr-1" />
            Psychological Comfort Zone
          </Badge>
          <h1 className="text-3xl font-bold mb-2">You're Not Alone</h1>
          <p className="text-muted-foreground">
            A safe space for emotional support, resources, and healing
          </p>
        </div>

        {/* Crisis Alert */}
        <Alert className="mb-6 bg-red-900/20 border-red-500/30">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            <strong>In Crisis?</strong> If you're in immediate danger, please call emergency services (911) or the National Crisis Hotline: <strong>1-800-273-8255</strong>
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* AI Chat Interface */}
          <div className="lg:col-span-2">
            <Card className="h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-pink-400" />
                  AI Comfort Assistant
                </CardTitle>
                <CardDescription>Empathetic listening and support</CardDescription>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30 w-fit">
                  Active
                </Badge>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col overflow-hidden">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-4 ${
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-accent"
                        }`}
                      >
                        {message.role === "assistant" && (
                          <div className="flex items-center gap-2 mb-2">
                            <Sparkles className="h-4 w-4 text-pink-400" />
                            <span className="text-xs font-semibold text-pink-400">AI Assistant</span>
                          </div>
                        )}
                        <p className="text-sm">{message.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input */}
                <div className="flex gap-2">
                  <Textarea
                    placeholder="Share your thoughts... this is a safe space"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                      }
                    }}
                    className="min-h-[60px]"
                  />
                  <Button onClick={handleSend} className="self-end">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* How This Helps */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How This Helps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <Heart className="h-4 w-4 text-pink-400 mt-0.5" />
                  <div>
                    <strong>Safe, judgment-free space</strong> to express your feelings
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MessageCircle className="h-4 w-4 text-pink-400 mt-0.5" />
                  <div>
                    <strong>AI trained in empathetic responses</strong> and active listening
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="h-4 w-4 text-pink-400 mt-0.5" />
                  <div>
                    <strong>Guidance to professional resources</strong> when needed
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Helplines */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Indian Helplines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="p-3 rounded-lg bg-accent/50">
                  <div className="font-medium">iCall</div>
                  <div className="text-muted-foreground">022-25521111</div>
                  <div className="text-xs text-muted-foreground mt-1">Mon-Sat, 8AM-10PM</div>
                </div>
                <div className="p-3 rounded-lg bg-accent/50">
                  <div className="font-medium">NIMHANS</div>
                  <div className="text-muted-foreground">080-46110007</div>
                  <div className="text-xs text-muted-foreground mt-1">24/7 Emergency</div>
                </div>
                <div className="p-3 rounded-lg bg-accent/50">
                  <div className="font-medium">Vandrevala Foundation</div>
                  <div className="text-muted-foreground">9999666555</div>
                  <div className="text-xs text-muted-foreground mt-1">24/7 Support</div>
                </div>
              </CardContent>
            </Card>

            {/* Guided Exercises */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Guided Exercises</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {guidedExercises.map((exercise, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-start h-auto py-3"
                  >
                    <div className="text-left">
                      <div className="font-medium">{exercise.title}</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {exercise.category}
                        </Badge>
                        {exercise.duration}
                      </div>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Resources Tabs */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Additional Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="articles" className="w-full">
              <TabsList>
                <TabsTrigger value="articles">Articles</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="support">Support Groups</TabsTrigger>
              </TabsList>
              <TabsContent value="articles" className="space-y-4 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                    <h4 className="font-semibold mb-2">Understanding Anxiety</h4>
                    <p className="text-sm text-muted-foreground">
                      Learn about anxiety symptoms and coping strategies
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                    <h4 className="font-semibold mb-2">Building Resilience</h4>
                    <p className="text-sm text-muted-foreground">
                      Techniques to strengthen mental wellness
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                    <h4 className="font-semibold mb-2">Self-Care Guide</h4>
                    <p className="text-sm text-muted-foreground">
                      Daily practices for emotional wellbeing
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="videos" className="pt-4">
                <p className="text-muted-foreground">Guided meditation and breathing exercise videos coming soon...</p>
              </TabsContent>
              <TabsContent value="support" className="pt-4">
                <p className="text-muted-foreground">Connect with support groups in your area...</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
