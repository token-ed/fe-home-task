import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { PropsWithChildren } from "react";

export interface MediaObjectProps {
  imageSrc: StaticImport;
  title: string;
}

export const MediaObject = ({ imageSrc, title, children }: PropsWithChildren<MediaObjectProps>) => (
  <div className="mx-auto w-full rounded-md bg-gray-300 p-12 dark:bg-slate-500">
    <div className="flex flex-col gap-8 md:flex-row">
      <Image src={imageSrc} alt="logo" className="h-24 w-24" />
      <section className="flex-1">
        <h4 className="mb-4 text-xl font-medium">{title}</h4>
        <span className="mt-1">{children}</span>
      </section>
    </div>
  </div>
);
