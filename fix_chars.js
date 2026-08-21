const fs = require('fs');
let content = fs.readFileSync('c:/Users/PC/Desktop/SYFUNG/data.js', 'utf8');

const replacements = {
    'Ã©': 'é',
    'Ã¨': 'è',
    'Ã ': 'à',
    'Ãª': 'ê',
    'Ã‰': 'É',
    'Å“': 'œ',
    'Ã§': 'ç',
    'Ã®': 'î',
    'Ã¢': 'â',
    'Ã´': 'ô',
    'Ã»': 'û',
    'Ã': 'à' // fallback
};

for (const [bad, good] of Object.entries(replacements)) {
    content = content.split(bad).join(good);
}

fs.writeFileSync('c:/Users/PC/Desktop/SYFUNG/data.js', content, 'utf8');
console.log("Replaced bad characters!");
