"use client";

import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, AlertTriangle, Ambulance, Shield, Users, QrCode } from "lucide-react";
import dynamic from "next/dynamic";
import { useMemo } from "react";

// Dynamically import map component to avoid SSR issues
const MapComponent = dynamic(() => import("@/components/MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] bg-muted rounded-lg flex items-center justify-center">
      <div className="text-muted-foreground">Loading map...</div>
    </div>
  ),
});

const areaRankings = [
  { name: "Connaught Place", city: "Delhi", score: 82, reports: 2, color: "green" },
  { name: "Koramangala", city: "Bengaluru", score: 88, reports: 5, color: "green" },
  { name: "Bandra West", city: "Mumbai", score: 75, reports: 12, color: "yellow" },
  { name: "Hitech City", city: "Hyderabad", score: 65, reports: 8, color: "orange" },
];

const emergencyContacts = [
  { name: "Police Emergency", number: "100 (All India)", icon: Shield, color: "blue" },
  { name: "National Emergency", number: "112 (Single Number)", icon: AlertTriangle, color: "red" },
  { name: "Safety Helpline", number: "1091 (24x7)", icon: Phone, color: "purple" },
  { name: "Mental Health", number: "14567 (iCall)", icon: Users, color: "pink" },
  { name: "Child Helpline", number: "1098 (For Children)", icon: Users, color: "green" },
];

export default function MapPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Map Container */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <MapComponent />
          </CardContent>
        </Card>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mb-6 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
            <span className="text-sm">Safe (90-100)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
            <span className="text-sm">Monitor (70-89)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-orange-500"></div>
            <span className="text-sm">Caution (60-69)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-red-500"></div>
            <span className="text-sm">Unsafe (&lt;60)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Area Rankings */}
          <Card>
            <CardHeader>
              <CardTitle>Area Rankings</CardTitle>
              <CardDescription>Regional safety scores</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {areaRankings.map((area, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{area.name}</div>
                      <div className="text-sm text-muted-foreground">{area.city}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">{area.score}</div>
                      <div className="text-xs text-muted-foreground">{area.reports} reports filed</div>
                    </div>
                  </div>
                  <div className={`h-2 rounded-full ${
                    area.color === "green" ? "bg-green-500" :
                    area.color === "yellow" ? "bg-yellow-500" :
                    area.color === "orange" ? "bg-orange-500" : "bg-red-500"
                  }`} style={{ width: `${area.score}%` }}></div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Emergency Resources */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Emergency Resources
              </CardTitle>
              <CardDescription>Available 24/7 for everyone</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="font-semibold text-sm mb-3">EMERGENCY HELPLINES</div>
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors">
                  <div className={`p-2 rounded-lg ${
                    contact.color === "blue" ? "bg-blue-500/20 text-blue-400" :
                    contact.color === "red" ? "bg-red-500/20 text-red-400" :
                    contact.color === "purple" ? "bg-purple-500/20 text-purple-400" :
                    contact.color === "pink" ? "bg-pink-500/20 text-pink-400" :
                    "bg-green-500/20 text-green-400"
                  }`}>
                    <contact.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{contact.name}</div>
                    <div className="text-xs text-muted-foreground">{contact.number}</div>
                  </div>
                </div>
              ))}
              
              <div className="font-semibold text-sm mt-6 mb-3">SUPPORT SERVICES</div>
              <div className="text-sm space-y-2 text-muted-foreground">
                <p>• Labour Department: 1800-111-888</p>
                <p>• Women's Helpline: 181</p>
                <p>• Senior Citizens: 14567</p>
              </div>
            </CardContent>
          </Card>

          {/* QR Emergency Badge */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <QrCode className="h-5 w-5" />
                QR Emergency Badge
              </CardTitle>
              <CardDescription>Instant verification for authorities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white p-6 rounded-lg flex items-center justify-center">
                <QrCode className="h-32 w-32 text-black" />
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium">Scan for Verified Reports</div>
                <div className="text-xs text-muted-foreground">
                  Shows your SafeScore & validated incidents
                </div>
              </div>
              <div className="space-y-2">
                <Button className="w-full">Download Badge</Button>
                <Button variant="outline" className="w-full">
                  Share with Emergency Contact
                </Button>
              </div>
              <div className="text-xs text-muted-foreground pt-2 border-t">
                <strong>Privacy Protected:</strong> QR code is encrypted and contains no personal information
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
