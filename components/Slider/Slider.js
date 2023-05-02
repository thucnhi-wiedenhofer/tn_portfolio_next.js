import React from 'react';
import styles from "./Slider.module.css";
import Image from 'next/image';
import project_1 from "./../../public/images/gallery_bopha.png";
import project_2 from "./../../public/images/gallery_panama.png";
import project_3 from "./../../public/images/gallery_cms.png";

export default function Slider() {
  return (
    <div className={styles.sliderContainer}>
    <div className={styles.slider}>
    <Image src={project_1} alt="projet 1" width="1920" height="1080" />
    <Image src={project_2} alt="projet 2" width="1920" height="1080" />
    <Image src={project_3} alt="projet 3" width="1920" height="1080" />
    <Image src={project_1} alt="projet 1" width="1920" height="1080" />
    </div>
  </div>
  )
}
