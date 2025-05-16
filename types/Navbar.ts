import { Image } from "./IHome";

export interface NavbarProps {
  logo: {
    text: string;
    color: string;
    image: Image;
  };
  menuItems: {
    label: string;
    link: string;
    isButton: boolean;
    buttonStyle?: {
      backgroundColor: string;
      hoverColor: string;
    };
  }[];
}
