import { motion } from "framer-motion";

export function MarqueeBanner() {
  const items = [
    "⚡ Xerox ₹0.50/page",
    "🖨️ Color Print ₹5/page",
    "👕 T-Shirt Printing",
    "📚 Spiral Binding ₹30",
    "☕ Mug Printing ₹199",
    "🎨 Premium Quality Materials",
  ];

  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full bg-primary text-white py-3.5 overflow-hidden flex whitespace-nowrap relative">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-primary to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-primary to-transparent z-10" />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25,
        }}
        className="flex space-x-12 px-6 items-center"
      >
        {duplicatedItems.map((item, index) => (
          <span key={index} className="text-sm font-bold tracking-wide">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
