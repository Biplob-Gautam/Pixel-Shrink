export default function Select({ label, children, className = "", ...props }) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium text-slate-300">{label}</label>
      )}

      <select
        className={`
        w-full
        rounded-xl
        border
        border-[#2E354A]
        bg-[#12141C]
        px-4
        py-3
        text-slate-50
        outline-none
        transition-all
        focus:border-cyan-500
        focus:ring-2
        focus:ring-cyan-500/20
        ${className}
        `}
        {...props}
      >
        {children}
      </select>
    </div>
  );
}
