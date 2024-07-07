/*
 * @/app/page.tsx
 * @description : This is the home page of the website
 * code : @aurelienLRY
 */

"use client";
/* librairies */
import Image from "next/image"; // Image is a component for displaying images
import Link from "next/link"; // Link is a component for linking to other pages
import useSWR from "swr"; // useSWR is a React Hook for remote data fetching
import dynamic from "next/dynamic";// dynamic is a function for dynamic imports
/* components */
import ScrollServices from "@/ui/components/scrollServices"; // ScrollServices is a component for scrolling to the services section
import CustomImage from "@/ui/components/image"; // CustomImage is a component for displaying images

//import MapCustomer from "@/ui/components/mapCustomer"; // MapCustomer is a component for displaying the map of the spots
import MapSkeleton from "@/ui/components/mapCustomer/mapSkeleton"; // MapSkeleton is a component for displaying a skeleton of the map

import {
  IconEscalade,
  IconSpeleo,
  IconViaCorda,
  IconCanyoning,
} from "@/ui/svg"; // IconEscalade, IconSpeleo, IconViaCorda, IconCanyoning are components for displaying the icons of the activities

/* Module typescript */
import { ISpots } from "@/lib/dataBase/models/types";

/* styles */
import styles from "./home.module.scss";




const MapCustomer = dynamic(() => import("@/ui/components/mapCustomer"), {
  ssr: false,
  loading: () => <MapSkeleton />,
});

export default function Home() {
  const { data, error, isLoading } = useSWR<ISpots>("/getSpots", fetcher);

  if (error) return <p>Erreur lors du chargement des spots: {error.message}</p>;

  return (
    <>
      <section className={styles.youWelcome}>
        <div className={styles.youWelcome_text}>
          <h2 className={styles.youWelcome_title}>
            Bienvenue <span>chez</span> <br />
            Occitanie Évasion !
          </h2>
          <h3 className="title-sub">
            Évadez-vous en pleine nature au coeur de l&apos;Occitanie.
          </h3>
        </div>
        <div className={`${styles.bannerHomePage} skewedBottomRight`}>
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
          Spécialisés dans l&apos;encadrement et la découverte des sports de
          plein air, je vous propose une évasion adaptée à vos envies. Que ce
          soit en Canyoning, Escalade, Spéléo ou Via Corda, c&apos;est avec
          passion que je vous ferai découvrir ces activités.
        </p>
        <p>
          Entre l&apos;Aude, le Tarn, les Pyrénées Orientales et l&apos;Hérault,
          le choix peut être difficile à faire au vu de la richesse sauvage de
          ce vaste territoire. Vous trouverez ici une sélection de sites
          naturels et lieux de pratique que j&apos;affectionne particulièrement.
        </p>
      </section>

      <section className="activity-item">
        <h2>Nos activités</h2>
        <div className=" item-body ">
          <Link href="/activites/escalade"  aria-label="Escalade" >
            <IconEscalade className="hover" />
            <h3 className="hidden">Escalade</h3>
          </Link>

          <Link href="/activites/canyoning"  aria-label="Canyoning">
            <IconCanyoning className="hover" />
          </Link>
          <Link href="/activites/speleo"  aria-label="Spéléo">
            <IconSpeleo className=" hover" />
          </Link>
          <Link href="/activites/via-corda"   aria-label="Via corda"   >
            <IconViaCorda className="hover" />
          </Link>
        </div>
      </section>

      <ScrollServices backgroundColor="black" />

      <section className={styles.about}>
        <div className={styles.aboutGallery}>
          <CustomImage item={{ alt: "photo de Florent", url: "/img/homePage/florent.jpg" }} className={styles.galleryItem1} />
          <CustomImage item={{ alt: "photo de l'équipe", url: "/img/homePage/flo-groupe.jpg" }} className={styles.galleryItem2} />
        </div>
        <div className={styles.aboutContent}>
          <h2 className="title">Occitanie Evasion Qu&eacute;s aco&rsquo;?</h2>
          <p className="text">
            Chez Occitanie Évasion, nous croyons en l&apos;importance de
            partager des moments authentiques. Une ambiance conviviale et en
            toute sécurité, au coeur de la nature pour faire le plein de
            sensations, de découvertes et d&apos;échanges . Tout en prenant le
            temps, nous veillons à ce que chaque sortie soit un plaisir, tant
            pour vous que pour nous…
          </p>
          <Link href="/apropos" className="btn small">
            En savoir plus
          </Link>
        </div>
      </section>

      <section>
        <h2 className="title">Les lieux de pratiques</h2>
        {isLoading ? <MapSkeleton /> : <MapCustomer spots={data ?? null} />}

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

const fetcher = (url: string) => fetch(url).then((res) => res.json());
