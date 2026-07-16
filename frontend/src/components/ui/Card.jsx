export default function Card({ children, className = "" }) {
  return (
    <div
      className={`
      rounded-card
      border
      border-border
      bg-surface
      p-6
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-primary/40
      ${className}
      `}
    >
      {children}
    </div>
  );
}
