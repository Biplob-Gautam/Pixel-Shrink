import { Box } from "lucide-react";

export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className="flex h-11 w-11 items-center justify-center rounded-xl
        bg-linear-to-br from-primary to-secondary shadow-lg"
      >
        <Box size={22} className="text-white" />
      </div>

      <div>
        <h1 className="font-heading text-xl font-bold tracking-tight">
          PixelShrink
        </h1>

        <p className="text-xs text-text-secondary">
          Image Optimization Platform
        </p>
      </div>
    </div>
  );
}
