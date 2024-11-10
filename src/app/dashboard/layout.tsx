import { Navigation } from "@/components-dashboard/navigation";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: {
    template: "%s | Contactz",
    default: "Dashboard",
  },
  description: "Manage your contactz!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="max-w-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Navigation />
          <main className="h-fit min-h-[100vh] flex-1 bg-gray-100 pt-24 dark:bg-slate-400 sm:ml-72">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
