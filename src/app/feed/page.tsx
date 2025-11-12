"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Filter, 
  ArrowUp, 
  ArrowDown, 
  MessageSquare, 
  Share, 
  TrendingUp,
  Flame,
  Clock,
  CheckCircle2,
  ChevronDown
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const feedPosts = [
  {
    id: 1,
    category: "Workplace Safety",
    status: "pending",
    author: "u/anonymous_hr_456",
    time: "2h ago",
    title: "Workplace harassment at IT Company in Bengaluru - Multiple witnesses",
    description: "Detailed account of ongoing workplace harassment at a tech company in Whitefield. Multiple employees have witnessed the incidents. HR has been notified but no action taken. Contact: +91-98766-43210 for more information.",
    votes: 89,
    comments: 69,
    safeScore: 100,
  },
  {
    id: 2,
    category: "Public Safety",
    status: "validated",
    author: "u/delhi_guardian_42",
    time: "5h ago",
    title: "Verified: Safety concern near Connaught Place Metro Station, Delhi",
    description: "After community validation and jury review, this location near CP Metro has been identified as having safety concerns during late evening hours. Enhanced security requested. Caution between 10 PM - 6 AM. Emergency: 100 or 112.",
    votes: 156,
    comments: 23,
    safeScore: 65,
  },
  {
    id: 3,
    category: "Update",
    status: "dismissed",
    author: "u/railway_mod_mumbai",
    time: "1d ago",
    title: "Update: Previous report about Marine Drive incident dismissed - false information",
    description: "Following thorough investigation by our AI system and jury validation, this report has been dismissed due to inconsistencies and lack of evidence. The reporter's SafeScore is being adjusted. Always verify before reporting.",
    votes: 234,
    comments: 5,
    safeScore: -5,
  },
  {
    id: 4,
    category: "Workplace Safety",
    status: "pending",
    author: "u/gurgaon_dev_worker",
    time: "5h ago",
    title: "Anonymous report: Unsafe conditions at construction site in Gurgaon Sector 29",
    description: "Using anonymous reporting to highlight safety violations at a construction site in Sector 29, Gurgaon. Workers lack proper safety equipment. Multiple job loss concerns but no job loss prevents reporting. Contact Labour Department: 1800-111-888 if you have information.",
    votes: 67,
    comments: 65,
    safeScore: 100,
  },
];

export default function FeedPage() {
  const [voteStates, setVoteStates] = useState<Record<number, "up" | "down" | null>>({});
  const [activeTab, setActiveTab] = useState("hot");
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [sortBy, setSortBy] = useState("votes");

  const handleVote = (postId: number, voteType: "up" | "down") => {
    setVoteStates((prev) => {
      const current = prev[postId];
      if (current === voteType) {
        // If clicking the same vote, remove it
        const newState = { ...prev };
        delete newState[postId];
        return newState;
      }
      // Otherwise, set the new vote
      return { ...prev, [postId]: voteType };
    });
  };

  const getVoteCount = (post: typeof feedPosts[0]) => {
    const voteState = voteStates[post.id];
    if (voteState === "up") return post.votes + 1;
    if (voteState === "down") return post.votes - 1;
    return post.votes;
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Feed */}
          <div className="lg:col-span-3 space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">NoFace Community</h1>
                <p className="text-muted-foreground">
                  A safe place to report, validate, and support accountability.
                </p>
              </div>
              <DropdownMenu open={filterOpen} onOpenChange={setFilterOpen}>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64">
                  <div className="p-2">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Category</h4>
                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Categories</SelectItem>
                            <SelectItem value="Workplace Safety">Workplace Safety</SelectItem>
                            <SelectItem value="Public Safety">Public Safety</SelectItem>
                            <SelectItem value="Online Safety">Online Safety</SelectItem>
                            <SelectItem value="Update">Update</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium mb-2">Status</h4>
                        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Statuses</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="validated">Validated</SelectItem>
                            <SelectItem value="dismissed">Dismissed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium mb-2">Sort By</h4>
                        <Select value={sortBy} onValueChange={setSortBy}>
                          <SelectTrigger>
                            <SelectValue placeholder="Sort by" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="votes">Votes</SelectItem>
                            <SelectItem value="comments">Comments</SelectItem>
                            <SelectItem value="time">Time</SelectItem>
                            <SelectItem value="safeScore">SafeScore</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => {
                            setSelectedCategory("all");
                            setSelectedStatus("all");
                            setSortBy("votes");
                          }}
                        >
                          Reset
                        </Button>
                        <Button 
                          size="sm" 
                          className="flex-1"
                          onClick={() => setFilterOpen(false)}
                        >
                          Apply
                        </Button>
                      </div>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger 
                  value="hot" 
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-200"
                >
                  <Flame className="h-4 w-4 mr-2" />
                  Hot
                </TabsTrigger>
                <TabsTrigger 
                  value="new" 
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-200"
                >
                  <Clock className="h-4 w-4 mr-2" />
                  New
                </TabsTrigger>
                <TabsTrigger 
                  value="validated" 
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-200"
                >
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Validated
                </TabsTrigger>
              </TabsList>
              <TabsContent value="hot">
                {/* Feed Posts */}
                <div className="space-y-4 mt-4">
                  {feedPosts.map((post) => {
                    const voteState = voteStates[post.id];
                    const voteCount = getVoteCount(post);
                    const isUpvoted = voteState === "up";
                    const isDownvoted = voteState === "down";
                    
                    return (
                      <Card key={post.id} className="hover:bg-accent/20 transition-colors">
                        <CardContent className="pt-6">
                          <div className="flex gap-4">
                            {/* Reddit-style Vote Section */}
                            <div className="flex flex-col items-center gap-1 pr-2">
                              <button
                                onClick={() => handleVote(post.id, "up")}
                                className={cn(
                                  "p-1.5 rounded-md transition-all duration-200 hover:bg-orange-500/20 group",
                                  isUpvoted && "bg-orange-500/30 text-orange-500"
                                )}
                              >
                                <ArrowUp 
                                  className={cn(
                                    "h-5 w-5 transition-all",
                                    isUpvoted 
                                      ? "text-orange-500 fill-orange-500" 
                                      : "text-muted-foreground group-hover:text-orange-500"
                                  )} 
                                />
                              </button>
                              <span className={cn(
                                "font-bold text-sm min-w-[2rem] text-center py-1",
                                isUpvoted && "text-orange-500",
                                isDownvoted && "text-blue-500"
                              )}>
                                {voteCount}
                              </span>
                              <button
                                onClick={() => handleVote(post.id, "down")}
                                className={cn(
                                  "p-1.5 rounded-md transition-all duration-200 hover:bg-blue-500/20 group",
                                  isDownvoted && "bg-blue-500/30 text-blue-500"
                                )}
                              >
                                <ArrowDown 
                                  className={cn(
                                    "h-5 w-5 transition-all",
                                    isDownvoted 
                                      ? "text-blue-500 fill-blue-500" 
                                      : "text-muted-foreground group-hover:text-blue-500"
                                  )} 
                                />
                              </button>
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-3">
                              <div className="flex items-center gap-2 flex-wrap">
                                <Badge variant="outline">{post.category}</Badge>
                                {post.status === "validated" && (
                                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                                    Validated
                                  </Badge>
                                )}
                                {post.status === "pending" && (
                                  <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                                    Pending
                                  </Badge>
                                )}
                                {post.status === "dismissed" && (
                                  <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                                    Dismissed
                                  </Badge>
                                )}
                                <span className="text-sm text-muted-foreground">
                                  Posted by {post.author} • {post.time}
                                </span>
                                {post.safeScore !== 0 && (
                                  <span className={post.safeScore > 0 ? "text-green-400 font-semibold" : "text-red-400 font-semibold"}>
                                    {post.safeScore > 0 ? "+" : ""}{post.safeScore} SafeScore
                                  </span>
                                )}
                              </div>

                              <h3 className="font-semibold text-lg">{post.title}</h3>
                              <p className="text-muted-foreground text-sm">{post.description}</p>

                              <div className="flex items-center gap-4 pt-2">
                                <Button variant="ghost" size="sm" className="gap-2">
                                  <MessageSquare className="h-4 w-4" />
                                  {post.comments} Comments
                                </Button>
                                <Button variant="ghost" size="sm" className="gap-2">
                                  <Share className="h-4 w-4" />
                                  Share
                                </Button>
                                <Button variant="ghost" size="sm">
                                  Report
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>
              <TabsContent value="new">
                {/* Feed Posts - same as above for now */}
                <div className="space-y-4 mt-4">
                  {feedPosts.map((post) => {
                    const voteState = voteStates[post.id];
                    const voteCount = getVoteCount(post);
                    const isUpvoted = voteState === "up";
                    const isDownvoted = voteState === "down";
                    
                    return (
                      <Card key={post.id} className="hover:bg-accent/20 transition-colors">
                        <CardContent className="pt-6">
                          <div className="flex gap-4">
                            {/* Reddit-style Vote Section */}
                            <div className="flex flex-col items-center gap-1 pr-2">
                              <button
                                onClick={() => handleVote(post.id, "up")}
                                className={cn(
                                  "p-1.5 rounded-md transition-all duration-200 hover:bg-orange-500/20 group",
                                  isUpvoted && "bg-orange-500/30 text-orange-500"
                                )}
                              >
                                <ArrowUp 
                                  className={cn(
                                    "h-5 w-5 transition-all",
                                    isUpvoted 
                                      ? "text-orange-500 fill-orange-500" 
                                      : "text-muted-foreground group-hover:text-orange-500"
                                  )} 
                                />
                              </button>
                              <span className={cn(
                                "font-bold text-sm min-w-[2rem] text-center py-1",
                                isUpvoted && "text-orange-500",
                                isDownvoted && "text-blue-500"
                              )}>
                                {voteCount}
                              </span>
                              <button
                                onClick={() => handleVote(post.id, "down")}
                                className={cn(
                                  "p-1.5 rounded-md transition-all duration-200 hover:bg-blue-500/20 group",
                                  isDownvoted && "bg-blue-500/30 text-blue-500"
                                )}
                              >
                                <ArrowDown 
                                  className={cn(
                                    "h-5 w-5 transition-all",
                                    isDownvoted 
                                      ? "text-blue-500 fill-blue-500" 
                                      : "text-muted-foreground group-hover:text-blue-500"
                                  )} 
                                />
                              </button>
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-3">
                              <div className="flex items-center gap-2 flex-wrap">
                                <Badge variant="outline">{post.category}</Badge>
                                {post.status === "validated" && (
                                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                                    Validated
                                  </Badge>
                                )}
                                {post.status === "pending" && (
                                  <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                                    Pending
                                  </Badge>
                                )}
                                {post.status === "dismissed" && (
                                  <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                                    Dismissed
                                  </Badge>
                                )}
                                <span className="text-sm text-muted-foreground">
                                  Posted by {post.author} • {post.time}
                                </span>
                                {post.safeScore !== 0 && (
                                  <span className={post.safeScore > 0 ? "text-green-400 font-semibold" : "text-red-400 font-semibold"}>
                                    {post.safeScore > 0 ? "+" : ""}{post.safeScore} SafeScore
                                  </span>
                                )}
                              </div>

                              <h3 className="font-semibold text-lg">{post.title}</h3>
                              <p className="text-muted-foreground text-sm">{post.description}</p>

                              <div className="flex items-center gap-4 pt-2">
                                <Button variant="ghost" size="sm" className="gap-2">
                                  <MessageSquare className="h-4 w-4" />
                                  {post.comments} Comments
                                </Button>
                                <Button variant="ghost" size="sm" className="gap-2">
                                  <Share className="h-4 w-4" />
                                  Share
                                </Button>
                                <Button variant="ghost" size="sm">
                                  Report
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>
              <TabsContent value="validated">
                {/* Feed Posts - same as above for now */}
                <div className="space-y-4 mt-4">
                  {feedPosts.map((post) => {
                    const voteState = voteStates[post.id];
                    const voteCount = getVoteCount(post);
                    const isUpvoted = voteState === "up";
                    const isDownvoted = voteState === "down";
                    
                    return (
                      <Card key={post.id} className="hover:bg-accent/20 transition-colors">
                        <CardContent className="pt-6">
                          <div className="flex gap-4">
                            {/* Reddit-style Vote Section */}
                            <div className="flex flex-col items-center gap-1 pr-2">
                              <button
                                onClick={() => handleVote(post.id, "up")}
                                className={cn(
                                  "p-1.5 rounded-md transition-all duration-200 hover:bg-orange-500/20 group",
                                  isUpvoted && "bg-orange-500/30 text-orange-500"
                                )}
                              >
                                <ArrowUp 
                                  className={cn(
                                    "h-5 w-5 transition-all",
                                    isUpvoted 
                                      ? "text-orange-500 fill-orange-500" 
                                      : "text-muted-foreground group-hover:text-orange-500"
                                  )} 
                                />
                              </button>
                              <span className={cn(
                                "font-bold text-sm min-w-[2rem] text-center py-1",
                                isUpvoted && "text-orange-500",
                                isDownvoted && "text-blue-500"
                              )}>
                                {voteCount}
                              </span>
                              <button
                                onClick={() => handleVote(post.id, "down")}
                                className={cn(
                                  "p-1.5 rounded-md transition-all duration-200 hover:bg-blue-500/20 group",
                                  isDownvoted && "bg-blue-500/30 text-blue-500"
                                )}
                              >
                                <ArrowDown 
                                  className={cn(
                                    "h-5 w-5 transition-all",
                                    isDownvoted 
                                      ? "text-blue-500 fill-blue-500" 
                                      : "text-muted-foreground group-hover:text-blue-500"
                                  )} 
                                />
                              </button>
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-3">
                              <div className="flex items-center gap-2 flex-wrap">
                                <Badge variant="outline">{post.category}</Badge>
                                {post.status === "validated" && (
                                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                                    Validated
                                  </Badge>
                                )}
                                {post.status === "pending" && (
                                  <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                                    Pending
                                  </Badge>
                                )}
                                {post.status === "dismissed" && (
                                  <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                                    Dismissed
                                  </Badge>
                                )}
                                <span className="text-sm text-muted-foreground">
                                  Posted by {post.author} • {post.time}
                                </span>
                                {post.safeScore !== 0 && (
                                  <span className={post.safeScore > 0 ? "text-green-400 font-semibold" : "text-red-400 font-semibold"}>
                                    {post.safeScore > 0 ? "+" : ""}{post.safeScore} SafeScore
                                  </span>
                                )}
                              </div>

                              <h3 className="font-semibold text-lg">{post.title}</h3>
                              <p className="text-muted-foreground text-sm">{post.description}</p>

                              <div className="flex items-center gap-4 pt-2">
                                <Button variant="ghost" size="sm" className="gap-2">
                                  <MessageSquare className="h-4 w-4" />
                                  {post.comments} Comments
                                </Button>
                                <Button variant="ghost" size="sm" className="gap-2">
                                  <Share className="h-4 w-4" />
                                  Share
                                </Button>
                                <Button variant="ghost" size="sm">
                                  Report
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Today's Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-2xl font-bold">342</div>
                  <div className="text-sm text-muted-foreground">Reports Submitted</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">1,234</div>
                  <div className="text-sm text-muted-foreground">Jury Validations</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">89</div>
                  <div className="text-sm text-muted-foreground">Active Jurors</div>
                </div>
              </CardContent>
            </Card>

            {/* SafeScore Widget */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Your SafeScore</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-2">
                  <div className="text-5xl font-bold text-green-400">95</div>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                    Safe Tier
                  </Badge>
                  <p className="text-xs text-muted-foreground pt-2">
                    Keep up the good work! Your reputation is strong.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Jury Duty */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Jury Duty Available
                </CardTitle>
                <CardDescription>8 reports need your validation</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Start Reviewing</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}