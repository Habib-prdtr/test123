const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const baseDir = 'D:/Penyimpanan Utama/Documents/html/cobaCompro';
const docsDir = path.join(baseDir, 'assets', 'docs');
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const proposalHtml = 'file:///' + path.join(baseDir, 'proposal-pricelist.html').replace(/\\/g, '/');
const posterHtml = 'file:///' + path.join(baseDir, 'poster.html').replace(/\\/g, '/');

const proposalPdfRoot = path.join(baseDir, 'Hafia-dev-Paket-Layanan-Website.pdf');
const proposalPdfDocs = path.join(docsDir, 'Hafia-dev-Paket-Layanan-Website.pdf');

const posterPdfRoot = path.join(baseDir, 'Hafia-dev-Poster.pdf');
const posterPdfDocs = path.join(docsDir, 'Hafia-dev-Poster.pdf');

const posterPngRoot = path.join(baseDir, 'Hafia-dev-Poster.png');
const posterPngDocs = path.join(docsDir, 'Hafia-dev-Poster.png');

console.log('Generating PDF Proposal & Price List...');
execSync(`"${edgePath}" --headless --disable-gpu --no-pdf-header-footer --run-all-compositor-stages-before-draw --print-to-pdf="${proposalPdfRoot}" "${proposalHtml}"`);
fs.copyFileSync(proposalPdfRoot, proposalPdfDocs);
console.log('✓ Proposal PDF generated:', fs.statSync(proposalPdfRoot).size, 'bytes');

console.log('Generating Poster PDF...');
execSync(`"${edgePath}" --headless --disable-gpu --no-pdf-header-footer --run-all-compositor-stages-before-draw --print-to-pdf="${posterPdfRoot}" "${posterHtml}"`);
fs.copyFileSync(posterPdfRoot, posterPdfDocs);
console.log('✓ Poster PDF generated:', fs.statSync(posterPdfRoot).size, 'bytes');

console.log('Generating Poster PNG Image 3:4 (1080x1440)...');
execSync(`"${edgePath}" --headless --disable-gpu --window-size=1080,1440 --hide-scrollbars --screenshot="${posterPngRoot}" "${posterHtml}"`);
fs.copyFileSync(posterPngRoot, posterPngDocs);
console.log('✓ Poster PNG generated:', fs.statSync(posterPngRoot).size, 'bytes');

console.log('\nAll assets generated successfully!');
