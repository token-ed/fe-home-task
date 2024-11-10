import { Contact } from "@/app/dashboard/helpers/types";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { EditForm, EditFormProps } from "./edit-form";

interface Props extends Contact {
  isOpen: boolean;
  onEditContact: EditFormProps["onEditContact"];
  isUnique: EditFormProps["isUnique"];
  onOpenChange: (open: boolean) => void;
}

export const EditDrawer = ({
  onEditContact,
  onOpenChange,
  email,
  isOpen,
  name,
  uuid,
  gender,
  position,
  isUnique,
}: Props) => {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="h-full max-h-screen w-full space-y-4 overflow-y-scroll p-0 sm:max-w-xl sm:overflow-y-auto">
        <SheetHeader className="px-6 pt-4">
          <SheetTitle>Edit contact: {name}</SheetTitle>
        </SheetHeader>
        <EditForm
          onEditContact={onEditContact}
          email={email}
          name={name}
          uuid={uuid}
          gender={gender}
          position={position}
          isUnique={isUnique}
        />
      </SheetContent>
    </Sheet>
  );
};
