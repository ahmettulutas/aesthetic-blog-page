"use client";

import Link from "next/link";
import { useTranslation } from "@/i18n/client";
import { DynamicLink } from "@/app/[lng]/(pages)/(dynamic-layout)/blogs/[slug]/page";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { LanguageSelector } from "@/components/layout/header/LanguageSelector";
import { Container } from "@/components/containers/Container";

import Logo from "./Logo";
import ConnectLinks from "../../connect-links/ConnectLinks";
import HydrateWrapper from "../../hydrate-wrapper/HydrateWrapper";
import ThemeSkeleton from "../../loading-skeletons/ThemeSkeleton";

export type HeaderProps = {
  currentLocale: string;
  dynamicLinks?: Array<DynamicLink>;
};

export default function Header({ currentLocale, dynamicLinks }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const { t } = useTranslation(currentLocale, "translation");
  return (
    <header>
      <Container className="w-full flex items-center justify-between py-4">
        <Logo currentLocale={currentLocale} />
        <button
          className="inline-block sm:hidden"
          onClick={() => toggle()}
          aria-label="Hamburger Menu"
        >
          <div className="w-6 cursor-pointer transition-all ease duration-300">
            <div className="relative">
              <span
                className="absolute top-0 inline-block w-full h-0.5 bg-dark-bg dark:bg-light-bg rounded transition-all ease duration-200"
                style={{
                  transform: isOpen
                    ? "rotate(-45deg) translateY(0)"
                    : "rotate(0deg) translateY(6px)",
                }}
              />
              <span
                className="absolute top-0 inline-block w-full h-0.5 bg-dark-bg dark:bg-light-bg rounded transition-all ease duration-200"
                style={{
                  opacity: isOpen ? 0 : 1,
                }}
              />
              <span
                className="absolute top-0 inline-block w-full h-0.5 bg-dark-bg dark:bg-light-bg rounded transition-all ease duration-200"
                style={{
                  transform: isOpen
                    ? "rotate(45deg) translateY(0)"
                    : "rotate(0deg) translateY(-6px)",
                }}
              />
            </div>
          </div>
        </button>
        <nav
          className={twMerge(
            "w-max py-3 px-8 border border-solid border-dark-bg dark:border-light-bg rounded-full font-medium capitalize items-center flex sm:hidden transition-all ease duration-300 fixed top-6 right-1/2 translate-x-1/2 bg-light/80 dark:bg-dark-bg bg-white z-40 gap-2",
            isOpen ? "top-6" : "top-[-5rem]"
          )}
        >
          <Link href={`/${currentLocale}`}>
            <p>{t("home")}</p>
          </Link>
          <Link href={`/${currentLocale}/about`}>
            <p>{t("aboutMe")}</p>
          </Link>
          <LanguageSelector
            dynamicLinks={dynamicLinks}
            currentLocale={currentLocale}
          />
        </nav>
        <nav className="w-max py-3 px-8 border border-solid border-dark-bg dark:border-light-bg rounded-full font-medium capitalize items-center hidden sm:flex transition-all ease duration-300 fixed top-6 right-1/2 translate-x-1/2 bg-light/80 dark:bg-dark-bg bg-white z-50 gap-2">
          <Link href={`/${currentLocale}`}>
            <p>{t("home")}</p>
          </Link>
          <Link href={`/${currentLocale}/about`}>
            <p>{t("aboutMe")}</p>
          </Link>
          <LanguageSelector
            dynamicLinks={dynamicLinks}
            currentLocale={currentLocale}
          />
        </nav>
        <ConnectLinks />
      </Container>
    </header>
  );
}
