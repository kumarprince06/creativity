import { motion } from "framer-motion";
import { Zap, ShieldCheck, BadgeDollarSign, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Most orders ready in minutes. Bulk orders in 24 hours.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    description: "We redo any print that doesn't meet your expectations — free.",
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    icon: BadgeDollarSign,
    title: "Best Price Promise",
    description: "Competitive pricing with regular student discounts.",
    color: "text-primary",
    bg: "bg-red-50",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals with 9+ years of experience.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto mb-4">
          <h2 className="font-heading font-black text-4xl md:text-5xl text-secondary mb-6 leading-tight">
            Students & Businesses
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We combine quality, speed, and affordability so you never have to compromise.
            Here's what makes us different:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          {/* Left — Features List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start space-x-4"
              >
                <div className={`${feature.bg} ${feature.color} p-3 rounded-xl shrink-0`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-secondary">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right — Apple Image (as in the Figma) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="rounded-[2rem] overflow-hidden shadow-xl max-w-md">
              <img
                src="https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?q=80&w=800"
                alt="Quality you can count on"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
