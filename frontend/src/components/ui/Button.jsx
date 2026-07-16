export default function Button({
  children,
  variant = "primary",
  type = "button",
  className = "",
  ...props
}) {
  const styles = {
    primary:
      "bg-linear-to-r from-cyan-500 to-emerald-500 text-white hover:brightness-110",

    secondary:
      "border border-[#2E354A] bg-[#1E2230] text-slate-100 hover:border-cyan-500",

    ghost: "text-slate-400 hover:text-white",
  };

  return (
    <button
      type={type}
      className={`
        rounded-xl
        px-6
        py-3
        font-medium
        transition-all
        duration-300
        ${styles[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
