import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { HoodieDesign } from "@/data/hoodieDesigns";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface HoodieGalleryProps {
  design: HoodieDesign;
}

const HoodieGallery = ({ design }: HoodieGalleryProps) => {
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
        description: "Choose a size before adding to cart",
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

    toast({
      title: "Added to cart!",
      description: `${design.name} - ${selectedColor.name} (${selectedSize})`,
    });

    openCart();
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
      {/* Left Column - Images */}
      <div className="space-y-4">
        {/* Main Carousel */}
        <div className="relative bg-secondary rounded-lg overflow-hidden aspect-square">
          <Carousel className="w-full h-full">
            <CarouselContent>
              {selectedColor.images.map((image, index) => (
                <CarouselItem key={index}>
                  <img
                    src={image}
                    alt={`${design.name} - ${selectedColor.name} - View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Thumbnail Images */}
        <div className="grid grid-cols-4 gap-2">
          {selectedColor.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setMainImageIndex(index)}
              className={`relative bg-secondary rounded-lg overflow-hidden aspect-square border-2 transition-colors ${
                mainImageIndex === index
                  ? "border-primary"
                  : "border-transparent hover:border-muted-foreground/50"
              }`}
            >
              <img
                src={image}
                alt={`${design.name} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Right Column - Product Details */}
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{design.name}</h1>
          <p className="text-2xl font-bold text-primary">
            R{design.price.toFixed(2)}
          </p>
        </div>

        <p className="text-muted-foreground">{design.description}</p>

        {/* Color Selection */}
        <div>
          <h3 className="font-bold mb-3">
            Color: <span className="text-primary">{selectedColor.name}</span>
          </h3>
          <div className="flex gap-2 flex-wrap">
            {design.colorVariations.map((color, index) => (
              <button
                key={color.id}
                onClick={() => {
                  setSelectedColorIndex(index);
                  setMainImageIndex(0);
                }}
                className="group relative"
                title={color.name}
              >
                <div
                  className={`w-10 h-10 rounded-full border-2 transition-all ${
                    selectedColorIndex === index
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
        <div>
          <label className="text-sm font-medium mb-3 block">
            Size: {selectedSize || "Select a size"}
          </label>
          <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
            {design.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`py-3 px-2 rounded-lg border-2 transition-all text-sm font-medium ${
                  selectedSize === size
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-muted-foreground"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button
          size="lg"
          className="w-full"
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>

        {/* Product Features */}
        <div className="border-t border-border pt-6">
          <h3 className="font-medium mb-3">Product Features</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="font-bold text-foreground">✓</span>
              <span>Premium heavyweight fleece material</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-foreground">✓</span>
              <span>Adjustable drawstring hood</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-foreground">✓</span>
              <span>Kangaroo front pocket</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-foreground">✓</span>
              <span>Ribbed cuffs and hem</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-foreground">✓</span>
              <span>Nationwide delivery within 3-5 business days</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HoodieGallery;
