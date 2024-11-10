import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export const Hero = () => {
  return (
    <section className="px-4 py-8">
      <div className="mx-auto flex max-w-screen-xl flex-col-reverse items-center justify-between lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
            Professional tools to manage contacts
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            From adding, editing, deleting: keep track of all your contacts and build your network
            of people
          </p>
          <div className="flex w-full items-center justify-between gap-x-8 lg:justify-start">
            <Link href="/dashboard" className="flex items-center gap-x-2 hover:text-blue-600">
              Go to dashboard <FaArrowRight />
            </Link>

            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Speak to Sales
            </Link>
          </div>
        </div>
        <Image width={500} height={500} src="/images/network.png" alt="mockup" />
      </div>
    </section>
  );
};
