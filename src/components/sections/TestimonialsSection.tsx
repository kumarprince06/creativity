import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rohan Mehta",
    role: "College Student",
    text: "Fastest print service in town! Highly recommend their t-shirt printing. The quality is simply outstanding and the staff is super friendly.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150"
  },
  {
    name: "Priya Sharma",
    role: "Local Business Owner",
    text: "Excellent quality and very affordable. I get all my business flyers and banners printed here. They never disappoint with the turnaround time.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150"
  },
  {
    name: "Amit Kumar",
    role: "Teacher",
    text: "Got my thesis bound here and I regularly print study materials. Very professional work, clean binding, and lowest prices around.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <h2 className="font-heading font-black text-3xl md:text-4xl text-secondary">
            What Our Customers Say ⭐️
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#F8FAFC] border rounded-3xl p-8 relative hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center space-x-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-secondary font-medium leading-relaxed mb-8 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <h4 className="font-heading font-bold text-secondary text-sm">{testimonial.name}</h4>
                  <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
