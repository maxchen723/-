import { motion } from 'framer-motion'

interface ProductCardProps {
  name: string
  label?: string
  description: string
  features?: string[]
  images: string[]
  className?: string
}

export default function ProductCard({
  name,
  label,
  description,
  features,
  images,
  className = '',
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`glass-card p-6 flex flex-col ${className}`}
    >
      {/* Image area */}
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-gradient-to-b from-[#0a1628] to-[#060d1a] flex items-center justify-center">
        {images.length === 1 ? (
          <img
            src={images[0]}
            alt={name}
            className="product-img w-full h-full object-contain p-4"
          />
        ) : (
          <div className="flex items-center justify-center gap-2 w-full h-full p-4">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${name} ${i + 1}`}
                className="product-img max-h-full object-contain flex-1"
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-3">
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          {label && (
            <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
              {label}
            </span>
          )}
        </div>

        <p className="text-text-secondary text-sm leading-relaxed mb-4">{description}</p>

        {features && features.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {features.map((f) => (
              <span
                key={f}
                className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] text-text-tertiary border border-white/[0.06]"
              >
                {f}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
