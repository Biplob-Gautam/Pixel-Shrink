export default function CompressionSettings() {
  return (
    <div className="space-y-6">
      <div>
        <label className="mb-2 block font-semibold">Compression</label>

        <select
          className="
          w-full
          rounded-xl
          border
          border-(--border)
          bg-(--surface)
          px-4
          py-3
          "
        >
          <option>Low</option>

          <option selected>Medium</option>

          <option>High</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block font-semibold">Output Format</label>

        <select
          className="
          w-full
          rounded-xl
          border
          border-(--border)
          bg-(--surface)
          px-4
          py-3
          "
        >
          <option>Original</option>

          <option>JPEG</option>

          <option>PNG</option>

          <option>WEBP</option>
        </select>
      </div>
    </div>
  );
}
