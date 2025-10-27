import mensImage from "@/assets/mens-category.jpg";
import womensImage from "@/assets/womens-category.jpg";
import design1WhiteBlue1 from "@/assets/design1-white-blue-1.jpg";
import design1WhiteBlue2 from "@/assets/design1-white-blue-2.jpg";
import design1WhiteBlue3 from "@/assets/design1-white-blue-3.jpg";
import design1WhiteBlue4 from "@/assets/design1-white-blue-4.jpg";
import design1WhiteBlue5 from "@/assets/design1-white-blue-5.jpg";
import design1BlackWhite1 from "@/assets/design1-black-white-1.jpg";
import design1BlackWhite2 from "@/assets/design1-black-white-2.jpg";
import design1BlackWhite3 from "@/assets/design1-black-white-3.jpg";
import design1BlackWhite4 from "@/assets/design1-black-white-4.jpg";

export interface ColorVariation {
  id: string;
  name: string;
  dominantColor: string;
  secondaryColor: string;
  hexCode: string;
  images: string[];
}

export interface TShirtDesign {
  id: string;
  designNumber: number;
  name: string;
  price: number;
  description: string;
  sizes: string[];
  colorVariations: ColorVariation[];
}

export const tshirtDesigns: TShirtDesign[] = [
  {
    id: "design-1",
    designNumber: 1,
    name: "Mi Vida Signature Collection",
    price: 249.99,
    description: "Our signature design with multiple stunning color combinations. Premium cotton blend for ultimate comfort.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    colorVariations: [
      {
        id: "design-1-white-blue",
        name: "White & Blue",
        dominantColor: "White",
        secondaryColor: "Blue",
        hexCode: "#1E3A8A",
        images: [design1WhiteBlue1, design1WhiteBlue2, design1WhiteBlue3, design1WhiteBlue4, design1WhiteBlue5]
      },
      {
        id: "design-1-black-white",
        name: "Black & White",
        dominantColor: "Black",
        secondaryColor: "White",
        hexCode: "#000000",
        images: [design1BlackWhite1, design1BlackWhite2, design1BlackWhite3, design1BlackWhite4]
      },
      {
        id: "design-1-peach-brown",
        name: "Peach Milky Coffee & Brown",
        dominantColor: "Peach Milky Coffee",
        secondaryColor: "Brown",
        hexCode: "#D2B48C",
        images: [mensImage, womensImage, mensImage, womensImage]
      },
      {
        id: "design-1-white-black",
        name: "White & Black",
        dominantColor: "White",
        secondaryColor: "Black",
        hexCode: "#FFFFFF",
        images: [mensImage, womensImage, mensImage, womensImage]
      }
    ]
  },
  {
    id: "design-2",
    designNumber: 2,
    name: "Mi Vida Fresh Styles",
    price: 249.99,
    description: "Fresh and vibrant designs perfect for any occasion. Soft, breathable fabric.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    colorVariations: [
      {
        id: "design-2-white-skyblue",
        name: "White & Sky Blue",
        dominantColor: "White",
        secondaryColor: "Sky Blue",
        hexCode: "#87CEEB",
        images: [mensImage, womensImage, mensImage, womensImage]
      },
      {
        id: "design-2-white-red",
        name: "White & Red",
        dominantColor: "White",
        secondaryColor: "Red",
        hexCode: "#DC143C",
        images: [mensImage, womensImage, mensImage, womensImage]
      }
    ]
  },
  {
    id: "design-3",
    designNumber: 3,
    name: "Mi Vida Graphic Series",
    price: 249.99,
    description: "Bold graphic designs that make a statement. High-quality print that lasts.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    colorVariations: [
      {
        id: "design-3-graphic-black-white",
        name: "Graphic Black & White",
        dominantColor: "Black",
        secondaryColor: "White",
        hexCode: "#000000",
        images: [mensImage, womensImage, mensImage, womensImage]
      },
      {
        id: "design-3-graphic-white-pink",
        name: "Graphic White & Pink",
        dominantColor: "White",
        secondaryColor: "Pink",
        hexCode: "#FFC0CB",
        images: [mensImage, womensImage, mensImage, womensImage]
      }
    ]
  },
  {
    id: "design-4",
    designNumber: 4,
    name: "Mi Vida Ultimate Collection",
    price: 249.99,
    description: "Our most versatile design with an extensive color palette. Find your perfect match.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    colorVariations: [
      {
        id: "design-4-milky-grey",
        name: "Milky Coffee & Grey",
        dominantColor: "Milky Coffee",
        secondaryColor: "Grey",
        hexCode: "#D2B48C",
        images: [mensImage, womensImage, mensImage, womensImage]
      },
      {
        id: "design-4-black-grey",
        name: "Black & Grey",
        dominantColor: "Black",
        secondaryColor: "Grey",
        hexCode: "#000000",
        images: [mensImage, womensImage, mensImage, womensImage]
      },
      {
        id: "design-4-milky-brown",
        name: "Milky Coffee & Brown",
        dominantColor: "Milky Coffee",
        secondaryColor: "Brown",
        hexCode: "#D2B48C",
        images: [mensImage, womensImage, mensImage, womensImage]
      },
      {
        id: "design-4-black-white",
        name: "Black & White",
        dominantColor: "Black",
        secondaryColor: "White",
        hexCode: "#000000",
        images: [mensImage, womensImage, mensImage, womensImage]
      },
      {
        id: "design-4-white-black",
        name: "White & Black",
        dominantColor: "White",
        secondaryColor: "Black",
        hexCode: "#FFFFFF",
        images: [mensImage, womensImage, mensImage, womensImage]
      },
      {
        id: "design-4-white-orange",
        name: "White & Orange",
        dominantColor: "White",
        secondaryColor: "Orange",
        hexCode: "#FF8C00",
        images: [mensImage, womensImage, mensImage, womensImage]
      },
      {
        id: "design-4-skyblue-white",
        name: "Sky Blue & White",
        dominantColor: "Sky Blue",
        secondaryColor: "White",
        hexCode: "#87CEEB",
        images: [mensImage, womensImage, mensImage, womensImage]
      },
      {
        id: "design-4-milky-black",
        name: "Milky Coffee & Black",
        dominantColor: "Milky Coffee",
        secondaryColor: "Black",
        hexCode: "#D2B48C",
        images: [mensImage, womensImage, mensImage, womensImage]
      },
      {
        id: "design-4-brown-milky",
        name: "Brown & Milky Coffee",
        dominantColor: "Brown",
        secondaryColor: "Milky Coffee",
        hexCode: "#8B4513",
        images: [mensImage, womensImage, mensImage, womensImage]
      }
    ]
  },
  {
    id: "design-5",
    designNumber: 5,
    name: "Mi Vida Classic Duo",
    price: 249.99,
    description: "Timeless black and white combination. A wardrobe essential.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    colorVariations: [
      {
        id: "design-5-white-black",
        name: "White & Black",
        dominantColor: "White",
        secondaryColor: "Black",
        hexCode: "#FFFFFF",
        images: [mensImage, womensImage, mensImage, womensImage]
      }
    ]
  },
  {
    id: "design-6",
    designNumber: 6,
    name: "Mi Vida Contrast Edition",
    price: 249.99,
    description: "Bold contrast design for those who stand out. Premium quality guaranteed.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    colorVariations: [
      {
        id: "design-6-white-black",
        name: "White & Black",
        dominantColor: "White",
        secondaryColor: "Black",
        hexCode: "#FFFFFF",
        images: [mensImage, womensImage, mensImage, womensImage]
      }
    ]
  },
  {
    id: "design-7",
    designNumber: 7,
    name: "Mi Vida Noir Collection",
    price: 249.99,
    description: "Sophisticated black design with white accents. Elegance in simplicity.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    colorVariations: [
      {
        id: "design-7-black-white",
        name: "Black & White",
        dominantColor: "Black",
        secondaryColor: "White",
        hexCode: "#000000",
        images: [mensImage, womensImage, mensImage, womensImage]
      }
    ]
  },
  {
    id: "design-8",
    designNumber: 8,
    name: "Mi Vida Artistic Line",
    price: 249.99,
    description: "Unique graphic design with artistic flair. Express your style.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    colorVariations: [
      {
        id: "design-8-graphic-milky-black",
        name: "Graphic Milky Coffee & Black",
        dominantColor: "Milky Coffee",
        secondaryColor: "Black",
        hexCode: "#D2B48C",
        images: [mensImage, womensImage, mensImage, womensImage]
      }
    ]
  }
];

export const getTShirtDesignById = (id: string) => {
  return tshirtDesigns.find((design) => design.id === id);
};
