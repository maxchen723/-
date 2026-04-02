import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const productMenu = [
  { label: 'NemeGR 系列', href: '#products-gr' },
  { label: 'GRGO', href: '#products-grgo' },
  { label: 'GR H', href: '#products-grh' },
  { label: 'DexGrasp', href: '#products-dexgrasp' },
  { label: 'Masrobo', href: '#products-masrobo' },
]

const navLinks = [
  { label: '行业方案', href: '#solutions' },
  { label: '相关研究', href: '#research' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setDropdownOpen(false)
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNav('#hero') }}
          className="flex items-center gap-2 text-white font-semibold text-lg tracking-tight"
        >
          <span className="text-primary font-bold">Neme</span>
          <span className="text-text-secondary text-sm hidden sm:inline">子空间机器人</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="text-sm text-text-secondary hover:text-white transition-colors flex items-center gap-1">
              产品中心
              <svg className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 glass rounded-xl py-2 border border-white/[0.08]"
                >
                  {productMenu.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleNav(item.href)}
                      className="block w-full text-left px-4 py-2.5 text-sm text-text-secondary hover:text-white hover:bg-white/[0.04] transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-sm text-text-secondary hover:text-white transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/[0.06] overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              <p className="text-xs text-text-tertiary uppercase tracking-wider mb-2">产品中心</p>
              {productMenu.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNav(item.href)}
                  className="block w-full text-left py-2 text-sm text-text-secondary hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="border-t border-white/[0.06] my-3" />
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="block w-full text-left py-2 text-sm text-text-secondary hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
