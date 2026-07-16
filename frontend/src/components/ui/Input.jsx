import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, error, className = "", ...props },
  ref,
) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium text-slate-300">{label}</label>
      )}

      <input
        ref={ref}
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
          duration-300
          placeholder:text-slate-500
          focus:border-cyan-500
          focus:ring-2
          focus:ring-cyan-500/20
          ${className}
        `}
        {...props}
      />

      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  );
});

export default Input;
