// Write a loop that makes seven calls to console.log to output the following
// triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

// SOLN
let size = 7;
// outer loop for rows
for (i = 0; i < size; i++){
    let row = '*';
    // inner loop for col
    for (let j = 0; j < i; j++){
        row += '*';
    }
    console.log(row);
}