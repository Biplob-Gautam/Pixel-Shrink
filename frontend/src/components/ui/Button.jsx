export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-gradient-to-r from-primary to-secondary text-white hover:brightness-110",

    secondary:
      "border border-border bg-surface text-white hover:border-primary",

    ghost:
      "text-text-secondary hover:text-white",
  };

  return (
    <button
      className={`
      rounded-button
      px-6
      py-3
      font-medium
      transition-all
      duration-300
      ${variants[variant]}
      ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}