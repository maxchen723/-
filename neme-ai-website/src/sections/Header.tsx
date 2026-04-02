import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/60 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-white font-semibold text-lg tracking-tight cursor-pointer"
        >
          <span className="font-bold">Neme AI</span>
          <span className="text-[#666] text-sm hidden sm:inline">子空间机器人</span>
        </button>

        <nav className="flex items-center gap-6">
          <button onClick={() => scrollTo('#products')} className="text-[#888] text-sm hover:text-white transition-colors cursor-pointer">
            产品中心
          </button>
          <button onClick={() => scrollTo('#solutions')} className="text-[#888] text-sm hover:text-white transition-colors cursor-pointer">
            行业方案
          </button>
        </nav>
      </div>
    </header>
  )
}
