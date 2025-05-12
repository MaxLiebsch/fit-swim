import config from "@/app/payload.config";
import { NavbarProps } from "@/types/Navbar";
import { PayloadWrapper } from "@/types/PayloadWrapper";
import { getPayload } from "payload";

export const getNavbar = async () => {
  const payload = await getPayload({ config });
  const navbar = await payload.find({ collection: "navbar", limit: 1 }) as unknown as PayloadWrapper<NavbarProps>;
  return navbar;
};
