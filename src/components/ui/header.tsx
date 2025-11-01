'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Home, FolderOpen, Mail } from 'lucide-react'

interface HeaderProps {
  isVisible: boolean
  activeSection: 'hero' | 'projects' | 'contact'
  onScrollToHero: () => void
  onScrollToProjects: () => void
  onScrollToContact: () => void
}

const Header = ({
  isVisible,
  activeSection,
  onScrollToHero,
  onScrollToProjects,
  onScrollToContact
}: HeaderProps) => {

  const navItems = [
    {
      id: 'hero',
      label: 'Home',
      icon: <Home className="w-4 h-4" />,
      onClick: onScrollToHero,
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: <FolderOpen className="w-4 h-4" />,
      onClick: onScrollToProjects,
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: <Mail className="w-4 h-4" />,
      onClick: onScrollToContact,
    },
  ]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.23, 1, 0.32, 1]
          }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
        >
          <nav className="glass-header rounded-full px-6 py-3">
            <div className="flex items-center gap-8">
              {/* Logo/Name */}
              <motion.button
                onClick={onScrollToHero}
                className="text-lg font-bold gradient-text hover:scale-105 transition-transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Alikhan
              </motion.button>

              {/* Navigation Items */}
              <div className="flex items-center gap-1">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={item.onClick}
                    className={`
                      relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                      flex items-center gap-2
                      ${activeSection === item.id
                        ? 'text-white bg-neon-pink shadow-lg shadow-neon-pink/25'
                        : 'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary'
                      }
                    `}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Active indicator */}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 bg-neon-pink rounded-full"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30
                        }}
                      />
                    )}

                    {/* Content */}
                    <span className="relative z-10 flex items-center gap-2">
                      {item.icon}
                      <span className="hidden sm:inline">{item.label}</span>
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  )
}

export default Header