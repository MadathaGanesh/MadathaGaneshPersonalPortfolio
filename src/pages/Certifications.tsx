import { motion } from 'framer-motion';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Certifications = () => {
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

  const certifications = [
    {
      title: 'Java Foundations',
      provider: 'Oracle Academy',
      credentialId: 'Oracle-JF-2024',
      url: 'https://drive.google.com/file/d/1aa13tQMjUwZh_z0VPlbafiZwa_WaaD-4/view?usp=sharing',
      description:
        'Comprehensive foundation in Java programming including OOP concepts, syntax, and best practices.',
      skills: ['Java Basics', 'Object-Oriented Programming', 'Java Syntax', 'Programming Fundamentals'],
      category: 'Programming',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      verified: true,
    },
    {
      title: 'AWS Cloud Foundations',
      provider: 'AWS Academy',
      credentialId: 'AWS-CF-2024',
      url: 'https://drive.google.com/file/d/17Nggx_-mwce0qni9IjHBaaFKkFyptL3H/view',
      description:
        'Foundational understanding of AWS cloud computing services, architecture, and deployment models.',
      skills: ['Cloud Computing', 'AWS Services', 'Infrastructure'],
      category: 'Cloud',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      verified: true,
    },
    {
      title: 'Python Programming',
      provider: 'Cisco Academy',
      credentialId: 'CISCO-PY-2023',
      url: 'https://drive.google.com/file/d/1ynKW0HvsD9LlpffKuNCRw3jlN1CZys8S/view?usp=sharing',
      description: 'Python programming fundamentals, data structures, and application development.',
      skills: ['Python Basics', 'Data Structures', 'Algorithms', 'Problem Solving'],
      category: 'Programming',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      verified: true,
    },
    {
      title: 'MySQL Database',
      provider: 'Oracle Academy',
      credentialId: 'ORA-MYSQL-2023',
      url: 'https://drive.google.com/file/d/1186grOBCR3chjeK6ELElYNf5tNL254H6/view',
      description: 'Database design, SQL queries, and MySQL administration fundamentals.',
      skills: ['MySQL', 'Database Design', 'SQL Queries', 'Data Management'],
      category: 'Database',
      color: 'text-success',
      bgColor: 'bg-success/10',
      verified: true,
    },
    {
      title: 'SQL Programming',
      provider: 'HackerRank',
      credentialId: 'HR-SQL-2023',
      url: 'https://drive.google.com/file/d/14aOGtdCAVTC19kpTCuBpMQ9sn16PFXTm/view',
      description: 'Advanced SQL programming skills including complex queries, joins, and optimization.',
      skills: ['Advanced SQL', 'Query Optimization', 'Joins', 'Database Functions'],
      category: 'Database',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      verified: true,
    },
    {
      title: 'Prompt Engineering',
      provider: 'IUCEE Foundation',
      credentialId: 'IUCEE-PE-2024',
      url: 'https://drive.google.com/file/d/1hJtzcLu5aF_-G3Qe-C8BtmsLgroz7ms1/view',
      description: 'Techniques for effective AI prompt engineering and interaction with language models.',
      skills: ['AI Prompting', 'Language Models', 'AI Tools', 'Prompt Design'],
      category: 'AI/ML',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      verified: true,
    },
    {
      title: 'Generative AI Course',
      provider: 'Google Cloud',
      credentialId: 'GEN-AI_24',
      url: 'https://www.coursera.org/account/accomplishments/verify/JSF7CHMKP89R',
      description: 'Techniques for effective AI prompt engineering and interaction with language models.',
      skills: ['AI Prompting', 'Language Models', 'AI Tools', 'Prompt Design'],
      category: 'AI/ML',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      verified: true,
    }

  ];

  const certificationsByCategory = certifications.reduce((acc, cert) => {
    if (!acc[cert.category]) {
      acc[cert.category] = [];
    }
    acc[cert.category].push(cert);
    return acc;
  }, {} as Record<string, typeof certifications>);

  const categoryColors = {
    Programming: 'text-primary',
    Cloud: 'text-secondary',
    Database: 'text-accent',
    'AI/ML': 'text-success',
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-16">
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-outfit text-card-foreground mb-6">
              Certifications
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional certifications showcasing continuous learning and skill development
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Certifications by Category */}
          {Object.entries(certificationsByCategory).map(([category, certs]) => (
            <motion.div key={category} variants={itemVariants} className="space-y-6">
              <h2
                className={`text-3xl font-bold text-center mb-8 ${
                  categoryColors[category as keyof typeof categoryColors]
                }`}
              >
                {category} Certifications
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {certs.map((cert) => (
                  <motion.div
                    key={cert.credentialId}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-6"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-3">
                        <div className={`p-3 rounded-lg ${cert.bgColor} ${cert.color}`}>
                          <Award size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-card-foreground mb-1">{cert.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{cert.provider}</p>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className={`${cert.bgColor} ${cert.color} border-current`}>
                              {cert.category}
                            </Badge>
                            {cert.verified && (
                              <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                                <CheckCircle size={12} className="mr-1" />
                                Verified
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${cert.title} certification link`}
                      >
                        <button className="p-2 rounded-lg bg-white/5 border border-white/10 text-foreground hover:text-primary hover:border-primary/50 transition-all duration-300">
                          <ExternalLink size={16} />
                        </button>
                      </a>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{cert.description}</p>

                    {/* Skills */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-card-foreground mb-2">Skills Covered:</h4>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-white/5 text-foreground border border-white/10 text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;
