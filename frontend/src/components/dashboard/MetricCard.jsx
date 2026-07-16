import Card from "../ui/Card";

export default function MetricCard({ title, value, subtitle }) {
  return (
    <Card>
      <p className="mb-2 text-sm text-slate-400">{title}</p>

      <h2 className="mb-1 font-heading text-4xl font-bold text-white">
        {value}
      </h2>

      <p className="text-sm text-slate-500">{subtitle}</p>
    </Card>
  );
}
