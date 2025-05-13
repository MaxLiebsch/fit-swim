import { getFooter } from "@/payload/getFooter";
import { Mail, MapPin, Phone, Waves } from "lucide-react";
import Link from "next/link";

export default async function Footer() {
  const footer = await getFooter();
  const _ = footer.docs[0];
  const {companyInfo, quickLinks, contact} = _;
  return (
    <footer className="bg-sky-900 text-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Waves className="h-6 w-6" />
              <span className="text-lg font-bold">{companyInfo.logoText}</span>
            </Link>
            <p className="text-sky-200 text-sm">
              {companyInfo.description}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">{quickLinks.title}</h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.menuItems.map((item) => (
                <Link key={item.id} href={item.link} className="text-sky-200 hover:text-white text-sm">
                  {item.label}
                </Link>
              ))}
             
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">{contact.title}</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-sky-200" />
                <span className="text-sky-200 text-sm">{contact.email}</span>
              </div>
              <div className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-sky-200" />
                <span className="text-sky-200 text-sm">{contact.phone}</span>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-sky-200" />
                <span className="text-sky-200 text-sm">{contact.address}</span>
              </div>
            </div>
          </div>
          <div>
            {/* <h3 className="text-lg font-bold mb-4">Follow Me</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-sky-200 hover:text-white">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-sky-200 hover:text-white">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-sky-200 hover:text-white">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div> */}
            {/* <div className="mt-6">
              <h4 className="text-sm font-bold mb-2">Newsletter</h4>
              <p className="text-sky-200 text-sm mb-2">Subscribe for swimming tips and updates</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 text-sm rounded-md text-gray-900 w-full"
                />
                <button className="bg-sky-600 hover:bg-sky-700 px-3 py-2 rounded-md text-sm">Subscribe</button>
              </div>
            </div> */}
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-sky-800 text-center text-sky-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Fit Swim Berlin. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
