import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, User, MessageSquare } from 'lucide-react';

const Contact = () => {
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
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ganeshmadatha159@gmail.com',
      href: 'mailto:ganeshmadatha159@gmail.com',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9059493829',
      href: 'tel:+919059493829',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, Telangana, India',
      href: '#',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/MadathaGanesh',
      href: 'https://github.com/MadathaGanesh',
      color: 'text-primary',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/madathaganesh',
      href: 'https://linkedin.com/in/madathaganesh',
      color: 'text-secondary',
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
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a tech chat!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-card-foreground mb-6">
                  Let's Connect
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you're a recruiter, a fellow developer, or someone interested in technology, I'd love to hear from you!
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.map((contact) => {
                  const Icon = contact.icon;
                  return (
                    <motion.a
                      key={contact.label}
                      href={contact.href}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      className="glass-card p-6 flex items-center space-x-4 transition-all duration-300 hover:bg-white/10"
                    >
                      <div className={`p-3 rounded-lg ${contact.bgColor} ${contact.color}`}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <div className="font-medium text-card-foreground">{contact.label}</div>
                        <div className="text-muted-foreground">{contact.value}</div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold text-card-foreground mb-4">Find Me Online</h3>
                <div className="space-y-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center space-x-3 p-4 bg-white/5 border border-white/10 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-primary/50"
                      >
                        <Icon size={20} className={social.color} />
                        <div>
                          <div className="font-medium text-card-foreground text-sm">{social.label}</div>
                          <div className="text-muted-foreground text-xs">{social.value}</div>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Contact Form Using FormSubmit */}
            <motion.div variants={itemVariants}>
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-card-foreground mb-6">Send a Message</h2>
                <form
                  action="https://formsubmit.co/ganeshmadatha159@gmail.com"
                  method="POST"
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                        Name *
                      </label>
                      <div className="relative">
                        <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-foreground placeholder-muted-foreground transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-foreground placeholder-muted-foreground transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-card-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-foreground placeholder-muted-foreground transition-colors"
                      placeholder="What would you like to discuss?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare size={18} className="absolute left-3 top-3 text-muted-foreground" />
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-foreground placeholder-muted-foreground transition-colors resize-none"
                        placeholder="Tell me about your project, opportunity, or just say hello!"
                      />
                    </div>
                  </div>

                  {/* Hidden fields for FormSubmit options */}
                  <input type="hidden" name="_next" value="https://yourdomain.com/thank-you.html" />
                  <input type="hidden" name="_subject" value="New message from Contact Form" />
                  <input type="hidden" name="_autoresponse" value="Thank you for reaching out! I will reply ASAP." />
                  <input type="hidden" name="_captcha" value="false" />

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="neon-button w-full flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Quick Response Promise */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Quick Response Promise</h2>
              <p className="text-muted-foreground leading-relaxed">
                I typically respond to messages within <span className="text-primary font-semibold">24 hours</span>.
                For urgent matters, feel free to reach out via phone or LinkedIn for faster communication.
              </p>
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

export default Contact;
