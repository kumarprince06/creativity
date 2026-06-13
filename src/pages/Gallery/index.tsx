import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";

const categories = ["All Work", "Printing", "T-Shirts", "Mugs & Gifts", "Binding", "Photos"];

const galleryItems = [
  { category: "T-Shirts", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600" },
  { category: "Printing", image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=600" },
  { category: "Photos", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600" },
  { category: "Binding", image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?q=80&w=600" },
  { category: "Mugs & Gifts", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=600" },
  { category: "T-Shirts", image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=600" },
  { category: "Binding", image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=600" },
  { category: "Printing", image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=600" },
  { category: "Photos", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600" },
  { category: "Mugs & Gifts", image: "https://images.unsplash.com/photo-1572119865084-43c285814d63?q=80&w=600" },
  { category: "T-Shirts", image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=600" },
  { category: "Printing", image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=600" },
  { category: "Photos", image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=600" },
  { category: "Binding", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600" },
  { category: "Mugs & Gifts", image: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?q=80&w=600" },
  { category: "Printing", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=600" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All Work");

  const filteredItems = activeCategory === "All Work"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Gallery & Portfolio" 
        description="View our portfolio of premium print work, custom t-shirt designs, beautifully bound books, and custom mug prints." 
        keywords="printing gallery, custom t-shirts Howrah, book binding examples, print quality" 
        url="/gallery"
      />
      {/* Hero */}
      <section className="bg-secondary py-20 md:py-28 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block text-sm font-bold text-primary font-heading mb-3 px-4 py-1.5 bg-primary/20 rounded-full">GALLERY</span>
            <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Our Portfolio 🎨
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              See the quality for yourself. Browse our collection of completed print jobs, custom merchandise, and design projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-20 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-sm font-bold font-heading transition-all shadow-sm ${
                  activeCategory === cat
                    ? "bg-secondary text-white shadow-md"
                    : "bg-white text-muted-foreground hover:bg-gray-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={`${item.image}-${index}`}
                  className="break-inside-avoid rounded-2xl overflow-hidden relative group cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt="Gallery item"
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold font-heading px-4 py-2 bg-black/50 rounded-full backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-8">
            Like what you see? Let's create something amazing together!
          </h2>
          <Button
            size="lg"
            className="rounded-full h-14 px-10 text-base font-bold font-heading bg-white text-primary hover:bg-white/90 shadow-xl"
            asChild
          >
            <a href="https://wa.me/919831983105" target="_blank" rel="noopener noreferrer">
              Place Your Order
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
