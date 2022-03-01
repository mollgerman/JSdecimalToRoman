function convertToRoman(num) {
    let roman = []
    let att = 10;
    let unit = 0; 
    do{
        unit = num % att;
        num = num - (num % att);
        att = att * 10;
        roman.unshift(toRoman(unit));
    } while (num > 0);
    roman = roman.join('');
    return roman;
  
}
  
  console.log('Roman number: ' + convertToRoman(5));

function toRoman(num) {
    let romanSymbols = {
            ones: 'I',
            onesHalf: 'V',
            tens: 'X',
            tensHalf: 'L',
            houndreds: 'C',
            houndredsHalf: 'D',
            thousands: 'M'
        }
    let arr = ['ones', 'onesHalf', 'tens', 'tensHalf', 'houndreds', 'houndredsHalf', 'thousands'];        
    
    let unitNumber, unit;
    /* DEFINE UNIT OF NUMBER PASSED */
    (num < 10) ? (unit = 'ones', unitNumber = num )
        : (num < 100) ? (unit = 'tens', unitNumber = num / 10)
        : (num < 1000) ? (unit = 'houndreds', unitNumber = num / 100)
        : (unit = 'thousands', unitNumber = num / 1000);

    /* DECIMAL TO ROMAN CONVERTER CONDITIONS */
    let roman = [];
    if (unit != 'thousands'){
        if (unitNumber == 4) {
            roman.push(romanSymbols[unit])
            roman.push(romanSymbols[arr[arr.indexOf(unit) + 1]])
        }
        else if (unitNumber == 9) {
            roman.push(romanSymbols[unit])
            roman.push(romanSymbols[arr[arr.indexOf(unit) + 2]])
        }
        else if (unitNumber == 5) {
            roman.push(romanSymbols[arr[arr.indexOf(unit) + 1]])
        }
        else if (unitNumber <= 3) {
            for(let i = 0; i < unitNumber; i++){
                roman.push(romanSymbols[unit])
            }
        }
        else {
            roman.push(romanSymbols[arr[arr.indexOf(unit) + 1]])
            for(let i = 0; i < (unitNumber - 5); i++){
                roman.push(romanSymbols[unit])
            }
        }
    }
    else {
        for(let i = 0; i < unitNumber; i++){
            roman.push(romanSymbols[unit])
        }
    }
    roman = roman.join('');

    return roman ;
}
  