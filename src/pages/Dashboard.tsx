import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  User,
  Settings,
  FileText,
  Video,
  Code,
  Bot,
  PenTool,
  Star,
  Calendar,
  DollarSign,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Dashboard() {
  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
    avatar: "/placeholder.svg",
    joinDate: "January 2024",
    membershipTier: "Pro",
    completedProjects: 24,
    rating: 4.9,
    earnings: "$12,450",
  });

  const services = [
    {
      title: "Script Writing",
      icon: PenTool,
      description: "Video scripts and screenplays",
      href: "/services/script-writing",
      color: "from-blue-500 to-purple-600",
    },
    {
      title: "Article Writing",
      icon: FileText,
      description: "Blog posts and articles",
      href: "/services/article-writing",
      color: "from-green-500 to-teal-600",
    },
    {
      title: "Video Editing",
      icon: Video,
      description: "Professional video production",
      href: "/services/video-editing",
      color: "from-red-500 to-pink-600",
    },
    {
      title: "AI Agents",
      icon: Bot,
      description: "Custom AI solutions",
      href: "/services/ai-agents",
      color: "from-orange-500 to-yellow-600",
    },
    {
      title: "Website Building",
      icon: Code,
      description: "Modern web development",
      href: "/services/website-building",
      color: "from-indigo-500 to-blue-600",
    },
  ];

  const recentProjects = [
    {
      id: 1,
      title: "E-commerce Website Development",
      client: "TechCorp Inc.",
      status: "In Progress",
      progress: 75,
      deadline: "2024-02-15",
      earnings: "$1,200",
      type: "Website Building",
    },
    {
      id: 2,
      title: "Product Demo Video Script",
      client: "StartupXYZ",
      status: "Completed",
      progress: 100,
      deadline: "2024-01-20",
      earnings: "$450",
      type: "Script Writing",
    },
    {
      id: 3,
      title: "AI Chatbot Integration",
      client: "ServicePro",
      status: "Review",
      progress: 90,
      deadline: "2024-02-10",
      earnings: "$800",
      type: "AI Agents",
    },
    {
      id: 4,
      title: "Blog Article Series",
      client: "ContentCo",
      status: "In Progress",
      progress: 40,
      deadline: "2024-02-25",
      earnings: "$600",
      type: "Article Writing",
    },
  ];

  const stats = [
    {
      title: "Total Earnings",
      value: user.earnings,
      change: "+12.5%",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Projects Completed",
      value: user.completedProjects.toString(),
      change: "+3 this month",
      icon: CheckCircle,
      color: "text-blue-600",
    },
    {
      title: "Average Rating",
      value: user.rating.toString(),
      change: "Excellent",
      icon: Star,
      color: "text-yellow-600",
    },
    {
      title: "Active Projects",
      value: "6",
      change: "2 due soon",
      icon: Clock,
      color: "text-orange-600",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "In Progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "Review":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="h-4 w-4" />;
      case "In Progress":
        return <Clock className="h-4 w-4" />;
      case "Review":
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Welcome back, {user.name.split(" ")[0]}!
              </h1>
              <p className="text-muted-foreground mt-1">
                Here's what's happening with your projects today.
              </p>
            </div>
            <Button asChild className="btn-hero">
              <Link to="/profile/settings">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className={`text-sm ${stat.color}`}>
                      {stat.change}
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg bg-muted/50`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Recent Projects
                  </CardTitle>
                  <CardDescription>
                    Your latest project activities and progress
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentProjects.map((project) => (
                      <div
                        key={project.id}
                        className="p-4 rounded-lg border border-border/50 hover:border-border transition-colors"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-foreground">
                              {project.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {project.client} • {project.type}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-foreground">
                              {project.earnings}
                            </p>
                            <Badge className={getStatusColor(project.status)}>
                              {getStatusIcon(project.status)}
                              <span className="ml-1">{project.status}</span>
                            </Badge>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="text-foreground">{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} className="h-2" />
                          <div className="flex justify-between text-sm text-muted-foreground">
                            <span>Due: {project.deadline}</span>
                            <Button variant="ghost" size="sm" asChild>
                              <Link to={`/projects/${project.id}`}>View Details</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions - Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>
                    Browse our services and start new projects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="group block"
                      >
                        <div className="p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-md">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${service.color}`}>
                              <service.icon className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                                {service.title}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column - Profile */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Profile Card */}
            <Card className="glass-card">
              <CardHeader className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>
                    {user.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <CardTitle>{user.name}</CardTitle>
                <CardDescription>{user.email}</CardDescription>
                <Badge variant="secondary" className="w-fit mx-auto">
                  {user.membershipTier} Member
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Member since</span>
                  <span className="text-sm font-medium">{user.joinDate}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Projects completed</span>
                  <span className="text-sm font-medium">{user.completedProjects}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Rating</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{user.rating}</span>
                  </div>
                </div>
                <Button asChild className="w-full btn-hero mt-4">
                  <Link to="/profile">
                    <User className="h-4 w-4 mr-2" />
                    View Full Profile
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  This Month
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">New Projects</span>
                  <span className="text-lg font-semibold text-foreground">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Completed</span>
                  <span className="text-lg font-semibold text-foreground">5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Earnings</span>
                  <span className="text-lg font-semibold gradient-text">$2,850</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}