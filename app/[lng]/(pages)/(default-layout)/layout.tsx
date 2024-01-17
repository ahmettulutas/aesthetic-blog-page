import Header from "@/components/layout/header/Header";
import { LocaleType } from "@/i18n/settings";
import SplitText from "gsap-trial/SplitText";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import gsap from "gsap";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollSmoother);
gsap.registerPlugin(ScrollTrigger);

export default function PageLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: LocaleType };
}) {
  return (
    <>
      <Header currentLocale={lng} />
      {children}
    </>
  );
}
