import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBackground from '@/assets/hero-bg.jpg';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const typewriterVariants = {
    hidden: { width: 0 },
    visible: {
      width: '100%',
      transition: {
        duration: 2,
        ease: [0.4, 0, 0.2, 1] as const,
        delay: 1,
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/90 to-background/80" />
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="text-primary font-medium text-lg">Hello, I'm</span>
        </motion.div>

        {/* Name with Typewriter Effect */}
        <motion.div className="mb-6 overflow-hidden">
        <motion.h1
          variants={typewriterVariants}
          className="text-5xl sm:text-6xl md:text-8xl font-bold font-outfit text-card-foreground border-r-2 border-current"
          style={{ borderRightStyle: 'solid' }}
        >
            Madatha Ganesh
          </motion.h1>
        </motion.div>

        {/* Role */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-xl md:text-2xl text-foreground mb-2">
            <span className="text-primary">Java Backend Developer</span> |{' '}
            <span className="text-secondary">Java Full Stack Developer</span> |{' '}
            <span className="text-accent">AI/ML Enthusiast</span>
          </h2>
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <MapPin size={16} />
            <span>Hyderabad,Telangana,India</span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate backend developer with expertise in building scalable enterprise solutions. 
            Currently working as an Oracle EBS Consultant while transitioning into modern Java backend development.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://drive.google.com/file/d/1uL-I-f2MHyCCcx4gFd5L4pqjMw7WHkwj/view?usp=sharing"
              download
              className="neon-button flex items-center space-x-2"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>
            <Link
              to="/projects"
              className="flex items-center space-x-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg font-medium transition-all duration-300 hover:bg-white/10 hover:border-primary/50"
            >
              <span>View Projects</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center justify-center space-x-6">
            <a
              href="https://github.com/MadathaGanesh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-white/5 border border-white/10 text-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/madathaganesh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-white/5 border border-white/10 text-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:ganeshmadatha159@gmail.com"
              className="p-3 rounded-lg bg-white/5 border border-white/10 text-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

    
      </motion.div>
    </div>
  );
};

export default Home;