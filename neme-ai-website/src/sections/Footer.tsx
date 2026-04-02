export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-bg-darker/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary font-bold text-xl">Neme AI</span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              子空间机器人 — 智能机器人全栈式服务商
            </p>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">快速导航</h4>
            <ul className="space-y-2.5">
              {[
                { label: '产品中心', href: '#products' },
                { label: '行业方案', href: '#solutions' },
                { label: '相关研究', href: '#research' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-tertiary hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">联系我们</h4>
            <div className="space-y-2.5 text-sm text-text-tertiary">
              <p>邮箱：contact@neme.ai</p>
              <p>地址：联系地址占位</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] pt-8">
          <p className="text-xs text-text-tertiary text-center">
            © 2025 Neme AI 子空间机器人. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
