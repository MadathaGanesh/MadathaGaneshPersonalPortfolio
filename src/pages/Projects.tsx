import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
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

  const projects = [
    {
      title: 'Grocery Market Billing System',
      description: 'A comprehensive billing automation system with real-time tracking capabilities, reducing manual processing time by 50%.',
      technologies: ['Java', 'MySQL', 'JDBC'],
      highlights: [
        'Automated billing process',
        'Real-time inventory tracking',
        '50% reduction in manual processing',
        'User-friendly interface',
      ],
      category: 'Backend Application',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      githubLink: 'https://github.com/MadathaGanesh/Grocery-Market-Billing-System',
    },
    {
      title: 'Oracle EBS Inventory Management',
      description: 'Optimized inventory data workflows in Oracle EBS environment, improving accuracy and implementing automated validations.',
      technologies: ['Oracle EBS', 'SQL', 'PL/SQL', 'WINSCP', 'PuTTY'],
      highlights: [
        'Optimized data workflows',
        'Improved inventory accuracy',
        'Automated validation mechanisms',
        'Enhanced system reliability',
      ],
      category: 'Enterprise Solution',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      githubLink: '/projects',
    },
    {
      title: 'Fresh Fruit Store Web App',
      description: 'Responsive web application for product browsing and management with optimized performance and lazy loading.',
      technologies: ['React', 'Redux', 'REST API' ],
      highlights: [
        'Responsive design',
        'Product catalog management',
        'Lazy loading optimization',
        'REST API integration',
      ],
      category: 'Web Application',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      githubLink: 'https://github.com/MadathaGanesh/Fruits_Store',
    },
    {
      title: 'House Price prediction using Machine Learning',
      description: 'This project predicts house prices using machine learning based on features like location, size, and number of rooms. It includes data preprocessing, model training, evaluation, and can be used for real estate pricing applications.',
      technologies: ['Python','Numpy','Pandas','Matplotlib','Scikit-learn', 'XGBoost'],
      highlights: [
            'Accurate house price predictions using multiple regression models',
            'End-to-end ML pipeline: data cleaning, training, and evaluation',
            'Model performance evaluation using R², MAE metrics',
            'Supports deployment through Streamlit for interactive UI',
      ],
      category: 'Desktop Application',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      githubLink: 'https://github.com/MadathaGanesh/House_Price_Prediction_Using_Machine_Learning',
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
              Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical projects and professional achievements
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-3xl font-bold text-card-foreground text-center mb-8">
              Featured Projects
            </h2>
            <div className="space-y-8">
              {projects.map((project) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-8"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                    {/* Project Info */}
                    <div className="flex-1 space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-card-foreground mb-2">
                            {project.title}
                          </h3>
                          <div className="flex items-center space-x-3 mb-4">
                            <Badge variant="outline" className={`${project.bgColor} ${project.color} border-current`}>
                              {project.category}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-white/5 border border-white/10 text-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                          >
                            <Github size={20} />
                          </a>
                          <button className="p-2 rounded-lg bg-white/5 border border-white/10 text-foreground hover:text-primary hover:border-primary/50 transition-all duration-300">
                            <ExternalLink size={20} />
                          </button>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-white/5 text-foreground border border-white/10 hover:scale-105 transition-transform"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Highlights */}
                      <div className="grid md:grid-cols-2 gap-2">
                        {project.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="flex items-center space-x-2 text-sm text-muted-foreground"
                          >
                            <ArrowRight size={16} className={project.color} />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
