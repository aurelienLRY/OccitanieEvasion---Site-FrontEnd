import React from 'react'

type Props = {
  type: string
}

function FormulasCard({type}: Props) {
  return (
    <article>
      <h3 className="activity-formulas_title">Formules {type}</h3>
      <p><span>Tarifs : </span>20€ </p>
      <p><span>Age minimum</span> 10 ans</p>
     


    </article>
  )
}

export default FormulasCard