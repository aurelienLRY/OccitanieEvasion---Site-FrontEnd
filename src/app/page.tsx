import Image from "next/image";
import Link from "next/link";

import ScrollServices from "@/ui/components/scrollServices";
import BlobImg from "@/ui/components/blobImage";
import { LogoEscalade } from "@/ui/svg/branding";

import ActivityCard from "@/ui/components/activityCard";

import "./home.scss";
import "@/ui/styles/main.scss";


export default function Home() {


  return (
    <main className="">
      <section className="you-welcome">
        <article className="you-welcome-item">
          <div className="you-welcome-text">
            <h2 className="title">Activités en pleine nature</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              quidem voluptatum aspernatur commodi vero perferendis tenetur
              alias quis modi odio! Numquam, dolor sequi sed nam non ipsa
              officia similique nobis?
            </p>
            <Link href="/" className="btn xl">
              Réserver
            </Link>
          </div>
          <div className="you-welcome-image">
            <BlobImg
              url="/img/Canyoning_Home.jpg"
              textAlternatif="personne qui pratique le cannyoning"
              width={8256}
              height={5504}
            />
          </div>
        </article>

        <article className="activity-item">
          <h2>Nos activités</h2>
          <div className=" item-body ">
            <div className="branding-svg">
              <LogoEscalade />
              <h3>Escalade</h3>
            </div>
            <div className="branding-svg">
              <LogoEscalade />
              <h3>Canyoning</h3>
            </div>
            <div className="branding-svg">
              <LogoEscalade />
              <h3>Spéléo</h3>
            </div>
            <div className="branding-svg">
              <LogoEscalade />
              <h3>Via-corda</h3>
            </div>
          </div>
        </article>
      </section>

      <div>Vous cherchez des sensations ? </div>

      <ScrollServices backgroundColor="black" />

      <section className="about">
        <div className="content">
          <h2 className="title">
            Moniteur indépendant <br />
            <span>depuis 2005,</span>
          </h2>
          <p className="text">
            je vous accompagne découvrir les plus beaux sites de canyoning ,
            escalade , spéléologie et via corda en Occitanie.
          </p>
          <Link href="/">En savoir plus</Link>
        </div>
      </section>
      <section>
        <h2 className="title">Les lieux de pratiques</h2>
      </section>

      <section className="carrousel"></section>
    </main>
  );
}
