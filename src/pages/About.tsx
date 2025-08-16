import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Users, Target, Award, Heart } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Mission Driven",
      description: "We connect talented professionals with businesses that need their expertise, creating value for both sides."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Our platform is built around fostering genuine relationships and long-term partnerships."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards to ensure every project meets and exceeds expectations."
    },
    {
      icon: Heart,
      title: "Passion for Growth",
      description: "We're committed to helping both freelancers and businesses grow and succeed together."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Former tech executive with 15+ years of experience in building marketplace platforms."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Full-stack engineer passionate about creating seamless user experiences."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Operations",
      bio: "Operations expert focused on scaling quality service delivery."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold gradient-text mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About ServiceHub
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We're building the future of professional services by connecting 
            talented creators with businesses that need their expertise.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="glass-card p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <p>
                ServiceHub was born from a simple observation: talented professionals 
                were struggling to find quality projects, while businesses needed 
                reliable access to specialized skills.
              </p>
              <p>
                Founded in 2024, we set out to create more than just another marketplace. 
                We wanted to build a platform that prioritizes quality, fosters genuine 
                relationships, and helps both freelancers and businesses thrive.
              </p>
              <p>
                Today, we're proud to serve thousands of professionals and businesses, 
                facilitating millions of dollars in projects across script writing, 
                article creation, video editing, AI development, and web design.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do and shape how we build our platform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="glass-card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <div className="w-12 h-12 hero-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground">
              The passionate people behind ServiceHub's mission.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="glass-card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              >
                <div className="w-20 h-20 hero-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}