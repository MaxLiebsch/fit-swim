export interface Footer {
    createdAt: string
    updatedAt: string
    name: string
    companyInfo: CompanyInfo
    quickLinks: QuickLinks
    contact: Contact
    id: string
  }
  
  export interface CompanyInfo {
    logoText: string
    description: string
  }
  
  export interface QuickLinks {
    title: string
    menuItems: MenuItem[]
  }
  
  export interface NavbarReference {
    createdAt: string
    updatedAt: string
    name: string
    logo: Logo
    menuItems: MenuItem[]
    id: string
  }
  
  export interface Logo {
    text: string
    color: string
  }
  
  export interface MenuItem {
    label: string
    link: string
    id: string
  }
  
  export interface ButtonStyle {
    backgroundColor: string
    hoverColor: string
  }
  
  export interface SelectedItem {
    menuItemLabel: string
    id: string
  }
  
  export interface Contact {
    title: string
    email: string
    phone: string
    address: string
  }
  