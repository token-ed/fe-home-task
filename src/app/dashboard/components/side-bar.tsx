import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { HiOutlineLockClosed } from "react-icons/hi";

import Link from "next/link";
import { sideNavigationMenuConfiguration } from "./helper";

interface Props {
  isExpanded: boolean;
}

export const SideBar = ({ isExpanded }: Props) => {
  const showClass = `${isExpanded ? "w-72" : "w-0"}`;
  return (
    <aside
      id="side-navigation"
      className={`fixed left-0 top-0 z-20 flex h-full shrink-0 flex-col overflow-hidden bg-white pt-24 transition-[width] duration-75 ease-in-out dark:bg-slate-700 ${showClass} sm:w-72`}>
      <div className="flex flex-1 flex-col justify-between border-r-[1px] border-gray-300">
        <div className="flex-1 p-5">
          <TooltipProvider delayDuration={800} skipDelayDuration={500}>
            <ul className="pb-2">
              {sideNavigationMenuConfiguration.map((menu) => (
                <Tooltip delayDuration={0} key={menu.href}>
                  <TooltipTrigger asChild>
                    <li className="relative mt-2">
                      <Button
                        asChild
                        variant="ghost"
                        className="group h-fit w-full justify-start p-2 text-black hover:bg-gray-200 dark:text-white dark:hover:bg-slate-500"
                        size="icon">
                        <Link
                          href={menu.isPremium ? "" : menu.href}
                          aria-disabled={menu.isPremium}
                          className="flex items-center rounded-md py-2 font-medium">
                          {menu.icon}
                          <span className="pl-4 text-base text-gray-700 dark:text-white">
                            {menu.name}
                          </span>
                        </Link>
                      </Button>
                      {menu.isPremium && (
                        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-end rounded-md bg-slate-400/20 p-4 backdrop-blur-sm">
                          <HiOutlineLockClosed width={20} height={20} color="gray" />
                        </div>
                      )}
                    </li>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="bg-slate-700 dark:bg-white">
                    <div className="font-copy pointer-events-none cursor-pointer rounded-lg px-3 py-1 text-sm text-white dark:text-black">
                      <p>{menu.tooltip}</p>
                    </div>
                    <TooltipArrow className="fill-slate-700 dark:fill-white" />
                  </TooltipContent>
                </Tooltip>
              ))}
            </ul>
          </TooltipProvider>
        </div>
        <div className="flex flex-col gap-y-6 px-2">
          <Separator className="bg-gray-300" />
        </div>
      </div>
    </aside>
  );
};
