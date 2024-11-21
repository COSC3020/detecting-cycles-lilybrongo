const fs = require('fs');
eval(fs.readFileSync('code.js')+'');

//All of these have cycles:
//these two graphs are from Caden Mcfate's repository
let A = [
    [1],
    [2],
    [0]
];
let star = [
    [2],
    [3],
    [4],
    [0],
    [1]
];
//these two graphs are ones that I wrote 
// Graph with a cycle
let graphWithCycle = [
    [1, 2],  
    [0, 2],  
    [0, 1],  
];

let graphWithCycle2 = [
    [1],        
    [0, 2, 3],  
    [1],       
    [1, 4],    
    [3, 5],     
    [4, 3],     
];
    

//these test cases below follow the format that Caden wrote 
if (!hasCycle(A)) throw new Error('Failed to detect cycle in A');
if (!hasCycle(star)) throw new Error('Failed to detect cycle in star');
if (!hasCycle(graphWithCycle)) throw new Error('Failed to detect cycle');
if (!hasCycle(graphWithCycle2)) throw new Error('Failed to detect cycle');


// None of these have cycles:
// these two test codes are borrowed from Caden Mcfate 
let empty = [];
let line = [
    [1],
    [2],
    [3],
    []
];

//these two are test codes I wrote
let graphWithoutCycle = [
    [1],     
    [0, 2],  
    [1],     
];

let graphWithoutCycle2 = [
    [1],        
    [0, 2, 3],  
    [1],        
    [1, 4],     
    [3],        
];

//these test cases below follow the format that Caden wrote 
if (hasCycle(empty)) throw new Error('Detected false cycle in empty');
if (hasCycle(line)) throw new Error('Detected false cycle in line');
if (hasCycle(graphWithoutCycle)) throw new Error('Detected false cycle');
if (hasCycle(graphWithoutCycle2)) throw new Error('Detected false cycle');

