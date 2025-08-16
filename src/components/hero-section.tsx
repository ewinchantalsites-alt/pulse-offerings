import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

export function HeroSection() {
  const stats = [
    { icon: Users, label: "Active Freelancers", value: "10,000+" },
    { icon: Star, label: "Projects Completed", value: "50,000+" },
    { icon: Award, label: "Client Satisfaction", value: "99%" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Find Top{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Freelancers
                </span>
              </span>{" "}
              for Your Digital Needs
            </motion.h1>

            <motion.p
              className="text-xl text-white/90 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Connect with skilled professionals for script writing, article creation, 
              video editing, AI development, and website building. Get your projects 
              done with excellence.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button asChild size="lg" className="btn-hero text-lg px-8 py-4">
                <Link to="/signup">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10">
                <Link to="/services">
                  Browse Services
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <stat.icon className="h-6 w-6 text-yellow-400 mr-2" />
                    <span className="text-2xl font-bold text-white">{stat.value}</span>
                  </div>
                  <p className="text-white/80 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Floating Cards */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Floating Service Cards */}
            <div className="relative">
              <motion.div
                className="glass-card absolute top-0 right-0 w-64 p-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 hero-gradient rounded-lg flex items-center justify-center">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Top Rated</h3>
                    <p className="text-sm text-muted-foreground">Premium Services</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="glass-card absolute top-32 left-0 w-64 p-4"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">24/7 Support</h3>
                    <p className="text-sm text-muted-foreground">Always Available</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="glass-card absolute top-64 right-8 w-64 p-4"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Quality Guarantee</h3>
                    <p className="text-sm text-muted-foreground">100% Satisfaction</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}