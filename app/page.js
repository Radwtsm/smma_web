"use client";

import Image from "next/image";
// import Navbar from './Navbar'
import CountUp from 'react-countup';

import MenuIcon from "@mui/icons-material/Menu";
import Marquee from "react-fast-marquee";
import { InlineWidget } from "react-calendly";


import { Oswald } from "next/font/google";
import { Source_Sans_3 } from "next/font/google";
import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";


const oswald = Oswald({ subsets: ["latin"] });
const sans = Source_Sans_3({ subsets: ["latin"] });





export default function Home() {

  //counter
  const counter_ref = useRef(null)
  const is_counter_view = useInView(counter_ref, { once: true })

  useEffect(() => {
    console.log("Element is in view: ", is_counter_view)
  }, [is_counter_view])

  return (
    <main className={oswald.className}>
      <div className="">
        <div className="flex justify-between items-center pt-3 px-3">
          <p className="text-2xl font-bold">SMMA</p>

          <button>
            <MenuIcon fontSize="large" />
          </button>
        </div>
        <header className="text-4xl">
          <div className="h-screen flex flex-col justify-around items-around">
            <h1 className="text-center font-medium ">SMMA International</h1>
            <p className="text-8xl mx-3 text-left ">
              HAI DIFFICOLTÀ A SCALARE LA TUA ATTIVITÀ LOCALE?
            </p>
          </div>
        </header>
      </div>

      {/* <div className='text-center'>video</div> */}

      {/* CHI SIAMO E COME LAVORIAMO */}
      <div ref={counter_ref}></div>
      {is_counter_view && <div>
        <p className="text-3xl text-center mb-32">
          ecco chi siamo e come lavoriamo
        </p>
        <div className="flex flex-col gap-5 text-xl w-100 my-20">
          <div className="flex flex-col gap-3 justify-center items-center rounded-md shadow-lg  w-3/4 h-48 mx-auto p-4">
            <p className="text-4xl"><CountUp duration={5} start={0} end={150.84} suffix="k" decimals={2} /></p>
            <p className="font-light">Spesi in ads nel 2023</p>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center rounded-md shadow-lg  w-3/4 h-48 mx-auto p-4">
            <p className="text-4xl"><CountUp duration={5} start={0} end={100} suffix="+" /></p>
            <p className="font-light">Partner e clienti</p>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center rounded-md shadow-lg  w-3/4 h-48 mx-auto p-4">
            <p className="text-4xl"><CountUp duration={5} start={0} end={15} /></p>
            <p className="font-light">Team di professionisti</p>
          </div>
        </div>
      </div>}

      <div className="my-32">
        <p className="text-4xl text-center my-8">partners</p>
        <Marquee className="text-3xl overflow-hidden my-10">
          <p className="mx-4">sponsor1</p>
          <p className="mx-4">sponsor1</p>
          <p className="mx-4">sponsor1</p>
          <p className="mx-4">sponsor1</p>
          <p className="mx-4">sponsor1</p>
          <p className="mx-4">sponsor1</p>
          <p className="mx-4">sponsor1</p>
          <p className="mx-4">sponsor1</p>
          <p className="mx-4">sponsor1</p>
          <p className="mx-4">sponsor1</p>
          <p className="mx-4">sponsor1</p>
        </Marquee>
      </div>

      <div className="my-32">
        <p className="text-center text-4xl mb-2">Copy</p>
        <p className={`mx-6 text-justify text-xl text-gray-500 font-light ${sans.className}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est et labore
          porro ex aliquid nisi doloremque voluptates neque deleniti eveniet,
          aspernatur illum vero nihil consequatur odio earum ut. Perspiciatis,
          voluptas.
        </p>
      </div>


      <div className="my-32">
        <p className="text-center text-4xl mb-2">Servizi</p>
        <div className="flex justify-around items-center  my-10 mx-3">
          <div className="rounded-lg shadow-md flex flex-col justify-center items-center p-5" style={{ width: '15rem', height: '15rem' }}>
            <Image alt="tiktok icon" src="/icons/tiktok2.png" height="100" width="100" />
            <p>TikTok ADS</p>
          </div>
          <div className="rounded-lg shadow-md flex flex-col justify-center items-center p-5" style={{ width: '15rem', height: '15rem' }}><Image alt="meta icon" src="/icons/meta.png" height="100" width="100" /><p>Meta ADS</p></div>

        </div>
      </div>

      <div>recensioni</div>

      {/* <InlineWidget url="https://calendly.com/your_scheduling_page" /> */}


    </main>
  );
}
