'use client' ; 
import "./formulas.scss";

type Props = {
  item: {
    type: string;
    price: number;
    priceReduced: number;
    title: string;
    desc: string;
  };
};

function FormulasCard({ item }: Props) {
  return (
    <article className="activity-formulas_card">
      <div className="activity-formulas_header">
        {item.title && <h3>{item.title}</h3>}
        <h4>{item.type}</h4>
      </div>
      <div className="activity-formulas_body">
        <p>{item.desc}</p>
        <div className="price">
          <p className="price-primary">
            {item.price}€ <span>/plein tarif</span>
          </p>
          <p className="price-redux">
            {item.priceReduced}€ <span>/ Tarif réduit</span>
          </p>
        </div>
      </div>

      <div className="activity-formulas_footer">
        <button className="btn ">Réserver</button>
      </div>
    </article>
  );
}

export default FormulasCard;
