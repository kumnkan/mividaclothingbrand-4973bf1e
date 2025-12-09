import mensImage from "@/assets/mens-category.jpg";
import womensImage from "@/assets/womens-category.jpg";
import kidsImage from "@/assets/kids-category.jpg";
import socksImage from "@/assets/socks-category.jpg";
import design5WhiteBlack1 from "@/assets/design5-white-black-1.jpg";
import design7BlackWhite1 from "@/assets/design7-black-white-1.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  colors: string[];
  sizes: string[];
  description: string;
  type: "tshirts" | "socks";
  isNew?: boolean;
}

export const products: Product[] = [
  // New T-Shirt Designs (Only 2 New Arrivals)
  {
    id: "design-5",
    name: "MI VIDA Wave Rider",
    price: 349.99,
    image: design5WhiteBlack1,
    category: "T-Shirts",
    colors: ["#FFFFFF", "#000000"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    description: "Timeless black and white combination. A wardrobe essential.",
    type: "tshirts",
    isNew: true,
  },
  {
    id: "design-7",
    name: "MI VIDA Beach Side",
    price: 349.99,
    image: design7BlackWhite1,
    category: "T-Shirts",
    colors: ["#000000", "#FFFFFF"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    description: "Sophisticated black design with white accents. Elegance in simplicity.",
    type: "tshirts",
    isNew: true,
  },
  
  // Socks Collection (Only 1 Design - Black & White)
  {
    id: "socks-black-white",
    name: "MI VIDA Classic Socks",
    price: 89.99,
    image: socksImage,
    category: "Socks",
    colors: ["#000000", "#FFFFFF"],
    sizes: ["1-3", "4-6", "7-9", "10-12"],
    description: "Premium black and white socks. Comfort meets style. Available in SA shoe sizes.",
    type: "socks",
  },
];

export const getProductsByCategory = (type: "tshirts" | "socks") => {
  return products.filter((product) => product.type === type);
};

export const getNewArrivals = () => {
  return products.filter((product) => product.isNew === true);
};

export const getClassicCollection = () => {
  return products.filter((product) => product.type === "tshirts" && !product.isNew);
};

export const getProductById = (id: string) => {
  return products.find((product) => product.id === id);
};
