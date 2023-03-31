import React from "react";
import styles from "@/styles/contact.module.css";
import ContactForm from "@/components/ContactForm/ContactForm";
import Aside from "@/components/Aside/Aside";

export default function Contact() {
  return (
    <>
      <section id="banner">
        <div className={styles.container}>
          <h1 className={styles.title}>
            
            <span className={styles.first}>Contactez-</span>
            <span className={styles.second}>Moi</span>
          </h1>
          <p className={styles.intro}>
            Vous avez un projet? <br /> Je suis à votre disposition pour toutes
            demandes de devis ou de renseignements complémentaires sur mes
            services. <br />
            Je serai ravie de pouvoir collaborer avec vous.
          </p>
        </div>
      </section>
      <section id="contact">
        <div className={styles.container}>
          <div className={styles.contact}>
            <ContactForm />
            <Aside />
          </div>
        </div>
      </section>
    </>
  );
}