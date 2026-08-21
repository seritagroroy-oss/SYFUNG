const fs = require('fs');

const content = fs.readFileSync('c:/Users/PC/Desktop/SYFUNG/data.js', 'utf8');
const lines = content.split('\n');

const urlRegex = /url:\s*['"]([^'"]+)['"]/;
const seenUrls = new Set();
const newLines = [];
let removedCount = 0;

for (let line of lines) {
    const match = line.match(urlRegex);
    if (match) {
        // Extract and normalize the URL
        let url = match[1].replace(/\/$/, '').toLowerCase();
        
        if (seenUrls.has(url)) {
            // URL already seen, so this is a duplicate.
            // We skip adding this line (and any preceding comma/whitespace if needed, but since it's just one line, we drop the line).
            removedCount++;
            continue;
        } else {
            seenUrls.add(url);
            newLines.push(line);
        }
    } else {
        newLines.push(line);
    }
}

// Clean up trailing commas on the last valid object line if needed
// Actually, since we might have removed the very last element, the previous one might have a trailing comma.
// The file ends with "];". The line before that should not have a comma.
for (let i = newLines.length - 1; i >= 0; i--) {
    if (newLines[i].trim() === '];') {
        let prev = i - 1;
        while (prev >= 0 && newLines[prev].trim() === '') {
            prev--;
        }
        if (prev >= 0 && newLines[prev].endsWith(',')) {
            newLines[prev] = newLines[prev].slice(0, -1);
        }
        break;
    }
}

fs.writeFileSync('c:/Users/PC/Desktop/SYFUNG/data.js', newLines.join('\n'), 'utf8');
console.log(`Removed ${removedCount} duplicate entries. File updated.`);
