"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Ивайла Георгиева",
    role: "Психология, ПУ",
    content: "CampusBond ми помогна да намеря перфектния баланс между учебното натоварване и грижата за себе си. Определено се чувствам по-добре от преди!",
    rating: 5,
    avatar: "ИИ"
  },
  {
    name: "Мартин Иванов",
    role: "Софтуерно инженерство, ПУ",
    content: "Студентската борса в CampusBond е просто супер. Купих си всички нужни учебници за семестъра на половин цена от колеги в по-горните курсове. Дори успях да си намеря евтин мини-хладилник за стаята!",
    rating: 5,
    avatar: "МИ"
  },
  {
    name: "Даниел Петров",
    role: "Химия и микробиология на храните, УХТ",
    content: "Освен че си намирам записки, редовно следя за моето общежитие. Там си помагаме с всичко – от това кой има да заеме ютия за вечерта, до важна информация за ремонти в блока.",
    rating: 5,
    avatar: "ДП"
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Обичано от{" "}
            <span className="text-[#096271]">студентите</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Присъедини се към стотици студенти, които промениха преживяването си в университета.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-card rounded-3xl p-8 shadow-lg border border-border/50 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FFD93D] text-[#FFD93D]" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-[#096271] font-bold">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
