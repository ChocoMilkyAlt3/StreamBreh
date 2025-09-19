const { addonBuilder } = require("stremio-addon-sdk");
const fetch = require("node-fetch");

const manifest = {
  id: "org.choco.scraper",
  version: "1.0.0",
  name: "Choco Scraper",
  description: "Scrapes multiple websites for movies and TV shows",
  resources: ["stream"],
  types: ["movie", "series"],
  catalogs: []
};

const builder = new addonBuilder(manifest);

// Placeholder websites - replace these with your own
const WEBSITES = [
  "https://example1.com",
  "https://example2.com",
  "https://example3.com"
];

builder.defineStreamHandler(async (args) => {
  const streams = [];

  for (const site of WEBSITES) {
    try {
      // Fetch the site - placeholder for your scraper logic
      const res = await fetch(site);
      const html = await res.text();

      // TODO: parse `html` to get actual video URLs
      // Example placeholder stream
      streams.push({
        title: `Stream from ${site}`,
        url: "https://example.com/video.mp4",
        infoHash: ""
      });
    } catch (err) {
      console.log(`Error fetching ${site}:`, err);
    }
  }

  return { streams };
});

module.exports = builder.getInterface();
