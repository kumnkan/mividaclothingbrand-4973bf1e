import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag, ChevronDown, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import logo from "@/assets/mi-vida-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const { openCart, getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="MI VIDA" className="h-20 w-20 md:h-24 md:w-24" />
          </Link>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative" onClick={openCart}>
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Slide-out Menu */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 animate-fade-in"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-80 bg-background z-50 shadow-xl animate-slide-in-right">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold">Menu</h2>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <nav className="space-y-1">
                {/* Shop Dropdown */}
                <div>
                  <button
                    onClick={() => setIsShopOpen(!isShopOpen)}
                    className="w-full flex items-center justify-between py-3 text-base font-medium hover:text-muted-foreground transition-colors"
                  >
                    Shop
                    <ChevronDown className={`h-5 w-5 transition-transform ${isShopOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isShopOpen && (
                    <div className="pl-4 space-y-1 animate-fade-in">
                      <Link
                        to="/tshirts"
                        className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        T-Shirts
                      </Link>
                      <Link
                        to="/socks"
                        className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Socks
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  to="/new-arrivals"
                  className="block py-3 text-base font-medium hover:text-muted-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  New Arrivals
                </Link>
                <Link
                  to="/track-order"
                  className="block py-3 text-base font-medium hover:text-muted-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Track My Order
                </Link>
                <Link
                  to="/about"
                  className="block py-3 text-base font-medium hover:text-muted-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/faq"
                  className="block py-3 text-base font-medium hover:text-muted-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQs
                </Link>
                <Link
                  to="/contact"
                  className="block py-3 text-base font-medium hover:text-muted-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>

                {/* Social Media Links */}
                <div className="pt-6 mt-6 border-t border-border">
                  <p className="text-sm font-medium mb-4 text-muted-foreground">Follow Us</p>
                  <div className="flex gap-3">
                    <a 
                      href="https://www.tiktok.com/@mividasa" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-secondary p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="TikTok"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://www.facebook.com/profile.php?id=61571925328712" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-secondary p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://www.instagram.com/mivida_sa" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-secondary p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navigation;
