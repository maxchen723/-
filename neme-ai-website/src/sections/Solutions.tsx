import { motion } from 'framer-motion'

const solutions = [
  {
    title: '工业巡检与安全监控',
    subtitle: '常态化、无人化巡检方案，提升工业生产安全与运维效率',
    image: '/images/solution-inspection.png',
  },
  {
    title: '仓储物流与 IDC 运维',
    subtitle: '赋能海外仓、前置仓及数据中心的高效、安全、智能化作业',
    image: '/images/solution-warehouse.png',
  },
  {
    title: '智慧零售与药房方案',
    subtitle: '解决补货、分拣、盘点痛点，提升终端运营效率',
    image: '/images/solution-retail.png',
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-24 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-[1300px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-semibold gradient-title mb-2">行业方案</h2>
          <p className="text-[#666] text-sm">面向工业、物流、零售等核心场景的智能解决方案</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((sol, idx) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image area */}
              <div className="aspect-[16/10] bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.05]">
                <img
                  src={sol.image}
                  alt={sol.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    target.parentElement!.innerHTML = '<div class="text-[#444] text-xs text-center p-6">行业方案示意图<br/>待添加</div>'
                  }}
                />
              </div>

              {/* Text */}
              <div className="mt-3 px-1">
                <h3 className="text-white text-sm font-medium">{sol.title}</h3>
                <p className="text-[#555] text-xs mt-1 leading-relaxed">{sol.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-[#444] text-xs mt-8 text-center">
          行业方案图片请放入 public/images/ 目录：solution-inspection.png、solution-warehouse.png、solution-retail.png
        </p>
      </div>
    </section>
  )
}
