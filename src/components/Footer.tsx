import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-secondary">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/tshirts" className="hover:text-foreground">T-Shirts</Link></li>
              <li><Link to="/hoodies" className="hover:text-foreground">Hoodies</Link></li>
              <li><Link to="/socks" className="hover:text-foreground">Socks</Link></li>
              <li><Link to="/new-arrivals" className="hover:text-foreground">New Arrivals</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/faq" className="hover:text-foreground">FAQs</Link></li>
              <li><Link to="/track-order" className="hover:text-foreground">Track Order</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact Us</Link></li>
              <li><Link to="/terms" className="hover:text-foreground">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.tiktok.com/@mi.vida970?_t=ZM-90pgefeoMG4&_r=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-background p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="TikTok"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/share/1DwrwpB76d/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-background p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/mivida_sa?igsh=MTd4bHVkbTFzMDVyMw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-background p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 MI VIDA. All rights reserved. Proudly South African.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
