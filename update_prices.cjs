const fs = require('fs');
let data = fs.readFileSync('c:\\Users\\rockz\\Desktop\\Happy Wings Website\\src\\data\\menuData.js', 'utf8');

// Replace standard originalPrice: X, price: Y
data = data.replace(/originalPrice:\s*(\d+),\s*price:\s*\d+,/g, 'price: $1,');

// Replace variants like: { name: '2 pcs', price: 63, originalPrice: 79 }
data = data.replace(/price:\s*\d+,\s*originalPrice:\s*(\d+)/g, 'price: $1');

// Fix Chicken Bits variants which don't have originalPrice in the object
data = data.replace(/{ name: 'Normal', price: 103 }/g, "{ name: 'Normal', price: 129 }");
data = data.replace(/{ name: 'Peri Peri', price: 103 }/g, "{ name: 'Peri Peri', price: 129 }");

fs.writeFileSync('c:\\Users\\rockz\\Desktop\\Happy Wings Website\\src\\data\\menuData.js', data);
