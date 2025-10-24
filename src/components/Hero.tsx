import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import heroImage from "@/assets/mi-vida-team.jpg";
import logo from "@/assets/mi-vida-logo.png";

const Hero = () => {
  const [logoOpacity, setLogoOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const fadeStart = 0;
      const fadeEnd = 400;
      
      if (scrollPosition <= fadeStart) {
        setLogoOpacity(1);
      } else if (scrollPosition >= fadeEnd) {
        setLogoOpacity(0);
      } else {
        const opacity = 1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
        setLogoOpacity(opacity);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      
      {/* Centered Logo */}
      <div 
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
        style={{ opacity: logoOpacity }}
      >
        <img 
          src={logo} 
          alt="MI VIDA" 
          className="w-48 h-48 md:w-64 md:h-64 animate-fade-in"
        />
      </div>
      
      <div className="relative h-full flex items-end pb-16 md:pb-24">
        <div className="container-custom w-full">
          <div className="max-w-2xl text-white animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tighter">
              MI VIDA – Wear Your Style
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Premium quality t-shirts and socks. Made for everyday life. Proudly South African.
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
