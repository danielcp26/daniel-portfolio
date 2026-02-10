const fs = require('fs');
const path = require('path');
const fetch = global.fetch || require('node-fetch');

const projectDir = path.join(__dirname, '..', 'public', 'projects');
const map = {
  'project-1.jpg': 'https://source.unsplash.com/1600x900/?used+cars',
  'project-2.jpg': 'https://source.unsplash.com/1600x900/?medical+ai',
  'project-3.jpg': 'https://source.unsplash.com/1600x900/?used+car+market',
  'project-4.jpg': 'https://source.unsplash.com/1600x900/?olympics+medals',
  'project-5.jpg': 'https://source.unsplash.com/1600x900/?remote+work+office',
  'project-6.jpg': 'https://source.unsplash.com/1600x900/?boston+houses',
  'project-7.jpg': 'https://source.unsplash.com/1600x900/?covid+data+visualization',
  'project-8.jpg': 'https://source.unsplash.com/1600x900/?iris+flowers+macro',
  'project-9.jpg': 'https://source.unsplash.com/1600x900/?airplane+travel',
  'project-10.jpg': 'https://source.unsplash.com/1600x900/?nashville+houses'
};

(async () => {
  try {
    if (!fs.existsSync(projectDir)) fs.mkdirSync(projectDir, { recursive: true });

    // Remove tiny jpg placeholders
    const files = fs.readdirSync(projectDir);
    for (const f of files) {
      const full = path.join(projectDir, f);
      const stat = fs.statSync(full);
      if (path.extname(f).toLowerCase() === '.jpg' && stat.size < 1000) {
        console.log('Removing placeholder', f);
        fs.unlinkSync(full);
      }
    }

    for (const [name, url] of Object.entries(map)) {
      try {
        console.log('\nRequesting', url);
        const res = await fetch(url, { redirect: 'follow', headers: { 'User-Agent': 'Mozilla/5.0', Referer: 'https://unsplash.com' } });
        const ct = res.headers.get('content-type') || '';
        if (!ct.startsWith('image')) {
          console.log('Skipped', name, '- content-type:', ct);
          continue;
        }
        const buffer = await res.arrayBuffer();
        const outPath = path.join(projectDir, name);
        fs.writeFileSync(outPath, Buffer.from(buffer));
        console.log('Saved', name, '(', fs.statSync(outPath).size, 'bytes)');
      } catch (e) {
        console.log('Error fetching', url, e.message);
      }
    }

    console.log('\nFinal files:');
    const final = fs.readdirSync(projectDir).map(f => ({ name: f, size: fs.statSync(path.join(projectDir, f)).size }));
    console.table(final);
  } catch (e) {
    console.error('Script error', e);
    process.exit(1);
  }
})();
