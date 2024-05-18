import React from 'react'
import "./activity-card.scss"


type Props = {
    title: string
    description: string
    price: string
    children: React.ReactNode
}
/*
* @param title: string
* @param description: string
* @param price: string
* @param children: React.ReactNode
* @returns React.ReactNode
* @description: This component is a card that displays an activity with a title, a description, a price and an image.
* @example: <ActivityCard title="Escalade" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit." price="45€" >
*             <Image src="/img/julia-margeth-theuer-opCNk_Z2_TE-unsplash.jpg" alt="Chausson d'escalade sur un rocher" width={4150} height={2749} className="card-img" />
*          </ActivityCard>
* */
function ActivityCard({title, description , price ,  children}: Props) {
  return (
    <div className="activity-card">
    <div className="card-header">
      {children}
      <h3>{title}</h3>
    </div>
    <div className="card-body">
      <p>{description}</p>
      <p>à partir de {price} la demi-journée</p>
    </div>
  </div>
  )
}

export default ActivityCard