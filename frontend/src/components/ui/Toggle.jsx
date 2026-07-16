export default function Toggle({ checked, onChange, label }) {
  return (
    <label className="flex items-center justify-between">
      <span className="text-sm text-text-secondary">{label}</span>

      <button
        type="button"
        onClick={onChange}
        className={`
          relative
          h-7
          w-12
          rounded-full
          transition-all
          duration-300

          ${checked ? "bg-primary" : "bg-border"}
        `}
      >
        <span
          className={`
            absolute
            top-1
            h-5
            w-5
            rounded-full
            bg-white
            transition-all

            ${checked ? "left-6" : "left-1"}
          `}
        />
      </button>
    </label>
  );
}
