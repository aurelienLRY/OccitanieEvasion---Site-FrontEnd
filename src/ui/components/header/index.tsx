"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import "./header.scss";
const Header = () => {
  const pathname = usePathname()
  return (
    <header className="header">
      <Link href="/" className="header-logo">
        <Image src="/next.svg" alt="logo" width={100} height={100} />
        <h1>Occitanie Evasion</h1>
      </Link>
    
      <nav>
        <div className="nav-link">
        <Link  className={`link ${pathname === '/' ? 'active' : ''}`} href="/">Accueil</Link>
        <Link className={`link ${pathname === '/activites' ? 'active' : ''}`} href="/activites">Activités</Link>
        <Link  href="/lieux">Lieux</Link>
        <Link className={`link ${pathname === '/contact' ? 'active' : ''}`} href="/contact">Contact</Link>
       </div> 
       <button> Reserver </button>
      </nav>
    </header>
  );
};

export default Header;
