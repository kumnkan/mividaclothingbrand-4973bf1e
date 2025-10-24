import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import socksImage from "@/assets/socks-category.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getNewArrivals, getClassicCollection, getProductsByCategory } from "@/data/products";

const Index = () => {
  const newArrivals = getNewArrivals();
  const classicCollection = getClassicCollection();
  const sockProducts = getProductsByCategory("socks");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* New Arrivals Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Fresh Drops – Just In
            </h2>
            <p className="text-lg text-muted-foreground">
              Check out our latest t-shirt designs. Hot drops you don't want to miss.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Classic Collection Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              The Originals
            </h2>
            <p className="text-lg text-muted-foreground">
              Our classic designs that started it all. Timeless style, premium quality.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {classicCollection.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Socks Section Teaser */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Step Up Your Style
            </h2>
            <p className="text-lg text-muted-foreground">
              Premium socks in all sizes. Comfort meets style.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
            {sockProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/socks">Shop All Socks</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Made for Everyday Life
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              MI VIDA started as a student-founded brand, creating quality clothing that fits your lifestyle. 
              Today, we're proud to serve customers across South Africa with premium t-shirts and socks designed for comfort and style.
            </p>
            <Button asChild size="lg">
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="bg-primary text-primary-foreground rounded-lg p-12 text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Nationwide Delivery | Secure Payments | Track Your Order
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Shop with confidence. Delivery within 3-5 business days across South Africa.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link to="/tshirts">Shop the Collection</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
                <Link to="/track-order">Track Your Order</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Shop</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/tshirts" className="hover:text-foreground">T-Shirts</Link></li>
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
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/terms" className="hover:text-foreground">Terms & Conditions</Link></li>
                <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 MI VIDA. All rights reserved. Proudly South African.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
