export default function Badge({ children }) {
  return (
    <span
      className="
      inline-flex
      rounded-full
      border
      border-cyan-500/30
      bg-cyan-500/10
      px-4
      py-1
      text-sm
      text-cyan-400
      "
    >
      {children}
    </span>
  );
}
