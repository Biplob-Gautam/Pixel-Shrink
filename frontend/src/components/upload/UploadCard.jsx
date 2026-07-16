import { useState } from "react";

import Card from "../ui/Card";
import Button from "../ui/Button";

import UploadDropzone from "./UploadDropzone";
import UploadOptions from "./UploadOptions";

export default function UploadCard() {
  const [selectedFile, setSelectedFile] = useState(null);

  const [options, setOptions] = useState({
    compression: "medium",

    format: "webp",

    width: "",

    height: "",

    thumbnail: true,
  });

  const handleUpload = () => {
    console.log(selectedFile);
    console.log(options);

    // axios call tomorrow
  };

  return (
    <Card className="grid gap-10 lg:grid-cols-2">
      <UploadDropzone
        selectedFile={selectedFile}
        onFileChange={setSelectedFile}
      />

      <div className="flex flex-col">
        <UploadOptions options={options} setOptions={setOptions} />

        <Button className="mt-8 w-full" onClick={handleUpload}>
          Compress Image
        </Button>
      </div>
    </Card>
  );
}
