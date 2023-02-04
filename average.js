function make_avg(sub1, sub2, sub3) {
    const total = sub1 + sub2 + sub3;
    const average = total / 3;
    return average;
}
const sub1Marks = 85;
const sub2Marks = 90;
const sub3Marks = 95;

var myAverage = make_avg(
    sub1Marks,
    sub2Marks,
    sub3Marks
);
console.log('My Average So Far:', myAverage);