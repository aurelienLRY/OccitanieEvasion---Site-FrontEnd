import Image from "next/image";
import Link from "next/link";

import ScrollServices from "@/ui/components/scrollServices";
import { IconEscalade, IconSpeleo, IconViaCorda , IconCanyoning } from "@/ui/svg";

export default function Home() {
  return (
    <>
      <section className="you-welcome ">
        <div className="you-welcome-text">
          <h2 className="title">
            Bienvenue <span>chez</span> <br />
            Occitanie Évasion !
          </h2>
          <h3 className="title-sub">
            Évadez-vous en pleine nature au coeur de l’Occitanie.
          </h3>
        </div>
        <div className="banner-home-page skewedBottomRight">
          <Image
            src="/img/Canyoning_Home.jpg"
            alt="personne qui pratique du canyoning"
            width={8256}
            height={5504}
          />
        </div>
      </section>

      <section>
        <p>
          Spécialisés dans l’encadrement et la découverte des sports de plein
          air, je vous propose une évasion adaptée à vos envies. Que ce soit en
          Canyoning, Escalade, Spéléo ou Via Corda, c’est avec passion que je
          vous ferai découvrir ces activités.
        </p>
        <p>
          Entre l’Aude, le Tarn, les Pyrénées Orientales et l’Hérault, le choix
          peut être difficile à faire au vu de la richesse sauvage de ce vaste
          territoire. Vous trouverez ici une sélection de sites naturels et
          lieux de pratique que j’affectionne particulièrement.
        </p>
      </section>

      <section className="activity-item">
        <h2>Nos activités</h2>
        <div className=" item-body ">
          <Link href="/activites/escalade" className="branding-svg">
            <IconEscalade className="hover" />
            <h3 className="hidden">Escalade</h3>
          </Link>

          <Link href="/activites/canyoning" className="branding-svg">
            <IconCanyoning className="hover"/>
          </Link>
          <div className="branding-svg">
            <IconSpeleo className=" hover" />
          </div>
          <div className="branding-svg">
            <IconViaCorda className="hover" />
          </div>
        </div>
      </section>

      <ScrollServices backgroundColor="black" />

      <section className="about">
        <div className="content">
          <h2 className="title">Occitanie Evasion Qu&eacute;s aco&rsquo;?</h2>
          <p className="text">
            Chez Occitanie Évasion, nous croyons en l&rsquo;importance de
            partager des moments authentiques. Une ambiance conviviale et en
            toute sécurité, au coeur de la nature pour faire le plein de
            sensations, de découvertes et d’échanges . Tout en prenant le temps,
            nous veillons à ce que chaque sortie soit un plaisir, tant pour vous
            que pour nous…
          </p>
          <Link href="/apropos" className="btn small">
            En savoir plus
          </Link>
        </div>
      </section>

      <section>
        <h2 className="title">Les lieux de pratiques</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem
          obcaecati cumque ipsum inventore iure perferendis? Eveniet,
          consectetur expedita fugit repellat ullam voluptatum sit natus
          deserunt obcaecati fuga minima sequi.
        </p>
      </section>
    </>
  );
}
