import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";

import { Link } from "react-router-dom";
import Logo from "../shared/Logo";
import Button from "../ui/Button";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();

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

          {isAuthenticated ? (
            <>
              <Link to="/dashboard">
                <Button variant="secondary">Dashboard</Button>
              </Link>

              <Button onClick={logout}>Logout</Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="secondary">Login</Button>
              </Link>

              <Link to="/register">
                <Button>Get Started</Button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
