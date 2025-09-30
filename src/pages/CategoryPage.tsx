import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/data/products";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const validCategory = category as "men" | "women" | "kids" | "socks";
  const products = getProductsByCategory(validCategory);
  
  const categoryTitles = {
    men: "Men's Collection",
    women: "Women's Collection",
    kids: "Kids' Collection",
    socks: "Socks Collection",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container-custom py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            {categoryTitles[validCategory]}
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover our premium quality products designed for comfort and style.
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
