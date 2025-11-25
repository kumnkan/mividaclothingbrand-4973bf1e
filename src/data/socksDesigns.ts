import socksWhite1 from "@/assets/socks-white-1.jpg";
import socksWhite2 from "@/assets/socks-white-2.jpg";
import socksWhite3 from "@/assets/socks-white-3.jpg";
import socksWhite4 from "@/assets/socks-white-4.jpg";

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
    description: "Premium MI VIDA branded socks. Comfort meets style with premium materials and the MI VIDA signature design. Accommodative sizing for the perfect fit.",
    sizes: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    colorVariations: [
      {
        id: "socks-1-white",
        name: "White",
        dominantColor: "White",
        hexCode: "#FFFFFF",
        images: [socksWhite1, socksWhite2, socksWhite3, socksWhite4]
      },
      {
        id: "socks-1-black",
        name: "Black",
        dominantColor: "Black",
        hexCode: "#000000",
        images: [socksWhite1, socksWhite2, socksWhite3, socksWhite4]
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
