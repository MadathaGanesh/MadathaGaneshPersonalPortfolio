import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Education = () => {
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

  const education = [
    {
      degree: 'B.Tech, Computer Science & Engineering (AI & ML)',
      institution: 'Vaagdevi College of Engineering',
      duration: '2020 - 2024',
      grade: 'CGPA: 8.6',
      location: 'Warangal, Telangana',
      specialization: 'Artificial Intelligence & Machine Learning',
      highlights: [
        'Specialized in AI/ML technologies and applications',
        'Strong foundation in algorithms and data structures',
        'Completed projects in machine learning and web development',
        'Active participation in technical events and workshops',
      ],
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Shivani Junior College',
      duration: '2018 - 2020',
      grade: '97%',
      location: 'Telangana',
      specialization: 'Mathematics, Physics, Chemistry',
      highlights: [
        'Excellent academic performance with 97% score',
        'Strong foundation in Mathematics and Physics',
        'Developed analytical and problem-solving skills',
        'Prepared foundation for engineering studies',
      ],
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Ekashila e-techno school',
      duration: '2017 - 2018',
      grade: 'CGPA: 9.0',
      location: 'Telangana',
      specialization: 'General Studies',
      highlights: [
        'Outstanding academic performance',
        'Consistent excellence across all subjects',
        'Strong foundation in core subjects',
        'Active participation in co-curricular activities',
      ],
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
  ];

  const technicalCourses = [
    {
      title: 'Java Programming',
      provider: 'Self-Study & Practice',
      skills: ['Core Java', 'OOP Concepts', 'Collections Framework'],
    },
    {
      title: 'Database Management',
      provider: 'Oracle Academy & Practice',
      skills: ['SQL', 'PL/SQL', 'Database Design'],
    },
    {
      title: 'Web Development',
      provider: 'Online Courses & Projects',
      skills: ['React', 'Node.js', 'REST APIs'],
    },
    {
      title: 'Oracle EBS',
      provider: 'Professional Training',
      skills: ['EBS Modules', 'System Administration', 'Data Migration'],
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
              Education
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Academic journey and continuous learning in technology
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Academic Timeline */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-3xl font-bold text-card-foreground text-center mb-8">
              Academic Qualifications
            </h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-8"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                    {/* Institution Info */}
                    <div className="lg:w-1/3 mb-6 lg:mb-0">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className={`p-3 rounded-lg ${edu.bgColor} ${edu.color}`}>
                            <GraduationCap size={24} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-card-foreground">
                              {edu.institution}
                            </h3>
                            <Badge variant="outline" className={`${edu.bgColor} ${edu.color} border-current mt-1`}>
                              {edu.grade}
                            </Badge>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Calendar size={16} />
                            <span>{edu.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <MapPin size={16} />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Degree Details */}
                    <div className="lg:w-2/3 space-y-4">
                      <div>
                        <h4 className="text-xl font-bold text-card-foreground mb-2">
                          {edu.degree}
                        </h4>
                        <p className={`font-medium ${edu.color} mb-4`}>
                          {edu.specialization}
                        </p>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-2">
                        {edu.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-start space-x-3"
                          >
                            <div className={`w-2 h-2 ${edu.color.replace('text-', 'bg-')} rounded-full mt-2 flex-shrink-0`} />
                            <span className="text-muted-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>


          {/* Academic Achievements */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="glass-card p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-card-foreground mb-6">
                Academic Highlights
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">8.6</div>
                  <div className="text-sm text-muted-foreground">B.Tech CGPA</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-secondary">97%</div>
                  <div className="text-sm text-muted-foreground">Intermediate Score</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">9.0</div>
                  <div className="text-sm text-muted-foreground">SSC CGPA</div>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-muted-foreground leading-relaxed">
                  Consistent academic excellence throughout my educational journey, 
                  with a strong focus on <span className="text-primary font-semibold">Computer Science</span> and 
                  <span className="text-secondary font-semibold"> AI/ML technologies</span>. 
                  My educational background provides a solid foundation for my career in backend development.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;