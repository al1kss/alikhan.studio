'use client'

import { motion } from 'framer-motion'
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  GraduationCap,
  Award,
  Users,
  Code
} from 'lucide-react'

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'alikhan@example.com', // Replace with your actual email
      href: 'mailto:alikhan@example.com',
      color: 'neon-pink'
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      value: 'github.com/al1kss',
      href: 'https://github.com/al1kss',
      color: 'neon-teal'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://linkedin.com/in/alikhan-abdykaimov',
      color: 'neon-purple'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'UWC ISAK Japan',
      href: null,
      color: 'neon-orange'
    }
  ]

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Academic Excellence',
      description: 'Multiple Olympiad victories in Math, Chemistry, Programming, and Physics',
      stats: '10+ Awards'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Technical Innovation',
      description: 'First Cloudflare-LightRAG integration, custom mechanical keyboard design',
      stats: '5+ Years Coding'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Leadership Impact',
      description: 'Founded multiple clubs, organized tournaments with 200+ participants',
      stats: '$4K+ Raised'
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Education Focus',
      description: 'UWC ISAK Japan student, merit scholarship recipient, STEM advocate',
      stats: 'Current Student'
    }
  ]

  return (
    <section id="contact" className="relative min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Let's Connect
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on innovative projects,
            or just have a conversation about technology and its potential to create positive impact.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="group"
                  >
                    {contact.href ? (
                      <a
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 p-4 rounded-lg bg-bg-tertiary border border-glass-border hover:border-opacity-50 transition-all duration-300 group-hover:transform group-hover:scale-105"
                        style={{
                          '--hover-color': `var(--${contact.color})`,
                        } as React.CSSProperties}
                      >
                        <div
                          className={`p-2 rounded-lg bg-${contact.color} bg-opacity-10 text-${contact.color} group-hover:bg-opacity-20 transition-all`}>
                          {contact.icon}
                        </div>
                        <div>
                          <div className="font-medium text-text-primary group-hover:text-neon-pink transition-colors">
                            {contact.label}
                          </div>
                          <div className="text-text-secondary text-sm">
                            {contact.value}
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 rounded-lg bg-bg-tertiary border border-glass-border">
                        <div className={`p-2 rounded-lg bg-${contact.color} bg-opacity-10 text-${contact.color}`}>
                          {contact.icon}
                        </div>
                        <div>
                          <div className="font-medium text-text-primary">
                            {contact.label}
                          </div>
                          <div className="text-text-secondary text-sm">
                            {contact.value}
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="text-center p-4 rounded-lg bg-bg-tertiary border border-glass-border">
                <div className="text-2xl font-bold text-neon-pink mb-1">12+</div>
                <div className="text-text-muted text-sm">Projects</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-bg-tertiary border border-glass-border">
                <div className="text-2xl font-bold text-neon-teal mb-1">5+</div>
                <div className="text-text-muted text-sm">Years Coding</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-bg-tertiary border border-glass-border">
                <div className="text-2xl font-bold text-neon-purple mb-1">200+</div>
                <div className="text-text-muted text-sm">Event Participants</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-bg-tertiary border border-glass-border">
                <div className="text-2xl font-bold text-neon-orange mb-1">$4K+</div>
                <div className="text-text-muted text-sm">Funds Raised</div>
              </div>
            </motion.div>
          </motion.div>

          {/* About Me / Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6">About Me</h3>
              <div className="prose prose-invert max-w-none">
                <p className="text-text-secondary leading-relaxed mb-4">
                  I'm a passionate student developer currently studying at UWC ISAK Japan,
                  where I combine my love for technology with a commitment to creating
                  positive social impact.
                </p>
                <p className="text-text-secondary leading-relaxed mb-6">
                  My journey spans from winning academic olympiads to building innovative
                  AI platforms, organizing community events, and contributing to open-source
                  projects. I believe technology should serve humanity, and I'm always
                  looking for ways to use my skills to solve real problems.
                </p>
              </div>
            </div>

            {/* Achievement Cards */}
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="p-4 rounded-lg bg-bg-tertiary border border-glass-border hover:border-neon-pink hover:border-opacity-50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="p-2 rounded-lg bg-neon-pink bg-opacity-10 text-neon-pink group-hover:bg-opacity-20 transition-all">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-text-primary group-hover:text-neon-pink transition-colors">
                          {achievement.title}
                        </h4>
                        <span className="text-xs px-2 py-1 rounded-full bg-neon-pink bg-opacity-20 text-neon-pink">
                          {achievement.stats}
                        </span>
                      </div>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center p-6 rounded-lg bg-gradient-to-r from-neon-pink to-neon-teal bg-opacity-10 border border-glass-border"
            >
              <h4 className="text-lg font-semibold text-text-primary mb-2">
                Ready to Collaborate?
              </h4>
              <p className="text-text-secondary text-sm mb-4">
                Whether it's a technical project, community initiative, or just a great conversation.
              </p>
              <a
                href="mailto:alikhan@example.com"
                className="btn-primary px-6 py-3 rounded-full font-medium inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Send me an email
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 pt-8 -mb-10"
        >
          <div
            className="h-px animate-glow bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

          <p className="mt-6 text-text-muted text-sm">

            © 2025 Built with passion by Alikhan Abdykaimov 🌿
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection