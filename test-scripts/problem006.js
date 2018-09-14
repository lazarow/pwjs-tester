let _correct = 0;
let _failed = 0;
let _failedTests = [];
const test = (id, test) => { if (test) { _correct++; } else { _failed++; _failedTests.push(id); }; };
test(1, divisible(4, 2) === true);
test(2, divisible(4, 3) === false);
test(3, divisible(12, 2, 3, 4, 7) === false);
test(4, divisible(12, 2, 3, 4, 6) === true);
test(5, divisible(20, 1, 20) === true);
[_correct, _failed, _failedTests];