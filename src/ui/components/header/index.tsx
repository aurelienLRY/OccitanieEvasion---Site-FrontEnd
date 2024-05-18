"use client";
import React from "react";
import "./header.scss";
import Image from "next/image";
import Link from "next/link";

const header = () => {
  return (
    <header className="header">
      <Link href="/" className="header-logo">
        <Image src="/next.svg" alt="logo" width={100} height={100} />
        <h1>Occitanie Evasion</h1>
      </Link>
      <nav>
        <Link href="/">Accueil</Link>
        <Link href="/activites">Activités</Link>
        <Link href="/lieux">Lieux</Link>
        <Link href="/contact">Contact</Link>
        <button> Reserver </button>
      </nav>
    </header>
  );
};

export default header;
