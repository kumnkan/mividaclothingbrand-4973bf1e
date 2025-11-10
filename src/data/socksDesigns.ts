import socksDesign1 from "@/assets/socks-design-1.jpg";
import socksDesign2 from "@/assets/socks-design-2.jpg";
import socksCategory from "@/assets/socks-category.jpg";

export interface ColorVariation {
  id: string;
  name: string;
  dominantColor: string;
  hexCode: string;
  images: string[];
}

export interface SocksDesign {
  id: string;
  designNumber: number;
  name: string;
  price: number;
  description: string;
  sizes: string[];
  colorVariations: ColorVariation[];
  features: string[];
}

export const socksDesigns: SocksDesign[] = [
  {
    id: "socks-1",
    designNumber: 1,
    name: "MI VIDA Classic Socks",
    price: 89.99,
    description: "Premium MI VIDA branded socks. Comfort meets style with premium materials and the MI VIDA signature design.",
    sizes: ["1-3", "4-6", "7-9", "10-12"],
    colorVariations: [
      {
        id: "socks-1-white",
        name: "White",
        dominantColor: "White",
        hexCode: "#FFFFFF",
        images: [socksDesign1, socksDesign2, socksCategory]
      },
      {
        id: "socks-1-black",
        name: "Black",
        dominantColor: "Black",
        hexCode: "#000000",
        images: [socksCategory, socksDesign1, socksDesign2]
      }
    ],
    features: [
      "Premium cotton blend for all-day comfort",
      "MI VIDA signature branding",
      "Reinforced heel and toe for durability",
      "Perfect fit with elastic support",
      "Available in SA shoe sizes"
    ]
  }
];

export const getSocksDesignById = (id: string) => {
  return socksDesigns.find((design) => design.id === id);
};
