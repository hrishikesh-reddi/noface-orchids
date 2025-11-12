"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Video, 
  Users, 
  Heart, 
  Play, 
  Mic, 
  Camera,
  AudioLines
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Audio/Video Report Submission",
    description: "Submit reports with audio or video evidence for more impactful storytelling",
    icon: Video,
    badge: "New"
  },
  {
    id: 2,
    title: '"Safe Buddy" Matching',
    description: "AI matches you with someone traveling the same route for added security",
    icon: Users,
    badge: "AI-Powered"
  },
  {
    id: 3,
    title: "Impact Stories",
    description: "See how your reports have led to real-world change and community impact",
    icon: Heart,
    badge: "Community"
  }
];

export default function KeyFeatures() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>✨ Key Features</CardTitle>
        <CardDescription>Discover what makes NoFace unique</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.id} 
                className="border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-sm">{feature.title}</h3>
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                        {feature.badge}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}