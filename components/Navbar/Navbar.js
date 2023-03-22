import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./../../public/images/logo_1.png";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className="logo">
        <Link href="/">
          <Image src={Logo} alt="logo" width="200" height="75" />
        </Link>
      </div>
      <div >
        <ul className={styles.nav}>
          <li className={styles.navItem}>
            <Link className={styles.active} aria-current="page" href="/">
              Accueil
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.btn} href="/projets">
              Projets
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.btnOutline} href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
