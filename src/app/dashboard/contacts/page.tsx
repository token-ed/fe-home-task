import { Spinner } from "@/components-dashboard/spinner";
import { Footer } from "@/components/footer";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Contacts",
};

const ContactsList = dynamic(() => import("./contacts-list"), {
  loading: () => <Spinner />,
});

export default async function Contacts() {
  return (
    <section className="container flex flex-col justify-between gap-y-8 p-6 sm:h-[calc(100vh-6rem)]">
      <ContactsList />
      <Footer />
    </section>
  );
}
