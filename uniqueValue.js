// problemce create a variable variable name is arr and input array includes some numbers sometimes write a same nubmer double and solve a unique value all double nubmers output single value


// example input let arr=[1,3,5,1]
// output [1,3,5,];

let arr=[10,20,1,2,35,23,10,45,23,11,32,54,66,21,56,11];

let seen=new Set();
let result=[];
for (let i = 0; i < arr.length; i++) {
    if (!seen.has(arr[i])) {
         seen.add(arr[i])  
      result.push(arr[i]) 
    }
    
}
console.log(result)

for (let i = 0; i < result.length; i++) {
    const element = result[i];
    console.log(element)
}

