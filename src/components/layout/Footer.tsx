import { Link } from "react-router-dom";
import { Printer, Mail, Phone, MapPin, Globe, MessageCircle, Share2 } from "lucide-react";
import { APP_ROUTES, STORE_INFO } from "@/constants";

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-14 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — Brand */}
          <div className="space-y-5">
            <Link to={APP_ROUTES.HOME} className="flex items-center space-x-3">
              <div className="bg-primary p-2.5 rounded-xl">
                <Printer className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-extrabold font-heading text-primary">
                  Creativity
                </span>
                <span className="text-[10px] font-semibold text-white/50 tracking-wide uppercase">
                  {STORE_INFO.subtitle}
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Your one-stop destination for all printing and stationery needs. Fast, reliable, and affordable services since 2017.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-white/10 hover:bg-primary p-2.5 rounded-lg transition-colors">
                <Globe className="h-4 w-4 text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-primary p-2.5 rounded-lg transition-colors">
                <MessageCircle className="h-4 w-4 text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-primary p-2.5 rounded-lg transition-colors">
                <Share2 className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-base mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", path: APP_ROUTES.HOME },
                { name: "About", path: APP_ROUTES.ABOUT },
                { name: "Services", path: APP_ROUTES.SERVICES },
                { name: "Products", path: APP_ROUTES.PRODUCTS },
                { name: "Gallery", path: APP_ROUTES.GALLERY },
                { name: "Contact", path: APP_ROUTES.CONTACT },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/60 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Our Services */}
          <div>
            <h3 className="font-heading font-bold text-base mb-5">Our Services</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>Xerox & Photocopy</li>
              <li>Color / B&W Printing</li>
              <li>T-Shirt Printing</li>
              <li>Mug Printing</li>
              <li>Spiral Binding</li>
              <li>Lamination</li>
            </ul>
          </div>

          {/* Column 4 — Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-base mb-5">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3 text-white/60">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>{STORE_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3 text-white/60">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href={`tel:${STORE_INFO.phone}`} className="hover:text-primary transition-colors">
                  {STORE_INFO.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3 text-white/60">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href={`mailto:${STORE_INFO.email}`} className="hover:text-primary transition-colors">
                  {STORE_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Creativity — Stationery & Print Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
