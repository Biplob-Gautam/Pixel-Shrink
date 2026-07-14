# Product Requirements Document (PRD)

# PixelShrink

**Version:** 1.0.0\
**Product Type:** Full Stack Cloud-Based Image Optimization Platform

------------------------------------------------------------------------

# 1. Product Overview

**Product Name:** PixelShrink

PixelShrink is a MERN-stack web application that allows users to upload
images, optimize them in the cloud, and download the processed result.
Images are stored in Amazon S3, automatically processed using AWS
Lambda, and served back to the user. Registered users can maintain a
processing history, while guest users can use the platform without
creating an account.

------------------------------------------------------------------------

# 2. Problem Statement

Modern websites require optimized images for faster loading, lower
bandwidth usage, and reduced storage costs. Manually resizing and
compressing images is repetitive and time-consuming.

PixelShrink automates image optimization using an event-driven AWS
architecture.

------------------------------------------------------------------------

# 3. Target Users

-   Web Developers
-   UI/UX Designers
-   Bloggers
-   Students
-   E-commerce Sellers
-   Content Creators

------------------------------------------------------------------------

# 4. Core Features

## 4.1 Authentication

-   User Registration
-   User Login
-   JWT Authentication
-   Logout
-   Current User
-   Guest Mode (No Login Required)

## 4.2 Image Upload

-   Image Upload
-   Image Preview
-   File Validation
-   Upload Progress

## 4.3 Image Processing

Users can choose:

-   Compression Level
-   Resize Image
-   Output Format (JPEG / PNG / WebP if supported)
-   Generate Thumbnail

Processing is performed asynchronously using AWS Lambda.

## 4.4 Job Tracking

Job Statuses

-   UPLOADING
-   PROCESSING
-   COMPLETED
-   FAILED

## 4.5 Downloads

-   Download Processed Image
-   Download Original Image (Logged-in Users)

## 4.6 Dashboard (Logged-in Users)

-   Processing History
-   Storage Usage
-   Processing Statistics
-   Delete Job

## 4.7 Guest Mode

-   Upload
-   Process
-   Download
-   Automatic Cleanup of Temporary Files

------------------------------------------------------------------------

# 5. Backend Features

## Authentication

-   Register
-   Login
-   Logout
-   Current User

## Image Jobs

-   Upload Image
-   Save Metadata
-   Get Job Status
-   Get Job Details
-   Download Processed Image
-   Delete Job

## Database

### User

-   username
-   email
-   password
-   avatar

### ImageJob

-   owner
-   originalImageUrl
-   processedImageUrl
-   thumbnailUrl
-   originalSize
-   processedSize
-   compressionRatio
-   outputFormat
-   processingOptions
-   status
-   expiresAt

------------------------------------------------------------------------

# 6. Frontend Features

## Public

-   Landing Page
-   Upload Page
-   Processing Status Page

## Authentication

-   Login
-   Register

## Dashboard

-   Job History
-   Job Details
-   Download Page

## Components

-   Navbar
-   Upload Card
-   Image Preview
-   Processing Indicator
-   Job Card
-   Loader
-   Toast Notifications

------------------------------------------------------------------------

# 7. AWS Features

## Amazon S3

-   Store Original Images
-   Store Processed Images

## AWS Lambda

-   Compress Images
-   Resize Images
-   Generate Thumbnails
-   Convert Image Format

## IAM

-   Secure Access Between Services

## CloudWatch

-   Lambda Logs

------------------------------------------------------------------------

# 8. API Endpoints

## Authentication

-   POST /api/v1/auth/register
-   POST /api/v1/auth/login
-   POST /api/v1/auth/logout
-   GET /api/v1/auth/me

## Image Jobs

-   POST /api/v1/jobs/upload
-   GET /api/v1/jobs
-   GET /api/v1/jobs/:jobId
-   GET /api/v1/jobs/:jobId/status
-   GET /api/v1/jobs/:jobId/download
-   DELETE /api/v1/jobs/:jobId

------------------------------------------------------------------------

# 9. Backend Workflow

## Guest Flow

React → Express → S3 Upload → S3 Event → Lambda → Process Image → Save
Processed Image to S3 → Frontend Polls Status → Download → Cleanup

## Logged-in Flow

React → Express → S3 Upload → Save Metadata → S3 Event → Lambda →
Process Image → Update Metadata → Processing History → Download Anytime

------------------------------------------------------------------------

# 10. Security

-   JWT Authentication
-   Protected Routes
-   File Type Validation
-   File Size Validation
-   Secure IAM Permissions
-   Input Validation

------------------------------------------------------------------------

# 11. Success Criteria

-   Secure Authentication
-   Successful S3 Upload
-   Automatic Lambda Processing
-   Download Optimized Image
-   Processing History for Registered Users
-   Temporary Guest Processing
-   Responsive UI
-   Clean Cloud Architecture
