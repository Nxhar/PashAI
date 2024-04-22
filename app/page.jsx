"use client"

import { createContext } from "react";

import Image from "next/image";
import links from '@/components/assets/links.json'
import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";




export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      {/* Hello World */}
      
          
      <motion.div initial={{ opacity: 0.5, y: -10 }} whileInView={{ opacity: 1, y: -100}}
          transition={{
            delay: 0.1,
            duration: 0.5,
            ease: "easeInOut",
          }} viewport={{ once:'true' }}  className="mt-48">
        <div className="mt-40 text-white font-bold container mx-auto lg:text-6xl md:text-6xl text-3xl sm:text-4xl text-center">
          A <span className="gradient-text animate-gradient">Revolutionary Learning Platform</span><br /> Harnessing the Power of AI to its core.
        </div>
      </motion.div>
      


      <motion.div initial={{opacity:0.5, y:100}} whileInView={{opacity:1, y:0}} transition={{delay:0.2, duration : 0.5, ease:"easeInOut"}} viewport={{ once: true }}
       className=" mt-[00px] flex justify-center flex-col items-center">
        <div className="min-h-12 py-10 px-20 bg-green-600 rounded-2xl w-[80%] mt-10 text-white flex">
          <div className="w-[70%]">
            <div className="text-5xl  h-[70%] font-semibold flex items-center leading-[1.4]">Meet Pash : <br /> He's a little goofy, but he's the best assistant you <br /> could ask for.</div>
            <div className="mt-10">Our built-in AI guide and tutor, Pash, prompts you with challenges that are built just for you and unblocks you when you get stuck.

            </div>
          </div>
          <div className='w-[40%] flex justify-center bg-green-400 rounded-full'>
            <Image src={links["PashExcited"]} width={400} height={400}></Image>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{opacity:0.5, y:100}} whileInView={{opacity:1, y:0}} transition={{delay:0.2, duration : 0.5, ease:"easeInOut"}} viewport={{ once: true }}
       className="mt-20">
        <BouncyCardsFeatures />

      </motion.div>

    </main>
  );
}





const BouncyCardsFeatures = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 ">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-4xl font-bold md:text-5xl text-green-500">
          Grow faster with our
          <span className="text-green-500"> all in one AI learning platform!</span>
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-green-500"
        >
          Learn more
        </motion.button>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4 ">
          <CardTitle>Learning Zones</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-indigo-50">
              FEATURE DEMO HERE
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>AI Powered Forum</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-orange-50">
              FEATURE DEMO HERE
            </span>
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Performance Analytics</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-emerald-50">
              FEATURE DEMO HERE
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Bounties</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-red-50">
              FEATURE DEMO HERE
            </span>
          </div>
        </BounceCard>
      </div>
    </section>
  );
};

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-green-500 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};