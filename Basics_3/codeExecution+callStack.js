// Execution context

// JavaScript Execution COntext
// 
// {} -> Global EC ->this(Window Object)
//  
// JavaScript is single threaded,everything inside it is a process ,afetr that along they ae executed.
// 
// -> Global Execution Context
// -> Function/Functional EC
// -> Eval EC(it self its is a property of global,generally it is globally )
// 
// {} -> Memory Creation Phase/Creation Phase
//    -> Execution Phase

// ************************

// let val1 = 10
// let val2 = 5
// function addNum(num1, num2){
//     let total = num1 + num2
//     return total
// }
// let result1 = addNum(val1, val2)
// let result2 = addNum(10, 2)

// ****************************

// 1.Global Execution -> this

// 2.Memory Phase
    // val1 -> undefined
    // val2 -> undefined
    // addNum -> defination
    // result1 -> undefined
    // result2 -> undefined

// 3. Execution Phase
// val1 <- 10
// val2 <- 5
// 
// addNum -> New Execution Context(newVariable Enviroment + Execution Thread)
//              |
//              |
//      -------------------------------------------
//      |                                         |
// Memory creation                          Execution Context
// val1 -> undefined                            num1 -> 10
// val2 -> undefined                            num2 -> 5
// total -> undefined                           total ->15(total get return-back to parent executional context,we say it gets return to global executional context)
// after this the "New Execution Context" gets deleted.
// 
// result1 ->15(after deletion of "New Execution Context")
// 
// now for result2
// 
// "New Execution Context(newVariable Enviroment + Execution Thread)"is created
// addNum -> New Execution Context(newVariable Enviroment + Execution Thread)
//              |
//              |
//      -------------------------------------------
//      |                                         |
// Memory creation                          Execution Context
// val1 -> undefined                            num1 -> 10
// val2 -> undefined                            num2 -> 2
// total -> undefined                           total ->12
// 
// similar as for result1,everything occures here.

// -:CallStack:-
// LIFO concept of stack