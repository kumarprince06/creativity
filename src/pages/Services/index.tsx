import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Printer, Shirt, Coffee, Camera, BookOpen, Layers, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "xerox", label: "Xerox", icon: Copy },
  { id: "color", label: "Color", icon: Printer },
  { id: "tshirt", label: "T-Shirt", icon: Shirt },
  { id: "mug", label: "Mug", icon: Coffee },
  { id: "photo", label: "Photo", icon: Camera },
  { id: "spiral", label: "Spiral", icon: BookOpen },
  { id: "lamination", label: "Lamination", icon: Layers },
  { id: "art", label: "Art", icon: CheckCircle2 },
];

const servicesDetails = [
  {
    id: "xerox",
    title: "Xerox & B&W Printing",
    description: "Fast, crisp, and affordable black & white photocopying and document printing. Perfect for study materials, official documents, and bulk manuals.",
    image: "https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80&w=800",
    features: ["High-speed automated copiers", "Crisp text quality", "A4, A3, Legal sizes supported", "Automatic stapling for bulk orders"],
    pricing: [
      { item: "Single Side (A4)", price: "₹1.00 / pg" },
      { item: "Double Side (A4)", price: "₹1.50 / pg" },
      { item: "Bulk (>500 pgs)", price: "₹0.80 / pg" },
      { item: "A3 Size Print", price: "₹3.00 / pg" },
    ],
  },
  {
    id: "color",
    title: "Vibrant Color Printing",
    description: "Bring your presentations, portfolios, and posters to life with our commercial-grade color printers. We use premium paper stocks to ensure maximum color accuracy.",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=800",
    features: ["Photo-quality resolution", "Glossy and Matte paper options", "Smudge-free laser printing", "Perfect for projects & charts"],
    pricing: [
      { item: "Standard Color (A4)", price: "₹5.00 / pg" },
      { item: "Glossy Photo Paper", price: "₹15.00 / pg" },
      { item: "Color Poster (A3)", price: "₹25.00 / pg" },
      { item: "Sticker Print (A4)", price: "₹20.00 / pg" },
    ],
  },
  {
    id: "tshirt",
    title: "Custom T-Shirt Printing",
    description: "Design your own apparel! Whether it's for a college fest, corporate event, or a personal gift, we print high-quality, durable designs on comfortable fabrics.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800",
    features: ["Sublimation & Vinyl printing", "100% Cotton & Poly-blends", "Any custom design or photo", "Bulk discounts for teams"],
    pricing: [
      { item: "White T-Shirt + Print", price: "₹199" },
      { item: "Black/Color T-Shirt", price: "₹299" },
      { item: "Polo / Collared Shirt", price: "₹399" },
      { item: "Bulk Order (20+)", price: "Custom Quote" },
    ],
  },
  {
    id: "mug",
    title: "Personalized Mug Printing",
    description: "Start your morning right with a custom printed mug. Add your favorite photos, quotes, or company logo. These make perfect corporate giveaways or birthday gifts.",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=800",
    features: ["Microwave & Dishwasher safe", "High-gloss ceramic finish", "Magic (color-changing) mugs available", "Free design assistance"],
    pricing: [
      { item: "Standard White Mug", price: "₹199" },
      { item: "Magic / Color-Changing", price: "₹299" },
      { item: "Inner Color Mug", price: "₹249" },
      { item: "Bulk Corporate Order", price: "Custom Quote" },
    ],
  },
  {
    id: "photo",
    title: "Professional Photo Printing",
    description: "Turn your digital memories into beautiful physical prints. We offer premium glossy and matte finishes for everything from passport photos to large framed portraits.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
    features: ["Instant Passport Photos", "Glossy & Matte Finishes", "Various Sizes (4x6 to A3)", "Color correction included"],
    pricing: [
      { item: "Passport Photos (8 pcs)", price: "₹50" },
      { item: "4x6 Postcard Print", price: "₹10" },
      { item: "A4 Photo Print", price: "₹40" },
      { item: "A3 Poster Print", price: "₹80" },
    ],
  },
  {
    id: "spiral",
    title: "Spiral & Soft Binding",
    description: "Give your reports, thesis, and presentations a professional finish. We provide durable spiral and soft binding solutions with transparent covers.",
    image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?q=80&w=800",
    features: ["Durable plastic coils", "Clear front covers", "Thick cardstock backings", "Soft and Hard binding available"],
    pricing: [
      { item: "Standard Spiral (Up to 50 pgs)", price: "₹30" },
      { item: "Standard Spiral (50-100 pgs)", price: "₹50" },
      { item: "Soft Bound (Glued)", price: "₹80" },
      { item: "Hard Bound (Thesis)", price: "₹250" },
    ],
  },
  {
    id: "lamination",
    title: "Document Lamination",
    description: "Protect your important certificates, ID cards, and menus from water damage and tearing with our high-quality thermal lamination.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800",
    features: ["Thick 125-micron pouches", "Bubble-free finish", "ID card size to A3 size", "Glossy protection"],
    pricing: [
      { item: "ID Card Size", price: "₹10" },
      { item: "A4 Certificate Size", price: "₹20" },
      { item: "Legal Size", price: "₹25" },
      { item: "A3 Poster Size", price: "₹40" },
    ],
  },
  {
    id: "art",
    title: "Art & Craft Supplies",
    description: "Your creative projects deserve the best materials. We stock a wide variety of chart papers, acrylic colors, brushes, and other essential craft supplies.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800",
    features: ["Premium artist brands", "All types of chart paper", "Watercolor & Acrylics", "Crafting tools & adhesives"],
    pricing: [
      { item: "Chart Papers", price: "₹10 onwards" },
      { item: "Acrylic Colors", price: "₹50 onwards" },
      { item: "Color Pencils (Set)", price: "₹30 onwards" },
      { item: "Craft Glue/Adhesives", price: "₹20 onwards" },
    ],
  },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("xerox");

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-secondary py-20 md:py-28 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-sm font-bold text-primary font-heading mb-3 px-4 py-1.5 bg-primary/20 rounded-full">
              ALL SERVICES
            </span>
            <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Everything You Need to <br className="hidden md:block" />
              Print & Create
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Explore our comprehensive catalog of printing and custom merchandise services. Transparent pricing, premium quality, and lightning-fast delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Category Tabs */}
      <div className="sticky top-[72px] z-40 bg-white border-b shadow-sm overflow-x-auto hide-scrollbar">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 py-4 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToSection(cat.id)}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-sm font-bold font-heading transition-all ${
                  activeTab === cat.id
                    ? "bg-primary text-white shadow-md"
                    : "bg-[#F8FAFC] text-muted-foreground hover:bg-gray-100"
                }`}
              >
                <cat.icon className="h-4 w-4" />
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Sections */}
      <div className="py-10">
        {servicesDetails.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 md:py-24 ${index % 2 !== 0 ? "bg-[#F8FAFC]" : "bg-white"}`}
          >
            <div className="container mx-auto px-4 md:px-6">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}>
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`rounded-[2rem] overflow-hidden shadow-2xl ${index % 2 !== 0 ? "order-1 lg:order-2" : ""}`}
                >
                  <img src={service.image} alt={service.title} className="w-full aspect-[4/3] object-cover" />
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={index % 2 !== 0 ? "order-2 lg:order-1" : ""}
                >
                  <h2 className="font-heading font-black text-3xl md:text-4xl text-secondary mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <CheckCircle2 className="h-5 w-5 text-[#00A87A] shrink-0 mt-0.5" />
                        <span className="text-secondary font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white border rounded-2xl overflow-hidden shadow-sm mb-8">
                    <div className="bg-[#F8FAFC] px-6 py-4 border-b">
                      <h4 className="font-heading font-bold text-secondary">Pricing Estimate</h4>
                    </div>
                    <div className="divide-y">
                      {service.pricing.map((priceItem, i) => (
                        <div key={i} className="flex items-center justify-between px-6 py-4">
                          <span className="text-muted-foreground">{priceItem.item}</span>
                          <span className="font-black font-heading text-primary">{priceItem.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full sm:w-auto rounded-full h-14 px-8 text-base font-bold font-heading bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg"
                    asChild
                  >
                    <a href={`https://wa.me/919831983105?text=Hi! I want to order: ${service.title}`} target="_blank" rel="noopener noreferrer">
                      Order via WhatsApp
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="bg-primary py-20 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-heading font-black text-3xl md:text-5xl text-white mb-4">
            Can't Find What You Need?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            We offer custom printing solutions. Contact us to discuss your requirements!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="rounded-full h-14 px-8 text-base font-bold font-heading bg-white text-[#25D366] hover:bg-white/90 shadow-lg"
              asChild
            >
              <a href="https://wa.me/919831983105" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full h-14 px-8 text-base font-bold font-heading border-2 border-white/40 text-white hover:bg-white/10"
              asChild
            >
              <a href={`/contact`}>
                Visit Our Store
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
