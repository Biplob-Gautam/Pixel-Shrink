import MainLayout from "../layouts/MainLayout";

import ComparisonSlider from "../components/result/ComparisonSlider";

import MetricCard from "../components/dashboard/MetricCard";

import Button from "../components/ui/Button";

export default function Result() {
  return (
    <MainLayout>
      <h1 className="mb-14 text-center font-heading text-5xl font-bold">
        Optimization Complete
      </h1>

      <ComparisonSlider
        before="https://placehold.co/700x500"
        after="https://placehold.co/700x500"
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <MetricCard title="Compression" value="74%" subtitle="Space Saved" />

        <MetricCard title="Original" value="4.2MB" subtitle="Input Size" />

        <MetricCard title="Optimized" value="1.1MB" subtitle="Output Size" />
      </div>

      <div className="mt-12 flex justify-center">
        <Button>Download Image</Button>
      </div>
    </MainLayout>
  );
}