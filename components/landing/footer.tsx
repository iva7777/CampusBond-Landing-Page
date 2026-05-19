"use client"
import { motion } from "framer-motion"
import { Heart, Instagram, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-card py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/icon.svg" width={50} height={50} alt="" />
              <span className="text-xl font-bold text-card">CampusBond</span>
            </div>
            <p className="text-card/70 leading-relaxed">
              Твоята студентска общност на един клик разстояние. Свали CampusBond за бърза връзка с колеги, 
              лесно учене в екип и актуални събития в университета.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-card mb-4">За приложението</h4>
            <ul className="space-y-3 text-card/70">
              <li><a href="#" className="hover:text-primary transition-colors">Какво представлява?</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Характеристики</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Партньори</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Коментари</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-card mb-4">За CampusBond</h4>
            <ul className="space-y-3 text-card/70">
              <li><a href="#" className="hover:text-primary transition-colors">За нас</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Кариери</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-card mb-4">Помощ</h4>
            <ul className="space-y-3 text-card/70">
              <li><a href="#" className="hover:text-primary transition-colors">Помощ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Политика за поверителност</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Условия за ползване</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Контакти</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-card/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-card/60 text-sm flex items-center gap-1">
            Направено с <Heart className="w-4 h-4 text-[#E8A8B3] fill-[#E8A8B3]" /> за всички студенти
          </p>

          <div className="flex items-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-[#fa52e9] transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-[#1873fa] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-[#f7ad0f] transition-colors"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>
        </div>

        <div className="text-center mt-8 text-card/40 text-sm">
          © {new Date().getFullYear()} CampusBond. Всички права запазени.
        </div>
      </div>
    </footer>
  )
}
