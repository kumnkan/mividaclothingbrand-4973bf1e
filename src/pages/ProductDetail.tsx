import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getProductById } from "@/data/products";
import { ArrowLeft, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const { toast } = useToast();
  
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container-custom py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast({
        title: "Selection Required",
        description: "Please select a size and color before adding to cart.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container-custom py-12">
        <Button variant="ghost" asChild className="mb-8">
          <Link to={`/${product.type}`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to {product.type === "socks" ? "Socks" : "T-Shirts"}
          </Link>
        </Button>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative aspect-square bg-secondary overflow-hidden">
            {product.isNew && (
              <Badge className="absolute top-6 left-6 z-10 bg-primary text-primary-foreground font-bold text-base px-4 py-2">
                NEW
              </Badge>
            )}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover hover-zoom"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {product.name}
              </h1>
              <p className="text-2xl font-bold">R{product.price.toFixed(2)}</p>
            </div>

            <p className="text-muted-foreground">{product.description}</p>

            {/* Color Selection */}
            <div>
              <label className="block text-sm font-medium mb-3">
                Select Color {selectedColor && <Check className="inline h-4 w-4 text-green-600" />}
              </label>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor === color ? "border-primary scale-110" : "border-border"
                    }`}
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-medium mb-3">
                Select Size {selectedSize && <Check className="inline h-4 w-4 text-green-600" />}
              </label>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 text-sm font-medium border transition-all ${
                      selectedSize === size
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <Button size="lg" className="w-full" onClick={handleAddToCart}>
              Add to Cart
            </Button>

            {/* Shipping Info */}
            <div className="border-t border-border pt-6 space-y-2 text-sm text-muted-foreground">
              <p>✓ Nationwide delivery within 3-5 business days</p>
              <p>✓ Premium quality cotton fabric</p>
              <p>✓ Easy returns within 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
