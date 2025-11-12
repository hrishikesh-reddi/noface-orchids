"use client";

import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, CheckCircle, Clock, TrendingUp, Eye, MessageSquare, Share, Users, Award, AlertCircle, ArrowRight, Calendar, MapPin, UserCheck, XCircle, Zap } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ValidatedReportsSection, JuryValidationsSection, UserInsightsSection } from "@/components/DashboardComponents";

const reportsData = [
  {
    id: 1,
    title: "Workplace harassment at IT Company in Bengaluru",
    category: "Workplace Safety",
    location: "Bengaluru",
    date: "19/01/2024",
    votes: 245,
    comments: 89,
    status: "validated" as const,
    score: 5,
    submittedDate: "19/01/2024 10:30 AM",
    processedDate: "20/01/2024 2:15 PM",
    juryCount: 12,
    juryVotes: { validated: 10, dismissed: 2 },
    processingTime: "1 day 3 hours",
    actions: ["HR notified", "Investigation started", "Witnesses contacted"],
  },
  {
    id: 2,
    title: "Safety concern near Connaught Place Metro Station, Delhi",
    category: "Public Safety",
    location: "Delhi",
    date: "18/01/2024",
    votes: 67,
    comments: 23,
    status: "pending" as const,
    score: 0,
    submittedDate: "18/01/2024 3:45 PM",
    processedDate: null,
    juryCount: 5,
    juryVotes: { validated: 3, dismissed: 2 },
    processingTime: "In progress",
    actions: ["Under review", "Awaiting more evidence"],
  },
  {
    id: 3,
    title: "Unsafe construction site in Gurgaon Sector 29",
    category: "Workplace Safety",
    location: "Gurgaon",
    date: "10/01/2024",
    votes: 199,
    comments: 45,
    status: "validated" as const,
    score: 5,
    submittedDate: "10/01/2024 9:20 AM",
    processedDate: "11/01/2024 4:30 PM",
    juryCount: 15,
    juryVotes: { validated: 13, dismissed: 2 },
    processingTime: "1 day 7 hours",
    actions: ["Authorities notified", "Site inspection scheduled", "Safety measures recommended"],
  },
  {
    id: 4,
    title: "Street harassment incident in Mumbai",
    category: "Public Safety",
    location: "Mumbai",
    date: "15/01/2024",
    votes: 134,
    comments: 56,
    status: "dismissed" as const,
    score: -2,
    submittedDate: "15/01/2024 11:15 AM",
    processedDate: "16/01/2024 10:00 AM",
    juryCount: 8,
    juryVotes: { validated: 2, dismissed: 6 },
    processingTime: "22 hours",
    actions: ["Insufficient evidence", "Report dismissed"],
  },
];

const activityTimeline = [
  {
    id: 1,
    type: "submitted",
    title: "Report submitted",
    description: "Workplace harassment at IT Company in Bengaluru",
    date: "19/01/2024 10:30 AM",
    icon: FileText,
    color: "text-blue-400",
  },
  {
    id: 2,
    type: "jury_review",
    title: "Jury review started",
    description: "12 jurors assigned to review your report",
    date: "19/01/2024 2:00 PM",
    icon: Users,
    color: "text-yellow-400",
  },
  {
    id: 3,
    type: "validated",
    title: "Report validated",
    description: "10 out of 12 jurors validated your report",
    date: "20/01/2024 2:15 PM",
    icon: CheckCircle,
    color: "text-green-400",
  },
  {
    id: 4,
    type: "action",
    title: "Action taken",
    description: "HR notified and investigation started",
    date: "20/01/2024 3:00 PM",
    icon: Zap,
    color: "text-purple-400",
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Profile Card */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-bold">
                  H
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Hrishikesh Reddy Gavinolla</h2>
                  <p className="text-muted-foreground">hrrn@xxxx@gmail.com</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                      Safe Member
                    </Badge>
                    <span className="text-sm text-muted-foreground">Member since 18/11/2025</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400">95</div>
                <div className="text-sm text-muted-foreground">SafeScore</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Total Reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">12</div>
              <p className="text-xs text-muted-foreground mt-1">5 validated, 4 pending</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Validated Reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">5</div>
              <p className="text-xs text-muted-foreground mt-1">3 dismissed</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Jury Validations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">34</div>
              <p className="text-xs text-muted-foreground mt-1">28 accurate reviews</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Accuracy Rate
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">82%</div>
              <p className="text-xs text-muted-foreground mt-1">Based on 34 reviews</p>
            </CardContent>
          </Card>
        </div>

        {/* User Insights Section */}
        <UserInsightsSection />
        
        {/* Validated Reports Section */}
        <ValidatedReportsSection />
        
        {/* Jury Validations Section */}
        <JuryValidationsSection />
        
        {/* SafeScore Tiers */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>SafeScore Tiers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>90-100</span>
                <span className="text-green-400 font-medium">Safe</span>
              </div>
              <Progress value={95} className="h-3 bg-green-900/30 [&>div]:bg-green-400" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>70-89</span>
                <span className="text-yellow-400 font-medium">Monitor</span>
              </div>
              <Progress value={0} className="h-3 bg-yellow-900/30 [&>div]:bg-yellow-400" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>60-69</span>
                <span className="text-orange-400 font-medium">Caution</span>
              </div>
              <Progress value={0} className="h-3 bg-orange-900/30 [&>div]:bg-orange-400" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>&lt;60</span>
                <span className="text-red-400 font-medium">Unsafe</span>
              </div>
              <Progress value={0} className="h-3 bg-red-900/30 [&>div]:bg-red-400" />
            </div>
          </CardContent>
        </Card>

        {/* Submitted Reports */}
        <Card>
          <CardHeader>
            <CardTitle>Submitted Reports</CardTitle>
            <CardDescription>All reports you've submitted to the community</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {reportsData.map((report) => (
              <div key={report.id} className="border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="outline">{report.category}</Badge>
                      {report.status === "validated" && (
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                          Validated
                        </Badge>
                      )}
                      {report.status === "pending" && (
                        <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                          Pending
                        </Badge>
                      )}
                      {report.score > 0 && (
                        <span className="text-green-400 font-semibold">+{report.score}</span>
                      )}
                    </div>
                    <h3 className="font-semibold">{report.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{report.category}</span>
                      <span>•</span>
                      <span>{report.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {report.votes} votes
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="h-3 w-3" />
                        {report.comments} comments
                      </span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Share className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
