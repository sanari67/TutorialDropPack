# Deployment Guide for Render

This project contains a React application that can be deployed on Render:

1. **species-tutorial** - A species tutorial application

## Prerequisites

- A GitHub repository with your code
- A Render account (free tier available)

## Deployment Steps

### Option 1: Using render.yaml (Recommended)

1. Push your code to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com)
3. Click "New +" → "Blueprint"
4. Connect your GitHub repository
5. Render will automatically detect the `render.yaml` file and deploy the service

### Option 2: Manual Deployment

#### For species-tutorial:

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Static Site"
3. Connect your GitHub repository
4. Configure:
   - **Name**: species-tutorial
   - **Root Directory**: species-tutorial
   - **Build Command**: `npm ci && npm run build`
   - **Publish Directory**: build

## Environment Variables

If your applications need environment variables, add them in the Render dashboard under your service's "Environment" tab.

## Custom Domains

You can add custom domains in the Render dashboard under your service's "Settings" tab.

## Build Configuration

The application uses:
- **Node.js version**: 18 (specified in render.yaml)
- **Build command**: `npm ci && npm run build`
- **Output directory**: `build`

## Troubleshooting

1. **Build fails**: Check that all dependencies are in package.json
2. **404 errors**: Ensure the build directory contains the built files
3. **Environment variables**: Make sure they're set in Render dashboard

## Local Testing

Before deploying, test the build locally:

```bash
# For species-tutorial
cd species-tutorial
npm install
npm run build
npm run serve
```

The application will be available at `http://localhost:3000`.
