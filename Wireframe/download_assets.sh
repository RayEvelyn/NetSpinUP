#!/bin/bash

# Define assets directory
ASSETS_DIR="src/web/assets/images"

# Ensure assets directory exists
mkdir -p "$ASSETS_DIR"

# File containing image URLs from Figma API response
IMAGE_FILE="figma_images.json"

# Parse JSON and download each image
jq -r '.images | to_entries[] | "\(.key) \(.value)"' "$IMAGE_FILE" | while read -r ID URL; do
    echo "Downloading image for Node ID: $ID"
    wget -q -O "$ASSETS_DIR/$ID.png" "$URL"
done

echo "✅ All images downloaded to $ASSETS_DIR"
