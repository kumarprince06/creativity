import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SEO } from "@/components/SEO";

const categories = ["All Products", "Notebooks & Paper", "Pens & Pencils", "Art & Craft", "Office Supplies"];

const products = [
  { name: "Premium Notebook Set (3)", desc: "A4, 200 pages, hardcover", price: 350, originalPrice: 450, rating: 4.8, badge: "Best Seller", badgeColor: "bg-primary", image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=300", category: "Notebooks & Paper" },
  { name: "Geometry Box Set", desc: "Complete set with compass & protractor", price: 89, originalPrice: 120, rating: 4.7, badge: "Top Rated", badgeColor: "bg-[#00A87A]", image: "https://images.unsplash.com/photo-1596496050827-8299e0220de1?q=80&w=300", category: "Pens & Pencils" },
  { name: "Color Pencil Set (24)", desc: "Professional grade, vibrant colors", price: 199, originalPrice: 250, rating: 4.5, badge: null, badgeColor: "", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=300", category: "Art & Craft" },
  { name: "School Bag (Premium)", desc: "Waterproof, 3 compartments", price: 899, originalPrice: 1200, rating: 4.9, badge: "Premium", badgeColor: "bg-blue-500", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=300", category: "Office Supplies" },
  { name: "Eraser & Sharpener Set", desc: "Dust-free erasers, sharp blades", price: 49, originalPrice: 60, rating: 4.2, badge: null, badgeColor: "", image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?q=80&w=300", category: "Pens & Pencils" },
  { name: "Chart Paper Bundle (10)", desc: "Assorted colors, large size", price: 150, originalPrice: 200, rating: 4.6, badge: null, badgeColor: "", image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=300", category: "Art & Craft" },
  { name: "A4 Ruled Notepad (5 pack)", desc: "High quality 70 GSM paper", price: 299, originalPrice: 350, rating: 4.4, badge: "Best Seller", badgeColor: "bg-primary", image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?q=80&w=300", category: "Notebooks & Paper" },
  { name: "Ball Pen Set (10 pcs)", desc: "Blue & Black, smooth flow", price: 99, originalPrice: 150, rating: 4.3, badge: null, badgeColor: "", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=300", category: "Pens & Pencils" },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((p) => {
    const matchesCategory = activeCategory === "All Products" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Products & Supplies" 
        description="Browse our curated collection of premium stationery, art supplies, and office essentials at unbeatable prices in Belur." 
        keywords="stationery products Belur, art supplies Howrah, notebooks, pens, office essentials" 
        url="/products"
      />
      {/* Hero */}
      <section className="bg-secondary py-20 md:py-28 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block text-sm font-bold text-primary font-heading mb-3 px-4 py-1.5 bg-primary/20 rounded-full">SHOP</span>
            <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Stationery Shop 🛒
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Browse our curated collection of premium stationery, art supplies, and office essentials.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
            <div className="flex flex-wrap gap-2 order-2 md:order-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold font-heading transition-all ${
                    activeCategory === cat
                      ? "bg-secondary text-white shadow-md"
                      : "bg-[#F8FAFC] text-muted-foreground hover:bg-gray-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative max-w-sm w-full order-1 md:order-2">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="pl-12 rounded-full h-12 bg-[#F8FAFC] border-none focus-visible:ring-1 focus-visible:ring-primary"
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="bg-white rounded-2xl border overflow-hidden hover:shadow-xl transition-all group relative"
              >
                {product.badge && (
                  <span className={`absolute top-3 left-3 z-10 ${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {product.badge}
                  </span>
                )}
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-bold text-base text-secondary mb-1">{product.name}</h3>
                  <p className="text-muted-foreground text-xs mb-3">{product.desc}</p>
                  <div className="flex items-center space-x-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3.5 w-3.5 ${
                          i < Math.floor(product.rating) ? "text-amber-400 fill-amber-400" : "text-gray-200 fill-gray-200"
                        }`}
                      />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">({product.rating})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-lg font-black font-heading text-primary">₹{product.price}</span>
                      <span className="text-xs text-muted-foreground line-through">₹{product.originalPrice}</span>
                    </div>
                    <Button size="sm" className="rounded-lg bg-primary hover:bg-primary/90 text-white font-bold text-xs">
                      <ShoppingCart className="h-3.5 w-3.5 mr-1" />
                      Buy
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-xl font-heading font-bold mb-2">No products found</p>
              <p>Try adjusting your search or category filter.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
