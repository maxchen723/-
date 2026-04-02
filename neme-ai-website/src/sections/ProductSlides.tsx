import { motion } from 'framer-motion'
import { allProducts, type Product } from '../data/products'

interface Props {
  onProductClick: (product: Product) => void
}

export default function ProductSlides({ onProductClick }: Props) {
  return (
    <>
      {allProducts.map((product) => (
        <section
          key={product.id}
          className="h-screen w-full flex items-center justify-center relative"
          style={{
            scrollSnapAlign: 'start',
            background: 'radial-gradient(circle at 50% 50%, rgba(20,20,20,1) 0%, rgba(0,0,0,1) 100%)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <div className="max-w-[1200px] w-[90%] flex items-center gap-20 max-md:flex-col max-md:gap-10 max-md:py-20">
            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="flex-1 flex flex-col gap-6"
            >
              <span className="text-sm text-[#ccc] border border-white/10 px-4 py-1.5 rounded-full w-fit tracking-wider bg-white/[0.03] backdrop-blur-sm">
                {product.tag}
              </span>

              <h2 className="text-4xl md:text-[3.5rem] font-semibold leading-[1.1] tracking-tight gradient-title">
                {product.name}
              </h2>

              <p className="text-[#888] text-lg leading-relaxed font-light max-w-lg">
                {product.series}
              </p>

              <button
                onClick={() => onProductClick(product)}
                className="mt-4 w-fit px-8 py-3 rounded-full border border-white/20 text-white/80 text-sm hover:bg-white/[0.06] hover:border-white/40 transition-all duration-300 cursor-pointer"
              >
                了解更多
              </button>
            </motion.div>

            {/* Right: image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex-1 h-[400px] md:h-[500px] bg-white/[0.03] border border-white/10 rounded-[32px] flex items-center justify-center relative overflow-hidden cursor-pointer"
              style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.5)', backdropFilter: 'blur(20px)' }}
              onClick={() => onProductClick(product)}
            >
              {product.images.length === 1 ? (
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="max-w-[85%] max-h-[85%] object-contain"
                  style={{ filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.1))' }}
                />
              ) : (
                <div className="flex items-center justify-center gap-4 px-8 w-full h-full">
                  {product.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${product.name} ${i + 1}`}
                      className="max-h-[75%] object-contain flex-1"
                      style={{ filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.1))' }}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </section>
      ))}
    </>
  )
}
