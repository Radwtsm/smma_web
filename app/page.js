"use client";

import Image from "next/image";
import styles from "./page.module.css"

import { InlineWidget } from "react-calendly";

import { Oswald } from "next/font/google";

import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";

import { Rating } from "@mui/material";

import Header from "./_components/header/Header";

import Counters from "./_components/counters/Counters";
import Sponsors from "./_components/sponsors/Sponsors";
import Copy from "./_components/copy/Copy";
import Servizi from "./_components/servizi/Servizi";
import Recensioni from "./_components/recensioni/Recensioni";


const oswald = Oswald({ subsets: ["latin"] });






export default function Home() {
  const styless = {
    container: {
      backgroundImage: `url(/background.png)`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',

    },
    bg: {
      backgroundColor: '#010012'
    }
  };

  const counter_ref = useRef(null)
  const is_counter_view = useInView(counter_ref, { once: true })

  useEffect(() => {
    console.log("Element is in view: ", is_counter_view)
  }, [is_counter_view])

  return (
    <main className={`${oswald.className} ${styless.container} text-white`}>
      <Header />
      <p className="text-3xl text-center mb-3 mt-2 text-gray-500">
        ecco chi siamo e come lavoriamo
      </p>
      {/* <div className='text-center'>video</div> */}


      <div ref={counter_ref}></div>
      {is_counter_view && <Counters />}

      <Sponsors />
      <Copy />
      <Servizi />
      <Recensioni />
      <div className="mt-10">
      <InlineWidget className="w-1/2" url="https://calendly.com/smma-international/call-w-nicco-edu" />
      </div>
    </main>
  );
}
