import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";
import Links from "./links/Links";
import { auth } from "@/lib/auth";

const Navbar = async () => {
  const session = await auth();

  console.log(session);
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Durrani
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
