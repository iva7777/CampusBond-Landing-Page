"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border/50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-3">
            <img src="/vector.svg" alt="CampusBond Logo" />
            <span className="text-xl font-bold text-[#096271]">CampusBond</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Характеристики
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Коментари
            </a>
            <Link href="#download">
              <Button className="rounded-full bg-[#096271] hover:bg-primary/90 text-primary-foreground px-6 hover:cursor-pointer">
                Изтегли приложението
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            <a href="#features" className="block text-muted-foreground hover:text-primary transition-colors font-medium">
              Характеристики
            </a>
            <a href="#testimonials" className="block text-muted-foreground hover:text-primary transition-colors font-medium">
              Коментари
            </a>
            <a href="#download" className="block text-muted-foreground hover:text-primary transition-colors font-medium">
              Изтегли приложението
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
