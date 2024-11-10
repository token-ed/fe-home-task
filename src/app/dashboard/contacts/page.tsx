import dynamic from "next/dynamic";
import { Spinner } from "../components/spinner";

const ContactsClient = dynamic(() => import("./contacts-client"), {
  loading: () => <Spinner />,
});

export default async function Contacts() {
  return (
    <div className="container mx-auto py-10">
      <ContactsClient />
    </div>
  );
}
