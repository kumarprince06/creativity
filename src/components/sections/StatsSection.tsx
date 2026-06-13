import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

const stats = [
  { target: 5000, suffix: "+", label: "Happy Customers" },
  { target: 9, suffix: "+", label: "Years in Business" },
  { target: 50, suffix: "+", label: "Print Services" },
  { target: 99, suffix: "%", label: "Satisfaction Rate" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, target, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          setValue(Math.round(value));
        },
      });
      return controls.stop;
    }
  }, [target, isInView]);

  return (
    <span ref={nodeRef}>
      {value}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="bg-secondary text-white py-14">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <h3 className="text-4xl md:text-5xl font-black font-heading text-white mb-1">
                <Counter target={stat.target} suffix={stat.suffix} />
              </h3>
              <p className="text-sm font-medium text-white/60 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
