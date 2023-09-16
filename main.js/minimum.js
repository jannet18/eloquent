// Write a function
// min that takes two arguments and returns their minimum.
function min(param1, param2){
    // console.log (Math.min(a, b))
    // if param 2 is undefined return param1
    if (param2 === undefined){
        return param1;
    } 
    // if param1 is less than param2, return param1
    if (param1 < param2){
        return param1;
    } 
    // otherwise
    else {
        // return param2
        return param2;
    }

}
console.log(min(7,10));