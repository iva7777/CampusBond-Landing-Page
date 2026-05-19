"use client"

import { motion } from "framer-motion"
import { 
  Calendar, 
  MessageCircleMore, 
  Users, 
  BookOpen,
  Bell, 
  ShoppingBag
} from "lucide-react"

const features = [
  {
    icon: Calendar,
    title: "Бъди в центъра на събитията",
    description: "От студентски партита и гост-лекции до спортни турнири – никога повече няма да изпуснеш какво се случва в кампуса.",
    color: "#0D91AF"
  },
  {
    icon: BookOpen,
    title: "Учебни материали и взаимопомощ",
    description: "Създавай или се включвай в групи за съвместно учене. Споделяй записки, обсъждай проекти и се подготвяй за изпити с колеги.",
    color: "#a1ef76"
  },
  {
    icon: Users,
    title: "Свържи се със съмишленици",
    description: "Намери студенти от твоето общежитие, факултет или хора със сходни интереси и хобита.",
    color: "#52a7ef"
  },
  {
    icon: MessageCircleMore,
    title: "Локален фийд",
    description: "Задавай въпроси, търси съвети за преподаватели или просто сподели забавна случка от деня с цялата университетска общност.",
    color: "#ffc2f9"
  },
  {
    icon: Bell,
    title: "Напомняния за крайни срокове",
    description: "Никога не пропускай краен срок с напомняния за задачи, изпити и събития в кампуса.",
    color: "#FE9462"
  },
  {
    icon: ShoppingBag,
    title: "Студентска борса",
    description: "В нашата борса можеш бързо, лесно и сигурно да купуваш, продаваш или разменяш вещи директно с други колеги от кампуса.",
    color: "#de6f6e"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Всичко, от което се нуждаеш, за да{" "}
            <span className="text-primary">успееш</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Какво ти дава CampusBond?
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${feature.color}20` }}
              >
                <feature.icon 
                  className="w-8 h-8 transition-colors duration-300" 
                  style={{ color: feature.color }}
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              
              <div 
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: feature.color }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
