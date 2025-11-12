"use client";

import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Video, 
  Users, 
  Heart, 
  Play, 
  Mic, 
  Camera,
  AudioLines,
  TrendingUp, 
  Clock, 
  UserCheck, 
  Wallet, 
  MapPin, 
  Zap, 
  Award,
  ArrowRight,
  Star,
  Shield,
  Lightbulb,
  Globe
} from "lucide-react";
import Link from "next/link";

const keyFeatures = [
  {
    id: 1,
    title: "Audio/Video Report Submission",
    description: "Submit reports with audio or video evidence for more impactful storytelling",
    icon: Video,
    badge: "New",
    details: "Record and submit audio or video evidence directly through our secure platform. Our AI analyzes the content to extract key information while maintaining your anonymity."
  },
  {
    id: 2,
    title: '"Safe Buddy" Matching',
    description: "AI matches you with someone traveling the same route for added security",
    icon: Users,
    badge: "AI-Powered",
    details: "Our intelligent matching system pairs you with a trusted community member traveling the same route. Stay connected and look out for each other in real-time."
  },
  {
    id: 3,
    title: "Impact Stories",
    description: "See how your reports have led to real-world change and community impact",
    icon: Heart,
    badge: "Community",
    details: "Track the real-world impact of your reports. See how your contributions have led to policy changes, improved safety measures, and community awareness."
  }
];

const uniqueFeatures = [
  {
    id: 1,
    title: "Safety Score Prediction",
    description: "Predict your safety score in 3 months based on behavior",
    icon: TrendingUp,
    badge: "Predictive"
  },
  {
    id: 2,
    title: "Incident Reconstruction",
    description: "AI recreates incident timeline with all reports/evidence",
    icon: Clock,
    badge: "AI-Powered"
  },
  {
    id: 3,
    title: "Safety Genome",
    description: "Analyze your personal safety patterns and vulnerabilities",
    icon: Award,
    badge: "Analytics"
  },
  {
    id: 4,
    title: "Community Heat Pulse",
    description: "Real-time visualization of community safety engagement",
    icon: Zap,
    badge: "Real-time"
  },
  {
    id: 5,
    title: "Echo Chamber",
    description: "Anonymous voice notes from survivors sharing experiences",
    icon: Mic,
    badge: "Anonymous"
  },
  {
    id: 6,
    title: "Guardian Angel Program",
    description: "Verified volunteers who can help in emergencies",
    icon: UserCheck,
    badge: "Verified"
  },
  {
    id: 7,
    title: "Safety Wallet",
    description: "Store digital copies of emergency contacts, medical info, blood group",
    icon: Wallet,
    badge: "Secure"
  },
  {
    id: 8,
    title: "Crowdsourced Safety Tips",
    description: "Location-specific safety advice from locals",
    icon: MapPin,
    badge: "Community"
  }
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Powerful Features for Community Safety</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the innovative tools that empower our community to create safer environments for everyone
          </p>
        </div>

        {/* Key Features Section */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-2">
              <Star className="h-8 w-8 text-yellow-500" />
              Key Features
            </CardTitle>
            <CardDescription>Our flagship capabilities that set us apart</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {keyFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card key={feature.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg flex items-center gap-2">
                            {feature.title}
                            <Badge variant="secondary">{feature.badge}</Badge>
                          </CardTitle>
                        </div>
                      </div>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.details}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Unique Features Section */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-2">
              <Lightbulb className="h-8 w-8 text-blue-500" />
              Unique Features
            </CardTitle>
            <CardDescription>Innovative tools that make us different</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {uniqueFeatures.map((feature) => {
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

        {/* CTA Section */}
        <Card className="text-center py-16">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center justify-center gap-2">
              <Shield className="h-8 w-8 text-green-500" />
              Ready to Experience These Features?
            </CardTitle>
            <CardDescription className="text-lg max-w-2xl mx-auto">
              Join our community and start making a difference in safety today
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/dashboard">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="/feed">
                  Explore Community
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}