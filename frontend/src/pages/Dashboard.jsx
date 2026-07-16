import MainLayout from "../layouts/MainLayout";

import MetricCard from "../components/dashboard/MetricCard";

import ImageHistoryCard from "../components/dashboard/ImageHistoryCard";

export default function Dashboard() {
  return (
    <MainLayout>
      <h1 className="mb-12 font-heading text-5xl font-bold">Dashboard</h1>

      <div className="mb-12 grid gap-6 md:grid-cols-3">
        <MetricCard title="Images" value="28" subtitle="Processed" />

        <MetricCard title="Storage Saved" value="1.4GB" subtitle="Bandwidth" />

        <MetricCard
          title="Average Compression"
          value="72%"
          subtitle="Efficiency"
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        <ImageHistoryCard
          image="https://placehold.co/500x300"
          filename="mountains.png"
          originalSize="4.2MB"
          compressedSize="1.1MB"
          saved="74%"
        />
      </div>
    </MainLayout>
  );
}
