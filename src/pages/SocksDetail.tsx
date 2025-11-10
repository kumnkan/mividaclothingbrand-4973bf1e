import { useParams, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SocksGallery from "@/components/SocksGallery";
import { getSocksDesignById } from "@/data/socksDesigns";
import { Helmet } from "react-helmet";

const SocksDetail = () => {
  const { id } = useParams();
  const design = getSocksDesignById(id || "");

  if (!design) {
    return <Navigate to="/socks" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{design.name} - MI VIDA Socks</title>
        <meta
          name="description"
          content={`${design.description} Available for R${design.price.toFixed(2)}.`}
        />
      </Helmet>
      
      <Navigation />
      <SocksGallery design={design} />
      <Footer />
    </div>
  );
};

export default SocksDetail;
