'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import ContactSection from '@/components/sections/contact-section'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 glass-header rounded-full text-text-secondary hover:text-text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Back to Home</span>
        </Link>
      </motion.div>

      {/* Contact Content */}
      <main className="pt-20">
        <ContactSection />
      </main>
    </div>
  )
}