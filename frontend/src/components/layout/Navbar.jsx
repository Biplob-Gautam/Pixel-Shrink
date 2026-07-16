import { Link } from "react-router-dom";
import Button from "../ui/Button";
import Logo from "../../shared/Logo";

export default function Navbar() {
  return (
    <header
      className="
      sticky
      top-5
      z-50
      "
    >
      <div
        className="
        page-container

        flex

        items-center

        justify-between

        rounded-full

        border

        border-border

        bg-surface/80

        px-6

        py-3

        backdrop-blur-xl
      "
      >
        <Logo />

        <nav className="flex items-center gap-4">
          <Link to="/" className="text-text-secondary hover:text-white">
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
