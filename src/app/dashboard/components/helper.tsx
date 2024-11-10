import { BsFileText } from "react-icons/bs";
import { FiArchive } from "react-icons/fi";
import { MdPersonAddAlt1 } from "react-icons/md";

import React from "react";

interface SideNavigationMenuConfig {
  href: string;
  icon: React.ReactNode;
  isPremium?: boolean;
  tooltip?: React.ReactNode;
  name: string;
}

export const sideNavigationMenuConfiguration: SideNavigationMenuConfig[] = [
  {
    href: "/dashboard/contacts",
    icon: <BsFileText width={25} height={25} />,
    name: "Contacts",
    tooltip: "List & Manage contacts",
  },
  {
    href: "/some-premium-path",
    icon: (
      <MdPersonAddAlt1
        width={25}
        height={25}
        className="group-hover:stroke-black group-hover:stroke-[0.01rem]"
      />
    ),
    name: "External Contacts",
    tooltip: (
      <>
        Coming soon ✨
        <br />
        Integrate contacts from external sources
      </>
    ),
    isPremium: true,
  },
  {
    href: "/some-premium-path-2",
    icon: (
      <FiArchive
        width={25}
        height={25}
        className="group-hover:stroke-black group-hover:stroke-[0.01rem]"
      />
    ),
    name: "Build a Network",
    tooltip: (
      <>
        Coming soon ✨
        <br />
        Build a network of contacts
      </>
    ),
    isPremium: true,
  },
];
