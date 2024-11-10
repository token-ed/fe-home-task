"use client";

import PeopleContacts from "@/assets/images/contacts.png";
import { MediaObjectProps } from "@/components-dashboard/media-object";
import { Footer } from "@/components/footer";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FaCircleCheck } from "react-icons/fa6";
import { IoIosWarning } from "react-icons/io";

import { RecentContacts } from "./components/recent-contacts";
import { RecentContactsGraph } from "./components/recent-contacts-graph";
import { Spinner } from "./components/spinner";
import { useContacts } from "./hooks/useContacts";

const EmptyStateFeed = dynamic(() => import("./components/forms/empty-state-feed"), {
  ssr: false,
  loading: () => <Spinner />,
});

const MediaObject = dynamic(() => import("@/components-dashboard/media-object"), {
  ssr: false,
  loading: () => <></>,
});

const getBannerConfig = (
  hasContacts: boolean
): Pick<MediaObjectProps, "title"> & { description: JSX.Element } =>
  hasContacts
    ? {
        description: (
          <div className="flex flex-col space-y-4">
            <div className="text-base">
              While we are doing our best to keep your contacts safe and updated it&apos;s good to
              review your contact list once in a while. <br />
              Visit the{" "}
              <Link
                href="/dashboard/contacts"
                className="font-bold text-blue-700 underline hover:text-blue-900 dark:text-blue-300">
                Contacts
              </Link>{" "}
              page and start managing some of your favourite contacts!
            </div>
            <ul className="max-w-md list-inside space-y-1">
              <li className="flex items-center font-bold">
                <FaCircleCheck
                  width={50}
                  height={50}
                  className="mr-2 h-5 w-5 fill-green-700 dark:fill-green-300"
                />
                Contacts added
              </li>
            </ul>
          </div>
        ),
        title: "Welcome back, your contacts are waiting for you",
      }
    : {
        description: (
          <div className="flex flex-col space-y-4">
            <div className="text-base">
              You haven&apos;t added anyone to your contact list yet so you won&apos;t be able to
              see any contacts.
              <br /> Feel free to visit the{" "}
              <Link
                href="/dashboard/contacts"
                className="font-bold text-sky-700/70 underline hover:text-sky-900 dark:text-blue-300 dark:hover:text-sky-900">
                Contacts
              </Link>{" "}
              page and start managing some of your favourite contacts!
            </div>
            <ul className="max-w-md list-inside space-y-1">
              <li className="flex items-center font-bold">
                <IoIosWarning
                  width={50}
                  height={50}
                  className="mr-2 h-5 w-5 text-yellow-600/70 dark:text-yellow-300"
                />
                Contacts missing
              </li>
            </ul>
          </div>
        ),
        title: "Your contact list is still empty",
      };

export default function Dashboard() {
  const { contacts, addContact, isUnique } = useContacts();

  const hasContacts = contacts && contacts.length > 0;

  const { description, title } = getBannerConfig(hasContacts);

  return (
    <section className="container flex flex-col gap-y-8 p-6">
      <MediaObject imageSrc={PeopleContacts} title={title}>
        {description}
      </MediaObject>
      <div className="flex flex-col gap-6 lg:flex-row">
        {hasContacts && (
          <>
            <RecentContacts contacts={contacts} />
            <RecentContactsGraph contacts={contacts} />
          </>
        )}
      </div>

      {!hasContacts && <EmptyStateFeed addContact={addContact} isUnique={isUnique} isDashboard />}
      <Footer />
    </section>
  );
}
