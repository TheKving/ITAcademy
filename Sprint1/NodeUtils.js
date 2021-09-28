/* Nivell 1 */

/*Exercici 1
Creu una funció que imprimeixi recursivamente un
missatge per consola amb demores d'un segon.*/

let printRecu = number => {
    setTimeout( function() {
    if (number === 0) {
        return;
    }
    console.log(number);
    return printRecu(number - 1);
    }, 1000);
};

console.log(printRecu(10));

/*Exercici 2
Creu una funció que, en executar-la, 
escrigui el seu nom en un fitxer.*/

const fs = require('fs');

const file = 'file.txt';
const content = 'Hola, este es un texto de prueba';

const writeMyFile = (file, content) => {
    fs.writeFileSync(file, content, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
}

writeMyFile(file, content);

/*Exercici 3
Creu una altra que imprimeixi per 
pantalla el que llegeixi d'un fitxer.*/


const readMyFile = (file) => {
    fs.readFile(file, 'utf8', (error, content) => {
        if(error) {
            console.log(`Error at read file.`);
        } else {
            console.log(`ReadFile: ${content}`);
        }
     });   
}

readMyFile(file);




/* Nivell 2 */
/* Exercici 1
Creu una funció que comprimeixi el file del nivell 1

Creu una funció que llisti per consola el contingut 
del directori d'usuari. Utilitzi node Child Processes. */

const zipFile = (file) => {
    const zlib = require('zlib');
    const zip = zlib.createGzip();
    try { 
        var read = fs.createReadStream(file);
        var write = fs.createWriteStream(`${file}.gz`);
    
        read.pipe(zip).pipe(write);	
        console.log("Compress Successfully");	
    } catch {
        console.log('Error at open file');
    }

}

zipFile(file);

const readDirectory = () => {
    let listDirWin = 'dir C:\\Users\\%USERNAME%';
    //let listDirLin = 'ls -l ~';
    const exec = require('child_process').exec;
    exec(listDirWin, {

    }, function(error, stdout, stderr) {
        console.log(stdout);
        //console.log(`STDERR ${stderr}`);
        //console.log(error);
      });
}

readDirectory();


/* Nivell 3 */
/* Exercici 1
Creu una funció que creï dos fitxers codificats en hexadecimal i 
en base64 respectivament, a partir del fitxer de l'exercici inicial.

Creu una funció que guardi en disc els fitxers del punt anterior 
encriptats amb algorisme aes-192-cbc, i esborri els fitxers inicials.

Creu una altra funció que desencripti i descodifiqui els 
fitxers finals tornant a generar els inicials. */
const crypto = require('crypto');
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';

const encryptFiles = (file) => {
    const iv = crypto.randomBytes(16);
    const r = fs.createReadStream(file); 
    const algorithm = "aes-256-cbc";    
    const encryptHexa = crypto.createCipheriv(algorithm, secretKey, iv);
    const encryptBase64 = crypto.createCipheriv(algorithm, secretKey, iv);
    const w = fs.createWriteStream(`${file}.hex`);
    const w2 = fs.createWriteStream(`${file}.base`);

    let encryptedHexa = encryptHexa.update(secretKey, "utf-8", "hex");
    let encryptedBase = encryptBase64.update(secretKey, "utf-8", "base64");

    fs.writeFileSync(w.path, encryptedHexa);
    fs.writeFileSync(w2.path, encryptedBase);
}

encryptFiles(file);

const iv = crypto.randomBytes(16);

const encryptSaveFiles = (file) => {
    const r = fs.createReadStream(file);
    const encrypt = crypto.createCipheriv('aes-256-ctr', secretKey, iv);
    const encrypted = Buffer.concat([encrypt.update(content), encrypt.final()]);
    const w = fs.createWriteStream(`${file}.aes`);

    fs.writeFileSync(`${file}.aes`, encrypted);

    var originalFiles = [file, `${file}.hex`, `${file}.base`];
    originalFiles.forEach(path => fs.existsSync(path) && fs.unlinkSync(path));
    //console.log(`ENCRYPTEDS: ${encrypted}`);
} 

const decryptFile = (file) => {
    const decrypt = crypto.createDecipheriv('aes-256-ctr', secretKey, iv);
    const read = fs.readFileSync(`${file}.aes`);

    const decrpyted = Buffer.concat([decrypt.update(Buffer.from(read, 'hex')), decrypt.final()]);
    //console.log(`DECRYPTED: ${decrpyted}`);
    fs.writeFileSync(file, decrpyted);
}

encryptSaveFiles(file);

decryptFile(file);

