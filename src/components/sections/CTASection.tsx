import { Link } from "react-router-dom";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_ROUTES, STORE_INFO } from "@/constants";

export function CTASection() {
  return (
    <section className="bg-primary py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="font-heading font-black text-3xl md:text-5xl text-white mb-4 leading-tight">
          Ready to Print Something <br className="md:hidden" /> Amazing?
        </h2>
        <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
          Visit our store, call us, or send your files on WhatsApp — we're always ready to help!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="rounded-full h-14 px-8 text-base font-bold font-heading bg-white text-secondary hover:bg-gray-50 shadow-lg border-0"
            asChild
          >
            <a href="https://wa.me/919831983105" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5 text-green-500" />
              WhatsApp Us
            </a>
          </Button>
          <Button
            size="lg"
            className="rounded-full h-14 px-8 text-base font-bold font-heading bg-transparent border-2 border-white text-white hover:bg-white/10 shadow-none"
            asChild
          >
            <a href={`tel:${STORE_INFO.phone}`}>
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
          </Button>
          <Button
            size="lg"
            className="rounded-full h-14 px-8 text-base font-bold font-heading bg-transparent border-2 border-white text-white hover:bg-white/10 shadow-none"
            asChild
          >
            <Link to={APP_ROUTES.CONTACT}>
              <MapPin className="mr-2 h-5 w-5" />
              Find Us
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
