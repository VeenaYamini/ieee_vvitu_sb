import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const eventAssetsDirectory = path.resolve('public/assets/events');
const eventAssetTypes = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
};

function serveEventAssets() {
  return {
    name: 'serve-event-assets',
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        const requestPath = request.url?.split('?')[0] || '';
        const prefix = '/assets/events/';
        if (!requestPath.startsWith(prefix)) return next();

        let filename;
        try {
          filename = decodeURIComponent(requestPath.slice(prefix.length));
        } catch {
          return next();
        }

        const filePath = path.resolve(eventAssetsDirectory, filename);
        if (!filePath.startsWith(`${eventAssetsDirectory}${path.sep}`)) return next();

        fs.stat(filePath, (error, stats) => {
          if (error || !stats.isFile()) return next();
          response.statusCode = 200;
          response.setHeader('Content-Type', eventAssetTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream');
          response.setHeader('Cache-Control', 'no-cache');
          fs.createReadStream(filePath).pipe(response);
        });
      });
    },
  };
}

export default defineConfig({ plugins: [react(), serveEventAssets()], server: { port: 5173 } });
