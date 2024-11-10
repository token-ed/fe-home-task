"use client";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full border-none bg-transparent text-gray-500 hover:bg-gray-400 hover:text-white dark:bg-transparent dark:text-gray-200 dark:hover:bg-gray-400 dark:hover:text-gray-200">
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-0 dark:-rotate-90 dark:scale-100" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 dark:rotate-0 dark:scale-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
