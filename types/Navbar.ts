export interface NavbarProps {
    data: {
      logo: {
        text: string;
        color: string;
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