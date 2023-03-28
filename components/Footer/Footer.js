import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footter>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <div>
            <ul className={styles.nav}>
              <li className={styles.navItem}>
                <Link className={styles.link} aria-current="page" href="/">
                  Accueil
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link className={styles.link} aria-current="page" href="/admin">
                  Administration
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
            <ul className={styles.icons}>
              <li>
                <Link href="#" class="icon brands alt fa-github">
                  <span class="label">GitHub</span>
                </Link>
              </li>
              <li>
                <Link href="#" class="icon brands alt fa-linkedin-in">
                  <span class="label">LinkedIn</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </footter>
  );
}
