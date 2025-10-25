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
              MI VIDA is more than just a brand. It's a movement born in the heart of South Africa, Eastern Cape, 
              Mdantsane by a group of ambitious young entrepreneurs who saw a problem and decided to create a solution.
            </p>
            
            <p>
              In a world where most brands focus on women and adults, we noticed something missing — the voice, style, 
              and confidence of the youth. MI VIDA was built to fill that gap. Our mission is to represent the energy, 
              hustle, and dreams of the new generation — the kids and young men who are shaping their own paths and 
              building their own lives.
            </p>
            
            <p>
              The name MI VIDA means "My Life," because that's exactly what we stand for — owning your story, your style, 
              and your future. Every piece, every design, and every idea we create comes from real experiences, real 
              struggles, and real ambition.
            </p>
            
            <div className="bg-secondary p-8 my-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Why Choose MI VIDA?</h2>
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
            
            <p className="font-semibold text-foreground text-xl">
              MI VIDA is not just a brand — it's a statement.<br />
              It's your life, your way.
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
