import { Navigation } from "@/components-dashboard/navigation";
import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";
export const metadata = {
  title: {
    template: "%s | Contactz",
    default: "Contactz",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="max-w-full">
        <NextTopLoader height={5} color="#3965b8" showSpinner={false} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Navigation />
          <main className="h-fit min-h-[100vh] flex-1 bg-gray-100 pt-24 dark:bg-slate-400 sm:ml-72">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
