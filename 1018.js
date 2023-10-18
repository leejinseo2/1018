// Function
// - fundamental building block in the program
// -subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Fuction declaraion
// function name(parmal, param2) { body ... return;}
// one function === one thing
// naming : doSometing, command, verb

function printHello() {
    console.log('Hello');
}
printHello();

// 2.

function changeaname(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'elle'}
chaangName(ellie);
console/log(ellie;
    
    )

  
 // 5. local scope
let globalMessage = 'global';
 function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    console.log(childMessage);
 }
 printMessage();