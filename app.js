let friends = ['Sarah', 'Alyx', 'Dustin', 'Kim', 'Sophie'];

for (let i of friends) {
    for (j = 99; j >= 1; --j) {
        if (j > 2) {
            console.log(`${j} lines of code in the file, ${j} lines of code; ${i} strikes ones out, clears it all out, ${j-1} lines of code in the file.`);
        } else if (j === 2) {
            console.log(`${j} lines of code in the file, ${j} lines of code; ${i} strikes ones out, clears it all out, ${j-1} line of code in the file.`);
        } else {
            console.log(`${j} line of code in the file, ${j} line of code; ${i} strikes it out, clears it all out, no more lines of code in the file.`);
        }
    }
}