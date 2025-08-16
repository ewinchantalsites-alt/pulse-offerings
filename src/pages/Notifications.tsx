import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Bell, 
  CheckCircle, 
  AlertCircle, 
  Info, 
  Star,
  MessageSquare,
  DollarSign,
  Calendar,
  Users,
  Settings,
  Filter,
  MoreHorizontal
} from "lucide-react";
import { useState } from "react";

export default function Notifications() {
  const [filter, setFilter] = useState("all");

  const notifications = [
    {
      id: 1,
      type: "success",
      icon: CheckCircle,
      title: "Project Completed",
      message: "Your video editing project has been completed and delivered.",
      time: "2 minutes ago",
      read: false,
      category: "project"
    },
    {
      id: 2,
      type: "info",
      icon: Star,
      title: "New Review Received",
      message: "John D. left a 5-star review for your article writing service.",
      time: "1 hour ago",
      read: false,
      category: "review"
    },
    {
      id: 3,
      type: "warning",
      icon: AlertCircle,
      title: "Payment Pending",
      message: "Your payment for Project #12345 is pending approval.",
      time: "3 hours ago",
      read: true,
      category: "payment"
    },
    {
      id: 4,
      type: "info",
      icon: MessageSquare,
      title: "New Message",
      message: "Sarah M. sent you a message about the logo design project.",
      time: "5 hours ago",
      read: true,
      category: "message"
    },
    {
      id: 5,
      type: "success",
      icon: DollarSign,
      title: "Payment Received",
      message: "You've received $150 for the completed landing page project.",
      time: "1 day ago",
      read: true,
      category: "payment"
    },
    {
      id: 6,
      type: "info",
      icon: Calendar,
      title: "Deadline Reminder",
      message: "Your script writing project is due in 2 days.",
      time: "1 day ago",
      read: true,
      category: "deadline"
    },
    {
      id: 7,
      type: "info",
      icon: Users,
      title: "New Follower",
      message: "Mike R. started following your profile.",
      time: "2 days ago",
      read: true,
      category: "social"
    },
    {
      id: 8,
      type: "success",
      icon: CheckCircle,
      title: "Profile Verified",
      message: "Your professional profile has been verified successfully.",
      time: "3 days ago",
      read: true,
      category: "account"
    }
  ];

  const filters = [
    { value: "all", label: "All", count: notifications.length },
    { value: "unread", label: "Unread", count: notifications.filter(n => !n.read).length },
    { value: "project", label: "Projects", count: notifications.filter(n => n.category === "project").length },
    { value: "payment", label: "Payments", count: notifications.filter(n => n.category === "payment").length },
    { value: "message", label: "Messages", count: notifications.filter(n => n.category === "message").length }
  ];

  const filteredNotifications = notifications.filter(notification => {
    if (filter === "all") return true;
    if (filter === "unread") return !notification.read;
    return notification.category === filter;
  });

  const getIconColor = (type: string) => {
    switch (type) {
      case "success": return "text-green-500";
      case "warning": return "text-yellow-500";
      case "error": return "text-red-500";
      default: return "text-blue-500";
    }
  };

  const getBgColor = (type: string) => {
    switch (type) {
      case "success": return "bg-green-500/10";
      case "warning": return "bg-yellow-500/10";
      case "error": return "bg-red-500/10";
      default: return "bg-blue-500/10";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                Notifications
              </h1>
              <p className="text-muted-foreground">
                Stay updated with your projects, payments, and messages
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm">
                Mark All Read
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-16">
        {/* Filters */}
        <motion.div 
          className="glass-card p-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-1">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Filter notifications</span>
            </div>
            <Badge variant="secondary">{filteredNotifications.length} results</Badge>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {filters.map((filterOption) => (
              <Button
                key={filterOption.value}
                variant={filter === filterOption.value ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(filterOption.value)}
                className={filter === filterOption.value ? "btn-hero" : ""}
              >
                {filterOption.label}
                <Badge 
                  variant="secondary" 
                  className="ml-2 text-xs"
                >
                  {filterOption.count}
                </Badge>
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Notifications List */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredNotifications.length === 0 ? (
            <Card className="glass-card">
              <CardContent className="py-12 text-center">
                <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No notifications found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your filters or check back later for new updates.
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredNotifications.map((notification, index) => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.05 }}
              >
                <Card 
                  className={`glass-card cursor-pointer transition-all duration-200 hover:shadow-md ${
                    !notification.read ? 'border-primary/50 bg-primary/5' : ''
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      {/* Icon */}
                      <div className={`w-10 h-10 ${getBgColor(notification.type)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <notification.icon className={`h-5 w-5 ${getIconColor(notification.type)}`} />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="text-sm font-semibold">{notification.title}</h3>
                              {!notification.read && (
                                <div className="w-2 h-2 bg-primary rounded-full" />
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">
                              {notification.message}
                            </p>
                            <span className="text-xs text-muted-foreground">
                              {notification.time}
                            </span>
                          </div>
                          
                          <Button variant="ghost" size="sm" className="flex-shrink-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </motion.div>

        {/* Load More */}
        {filteredNotifications.length > 0 && (
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Button variant="outline">
              Load More Notifications
            </Button>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
}