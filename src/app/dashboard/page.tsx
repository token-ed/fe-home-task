import dynamic from "next/dynamic";
import { BannerClient } from "./banner-client";
import { Spinner } from "./components/spinner";

const ContactsClient = dynamic(() => import("./contacts/contacts-client"), {
  ssr: false,
  loading: () => <Spinner />,
});

export default function Dashboard() {
  return (
    <section className="container flex flex-col items-center justify-between">
      <div className="p-6">
        <BannerClient />
        <h2 className="my-8 text-right text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          <p className="bg-gradient-to-r text-sky-400 dark:text-sky-200">Contactz</p>
          <p className="text-xl text-gray-600 dark:text-gray-200">
            Simplify, Manage, and Grow Your Network.
          </p>
        </h2>
      </div>
    </section>
  );
}
