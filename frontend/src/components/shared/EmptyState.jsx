import { ImageOff } from "lucide-react";
import Button from "../ui/Button";

export default function EmptyState({
  title,
  description,
  buttonText,
  onClick,
}) {
  return (
    <div
      className="
      flex
      flex-col
      items-center
      justify-center
      rounded-2xl
      border
      border-dashed
      border-[#2E354A]
      bg-[#1E2230]
      px-8
      py-20
      text-center
      "
    >
      <ImageOff size={60} className="mb-6 text-slate-500" />

      <h2 className="mb-3 font-heading text-2xl font-bold">{title}</h2>

      <p className="mb-8 max-w-md text-slate-400">{description}</p>

      {buttonText && <Button onClick={onClick}>{buttonText}</Button>}
    </div>
  );
}
