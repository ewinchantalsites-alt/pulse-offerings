import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  FileText, 
  Video, 
  Code, 
  Palette, 
  MessageSquare,
  Clock,
  ArrowRight,
  Star,
  Users
} from "lucide-react";

export default function QuickActions() {
  const quickServices = [
    {
      icon: FileText,
      title: "Express Article",
      description: "Get a 500-word article written in 24 hours",
      price: "$25",
      duration: "24 hours",
      rating: 4.9,
      orders: 250,
      features: ["SEO optimized", "Plagiarism-free", "2 revisions"]
    },
    {
      icon: Video,
      title: "Quick Video Edit",
      description: "Basic video editing for social media content",
      price: "$45",
      duration: "48 hours",
      rating: 4.8,
      orders: 180,
      features: ["Up to 3 minutes", "Color correction", "Basic transitions"]
    },
    {
      icon: Palette,
      title: "Logo Design Rush",
      description: "Simple logo design with quick turnaround",
      price: "$85",
      duration: "72 hours",
      rating: 4.7,
      orders: 145,
      features: ["3 concepts", "Vector files", "Commercial license"]
    },
    {
      icon: Code,
      title: "Landing Page",
      description: "Responsive landing page built quickly",
      price: "$150",
      duration: "5 days",
      rating: 4.9,
      orders: 95,
      features: ["Mobile responsive", "SEO ready", "Contact form"]
    },
    {
      icon: MessageSquare,
      title: "Script Writing",
      description: "30-second commercial script",
      price: "$35",
      duration: "24 hours",
      rating: 4.8,
      orders: 320,
      features: ["Engaging copy", "Brand voice", "Call-to-action"]
    },
    {
      icon: Zap,
      title: "AI Chatbot Setup",
      description: "Basic customer service chatbot",
      price: "$200",
      duration: "3 days",
      rating: 4.6,
      orders: 75,
      features: ["FAQ integration", "Basic training", "Web widget"]
    }
  ];

  const urgentOffers = [
    {
      title: "Same-Day Blog Post",
      originalPrice: "$50",
      discountPrice: "$35",
      savings: "30%",
      timeLeft: "2 hours"
    },
    {
      title: "Express Logo Design",
      originalPrice: "$120",
      discountPrice: "$85",
      savings: "29%",
      timeLeft: "6 hours"
    },
    {
      title: "Rush Video Edit",
      originalPrice: "$80",
      discountPrice: "$60",
      savings: "25%",
      timeLeft: "4 hours"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="flex items-center justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Zap className="h-8 w-8 text-primary mr-3" />
            <Badge variant="secondary" className="text-sm px-3 py-1">
              Lightning Fast Delivery
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold gradient-text mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Quick Actions
          </motion.h1>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Need something done fast? Our express services deliver quality work 
            with rapid turnaround times for urgent projects.
          </motion.p>
        </div>
      </section>

      {/* Urgent Offers */}
      <section className="py-8 px-4 bg-destructive/5 border-y border-destructive/20">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-destructive mb-2">🔥 Limited Time Offers</h2>
            <p className="text-muted-foreground">Grab these deals before they expire!</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {urgentOffers.map((offer, index) => (
              <motion.div
                key={offer.title}
                className="glass-card border-destructive/20 bg-background/80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="destructive" className="text-xs">
                      {offer.savings} OFF
                    </Badge>
                    <div className="flex items-center text-xs text-destructive">
                      <Clock className="h-3 w-3 mr-1" />
                      {offer.timeLeft} left
                    </div>
                  </div>
                  <CardTitle className="text-lg">{offer.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-primary">{offer.discountPrice}</span>
                    <span className="text-sm text-muted-foreground line-through">{offer.originalPrice}</span>
                  </div>
                  <Button className="w-full btn-hero" size="sm">
                    Order Now
                  </Button>
                </CardContent>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <h2 className="text-3xl font-bold mb-4">Express Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional services with guaranteed quick turnaround times. 
              Perfect for urgent projects and tight deadlines.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quickServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
              >
                <Card className="glass-card h-full group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 hero-gradient rounded-lg flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {service.duration}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{service.price}</span>
                      <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                          {service.rating}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {service.orders}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 hero-gradient rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <Button className="w-full btn-hero group-hover:scale-105 transition-transform">
                      Order Now
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.9 }}
          >
            <h2 className="text-3xl font-bold mb-4">Need Something Custom?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't see exactly what you need? Contact us for a custom quote 
              with express delivery options tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hero">
                Request Custom Quote
              </Button>
              <Button size="lg" variant="outline">
                Browse All Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}