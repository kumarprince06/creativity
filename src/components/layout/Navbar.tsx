import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Printer, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_ROUTES, STORE_INFO } from "@/constants";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: APP_ROUTES.HOME },
    { name: "About", path: APP_ROUTES.ABOUT },
    { name: "Services", path: APP_ROUTES.SERVICES },
    { name: "Products", path: APP_ROUTES.PRODUCTS },
    { name: "Gallery", path: APP_ROUTES.GALLERY },
    { name: "Contact", path: APP_ROUTES.CONTACT },
  ];

  return (
    <>
      {/* Top Header Bar — dark slate */}
      <div className="bg-secondary text-secondary-foreground py-2.5 text-xs hidden md:block">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2 font-medium">
            <span>🚀 Fast Service</span>
            <span className="text-muted-foreground">•</span>
            <span>Quality Printing</span>
            <span className="text-muted-foreground">•</span>
            <span>Best Prices in Town!</span>
          </div>
          <div className="flex items-center space-x-4 font-medium">
            <span>📞 {STORE_INFO.phone}</span>
            <span className="text-muted-foreground">|</span>
            <span>Mon–Sun: 11AM–11PM</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar — white */}
      <nav className="sticky top-0 z-50 w-full bg-background border-b shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-[72px] items-center justify-between">
            {/* Logo */}
            <Link to={APP_ROUTES.HOME} className="flex items-center space-x-3">
              <div className="bg-primary p-2.5 rounded-xl">
                <Printer className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-extrabold font-heading text-primary">
                  Creativity
                </span>
                <span className="text-[10px] font-semibold text-muted-foreground tracking-wide uppercase">
                  {STORE_INFO.subtitle}
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex lg:items-center lg:space-x-1">
              {navLinks.map((link) => {
                const isActive =
                  link.path === "/"
                    ? location.pathname === "/"
                    : location.pathname.startsWith(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-5 py-2 rounded-full text-sm font-bold font-heading transition-all ${
                      isActive
                        ? "text-primary border-2 border-primary bg-white"
                        : "text-secondary hover:text-primary border-2 border-transparent"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Call Now CTA */}
            <div className="hidden lg:flex items-center">
              <Button
                size="lg"
                className="rounded-full bg-primary hover:bg-primary/90 text-white font-bold font-heading shadow-md"
                asChild
              >
                <a href={`tel:${STORE_INFO.phone}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>

            {/* Mobile Toggle */}
            <div className="flex lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t bg-background absolute w-full shadow-xl z-50">
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive =
                  link.path === "/"
                    ? location.pathname === "/"
                    : location.pathname.startsWith(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-4 py-3 rounded-xl text-base font-bold font-heading transition-all ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 mt-2 border-t">
                <Button
                  size="lg"
                  className="w-full rounded-xl bg-primary text-white font-bold"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <a href={`tel:${STORE_INFO.phone}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
