import React from "react";
import Image from "next/image";

const ImageContent = () => {
    return (
      <div>
        <div>
          <a
            href="https://edu.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className=""
              src="/images/nishu.jpeg"
              width={700}
              height={800}
              alt="Nishu Image"
            />
          </a>
        </div>
        <h3>Discover</h3> {/* h3 is not working properly*/}
        <a href="xyz" target="_blank" rel="noopener noreferrer">Learn More</a>
      </div>
    );
  };
  
export default ImageContent;
  


