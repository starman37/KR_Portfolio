import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
// ...existing code...

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export default function Hero() {
  return (
    <div id="about">
      <div className="min-h-screen flex items-center justify-center text-center px-4 pt-20 gap-8">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Hi, I'm{" "}
            {/* --- THEME ---
              Added a sci-fi gradient text effect */}
            <span className="bg-linear-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
              Starman
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            // --- THEME ---
            // Using our new "dim" text color variable
            className="text-xl md:text-2xl text-text-dim mb-8"
          >
            Frontend Developer | React Specialist
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              // --- THEME ---
              // Styled the secondary button for the glass theme
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg 
                       hover:bg-primary hover:text-white transition
                       bg-white/10 dark:bg-black/10 backdrop-blur-sm"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Technologies moved below buttons */}
          <div className="mt-8 p-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-center mb-6"
            >
              Technologies
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-4 mt-4"
            >
              <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-border shadow-lg hover:shadow-primary/20 hover:border-primary/50 p-4 hover:scale-110 duration-300 ease-in-out"
              >
                <RiReactjsLine className="text-7xl text-violet-500" />
              </motion.div>
              <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-border shadow-lg hover:shadow-primary/20 hover:border-primary/50 p-4 hover:scale-110 duration-300 ease-in-out"
              >
                <TbBrandNextjs className="text-7xl text-violet-500" />
              </motion.div>
              <motion.div
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-border shadow-lg hover:shadow-primary/20 hover:border-primary/50 p-4 hover:scale-110 duration-300 ease-in-out"
              >
                <SiMongodb className="text-7xl text-violet-500" />
              </motion.div>
              <motion.div
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-border shadow-lg hover:shadow-primary/20 hover:border-primary/50 p-4 hover:scale-110 duration-300 ease-in-out"
              >
                <RiTailwindCssFill className="text-7xl text-violet-500" />
              </motion.div>
              <motion.div
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-border shadow-lg hover:shadow-primary/20 hover:border-primary/50 p-4 hover:scale-110 duration-300 ease-in-out"
              >
                <FaNodeJs className="text-7xl text-violet-500" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
