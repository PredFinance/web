"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Heart } from "lucide-react"
import "./footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Protocol",
      links: [
        { name: "Documentation", href: "#", external: false },
        { name: "Whitepaper", href: "#", external: false },
        { name: "Roadmap", href: "#", external: false },
        
      ],
    },
    {
      title: "Community",
      links: [
        { name: "Discord", href: "https://discord.gg/zVsYfGkNDa", external: true },
        { name: "Telegram", href: "https://t.me/swhit_tg", external: true },
        { name: "X (Twitter)", href: "https://x.com/wheatchain_xyz", external: true },
       
      ],
    },
    {
      title: "Developers",
      links: [
        { name: "GitHub", href: "#", external: true },
        { name: "API Docs", href: "#", external: false },
        
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Suiscan Directory", href: "https://suiscan.xyz/mainnet/directory/WheatChain", external: true },
       
        { name: "Support", href: "#", external: false },
      ],
    },
  ]

  return (
    <footer className="footer-section relative z-10">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="footer-brand"
          >
            <div className="footer-logo-container">
              <Image
                src="/wheatchain-logo.jpg"
                alt="WheatChain Protocol"
                width={60}
                height={60}
                className="footer-logo"
              />
              <h3 className="footer-brand-name">WheatChain</h3>
            </div>
            <p className="footer-description">
              A modular DeFi platform on Sui, offering liquid staking and innovative yield-generating solutions to
              empower decentralized finance.
            </p>
            <div className="footer-sui-badge">
              <span className="footer-sui-text">Built on</span>
              <Image src="/sui-logo.png" alt="SUI" width={60} height={30} className="footer-sui-logo" />
            </div>
          </motion.div>

          {/* Footer Links */}
          <div className="footer-links-grid">
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="footer-links-section"
              >
                <h4 className="footer-section-title">{section.title}</h4>
                <ul className="footer-links-list">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        target={link.external ? "_blank" : "_self"}
                        rel={link.external ? "noopener noreferrer" : ""}
                        className="footer-link"
                      >
                        <span>{link.name}</span>
                        {link.external && <ExternalLink size={14} className="footer-external-icon" />}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="footer-bottom"
        >
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>© {currentYear} WheatChain Protocol. All rights reserved.</p>
            </div>

            <div className="footer-made-with">
              <span>Made with</span>
              <Heart size={16} className="footer-heart" />
              <span>for the DeFi community</span>
            </div>

            <div className="footer-legal">
              <Link href="#" className="footer-legal-link">
                Privacy Policy
              </Link>
              <span className="footer-separator">•</span>
              <Link href="#" className="footer-legal-link">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Background Effects */}
      <div className="footer-bg-effects">
        <div className="footer-gradient-1"></div>
        <div className="footer-gradient-2"></div>
      </div>
    </footer>
  )
}

export default Footer
