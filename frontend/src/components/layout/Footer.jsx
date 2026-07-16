import Logo from "../../shared/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="page-container flex flex-col items-center justify-between gap-6 md:flex-row">
        <Logo />

        <p className="text-sm text-text-secondary">
          Built with React, Express, MongoDB & AWS
        </p>
      </div>
    </footer>
  );
}
