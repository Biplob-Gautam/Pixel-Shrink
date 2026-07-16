export default function Footer() {
  return (
    <footer className="border-t border-[#2E354A] py-10">
      <div className="page-container flex flex-col items-center justify-between gap-5 md:flex-row">
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
