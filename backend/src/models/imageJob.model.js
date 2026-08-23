import mongoose from "mongoose";

const imageJobSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    isGuest: {
      type: Boolean,
      default: true,
    },

    status: {
      type: String,
      enum: ["UPLOADING", "PROCESSING", "COMPLETED", "FAILED"],
      default: "UPLOADING",
    },

    originalImage: {
      key: {
        type: String,
        default: "",
      },
      size: Number,
      mimeType: String,
      width: Number,
      height: Number,
    },

    processedImage: {
      key: String,
      size: Number,
      width: Number,
      height: Number,
    },

    thumbnail: {
      key: String,
      size: Number,
    },

    processingOptions: {
      compressionLevel: {
        type: String,
        enum: ["low", "medium", "high"],
        default: "medium",
      },

      outputFormat: {
        type: String,
        enum: ["original", "jpeg", "png", "webp"],
        default: "original",
      },

      resize: {
        enabled: {
          type: Boolean,
          default: false,
        },

        width: Number,

        height: Number,
      },

      generateThumbnail: {
        type: Boolean,
        default: true,
      },
    },

    compressionRatio: {
      type: Number,
      default: 0,
    },

    processingStartedAt: Date,

    processingCompletedAt: Date,

    expiresAt: Date,
  },
  {
    timestamps: true,
  },
);

export const ImageJob = mongoose.model("ImageJob", imageJobSchema);
