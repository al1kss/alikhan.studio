'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter, Grid3X3, LayoutGrid } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import ProjectCard from '@/components/ui/project-card'
import { projects } from '@/lib/data/projects'
import { categories } from '@/lib/data/categories'

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [isGridView, setIsGridView] = useState(true)

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return projects
    return projects.filter(project => project.category === selectedCategory)
  }, [selectedCategory])

  const getIconComponent = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName]
    return IconComponent ? <IconComponent className="w-4 h-4" /> : <Grid3X3 className="w-4 h-4" />
  }

  return (
    <section id="projects" className="relative min-h-screen py-20 px-6">

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display gradient-text mb-6">
            Projects
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A collection of my work spanning web development, AI, hardware projects,
            and community initiatives. Each project represents a learning journey and
            a step toward solving real problems.
          </p>
        </motion.div>

        {/* category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
            <div className="flex flex-wrap gap-3">
              <motion.button
                onClick={() => setSelectedCategory('all')}
                className={`category-pill px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-neon-pink text-white shadow-lg shadow-neon-pink/25'
                    : 'hover:border-neon-pink/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  All Projects ({projects.length})
                </div>
              </motion.button>

              {categories.map((category) => {
                const projectCount = projects.filter(p => p.category === category.id).length
                if (projectCount === 0) return null

                return (
                  <motion.button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`category-pill px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category.id
                        ? 'text-white shadow-lg'
                        : 'hover:border-opacity-50'
                    }`}
                    style={{
                      backgroundColor: selectedCategory === category.id ? category.color : 'transparent',
                      borderColor: selectedCategory === category.id ? category.color : undefined,
                      boxShadow: selectedCategory === category.id ? `0 10px 20px ${category.color}25` : undefined,
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center gap-2">
                      {getIconComponent(category.icon)}
                      {category.name} ({projectCount})
                    </div>
                  </motion.button>
                )
              })}
            </div>

            <div className="flex gap-2 bg-bg-tertiary rounded-lg p-1">
              <button
                onClick={() => setIsGridView(true)}
                className={`p-2 rounded transition-colors ${
                  isGridView ? 'bg-neon-pink text-white' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsGridView(false)}
                className={`p-2 rounded transition-colors ${
                  !isGridView ? 'bg-neon-pink text-white' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>

          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-8 -mt-4"
          >
            <p className="text-zinc-300/50 text-sm">
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
              {selectedCategory !== 'all' && (
                <span className="text-zinc-300/40 italic text-sm">
                  {' '}in {categories.find(c => c.id === selectedCategory)?.name}
                </span>
              )}
            </p>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`grid gap-8 ${
              isGridView 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1 md:grid-cols-2'
            }`}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-bg-tertiary flex items-center justify-center">
              <Filter className="w-12 h-12 text-text-muted" />
            </div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              No projects found
            </h3>
            <p className="text-text-muted mb-6">
              Try selecting a different category or view all projects.
            </p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="btn-primary px-6 py-3 rounded-full"
            >
              View All Projects
            </button>
          </motion.div>
        )}

      </div>
    </section>
  )
}

export default ProjectsSection