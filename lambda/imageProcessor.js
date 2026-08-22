import sharp from "sharp";

export const processImage = async (buffer) => {
  const processedBuffer = await sharp(buffer)
    .resize({
      width: 1200,
      withoutEnlargement: true,
    })
    .jpeg({
      quality: 70,
    })
    .toBuffer();

  const thumbnailBuffer = await sharp(buffer)
    .resize({
      width: 300,
      withoutEnlargement: true,
    })
    .jpeg({
      quality: 60,
    })
    .toBuffer();

  return {
    processedBuffer,
    thumbnailBuffer,
  };
};
