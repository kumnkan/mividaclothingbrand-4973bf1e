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
  // New T-Shirt Designs
  {
    id: "design-5",
    name: "Mi Vida Classic Duo",
    price: 249.99,
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
    name: "Mi Vida Noir Collection",
    price: 249.99,
    image: design7BlackWhite1,
    category: "T-Shirts",
    colors: ["#000000", "#FFFFFF"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    description: "Sophisticated black design with white accents. Elegance in simplicity.",
    type: "tshirts",
    isNew: true,
  },
  {
    id: "tshirt-new-1",
    name: "Mi Rita Signature Black Tee",
    price: 249.99,
    image: mensImage,
    category: "T-Shirts",
    colors: ["#000000", "#FFFFFF", "#808080"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    description: "Our newest signature design. Premium cotton with bold Mi Rita branding.",
    type: "tshirts",
    isNew: true,
  },
  {
    id: "tshirt-new-2",
    name: "Mi Rita Essential White Tee",
    price: 249.99,
    image: womensImage,
    category: "T-Shirts",
    colors: ["#FFFFFF", "#000000", "#808080", "#1E3A8A"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    description: "Fresh drop! Clean design with exceptional comfort.",
    type: "tshirts",
    isNew: true,
  },
  
  // Classic T-Shirt Collection
  {
    id: "tshirt-classic-1",
    name: "Classic Crew Neck Tee",
    price: 199.99,
    image: mensImage,
    category: "T-Shirts",
    colors: ["#000000", "#FFFFFF", "#808080", "#8B4513", "#556B2F"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    description: "Our original. Premium cotton crew neck t-shirt. Perfect for everyday wear.",
    type: "tshirts",
  },
  {
    id: "tshirt-classic-2",
    name: "Essential V-Neck Tee",
    price: 189.99,
    image: womensImage,
    category: "T-Shirts",
    colors: ["#FFFFFF", "#000000", "#1E3A8A", "#DC143C", "#228B22"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    description: "Comfortable v-neck design with premium fabric. Part of the originals collection.",
    type: "tshirts",
  },
  
  // Socks Collection
  {
    id: "socks-ankle-black",
    name: "Ankle Socks 3-Pack",
    price: 89.99,
    image: socksImage,
    category: "Socks",
    colors: ["#000000", "#FFFFFF", "#808080"],
    sizes: ["1-3", "4-6", "7-9", "10-12"],
    description: "Comfortable ankle socks for everyday wear. Available in SA shoe sizes.",
    type: "socks",
  },
  {
    id: "socks-crew-white",
    name: "Crew Socks 3-Pack",
    price: 99.99,
    image: socksImage,
    category: "Socks",
    colors: ["#FFFFFF", "#000000", "#000080"],
    sizes: ["1-3", "4-6", "7-9", "10-12"],
    description: "Classic crew length socks. Available in SA shoe sizes.",
    type: "socks",
  },
  {
    id: "socks-sports-grey",
    name: "Sports Socks 3-Pack",
    price: 109.99,
    image: socksImage,
    category: "Socks",
    colors: ["#808080", "#FF0000", "#00FF00"],
    sizes: ["1-3", "4-6", "7-9", "10-12"],
    description: "Performance socks for active lifestyles. Available in SA shoe sizes.",
    type: "socks",
  },
  {
    id: "socks-navy-pattern",
    name: "Pattern Socks 3-Pack",
    price: 99.99,
    image: socksImage,
    category: "Socks",
    colors: ["#000080", "#808080", "#000000"],
    sizes: ["1-3", "4-6", "7-9", "10-12"],
    description: "Stylish patterned socks. Available in SA shoe sizes.",
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
