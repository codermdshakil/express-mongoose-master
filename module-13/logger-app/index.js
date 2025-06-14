
const fs = require('fs');

const inputArguments =process.argv.slice(2);
const text = inputArguments.join(" ");

const timeStamp = new Date().toISOString();

const message = `${text} - ${timeStamp}\n`;

if(!message){
  console.log('❌ Please Provide a Message Log');
  console.log('Example: node ./logger-app/index.js Hello world');
  process.exit(1)
}
else{
  fs.appendFile('./logger-app/log.txt', message,{encoding:"utf8"}, (err) => {
    if(err){
      console.log('Error Occured', err);
    }
    console.log('Successfully write In Log file!');
  })
}
 