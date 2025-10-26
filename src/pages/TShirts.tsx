import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { tshirtDesigns } from "@/data/tshirtDesigns";
import { Helmet } from "react-helmet";

const TShirts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>MiVida T-Shirts | Premium South African Streetwear</title>
        <meta 
          name="description" 
          content="Browse MiVida's premium t-shirt collection. 8 unique designs, 26 color variations. Streetwear that speaks life — your life." 
        />
      </Helmet>

      <Navigation />

      <div className="container-custom py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            MiVida T-Shirts
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Streetwear that speaks life — your life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tshirtDesigns.map((design) => {
            const defaultVariation = design.colorVariations[0];
            const defaultImage = defaultVariation.images[0];
            
            return (
              <Link 
                key={design.id} 
                to={`/tshirt/${design.id}`}
                className="group block"
              >
                <div className="relative overflow-hidden bg-secondary aspect-square mb-4 rounded-lg">
                  <img
                    src={defaultImage}
                    alt={`${design.name} - ${defaultVariation.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium text-sm line-clamp-2">{design.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {design.colorVariations.length} {design.colorVariations.length === 1 ? 'color' : 'colors'}
                  </p>
                  <p className="font-bold">R{design.price.toFixed(2)}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TShirts;
