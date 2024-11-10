import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useMemo } from "react";
import { Contact } from "../helpers/types";

interface Props {
  contacts: Contact[];
}

const formatTime = (date: Contact["updatedAt"]) => {
  const auxDate = new Date(date || "");

  const formattedDate = auxDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const formattedTime = auxDate.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return `${formattedDate} ${formattedTime}`;
};

export const RecentContacts = ({ contacts }: Props) => {
  const latestContacts = useMemo(
    () =>
      [...contacts]
        .sort((a: Contact, b: Contact) => {
          const updatedAtB = new Date(b.updatedAt || "");
          const updatedAtA = new Date(a.updatedAt || "");
          return updatedAtB.getTime() - updatedAtA.getTime();
        })
        .slice(0, 5),
    [contacts]
  );

  return (
    <div className="rounded-md border border-gray-500 p-4 md:min-w-96">
      <p className="w-full rounded bg-slate-500 p-2 text-center text-xl font-medium text-white">
        Recent contacts
      </p>
      <div className="flex w-full justify-end pt-4 text-base font-semibold">
        <span>Updated</span>
      </div>

      <ul className="divide-y divide-gray-500">
        {latestContacts.map((latestContact) => (
          <li key={latestContact.uuid} className="pb-2 pt-3 sm:pt-4">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex-shrink-0">
                {latestContact.gender === "male" ? (
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/images/avatar-male.png" alt={latestContact.gender} />
                  </Avatar>
                ) : (
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/images/avatar-female.png" alt={latestContact.gender} />
                  </Avatar>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                  {latestContact.name}
                </p>
                <p className="truncate text-sm font-bold text-gray-700 dark:text-gray-200">
                  {latestContact.email}
                </p>
              </div>
              <div className="inline-flex items-center text-sm text-gray-900 dark:text-white">
                {formatTime(latestContact.updatedAt)}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
