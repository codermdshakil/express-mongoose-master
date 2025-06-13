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

// fs.writeFile('./Folder/file-1.txt', "Hello Bhai Paiso?", {encoding:'utf8'}, (err) => {
//   if(err){
//     console.log("Error Occured", err);
//   }
//   else{
//     console.log('File created!');
//   }
// })

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


// summary 
// **1. Reading Files**

// - `fs.readFile(path, options, callback)`: Reads the entire content of a file asynchronously.
// - `fs.readFileSync(path, options)`: Reads the entire content of a file synchronously.

// **2. Writing Files**

// - `fs.writeFile(path, data, options, callback)`: Writes data to a file, replacing the file if it exists.
// - `fs.writeFileSync(path, data, options)`: Writes data to a file synchronously.
// - `fs.appendFile(path, data, options, callback)`: Appends data to a file.
// - `fs.appendFileSync(path, data, options)`: Appends data to a file synchronously.

// **3. Creating and Removing Directories**

// - `fs.mkdir(path, options, callback)`: Creates a directory asynchronously.
// - `fs.mkdirSync(path, options)`: Creates a directory synchronously.
// - `fs.rmdir(path, options, callback)`: Removes a directory asynchronously.
// - `fs.rmdirSync(path, options)`: Removes a directory synchronously.

// **4. Other Important Functions**

// - `fs.unlink(path, callback)`: Deletes a file asynchronously.
// - `fs.unlinkSync(path)`: Deletes a file synchronously.
// - `fs.rename(oldPath, newPath, callback)`: Renames a file or directory asynchronously.
// - `fs.renameSync(oldPath, newPath)`: Renames a file or directory synchronously.
// - `fs.stat(path, options, callback)`: Gets file information asynchronously.
// - `fs.statSync(path, options)`: Gets file information synchronously.
// - `fs.existsSync(path)`: Checks if a file or directory exists synchronously.

// **Key Considerations**

// - **Asynchronous vs. Synchronous:** Asynchronous methods are non-blocking and preferred for most applications to maintain responsiveness. Synchronous methods block the event loop and are better suited for scripts or initialization tasks.
// - **Error Handling:** Always include error handling to manage potential issues with file operations.
// - **File Paths:** Use relative or absolute file paths as needed for your application.