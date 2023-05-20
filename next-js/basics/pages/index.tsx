import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Banner from "../components/banner";
import Card from "../components/card";

import coffeeStores from "../data/coffee-stores.json";

//import useTrackLocation from "../hooks/use-track-location";

// localhost:3000/ 
export default function Home(props: any):any {
    const { useEffect, useState, useContext } = React;
 
    const handleOnBannerBtnClick = () => {
        //handleTrackLocation();
    };

    return (
        <div className={styles.container}>
        <Head>
          <title>Coffee Connoisseur</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="allows you to discover coffee stores"
          />
        </Head>
        <main className={styles.main}>
        <Banner
          buttonText="View stores nearby"
          handleOnClick={handleOnBannerBtnClick}
        />
        <div className={styles.heroImage}> 
            <Image  
                src="/static/hero-image.png" 
                alt="hero image" 
                width={700} height={400} 
            />
        </div>
        <div className={styles.cardLayout}>
            {coffeeStores.map((coffeeStore: any) => {
                return (
                    <Card 
                        key={coffeeStore.id} 
                        name={coffeeStore.name} 
                        imgUrl={coffeeStore.imgUrl} 
                        href={`/coffee-store/${coffeeStore.id}`} 
                        className={styles.card}
                    />
                );
            })
            }
        </div>
        </main>
        </div>
    )
}