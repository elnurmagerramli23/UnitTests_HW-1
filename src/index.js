function sumOrMultiply(first, second) {
    if (((first !== 0)  && !first) || ((second !== 0) && !second)) {
        return 'Please input right data!';
    }

    return first % 2 === 0 ? first * second : first + second;
};


function definedWeekDay(number) {
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let result = 'Input right data';

    if (!number || number <= 0 || number > 7 || number === ' ' || number === [] || number === [1,2]) {
        return result;
    };
    
    for (let i = 0; i < weekDays.length; i++) {
        if ( (number - 1) === i ) {
            result = weekDays[i];
        } 
    };

    return result;
};

function getCoordinatePlane(x, y) {
    if ((typeof x)  !== 'number' || (typeof y) !== 'number') {
        return 'Please input right data!';
    };

    if ( x > 0 && y > 0){

        return 'Точка с координатами Х и У принадлежат 1-ой четверти' 
    } else if ( x < 0 && y > 0) {

        return 'Точка с координатами Х и У принадлежат 2-ой четверти' 
    } else if ( x < 0 && y < 0) {

        return 'Точка с координатами Х и У принадлежат 3-ей четверти' 
    } else if ( x > 0 && y < 0) {

        return 'Точка с координатами Х и У принадлежат 4-ой четверти' 
    } else if ( x === 0 && y === 0) {

        return 'Точка с координатамми Х и У находится в центре координат' 
    };
};

function getSumOfNumbers(number1, number2, number3) {
    let result = 0;

    if ((typeof number1) !== 'number' || (typeof number2) !== 'number' || (typeof number3) !== 'number') {
        return 'Please input a number!'
    } 

    if ( number1 >  0 ) {
        result += number1
    }
    if ( number2 > 0 ) {
        result += number2
    }
    if ( number3 > 0 ) {
        result += number3
    };
    
    return result;
};

function getMaximalResult(number1, number2, number3) {
    if ((typeof number1) !== 'number' || (typeof number2) !== 'number' || (typeof number3) !== 'number') {
        return 'Please input a number!'
    };

    let result = number1 + number2 + number3;
    let result2 = number1 * number2 * number3;
    let result3 = 0;

    if ( result > result2 ) {
        result3 += result + 3
    } else if ( result2 > result ) {
        result3 += result2 + 3
    };
    
    return result3;
};

function getAssessment(score) {
    if ((typeof score) !== 'number') {
        return 'Please input a number!'
    }

    if ( score > 0 && score <= 19){

        return "Оценка студнта равна F"
    } else if ( score >= 20 && score <= 39){

        return "Оценка студнта равна E"
    } else if ( score >= 40 && score <= 59){

        return "Оценка студнта равна D"
    } else if ( score >= 60 && score <= 74){

        return "Оценка студнта равна C"
    } else if ( score >= 75 && score <= 89){

        return "Оценка студнта равна B"
    } else if ( score >= 90 && score <= 100){

        return "Оценка студнта равна A"
    };
    
};


function getEvenNumbers(number) {
    if ((typeof number) !== 'number') {

        return 'Please input a number!'
    };

    let c = 0;

    for ( i = 1; i <= number; i++){
        if ( i % 2 === 0) {
            c += i            
        }
    };
        
    return c
};

function getPrimeNumbers(number) {
    if ((typeof number) !== 'number') {

        return 'Please enter a number!'
    };
}
