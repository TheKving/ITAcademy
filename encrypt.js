const crypto = require('crypto');
const fs = require('fs');


const file = 'file.txt';
const content = 'Hola, este es un texto de prueba';
fs.writeFileSync(file, content);

const algorithm = 'aes-256-ctr';
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
const iv = crypto.randomBytes(16);

// input file
const r = fs.createReadStream('file.txt'); // leemos el archivo original (sin cifrado)
const read = fs.createReadStream('file.cifrado'); //leemos el archivo cifrado

// encrypt content
const encrypt = crypto.createCipheriv(algorithm, secretKey, iv); // encriptamos 
const encrypted = Buffer.concat([encrypt.update(content), encrypt.final()]);
console.log(encrypted.toString('hex'));


// decrypt content
const decrypt = crypto.createDecipheriv(algorithm, secretKey, iv); //desencriptamos
//let hash = iv.toString('hex')+encrypted.toString('hex');
//console.log(`READ ENCRYPT: ${encrypted.content}`);
const decrpyted = Buffer.concat([decrypt.update(Buffer.from(encrypted, 'hex')), decrypt.final()]);
console.log(decrpyted.toString());

// write file
const writ = fs.createWriteStream('file.cifrado'); // CREAMOS Y ESCRIBIMOS EN EL FILE
const w = fs.createWriteStream('file.descifrado'); // CREAMOS Y ESCRIBIMOS DESENCRIPTADO EN EL FILE


// start pipe
r.pipe(encrypt)
    .pipe(writ);

read.pipe(decrypt)
    .pipe(w)

    
/*
r.pipe(encrypt)
    .pipe(decrypt)
    .pipe(w);
*/
/*const crypto = require('crypto');

const algorithm = 'aes-256-ctr';
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
const iv = crypto.randomBytes(16);

const encrypt = (text) => {

    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex')
    };
};

const decrypt = (hash) => {

    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));

    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);

    return decrpyted.toString();
};

module.exports = {
    encrypt,
    decrypt
};

//console.log(encrypt('Kevin'));

console.log(decrypt(encrypt('Kevin')))*/