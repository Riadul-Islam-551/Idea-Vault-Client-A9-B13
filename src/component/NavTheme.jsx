"use client";

import { Button } from "@heroui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function NavTheme() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Button variant="outline"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className=" border-none  "
      >
        {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
      </Button>
    </div>
  );
}
