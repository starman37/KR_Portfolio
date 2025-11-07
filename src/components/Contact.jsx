import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 px-6 min-h-screen flex items-center bg-transparent"
    >
      <div className="max-w-4xl mx-auto text-center w-full">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          Let's{" "}
          <span className="bg-linear-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
            Connect
          </span>
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl mb-12 text-text-dim"
        >
          I'm always open to new opportunities and collaborations
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-6 justify-center flex-wrap"
        >
          <a
            href="mailto:john@example.com"
            className="flex items-center gap-3 px-8 py-4 rounded-xl 
                       transition-all hover:scale-105 
                       bg-bg-card hover:bg-bg-card-hover 
                       border border-border shadow-lg
                       hover:border-primary/50"
          >
            <Mail className="w-6 h-6 text-primary" />
            <span className="font-semibold text-inherit">Email</span>
          </a>
          <a
            href="https://github.com"
            className="flex items-center gap-3 px-8 py-4 rounded-xl 
                       transition-all hover:scale-105 
                       bg-bg-card hover:bg-bg-card-hover
                       border border-border shadow-lg
                       hover:border-primary/50"
          >
            <Github className="w-6 h-6 text-primary" />
            <span className="font-semibold text-inherit">GitHub</span>
          </a>
          <a
            href="https://linkedin.com"
            className="flex items-center gap-3 px-8 py-4 rounded-xl 
                       transition-all hover:scale-105 
                       bg-bg-card hover:bg-bg-card-hover 
                       border border-border shadow-lg
                       hover:border-primary/50"
          >
            <Linkedin className="w-6 h-6 text-primary" />
            <span className="font-semibold text-inherit">LinkedIn</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
