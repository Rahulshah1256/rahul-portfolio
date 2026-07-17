'use client';
// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { motion } from 'framer-motion';

function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <motion.div
        className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10" variants={item}>
          <motion.h1
            className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]"
            whileHover={{ scale: 1.02 }}
          >
            Hello, <br />
            This is {' '}
            <motion.span
              className="text-pink-500 bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text"
              animate={{
                backgroundPosition: ['0%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              {personalData.name}
            </motion.span>
            {` , I'm a Professional `}
            <motion.span
              className="text-[#16f2b3]"
              animate={{
                color: ['#16f2b3', '#00d4ff', '#16f2b3'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              {personalData.designation}
            </motion.span>
            .
          </motion.h1>

          <motion.div
            className="my-12 flex items-center gap-5"
            variants={item}
          >
            {[
              { Icon: BsGithub, href: personalData.github },
              { Icon: BsLinkedin, href: personalData.linkedIn },
              { Icon: FaFacebook, href: personalData.facebook },
              { Icon: SiLeetcode, href: personalData.leetcode },
              { Icon: FaTwitterSquare, href: personalData.twitter },
            ].map((social, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.3, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  className="text-pink-500 hover:text-violet-400 transition-colors duration-300"
                >
                  <social.Icon size={30} />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="flex items-center gap-3" variants={item}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600 hover:shadow-lg hover:shadow-pink-500/50">
                <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
                  <span>Contact me</span>
                  <RiContactsFill size={16} />
                </button>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold hover:shadow-lg hover:shadow-violet-500/50" role="button" target="_blank" href={personalData.resume}
              >
                <span>Get Resume</span>
                <MdDownload size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] glassmorphic"
          variants={item}
          whileHover={{ boxShadow: '0 0 40px rgba(236, 72, 153, 0.3)' }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <motion.div
                className="h-3 w-3 rounded-full bg-red-400"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="h-3 w-3 rounded-full bg-orange-400"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
              />
              <motion.div
                className="h-3 w-3 rounded-full bg-green-200"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
              />
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <pre className="font-mono text-xs md:text-sm lg:text-base overflow-x-auto">
              <motion.span
                className="blink"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </motion.span>
              {'\n'}
              <span>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">Rahul Kumar</span>
                <span className="text-gray-400">{`',`}</span>
              </span>
              {'\n'}
              <span className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">Java</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Spring Boot</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">React</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">DSA</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MySql</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Docker</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Kubernetes</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">GCP</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">HTML</span>
                <span className="text-gray-400">{"'],"}</span>
              </span>
              {'\n'}
              <span>
                <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </span>
              {'\n'}
              <span>
                <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </span>
              {'\n'}
              <span>
                <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </span>
              {'\n'}
              <span>
                <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">{'() {'}</span>
              </span>
              {'\n'}
              <span>
                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                <span className="text-gray-400">{`(`}</span>
              </span>
              {'\n'}
              <span>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">hardWorker</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </span>
              {'\n'}
              <span>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">problemSolver</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </span>
              {'\n'}
              <span>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">skills.length</span>
                <span className="mr-2 text-amber-300">&gt;=</span>
                <span className="text-orange-400">5</span>
              </span>
              {'\n'}
              <span><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></span>
              {'\n'}
              <span><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></span>
              {'\n'}
              <span><span className="text-gray-400">{`};`}</span></span>
            </pre>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;