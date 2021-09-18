var lodash = require('lodash');

const isbnValidate = (isbn) => {

    if(typeof isbn == 'number'){
        return 'ArgumentInvalidException'
    }

    if(!isbn){
        return 'ArgumentInvalidException'
    }

    let digits = isbn.replace(/-/g, '')
    let num = 1;

    digitsArray = [...digits];

    digitsArray.reverse();

    if(digits.length == 10){
        for (let index = 0; index < digitsArray.length; index++) {
            var number = (digitsArray[index]*num);
            lodash.sum(number)
        }

        if(number % num == 0){
            return '10 ISBN Digit is Valid!'
        }else{
            return 'No Valid ISBN'
        }
    }

    if(digits.length == 13){
        return '13 Digit ISBN'
    }

    else{
        return 'Fail'
    }
}


test('Invalid ISBN', () => {
    expect(isbnValidate('123-2131-230')).toBe('No Valid ISBN');
})

test('Valid ISBN', () => {
    expect(isbnValidate('2-1234-5680-2')).toBe('10 ISBN Digit is Valid!');
})

test('No string ISBN', () => {
    expect(isbnValidate(1233213124231)).toBe('ArgumentInvalidException');
})

test('No Argument', () => {
    expect(isbnValidate()).toBe('ArgumentInvalidException');
})

test('No Argument', () => {
    expect(isbnValidate('')).toBe('ArgumentInvalidException');
})