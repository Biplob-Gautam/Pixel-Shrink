import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

export default function ImageHistoryCard({
  image,
  filename,
  originalSize,
  compressedSize,
  saved,
}) {
  return (
    <Card>
      <img
        src={image}
        alt={filename}
        className="mb-5 aspect-video rounded-xl object-cover"
      />

      <div className="mb-4 flex items-center justify-between">
        <h3 className="truncate font-medium">{filename}</h3>

        <Badge>{saved}</Badge>
      </div>

      <div className="mb-6 flex justify-between text-sm text-slate-400">
        <span>{originalSize}</span>

        <span>{compressedSize}</span>
      </div>

      <Button className="w-full">Download</Button>
    </Card>
  );
}
