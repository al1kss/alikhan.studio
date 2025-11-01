'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Particles from "@/components/particles"

interface HeroSectionProps {
  onScrollToProjects: () => void
  onScrollToContact: () => void
}

const HeroSection = ({ onScrollToProjects, onScrollToContact }: HeroSectionProps) => {
  return (
    <section
      className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-14 animate-fade-in mt-20"
      >
        <motion.button
          onClick={onScrollToProjects}
          className="btn-primary duration-500 px-6 py-3 rounded-full font-medium text-sm flex items-center gap-3 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Projects
          <ArrowDown className="w-3.5 h-4 group-hover:translate-y-0.5 delay-300 duration-300 transition-transform" />
        </motion.button>

        <motion.button
          onClick={onScrollToContact}
          className="btn-secondary duration-500 px-6 py-3 rounded-full font-medium text-sm hover:text-neon-teal transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </motion.button>
      </motion.div>


      <div
        className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <h1
        className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text"
      >
        alikhan
      </h1>

      <div
        className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center delay-500  animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          Senior at UWC ISAK Japan | Aspiring Electrical Engineer
        </h2>
      </div>

    </section>
  )
}

export default HeroSection