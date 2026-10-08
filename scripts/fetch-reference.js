const https = require('https');
const fs = require('fs');
const path = require('path');

https.get('https://voluble-cocada-7cd499.netlify.app/', (res) => {
    let html = '';
    res.on('data', (chunk) => { html += chunk; });
    res.on('end', () => {
        // Extract DATA
        const dataMatch = html.match(/const\s+DATA\s*=\s*(\[[\s\S]*?\]);/);
        // Extract CITY_XY
        const cityMatch = html.match(/const\s+CITY_XY\s*=\s*(\{[\s\S]*?\});/);
        // Extract MAP_W
        const mapWMatch = html.match(/const\s+MAP_W\s*=\s*([0-9.]+);/);
        // Extract INDIA_PATH
        const pathMatch = html.match(/const\s+INDIA_PATH\s*=\s*"([^"]+)";/);

        let records = [];
        if (dataMatch) {
            records = JSON.parse(dataMatch[1]);
        }

        let cityCoords = {};
        if (cityMatch) {
            cityCoords = JSON.parse(cityMatch[1]);
        }

        const mapW = mapWMatch ? parseFloat(mapWMatch[1]) : 360;
        const indiaPath = pathMatch ? pathMatch[1] : '';

        console.log(`Extracted ${records.length} records`);
        console.log(`Extracted ${Object.keys(cityCoords).length} city coordinates`);
        console.log(`Map width: ${mapW}, India Path length: ${indiaPath.length}`);

        // Save raw dump for reference
        fs.writeFileSync(path.join(__dirname, 'raw-reference-data.json'), JSON.stringify({
            mapW,
            indiaPath,
            cityCoords,
            records
        }, null, 2));

        console.log('Saved raw-reference-data.json');
    });
}).on('error', (err) => {
    console.error('Fetch error:', err.message);
});
