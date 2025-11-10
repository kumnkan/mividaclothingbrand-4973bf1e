import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { socksDesigns } from "@/data/socksDesigns";
import { Helmet } from "react-helmet";

const Socks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>MI VIDA Socks - Premium Quality Socks</title>
        <meta
          name="description"
          content="Shop MI VIDA premium socks collection. Comfort meets style with quality materials and signature designs."
        />
      </Helmet>

      <Navigation />

      <div className="container-custom py-12">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Socks Collection
          </h1>
          <p className="text-lg text-muted-foreground">
            Premium MI VIDA socks. Comfort meets style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socksDesigns.map((design) => (
            <Link
              key={design.id}
              to={`/socks/${design.id}`}
              className="group block"
            >
              <div className="relative overflow-hidden bg-secondary aspect-square mb-4">
                <img
                  src={design.colorVariations[0].images[0]}
                  alt={design.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-2">
                <Badge variant="secondary">Socks</Badge>
                <h3 className="font-bold text-lg">{design.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {design.description}
                </p>
                <p className="font-bold text-xl">R{design.price.toFixed(2)}</p>
                <div className="flex gap-1 mt-2">
                  {design.colorVariations.map((color) => (
                    <div
                      key={color.id}
                      className="w-5 h-5 rounded-full border border-border"
                      style={{ backgroundColor: color.hexCode }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Socks;
