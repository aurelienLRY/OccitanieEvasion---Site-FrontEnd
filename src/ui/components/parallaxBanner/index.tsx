/**
 * @module ParallaxBanner
 * @description ParallaxBanner component
 * @code @aurelienLRY
 */
'use client';
import { useEffect, useState } from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

import Image from "next/image";

/* style */
import styles from './parallaxBanner.module.scss';

/**
 * Props for the CustomParallaxBanner component
 */
interface Props {
    item: {
        alt: string;
        title: string;
        description: string;
        urlFront: string;
        urlBack: string;
    };
}

/**
 * CustomParallaxBanner component
 * @param {Props} item - The item object containing the data for the banner
 * @returns {JSX.Element} - The rendered CustomParallaxBanner component
 */
export default function CustomParallaxBanner({ item }: Props): JSX.Element {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const img = new window.Image();
        img.src = item.urlBack;
        img.onload = () => {
            setDimensions({ width: img.width, height: img.height });
        };
    }, [item.urlBack]);

    return (
        <div className={styles.parallaxBanner }>
            <ParallaxBanner style={{ aspectRatio: '2/1' }}>
                <ParallaxBannerLayer expanded={true}  speed={-20}>
                        <Image
                                src={item.urlBack}
                                alt={item.alt}
                                width={dimensions.width}
                                height={dimensions.height}
                                quality={75}
                                className="banner-background"
                        />
                </ParallaxBannerLayer>
                {item.title && (
                    <ParallaxBannerLayer expanded={true} speed={-15} translateX={[100, -100]}>
                        <div className={styles.bannerText}>
                            <h2 className={styles.bannerTitle}>{item.title}</h2>
                            <p className={styles.bannerDescription}>{item.description}</p>
                        </div>
                    </ParallaxBannerLayer>
                )}
                {item.urlFront && (
                    <ParallaxBannerLayer expanded={true} speed={-20}>
                        <Image
                            src={item.urlFront}
                            alt={item.alt}
                            width={dimensions.width}
                            height={dimensions.height}
                            quality={75}
                            className="banner-front"
                        />
                    </ParallaxBannerLayer>
                )}
            </ParallaxBanner>
        </div>
    );
}
