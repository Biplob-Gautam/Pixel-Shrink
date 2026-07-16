import Card from "../ui/Card";

export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <Card
      className="
      group
      h-full
      transition-all
      duration-300
      hover:border-cyan-500/50
      "
    >
      <div
        className="
        mb-5
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        bg-cyan-500/10
        transition-all
        duration-300
        group-hover:bg-cyan-500/20
        "
      >
        <Icon size={28} className="text-cyan-400" />
      </div>

      <h3 className="mb-3 font-heading text-xl font-semibold text-slate-50">
        {title}
      </h3>

      <p className="leading-7 text-slate-400">{description}</p>
    </Card>
  );
}
