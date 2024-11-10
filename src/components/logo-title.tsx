"use client";
import Logo from "@/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const LogoTitle = () => {
  const pathname = usePathname();

  return (
    <div className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
      <Link
        href={pathname === "/" ? "/" : "/dashboard"}
        className="flex w-fit items-center gap-x-2 bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
        Contactz
        <Image src={Logo} alt="logo" width={50} className="skew-x-6" />
      </Link>
    </div>
  );
};
