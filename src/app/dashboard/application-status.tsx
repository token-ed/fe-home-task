"use client";
import PeopleContacts from "@/assets/images/contacts.png";
import { MediaObject, MediaObjectProps } from "@/components-dashboard/media-object";
import Link from "next/link";
import { FaCircleCheck } from "react-icons/fa6";

import { IoWarningOutline } from "react-icons/io5";

import { AddContactButtonDashboard } from "./components/forms/add-contact-button-dashboard";
import { useContacts } from "./hooks/useContacts";

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
                <IoWarningOutline width={50} height={50} className="mr-2 h-5 w-5" />
                Contacts missing
              </li>
            </ul>
          </div>
        ),
        title: "Your contact list is still empty",
      };

export const ApplicationStatus = () => {
  const { contacts, addContact } = useContacts();

  const { description, title } = getBannerConfig(contacts && contacts.length > 0);

  return (
    <>
      <MediaObject imageSrc={PeopleContacts} title={title}>
        {description}
      </MediaObject>
      <AddContactButtonDashboard addContact={addContact} />
    </>
  );
};
