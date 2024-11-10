"use client";
import { IoPersonAddOutline } from "react-icons/io5";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { AddContactForm, AddContactFormProps } from "./add-contact-form";

interface Props {
  addContact: AddContactFormProps["addContact"];
}

export const AddContactButtonDashboard = ({ addContact }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <div
            onClick={openDrawer}
            className="group mt-6 flex h-40 w-full cursor-pointer flex-col items-center justify-center gap-y-4 rounded-lg border-2 border-dashed border-gray-700 bg-sky-200/50 hover:bg-sky-300/50">
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
          <AddContactForm onClose={closeDrawer} addContact={addContact} />
        </SheetContent>
      </Sheet>
    </>
  );
};
