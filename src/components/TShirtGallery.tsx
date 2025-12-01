import { useState } from "react";
import { TShirtDesign } from "@/data/tshirtDesigns";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

interface TShirtGalleryProps {
  design: TShirtDesign;
}

const TShirtGallery = ({ design }: TShirtGalleryProps) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const { addItem, openCart } = useCart();
  const { toast } = useToast();

  const currentColor = design.colorVariations[selectedColorIndex];

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "Choose a size before adding to cart",
        variant: "destructive",
      });
      return;
    }

    addItem({
      id: currentColor.id,
      name: `${design.name} - ${currentColor.name}`,
      price: design.price,
      image: currentColor.images[0],
      color: currentColor.name,
      size: selectedSize,
      quantity: 1,
    });

    openCart();
    
    toast({
      title: "Added to cart!",
      description: `${design.name} in ${currentColor.name}, size ${selectedSize}`,
    });

    setSelectedSize("");
  };

  return (
    <div className="bg-card rounded-lg p-6 mb-8 border border-border">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div>
          {/* Main Image Carousel */}
          <Carousel className="w-full">
            <CarouselContent>
              {currentColor.images.map((image, idx) => (
                <CarouselItem key={idx}>
                  <div className="aspect-square bg-secondary rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`${design.name} - ${currentColor.name} - View ${idx + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Product Details */}
        <div>
          <h2 className="text-3xl font-bold mb-2">{design.name}</h2>
          <p className="text-2xl font-bold text-primary mb-4">R{design.price.toFixed(2)}</p>
          <p className="text-muted-foreground mb-6">{design.description}</p>

          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="font-bold mb-3">
              Color: <span className="text-primary">{currentColor.name}</span>
            </h3>
            <div className="flex gap-2 flex-wrap">
              {design.colorVariations.map((color, idx) => (
                <button
                  key={color.id}
                  onClick={() => setSelectedColorIndex(idx)}
                  className={`group relative`}
                  title={color.name}
                >
                  <div
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColorIndex === idx
                        ? "border-primary scale-110"
                        : "border-border hover:border-primary/50"
                    }`}
                    style={{ backgroundColor: color.hexCode }}
                  />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {color.name}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="font-bold mb-3">Select Size</h3>
            <div className="flex gap-2 flex-wrap">
              {design.sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "default" : "outline"}
                  onClick={() => setSelectedSize(size)}
                  className="min-w-[60px]"
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <Button
            onClick={handleAddToCart}
            size="lg"
            className="w-full mb-4"
          >
            Add to Cart
          </Button>

          {/* Product Info */}
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <span className="font-bold">✓</span>
              <span className="text-muted-foreground">Premium cotton blend</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold">✓</span>
              <span className="text-muted-foreground">Unisex sizing XS to XXXL</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold">✓</span>
              <span className="text-muted-foreground">Free shipping on orders over R500</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TShirtGallery;
