import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import MetricCard from "../components/dashboard/MetricCard";
import ImageHistoryCard from "../components/dashboard/ImageHistoryCard";
import Button from "../components/ui/Button";

import { uploadImage } from "../services/job.services";

import toast from "react-hot-toast";

export default function Dashboard() {
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!image) {
      return toast.error("Select an image first");
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("image", image);
      formData.append("compressionLevel", "medium");
      formData.append("outputFormat", "original");
      formData.append("generateThumbnail", true);

      const response = await uploadImage(formData);

      toast.success("Image uploaded");

      navigate(`/processing/${response.data._id}`);
    } catch (error) {
      toast.error(error.response?.data?.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <h1 className="mb-12 font-heading text-5xl font-bold">Dashboard</h1>

      <div className="mb-10 rounded-xl border border-slate-700 p-6">
        <input type="file" accept="image/*" onChange={handleFileChange} />

        {preview && (
          <img
            src={preview}
            alt="preview"
            className="mt-6 max-h-80 rounded-lg"
          />
        )}

        <Button className="mt-6" onClick={handleUpload} disabled={loading}>
          {loading ? "Uploading..." : "Compress Image"}
        </Button>
      </div>

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
