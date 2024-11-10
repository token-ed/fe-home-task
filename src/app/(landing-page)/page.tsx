import { LogoTitle } from "@/components/logo-title";
import { ModeToggle } from "@/components/mode-toggle";
import { Hero } from "./components/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      <div className="container">
        <div className="flex items-center justify-between px-4 py-8">
          <LogoTitle />
          <ModeToggle />
        </div>
        <Hero />
      </div>
    </main>
  );
}
