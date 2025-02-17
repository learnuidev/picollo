import { i18nOptions } from "@/libs/i18n-next/i18n-config";

import banner from "@/locales/en/banner.json";
import features from "@/locales/en/features.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof i18nOptions.defaultNS;
    resources: {
      banner: typeof banner;
      features: typeof features;
    };
  }
}

