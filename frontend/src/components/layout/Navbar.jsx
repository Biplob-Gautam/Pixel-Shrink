import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Logo from "../shared/Logo";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header
      className={
        "sticky top-0 z-50 border-b transition-all duration-300 border-transparent bg-transparent"
      }
    >
      <div className="page-container flex h-20 items-center justify-between">
        <Logo />

        <nav className="flex items-center gap-3">
          <Link
            to="/"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            How it works
          </Link>

          <Link to="/login">
            <Button variant="secondary">Login</Button>
          </Link>
          <Link to="/register">
            <Button variant="secondary">Get Started</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
