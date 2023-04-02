function averageThreeNumbers(a, b, c) {
    let sum = a + b + c;
    let avg = sum / 3;
    return avg;
}

function createSentence(num, noun) {
    let result = "On average, a Berkeley student has " + num + " " + noun + "s.";
    return result;
}

function getRandomNum(max) {
    return Math.floor(Math.random() * max);
}

let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);
let avg = averageThreeNumbers(x, y, z);
let sentence = createSentence(avg, "bear");
console.log(sentence);