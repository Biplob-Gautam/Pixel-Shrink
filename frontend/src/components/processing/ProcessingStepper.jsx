import { CheckCircle2, LoaderCircle, Circle } from "lucide-react";

const steps = [
  "Uploading image to AWS S3",
  "Compressing image with AWS Lambda",
  "Generating optimized file",
  "Finishing",
];

export default function ProcessingStepper({ currentStep = 1 }) {
  return (
    <div className="space-y-5">
      {steps.map((step, index) => {
        const active = currentStep === index;

        const completed = currentStep > index;

        return (
          <div
            key={step}
            className="flex items-center gap-4 rounded-xl border border-[#2E354A] bg-[#1E2230] p-5"
          >
            {completed ? (
              <CheckCircle2 className="text-emerald-400" size={24} />
            ) : active ? (
              <LoaderCircle className="animate-spin text-cyan-400" size={24} />
            ) : (
              <Circle className="text-slate-500" size={24} />
            )}

            <span
              className={
                completed || active ? "text-slate-100" : "text-slate-500"
              }
            >
              {step}
            </span>
          </div>
        );
      })}
    </div>
  );
}
