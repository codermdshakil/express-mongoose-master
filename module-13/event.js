
const EventEmitter = require('node:events');

class SchoolBell extends EventEmitter {}


const schoolBell = new SchoolBell();

schoolBell.on('ring', () => {
  console.log('Yahoo, the class shes!');
})
schoolBell.on('ring', () => {
  console.log('Dhet! arekta class ase!');
})

schoolBell.on('ali', () =>{
  console.log('Oi ami togo head teacher!');
})

schoolBell.on('mitu', () =>{
  console.log('Oi ami togo science teacher!');
})

schoolBell.on('nur', () =>{
  console.log('Oi ami togo math teacher!');
})



// schoolBell.emit('ali'); // Oi ami togo head teacher! 
// schoolBell.emit('mitu'); // Oi ami togo science teacher! 
// schoolBell.emit('nur'); // Oi ami togo math teacher!

schoolBell.emit('ring');

