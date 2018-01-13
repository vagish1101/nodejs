var fs = require('fs');
var configFile = JSON.parse(fs.readFileSync('./config.json'));

fs.watchFile('./config.json' , ()=> {
    configFile = JSON.parse(fs.readFileSync('./config.json'));
    console.log(configFile)
})
// console.log(JSON.parse(configFile).name);
fs.readFile(__dirname + '/file.txt', (error, data) => {
   // console.log(data)
})
console.log('Done')
var readStream = fs.createReadStream('file.txt');
readStream.on('data', (chunk)=>{
 //   console.log('---------------------------------------------------------');
   // console.log(chunk)
})