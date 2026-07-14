export default function Hero() {
  return (
    <section className="mx-auto mt-16 flex max-w-4xl flex-col items-center text-center">
      <span className="mb-5 rounded-full border border-(--border) bg-(--surface) px-4 py-2 text-sm text-(--text-secondary) shadow-sm">
        ☁ AWS Powered Image Compression
      </span>

      <h1 className="hero-font text-6xl font-bold leading-tight">
        Compress Images
        <br />
        Without Compromise.
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-(--text-secondary)">
        Optimize, resize and convert images using Amazon S3 and AWS Lambda.
      </p>
    </section>
  );
}
