import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  colors?: string[];
  isNew?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative overflow-hidden bg-secondary aspect-square mb-4">
        {product.isNew && (
          <Badge className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground font-bold">
            NEW
          </Badge>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="space-y-1">
        <h3 className="font-medium text-sm">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{product.category}</p>
        <p className="font-bold">R{product.price.toFixed(2)}</p>
        {product.colors && product.colors.length > 0 && (
          <div className="flex gap-1 mt-2">
            {product.colors.map((color, index) => (
              <div
                key={`${product.id}-${color}-${index}`}
                className="w-4 h-4 rounded-full border border-border"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
