import { UploadCloud } from "lucide-react";

export default function UploadDropzone() {
  return (
    <div
      className="
      flex
      cursor-pointer
      flex-col
      items-center
      justify-center
      rounded-md
      border-2
      border-dashed
      border-(--border)
      bg-(--surface-secondary)
      px-8
      py-20
      transition-all
      duration-300
      hover:border-(--primary)
      "
    >
      <UploadCloud size={60} strokeWidth={1.7} className="text-(--primary)" />

      <h2 className="mt-6 text-2xl font-bold">Drag & Drop your image</h2>

      <p className="mt-3 text-(--text-secondary)">PNG, JPG, JPEG or WEBP</p>

      <button
        className="
        mt-8
        rounded-sm
        bg-(--primary)
        px-6
        py-3
        text-white
        transition
        hover:bg-(--primary-hover)
        "
      >
        Browse Files
      </button>
    </div>
  );
}
