//data to be passed into the array
let data = [
    { 'principal': 2500, 'time': 1.8 },
    { 'principal': 1000, 'time': 5 },
    { 'principal': 3000, 'time': 1 },
    { 'principal': 2000, 'time': 3 }
];

function interestCalculator(arr) {
    let enteredData = arr;
    let results = enteredData.reduce((acc, data) => {
        let rate,
            principal = data.principal,
            time = data.time;

        if ((principal >= 2500) && (time >= 3)) {
            rate = 4;
        } else if ((principal >= 2500) && (time > 1 && time < 3)) {
            rate = 3;
        } else if (principal < 2500 || time <= 1) {
            rate = 2;
        } else {
            rate = 1;
        };

        let interest = (principal * time * rate) / 100;
        console.log(interest);
        acc.push({ 'principal': principal, 'time': time, 'rate': rate, 'interest': interest });
        return acc;
    }, []);

    return results;
};
interestCalculator(data);