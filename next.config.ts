import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { i18n } from "./app/i18n/config";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: i18n.locales,
    defaultLocale: i18n.defaultLocale,
  },
};

export default nextConfig;
