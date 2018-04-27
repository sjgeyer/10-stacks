# Documentation

This module creates a new Stack comprised of a linked list, with you can then apply the following functions:

### Functions in Module

#### new Stack()
`const stack = new Stack()` : Will instantiate a new Stack. The list of items on the stack can be accessed through the `Stack._storage` property.

#### .push(*value*)
`Stack.push(value)` : Will add a new value to the Stack storage and return the modified Stack.

                                    TOP
    TOP                             [4]
    [3]                             [3]
    [2]   -->  Stack.push(4);  -->  [2]
    [1]                             [1]
    BOTTOM                          BOTTOM

#### .pop()
`Stack.pop()` : Will remove the last item from the stack and return the modified Stack, or throw an error if the stack is already empty.


    TOP
    [4]                             TOP
    [3]                             [3]
    [2]    -->  Stack.pop();  -->   [2]
    [1]                             [1]
    BOTTOM                          BOTTOM

#### .peek()
`Stack.peek()` : Will return the most recent item placed in the stack

    TOP
    [3]
    [2]    -->  Stack.peek();  -->  [3]
    [1] 
    BOTTOM


#### .isEmpty()
`Stack.isEmpty()` : Will return a boolean value indicating whether or not the stack is empty.

    TOP
    [3]
    [2]    -->  Stack.isEmpty();  -->  false
    [1] 
    BOTTOM
    
    TOP
    [null]  -->  Stack.isEmpty();  -->  true
    BOTTOM

### Tests
Tests can be run through the command line using `npm run test`.

### Installation
This module can be installed by cloning this repo into your directory and requiring the `stack.js` file.