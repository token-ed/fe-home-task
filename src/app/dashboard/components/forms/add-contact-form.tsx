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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Position } from "../../helpers/types";
import { FormSchema, formSchema } from "../../hooks/useContacts";

interface Option {
  value: string;
  label: ReactNode;
}

const newObj = { ...Position };
const PositionProperties = Object.getOwnPropertyNames(
  newObj
) as unknown as (keyof typeof Position)[];

export const positionOptions: Option[] = PositionProperties.map((property) => ({
  value: Position[property],
  label: Position[property],
}));

export interface AddContactFormProps {
  onClose: () => void;
  addContact: (data: FormSchema) => void;
  isUnique?: (email: string, uuid?: string) => boolean;
}

export const AddContactForm = ({ onClose, addContact, isUnique }: AddContactFormProps) => {
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
    if (!isUnique?.(values.email)) {
      toast({
        duration: 3000,
        variant: "destructive",
        title: `Some user already exists with email ${values.email}`,
        description: `Please try again with a different email`,
      });
      return;
    }

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
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender (optional)</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your gender" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>Male is the default if not selected</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Position (optional)</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="What is your position in the company?" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {positionOptions.map((option) => (
                    <SelectItem value={option.value} key={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
