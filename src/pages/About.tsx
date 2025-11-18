import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import teamPackaging from "@/assets/team-packaging.jpg";
import teamPackagingBags from "@/assets/team-packaging-bags.jpg";
import teamBoxes from "@/assets/team-boxes.jpg";
import teamEventPromo from "@/assets/team-event-promo.jpg";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamRadio from "@/assets/team-radio.jpg";
import teamRadio2 from "@/assets/team-radio-2.jpg";
import teamMarket from "@/assets/team-market.jpg";
import teamSponsors from "@/assets/team-sponsors.jpg";
import teamCustomers from "@/assets/team-customers.jpg";
import teamNightEvent from "@/assets/team-night-event.jpg";
import teamGroupPhoto from "@/assets/team-group-photo.jpg";
import teamSneakersDisplay from "@/assets/team-sneakers-display.jpg";
import teamCertificate from "@/assets/team-certificate.jpg";
import teamPackagedProducts from "@/assets/team-packaged-products.jpg";
import teamEventCustomers from "@/assets/team-event-customers.jpg";
import teamMembersBags from "@/assets/team-members-bags.jpg";
import teamWhiteRedCarpet2 from "@/assets/design9-white-red-carpet-2.jpg";
import teamWhiteBackCar from "@/assets/design9-white-back-car.jpg";
import teamWhiteBackCar2 from "@/assets/design9-white-back-car-2.jpg";
import teamGroupBanner from "@/assets/team-group-banner.jpg";

const About = () => {
  const journeyImages = [
    { src: teamPackaging, alt: "MI VIDA packaging and products" },
    { src: teamPackagingBags, alt: "MI VIDA premium packaging bags" },
    { src: teamBoxes, alt: "MI VIDA branded boxes" },
    { src: teamEventPromo, alt: "MI VIDA event promotion" },
    { src: teamMember1, alt: "MI VIDA team member at event" },
    { src: teamRadio, alt: "MI VIDA team at radio station" },
    { src: teamRadio2, alt: "MI VIDA team promoting products" },
    { src: teamMarket, alt: "MI VIDA at market event" },
    { src: teamSponsors, alt: "MI VIDA sponsorships" },
    { src: teamCustomers, alt: "Happy MI VIDA customers" },
    { src: teamNightEvent, alt: "MI VIDA night event" },
    { src: teamWhiteRedCarpet2, alt: "MI VIDA team member on red carpet" },
    { src: teamGroupPhoto, alt: "MI VIDA team photo" },
    { src: teamSneakersDisplay, alt: "MI VIDA sneakers display" },
    { src: teamCertificate, alt: "MI VIDA certificate of appreciation for Miss Summer East London" },
    { src: teamPackagedProducts, alt: "MI VIDA packaged products" },
    { src: teamEventCustomers, alt: "MI VIDA team with happy customers" },
    { src: teamMembersBags, alt: "MI VIDA team members with branded bags" },
    { src: teamWhiteBackCar, alt: "MI VIDA clothing back design by car" },
    { src: teamWhiteBackCar2, alt: "MI VIDA clothing styled by car" },
    { src: teamGroupBanner, alt: "MI VIDA team members holding branded banner" },
  ];

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
              In a world where most brands focus on specific demographics, we noticed something missing — the voice, 
              style, and confidence of the youth. MI VIDA was built to fill that gap. Our mission is to represent the 
              energy, hustle, and dreams of the new generation — the young men and women, boys and girls who are 
              shaping their own paths and building their own lives.
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

          {/* Team Gallery */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Our Journey</h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {journeyImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-64 object-cover rounded-lg" 
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
