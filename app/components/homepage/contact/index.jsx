'use client';
// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';
import { motion } from 'framer-motion';

function ContactSection() {
  const contactInfo = [
    { Icon: MdAlternateEmail, text: personalData.email },
    { Icon: IoMdCall, text: personalData.phone },
    { Icon: CiLocationOn, text: personalData.address },
  ];

  const socialLinks = [
    { Icon: IoLogoGithub, href: personalData.github },
    { Icon: BiLogoLinkedin, href: personalData.linkedIn },
    { Icon: FaXTwitter, href: personalData.twitter },
    { Icon: FaStackOverflow, href: personalData.stackOverflow },
    { Icon: FaFacebook, href: personalData.facebook },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <motion.div
        className="hidden lg:flex flex-col items-center absolute top-24 -right-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.span
          className="bg-gradient-to-r from-[#1a1443] to-[#2a1f5f] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md border border-violet-500/30"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          CONTACT
        </motion.span>
        <motion.span
          className="h-36 w-[2px] bg-gradient-to-b from-[#1a1443] to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ContactForm />
        </motion.div>

        <motion.div
          className="lg:w-3/4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex flex-col gap-5 lg:gap-9"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                className="text-sm md:text-xl flex items-center gap-3"
                variants={item}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <info.Icon
                    className="bg-gradient-to-r from-[#8b98a5] to-[#a8aab5] p-2 rounded-full hover:from-[#16f2b3] hover:to-[#00d4ff] transition-all duration-300 text-gray-800 cursor-pointer"
                    size={36}
                  />
                </motion.div>
                <span>{info.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {socialLinks.map((social, idx) => (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{ scale: 1.3, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link target="_blank" href={social.href}>
                  <motion.div
                    className="cursor-pointer"
                    animate={{
                      boxShadow: [
                        '0 0 0px rgba(22, 242, 179, 0)',
                        '0 0 20px rgba(22, 242, 179, 0.5)',
                        '0 0 0px rgba(22, 242, 179, 0)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: idx * 0.2,
                    }}
                  >
                    <social.Icon
                      className="bg-gradient-to-r from-[#8b98a5] to-[#a8aab5] p-3 rounded-full hover:from-[#16f2b3] hover:to-[#00d4ff] transition-all duration-300 text-gray-800"
                      size={48}
                    />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;