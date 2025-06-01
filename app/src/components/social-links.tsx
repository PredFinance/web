"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import "./social-links.css"

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "X (Twitter)",
      icon: "/x-icon.png",
      url: "https://x.com/wheatchain_xyz",
      color: "from-gray-700 to-black",
      hoverColor: "from-gray-600 to-gray-800",
    },
    {
      name: "Telegram",
      icon: "/telegram-icon.png",
      url: "https://t.me/swhit_tg",
      color: "from-blue-500 to-blue-600",
      hoverColor: "from-blue-400 to-blue-500",
    },
    {
      name: "Discord",
      icon: "/discord-icon.png",
      url: "https://discord.gg/zVsYfGkNDa",
      color: "from-indigo-500 to-purple-600",
      hoverColor: "from-indigo-400 to-purple-500",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <div className="social-section">
      <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center">
        <motion.h3 variants={item} className="social-title mb-8 font-poetsen text-3xl font-bold">
          Join Our Community
        </motion.h3>

        <motion.div variants={item} className="social-grid mb-8">
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.name}
              className="social-item"
              whileHover={{
                scale: 1.1,
                rotateY: 10,
                z: 50,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-link bg-gradient-to-br ${social.color} hover:bg-gradient-to-br hover:${social.hoverColor}`}
              >
                <div className="social-icon-container">
                  <Image
                    src={social.icon || "/placeholder.svg"}
                    alt={social.name}
                    width={32}
                    height={32}
                    className="social-icon"
                  />
                </div>
                <span className="social-name">{social.name}</span>
                <ExternalLink className="social-external-icon" size={16} />
              </Link>

              <div className="social-tooltip">Follow us on {social.name}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Suiscan Link */}
        <motion.div variants={item} className="suiscan-container">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="https://suiscan.xyz/mainnet/directory/WheatChain"
              target="_blank"
              rel="noopener noreferrer"
              className="suiscan-link"
            >
              <span className="suiscan-text">View on Suiscan Directory</span>
              <ExternalLink size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default SocialLinks
