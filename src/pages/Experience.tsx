import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
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

  const experience = {
    company: 'Genpact',
    position: 'Senior Associate (Oracle EBS Consultant)',
    duration: 'October 2024 – Present',
    location: 'Hyderabad, Telangana, India',
    type: 'Full-time',
    description:
      'Working as an Oracle EBS Consultant, specializing in system optimization, data migration, and enterprise-level solutions.',
    responsibilities: [
      'Optimized Oracle EBS inventory data workflows, improving system efficiency',
      'Implemented robust staging and error-handling mechanisms for data processing',
      'Reduced data migration time by 30% through process optimization',
      'Enhanced system reliability and automated validation processes',
      'Collaborated with cross-functional teams to deliver enterprise solutions',
      'Provided technical support and troubleshooting for EBS modules',
    ],
    achievements: [
      {
        title: '30% Reduction in Migration Time',
        description: 'Optimized data migration processes resulting in significant time savings',
        impact: 'High',
        color: 'text-success',
      },
      {
        title: 'Enhanced System Reliability',
        description: 'Implemented error-handling mechanisms improving system stability',
        impact: 'High',
        color: 'text-primary',
      },
      {
        title: 'Process Automation',
        description: 'Automated validation processes reducing manual intervention',
        impact: 'Medium',
        color: 'text-secondary',
      },
    ],
    technologies: [
      'Oracle EBS',
      'SQL',
      'PL/SQL',
      'UNIX/Linux',
      'Shell Scripting',
      'WINSCP',
      'PuTTY',
      'Data Migration',
      'System Integration',
    ],
  };

  const skills = [
    { name: 'Oracle EBS Development' },
    { name: 'Data Migration' },
    { name: 'SQL/PL-SQL' },
    { name: 'System Integration' },
    { name: 'Process Optimization' },
    { name: 'Problem Solving' },
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
              Experience
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional journey and achievements in enterprise software development
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Current Position */}
          <motion.div variants={itemVariants} className="glass-card p-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
              {/* Company Info */}
              <div className="lg:w-1/3 mb-6 lg:mb-0">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <Building size={24} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-card-foreground">
                        {experience.company}
                      </h2>
                      <Badge
                        variant="outline"
                        className="bg-success/10 text-success border-success/20 mt-1"
                      >
                        Current Position
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Calendar size={16} />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin size={16} />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Position Details */}
              <div className="lg:w-2/3 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">
                    {experience.position}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {experience.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-card-foreground mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-white/5 text-foreground border border-white/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Responsibilities */}
          <motion.div variants={itemVariants} className="glass-card p-8">
            <h2 className="text-2xl font-bold text-card-foreground mb-6">
              Key Responsibilities
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {experience.responsibilities.map((responsibility, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-3"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{responsibility}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Achievements */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-2xl font-bold text-card-foreground text-center">
              Key Achievements
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {experience.achievements.map((achievement) => (
                <motion.div
                  key={achievement.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-6 text-center"
                >
                  <div
                    className={`inline-flex p-3 rounded-lg bg-white/5 ${achievement.color} mb-4`}
                  >
                    <TrendingUp size={24} />
                  </div>
                  <h3 className="font-bold text-card-foreground mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {achievement.description}
                  </p>
                  <Badge
                    variant="outline"
                    className={`${
                      achievement.impact === 'High'
                        ? 'bg-success/10 text-success border-success/20'
                        : 'bg-secondary/10 text-secondary border-secondary/20'
                    }`}
                  >
                    {achievement.impact} Impact
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Developed */}
          <motion.div variants={itemVariants} className="glass-card p-8">
            <h2 className="text-2xl font-bold text-card-foreground mb-6 text-center">
              Skills Developed
            </h2>
            <div className="grid md:grid-cols-2 gap-4 lg:pl-56 md:pl-6 sm:pr-4">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="flex items-start space-x-3"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Career Goals */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="glass-card p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-card-foreground mb-6">
                Career Transition
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                While I've gained valuable experience in Oracle EBS and enterprise systems,{' '}
                I’m now transitioning into{' '}
                <span className="text-primary font-semibold">Java backend development</span>. My
                enterprise experience provides a solid foundation for understanding complex business
                requirements and building scalable solutions.
              </p>
              <div className="flex justify-center">
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
