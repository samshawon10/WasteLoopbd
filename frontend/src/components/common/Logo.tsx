
import { Leaf } from "lucide-react";

interface LogoProps {
  variant?: "dark" | "light";
}

export default function Logo({ variant = "dark" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <a href="/" className="flex items-center gap-2">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-700 text-white">
        <Leaf size={23} />
      </span>

      <span
        className={`text-xl font-bold tracking-tight ${
          isLight ? "text-white" : "text-green-950"
        }`}
      >
        WasteLoop
        <span className="text-green-500">BD</span>
      </span>
    </a>
  );
}
