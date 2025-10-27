import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HoodieGallery from "@/components/HoodieGallery";
import { getHoodieDesignById } from "@/data/hoodieDesigns";
import { Helmet } from "react-helmet";

const HoodieDetail = () => {
  const { id } = useParams();
  const design = getHoodieDesignById(id || "");

  if (!design) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container-custom py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Hoodie Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The hoodie design you're looking for doesn't exist.
          </p>
          <Link to="/hoodies" className="text-primary hover:underline">
            Back to Hoodies
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{design.name} | MiVida Hoodies</title>
        <meta 
          name="description" 
          content={`${design.description} Available in ${design.colorVariations.length} colors. R${design.price}`}
        />
      </Helmet>

      <Navigation />

      <div className="container-custom py-8">
        <Link 
          to="/hoodies" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Hoodies
        </Link>

        <HoodieGallery design={design} />
      </div>

      <Footer />
    </div>
  );
};

export default HoodieDetail;
