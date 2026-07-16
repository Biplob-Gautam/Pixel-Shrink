export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          bg-linear-to-br
          from-cyan-500
          to-emerald-500
          text-lg
          font-bold
          text-white
        "
      >
        P
      </div>

      <div className="leading-tight">
        <h1 className="font-heading text-xl font-bold tracking-tight text-slate-50">
          PixelShrink
        </h1>

        <p className="text-xs text-slate-400">Image Optimization Platform</p>
      </div>
    </div>
  );
}
