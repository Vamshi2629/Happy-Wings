const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            results.push(file);
        }
    });
    return results;
}

const files = walk('c:\\Users\\rockz\\Desktop\\Happy Wings Website\\src');
const oldUrl = 'https://www.zomato.com/siddipet/happy-wings';
const newUrl = 'https://www.zomato.com/siddipet/happy-wings-siddipet-locality/order';

files.forEach(file => {
    if (file.endsWith('.jsx') || file.endsWith('.js')) {
        let content = fs.readFileSync(file, 'utf8');
        if (content.includes(oldUrl)) {
            // Replace all occurrences
            content = content.split(oldUrl).join(newUrl);
            fs.writeFileSync(file, content);
            console.log(`Updated ${file}`);
        }
    }
});
