'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/ui/header'
import HeroSection from '@/components/sections/hero-section'
import ProjectsSection from '@/components/sections/projects-section'
import ContactSection from '@/components/sections/contact-section'

export default function HomePage() {
  const [showHeader, setShowHeader] = useState(false)
  const [activeSection, setActiveSection] = useState<'hero' | 'projects' | 'contact'>('hero')

  // Smooth scroll function
  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // Scroll handlers
  const scrollToHero = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToProjects = () => {
    smoothScrollTo('projects')
  }

  const scrollToContact = () => {
    smoothScrollTo('contact')
  }

  // Handle scroll events
  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      // Show header after scrolling 200px
      setShowHeader(scrollY > 200)

      // Throttle section detection
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        // Determine active section based on scroll position
        //const heroSection = document.getElementById('hero')
        const projectsSection = document.getElementById('projects')
        const contactSection = document.getElementById('contact')

        if (contactSection) {
          const contactTop = contactSection.offsetTop - windowHeight / 3
          if (scrollY >= contactTop) {
            setActiveSection('contact')
            return
          }
        }

        if (projectsSection) {
          const projectsTop = projectsSection.offsetTop - windowHeight / 3
          if (scrollY >= projectsTop) {
            setActiveSection('projects')
            return
          }
        }

        setActiveSection('hero')
      }, 100)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    // Initial call to set correct state
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timeoutId)
    }
  }, [])

  // Prevent scroll restoration on page reload
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Glass Header */}
      <Header
        isVisible={showHeader}
        activeSection={activeSection}
        onScrollToHero={scrollToHero}
        onScrollToProjects={scrollToProjects}
        onScrollToContact={scrollToContact}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <div id="hero">
          <HeroSection
            onScrollToProjects={scrollToProjects}
            onScrollToContact={scrollToContact}
          />
        </div>

        {/* Projects Section */}
        <ProjectsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Loading Animation (optional for future) */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="fixed inset-0 bg-bg-primary z-50 pointer-events-none"
      />
    </div>
  )
}