import { Metadata } from "next";
import { ApplicationStatus } from "./application-status";

export const metadata: Metadata = {
  title: "Dashboard | Contactz",
};

export default function Dashboard() {
  return (
    <section className="container flex flex-col p-6 sm:h-[calc(100vh-6rem)]">
      <ApplicationStatus />
      <h2 className="mt-auto text-right text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        <p className="bg-gradient-to-r text-sky-400 dark:text-sky-200">Contactz</p>
        <p className="text-xl text-gray-600 dark:text-gray-200">
          Simplify, Manage, and Grow Your Network.
        </p>
      </h2>
    </section>
  );
}
