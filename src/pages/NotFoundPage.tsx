import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const glitchVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    glitch: {
      x: [0, -5, 5, -3, 3, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 2,
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* 404 Display */}
        <motion.div
          variants={glitchVariants}
          animate="glitch"
          className="mb-8"
        >
          <h1 className="text-8xl md:text-9xl font-bold font-outfit text-card-foreground mb-4">
            4<span className="text-primary">0</span>4
          </h1>
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-semibold text-accent mb-2">
              Oops, you hit a dead endpoint.
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-primary to-accent mx-auto max-w-md"
            />
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                <Code size={32} />
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The page you're looking for seems to have gone on a coffee break. 
              Don't worry, even the best APIs return 404 sometimes!
            </p>
            <div className="bg-black/20 rounded-lg p-4 font-code text-sm text-left">
              <div className="text-accent">
                <span className="text-secondary">HTTP/1.1</span> 
                <span className="text-primary"> 404</span> 
                <span className="text-muted-foreground"> Not Found</span>
              </div>
              <div className="text-muted-foreground mt-2">
                // This endpoint doesn't exist in our API
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Options */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="neon-button flex items-center space-x-2"
            >
              <Home size={20} />
              <span>Back to Home</span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg font-medium transition-all duration-300 hover:bg-white/10 hover:border-primary/50"
            >
              <ArrowLeft size={20} />
              <span>Go Back</span>
            </button>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants}>
          <h3 className="text-xl font-semibold text-card-foreground mb-6">
            Or explore these sections:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { name: 'About', href: '/about', icon: '👋' },
              { name: 'Projects', href: '/projects', icon: '💻' },
              { name: 'Skills', href: '/skills', icon: '🚀' },
              { name: 'Contact', href: '/contact', icon: '📧' },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="glass-card p-4 hover:scale-105 transition-transform duration-300 hover:bg-white/10"
              >
                <div className="text-2xl mb-2">{link.icon}</div>
                <div className="text-sm font-medium text-card-foreground">{link.name}</div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Fun Fact */}
        <motion.div
          variants={itemVariants}
          className="mt-16 p-6 bg-white/5 border border-white/10 rounded-2xl max-w-md mx-auto"
        >
          <div className="flex items-center justify-center mb-3">
            <Search size={20} className="text-success" />
          </div>
          <p className="text-sm text-muted-foreground">
            <span className="text-success font-semibold">Fun Fact:</span> The first documented case of a 404 error 
            occurred at CERN in 1992. Even Tim Berners-Lee's original web server had missing pages!
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;