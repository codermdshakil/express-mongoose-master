const fs = require("fs");

// asynchrounously read and write 

// fs.readFile("./hello-word.txt", {encoding:'utf8'}, (err, data) => {
//   if(err){
//     console.log("Error Occured", err);
//   }
  
//   fs.writeFile('./hello.txt', data, {encoding:'utf8'}, (err) => {
//     if(err){
//       console.log('Error Occured', err);
//     }
//     console.log("Data write successfully!");
//   })
 
// })


const readStream = fs.createReadStream("./hello-word.txt", {encoding:"utf8"});
const writeStream = fs.createWriteStream("./hello.txt", {encoding:"utf8"});

readStream.on('data', (data) => {
  writeStream.write(data, (err) => {
    if(err){
      console.log('Error Occured', err.message);
    }
    console.log("Data write successfully!");
  })
})


readStream.on("error", (err) => {
   if(err){
      console.log('Error Occured', err.message);
    }
})

writeStream.on("error", (err) => {
   if(err){
      console.log('Error Occured', err.message);
    }
})


readStream.on('end', () =>{
  console.log('Read Stream Ended!');
  writeStream.end();

})

writeStream.on('finish', () =>{
  console.log('Write SuccessFully Done!');
})




