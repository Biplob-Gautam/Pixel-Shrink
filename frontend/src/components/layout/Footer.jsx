export default function Footer() {
  return (
    <footer className="border-t border-[#2E354A] py-10">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} PixelShrink
        </p>

        <p className="text-sm text-slate-500">
          React • Express • MongoDB • AWS S3 • Lambda
        </p>
      </div>
    </footer>
  );
}
