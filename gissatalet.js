const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let lineInputs = 0
const lines = []

rl.on('line', (input) => {
    lineInputs++
    lines.push(input)

    if (lineInputs == 2) {
        let abdi = lines[0]
        let kevin = lines[1]

        abdiDiceOne = (Number(abdi.split(' ')[1]) + Number(abdi.split(' ')[4])) / 2
        abdiDiceTwo = (Number(abdi.split(' ')[2]) + Number(abdi.split(' ')[6])) / 2

        kevinDiceOne = (Number(kevin.split(' ')[2]) + Number(kevin.split(' ')[5])) / 2
        kevinDiceTwo = (Number(kevin.split(' ')[1]) + Number(kevin.split(' ')[7])) / 2

    if (abdi > kevin) {
            console.log("abdi är bäst")
        }
    else if (abdi < kevin) {
            console.log("kevin vann")
        }
    else {
            console.log("hejdå")
        };

    }
})