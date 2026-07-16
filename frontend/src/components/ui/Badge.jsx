export default function Badge({ children }) {
  return (
    <span
      className="
      inline-flex
      items-center
      rounded-full
      border
      border-primary/40
      bg-primary/10
      px-4
      py-1
      text-sm
      text-primary
      "
    >
      {children}
    </span>
  );
}
