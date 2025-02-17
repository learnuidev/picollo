"use client";
import { useTranslation } from "@/libs/i18n-next/use-translation";
import { Banner } from "./components/banner";
import { FeatureItem, Features } from "./components/features";

export default function Home() {
  const { t } = useTranslation("features");
  return (
    <div className="">
      <Banner />

      <Features title={t("features.title")}>
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
      </Features>
    </div>
  );
}
