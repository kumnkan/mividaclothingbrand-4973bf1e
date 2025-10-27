import mensImage from "@/assets/mens-category.jpg";
import womensImage from "@/assets/womens-category.jpg";

export interface ColorVariation {
  id: string;
  name: string;
  dominantColor: string;
  secondaryColor: string;
  hexCode: string;
  images: string[];
}

export interface HoodieDesign {
  id: string;
  designNumber: number;
  name: string;
  price: number;
  description: string;
  sizes: string[];
  colorVariations: ColorVariation[];
}

export const hoodieDesigns: HoodieDesign[] = [
  {
    id: "hoodie-design-1",
    designNumber: 1,
    name: "Mi Vida Classic Hoodie",
    price: 449.99,
    description: "Premium heavyweight hoodie with signature Mi Vida branding. Ultra-soft fleece interior for maximum comfort.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    colorVariations: [
      {
        id: "hoodie-1-black",
        name: "Black",
        dominantColor: "Black",
        secondaryColor: "White",
        hexCode: "#000000",
        images: [mensImage, womensImage, mensImage, womensImage]
      },
      {
        id: "hoodie-1-white",
        name: "White",
        dominantColor: "White",
        secondaryColor: "Black",
        hexCode: "#FFFFFF",
        images: [mensImage, womensImage, mensImage, womensImage]
      },
      {
        id: "hoodie-1-grey",
        name: "Grey",
        dominantColor: "Grey",
        secondaryColor: "Black",
        hexCode: "#808080",
        images: [mensImage, womensImage, mensImage, womensImage]
      }
    ]
  },
  {
    id: "hoodie-design-2",
    designNumber: 2,
    name: "Mi Vida Oversized Hoodie",
    price: 499.99,
    description: "Trendy oversized fit with dropped shoulders. Perfect for layering and street style.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    colorVariations: [
      {
        id: "hoodie-2-black",
        name: "Black",
        dominantColor: "Black",
        secondaryColor: "White",
        hexCode: "#000000",
        images: [mensImage, womensImage, mensImage, womensImage]
      },
      {
        id: "hoodie-2-navy",
        name: "Navy Blue",
        dominantColor: "Navy",
        secondaryColor: "White",
        hexCode: "#000080",
        images: [mensImage, womensImage, mensImage, womensImage]
      }
    ]
  },
  {
    id: "hoodie-design-3",
    designNumber: 3,
    name: "Mi Vida Zip-Up Hoodie",
    price: 479.99,
    description: "Versatile zip-up design with front pockets. Easy to layer, perfect for any season.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    colorVariations: [
      {
        id: "hoodie-3-black",
        name: "Black",
        dominantColor: "Black",
        secondaryColor: "White",
        hexCode: "#000000",
        images: [mensImage, womensImage, mensImage, womensImage]
      },
      {
        id: "hoodie-3-grey",
        name: "Grey",
        dominantColor: "Grey",
        secondaryColor: "Black",
        hexCode: "#808080",
        images: [mensImage, womensImage, mensImage, womensImage]
      }
    ]
  }
];

export const getHoodieDesignById = (id: string) => {
  return hoodieDesigns.find((design) => design.id === id);
};
