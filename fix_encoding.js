const fs = require('fs');
let content = fs.readFileSync('c:/Users/PC/Desktop/SYFUNG/data.js', 'utf8');

// If the content was double encoded as utf8, reading it as latin1 reverses the damage
// Let's test if this works on a small snippet:
let testStr = 'CYBERSÃ‰CURITÃ‰ - OUTILS';
let decoded = Buffer.from(testStr, 'latin1').toString('utf8');
if (decoded === 'CYBERSÉCURITÉ - OUTILS') {
    content = Buffer.from(content, 'latin1').toString('utf8');
    fs.writeFileSync('c:/Users/PC/Desktop/SYFUNG/data.js', content, 'utf8');
    console.log("Encoding fixed successfully!");
} else {
    console.log("Decoded test failed:", decoded);
}
