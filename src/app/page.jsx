import Image from "next/image";
import styles from "../home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Creative Thoughts Agency</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, eos
          earum. Quidem quis voluptatem tenetur tempora dolores blanditiis at
          earum.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt="brands"
            fill
            className={styles.brandImg}
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/hero.gif" fill alt="" className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
