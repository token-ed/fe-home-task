"use client";
import { IoPersonAddOutline } from "react-icons/io5";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { AddContactForm, AddContactFormProps } from "./add-contact-form";

interface Props {
  addContact: AddContactFormProps["addContact"];
  isUnique: AddContactFormProps["isUnique"];
  isDashboard?: boolean;
}

const getEmptyStateFeed = (isDashboard: boolean) =>
  isDashboard ? (
    <p className="mb-4 max-w-lg font-medium dark:text-gray-200">
      Quick add your first contact by clicking the button below
    </p>
  ) : (
    <>
      <p className="mb-4 max-w-lg font-light dark:text-gray-200">
        It looks like you haven&apos;t added any contacts yet. Start building your network by adding
        new contacts, so you can easily manage and access all your important connections in one
        place.
      </p>
      <p className="mb-4 font-medium dark:text-white">
        Click the button below to add your first contact.
      </p>
    </>
  );

export default function EmptyStateFeed({ addContact, isUnique, isDashboard = false }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  return (
    <div>
      <div className="max-w-screen-lg text-gray-500 dark:text-gray-400 sm:text-lg">
        <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Your contact list is empty
        </h2>
        {getEmptyStateFeed(isDashboard)}
      </div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <div
            onClick={openDrawer}
            className="group mt-6 flex h-40 max-w-[250px] cursor-pointer flex-col items-center justify-center gap-y-4 rounded-lg border-2 border-dashed border-gray-700 bg-sky-200/50 hover:bg-sky-300/50">
            <IoPersonAddOutline className="h-16 w-16 text-gray-600 group-hover:text-black" />
            <span className="text-xl font-bold text-gray-600 group-hover:text-black">
              Add contact
            </span>
          </div>
        </SheetTrigger>
        <SheetContent className="h-full max-h-screen w-full space-y-4 overflow-y-scroll p-0 sm:max-w-xl sm:overflow-y-auto">
          <SheetHeader onClose={closeDrawer} className="px-6 pt-4">
            <SheetTitle>Add New Contact</SheetTitle>
          </SheetHeader>
          <AddContactForm onClose={closeDrawer} addContact={addContact} isUnique={isUnique} />
        </SheetContent>
      </Sheet>
    </div>
  );
}
