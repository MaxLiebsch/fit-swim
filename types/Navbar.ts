import { Image } from "./IHome";

export interface NavbarProps {
    data: {
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
    };
  }