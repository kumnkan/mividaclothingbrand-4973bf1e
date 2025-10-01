import { useParams, useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory, getNewArrivals } from "@/data/products";

const CategoryPage = () => {
  const location = useLocation();
  const path = location.pathname.slice(1); // Remove leading slash
  
  let products;
  let title;
  let description;
  
  if (path === "tshirts") {
    products = getProductsByCategory("tshirts");
    title = "T-Shirts Collection";
    description = "Premium quality unisex t-shirts. Available in sizes XS to XXXL.";
  } else if (path === "socks") {
    products = getProductsByCategory("socks");
    title = "Socks Collection";
    description = "Comfortable socks in SA shoe sizes 1-12. Perfect for every day.";
  } else if (path === "new-arrivals") {
    products = getNewArrivals();
    title = "New Arrivals";
    description = "Check out our latest fresh drops. Hot new designs you don't want to miss.";
  } else {
    products = [];
    title = "Collection";
    description = "Discover our premium quality products.";
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container-custom py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
