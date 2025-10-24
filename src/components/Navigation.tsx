import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/mi-vida-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

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
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
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
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navigation;
