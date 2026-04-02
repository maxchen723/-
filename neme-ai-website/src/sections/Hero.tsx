import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      className="h-screen w-full flex flex-col items-center justify-center relative"
      style={{
        scrollSnapAlign: 'start',
        background: 'radial-gradient(circle at 50% 40%, rgba(20,20,20,1) 0%, rgba(0,0,0,1) 100%)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center"
      >
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-semibold tracking-tight gradient-title leading-[1.1] mb-6">
          万千形态，终归智能
        </h1>
        <p className="text-[#888] text-lg md:text-xl font-light">
          智能机器人全栈式服务商
        </p>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[#555] text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
