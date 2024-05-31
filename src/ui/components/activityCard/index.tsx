import "./activity-card.scss";
import Image from "next/image";

type Props = {
  url: string;
  textAlternatif: string;
  width: number;
  height: number;
  title: string;
  className: string;
  children: React.ReactNode;
};

function ActivityCard({
  url,
  textAlternatif,
  width,
  height,
  title,
  className, 
  children,
}: Props) {
  return (
    <div className={`activity-card ${className}`} data-testid="activity-card">
      <div className="activity-card_box">
        <Image
          src={url}
          alt={textAlternatif}
          width={width}
          height={height}
          //layout="responsive"
          objectFit="cover"
          className="activity-card_image"
        />
        <div className="activity-card_text">
          <h2 className="activity-card_title">{title}</h2>
          <div className="activity-card_content">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
