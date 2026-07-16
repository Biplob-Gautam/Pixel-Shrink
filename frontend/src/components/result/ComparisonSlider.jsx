import Card from "../ui/Card";

export default function ComparisonSlider({ before, after }) {
  return (
    <Card>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="mb-4 text-center font-semibold text-slate-300">
            Original
          </h3>

          <img src={before} alt="Original" className="rounded-xl" />
        </div>

        <div>
          <h3 className="mb-4 text-center font-semibold text-cyan-400">
            Optimized
          </h3>

          <img src={after} alt="Optimized" className="rounded-xl" />
        </div>
      </div>
    </Card>
  );
}
