import Image from "next/image";
import { ReactElement } from "react";
import "./blob-image.scss";

interface Props {
  url: string;
  textAlternatif: string;
  width: number;
  height: number;
}

function BlobImg({ url, textAlternatif, width, height }: Props): ReactElement {
    return (
      <div className="blob-image" >
        <div style={{  width: '100%', height: '100%'}}>
          <svg
            viewBox="0 0 480 480"
            xmlns="http://www.w3.org/2000/svg"
            style={{width: '100%', height: '100%' }}
          >
            <defs>
              <clipPath id="blob">
                <path d="M436.5,288Q406,336,369,368Q332,400,286,424.5Q240,449,186.5,437.5Q133,426,91,388Q49,350,37.5,295Q26,240,32.5,182Q39,124,98,110Q157,96,198.5,86Q240,76,291.5,69Q343,62,393,92.5Q443,123,455,181.5Q467,240,436.5,288Z" />
              </clipPath>
            </defs>
          </svg>
          <div style={{ position: 'absolute', top: "10%", right: 0, width: '100%', height: '100%', clipPath: 'url(#blob)' }}>
            <Image
              src={url}
              alt={textAlternatif}
              width={width}
              height={height}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default BlobImg;