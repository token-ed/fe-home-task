import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Spinner } from "../components/spinner";

export const metadata: Metadata = {
  title: "Contacts",
};

const ContactsClient = dynamic(() => import("./contacts-client"), {
  loading: () => <Spinner />,
});

export default async function Contacts() {
  return (
    <section className="container mx-auto py-10">
      <ContactsClient />
    </section>
  );
}
