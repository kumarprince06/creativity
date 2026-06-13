import { Copy, Printer, Shirt, Coffee, Camera, BookOpen, Layers, Scissors } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Xerox",
    description: "Fast and affordable photocopying services for all your documents.",
    Icon: Copy,
    borderColor: "border-blue-200",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    title: "Color Printing",
    description: "Vibrant, high-resolution color prints for presentations and posters.",
    Icon: Printer,
    borderColor: "border-purple-200",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    title: "B&W Printing",
    description: "Sharp black and white document printing starting at just ₹1/page.",
    Icon: Printer,
    borderColor: "border-gray-200",
    iconBg: "bg-gray-50",
    iconColor: "text-gray-600",
  },
  {
    title: "T-Shirt Printing",
    description: "Custom t-shirt designs printed with premium quality inks.",
    Icon: Shirt,
    borderColor: "border-pink-200",
    iconBg: "bg-pink-50",
    iconColor: "text-pink-500",
  },
  {
    title: "Mug Printing",
    description: "Personalised mugs with your photos, logos, or custom designs.",
    Icon: Coffee,
    borderColor: "border-amber-200",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
  },
  {
    title: "Photo Printing",
    description: "High-quality photo prints in various sizes with glossy or matte finish.",
    Icon: Camera,
    borderColor: "border-green-200",
    iconBg: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    title: "Spiral Binding",
    description: "Professional spiral and soft binding for reports and presentations.",
    Icon: BookOpen,
    borderColor: "border-cyan-200",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-500",
  },
  {
    title: "Lamination",
    description: "Protect your important documents with premium lamination.",
    Icon: Layers,
    borderColor: "border-orange-200",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    title: "Art & Craft Supplies",
    description: "Wide range of stationery, art materials, and craft supplies.",
    Icon: Scissors,
    borderColor: "border-red-200",
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-sm font-bold text-primary font-heading mb-3">
            OUR SERVICES
          </span>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-secondary mb-4">
            What We Offer ✨
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From standard document printing to custom merchandise, we provide comprehensive stationery solutions.
          </p>
        </div>

        {/* 3x3 Service Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group p-6 rounded-2xl border-2 ${service.borderColor} bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              <div className={`inline-flex p-3 rounded-xl ${service.iconBg} ${service.iconColor} mb-4 transition-transform group-hover:scale-110`}>
                <service.Icon className="h-7 w-7" />
              </div>
              <h3 className="font-heading font-bold text-xl text-secondary mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
