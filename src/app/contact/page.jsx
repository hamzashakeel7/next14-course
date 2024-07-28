import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" fill alt="contact" className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="number" placeholder="Phone Number (optional)" />
          <textarea
            name=""
            id=""
            placeholder="Message"
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
