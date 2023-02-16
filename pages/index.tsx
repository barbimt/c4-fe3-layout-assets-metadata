import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import wallpaper from "../public/wallpaper.jpg";
import contentAR from "../locales/ar";
import contentBR from "../locales/br";
import type { NextPage } from "next";
import { ChangeEventHandler, TransitionEventHandler, TransitionFunction, useContext } from "react";
import { Language } from "./_app";
import { useRouter } from "next/router";
import { relative } from "path";

const Home: NextPage = () => {
  const locale = useContext(Language);
  const content = locale === "es" ? contentAR : contentBR;
  const router = useRouter();

  const changeLanguage: ChangeEventHandler<HTMLSelectElement> = (e:React.ChangeEvent<HTMLSelectElement>) => {
    const changeIdiom = e.target.value;
    router.push(router.pathname, router.asPath, { locale: changeIdiom });
    console.log(changeIdiom)
  };

  return (
    <div className="landing">
      <Head>
        <title>Digital House</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={content.description} />
        <link rel="shortcut icon" href="/logoB.png" />
  
      </Head>
      <div>
        <h1>{content.title}</h1>
        <h2>{content.subtitle}</h2>
        <button>{content.buttonText}</button>
        <select onChange={changeLanguage}>
          <option value="es">ES</option>
          <option value="br">BR</option>
        </select>
      </div>
      <div style={{
        position:"relative", width: "300px", height: "300px"
      }}>
      <Image src='/perro.jpg' alt="wallpaper" width={300} height={300}/>
      </div>
    </div>
  );
};

export default Home;
