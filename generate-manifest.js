const fs = require('fs');
const path = require('path');

// Existing manifest content
const existingManifest = {
  // ... your existing manifest content ...
};

// Asset manifest content
const assetManifest = {
  "files": {
    "main.css": "/Dasarichandrashekar08/static/css/main.bf538fe7.css",
    "main.js": "/Dasarichandrashekar08/static/js/main.ddfe8f40.js",
    "static/media/HeroImage.jpg": "/Dasarichandrashekar08/static/media/HeroImage.4823cdee6726acf6e555.jpg",
    "index.html": "/Dasarichandrashekar08/index.html",
    "main.bf538fe7.css.map": "/Dasarichandrashekar08/static/css/main.bf538fe7.css.map",
    "main.ddfe8f40.js.map": "/Dasarichandrashekar08/static/js/main.ddfe8f40.js.map"
  },
  "entrypoints": [
    "static/css/main.bf538fe7.css",
    "static/js/main.ddfe8f40.js"
  ]
};

// Merge existing manifest with asset manifest content
const mergedManifest = { ...existingManifest, ...assetManifest };

// Write the merged manifest to manifest.json
const manifestPath = path.join(__dirname, 'build', 'manifest.json');
fs.writeFileSync(manifestPath, JSON.stringify(mergedManifest, null, 2));

console.log('Manifest file generated successfully.');
