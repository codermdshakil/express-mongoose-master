const fs = require("fs");

// ## Synchronous

// - File Read → I/O intensive task → single threat will complete this task → not go to thread pool → response (at a time one task just)

// readFileSync()
// const data = fs.readFileSync('./index.txt', {encoding:"utf8"});
// console.log(data);

// writeFileSync()
// Synchronous write
// try {
//   fs.writeFileSync("test2.txt", "Hello again! This is new Bangladesh!");
//   console.log("File written synchronously");
// } catch (err) {
//   console.error(err);
// }

// ## Asynchronous

// - File read → single thread → thread pool → task completed (Just because of single thread transfer task to thread pool after transfaring the task single thread don’t wait for response single threat take second task) → in the mine time thread pool complete the task → send response to user

// - readFile(path, options) - synchronous

// fs.readFile('./index.txt', {encoding:'utf8'}, (err, data) =>{
//   if(err){
//     console.log("Error Occured", err);
//   }
//   else{
//     console.log("File Content = ", data);
//   }
// });

// writeFile(path, data, () => {})

// const path = 'example.txt';
// const data2 = "Hello Bangladesh";

// fs.writeFile(path, data2, (err) => {
//   if(err){
//     console.log('Error occured ', err);
//   }
//   else{
//     console.log('Successfully added data');
//   }
// })

// fs.appendFile(path, '\nNew line added - Bangladesh is natural Country', (err) => {
//   if(err){
//     console.log('Error occured ', err);
//   }
//   else{
//     console.log('Successfully added data');
//   }
// })


// create new diractory / Folder

// fs.mkdir('Folder', (err) => {
//   if(err){
//     console.log('Error Occured', err);
//   }
//   console.log('Direactory created!');
// })

// create file in folder

fs.writeFile('./Folder/file-1.txt', "Hello Bhai Paiso?", {encoding:'utf8'}, (err) => {
  if(err){
    console.log("Error Occured", err);
  }
  else{
    console.log('File created!');
  }
})

// append new data in file 

// fs.appendFile('./Folder/file-1.txt','\nNew line added for Bangladesh', {encoding:"utf8"}, (err) => {
//   if(err){
//     console.log("Error Occured", err);
//   }
//   console.log('Data Append Successfully!');
// })

// delete a directory

// fs.rmdir()

// delete file

// fs.unlink('example.txt', (err) => {
//   if(err){
//     console.log('Error Occured', err);
//   }
//   console.log('Removed File successfully!');
// })


// rename a file name

// fs.rename('test2.txt', 'practice.txt', (err) => {
//   if(err){
//     console.log("Error occured", err);
//   }
//   console.log('Rename Successfully!');
// })


// stat - get file information

// fs.stat('practice.txt',(err,data) => {
//   if(err){
//     console.log('Error Occured', err);
//   }
//   console.log(data);
// })


// Check file/Folder exist Or Not

const check = fs.existsSync('index.txt');
// console.log(check); // true

