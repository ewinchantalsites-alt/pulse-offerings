import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import scriptIcon from "@/assets/script-writing-icon.jpg";
import articleIcon from "@/assets/article-writing-icon.jpg";
import videoIcon from "@/assets/video-editing-icon.jpg";
import aiIcon from "@/assets/ai-agents-icon.jpg";
import websiteIcon from "@/assets/website-building-icon.jpg";

export function ServicesSection() {
  const services = [
    {
      title: "Script Writing",
      description: "Professional screenplays, video scripts, and content creation for all media formats.",
      icon: scriptIcon,
      features: ["Video Scripts", "Screenplays", "Content Writing", "Copywriting"],
      price: "Starting at $50",
      href: "/services/script-writing"
    },
    {
      title: "Article Writing",
      description: "High-quality articles, blog posts, and editorial content that engages your audience.",
      icon: articleIcon,
      features: ["Blog Posts", "SEO Articles", "Technical Writing", "News Articles"],
      price: "Starting at $25",
      href: "/services/article-writing"
    },
    {
      title: "Video Editing",
      description: "Professional video editing and post-production services for any project size.",
      icon: videoIcon,
      features: ["Color Grading", "Motion Graphics", "Audio Mixing", "Final Cut Pro"],
      price: "Starting at $100",
      href: "/services/video-editing"
    },
    {
      title: "AI Agents",
      description: "Custom AI solutions, chatbots, and automation tools to streamline your business.",
      icon: aiIcon,
      features: ["Chatbots", "AI Integration", "Process Automation", "Machine Learning"],
      price: "Starting at $500",
      href: "/services/ai-agents"
    },
    {
      title: "Website Building",
      description: "Modern, responsive websites and web applications built with the latest technologies.",
      icon: websiteIcon,
      features: ["Responsive Design", "E-commerce", "CMS Integration", "SEO Optimization"],
      price: "Starting at $200",
      href: "/services/website-building"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Premium <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our wide range of professional services delivered by top-rated freelancers
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="service-card h-full">
                {/* Service Icon */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <div className="text-lg font-semibold gradient-text mb-4">
                    {service.price}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <Button asChild className="w-full btn-hero group-hover:shadow-lg transition-all duration-300">
                    <Link to={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Need something else?
          </h3>
          <p className="text-muted-foreground mb-6">
            Can't find the service you're looking for? Contact us for custom solutions.
          </p>
          <Button asChild variant="outline" size="lg" className="btn-secondary">
            <Link to="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}