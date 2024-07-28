import React from "react";
import styles from "./about.module.css";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subHeading}>About Our Agency</h2>
        <h1 className={styles.mainHeading}>
          We create digital presence for our clients which make them socially
          strong
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
          mollitia accusamus! Placeat ipsum iusto quibusdam eaque suscipit
          veritatis quisquam deserunt vero, omnis cumque ut voluptatum quae
          soluta accusamus sequi inventore.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1 className={styles.subHeading}>10k +</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1 className={styles.subHeading}>20k +</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1 className={styles.subHeading}>30k +</h1>
            <p>Years of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/about.png" fill alt="" className={styles.heroImg} />
      </div>
    </div>
  );
};

export default AboutPage;
