'use client'; 
import React from "react";
import Image from "next/image";

/*services*/
import { dateToFr, formatHours } from "@/lib/data/services/date";
import "./sessionCard.scss";

/*svg*/
import { IconEscalade,  IconSpeleo } from "@/ui/svg";

type item = {
  date: string;
  startTime: string;
  endTime: string;
  activity: string;
  spot: string;
  placesMax: number;
  placesReserved: number;
};

function SessionCard({ item }: { item: item }) {




  return (
    <div className="session-card relative rounded-xl">
      <div className="logo">
        {displayIconByActivity(item.activity)}
      </div>
      <div className="session-card_content">
        <div className="session-card_content_date">
          le {dateToFr(item.date)} {formatHours(item)}
        </div>
        <div className="session-card_content_spot">{item.spot}</div>
        <div className="session-card_content_places">
          Places restante: {item.placesMax - item.placesReserved}
        </div>
      </div>
      <button>J'en profite !  </button>
    </div>
  );
}

export default SessionCard;


function displayIconByActivity(activity: string) {
  switch (activity) {
    case "escalade":
      return <IconEscalade className={'session-card_svg'} />;
      break; 
    case "spéléologie":
      return <IconSpeleo className={'session-card_svg'}/>;
      break;
    default:
      return <p>Activité non reconnue</p>;
  }
}