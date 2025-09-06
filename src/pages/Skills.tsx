import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'Python', 'SQL', 'PL/SQL', 'JavaScript','Object-Oriented Programming'],
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20',
    },
    {
      title: 'Backend Frameworks',
      skills: ['Spring Boot', 'Hibernate', 'RESTful APIs','Spring MVC','Sping Framework','JUnit', 'Maven','Java Persistence API'],
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      borderColor: 'border-secondary/20',
    },
    {
      title: 'Databases',
      skills: ['Oracle Database', 'MySQL', 'Data Migration'],
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/20',
    },
    {
      title: 'Development Tools',
      skills: ['Git', 'GitHub', 'Postman', 'Eclipse', 'IntelliJ IDEA', 'VS Code','Swagger'],
      color: 'text-success',
      bgColor: 'bg-success/10',
      borderColor: 'border-success/20',
    },
    {
      title: 'Enterprise Technologies',
      skills: ['Oracle EBS', 'WINSCP', 'PuTTY', 'UNIX/Linux'],
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20',
    },
    {
      title: 'Web Technologies',
      skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS'],
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      borderColor: 'border-secondary/20',
    },
  ];

  const softSkills = [
    { name: 'Problem Solving', color: 'text-primary' },
    { name: 'Team Collaboration', color: 'text-secondary' },
    { name: 'Communication', color: 'text-accent' },
    { name: 'Time Management', color: 'text-success' },
    { name: 'Adaptability', color: 'text-primary' },
    { name: 'Leadership', color: 'text-secondary' },
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
              Skills & Technologies
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills 
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Skills Categories */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-3xl font-bold text-card-foreground text-center mb-8">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category) => (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-6"
                >
                  <h3 className={`text-xl font-semibold mb-4 ${category.color}`}>
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className={`${category.bgColor} ${category.borderColor} ${category.color} border hover:scale-105 transition-transform`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills - No percentages or numeric levels */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-3xl font-bold text-card-foreground text-center mb-8">
              Soft Skills
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-6"
                >
                  <h3 className={`font-semibold text-card-foreground ${skill.color}`}>
                    {skill.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
