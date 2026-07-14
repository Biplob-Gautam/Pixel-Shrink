import Navbar from "../components/common/Navbar";
import Hero from "../components/upload/Hero";
import UploadCard from "../components/upload/UploadCard";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 pb-20">
        <Hero />

        <UploadCard />
      </main>
    </>
  );
}
