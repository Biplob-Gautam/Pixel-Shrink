import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-(--border) bg-(--surface)/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="PixelShrink" className="h-11 w-11" />

          <span className="hero-font text-2xl font-bold">PixelShrink</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/login"
            className="font-medium text-(--text-secondary) transition hover:text-(--primary)"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-(--primary) px-5 py-2 text-white transition hover:bg-(--primary-hover)"
          >
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
}
