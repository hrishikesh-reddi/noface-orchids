"use client";

import * as React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { 
  FileText, 
  CheckCircle, 
  Clock, 
  TrendingUp, 
  Eye, 
  MessageSquare, 
  Share, 
  Users, 
  Award, 
  AlertCircle, 
  ArrowRight, 
  Calendar, 
  MapPin, 
  UserCheck, 
  XCircle, 
  Zap,
  Download,
  Filter,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// Mock data for validated reports
const validatedReportsData = [
  {
    id: 1,
    title: "Workplace harassment at IT Company in Bengaluru",
    dateSubmitted: "19/01/2024",
    status: "Accepted",
    validator: "Community Jury",
    score: 5,
    category: "Workplace Safety",
    reason: "Sufficient evidence provided"
  },
  {
    id: 3,
    title: "Unsafe construction site in Gurgaon Sector 29",
    dateSubmitted: "10/01/2024",
    status: "Accepted",
    validator: "Community Jury",
    score: 5,
    category: "Workplace Safety",
    reason: "Multiple witness accounts"
  },
  {
    id: 4,
    title: "Street harassment incident in Mumbai",
    dateSubmitted: "15/01/2024",
    status: "Dismissed",
    validator: "Community Jury",
    score: -2,
    category: "Public Safety",
    reason: "Insufficient evidence"
  },
  {
    id: 5,
    title: "Unsafe parking conditions in Pune",
    dateSubmitted: "05/01/2024",
    status: "Accepted",
    validator: "Community Jury",
    score: 4,
    category: "Public Safety",
    reason: "Verified by local authorities"
  },
  {
    id: 6,
    title: "Cyberbullying case in college",
    dateSubmitted: "22/12/2023",
    status: "Accepted",
    validator: "Community Jury",
    score: 3,
    category: "Online Safety",
    reason: "Documentation provided"
  }
];

// Mock data for jury validations
const juryValidationsData = [
  {
    caseId: 1,
    reporter: "Anonymous User #1245",
    userVerdict: "Accepted",
    finalVerdict: "Accepted",
    accuracy: "Correct",
    timestamp: "19/01/2024 2:15 PM",
    category: "Workplace Safety"
  },
  {
    caseId: 2,
    reporter: "Anonymous User #8763",
    userVerdict: "Dismissed",
    finalVerdict: "Accepted",
    accuracy: "Incorrect",
    timestamp: "18/01/2024 4:30 PM",
    category: "Public Safety"
  },
  {
    caseId: 3,
    reporter: "Anonymous User #4321",
    userVerdict: "Accepted",
    finalVerdict: "Accepted",
    accuracy: "Correct",
    timestamp: "10/01/2024 4:30 PM",
    category: "Workplace Safety"
  },
  {
    caseId: 4,
    reporter: "Anonymous User #9876",
    userVerdict: "Accepted",
    finalVerdict: "Dismissed",
    accuracy: "Incorrect",
    timestamp: "15/01/2024 10:00 AM",
    category: "Public Safety"
  },
  {
    caseId: 5,
    reporter: "Anonymous User #5678",
    userVerdict: "Dismissed",
    finalVerdict: "Dismissed",
    accuracy: "Correct",
    timestamp: "05/01/2024 11:45 AM",
    category: "Public Safety"
  }
];

// Mock data for user insights
const userInsightsData = {
  topCategories: [
    { category: "Workplace Safety", count: 8 },
    { category: "Public Safety", count: 4 },
    { category: "Online Safety", count: 2 }
  ],
  acceptanceRate: 75,
  participationScore: 85,
  leaderboardPosition: 12
};

// Mock data for trend charts
const validationTrendData = [
  { date: "Jan 1", validated: 4, dismissed: 1 },
  { date: "Jan 8", validated: 6, dismissed: 2 },
  { date: "Jan 15", validated: 5, dismissed: 3 },
  { date: "Jan 22", validated: 7, dismissed: 1 },
  { date: "Jan 29", validated: 8, dismissed: 2 }
];

const accuracyTrendData = [
  { date: "Jan 1", accuracy: 80 },
  { date: "Jan 8", accuracy: 85 },
  { date: "Jan 15", accuracy: 75 },
  { date: "Jan 22", accuracy: 90 },
  { date: "Jan 29", accuracy: 82 }
];

const categoryAccuracyData = [
  { category: "Workplace Safety", accuracy: 90 },
  { category: "Public Safety", accuracy: 70 },
  { category: "Online Safety", accuracy: 85 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export function ValidatedReportsSection() {
  const [expanded, setExpanded] = React.useState(false);
  const [sortConfig, setSortConfig] = React.useState<{ key: string; direction: string } | null>(null);
  const [filterStatus, setFilterStatus] = React.useState("all");
  const [filterCategory, setFilterCategory] = React.useState("all");

  const handleSort = (key: string) => {
    let direction = "ascending";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedAndFilteredData = React.useMemo(() => {
    let filtered = validatedReportsData;
    
    if (filterStatus !== "all") {
      filtered = filtered.filter(item => 
        filterStatus === "accepted" ? item.status === "Accepted" : item.status === "Dismissed"
      );
    }
    
    if (filterCategory !== "all") {
      filtered = filtered.filter(item => item.category === filterCategory);
    }
    
    if (sortConfig !== null) {
      filtered.sort((a, b) => {
        if (a[sortConfig.key as keyof typeof a] < b[sortConfig.key as keyof typeof b]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key as keyof typeof a] > b[sortConfig.key as keyof typeof b]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    
    return filtered;
  }, [filterStatus, filterCategory, sortConfig]);

  const uniqueCategories = Array.from(new Set(validatedReportsData.map(item => item.category)));

  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Validated Reports
            </CardTitle>
            <CardDescription>
              Detailed view of your validated reports with status and scores
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2"
            >
              {expanded ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  Collapse
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  Expand
                </>
              )}
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {expanded && (
          <>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="accepted">Accepted</SelectItem>
                    <SelectItem value="dismissed">Dismissed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select value={filterCategory} onValueChange={setFilterCategory}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {uniqueCategories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="cursor-pointer" onClick={() => handleSort("id")}>
                      Report ID
                    </TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead className="cursor-pointer" onClick={() => handleSort("dateSubmitted")}>
                      Date Submitted
                    </TableHead>
                    <TableHead className="cursor-pointer" onClick={() => handleSort("status")}>
                      Status
                    </TableHead>
                    <TableHead>Validator</TableHead>
                    <TableHead className="cursor-pointer" onClick={() => handleSort("score")}>
                      Score
                    </TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Reason</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedAndFilteredData.map((report) => (
                    <TableRow key={report.id}>
                      <TableCell className="font-medium">{report.id}</TableCell>
                      <TableCell className="max-w-xs truncate">{report.title}</TableCell>
                      <TableCell>{report.dateSubmitted}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={report.status === "Accepted" ? "default" : "destructive"}
                          className={report.status === "Accepted" ? "bg-green-500" : ""}
                        >
                          {report.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{report.validator}</TableCell>
                      <TableCell>
                        <span className={report.score > 0 ? "text-green-500" : "text-red-500"}>
                          {report.score > 0 ? `+${report.score}` : report.score}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{report.category}</Badge>
                      </TableCell>
                      <TableCell className="max-w-xs truncate">{report.reason}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Validation Trend</CardTitle>
                  <CardDescription>Accepted vs Dismissed over time</CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={validationTrendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="validated" fill="#10b981" name="Accepted" />
                      <Bar dataKey="dismissed" fill="#ef4444" name="Dismissed" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Top Validated Categories</CardTitle>
                  <CardDescription>Most reported categories</CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={userInsightsData.topCategories}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="count"
                        nameKey="category"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {userInsightsData.topCategories.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </>
        )}
        
        {!expanded && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Click "Expand" to view detailed validated reports</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function JuryValidationsSection() {
  const [expanded, setExpanded] = React.useState(false);
  const [filterAccuracy, setFilterAccuracy] = React.useState("all");
  const [sortConfig, setSortConfig] = React.useState<{ key: string; direction: string } | null>(null);

  const handleSort = (key: string) => {
    let direction = "ascending";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedAndFilteredData = React.useMemo(() => {
    let filtered = juryValidationsData;
    
    if (filterAccuracy !== "all") {
      filtered = filtered.filter(item => item.accuracy.toLowerCase() === filterAccuracy);
    }
    
    if (sortConfig !== null) {
      filtered.sort((a, b) => {
        if (a[sortConfig.key as keyof typeof a] < b[sortConfig.key as keyof typeof b]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key as keyof typeof a] > b[sortConfig.key as keyof typeof b]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    
    return filtered;
  }, [filterAccuracy, sortConfig]);

  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Jury Validations
            </CardTitle>
            <CardDescription>
              Your contributions as a jury member in validating reports
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2"
            >
              {expanded ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  Collapse
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  Expand
                </>
              )}
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {expanded && (
          <>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select value={filterAccuracy} onValueChange={setFilterAccuracy}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Accuracy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Reviews</SelectItem>
                    <SelectItem value="correct">Correct</SelectItem>
                    <SelectItem value="incorrect">Incorrect</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="cursor-pointer" onClick={() => handleSort("caseId")}>
                      Case ID
                    </TableHead>
                    <TableHead>Reporter</TableHead>
                    <TableHead className="cursor-pointer" onClick={() => handleSort("userVerdict")}>
                      Your Verdict
                    </TableHead>
                    <TableHead>Final Verdict</TableHead>
                    <TableHead className="cursor-pointer" onClick={() => handleSort("accuracy")}>
                      Accuracy
                    </TableHead>
                    <TableHead className="cursor-pointer" onClick={() => handleSort("timestamp")}>
                      Timestamp
                    </TableHead>
                    <TableHead>Category</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedAndFilteredData.map((validation) => (
                    <TableRow key={validation.caseId}>
                      <TableCell className="font-medium">{validation.caseId}</TableCell>
                      <TableCell>{validation.reporter}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={validation.userVerdict === "Accepted" ? "default" : "destructive"}
                          className={validation.userVerdict === "Accepted" ? "bg-green-500" : ""}
                        >
                          {validation.userVerdict}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={validation.finalVerdict === "Accepted" ? "default" : "destructive"}
                          className={validation.finalVerdict === "Accepted" ? "bg-green-500" : ""}
                        >
                          {validation.finalVerdict}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={validation.accuracy === "Correct" ? "default" : "destructive"}
                          className={validation.accuracy === "Correct" ? "bg-green-500" : "bg-red-500"}
                        >
                          {validation.accuracy}
                        </Badge>
                      </TableCell>
                      <TableCell>{validation.timestamp}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{validation.category}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Accuracy Trend</CardTitle>
                  <CardDescription>Your validation accuracy over time</CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={accuracyTrendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="accuracy" 
                        stroke="#8884d8" 
                        activeDot={{ r: 8 }} 
                        name="Accuracy %"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Category-wise Accuracy</CardTitle>
                  <CardDescription>Your accuracy by report category</CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={categoryAccuracyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="category" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="accuracy" fill="#8884d8" name="Accuracy %" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </>
        )}
        
        {!expanded && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Click "Expand" to view detailed jury validations</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function UserInsightsSection() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5" />
          User Insights
        </CardTitle>
        <CardDescription>
          Your performance metrics and community standing
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Top Categories</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {userInsightsData.topCategories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm">{category.category}</span>
                    <Badge variant="secondary">{category.count}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Acceptance Rate</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-500 mb-2">
                {userInsightsData.acceptanceRate}%
              </div>
              <Progress value={userInsightsData.acceptanceRate} className="h-2" />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Participation Score</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-500 mb-2">
                {userInsightsData.participationScore}
              </div>
              <Progress value={userInsightsData.participationScore} className="h-2" />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Leaderboard Position</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-500">
                #{userInsightsData.leaderboardPosition}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Top {Math.round((userInsightsData.leaderboardPosition / 1000) * 100)}% of users
              </p>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}