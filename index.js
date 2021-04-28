require('dotenv').config()

console.log(`HOST: ${process.env.DB_HOST}`);
console.log(`USER: ${process.env.DB_USER}`);
console.log(` PWD: ${process.env.DB_PASS}`);
