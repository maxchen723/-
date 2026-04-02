import { useState } from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import ProductGrid from './sections/ProductGrid'
import Solutions from './sections/Solutions'
import ProductModal from './components/ProductModal'
import type { Product } from './data/products'

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <ProductGrid onProductClick={setSelectedProduct} />
        <Solutions />
      </main>
      <footer className="border-t border-white/[0.06] py-8 text-center">
        <p className="text-[#444] text-xs">&copy; 2025 Neme AI 子空间机器人. All rights reserved.</p>
      </footer>
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  )
}
