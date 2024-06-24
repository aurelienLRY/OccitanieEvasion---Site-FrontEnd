"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./header.scss";
const Header = () => {
  const pathname = usePathname();
  const [opened, setOpened] = useState(false);
  return (
    <header className="header">
      <nav className=" block start">
        <div id="nav_trigger">
          <button
            aria-label="Main Menu"
            onClick={() => setOpened(!opened)}
            className={opened ? "opened" : ""}
          >
            <svg viewBox="0 0 100 100">
              <path
                className="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path className="line line2" d="M 20,50 H 80" />
              <path
                className="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </button>
        </div>

        <div className={opened ? "opened nav_links" : "nav_links"}>
          <Link
            className={`link ${pathname === "/" ? "active" : ""}`}
            href="/"
            onClick={() => setOpened(false)}
          >
            Accueil
          </Link>
          <Link
            className={`link ${pathname === "/activites" ? "active" : ""}`}
            href="/activites"
            onClick={() => setOpened(false)}
          >
            Activités
          </Link>
          <Link href="/lieux" onClick={() => setOpened(false)}>
            Lieux
          </Link>
          <Link
            className={`link ${pathname === "/contact" ? "active" : ""}`}
            href="/contact"
            onClick={() => setOpened(false)}
          >
            Contact
          </Link>
        </div>
      </nav>

      <Link href="/" className="header-logo block center" onClick={() => setOpened(false)}>
        <Image src="/next.svg" alt="logo" width={100} height={100} />
        <h1>Occitanie Evasion</h1>
      </Link>

      <div className="block end">
        <button className="btn-secondary small "> Reserver </button>
      </div>
    </header>
  );
};

export default Header;
