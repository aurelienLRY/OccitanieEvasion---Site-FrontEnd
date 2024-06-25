"use server";

/* Modules MongoDB  */
import { connectDB, disconnectDB } from "@/lib/dataBase/connectMongo";
/* Middleware */
import findSessionsByActivity from "@/lib/middleware/findSessionsByActivity";
import findSpotsByActivity from "@/lib/middleware/findSpotsByActivity";

/* Components */
import SgvEscalade from "@/ui/components/svgEscaladeGrandVoie";
import dynamic from 'next/dynamic';
import FormulasCard from "@/ui/components/fomulasCard";
import ActivityCard from "@/ui/components/activityCard";
import ParaBanner from "./parallaxBanner";
import CarouselSession from "@/ui/components/carrouselSessionCard";

/* Styles */
import "./escalade.scss";
import { BackgroundSvg, TachClipPath } from "@/ui/svg";

/* Données */
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

const fetchData = async () => {
  try {
    await connectDB(); // Connexion à la base de données
    const sessions = await findSessionsByActivity("Escalade");
    const filteredSpots = await findSpotsByActivity("Escalade");
    return { sessions, filteredSpots };
  } catch (error) {
    console.error("Failed to load data:>>>>>>>>>>>", error);
    return { sessions: null, filteredSpots: null };
  } finally {
    disconnectDB(); // Déconnexion de la base de données
  }
};

const MapCustomer = dynamic(() => import('@/ui/components/mapCustomer'), { ssr: false });

async function EscaladeActivity() {
  const { sessions, filteredSpots } = await fetchData();
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
            veritatis quod molestias assumenda, magnam ratione deleniti expedita
            corporis, numquam dolorem eius, nemo porro quidem reprehenderit
            aliquid cumque! Unde, tempora repudiandae?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illum
            voluptas doloribus blanditiis quod quaerat consequuntur expedita sed
            repudiandae? Atque ipsum nihil ducimus dolor souvent velit quibusdam
            et, officiis provident.
          </p>
        </ActivityCard>
      </section>
      <section className="activity-formulas relative">
        <SgvEscalade className="svg-background" />
        <article>
          <h2 className="activity-formulas_title">Nos formules</h2>
          <div className="formulas-card">
            {itemsFormulas.map((item, index) => (
              <FormulasCard item={item} key={`formulasCard-${index}`} />
            ))}
          </div>
        </article>

        <aside className="booking">
          <h2>Profitez d&apos;une Session déjà programmée</h2>
          <div className="booking_carrousel">
            {sessions ? (
              <CarouselSession sessions={sessions} />
            ) : (
              <>
                <p> Aucune session n&apos;est programmée pour le moment </p>
                <p> Réservez-en une! </p>
              </>
            )}
          </div>
        </aside>
      </section>
      <section className="activity-tof"></section>
      <section className="map-activity">
        <div className="map-activity_content">
          <h2>Map</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            aut voluptates blanditiis distinctio quo obcaecati eveniet provident
            autem exercitationem totam facilis, deserunt, corrupti repellat, at
            praesentium hic doloribus cupiditate velit!
          </p>
        </div>
        <div className="map-activity_mapConteneur">
          <MapCustomer spots={filteredSpots} />
        </div>
      </section>
    </main>
  );
}

export default EscaladeActivity;
