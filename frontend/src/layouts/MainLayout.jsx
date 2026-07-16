import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Toaster } from "react-hot-toast";

export default function MainLayout({ children }) {
  return (
    <div className="app-background">
      <div className="glow-left" />

      <div className="glow-right" />

      <Navbar />

      <main className="page-container pt-10 pb-16">{children}</main>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
        }}
      />

      <Footer />
    </div>
  );
}
