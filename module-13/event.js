
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

// give all listeners in a array

// console.log(schoolBell.listeners("ring"));
// console.log(schoolBell.listenerCount("ring")); // 2

schoolBell.once('start', () =>{
  console.log('matha nostha event start is runing..');
})

schoolBell.emit('start');
// schoolBell.emit('start'); X


// ## Summary 

// | Concept           | Method                  | Purpose                     |
// | ----------------- | ----------------------- | --------------------------- |
// | Register listener | `.on()`                 | Run every time event occurs |
// | One-time listener | `.once()`               | Run only once               |
// | Trigger event     | `.emit()`               | Fire the event              |
// | Remove listener   | `.off()`                | Stop listening              |
// | Get count         | `.listenerCount()`      | Know how many are listening |
// | Clear all         | `.removeAllListeners()` | Clean everything            |
