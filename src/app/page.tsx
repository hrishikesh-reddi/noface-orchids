"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { 
  Shield, 
  Users, 
  TrendingUp, 
  Clock, 
  Mic, 
  UserCheck, 
  Wallet, 
  MapPin, 
  Heart, 
  Zap, 
  Award,
  ArrowRight
} from "lucide-react";
import UniqueFeatures from "@/components/UniqueFeatures";
import NoFaceLogo from "@/components/NoFaceLogo";
import NoFaceText from "@/components/NoFaceText";
import KeyFeatures from "@/components/KeyFeatures";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <NoFaceLogo className="h-24 w-24 mx-auto" />
          </div>
          <div className="flex justify-center mb-6">
            <NoFaceText className="text-5xl font-bold" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Join a community-driven platform that empowers individuals to report safety concerns anonymously 
            while leveraging AI and collective intelligence to create safer environments for everyone.
          </p>
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
        </div>

        {/* Key Features */}
        <KeyFeatures />

        {/* Unique Features */}
        <UniqueFeatures />

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Verified & Secure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                All reports are verified through our community jury system ensuring accuracy and trust.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Community Powered</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Join thousands of community members working together to create safer spaces.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <TrendingUp className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Real Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                See how your reports lead to real-world change with our transparent impact tracking.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="text-center py-16">
          <CardHeader>
            <CardTitle className="text-3xl">Ready to Make a Difference?</CardTitle>
            <CardDescription className="text-lg max-w-2xl mx-auto">
              Join thousands of community members who are already helping create safer spaces for everyone
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/dashboard">
                Join NoFace Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}