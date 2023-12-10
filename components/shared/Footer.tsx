import React from "react";
import Image from "next/image";
import styles from "../../styles/css/footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/BG1.jpeg"
            alt="BG1"
            width={600}
            height={400}
          />
          <p>Text below BG1 image</p>
          <p>Text below BG1 image</p>
          <p>Text below BG1 image</p>
          <p>Text below BG1 image</p>
          <p>Text below BG1 image</p>
        </div>
        <div>VISIT US</div>
        <div className={styles.imageContainer}>
          <Image
            src="/images/BG2.jpeg"
            alt="BG2"
            width={600}
            height={400}
          />
          <p>Text below BG2 image</p>
          <p>Text below BG2 image</p>
          <p>Text below BG2 image</p>
          <p>Text below BG2 image</p>
          <p>Text below BG2 image</p>
        </div>
        {/* <div>INSTAGRAM</div> */}
        
        {/* <div>ICON</div> */}
      </div>
    </footer>
  );
};

export default Footer;
