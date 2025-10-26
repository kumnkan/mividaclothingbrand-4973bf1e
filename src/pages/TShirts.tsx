import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TShirtGallery from "@/components/TShirtGallery";
import { tshirtDesigns } from "@/data/tshirtDesigns";
import { Helmet } from "react-helmet";

const TShirts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>MiVida T-Shirt Collection | Premium South African T-Shirts</title>
        <meta 
          name="description" 
          content="Explore MiVida's premium t-shirt collection with 8 unique designs and 26 color variations. Unisex sizing XS to XXXL. Shop quality South African fashion." 
        />
      </Helmet>

      <Navigation />

      <div className="container-custom py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            MiVida T-Shirt Collection
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our complete collection featuring 8 unique designs and 26 stunning color variations. 
            Premium quality, unisex sizing, and authentic South African style.
          </p>
        </div>

        <div className="space-y-12">
          {tshirtDesigns.map((design) => (
            <TShirtGallery key={design.id} design={design} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TShirts;
