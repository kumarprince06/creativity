import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { STORE_INFO } from "@/constants";

const schedule = [
  { day: "Monday – Friday", time: STORE_INFO.hours.weekday },
  { day: "Saturday", time: STORE_INFO.hours.saturday },
  { day: "Sunday", time: STORE_INFO.hours.sunday },
  { day: "National Holidays", time: STORE_INFO.hours.holidays },
];

export function StoreTimingsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 text-primary font-bold font-heading text-sm mb-3">
            <Clock className="h-4 w-4" />
            <span>Store Timings</span>
          </div>
          <h2 className="font-heading font-black text-3xl md:text-4xl text-secondary">
            We're Open for You 🕐
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border overflow-hidden"
        >
          {schedule.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-between px-8 py-5 ${
                index < schedule.length - 1 ? "border-b" : ""
              }`}
            >
              <span className="font-heading font-bold text-secondary text-base">{item.day}</span>
              <span
                className={`font-bold text-xs px-3 py-1.5 rounded-full ${
                  item.time === "Closed" 
                    ? "bg-red-50 text-red-500" 
                    : "bg-[#E6F8F3] text-[#00A87A]"
                }`}
              >
                {item.time}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
