# Barça Match Lab — FC Barcelona analytics prototype

Responsive React + Vite prototype with an interactive pitch, selectable players, simulated heatmaps, passing links, statistics and playback.

**Demo only:** all tracking, player names, positions, passes and statistics are synthetic. This is not an official FC Barcelona product or a live feed.

## Run locally

Requires Node.js 20.19+ (or 22.12+) and npm.

```bash
git clone https://github.com/shubham21khandelwal/FC-barcelona-live.git
cd FC-barcelona-live
npm install
npm run dev
```

Open http://localhost:5173 (or the URL Vite prints).

## Production build

```bash
npm run build
npm run preview
```

Deploy the generated `dist/` folder to a static hosting service.

## Project structure

- `src/App.jsx`: interactive SVG pitch, selection, visualizations, timeline and player insights
- `src/data/demo.js`: synthetic player, passing and position/heatmap models
- `src/styles.css`: responsive styling
- `src/main.jsx`: React entry
- `index.html`, `vite.config.js`, `package.json`: Vite setup

## Licensed live data integration (future)

1. Contract with a licensed provider of match events and, for genuine movement heatmaps, tracking coordinates.
2. Add a server-side provider adapter mapping IDs, pitch coordinates, match clock, passes and player tracking into normalized models based on `src/data/demo.js`.
3. Expose the normalized events via your backend API/WebSocket; keep provider API keys **server-side**.
4. Replace `positionAt`, `heatPoints` and `passingLinks` with timestamped, licensed samples. Account for substitutions, period changes, missing data and feed latency.
5. Follow provider redistribution, caching, attribution and branding terms.

## Limitations

The 90-minute timeline animates synthetic movement, not actual match video. Passing links and heatmap intensities are illustrative. No backend, API key, database or live match feed is required for this demo.
