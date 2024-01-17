import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.svg";
import { LocaleType } from "@/i18n/settings";

const Logo = ({ currentLocale }: { currentLocale: LocaleType }) => {
  return (
    <Link
      href={`/${currentLocale}`}
      className="flex items-center text-dark dark:text-light"
    >
      <div className="w-12 rounded-full overflow-hidden mr-2 md:mr-4">
        <Image
          src={logo.src}
          width={100}
          height={50}
          alt="Page Logo"
          className="w-full h-auto rounded-full"
          priority
        />
      </div>
      <span className="font-bold dark:font-semibold text-lg md:text-xl">
        Aesthetic
      </span>
    </Link>
  );
};

export default Logo;
