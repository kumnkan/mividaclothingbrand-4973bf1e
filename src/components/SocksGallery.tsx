import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SocksDesign } from "@/data/socksDesigns";

interface SocksGalleryProps {
  design: SocksDesign;
}

const SocksGallery = ({ design }: SocksGalleryProps) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const { addItem, openCart } = useCart();
  const { toast } = useToast();

  const selectedColor = design.colorVariations[selectedColorIndex];

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "Choose your shoe size before adding to cart",
        variant: "destructive",
      });
      return;
    }

    addItem({
      id: `${design.id}-${selectedColor.id}-${selectedSize}`,
      name: design.name,
      price: design.price,
      image: selectedColor.images[0],
      color: selectedColor.name,
      size: selectedSize,
      quantity: 1,
    });

    openCart();
    
    toast({
      title: "Added to cart!",
      description: `${design.name} - ${selectedColor.name} (Size ${selectedSize})`,
    });
  };

  return (
    <div className="container-custom py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column - Images */}
        <div className="space-y-4">
          {/* Main Image Carousel */}
          <div className="relative overflow-hidden bg-secondary aspect-square">
            <img
              src={selectedColor.images[mainImageIndex]}
              alt={`${design.name} - ${selectedColor.name}`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="grid grid-cols-4 gap-2">
            {selectedColor.images.map((image, idx) => (
              <button
                key={idx}
                onClick={() => setMainImageIndex(idx)}
                className={`relative overflow-hidden bg-secondary aspect-square border-2 transition-colors ${
                  mainImageIndex === idx
                    ? "border-primary"
                    : "border-transparent hover:border-border"
                }`}
              >
                <img
                  src={image}
                  alt={`View ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div className="space-y-6">
          <div>
            <Badge className="mb-2">Socks Collection</Badge>
            <h1 className="text-4xl font-bold mb-2">{design.name}</h1>
            <p className="text-3xl font-bold">R{design.price.toFixed(2)}</p>
          </div>

          <p className="text-lg text-muted-foreground">{design.description}</p>

          {/* Color Selection */}
          <div>
            <h3 className="font-semibold mb-3">
              Color: {selectedColor.name}
            </h3>
            <div className="flex gap-2">
              {design.colorVariations.map((color, idx) => (
                <button
                  key={color.id}
                  onClick={() => {
                    setSelectedColorIndex(idx);
                    setMainImageIndex(0);
                  }}
                  className={`w-12 h-12 rounded-full border-2 transition-all ${
                    selectedColorIndex === idx
                      ? "border-primary scale-110"
                      : "border-border hover:scale-105"
                  }`}
                  style={{ backgroundColor: color.hexCode }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="font-semibold mb-3">Size (SA Shoe Size)</h3>
            <div className="grid grid-cols-4 gap-2">
              {design.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 px-4 border-2 font-semibold transition-colors ${
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

          {/* Features */}
          {design.features && design.features.length > 0 && (
            <div className="bg-secondary p-6">
              <h3 className="font-semibold mb-3">Features</h3>
              <ul className="space-y-2">
                {design.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-bold">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Button
            size="lg"
            className="w-full"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SocksGallery;
