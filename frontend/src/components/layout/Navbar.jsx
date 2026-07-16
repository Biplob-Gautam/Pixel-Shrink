import { Link } from "react-router-dom";
import Logo from "../shared/Logo";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#2E354A]/60 bg-[#12141C]/80 backdrop-blur-xl">
      <div className="page-container flex h-20 items-center justify-between">
        <Logo />

        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            How it Works
          </Link>

          <Link to="/login">
            <Button variant="secondary">Sign In</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
