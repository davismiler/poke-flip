const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create images directory
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Image URLs to download
const images = [
  // Badge images
  { url: 'https://res.cloudinary.com/dw4qzsyab/image/upload/v1650426456/medalla2_ron77c.png', filename: 'medalla2_ron77c.png' },
  { url: 'https://res.cloudinary.com/dw4qzsyab/image/upload/v1650426456/medalla1_spaffo.png', filename: 'medalla1_spaffo.png' },
  { url: 'https://res.cloudinary.com/dw4qzsyab/image/upload/v1650426457/medalla5_ioxrkg.png', filename: 'medalla5_ioxrkg.png' },
  { url: 'https://res.cloudinary.com/dw4qzsyab/image/upload/v1650426457/medalla4_e4hti2.png', filename: 'medalla4_e4hti2.png' },
  { url: 'https://res.cloudinary.com/dw4qzsyab/image/upload/v1650426456/medalla3_pvqg29.png', filename: 'medalla3_pvqg29.png' },
  { url: 'https://res.cloudinary.com/dw4qzsyab/image/upload/v1650426458/medalla8_pqnpdo.png', filename: 'medalla8_pqnpdo.png' },
  { url: 'https://res.cloudinary.com/dw4qzsyab/image/upload/v1650426458/medalla7_icoops.png', filename: 'medalla7_icoops.png' },
  { url: 'https://res.cloudinary.com/dw4qzsyab/image/upload/v1650426457/medalla6_esgkeb.png', filename: 'medalla6_esgkeb.png' },
  // Ash character
  { url: 'https://res.cloudinary.com/dw4qzsyab/image/upload/v1650426457/ash_lc2ljf.png', filename: 'ash_lc2ljf.png' },
  // Pokeball logo
  { url: 'https://seeklogo.com/images/P/pokeball-logo-DC23868CA1-seeklogo.com.png', filename: 'pokeball-logo.png' },
  // Sad Pikachu gif
  { url: 'https://c.tenor.com/lmA7VALYIAsAAAAC/sad-pikachu.gif', filename: 'sad-pikachu.gif' },
];

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(imagesDir, filename);
    const file = fs.createWriteStream(filePath);
    
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirects
        return downloadImage(response.headers.location, filename)
          .then(resolve)
          .catch(reject);
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      reject(err);
    });
  });
}

async function downloadAll() {
  console.log('Starting image downloads...\n');
  
  for (const image of images) {
    try {
      await downloadImage(image.url, image.filename);
    } catch (error) {
      console.error(`Error downloading ${image.filename}:`, error.message);
    }
  }
  
  console.log('\nDownload complete!');
}

downloadAll();

