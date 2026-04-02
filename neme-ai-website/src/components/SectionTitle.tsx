import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
}

export default function SectionTitle({ title, subtitle, className = '' }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`text-center mb-16 ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
      {subtitle && (
        <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-6 mx-auto w-20 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
    </motion.div>
  )
}
