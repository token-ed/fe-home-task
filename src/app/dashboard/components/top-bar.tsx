import { LogoTitle } from "@/components/logo-title";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
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
          <LogoTitle />
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
};
