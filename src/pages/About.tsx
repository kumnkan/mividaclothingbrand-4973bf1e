import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container-custom py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Our Story
          </h1>
          
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Mi Rita began as a student-founded brand with a simple mission: to create quality clothing 
              that fits seamlessly into everyday life.
            </p>
            
            <p>
              What started as a small project has grown into a national lifestyle brand, serving customers 
              across South Africa with premium t-shirts and socks that combine comfort, style, and durability.
            </p>
            
            <p>
              We're proud to be a South African brand, committed to delivering excellence in every product. 
              From our premium cotton fabrics to our attention to detail in every stitch, Mi Rita represents 
              quality you can trust.
            </p>
            
            <div className="bg-secondary p-8 my-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Why Choose Mi Rita?</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-foreground">✓</span>
                  <span>Premium quality fabrics for lasting comfort</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-foreground">✓</span>
                  <span>Nationwide delivery within 3-5 business days</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-foreground">✓</span>
                  <span>Designed and sourced with care in South Africa</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-foreground">✓</span>
                  <span>Sizes for everyone - from kids to adults</span>
                </li>
              </ul>
            </div>
            
            <p>
              Whether you're looking for everyday essentials or want to refresh your wardrobe, Mi Rita 
              has something for everyone. Thank you for supporting our journey and being part of our story.
            </p>
          </div>
          
          <div className="mt-12">
            <Button asChild size="lg">
              <Link to="/">Shop Our Collection</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
