import { ImagePlus } from "lucide-react";

export default function UploadDropzone({ selectedFile, onFileChange }) {
  return (
    <label
      className="
      flex
      cursor-pointer
      flex-col
      items-center
      justify-center
      rounded-2xl
      border-2
      border-dashed
      border-cyan-500/40
      bg-[#12141C]
      px-8
      py-12
      transition-all
      hover:border-cyan-400
      hover:bg-[#161925]
      "
    >
      <input
        type="file"
        accept="image/*"
        hidden
        onChange={(e) => onFileChange(e.target.files[0])}
      />

      <ImagePlus size={56} className="mb-5 text-cyan-400" />

      <h3 className="font-heading text-xl font-semibold">Drag & Drop Image</h3>

      <p className="mt-2 text-center text-sm text-slate-400">
        PNG • JPEG • WEBP
      </p>

      <p className="mt-1 text-xs text-slate-500">Maximum 16MB</p>

      {selectedFile && (
        <div className="mt-6 rounded-xl bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
          {selectedFile.name}
        </div>
      )}
    </label>
  );
}
