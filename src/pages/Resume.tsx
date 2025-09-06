import { motion } from 'framer-motion';
import { Download, ExternalLink, FileText, Eye } from 'lucide-react';

const Resume = () => {
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

  const resumeData = {
    title: 'Professional Resume',
    description: 'Complete professional resume with all experience, skills, and projects',
<<<<<<< HEAD
    originalViewUrl: 'https://drive.google.com/file/d/1sNo7EtvI-ELaCIxXEipmV2aunr-dytcs/view?usp=drive_link',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1sNo7EtvI-ELaCIxXEipmV2aunr-dytcs',
  };

  const quickFacts = [
    { label: 'Experience', value: '10 Months' },
=======
    originalViewUrl: 'https://drive.google.com/file/d/1uL-I-f2MHyCCcx4gFd5L4pqjMw7WHkwj/view?usp=drive_link',
    downloadUrl: 'https://drive.google.com/file/d/1uL-I-f2MHyCCcx4gFd5L4pqjMw7WHkwj/view?usp=drive_link',
  };

  const quickFacts = [
    { label: 'Experience', value: '1 year' },
>>>>>>> d0d3b62 (Added new project)
    { label: 'Current Role', value: 'Oracle EBS Consultant' },
    { label: 'Specialization', value: 'Java Backend Developer' },
    { label: 'Location', value: 'India' },
    { label: 'Availability', value: 'Open to Opportunities' },
    { label: 'Preferred Role', value: 'Java Backend Developer' },
  ];

  // Open preview in a new tab
  const openPreview = () => {
    window.open(resumeData.originalViewUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-16">
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-outfit text-card-foreground mb-6">Resume</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Download my professional resume or view it in a new tab
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Quick Summary */}
          <motion.div variants={itemVariants} className="glass-card p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Madatha Ganesh</h2>
              <p className="text-lg text-foreground mb-2">
                <span className="text-primary">Java Backend Developer</span> |{' '}
                <span className="text-secondary">Full Stack Java Backend Developer</span> |{' '}
                <span className="text-accent"> AI/ML Enthusiast</span>
              </p>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experienced Oracle EBS Developer transitioning to Java backend development. Passionate about building scalable enterprise solutions with a strong foundation in database technologies and system integration.
              </p>
            </div>

            {/* Quick Facts Grid */}
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickFacts.map((fact) => (
                <motion.div
                  key={fact.label}
                  variants={itemVariants}
                  className="text-center p-4 rounded-lg bg-white/5 border border-white/10"
                >
                  <div className="text-sm text-muted-foreground mb-1">{fact.label}</div>
                  <div className="font-semibold text-card-foreground text-sm">{fact.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Resume Download & Preview */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-3xl font-bold text-card-foreground text-center mb-8">Resume Download</h2>
            <div className="max-w-md mx-auto">
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-8 text-center"
              >
                <div className="inline-flex p-4 rounded-lg bg-primary/10 text-primary mb-4">
                  <FileText size={32} />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2">{resumeData.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{resumeData.description}</p>
                <div className="space-y-2">
                  <a
                    href={resumeData.downloadUrl}
                    className="neon-button w-full flex items-center justify-center space-x-2 text-sm"
                    download="MadathaGanesh_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Resume PDF"
                  >
                    <Download size={16} />
                    <span>Download Resume</span>
                  </a>
                  <button
                    onClick={openPreview}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg font-medium transition-all duration-300 hover:bg-white/10 hover:border-primary/50 text-sm"
                    aria-label="Open Resume Preview"
                  >
                    <Eye size={16} />
                    <span>Preview</span>
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Let's Connect!</h2>
              <p className="text-muted-foreground mb-6">
                Interested in my profile? I'd love to discuss how my skills and experience can contribute to your team's success.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/contact" className="neon-button flex items-center space-x-2">
                  <span>Get In Touch</span>
                </a>
                <a
                  href="https://linkedin.com/in/madathaganesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg font-medium transition-all duration-300 hover:bg-white/10 hover:border-primary/50"
                >
                  <span>LinkedIn Profile</span>
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
