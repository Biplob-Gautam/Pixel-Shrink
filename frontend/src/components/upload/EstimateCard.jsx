export default function EstimateCard() {
  return (
    <div
      className="
      flex
      flex-col
      justify-center
      rounded-md
      border
      border-(--border)
      bg-(--surface-secondary)
      p-6
      "
    >
      <h3 className="text-xl font-bold">Estimated Output</h3>

      <div className="mt-6 space-y-4">
        <div className="flex justify-between">
          <span>Original Size</span>

          <span>--</span>
        </div>

        <div className="flex justify-between">
          <span>Estimated Size</span>

          <span>--</span>
        </div>

        <div className="flex justify-between font-semibold text-(--secondary)">
          <span>Estimated Saving</span>

          <span>--</span>
        </div>
      </div>
    </div>
  );
}
