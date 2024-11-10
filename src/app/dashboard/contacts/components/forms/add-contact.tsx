"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { LuPlusCircle } from "react-icons/lu";
import { AddContactForm, AddContactFormProps } from "../../../components/forms/add-contact-form";

interface Props {
  addContact: AddContactFormProps["addContact"];
  isUnique: AddContactFormProps["isUnique"];
}

export const AddContact = ({ addContact, isUnique }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            onClick={openDrawer}
            variant="outline"
            size="sm"
            className="flex h-8 gap-x-2 border-dashed border-slate-700 bg-slate-200 py-5 text-base hover:bg-slate-300 dark:border-slate-400 dark:bg-slate-500 dark:hover:bg-slate-700">
            <LuPlusCircle className="h-6 w-6" /> Add contact
          </Button>
        </SheetTrigger>
        <SheetContent className="h-full max-h-screen w-full space-y-4 overflow-y-scroll p-0 sm:max-w-xl sm:overflow-y-auto">
          <SheetHeader onClose={closeDrawer} className="px-6 pt-4">
            <SheetTitle>Add contact</SheetTitle>
          </SheetHeader>
          <AddContactForm onClose={closeDrawer} addContact={addContact} isUnique={isUnique} />
        </SheetContent>
      </Sheet>
    </>
  );
};
