"use client";

import { Button } from "@/components/ui/button";
import { useTranslation } from "@/libs/i18n-next/use-translation";

import { motion } from "framer-motion";

export const Banner = () => {
  const { t } = useTranslation("banner");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      x: -20,
      filter: "blur(20px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };
  const ctaVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1.1,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex items-center justify-center flex-col m-auto"
    >
      <motion.h3 variants={titleVariants} className="mt-24 text-5xl font-bold">
        {t("banner.title")}
      </motion.h3>

      <motion.p
        variants={descriptionVariants}
        className="text-xl font-light mt-4 mb-8"
      >
        {t("banner.description")}
      </motion.p>

      <motion.p
        variants={descriptionVariants}
        className="mt-4 font-mono text-justify sm:max-w-3xl max-w-lg dark:text-gray-400"
      >
        {t("banner.info")}
      </motion.p>

      <motion.div variants={ctaVariants}>
        <div className="mt-8">
          <Button className="rounded-full">{t("banner.button.try")}</Button>
        </div>
      </motion.div>
    </motion.section>
  );
};
