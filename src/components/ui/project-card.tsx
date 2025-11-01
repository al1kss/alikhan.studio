'use client'

import { useState, useRef} from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Globe } from 'lucide-react'
import Image from 'next/image'
import { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const getIcon = (linkName: string) => {
    const name = linkName.toLowerCase()
    if (name.includes('github')) return <Github className="w-4 h-4" />
    if (name.includes('website') || name.includes('demo')) return <Globe className="w-4 h-4" />
    return <ExternalLink className="w-4 h-4" />
  }

  const formatDate = (dateString: string) => {
    // Assuming format is "DD.MM.YY"
    const [month, year] = dateString.split('.')
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ]
    return `${months[parseInt(month) - 1]} 20${year}`
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      className="project-card rounded-xl p-6 group relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`,
      } as React.CSSProperties}
    >
      {/* Mouse Glow Effect */}
      {isHovered && (
        <div
          className="absolute inset-0 opacity-30 rounded-xl pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 107, 157, 0.15), transparent 40%)`,
          }}
        />
      )}

      {/* Project Image */}
      <div className="relative h-48 mb-6 rounded-lg overflow-hidden bg-bg-secondary">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-neon-pink to-neon-teal opacity-50" />
          </div>
        )}

        {/* Date Badge */}
        <div className="absolute top-3 right-3 bg-glass-bg backdrop-blur-sm rounded-full px-3 py-1 text-xs text-text-secondary border border-glass-border">
          {formatDate(project.date)}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        {/* Title and Category */}
        <div>
          <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-neon-pink transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs px-2 py-1 rounded-full bg-neon-pink bg-opacity-20 text-neon-pink border border-neon-pink border-opacity-30">
              {project.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="text-xs px-2 py-1 rounded bg-bg-secondary text-text-muted border border-glass-border"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="text-xs px-2 py-1 rounded bg-bg-secondary text-text-muted border border-glass-border">
                +{project.tags.length - 4} more
              </span>
            )}
          </div>
        )}

        {/* Links */}
        {project.links.length > 0 && (
          <div className="flex gap-3 pt-2">
            {project.links.map((link, linkIndex) => (
              <motion.a
                key={linkIndex}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-neon-teal transition-colors group/link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {getIcon(link.name)}
                <span className="group-hover/link:underline">{link.name}</span>
              </motion.a>
            ))}
          </div>
        )}
      </div>

      {/* Hover Border Glow */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-neon-pink group-hover:border-opacity-50 transition-all duration-300 pointer-events-none" />
    </motion.div>
  )
}

export default ProjectCard