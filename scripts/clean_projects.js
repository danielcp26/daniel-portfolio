const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'public', 'projects');
const keep = new Set(['vsGIF.gif','SQLgif.gif','PBIgif.gif','tableauGIF.gif','project-1.svg','project-2.svg','project-3.svg','project-4.svg','project-5.svg','project-6.svg','project-7.svg','project-8.svg','project-9.svg','project-10.svg']);

if (!fs.existsSync(dir)) { console.error('Directory not found', dir); process.exit(1); }

const files = fs.readdirSync(dir);
for (const f of files) {
  if (!keep.has(f)) {
    const fp = path.join(dir, f);
    try { fs.unlinkSync(fp); console.log('Removed', f); } catch (e) { console.error('Failed to remove', f, e.message); }
  }
}
console.log('\nRemaining:');
console.table(fs.readdirSync(dir).map(f => ({ name: f, size: fs.statSync(path.join(dir, f)).size })));