"use client";

import React, { useState } from "react";
import styles from "../Navbar.module.css";
import Navlink from "./Navlink/Navlink";
import Image from "next/image";
import { handleLogout } from "@/lib/serverAction";

const links = [
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];
const Links = ({ session }) => {
  const [open, setOpen] = useState(false);

  // temp
  // const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.topLinks}>
        {links.map((link) => (
          <Navlink key={link.title} item={link} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <Navlink item={{ title: "admin", path: "/admin" }} />
            )}
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <Navlink item={{ title: "login", path: "/login" }} />
        )}
      </div>
      {/* mobile responsive view */}
      <Image
        className={styles.menu}
        src="/menu.png"
        alt="menu"
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <Navlink key={link.title} item={link} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
