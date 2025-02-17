"use client";

import { Button } from "@/components/ui/button";
import { useTranslation } from "@/libs/i18n-next/use-translation";

export const Banner = () => {
  const { t } = useTranslation("banner");
  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="mt-24 text-5xl font-bold">{t("banner.title")}</h1>

      <p className="text-xl font-light mt-4">{t("banner.description")}</p>

      <p className="mt-4 font-mono text-justify sm:max-w-3xl max-w-lg dark:text-gray-400">
        {t("banner.info")}
      </p>

      <div className="mt-8">
        <Button className="rounded-full">{t("banner.button.try")}</Button>
      </div>
    </section>
  );
};
