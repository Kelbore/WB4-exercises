let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(score) {
    let sum = 0;
    let average;
    for(let i=0; i<score.length; i++) {
        sum += score[i];
        average = sum/score.length;
    }
    return average;
}

console.log(getAverage(myScores).toFixed(2));
console.log(getAverage(yourScores).toFixed(2));

