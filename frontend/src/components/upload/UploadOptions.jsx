import Select from "../ui/Select";
import Toggle from "../ui/Toggle";
import Input from "../ui/Input";

export default function UploadOptions({ options, setOptions }) {
  return (
    <div className="space-y-6">
      <Select
        label="Compression"
        value={options.compression}
        onChange={(e) =>
          setOptions((prev) => ({
            ...prev,
            compression: e.target.value,
          }))
        }
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </Select>

      <Select
        label="Output Format"
        value={options.format}
        onChange={(e) =>
          setOptions((prev) => ({
            ...prev,
            format: e.target.value,
          }))
        }
      >
        <option value="original">Original</option>

        <option value="jpeg">JPEG</option>

        <option value="png">PNG</option>

        <option value="webp">WEBP</option>
      </Select>

      <Input
        label="Resize Width"
        type="number"
        placeholder="Optional"
        value={options.width}
        onChange={(e) =>
          setOptions((prev) => ({
            ...prev,
            width: e.target.value,
          }))
        }
      />

      <Input
        label="Resize Height"
        type="number"
        placeholder="Optional"
        value={options.height}
        onChange={(e) =>
          setOptions((prev) => ({
            ...prev,
            height: e.target.value,
          }))
        }
      />

      <Toggle
        checked={options.thumbnail}
        label="Generate Thumbnail"
        onChange={() =>
          setOptions((prev) => ({
            ...prev,
            thumbnail: !prev.thumbnail,
          }))
        }
      />
    </div>
  );
}
