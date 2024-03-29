import { dir } from "i18next";
import type { ResolvingMetadata } from "next";
import { Manrope } from "next/font/google";
import { LocaleType, availableLocales } from "@/i18n/settings";
import { getDefaultMetaData } from "@/lib/helpers";
import Footer from "@/components/layout/footer/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export type SharedPageProps = {
  params: { lng: LocaleType };
};
type LocaleRouteLayout = SharedPageProps & {
  children: React.ReactNode;
};

export default async function Layout({
  children,
  params: { lng },
}: LocaleRouteLayout) {
  return (
    <html
      lang={lng}
      dir={dir(lng)}
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <body
        className={`${manrope.className} dark:bg-dark-bg dark:text-dark-text text-light-text transition-all duration-150 ease-in`}
      >
        {children}
        <Footer locale={lng} />
      </body>
    </html>
  );
}

export async function generateMetadata(
  { params }: SharedPageProps,
  parent: ResolvingMetadata
) {
  return getDefaultMetaData(params.lng, parent);
}

export async function generateStaticParams() {
  // generates default paths for each locale domain/locale1, domain/locale2, etc.
  return availableLocales.map((lng) => ({ lng }));
}
