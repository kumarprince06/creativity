import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function MainLayout() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="flex min-h-screen flex-col relative">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      {/* Floating WhatsApp Widget — matches Figma exactly */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="mb-4 bg-white text-secondary p-4 rounded-2xl shadow-xl border relative max-w-[240px]"
            >
              <div className="flex items-start justify-between space-x-3">
                <p className="text-sm font-medium leading-snug">
                  👋 Hi! Chat with us on WhatsApp for quick help!
                </p>
                <button
                  onClick={() => setShowTooltip(false)}
                  className="text-muted-foreground hover:text-secondary shrink-0"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b border-r transform rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        <a
          href="https://wa.me/919831983105"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 relative"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />
          <MessageCircle className="h-7 w-7 relative z-10" />
        </a>
      </div>
    </div>
  );
}
