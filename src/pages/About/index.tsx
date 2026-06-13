import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_ROUTES } from "@/constants";
import { SEO } from "@/components/SEO";

const corePillars = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To provide fast, reliable, and high-quality printing solutions to students and businesses, ensuring every idea is perfectly captured on paper.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To become the most trusted and innovative stationery and print hub in the region, known for our exceptional service and cutting-edge print technology.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Customer first, always. We believe in transparency, speed without compromising quality, and building lasting relationships with our community.",
    color: "text-pink-500",
    bg: "bg-pink-50",
  },
];

const team = [
  {
    name: "Ramesh Gupta",
    role: "Founder & Owner",
    description: "Visionary leader with over a decade of experience in the print industry.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300",
  },
  {
    name: "Sunita Sharma",
    role: "Print Operations Head",
    description: "Ensures smooth daily operations, quality control, and timely deliveries.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300",
  },
  {
    name: "Anil Patil",
    role: "Design Specialist",
    description: "Creative expert specializing in custom merchandise and layout designs.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300",
  },
  {
    name: "Pooja Nair",
    role: "Customer Relations",
    description: "Your friendly point of contact for all orders, quotes, and support.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300",
  },
];

const milestones = [
  { year: "2015", title: "The Beginning", desc: "Started as a small xerox and stationery shop." },
  { year: "2017", title: "First Upgrade", desc: "Added color laser printers and spiral binding." },
  { year: "2019", title: "Merchandise", desc: "Launched custom t-shirt and mug printing services." },
  { year: "2021", title: "Digital Shift", desc: "Upgraded to commercial-grade digital press machines." },
  { year: "2023", title: "Major Milestone", desc: "Crossed 5,000+ happy customers in our database." },
  { year: "2024", title: "Going Online", desc: "Launched our digital platform for seamless online ordering." },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="About Us" 
        description="Learn more about Creativity's mission and journey since 2015. We are dedicated to providing the best printing and stationery solutions for the local community." 
        keywords="about Creativity printing, printing shop history, stationery experts Belur" 
        url="/about"
      />
      {/* Hero Section */}
      <section className="bg-[#F8FAFC] py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-sm font-bold text-primary font-heading mb-3 px-4 py-1.5 bg-primary/10 rounded-full">
                ABOUT CREATIVITY
              </span>
              <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-secondary mb-6 leading-tight">
                More Than Just <br className="hidden md:block" />
                a Print Shop
              </h1>
              <p className="text-muted-foreground text-lg max-w-xl leading-relaxed mb-8">
                Since our humble beginnings, we've grown into a full-service stationery and print hub. We combine speed, premium quality, and affordability to make printing completely hassle-free for you.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-muted">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Customer" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center font-bold text-xs z-10">
                    5k+
                  </div>
                </div>
                <div className="text-sm font-bold text-secondary">
                  Trusted by students <br />& local businesses
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative lg:ml-auto w-full max-w-lg"
            >
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800"
                  alt="Our Print Shop"
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border flex items-center space-x-3"
              >
                <div className="bg-green-100 p-2.5 rounded-xl text-green-600">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-black font-heading text-xl text-secondary">9+ Years</p>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">of Trust</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20">
            {[
              { value: "5000+", label: "Happy Customers" },
              { value: "9+", label: "Years Experience" },
              { value: "50+", label: "Print Services" },
              { value: "99%", label: "Satisfaction" },
            ].map((stat, i) => (
              <div key={i} className="text-center px-4">
                <h3 className="text-3xl md:text-4xl font-black font-heading text-white mb-1">{stat.value}</h3>
                <p className="text-xs font-semibold text-white/80 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission/Vision/Values */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corePillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-8 rounded-3xl border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`${pillar.bg} ${pillar.color} inline-flex p-4 rounded-2xl mb-6`}>
                  <pillar.icon className="h-8 w-8" />
                </div>
                <h3 className="font-heading font-black text-2xl text-secondary mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-bold text-primary font-heading mb-3">
              OUR JOURNEY
            </span>
            <h2 className="font-heading font-black text-3xl md:text-4xl text-secondary">
              Milestones We're Proud Of
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary to-primary/20 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="md:w-1/2" />
                  
                  {/* Center Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-white font-black font-heading shadow-xl border-4 border-[#F8FAFC] z-10 hidden md:flex">
                    {milestone.year}
                  </div>

                  <div className={`md:w-1/2 flex justify-center ${index % 2 === 0 ? "md:justify-start md:pl-12" : "md:justify-end md:pr-12"}`}>
                    <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow w-full max-w-sm relative">
                      <div className="md:hidden inline-block px-3 py-1 bg-primary/10 text-primary font-bold rounded-lg mb-3 text-sm">
                        {milestone.year}
                      </div>
                      <h3 className="font-heading font-bold text-xl text-secondary mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{milestone.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-bold text-primary font-heading mb-3">
              THE EXPERTS
            </span>
            <h2 className="font-heading font-black text-3xl md:text-4xl text-secondary">
              Meet Our Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-3xl border overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading font-black text-xl text-secondary">{member.name}</h3>
                  <p className="text-primary text-sm font-bold mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-secondary text-center py-20 md:py-24 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-heading font-black text-3xl md:text-5xl text-white mb-6 leading-tight">
            Ready to Experience the Creativity Difference?
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Join thousands of happy customers who trust us with their printing and stationery needs.
          </p>
          <Button
            size="lg"
            className="rounded-full h-14 px-10 text-base font-bold font-heading bg-primary text-white hover:bg-primary/90 shadow-lg"
            asChild
          >
            <Link to={APP_ROUTES.SERVICES}>
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
