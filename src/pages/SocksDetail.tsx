import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SocksGallery from "@/components/SocksGallery";
import { getSocksDesignById } from "@/data/socksDesigns";
import { Helmet } from "react-helmet";

const SocksDetail = () => {
  const { id } = useParams();
  const design = getSocksDesignById(id || "");

  if (!design) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container-custom py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Socks Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The socks design you're looking for doesn't exist.
          </p>
          <Link to="/socks" className="text-primary hover:underline">
            Back to Socks
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{design.name} | MI VIDA Socks</title>
        <meta
          name="description"
          content={`${design.description} Available in ${design.colorVariations.length} colors. R${design.price}`}
        />
      </Helmet>

      <Navigation />

      <div className="container-custom py-8">
        <Link 
          to="/socks" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Socks
        </Link>

        <SocksGallery design={design} />
      </div>

      <Footer />
    </div>
  );
};

export default SocksDetail;
