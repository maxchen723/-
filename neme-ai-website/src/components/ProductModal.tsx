import { motion, AnimatePresence } from 'framer-motion'
import type { Product } from '../data/products'

interface Props {
  product: Product | null
  onClose: () => void
}

export default function ProductModal({ product, onClose }: Props) {
  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-[900px] w-full max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-[24px]"
            style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.6)' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all z-10 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="md:w-[45%] flex-shrink-0 flex items-center justify-center p-10 min-h-[300px] border-b md:border-b-0 md:border-r border-white/[0.06]">
                {product.images.length === 1 ? (
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="max-w-full max-h-[350px] object-contain"
                    style={{ filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.08))' }}
                  />
                ) : (
                  <div className="flex items-center gap-4">
                    {product.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`${product.name} ${i + 1}`}
                        className="max-h-[280px] object-contain"
                        style={{ filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.08))' }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 p-10 flex flex-col gap-6">
                <div>
                  <span className="text-xs text-[#999] border border-white/10 px-3 py-1 rounded-full tracking-wider">
                    {product.tag}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-semibold gradient-title leading-tight">
                  {product.name}
                </h2>

                <p className="text-[#888] text-base leading-[1.8] font-light">
                  {product.description}
                </p>

                {product.features && product.features.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                    {product.features.map((f) => (
                      <div key={f} className="flex items-center gap-3 text-[#d1d5db] text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" style={{ boxShadow: '0 0 10px #fff' }} />
                        {f}
                      </div>
                    ))}
                  </div>
                )}

                {/* Price */}
                <div className="mt-auto pt-6 border-t border-white/[0.06]">
                  <p className="text-xs text-[#666] mb-1">售价</p>
                  <p className="text-2xl font-semibold text-white/30">即将公布</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
