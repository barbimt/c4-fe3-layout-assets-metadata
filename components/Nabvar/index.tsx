import Image from "next/image";
import Link from "next/link";
import React, { useContext } from 'react'
import logo from "../../public/logoB.png"
import styles from "./nav.module.css"
import { Language } from '../../pages/_app'
import contentBR from "../../locales/br"
import contentAR from "../../locales/ar" 

const Navbar = () => {
    const locale = useContext(Language)
    const content = locale === "es" ? contentAR : contentBR

  return (
    <nav className={styles.nav}>
   <div  className={styles.logo}>
        <Image src={logo} alt="logo" width={100} height={100}   />
      </div>
      <div className={styles.links}>
      <Link href="/">{content.home}</Link>        
            <Link href="/about">{content.about}</Link>        
            <Link href="/contact">{content.contact}</Link>      
      </div>
    </nav>
  );
};

export default Navbar;
