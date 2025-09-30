import mensImage from "@/assets/mens-category.jpg";
import womensImage from "@/assets/womens-category.jpg";
import kidsImage from "@/assets/kids-category.jpg";
import socksImage from "@/assets/socks-category.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  colors: string[];
  sizes: string[];
  description: string;
  gender: "men" | "women" | "kids" | "socks";
}

export const products: Product[] = [
  // Men's Products
  {
    id: "men-crew-black",
    name: "Classic Crew Neck Tee",
    price: 199.99,
    image: mensImage,
    category: "Men's T-Shirts",
    colors: ["#000000", "#FFFFFF", "#808080"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    description: "Premium cotton crew neck t-shirt. Perfect for everyday wear.",
    gender: "men",
  },
  {
    id: "men-vneck-white",
    name: "Essential V-Neck Tee",
    price: 189.99,
    image: mensImage,
    category: "Men's T-Shirts",
    colors: ["#FFFFFF", "#000000", "#1E3A8A"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    description: "Comfortable v-neck design with premium fabric.",
    gender: "men",
  },
  {
    id: "men-oversized-grey",
    name: "Oversized Fit Tee",
    price: 229.99,
    image: mensImage,
    category: "Men's T-Shirts",
    colors: ["#808080", "#000000", "#FFFFFF"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Trendy oversized fit for a relaxed, modern look.",
    gender: "men",
  },
  
  // Women's Products
  {
    id: "women-fitted-white",
    name: "Classic Fitted Tee",
    price: 189.99,
    image: womensImage,
    category: "Women's T-Shirts",
    colors: ["#FFFFFF", "#000000", "#FFC0CB"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Flattering fitted silhouette with premium cotton blend.",
    gender: "women",
  },
  {
    id: "women-slim-black",
    name: "Slim Fit Tee",
    price: 189.99,
    image: womensImage,
    category: "Women's T-Shirts",
    colors: ["#000000", "#FFFFFF", "#800080"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Elegant slim fit perfect for any occasion.",
    gender: "women",
  },
  {
    id: "women-oversized-pink",
    name: "Oversized Comfort Tee",
    price: 219.99,
    image: womensImage,
    category: "Women's T-Shirts",
    colors: ["#FFC0CB", "#FFFFFF", "#F5F5DC"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Relaxed oversized fit for ultimate comfort.",
    gender: "women",
  },
  
  // Kids' Products
  {
    id: "kids-crew-yellow",
    name: "Kids' Classic Tee",
    price: 149.99,
    image: kidsImage,
    category: "Kids' T-Shirts",
    colors: ["#FFFF00", "#0000FF", "#FFC0CB"],
    sizes: ["4Y", "6Y", "8Y", "10Y", "12Y", "14Y"],
    description: "Durable and comfortable for active kids.",
    gender: "kids",
  },
  {
    id: "kids-crew-blue",
    name: "Kids' Everyday Tee",
    price: 149.99,
    image: kidsImage,
    category: "Kids' T-Shirts",
    colors: ["#0000FF", "#00FF00", "#800080"],
    sizes: ["4Y", "6Y", "8Y", "10Y", "12Y", "14Y"],
    description: "Perfect for school and play.",
    gender: "kids",
  },
  
  // Socks
  {
    id: "socks-ankle-black",
    name: "Ankle Socks 3-Pack",
    price: 89.99,
    image: socksImage,
    category: "Socks",
    colors: ["#000000", "#FFFFFF", "#808080"],
    sizes: ["6-8", "9-11", "12-14"],
    description: "Comfortable ankle socks for everyday wear.",
    gender: "socks",
  },
  {
    id: "socks-crew-white",
    name: "Crew Socks 3-Pack",
    price: 99.99,
    image: socksImage,
    category: "Socks",
    colors: ["#FFFFFF", "#000000", "#000080"],
    sizes: ["6-8", "9-11", "12-14"],
    description: "Classic crew length socks.",
    gender: "socks",
  },
  {
    id: "socks-sports-grey",
    name: "Sports Socks 3-Pack",
    price: 109.99,
    image: socksImage,
    category: "Socks",
    colors: ["#808080", "#FF0000", "#00FF00"],
    sizes: ["6-8", "9-11", "12-14"],
    description: "Performance socks for active lifestyles.",
    gender: "socks",
  },
];

export const getProductsByCategory = (gender: "men" | "women" | "kids" | "socks") => {
  return products.filter((product) => product.gender === gender);
};

export const getProductById = (id: string) => {
  return products.find((product) => product.id === id);
};
