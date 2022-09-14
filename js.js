
let a = +prompt('What is Bitcoin price today?');
let b = +prompt('How much $ do you have?');


function isNumber(a, b) {
    if (isNaN(a) || isNaN(b)) {
        alert('Please enter the correct amount!')
    } else {
        function calcResult(a, b) {
            let x = b / a;
            if (isNaN(x)) {
                alert('Please enter the correct amount!')
            } else {
                alert(`You can buy ${x.toFixed(7)} BTC`);
            }
        }
        calcResult(a, b);
    }
}

isNumber(a, b);

