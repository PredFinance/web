import type React from "react"
import type { Metadata } from "next"
import { Providers } from "@/components/providers"
import { ToastProvider } from "@/components/toast-provider"
import { Poetsen_One } from "next/font/google"
import "./globals.css"

const poetsenOne = Poetsen_One({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poetsen-one",
})

export const metadata: Metadata = {
  title: "WheatChain Protocol - Modular DeFi on Sui Blockchain",
  description:
    "WheatChain Protocol is a modular DeFi platform on Sui, offering liquid staking and innovative yield-generating solutions to empower decentralized finance.",
  keywords: "WheatChain, DeFi, Sui blockchain, liquid staking, yield farming, decentralized finance, modular protocol",
  openGraph: {
    title: "WheatChain Protocol - Modular DeFi on Sui",
    description: "Redefining DeFi with liquid staking and innovative yield solutions on Sui blockchain",
    type: "website",
    url: "https://wheatchain.xyz",
  },
  twitter: {
    card: "summary_large_image",
    title: "WheatChain Protocol - Modular DeFi on Sui",
    description: "Redefining DeFi with liquid staking and innovative yield solutions on Sui blockchain",
    creator: "@wheatchain_xyz",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poetsenOne.variable}>
      <body>
        <Providers>
          <ToastProvider />
          <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
