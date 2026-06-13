import { motion } from "framer-motion";
import { GraduationCap, BookOpen, PenTool, Heart, Building2, Briefcase } from "lucide-react";

const audiences = [
  { title: "School Students", icon: GraduationCap, color: "text-blue-500" },
  { title: "College Students", icon: BookOpen, color: "text-purple-500" },
  { title: "Teachers", icon: PenTool, color: "text-green-500" },
  { title: "Parents", icon: Heart, color: "text-pink-500" },
  { title: "Coaching Centers", icon: Building2, color: "text-amber-500" },
  { title: "Small Businesses", icon: Briefcase, color: "text-primary" },
];

export function TargetAudiencesSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <h2 className="font-heading font-black text-3xl md:text-4xl text-secondary">
            We Serve Everyone 🎯
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`${item.color} mb-4 transition-transform group-hover:scale-110`}>
                <item.icon className="h-10 w-10" />
              </div>
              <h3 className="font-heading font-bold text-sm text-secondary">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
