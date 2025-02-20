const numbers = [1, 2, 3, 4];

const boxes = document.getElementById(`code-box-${numbers[0-3]}`);

const boxe1 = document.getElementById(`code-box-0`);
const boxe2 = document.getElementById(`code-box-1`);
const boxe3 = document.getElementById(`code-box-2`);
const boxe4 = document.getElementById(`code-box-3`);


function Reload() {
    for (let i = 0; i < numbers.length; i++) {
        const box = document.getElementById(`code-box-${numbers[i]}`);
        if (box.innerHTML != '1') {
            box.innerHTML = Math.floor(Math.random() * 10);
        }
    }

    if (boxe1.innerHTML === '0') {
        console.log('boxe1');
    } else if (boxe2.innerHTML === '0') {
        console.log('boxe2');
    } else if (boxe3.innerHTML === '0') {
        console.log('boxe3');
    } else if (boxe4.innerHTML === '0') {
        console.log('boxe4');
    }

    if (boxe1.innerHTML === '1' && boxe2.innerHTML === '1' && boxe3.innerHTML === '1' && boxe4.innerHTML === '1') {
        console.log('You win');
}};