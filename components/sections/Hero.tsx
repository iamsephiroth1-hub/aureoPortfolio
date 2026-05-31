"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import GradientText from "@/components/ui/GradientText";
import { fadeInVariants, staggerVariants } from "@/src/lib/animations";

export default function Hero() {
  return (
    <section className="py-20 sm:py-32 lg:py-40">
      <Container>
        <motion.div
          className="space-y-6 text-center"
          variants={staggerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="text-xs uppercase tracking-[0.3em] text-text-dim"
            variants={fadeInVariants}
          >
            AVAILABLE FOR SELECT FREELANCE PROJECTS
          </motion.p>

          <div>
            <motion.h1
              className="heading-display"
              variants={fadeInVariants}
            >
              Hey, I&apos;m <GradientText>CJ</GradientText>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl font-mono text-muted tracking-widest uppercase mt-1"
              variants={fadeInVariants}
            >
              Christopher Joseph Aureo
            </motion.p>
          </div>

          <motion.p
            className="body-lg mx-auto max-w-2xl text-text-muted"
            variants={fadeInVariants}
          >
            Aspiring Full-Stack Developer & IT Student
          </motion.p>

          <motion.div
            className="space-y-3 mx-auto max-w-2xl"
            variants={fadeInVariants}
          >
            <p className="text-muted text-sm md:text-base leading-relaxed">
              I build modern web applications and digital solutions that solve real-world problems. From client websites and management systems to Android apps and IoT projects, I enjoy creating software that is functional, scalable, and user-focused.
            </p>
            <p className="text-muted text-sm md:text-base leading-relaxed">
              Currently expanding my expertise in full-stack development while gaining hands-on experience through academic, freelance, and client-based projects.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            variants={fadeInVariants}
          >
            <Button
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Work
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/cv.pdf";
                link.download = true;
                link.click();
              }}
            >
              Download CV
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
