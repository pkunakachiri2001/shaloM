import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the dist directory
app.use('/assets', express.static(join(__dirname, 'dist', 'assets')));
app.use(express.static(join(__dirname, 'dist')));

// SPA fallback - serve index.html for all non-asset routes
app.get('*', (req, res) => {
  if (req.path.includes('.')) {
    return res.status(404).end();
  }
  return res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT}`);
});
