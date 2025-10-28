import hoodieBlackWhite1 from "@/assets/hoodie-black-white-1.jpg";
import hoodieBlackWhite2 from "@/assets/hoodie-black-white-2.jpg";

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
        id: "hoodie-1-black-white",
        name: "Black & White",
        dominantColor: "Black",
        secondaryColor: "White",
        hexCode: "#000000",
        images: [hoodieBlackWhite1, hoodieBlackWhite2]
      }
    ]
  }
];

export const getHoodieDesignById = (id: string) => {
  return hoodieDesigns.find((design) => design.id === id);
};
