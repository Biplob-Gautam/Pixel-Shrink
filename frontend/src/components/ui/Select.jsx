export default function Select({ label, children, className = "", ...props }) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium text-text-secondary">
          {label}
        </label>
      )}

      <select
        className={`
        w-full
        rounded-input
        border
        border-border
        bg-background
        px-4
        py-3
        text-white
        outline-none
        transition-all
        duration-300
        focus:border-primary
        focus:ring-2
        focus:ring-primary/25
        ${className}
        `}
        {...props}
      >
        {children}
      </select>
    </div>
  );
}
