"use client";
import React, { useRef, useEffect, use } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

import "./scroll-services.scss";
import Link from "next/link";

type props = {
  backgroundColor: string;
};

function ScrollServices({backgroundColor} : props) {
  const sectionsRef = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionsRef.current,
      {
        x: 0,
      },
      {
        x: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer" style={{backgroundColor}}>
      <div ref={triggerRef}>
        <div ref={sectionsRef} className="scroll-section-inner">
          <article className="scroll-section">
            <Image
              src="/img/escalade-scroll.jpg"
              alt="personne qui pratique le cannyoning"
              width={4453}
              height={2969}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                position: "relative",
              }}
            />
            <div className="content">
              <h3 className="content-title">Escalade</h3>
              <p className="content-text">
              Grimpez et prenez de la hauteur sur les magnifiques falaises de la région.
              </p>
              <div className="content-link">
                <Link href="/" className="btn-outline-white">
                  Réserver
                </Link>
                <Link href="/activites/escalade" className="btn-outline-white secondary">
                  En savoir plus
                </Link>
              </div>
            </div>
          </article>
          <article className="scroll-section">
            <Image
              src="/img/speleo.jpg"
              alt="personne qui pratique le cannyoning"
              width={6000}
              height={4000}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                position: "relative",
              }}
            />
            <div className="content">
              <h3 className="content-title">Spéléologie</h3>
              <p className="content-text">
              Explorez les merveilles cachées du monde souterrain au coeur des nombreuses grottes du secteur.
              </p>
              <div className="content-link">
                <Link href="/" className="btn-outline-white">
                  Réserver
                </Link>
                <Link href="activites/speleo" className="btn-outline-white secondary">
                  En savoir plus
                </Link>
              </div>
            </div>
          </article>
          <article className="scroll-section">
            <Image
              src="/img/2han-hsing-tu-toKnZe9kebA-unsplash.jpg"
              alt="personne qui pratique le cannyoning"
              width={8256}
              height={5504}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                position: "relative",
              }}
            />
            <div className="content">
              <h3 className="content-title">Canyoning </h3>
              <p className="content-text">
              Sautez, glissez sur les toboggans naturels et nagez dans les eaux fraîches des gorges sauvages pour une aventure aquatique rafraîchissante et riche en sensations.
              </p>
              <div className="content-link">
                <Link href="/" className="btn-outline-white ">
                  Réserver
                </Link>
                <Link href="/activites/canyoning" className="btn-outline-white secondary">
                  En savoir plus
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ScrollServices;
