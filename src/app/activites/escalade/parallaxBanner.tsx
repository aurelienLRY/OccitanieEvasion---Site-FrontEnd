'use client'
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import Image from "next/image";

function ParaBanner() {
  return (
    <div className="banner-activity">
      <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer expanded={true} speed={-20}>
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
          expanded={true}
          opacity={[0.9, 1]}
          speed={-15}
          translateX={[100, -100]}
        >
          <div className="arg-banner">
            <div className="conteneur-banner">
              <h2 className="title-banner">Escalade </h2>
              <p className="text-banner">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
                cupiditate accusantium atque alias qui ea quo culpa quia modi
                laudantium nam dolorem fugit obcaecati tempore saepe natus eos,
                fugiat iure.
              </p>
            </div>
          </div>
        </ParallaxBannerLayer>
        <ParallaxBannerLayer expanded={true} speed={-20}>
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
  );
}

export default ParaBanner;
