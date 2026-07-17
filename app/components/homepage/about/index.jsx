'use client';
// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { motion } from 'framer-motion';

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <motion.span
          className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          ABOUT ME
        </motion.span>
        <motion.span
          className="h-36 w-[2px] bg-gradient-to-b from-[#1a1443] to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <motion.div
          className="order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="font-medium mb-5 text-[#16f2b3] text-xl uppercase"
            animate={{ color: ['#16f2b3', '#00d4ff', '#16f2b3'] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Who I am?
          </motion.p>
          <motion.p
            className="text-gray-200 text-sm lg:text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {personalData.description}
          </motion.p>
        </motion.div>
        <motion.div
          className="flex justify-center order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Image
              src={personalData.profile}
              width={280}
              height={280}
              alt="Rahul Kumar"
              className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer border-2 border-transparent hover:border-pink-500 shadow-lg"
              priority
              unoptimized
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;