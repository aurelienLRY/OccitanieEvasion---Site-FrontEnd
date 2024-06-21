"use server";

import findSessionsByActivity from "@/lib/middleware/findSessionsByActivity";
import getSpots from "@/lib/actions/getSpots";
import { connectDB, disconnectDB } from "@/lib/config/database";

/*components*/
import SgvEscalade from "@/ui/components/svgEscaladeGrandVoie";
import MapCustomer from "@/ui/components/mapCustomer";
import FormulasCard from "@/ui/components/fomulasCard";
import ActivityCard from "@/ui/components/activityCard";
import ParaBanner from "./parallaxBanner";
import CarouselSession from "@/ui/components/carrouselSessionCard";
/*styles*/
import "./escalade.scss";
import { BackgroundSvg, TachClipPath } from "@/ui/svg";
import { ISpots, IActivity, ISessions } from "@/lib/models/types";




 const fetchData = async () => {
      await connectDB(); // Connexion à la base de données
      const spots: ISpots = await getSpots() as ISpots;
      const sessions : ISessions = await findSessionsByActivity("Escalade") as ISessions;
      const filteredSpots = spots.filter(
        (spot) =>
          spot.practicedActivities &&
          Array.isArray(spot.practicedActivities) &&
          spot.practicedActivities.some(
            (item) => item && item.activityName === "Escalade"
          )
      );
      return {sessions , filteredSpots}
    };


async function EscaladeActivity() {
  try {
    
  const {sessions , filteredSpots } =  await fetchData();
       return (
      <main className="escalade-activity">
        <ParaBanner />
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              veritatis quod molestias assumenda, magnam ratione deleniti
              expedita corporis, numquam dolorem eius, nemo porro quidem
              reprehenderit aliquid cumque! Unde, tempora repudiandae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              illum voluptas doloribus blanditiis quod quaerat consequuntur
              expedita sed repudiandae? Atque ipsum nihil ducimus dolor saepe
              velit quibusdam et, officiis provident.
            </p>
          </ActivityCard>
        </section>
        <section className="activity-formulas  relative">
          <SgvEscalade className="svg-background" />
          <article>
            <h2 className="activity-formulas_title">Nos formules</h2>
            <div className="formulas-card">
              {itemsFormulas.map((item, index) => (
                <FormulasCard item={item} key={`formulasCard-${index}`} />
              ))}
            </div>
          </article>

          <article className="booking">
            <TachClipPath className="clip-path">
              <h2>Profitez de date déjà programmé </h2>
              <div className="activity-booking_card">
                {sessions ? (
                  <CarouselSession sessions={sessions} />
                ) : (
                  <>
                    <p> Aucune session n&apos;est programmée pour le moment </p>
                    <p> Réservez en une! </p>
                  </>
                )}
              </div>
            </TachClipPath>
          </article>
        </section>
        <section className="activity-tof"></section>
        <section className="map-activity">
          <div className="map-activity_content">
            <h2>Map</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              aut voluptates blanditiis distinctio quo obcaecati eveniet
              provident autem exercitationem totam facilis, deserunt, corrupti
              repellat, at praesentium hic doloribus cupiditate velit!
            </p>
          </div>
          <div className="map-activity_mapConteneur">
            <MapCustomer spots={filteredSpots} />
          </div>
        </section>
      </main>
    );
  } catch (error) {
    console.error("Failed to load data:", error);
  } finally {
    disconnectDB(); // Déconnexion de la base de données
  }
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

const cards = [
  {
    id: 1,
    content: "Escalade-5.jpg",
    className: "md:col-span-2",
    thumbnail: "/img/escalade/Escalade-5.jpg",
  },
  {
    id: 2,
    content: "Escalade-8.jpg",
    className: "col-span-1",
    thumbnail: "/img/escalade/Escalade-8.jpg",
  },
  {
    id: 3,
    content: "Escalade-72.jpg",
    className: "col-span-1",
    thumbnail: "/img/escalade/Escalade-72.jpg",
  },
  {
    id: 4,
    content: "Escalade-77.jpg",
    className: "md:col-span-2",
    thumbnail: "/img/escalade/Escalade-77.jpg",
  },
];
