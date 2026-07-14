import UploadDropzone from "./UploadDropzone";
import ImagePreview from "./ImagePreview";
import CompressionSettings from "./CompressionSettings";
import EstimateCard from "./EstimateCard";
import OptimizeButton from "./OptimizeButton";

export default function UploadCard() {
  return (
    <section
      className="
      mx-auto
      mt-14
      flex
      w-full
      max-w-6xl
      flex-col
      gap-8
      rounded-lg
      border
      border-(--border)
      bg-(--surface)
      p-8
      shadow-lg
      "
    >
      <UploadDropzone />

      <div className="grid gap-8 lg:grid-cols-2">
        <CompressionSettings />

        <EstimateCard />
      </div>

      <OptimizeButton />
    </section>
  );
}
