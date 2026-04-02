import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
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
          onClick={scrollToTop}
          className="flex items-center gap-3 text-white font-semibold text-lg tracking-tight cursor-pointer"
        >
          <span className="text-white font-bold">Neme AI</span>
          <span className="text-[#666] text-sm hidden sm:inline">子空间机器人</span>
        </button>

        <p className="text-[#555] text-xs hidden sm:block">智能机器人全栈式服务商</p>
      </div>
    </header>
  )
}
