"use client";
import FormulasCard from "@/ui/components/fomulasCard";
import ActivityCard from "@/ui/components/activityCard";
import "./escalade.scss";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import Image from "next/image";

import findSessionsByActivity from "../../../../middleware/findSessionsByActivity";
import getSpots from "../../../../_actions/getSpots";

import { useEffect, useState } from "react";

import SessionCard from "@/ui/components/SessionCard";
import SgvEscalade from "@/ui/components/svgEscaladeGrandVoie";
import MapCustomer from "@/ui/components/mapCustomer";


type Props = {};
type Session = {
  _id: string;
  status: string;
  date: string;
  startTime: string;
  endTime: string;
  activity: string;
  spot: string;
  placesMax: number;
  placesReserved: number;
};

type spots = Array<{
  name: string;
  description: string;
  gps: [number, number];
  practicedActivities: Array<{
    activityName: string;
    activityId: string;
  }>;
  photos: Map<string, string>;
  half_day: boolean;
  full_day: boolean;
  max_OfPeople: number;
  min_OfPeople: number;
  meetingPoint: string;
  estimatedDuration: string;
}>;

function EscaladeActivity({}: Props) {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [spots , setSpots] = useState<spots>([]);

  useEffect(() => {
    const fetchSessions = async () => {
      const res = await findSessionsByActivity("Escalade");
      setSessions(res);
    };

    fetchSessions();
  }, []);

  useEffect(() => {
    const fetchSpots = async () => {
      const res = await getSpots();
      setSpots(res);
    };

    fetchSpots();
  } , []);

  return (
    <main className="escalade-activity">
      <div className="banner-activity">
        <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
          <ParallaxBannerLayer expanded={false} speed={-20}>
            <Image
              src="/img/pexels-pixabay-461593.jpg"
              alt="personne qui pratique l'escalade"
              width={3318}
              height={2212}
              layout="responsive"
              objectFit="cover"
            />
          </ParallaxBannerLayer>
          <ParallaxBannerLayer
            expanded={false}
            opacity={[0.9, 1]}
            speed={-15}
            translateX={[100, -100]}
          >
            <div className="arg-banner">
              <div className="conteneur-banner">
                <h2 className="title-banner">Escalade </h2>
                <p className="text-banner">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Totam cupiditate accusantium atque alias qui ea quo culpa quia
                  modi laudantium nam dolorem fugit obcaecati tempore saepe
                  natus eos, fugiat iure.
                </p>
              </div>
            </div>
          </ParallaxBannerLayer>
          <ParallaxBannerLayer expanded={false} speed={-20}>
            <Image
              src="/img/pexels-pixabay-461593 front.png"
              alt="personne qui pratique l'escalade"
              width={3318}
              height={2212}
              layout="responsive"
              objectFit="cover"
            />
          </ParallaxBannerLayer>
        </ParallaxBanner>
        <div className="skewedRight "></div>
      </div>

      <section className="introduction-activity">
        <ActivityCard
          url="/img/escalade/Escalade-5.jpg"
          textAlternatif="personne qui pratique l'escalade"
          width={3456}
          height={4608}
          title="Escalade"
          className="introduction-activity_card"
        >
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            veritatis quod molestias assumenda, magnam ratione deleniti expedita
            corporis, numquam dolorem eius, nemo porro quidem reprehenderit
            aliquid cumque! Unde, tempora repudiandae?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illum
            voluptas doloribus blanditiis quod quaerat consequuntur expedita sed
            repudiandae? Atque ipsum nihil ducimus dolor saepe velit quibusdam
            et, officiis provident.
          </p>
        </ActivityCard>
      </section>

      <section className="activity-formulas skewed left  bottom-right  relative">
        <SgvEscalade className="svg-background"/>

        <h2 className="activity-formulas_title">Nos formules</h2>
        <div className="formulas-card">
          {itemsFormulas.map((item, index) => (
            <FormulasCard item={item} key={`formulasCard-${index}`} />
          ))}
        </div>
      </section>
      
      
      <section className="activity-session">
        <h2 className="activity-session_title">Pourquoi pas venir?</h2>
        <p className="activity-session_desc">
          Accusantium labore perferendis, asperiores explicabo, mollitia, nobis
          eius quisquam sit eligendi maiores earum aliquid deserunt ducimus
          voluptate porro architecto ipsum iusto eos.
        </p>
        <div className="activity-session_card">
          {sessions.map((session, index) => (
            <SessionCard item={session} key={`sessionCard-${index}`} />
          ))}
        </div>
      </section>

      <MapCustomer spots={spots} />
    </main>
  );
}

export default EscaladeActivity;

const itemsFormulas = [
  {
    type: "Demi-journée",
    title: "initiation",
    price: 20,
    priceReduced: 15,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi veritatis quod molestias assumenda.",
  },
  {
    type: "Journée",
    title: "Perfectionnement",
    price: 35,
    priceReduced: 30,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi veritatis quod molestias assumenda, magnam ratione ",
  },
  {
    type: "5 Jours ",
    title: "Perfectionnement",
    price: 230,
    priceReduced: 30,
    desc: "deleniti expedita corporis, numquam dolorem eius, nemo porro quidem reprehenderit aliquid cumque! Unde, tempora repudiandae?",
  },
];


const positionItems = [
  {
    gps: [43.07400047945242, 3.092348287201606],
    name: "Gruissan",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi veritatis quod molestias assumenda.",
  },
  {
    gps: [43.334251334225094, 2.5450693566201603],
    name: "Narbonne",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi veritatis quod molestias assumenda.",
  },
  {
    gps: [43.3342435328547, 2.5449620676640525],
    name: "NOtre Dame de la Rouvière",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi veritatis quod molestias assumenda.",
  },  
];