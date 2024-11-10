import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { FaRegPaperPlane } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";
import { Contact } from "../../helpers/types";

interface Props extends Omit<Contact, "uuid"> {
  isOpen: boolean;
  openEditDrawer: () => void;
  openDeleteModal: () => void;
  onOpenChange: (open: boolean) => void;
}

export const DetailsModal = ({
  email,
  name,
  gender,
  position,
  isOpen,
  onOpenChange,
  openEditDrawer,
  openDeleteModal,
}: Props) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="flex h-full max-h-screen flex-col gap-y-8 overflow-y-scroll border-slate-600 bg-gray-300 p-12 dark:border-slate-500 dark:bg-slate-700 sm:h-fit sm:overflow-y-auto">
        <DialogHeader className="flex flex-col items-center">
          <DialogTitle className="mb-4">
            {gender === "male" ? (
              <Avatar className="h-24 w-24">
                <AvatarImage src="/images/avatar-male.png" alt={gender} />
              </Avatar>
            ) : (
              <Avatar className="h-24 w-24">
                <AvatarImage src="/images/avatar-female.png" alt={gender} />
              </Avatar>
            )}
          </DialogTitle>
          <DialogTitle className="text-2xl font-medium text-gray-900 dark:text-white">
            {name}
          </DialogTitle>
          <DialogDescription className="text-md">{position}</DialogDescription>
          <DialogDescription className="flex items-center">
            <Link
              className="text-md mr-1 font-bold hover:text-orange-400 dark:hover:text-orange-400"
              href={`mailto:${email}`}>
              {email}
            </Link>
            <FaRegPaperPlane />
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-col gap-x-2 gap-y-2 sm:flex-row sm:justify-center">
          <Button onClick={openEditDrawer}>Edit contact</Button>
          <Button
            onClick={openDeleteModal}
            className="bg-red-700/70 hover:bg-red-700/90 dark:bg-red-400/70 dark:hover:bg-red-500/70">
            Delete contact
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
