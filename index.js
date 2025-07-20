const express = require('express');
const path = require('path');
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');
const chokidar = require('chokidar'); // <-- import chokidar

const app = express();
const PORT = process.env.PORT || 3000;

// Setup livereload server
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public/react'));

// Force refresh when livereload connects
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

// Watch JSX/JS changes using chokidar
const watcher = chokidar.watch(path.join(__dirname, 'public/react'), {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true,
  ignoreInitial: true,
});

watcher.on('change', (filePath) => {
  console.log(`File changed: ${filePath}`);
  liveReloadServer.refresh("/");
});

// Inject livereload script into served HTML
app.use(connectLivereload());

// Serve static files from /public/react
app.use('/react', express.static(path.join(__dirname, 'public/react')));

// Redirect root path to /react
app.get('/', (req, res) => {
  res.send('Hello, please visit <a href="/react">/react</a> to see the React app.');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/react`);
});
