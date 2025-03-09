#!/bin/bash

FILE_KEY="Rk9vqloEfxelK57cfchlTr"
FIGMA_TOKEN=""
ASSETS_DIR="src/web/assets/images"

# Ensure assets directory exists
mkdir -p "$ASSETS_DIR"

# List of extracted unique imageRefs
IMAGE_REFS=(
  "1a2f10ee0e38d54c8ea34530499f2387791709d8"
  "9525d2e3716178554e8fd633d109f8b7884b6dd0"
  "b648212a180b75056806e57b70c5b7f81c312fcf"
  "9d7a349bdeb3e465a200a47196215138c071b1d3"
  "abd6613061e5e79c796051989ad26799c182b77a"
  "4570fcf3eeaf1e9e4307e0d398b8916f2cd38024"
  "d658072d95dfd53ed4b7d64de924da490c55b355"
  "3f61fc4658b1606404079b0af1b3fac184ee7108"
  "ed88537c0e7319cfa2f17c920c14d05a022b2a9e"
  "56aebc42586ede85ffb1905cb3904c05f2947a39"
  "11a305b5afa5c1d66e9bad9c5e4c76cf76c0fbd2"
  "dc53502a6c97962da319e398b9043498f6d7f8b9"
  "8dee772ffaf8f59c60cfc049236f3519768fff39"
  "76e7f0444a0734843060c17b72c28d73b05b3e46"
  "9a00aac4e8d1f2330f8ad0a7701f157bcd90fc4f"
  "a8da483358456abd4ee14ec19974c51d5884e52e"
  "d50ffb0afa333613e155822dc6b3dfe63f150a74"
  "27d49ae4f07285b68cc96bfd0402f39ac66c63ed"
  "247710cc04e9e890a522a2ae27c2442a5653404c"
  "4a4dddfb91b07be558a26f9bd82ea3ce4afa78a1"
  "e02e659fb2d226955512e1fc03b61a850b539f88"
  "d508a70b4c8de9984416e2236f77613441fe14b9"
  "98f4290e7c58c2abdc7574bff955544192b311f2"
)

# Convert list to comma-separated format for API request
IMAGE_IDS=$(IFS=,; echo "${IMAGE_REFS[*]}")

# Fetch image URLs from Figma API
RESPONSE=$(curl -s -X GET "https://api.figma.com/v1/images/$FILE_KEY?ids=$IMAGE_IDS&format=png"   -H "X-Figma-Token: $FIGMA_TOKEN")

# Check if the response contains valid JSON
if ! echo "$RESPONSE" | jq empty; then
  echo "❌ Error: Invalid JSON response from Figma API."
  exit 1
fi

# Parse JSON and download each image
for REF in "${IMAGE_REFS[@]}"; do
  URL=$(echo "$RESPONSE" | jq -r ".images["$REF"]")
  
  # Verify if URL is valid before downloading
  if [[ "$URL" != "null" && "$URL" != "" ]]; then
    wget -O "$ASSETS_DIR/$REF.png" "$URL"
  else
    echo "⚠️ Warning: No valid URL found for $REF"
  fi
done

echo "✅ All images downloaded to $ASSETS_DIR"
