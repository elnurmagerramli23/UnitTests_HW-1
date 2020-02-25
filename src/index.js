function sumOrMultiply(first, second) {
    if (((first !== 0)  && !first) || ((second !== 0) && !second)) {
        return 'Please input right data!';
    }
    return first % 2 === 0 ? first * second : first + second;
};


function definedWeekDay(number) {
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let result = 'Input right data';

    if (!number || number <= 0 || number > 7 || number === ' ' || number === [] || number === [1,2]) return result;

    for (let i = 0; i < weekDays.length; i++) {
        if ( (number - 1) === i ) {
            result = weekDays[i];
        } 
    };

    return result;
};