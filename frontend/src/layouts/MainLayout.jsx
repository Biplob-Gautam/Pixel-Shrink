import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="app-background">
      <div className="glow-left" />

      <div className="glow-right" />

      <Navbar />

      <main className="page-container py-16">{children}</main>

      <Footer />
    </div>
  );
}
