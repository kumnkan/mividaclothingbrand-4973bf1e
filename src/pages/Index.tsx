import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import mensImage from "@/assets/mens-category.jpg";
import womensImage from "@/assets/womens-category.jpg";
import kidsImage from "@/assets/kids-category.jpg";
import socksImage from "@/assets/socks-category.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const categories = [
    { title: "Men", image: mensImage, link: "/men" },
    { title: "Women", image: womensImage, link: "/women" },
    { title: "Kids", image: kidsImage, link: "/kids" },
    { title: "Socks", image: socksImage, link: "/socks" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* Featured Categories */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
            Shop By Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                image={category.image}
                link={category.link}
              />
            ))}
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
              Mi Rita started as a student-founded brand, creating quality clothing that fits your lifestyle. 
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
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Ready to Elevate Your Wardrobe?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover our full collection of premium t-shirts and socks. Nationwide delivery within 3-5 business days.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/men">Shop Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/track-order">Track Your Order</Link>
            </Button>
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
                <li><Link to="/men" className="hover:text-foreground">Men</Link></li>
                <li><Link to="/women" className="hover:text-foreground">Women</Link></li>
                <li><Link to="/kids" className="hover:text-foreground">Kids</Link></li>
                <li><Link to="/socks" className="hover:text-foreground">Socks</Link></li>
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
            <p>&copy; 2025 Mi Rita. All rights reserved. Proudly South African.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
