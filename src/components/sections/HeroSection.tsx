import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shirt, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_ROUTES } from "@/constants";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] pt-10 pb-20 md:pt-16 md:pb-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6"
          >
            {/* Badge */}
            <div className="inline-flex items-center self-start rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
              <Sparkles className="mr-2 h-4 w-4" />
              #1 Print Hub in the City
            </div>

            {/* Heading */}
            <h1 className="font-heading font-black text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] text-secondary">
              Print Fast, <br />
              <span className="text-primary">Print Perfect</span> <br />
              Every Time! 🎨
            </h1>

            {/* Subtext */}
            <p className="text-lg text-muted-foreground max-w-[520px] leading-relaxed">
              From xerox to custom t-shirts — Creativity is your complete printing partner. Lightning-fast service, unbeatable quality, and prices students love!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                size="lg"
                className="rounded-full h-14 px-8 text-base font-bold font-heading bg-primary hover:bg-primary/90 text-white shadow-lg"
                asChild
              >
                <Link to={APP_ROUTES.SERVICES}>
                  Order Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-14 px-8 text-base font-bold font-heading border-2 border-secondary/20 hover:bg-muted"
                asChild
              >
                <Link to={APP_ROUTES.SERVICES}>
                  Explore Services
                </Link>
              </Button>
            </div>

            {/* Stats Row */}
            <div className="flex items-center space-x-6 pt-6">
              <div className="flex flex-col">
                <span className="text-2xl font-black font-heading text-secondary">5000+</span>
                <span className="text-xs font-semibold text-muted-foreground">Happy Customers</span>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="flex flex-col">
                <span className="text-2xl font-black font-heading text-secondary">9+ Yrs</span>
                <span className="text-xs font-semibold text-muted-foreground">Experience</span>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="flex flex-col">
                <span className="text-2xl font-black font-heading text-secondary">₹1/pg</span>
                <span className="text-xs font-semibold text-muted-foreground">Starting Price</span>
              </div>
            </div>
          </motion.div>

          {/* Right — Hero Image with Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto"
          >
            {/* Main Image */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1000"
                alt="Stationery and printing services"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Badge — T-Shirt Ready (top left) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 md:-left-8 bg-white px-4 py-3 rounded-2xl shadow-xl border flex items-center space-x-3 z-20"
            >
              <div className="bg-pink-100 p-2 rounded-xl text-pink-500">
                <Shirt className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold font-heading text-secondary">T-Shirt Ready!</p>
                <p className="text-xs text-muted-foreground">In just 2 hours</p>
              </div>
            </motion.div>

            {/* Floating Badge — ₹1 per B&W print (bottom right) */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 -right-4 md:-right-6 bg-primary text-white px-5 py-3 rounded-2xl shadow-xl z-20"
            >
              <p className="text-xl font-black font-heading leading-tight">₹1</p>
              <p className="text-[10px] font-semibold opacity-90">per B&W print</p>
            </motion.div>

            {/* Floating Badge — 100% Quality Guaranteed (bottom right offset) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-6 right-6 md:right-12 bg-white px-5 py-3 rounded-xl shadow-xl border flex items-center space-x-2 z-20"
            >
              <CheckCircle2 className="h-5 w-5 text-[#00A87A]" />
              <div>
                <p className="text-xs font-bold font-heading text-secondary leading-tight">100% Quality</p>
                <p className="text-[10px] text-muted-foreground leading-tight">Guaranteed</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
