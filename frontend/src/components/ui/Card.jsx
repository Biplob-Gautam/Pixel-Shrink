export default function Card({ children, className = "" }) {
  return (
    <div
      className={`
      rounded-2xl
      border
      border-[#2E354A]
      bg-[#1E2230]
      p-6
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-cyan-500/40
      ${className}
      `}
    >
      {children}
    </div>
  );
}
