"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Role } from "../../helpers/types";

const formSchema = z.object({
  name: z.string().min(2).max(30),
  email: z.string().email(),
  gender: z.enum(["male", "female"]),
  position: z.nativeEnum(Role).optional(),
});

type FormSchema = z.infer<typeof formSchema>;

export interface AddContactFormProps {
  onClose: () => void;
  addContact: (data: FormSchema) => void;
}

export const AddContactForm = ({ onClose, addContact }: AddContactFormProps) => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    defaultValues: {
      email: "",
      gender: "male",
      name: "",
      position: undefined,
    },
  });

  const onSubmit = (values: FormSchema) => {
    addContact(values);
    onClose();
    toast({
      duration: 3000,
      variant: "success",
      title: "Contact successfully added!",
      description: `${values.name} is now part of your contact list`,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 px-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Contact name" {...field} />
              </FormControl>
              <FormDescription>
                This is the contact public display name (first name works best)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
