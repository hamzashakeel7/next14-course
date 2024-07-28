"use client";

import Link from "next/link";
import React from "react";
import styles from "@/components/Navbar/links/Navlink/Navlink.module.css";
import { usePathname } from "next/navigation";

const Navlink = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
};

export default Navlink;
