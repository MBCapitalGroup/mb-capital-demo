const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const url = req.url;
  
  // Handle specific tool pages
  if (url === '/tax-calculator.html' || url === '/tax-calculator') {
    const htmlPath = path.join(__dirname, '..', 'client', 'tax-calculator.html');
    if (fs.existsSync(htmlPath)) {
      const html = fs.readFileSync(htmlPath, 'utf8');
      res.setHeader('Content-Type', 'text/html');
      res.status(200).send(html);
      return;
    }
  }
  
  if (url === '/ai-recommendations.html' || url === '/ai-recommendations') {
    const htmlPath = path.join(__dirname, '..', 'client', 'ai-recommendations.html');
    if (fs.existsSync(htmlPath)) {
      const html = fs.readFileSync(htmlPath, 'utf8');
      res.setHeader('Content-Type', 'text/html');
      res.status(200).send(html);
      return;
    }
  }
  
  if (url === '/market-intelligence.html' || url === '/market-intelligence') {
    const htmlPath = path.join(__dirname, '..', 'client', 'market-intelligence.html');
    if (fs.existsSync(htmlPath)) {
      const html = fs.readFileSync(htmlPath, 'utf8');
      res.setHeader('Content-Type', 'text/html');
      res.status(200).send(html);
      return;
    }
  }
  
  // Handle admin pages
  if (url === '/admin' || url === '/admin.html') {
    const htmlPath = path.join(__dirname, '..', 'client', 'index.html');
    if (fs.existsSync(htmlPath)) {
      const html = fs.readFileSync(htmlPath, 'utf8');
      res.setHeader('Content-Type', 'text/html');
      res.status(200).send(html);
      return;
    }
  }
  
  if (url === '/investor-portal.html' || url === '/investor-portal') {
    const htmlPath = path.join(__dirname, '..', 'client', 'investor-portal.html');
    if (fs.existsSync(htmlPath)) {
      const html = fs.readFileSync(htmlPath, 'utf8');
      res.setHeader('Content-Type', 'text/html');
      res.status(200).send(html);
      return;
    }
  }
  
  // Serve attached assets
  if (url.startsWith('/attached_assets/')) {
    const assetPath = path.join(__dirname, '..', url);
    if (fs.existsSync(assetPath)) {
      const ext = path.extname(assetPath).toLowerCase();
      let contentType = 'application/octet-stream';
      
      if (ext === '.png') contentType = 'image/png';
      else if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
      else if (ext === '.gif') contentType = 'image/gif';
      else if (ext === '.svg') contentType = 'image/svg+xml';
      
      const asset = fs.readFileSync(assetPath);
      res.setHeader('Content-Type', contentType);
      res.status(200).send(asset);
      return;
    }
  }
  
  // Default: serve the main HTML file
  const htmlPath = path.join(__dirname, '..', 'index.html');
  const html = fs.readFileSync(htmlPath, 'utf8');
  
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
};
