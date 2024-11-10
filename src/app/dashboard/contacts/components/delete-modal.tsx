import { IoIosWarning } from "react-icons/io";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Contact } from "../../helpers/types";

interface Props extends Contact {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onCancel: () => void;
  onDelete: () => void;
}

export const DeleteModal = ({ isOpen, onOpenChange, onCancel, onDelete, name, email }: Props) => {
  return (
    <>
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent className="flex h-full max-h-screen flex-col gap-y-8 overflow-y-scroll border-slate-600 bg-gray-300 p-12 dark:border-slate-500 dark:bg-slate-700 sm:h-fit sm:overflow-y-auto">
          <DialogHeader className="flex flex-col items-center">
            <DialogTitle className="mb-4 h-16 w-16 rounded-md bg-gray-400 p-2 dark:bg-gray-900">
              <IoIosWarning className="h-12 w-12" />
            </DialogTitle>
            <DialogDescription className="text-center text-lg">
              Are you sure you want to delete <span className="font-bold">{name}</span> (
              <span className="text-blue-500">{email}</span>) from your contacts list?
            </DialogDescription>
          </DialogHeader>
          <DialogDescription className="text-md text-center font-bold text-gray-700">
            This action cannot be undone
          </DialogDescription>
          <DialogFooter className="flex gap-x-2 gap-y-2 sm:flex-row sm:justify-center">
            <Button onClick={onCancel}>No, cancel</Button>
            <Button
              onClick={onDelete}
              className="bg-red-700/70 hover:bg-red-700/90 dark:bg-red-400/70 dark:hover:bg-red-500/70">
              Yes, delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
