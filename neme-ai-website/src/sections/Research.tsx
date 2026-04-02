import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const papers = [
  {
    date: '2025-01',
    title: '研究论文标题占位 A',
    description: '这是一篇关于具身智能前沿探索的研究，探讨了多模态感知融合在通用机器人中的应用前景。',
  },
  {
    date: '2025-03',
    title: '研究论文标题占位 B',
    description: '基于大语言模型的机器人自主任务规划研究，实现了长序列复杂任务的端到端执行。',
  },
  {
    date: '2025-06',
    title: '研究论文标题占位 C',
    description: '足式机器人运动控制的最新进展，提出了一种新型的动态平衡控制算法框架。',
  },
  {
    date: '2025-09',
    title: '研究里程碑标题占位 D',
    description: '灵巧操作领域的技术突破，实现了接近人类水平的精密物体抓取与操纵能力。',
  },
]

export default function Research() {
  return (
    <section id="research" className="relative py-24 px-6">
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="相关研究"
          subtitle="展示发表的一些前瞻性内容"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {papers.map((paper, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 flex flex-col"
            >
              <span className="text-xs text-primary mb-3 font-mono">{paper.date}</span>
              <h3 className="text-base font-semibold text-white mb-3 leading-snug">{paper.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-5">{paper.description}</p>
              <button className="self-start text-xs text-primary hover:text-primary-light transition-colors flex items-center gap-1">
                了解更多
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
