// import MainLayout from "../layouts/MainLayout";

// import ComparisonSlider from "../components/result/ComparisonSlider";

// import MetricCard from "../components/dashboard/MetricCard";

// import Button from "../components/ui/Button";

// export default function Result() {
//   return (
//     <MainLayout>
//       <h1 className="mb-14 text-center font-heading text-5xl font-bold">
//         Optimization Complete
//       </h1>

//       <ComparisonSlider
//         before="https://placehold.co/700x500"
//         after="https://placehold.co/700x500"
//       />

//       <div className="mt-10 grid gap-6 md:grid-cols-3">
//         <MetricCard title="Compression" value="74%" subtitle="Space Saved" />

//         <MetricCard title="Original" value="4.2MB" subtitle="Input Size" />

//         <MetricCard title="Optimized" value="1.1MB" subtitle="Output Size" />
//       </div>

//       <div className="mt-12 flex justify-center">
//         <Button>Download Image</Button>
//       </div>
//     </MainLayout>
//   );
// }

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import ComparisonSlider from "../components/result/ComparisonSlider";
import MetricCard from "../components/dashboard/MetricCard";
import Button from "../components/ui/Button";

import { getJob } from "../services/job.services";

export default function Result() {
  const { jobId } = useParams();

  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      const response = await getJob(jobId);
      setJob(response.data);
    };

    fetchJob();
  }, [jobId]);

  if (!job) {
    return (
      <MainLayout>
        <h1 className="text-center text-3xl">Loading...</h1>
      </MainLayout>
    );
  }

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
        <MetricCard
          title="Status"
          value={job.status}
          subtitle="Current State"
        />

        <MetricCard
          title="Original"
          value={`${(job.originalImage.size / 1024).toFixed(1)} KB`}
          subtitle="Input Size"
        />

        <MetricCard
          title="Type"
          value={job.originalImage.mimeType}
          subtitle="Image Format"
        />
      </div>

      <div className="mt-12 flex justify-center">
        <Button disabled>Download (Coming Soon)</Button>
      </div>
    </MainLayout>
  );
}
