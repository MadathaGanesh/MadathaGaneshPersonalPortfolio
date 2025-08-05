import { motion } from 'framer-motion';
import { Code2, Database, Brain, Server } from 'lucide-react';

const About = () => {
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

  const highlights = [
    {
      icon: Code2,
      title: 'Backend Development',
      description: 'Expertise in Java, Spring Boot, and building scalable REST APIs',
      color: 'text-primary',
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Proficient in Oracle DB, MySQL, SQL, and PL/SQL development',
      color: 'text-secondary',
    },
    {
      icon: Server,
      title: 'Enterprise Solutions',
      description: 'Experience with Oracle EBS and enterprise-level integrations',
      color: 'text-accent',
    },
    {
      icon: Brain,
      title: 'AI/ML Knowledge',
      description: 'Academic background and practical knowledge in AI/ML technologies',
      color: 'text-success',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-outfit text-card-foreground mb-6">
              About Me
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-card-foreground mb-6">
                  My Journey
                </h2>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p>
                    I'm an experienced <span className="text-primary font-semibold">Oracle EBS Developer</span> with 
                    a strong background in <span className="text-secondary font-semibold">AI/ML</span> and a passion 
                    for backend systems. My journey in technology began with a deep fascination for how complex 
                    systems work together to solve real-world problems.
                  </p>
                  <p>
                    Currently working at <span className="text-accent font-semibold">Genpact</span> as a Senior 
                    Associate, I specialize in Oracle EBS development and have successfully optimized data 
                    migration processes, reducing processing time by 30% while implementing robust 
                    error-handling mechanisms.
                  </p>
                  <p>
                    I'm now transitioning into <span className="text-primary font-semibold">Java backend development</span>, 
                    leveraging my experience in enterprise systems to build scalable, efficient backend solutions. 
                    My goal is to combine my domain expertise with modern development practices to deliver 
                    high-quality software solutions.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => {
                  const Icon = highlight.icon;
                  return (
                    <motion.div
                      key={highlight.title}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="glass-card p-6 text-center"
                    >
                      <div className={`inline-flex p-3 rounded-lg bg-white/5 ${highlight.color} mb-4`}>
                        <Icon size={24} />
                      </div>
                      <h3 className="font-semibold text-card-foreground mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {highlight.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Personal Philosophy */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="glass-card p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-card-foreground mb-6">
                My Philosophy
              </h2>
              <blockquote className="text-lg text-foreground italic leading-relaxed">
                "Technology should solve real problems and make people's lives better. 
                Every line of code I write is an opportunity to create something meaningful 
                and impactful."
              </blockquote>
              <div className="mt-6 flex justify-center">
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default About;