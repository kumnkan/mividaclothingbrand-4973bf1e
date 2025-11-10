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
import design1BlackWhite5 from "@/assets/design1-black-white-5.jpg";
import design1BlackWhite6 from "@/assets/design1-black-white-6.jpg";
import design1BlackWhite7 from "@/assets/design1-black-white-7.jpg";
import design1BlackWhite8 from "@/assets/design1-black-white-8.jpg";
import design2WhiteBlue1 from "@/assets/design2-white-blue-1.jpg";
import design2WhiteBlue2 from "@/assets/design2-white-blue-2.jpg";
import design2WhiteRed1 from "@/assets/design2-white-red-1.jpg";
import design2WhiteRed2 from "@/assets/design2-white-red-2.jpg";
import design2WhiteRed3 from "@/assets/design2-white-red-3.jpg";
import design3BlackPink1 from "@/assets/design3-black-pink-1.jpg";
import design3BlackPink2 from "@/assets/design3-black-pink-2.jpg";
import design5WhiteBlack1 from "@/assets/design5-white-black-1.jpg";
import design5WhiteBlack2 from "@/assets/design5-white-black-2.jpg";
import design5WhiteBlack3 from "@/assets/design5-white-black-3.jpg";
import design6WhiteBlack1 from "@/assets/design6-white-black-1.jpg";
import design6WhiteBlack2 from "@/assets/design6-white-black-2.jpg";
import design7BlackWhite1 from "@/assets/design7-black-white-1.jpg";
import design7BlackWhite2 from "@/assets/design7-black-white-2.jpg";
import design8MilkyBlack1 from "@/assets/design8-milky-black-1.jpg";
import design8MilkyBlack2 from "@/assets/design8-milky-black-2.jpg";
import design4MilkyGrey1 from "@/assets/design4-milky-grey-1.jpg";
import design4WhiteOrange1 from "@/assets/design4-white-orange-1.jpg";
import design4WhiteOrange2 from "@/assets/design4-white-orange-2.jpg";
import design4WhiteOrange3 from "@/assets/design4-white-orange-3.jpg";
import design4BlackWhite1 from "@/assets/design4-black-white-1.jpg";
import design4BlackWhite2 from "@/assets/design4-black-white-2.jpg";
import design4BlackWhite3 from "@/assets/design4-black-white-3.jpg";
import design4BlackWhite4 from "@/assets/design4-black-white-4.jpg";
import design4WhiteBlack1 from "@/assets/design4-white-black-1.jpg";
import design4WhiteBlack2 from "@/assets/design4-white-black-2.jpg";
import design4WhiteBlack3 from "@/assets/design4-white-black-3.jpg";
import design4BrownMilky1 from "@/assets/design4-brown-milky-1.jpg";
import design4BrownMilky2 from "@/assets/design4-brown-milky-2.jpg";
import design4BrownMilky3 from "@/assets/design4-brown-milky-3.jpg";
import design4MilkyBlack1 from "@/assets/design4-milky-black-1.jpg";
import design4MilkyBlack2 from "@/assets/design4-milky-black-2.jpg";
import design4MilkyBlack3 from "@/assets/design4-milky-black-3.jpg";

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
    name: "Mzansi Wave",
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
        images: [design1BlackWhite5, design1BlackWhite6, design1BlackWhite7, design1BlackWhite8]
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
        images: [design1BlackWhite1, design1BlackWhite2, design1BlackWhite3, design1BlackWhite4]
      }
    ]
  },
  {
    id: "design-2",
    designNumber: 2,
    name: "Jozi Fresh",
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
        images: [design2WhiteBlue1, design2WhiteBlue2]
      },
      {
        id: "design-2-white-red",
        name: "White & Red",
        dominantColor: "White",
        secondaryColor: "Red",
        hexCode: "#DC143C",
        images: [design2WhiteRed1, design2WhiteRed2, design2WhiteRed3]
      }
    ]
  },
  {
    id: "design-3",
    designNumber: 3,
    name: "Kasi Vibes",
    price: 249.99,
    description: "Bold graphic designs that make a statement. High-quality print that lasts.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    colorVariations: [
      {
        id: "design-3-black-pink",
        name: "Black & Pink",
        dominantColor: "Black",
        secondaryColor: "Pink",
        hexCode: "#000000",
        images: [design3BlackPink1, design3BlackPink2]
      }
    ]
  },
  {
    id: "design-4",
    designNumber: 4,
    name: "Lekker Luxe",
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
        images: [design4MilkyGrey1]
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
        images: [design4BlackWhite1, design4BlackWhite2, design4BlackWhite3, design4BlackWhite4]
      },
      {
        id: "design-4-white-black",
        name: "White & Black",
        dominantColor: "White",
        secondaryColor: "Black",
        hexCode: "#FFFFFF",
        images: [design4WhiteBlack1, design4WhiteBlack2, design4WhiteBlack3]
      },
      {
        id: "design-4-white-orange",
        name: "White & Orange",
        dominantColor: "White",
        secondaryColor: "Orange",
        hexCode: "#FF8C00",
        images: [design4WhiteOrange1, design4WhiteOrange2, design4WhiteOrange3]
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
        images: [design4BrownMilky1, design4BrownMilky2, design4BrownMilky3]
      },
      {
        id: "design-4-milky-black",
        name: "Milky Coffee & Black",
        dominantColor: "Milky Coffee",
        secondaryColor: "Black",
        hexCode: "#D2B48C",
        images: [design4MilkyBlack1, design4MilkyBlack2, design4MilkyBlack3]
      }
    ]
  },
  {
    id: "design-5",
    designNumber: 5,
    name: "Ubuntu Pure",
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
        images: [design5WhiteBlack1, design5WhiteBlack2, design5WhiteBlack3]
      }
    ]
  },
  {
    id: "design-6",
    designNumber: 6,
    name: "Sharp Edition",
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
        images: [design6WhiteBlack1, design6WhiteBlack2]
      }
    ]
  },
  {
    id: "design-7",
    designNumber: 7,
    name: "Eish Noir",
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
        images: [design7BlackWhite1, design7BlackWhite2]
      }
    ]
  },
  {
    id: "design-8",
    designNumber: 8,
    name: "Shweshwe Soul",
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
        images: [design8MilkyBlack1, design8MilkyBlack2]
      }
    ]
  }
];

export const getTShirtDesignById = (id: string) => {
  return tshirtDesigns.find((design) => design.id === id);
};
