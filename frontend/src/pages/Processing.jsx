import MainLayout from "../layouts/MainLayout";

import ProcessingStepper from "../components/processing/ProcessingStepper";

export default function Processing() {
  return (
    <MainLayout>
      <section className="mx-auto max-w-2xl">
        <h1 className="mb-4 text-center font-heading text-5xl font-bold">
          Processing your image
        </h1>

        <p className="mb-12 text-center text-slate-400">
          Please don't close this window.
        </p>

        <ProcessingStepper currentStep={1} />
      </section>
    </MainLayout>
  );
}
