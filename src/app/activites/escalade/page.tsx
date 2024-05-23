import FormulasCard from '@/ui/components/fomulasCard';
import './escalade.scss'
import ActivityCard from "@/ui/components/ActivityCard";


type Props = {};

function EscaladeActivity({}: Props) {
  return (
    <main>
    <section className="introduction-activity">
      <ActivityCard
        url="/img/isac-ciobota-_26k1oGgmic-unsplash.jpg"
        textAlternatif="personne qui pratique l'escalade"
        width={3910}
        height={4887}
        title="Escalade"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi veritatis
        quod molestias assumenda, magnam ratione deleniti expedita corporis,
        numquam dolorem eius, nemo porro quidem reprehenderit aliquid cumque!
        Unde, tempora repudiandae?
      </ActivityCard>
      </section>

      <section className="activity-formulas">
        <h2 className="activity-formulas_title">Description de l'activité</h2>
        <p className="activity-formulas_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi veritatis
          quod molestias assumenda, magnam ratione deleniti expedita corporis,
          numquam dolorem eius, nemo porro quidem reprehenderit aliquid cumque!
          Unde, tempora repudiandae?
        </p>
        <FormulasCard type="demi-journée" />
        </section>
    </main>
  );
}

export default EscaladeActivity;
