// Immediately Invoked Function Expressions (IIFE)
// sometimes we face problem due to pollution of global scope,many times we through it to remove the pollution of the variable of global scope,whatever declaration is there,so to remove the pollution we use IIFE.
// to write 2 IIFE or multiple IIFE we have to use semicolon after on IIFE
// normal function call
function tea(){
    console.log(`DB1 CONNECTED `);
}
tea();

// IIFE function call
(function anotherTea(){
    console.log(`DB2 CONNECTED `);
})();

// Arror function
( () => {
    console.log(`DB3 CONNECTED `);
})();

// Parameter passed
( (name) => {
    console.log(`DB4 CONNECTED ${name}`);
})("Om")

