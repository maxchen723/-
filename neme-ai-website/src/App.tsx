import { useState } from 'react'
import ParticleBackground from './components/ParticleBackground'
import Header from './sections/Header'
import Hero from './sections/Hero'
import ProductSlides from './sections/ProductSlides'
import ProductModal from './components/ProductModal'
import type { Product } from './data/products'

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <>
      <ParticleBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <ProductSlides onProductClick={setSelectedProduct} />
      </main>
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  )
}
