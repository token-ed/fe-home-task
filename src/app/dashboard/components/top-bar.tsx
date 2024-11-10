import Logo from "@/assets/images/logo.svg";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

interface Props {
  onExpand: Dispatch<SetStateAction<boolean>>;
  isExpanded: boolean;
}

export const TopBar = ({ onExpand, isExpanded }: Props) => {
  return (
    <nav className="fixed z-30 flex h-24 w-full items-center border-b border-gray-300 bg-white dark:bg-slate-700">
      <div className="flex w-full items-center justify-between px-5 py-6">
        <div className="flex items-center justify-between text-gray-600 dark:text-white">
          <Button
            variant="ghost"
            className="group mr-6 h-fit w-fit p-2 text-black hover:bg-gray-200 sm:hidden"
            size="icon"
            aria-controls="side-navigation"
            aria-expanded={isExpanded}
            onClick={() => onExpand(!isExpanded)}>
            <RxHamburgerMenu size={25} className="text-black dark:text-white" />
          </Button>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            <Link
              href="/dashboard"
              className="flex items-center gap-x-2 bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
              Contactz
              <Image src={Logo} alt="logo" width={50} className="skew-x-6" />
            </Link>
          </h1>
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
};
