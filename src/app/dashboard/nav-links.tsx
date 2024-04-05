'use client'

import style from '../style.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaCommentDots, FaHome } from "react-icons/fa";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Inicio', href: '/dashboard', icon: <FaHome size={20}/>},
  { name: 'Mensajeria', href: '/dashboard/mensajeria', icon:<FaCommentDots size={20}/>},
];

export default function NavLinks() {
  const pathname = usePathname()
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            style={{background:'black'}} 
            className={`flex h-[48px]   grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:p-2 md:px-3
            ${pathname === link.href ? 'bgskey-100 text-blue-600': ''}
            `}
          >
            {link.icon}
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
