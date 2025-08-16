import { motion } from "framer-motion";
import { ArrowRight, Star, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import scriptIcon from "@/assets/script-writing-icon.jpg";
import articleIcon from "@/assets/article-writing-icon.jpg";
import videoIcon from "@/assets/video-editing-icon.jpg";
import aiIcon from "@/assets/ai-agents-icon.jpg";
import websiteIcon from "@/assets/website-building-icon.jpg";

export default function Services() {
  const services = [
    {
      id: "script-writing",
      title: "Script Writing",
      description: "Professional screenplays, video scripts, and content creation for all media formats. Our expert writers craft compelling narratives that engage your audience.",
      icon: scriptIcon,
      features: [
        "Video Scripts & Screenplays",
        "Commercial & Advertisement Scripts",
        "Documentary Narratives",
        "Social Media Content",
        "Technical & Training Scripts",
        "Creative Story Development"
      ],
      pricing: {
        basic: { price: "$50", desc: "Short scripts up to 2 minutes" },
        standard: { price: "$150", desc: "Medium scripts up to 10 minutes" },
        premium: { price: "$300", desc: "Feature-length scripts & consultation" }
      },
      rating: 4.9,
      freelancers: 250,
      deliveryTime: "3-7 days",
      category: "Writing & Content"
    },
    {
      id: "article-writing",
      title: "Article Writing",
      description: "High-quality articles, blog posts, and editorial content that engages your audience and drives traffic to your website.",
      icon: articleIcon,
      features: [
        "SEO-Optimized Blog Posts",
        "Technical Articles",
        "News & Editorial Content",
        "Product Reviews",
        "How-to Guides",
        "Industry Reports"
      ],
      pricing: {
        basic: { price: "$25", desc: "500-word articles" },
        standard: { price: "$75", desc: "1500-word in-depth articles" },
        premium: { price: "$200", desc: "Research-heavy pieces with citations" }
      },
      rating: 4.8,
      freelancers: 400,
      deliveryTime: "2-5 days",
      category: "Writing & Content"
    },
    {
      id: "video-editing",
      title: "Video Editing",
      description: "Professional video editing and post-production services for any project size, from social media clips to feature films.",
      icon: videoIcon,
      features: [
        "Color Correction & Grading",
        "Motion Graphics & Animation",
        "Audio Mixing & Sound Design",
        "Multi-Camera Editing",
        "Green Screen Compositing",
        "Final Cut Pro & Adobe Premiere"
      ],
      pricing: {
        basic: { price: "$100", desc: "Basic editing up to 5 minutes" },
        standard: { price: "$300", desc: "Advanced editing with effects" },
        premium: { price: "$800", desc: "Professional post-production" }
      },
      rating: 4.9,
      freelancers: 180,
      deliveryTime: "5-10 days",
      category: "Video & Animation"
    },
    {
      id: "ai-agents",
      title: "AI Agents",
      description: "Custom AI solutions, chatbots, and automation tools to streamline your business processes and enhance customer experience.",
      icon: aiIcon,
      features: [
        "Custom Chatbot Development",
        "AI Integration Services",
        "Process Automation",
        "Machine Learning Models",
        "Natural Language Processing",
        "API Development & Integration"
      ],
      pricing: {
        basic: { price: "$500", desc: "Simple chatbot implementation" },
        standard: { price: "$1500", desc: "Advanced AI agent with training" },
        premium: { price: "$5000", desc: "Enterprise AI solution" }
      },
      rating: 4.7,
      freelancers: 95,
      deliveryTime: "7-21 days",
      category: "Technology & AI"
    },
    {
      id: "website-building",
      title: "Website Building",
      description: "Modern, responsive websites and web applications built with the latest technologies and best practices for optimal performance.",
      icon: websiteIcon,
      features: [
        "Responsive Web Design",
        "E-commerce Development",
        "CMS Integration",
        "SEO Optimization",
        "Performance Optimization",
        "Mobile-First Approach"
      ],
      pricing: {
        basic: { price: "$200", desc: "Simple landing page" },
        standard: { price: "$800", desc: "Multi-page business website" },
        premium: { price: "$2500", desc: "E-commerce or web application" }
      },
      rating: 4.8,
      freelancers: 320,
      deliveryTime: "7-14 days",
      category: "Web Development"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-16 bg-gradient-to-br from-background via-muted/30 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Our <span className="gradient-text">Premium Services</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose from our comprehensive range of professional services delivered by verified experts
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Left Column - Content */}
                      <div className="p-8">
                        <CardHeader className="p-0 mb-6">
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg">
                              <img
                                src={service.icon}
                                alt={service.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <CardTitle className="text-2xl">{service.title}</CardTitle>
                              <Badge variant="secondary">{service.category}</Badge>
                            </div>
                          </div>
                          <CardDescription className="text-base">
                            {service.description}
                          </CardDescription>
                        </CardHeader>

                        <CardContent className="p-0">
                          {/* Stats */}
                          <div className="flex items-center space-x-6 mb-6">
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="font-medium">{service.rating}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">
                                {service.freelancers} freelancers
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">
                                {service.deliveryTime}
                              </span>
                            </div>
                          </div>

                          {/* Features */}
                          <div className="mb-6">
                            <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {service.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* CTA */}
                          <Button asChild className="btn-hero w-full sm:w-auto">
                            <Link to={`/services/${service.id}`}>
                              Get Started
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </CardContent>
                      </div>

                      {/* Right Column - Pricing */}
                      <div className="bg-muted/30 p-8">
                        <h3 className="text-xl font-semibold text-foreground mb-6">Pricing Options</h3>
                        <div className="space-y-4">
                          {Object.entries(service.pricing).map(([tier, details]) => (
                            <div key={tier} className="p-4 rounded-lg bg-card border border-border/50">
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <h4 className="font-medium text-foreground capitalize">{tier}</h4>
                                  <p className="text-sm text-muted-foreground">{details.desc}</p>
                                </div>
                                <span className="text-lg font-bold gradient-text">{details.price}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground mt-4">
                          * Prices may vary based on complexity and requirements
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of satisfied clients who trust ServiceHub for their digital needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="btn-hero">
                  <Link to="/signup">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">
                    Talk to Expert
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}