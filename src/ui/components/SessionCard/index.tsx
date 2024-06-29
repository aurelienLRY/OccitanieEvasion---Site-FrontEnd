"use client";
import React , { useState, useEffect, use} from "react";
import Image from "next/image";
import { ISessions, ISession } from "@/lib/dataBase/models/types";

/*services*/
import { dateToFr, formatHours } from "@/lib/services/date";
import "./sessionCard.scss";

/*svg*/
import { IconEscalade, IconSpeleo } from "@/ui/svg";


function SessionCard({ item }: { item: ISession }) {
  const [x , setX] = useState<ISession>(item)

  useEffect(() => {
    setX(item)
  }, [item])

  return (
    <div className="session-card relative ">
      <div className="session-card_body ">
        {displayIconByActivity(x.activity)}
        <div className="body_content">
          <div className="date">
            le {dateToFr(x.date)} {formatHours(x)}
          </div>
          <div className="spot">à {x.spot}</div>
          <div className="places">
            Places restante: {x.placesMax - x.placesReserved}
          </div>
        </div>
      </div>
      <div className="session-card_footer">
      <button className="btn small">J&apos;en profite</button>
      </div>
    </div>
  );
}

export default SessionCard;

function displayIconByActivity(activity: string) {
  switch (activity) {
    case "escalade":
      return <IconEscalade className={"session-card_logo"} />;
      break;
    case "spéléologie":
      return <IconSpeleo className={"session-card_logo"} />;
      break;
    default:
      return <p>Activité non reconnue</p>;
  }
}
