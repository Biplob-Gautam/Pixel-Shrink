export default function Input({ label, error, className = "", ...props }) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium text-text-secondary">
          {label}
        </label>
      )}

      <input
        className={`
          w-full
          rounded-input
          border
          border-border
          bg-background
          px-4
          py-3
          text-white
          placeholder:text-text-secondary
          outline-none
          transition-all
          duration-300
          focus:border-primary
          focus:ring-2
          focus:ring-primary/25
          ${className}
        `}
        {...props}
      />

      {error && <p className="text-sm text-danger">{error}</p>}
    </div>
  );
}
