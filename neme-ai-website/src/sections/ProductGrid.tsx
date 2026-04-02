import { motion } from 'framer-motion'
import { allProducts, type Product } from '../data/products'

interface Props {
  onProductClick: (product: Product) => void
}

const seriesGroups = [
  { label: 'Neme GR 系列', subtitle: '多模态移动作业平台' },
  { label: 'Neme GRGO 系列', subtitle: '全场景四足机器人矩阵' },
  { label: 'Neme GR H 系列', subtitle: '足式人形机器人探索' },
  { label: 'DexGrasp 系列', subtitle: '灵巧操作与精密执行' },
]

export default function ProductGrid({ onProductClick }: Props) {
  return (
    <section id="products" className="relative py-24 px-6">
      <div className="max-w-[1300px] mx-auto">
        {seriesGroups.map((group) => {
          const products = allProducts.filter((p) => p.series === group.label)
          if (products.length === 0) return null

          return (
            <div key={group.label} className="mb-20">
              {/* Series title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className="mb-10"
              >
                <h2 className="text-2xl md:text-3xl font-semibold gradient-title mb-2">
                  {group.label}
                </h2>
                <p className="text-[#666] text-sm">{group.subtitle}</p>
              </motion.div>

              {/* Product cards - horizontal grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                {products.map((product, idx) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    onClick={() => onProductClick(product)}
                    className="group cursor-pointer"
                  >
                    {/* Image */}
                    <div className="aspect-square bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden flex items-center justify-center p-5 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.05] group-hover:-translate-y-1 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                      {product.images.length === 1 ? (
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                          style={{ filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.06))' }}
                        />
                      ) : (
                        <div className="flex items-center gap-2 w-full h-full">
                          {product.images.map((img, i) => (
                            <img
                              key={i}
                              src={img}
                              alt={`${product.name} ${i + 1}`}
                              className="max-h-full object-contain flex-1 transition-transform duration-300 group-hover:scale-105"
                              style={{ filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.06))' }}
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Name */}
                    <div className="mt-3 px-1">
                      <h3 className="text-white text-sm font-medium truncate">{product.name}</h3>
                      <p className="text-[#555] text-xs mt-0.5">{product.tag}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
