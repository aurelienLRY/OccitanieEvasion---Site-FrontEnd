"use client";

/* librairies */
import { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  item: {
    alt: string;
    url: string;
  };
  className: string;
}

export default function CustomImage({ item, className }: Props): JSX.Element {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const img = new window.Image();
    img.src = item.url;
    img.onload = () => {
      setDimensions({ width: img.width, height: img.height });
    };
  }, [item.url]);

  return (
    <Image
      src={item.url}
      alt={item.alt}
      width={dimensions.width}
      height={dimensions.height}
      quality={75}
      className={className}
    />
  );
}
