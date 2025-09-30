# Deployment Guide for Render

This project contains two React applications that can be deployed on Render:

1. **species-tutorial** - A species tutorial application
2. **DropPack** - A drag-and-drop canvas application

## Prerequisites

- A GitHub repository with your code
- A Render account (free tier available)

## Deployment Steps

### Option 1: Using render.yaml (Recommended)

1. Push your code to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com)
3. Click "New +" → "Blueprint"
4. Connect your GitHub repository
5. Render will automatically detect the `render.yaml` file and deploy both services

### Option 2: Manual Deployment

#### For species-tutorial:

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Static Site"
3. Connect your GitHub repository
4. Configure:
   - **Name**: species-tutorial
   - **Root Directory**: species-tutorial
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: build

#### For DropPack:

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Static Site"
3. Connect your GitHub repository
4. Configure:
   - **Name**: droppack-canvas
   - **Root Directory**: DropPack
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: build

## Environment Variables

If your applications need environment variables, add them in the Render dashboard under your service's "Environment" tab.

## Custom Domains

You can add custom domains in the Render dashboard under your service's "Settings" tab.

## Build Configuration

Both applications use:
- **Node.js version**: Automatically detected (latest LTS)
- **Build command**: `npm install && npm run build`
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

# For DropPack
cd DropPack
npm install
npm run build
npm run serve
```

The applications will be available at `http://localhost:3000` and `http://localhost:5000` respectively.
