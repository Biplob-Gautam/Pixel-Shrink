import MainLayout from "../layouts/MainLayout";

import UploadCard from "../components/upload/UploadCard";

import FeatureCard from "../components/shared/FeatureCard";

import { Cloud, Gauge, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <MainLayout>
      <section className="mx-auto mb-20 max-w-4xl text-center">
        <h1 className="mb-6 font-heading text-6xl font-bold leading-tight">
          Optimize images
          <span className="text-gradient"> without compromising quality</span>
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-slate-400">
          Upload once. Compress instantly. Powered by AWS S3 & Lambda.
        </p>

        <UploadCard />
      </section>

      <section className="grid gap-8 md:grid-cols-3">
        <FeatureCard
          icon={Gauge}
          title="Lightning Fast"
          description="Serverless image optimization using AWS Lambda."
        />

        <FeatureCard
          icon={Cloud}
          title="Cloud Native"
          description="Images securely stored inside Amazon S3."
        />

        <FeatureCard
          icon={ShieldCheck}
          title="Privacy First"
          description="Guest uploads automatically expire after processing."
        />
      </section>
    </MainLayout>
  );
}
