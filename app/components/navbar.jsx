'use client';
// @flow strict
import Link from "next/link";
import { motion } from 'framer-motion';

function Navbar() {
  const navItems = [
    { name: 'ABOUT', href: '/#about' },
    { name: 'EXPERIENCE', href: '/#experience' },
    { name: 'SKILLS', href: '/#skills' },
    { name: 'EDUCATION', href: '/#education' },
    { name: 'PROJECTS', href: '/#projects' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.nav
      className="bg-transparent backdrop-blur-md sticky top-0 z-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between py-5">
        <motion.div
          className="flex flex-shrink-0 items-center"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="relative group">
            <span className="text-[#16f2b3] text-3xl font-bold relative z-10">
              Rahul Kumar
            </span>
            <motion.div
              className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-pink-500 to-violet-600 rounded-full"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </motion.div>

        <motion.ul
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item, idx) => (
            <motion.li key={idx} variants={itemVariants}>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline relative group" href={item.href}>
                <motion.div
                  className="text-sm text-white transition-colors duration-300 group-hover:text-pink-600 relative"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-pink-500 to-violet-600"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;