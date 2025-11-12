"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  TrendingUp, 
  Clock, 
  Mic, 
  UserCheck, 
  Wallet, 
  MapPin, 
  Heart, 
  Zap, 
  Award 
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Safe Buddy Matching",
    description: "AI matches you with someone traveling same route",
    icon: Users,
    badge: "AI-Powered"
  },
  {
    id: 2,
    title: "Safety Score Prediction",
    description: "Predict your safety score in 3 months based on behavior",
    icon: TrendingUp,
    badge: "Predictive"
  },
  {
    id: 3,
    title: "Incident Reconstruction",
    description: "AI recreates incident timeline with all reports/evidence",
    icon: Clock,
    badge: "AI-Powered"
  },
  {
    id: 4,
    title: "Safety Genome",
    description: "Analyze your personal safety patterns and vulnerabilities",
    icon: Award,
    badge: "Analytics"
  },
  {
    id: 5,
    title: "Community Heat Pulse",
    description: "Real-time visualization of community safety engagement",
    icon: Zap,
    badge: "Real-time"
  },
  {
    id: 6,
    title: "Echo Chamber",
    description: "Anonymous voice notes from survivors sharing experiences",
    icon: Mic,
    badge: "Anonymous"
  },
  {
    id: 7,
    title: "Guardian Angel Program",
    description: "Verified volunteers who can help in emergencies",
    icon: UserCheck,
    badge: "Verified"
  },
  {
    id: 8,
    title: "Safety Wallet",
    description: "Store digital copies of emergency contacts, medical info, blood group",
    icon: Wallet,
    badge: "Secure"
  },
  {
    id: 9,
    title: "Crowdsourced Safety Tips",
    description: "Location-specific safety advice from locals",
    icon: MapPin,
    badge: "Community"
  },
  {
    id: 10,
    title: "Impact Stories",
    description: "Showcase how reports led to real-world change",
    icon: Heart,
    badge: "Impact"
  }
];

export default function UniqueFeatures() {
  return (
    <Card className="mb-16">
      <CardHeader>
        <CardTitle>🚀 Unique Features That Set Us Apart</CardTitle>
        <CardDescription>Discover the innovative features that make NoFace different</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                      <Badge variant="secondary" className="text-xs">
                        {feature.badge}
                      </Badge>
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