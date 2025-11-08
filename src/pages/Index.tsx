import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getNewArrivals, getProductsByCategory } from "@/data/products";
import { tshirtDesigns } from "@/data/tshirtDesigns";
import { hoodieDesigns } from "@/data/hoodieDesigns";

const Index = () => {
  const newArrivals = getNewArrivals();
  const sockProducts = getProductsByCategory("socks");
  
  // Convert tshirt designs to product format for display - showing only designs 1, 4, and 2
  const featuredTshirtDesigns = tshirtDesigns.filter(design => 
    design.id === "design-1" || design.id === "design-4" || design.id === "design-2"
  );
  
  const tshirtProducts = featuredTshirtDesigns.map(design => ({
    id: design.id,
    name: design.name,
    price: design.price,
    image: design.colorVariations[0].images[0],
    category: "T-Shirts",
    colors: design.colorVariations.map(v => v.hexCode),
    isNew: design.id === "design-5" || design.id === "design-7"
  }));
  
  // Convert hoodie designs to product format for display
  const hoodieProducts = hoodieDesigns.map(design => ({
    id: design.id,
    name: design.name,
    price: design.price,
    image: design.colorVariations[0].images[0],
    category: "Hoodies",
    colors: design.colorVariations.map(v => v.hexCode)
  }));

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
          <div className="grid grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* T-Shirts Collection */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              T-Shirt Collection
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore all our t-shirt designs. Premium quality, bold styles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {tshirtProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg">
              <Link to="/tshirts">View All T-Shirts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Hoodies Collection */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Premium Hoodies
            </h2>
            <p className="text-lg text-muted-foreground">
              Ultra-soft heavyweight hoodies with signature Mi Vida branding.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
            {hoodieProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg">
              <Link to="/hoodies">Shop Hoodies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Socks Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Step Up Your Style
            </h2>
            <p className="text-lg text-muted-foreground">
              Premium black and white socks. Comfort meets style in all sizes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
            {sockProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 md:py-24">
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

      <Footer />
    </div>
  );
};

export default Index;
