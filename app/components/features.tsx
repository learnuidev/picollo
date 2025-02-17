import { motion } from "framer-motion";

import { useTranslation } from "@/libs/i18n-next/use-translation";

function FeatureItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const featureVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={featureVariants}
      className="dark:bg-[rgb(14,15,16)] bg-gray-100 p-4 rounded-2xl"
    >
      <h4 className="font-bold uppercase font-mono">{title}</h4>

      <p className="mt-2 dark:text-gray-500">{description}</p>
    </motion.div>
  );
}

const FeaturesContainer = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  //   const { t } = useTranslation(["features"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="my-32 dark:bg-[rgb(11,12,13)] bg-gray-50 p-4"
    >
      <motion.h2 className="text-2xl mb-8 text-center font-mono lowercase font-bold">
        {title}
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">{children}</div>
    </motion.section>
  );
};

export function Features() {
  const { t } = useTranslation("features");
  return (
    <FeaturesContainer title={t("features.title")}>
      <FeatureItem
        title={t("feature.idee")}
        description={t("feature.idee.description")}
      />
      <FeatureItem
        title={t("feature.cai")}
        description={t("feature.cai.description")}
      />
      <FeatureItem
        title={t("feature.picasso")}
        description={t("feature.picasso.description")}
      />
      <FeatureItem
        title={t("feature.seosaurus")}
        description={t("feature.seosaurus.description")}
      />
      <FeatureItem
        title={t("feature.aivue")}
        description={t("feature.aivue.description")}
      />
      <FeatureItem
        title={t("feature.openSource")}
        description={t("feature.openSource.description")}
      />
    </FeaturesContainer>
  );
}
