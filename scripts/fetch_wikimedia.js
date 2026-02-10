const fs = require('fs');
const path = require('path');
const fetch = global.fetch || require('node-fetch');

const projectDir = path.join(__dirname, '..', 'public', 'projects');
if (!fs.existsSync(projectDir)) fs.mkdirSync(projectDir, { recursive: true });

const queries = [
  'used car', // project-1
  'stethoscope', // project-2 RAG Medical
  'used car', // project-3
  'Olympic medal', // project-4
  'home office', // project-5
  'Boston skyline', // project-6
  'COVID-19', // project-7
  'Iris (plant)', // project-8
  'airplane', // project-9
  'Nashville skyline' // project-10
];

(async () => {
  try {
    // remove existing project-*.svg files
    const files = fs.readdirSync(projectDir);
    for (const f of files) {
      if (/^project-\d+\.svg$/.test(f)) {
        try { fs.unlinkSync(path.join(projectDir, f)); console.log('Removed', f); } catch (e) {}
      }
    }

    for (let i = 0; i < queries.length; i++) {
      const q = queries[i];
      const name = `project-${i+1}.jpg`;
      try {
        const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(q)}&gsrnamespace=6&gsrlimit=1&prop=imageinfo&iiprop=url&format=json&origin=*`;
        console.log('\nSearching Wikimedia for:', q);
        const res = await fetch(apiUrl, { headers: { 'User-Agent': 'node-fetch' } });
        const json = await res.json();
        if (!json.query || !json.query.pages) { console.log('No image found for', q); continue; }
        const pages = Object.values(json.query.pages);
        const page = pages[0];
        if (!page.imageinfo || !page.imageinfo[0] || !page.imageinfo[0].url) { console.log('No image URL for', q); continue; }
        const imgUrl = page.imageinfo[0].url;
        console.log('Found:', imgUrl);
        const imgRes = await fetch(imgUrl, { headers: { 'User-Agent': 'node-fetch' } });
        const buffer = await imgRes.arrayBuffer();
        const outPath = path.join(projectDir, name);
        fs.writeFileSync(outPath, Buffer.from(buffer));
        console.log('Saved', name, '(', fs.statSync(outPath).size, 'bytes)');
      } catch (e) {
        console.log('Failed for', q, e.message);
      }
    }

    console.log('\nFinal files:');
    console.table(fs.readdirSync(projectDir).map(f => ({ name: f, size: fs.statSync(path.join(projectDir, f)).size }))); 
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
