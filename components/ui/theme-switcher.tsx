import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon } from "lucide-react";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [checkedOn, setCheckedOn] = useState<boolean>();

  useEffect(() => {
    setCheckedOn(theme === "dark");
  }, [theme]);

  return (
    <div className="fixed top-10 right-20 z-10 flex flex-row gap-4 items-center">
      <Sun />
      <Switch
        checked={checkedOn}
        onCheckedChange={() => {
          setTheme(theme === "dark" ? "light" : "dark");
          setCheckedOn(!checkedOn);
        }}
      />
      <Moon />
    </div>
  );
};
