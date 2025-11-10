import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/mi-vida-team.jpg";

const Hero = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="MI VIDA Collection - Premium T-Shirts and Socks"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>
      
      <div className="relative h-full flex items-end pb-16 md:pb-24">
        <div className="container-custom w-full">
          <div className="max-w-2xl text-white animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tighter">
              MI VIDA – Wear Your Style
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Fashion that describes you. Premium quality t-shirts and socks. Proudly South African.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-12">
              <Link to="/tshirts">Shop Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
