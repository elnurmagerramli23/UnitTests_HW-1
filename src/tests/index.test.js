// Условные операторы. Если первое число чётное найти произведение, иначе сумму.
describe('Home work 1', () => {

   describe('sumOrMultiply', function() {
    it('should be defined', function() {
        assert.isDefined(sumOrMultiply);
    });
    it('should return sum (5, 5)', function() {
        const firstNum = 5;
        const secondNum = 5;
        const expected = 10;

        const actual = sumOrMultiply(firstNum, secondNum);

        assert.deepEqual(actual, expected);
    });

    it('should return product (4, 7)', function() {
        const firstNum = 4;
        const secondNum = 7;
        const expected = 28;

        const actual = sumOrMultiply(firstNum, secondNum);

        assert.deepEqual(actual, expected);
    });

    it('should return multiply (0, 7)', function() {
        const firstNum = 0;
        const secondNum = 7;
        const expected = 0;

        const actual = sumOrMultiply(firstNum, secondNum);

        assert.deepEqual(actual, expected);
    });

    it('should warning user with zero (undefined, undefined)', function() {
        const firstNum = undefined;
        const secondNum = undefined;
        const expected = 'Please input right data!';

        const actual = sumOrMultiply(firstNum, secondNum);

        assert.deepEqual(actual, expected);
    });

    it('should return multiply (0, 7)', function() {
        const firstNum = 0;
        const secondNum = 7;
        const expected = 0;

        const actual = sumOrMultiply(firstNum, secondNum);

        assert.deepEqual(actual, expected);
    });
    });

// Условные операторы. Показать какой четверти принадлежит точка с координатами (x, y)
    describe('getCoordinatePlane', () => {
        it('should be defined', () => {
            assert.isDefined(getCoordinatePlane);
        });

        it('should return \'\' (undefined, undefined)', () => {
            const x = undefined;
            const y = undefined;
            const expected = 'Please input right data!';
            const actual = getCoordinatePlane(x, y);

            assert.deepEqual(actual, expected);
        });

        it('should return \'\' (null, null)', () => {
            const x = null;
            const y = null;
            const expected = 'Please input right data!';

            const actual = getCoordinatePlane(x, y);

            assert.deepEqual(actual, expected);
        });

        it('should return \'\' ([], [])', () => {
            const x = [];
            const y = [];
            const expected = 'Please input right data!';

            const actual = getCoordinatePlane(x, y);

            assert.deepEqual(actual, expected);
        });

        it('should return \'\' ("", "")' , () => {
            const x = "";
            const y = "";
            const expected = 'Please input right data!';

            const actual = getCoordinatePlane(x, y);

            assert.deepEqual(actual, expected);
        });

        it('should return \'\' (" ", " ")', () => {
            const x = " ";
            const y = " ";
            const expected = 'Please input right data!';

            const actual = getCoordinatePlane(x, y);

            assert.deepEqual(actual, expected);
        });

        it('should return Точка с координатами Х и У принадлежат 1-ой четверти', () => {
            const x = 10;
            const y = 10;
            const expected = 'Точка с координатами Х и У принадлежат 1-ой четверти';

            const actual = getCoordinatePlane(x, y);

            assert.deepEqual(actual, expected);
        });

        it('shuld return Точка с координатами Х и У принадлежат 2-ой четверти', () => {
            const x = -10;
            const y = 10;
            const expected = 'Точка с координатами Х и У принадлежат 2-ой четверти';

            const actual = getCoordinatePlane(x, y);

            assert.deepEqual(actual, expected);
        });

        it('should return Точка с координатами Х и У принадлежат 3-ей четверти', () => {
            const x = -10;
            const y = -10;
            const expected = 'Точка с координатами Х и У принадлежат 3-ей четверти';

            const actual = getCoordinatePlane(x, y);

            assert.deepEqual(actual, expected);
        });

        it('should return Точка с координатами Х и У принадлежат 4-ой четверти', () => {
            const x = 10;
            const y = -10;
            const expected = 'Точка с координатами Х и У принадлежат 4-ой четверти';

            const actual = getCoordinatePlane(x, y);

            assert.deepEqual(actual, expected);
        });

        it('should return Точка с координатамми Х и У находится в центре координат', () => {
            const x = 0;
            const y = 0;
            const expected = 'Точка с координатамми Х и У находится в центре координат';

            const actual = getCoordinatePlane(x, y);

            assert.deepEqual(actual, expected);
        });
    });

// Условные операторы. Найти сумму только положительных чисел
    describe('getSumOfNumbers', () => {
        it('should be defined', () => {
            assert.isDefined(getSumOfNumbers);
        });

        it('should return \'\' undefined, undefined, undefined', () => {
            const number1 = undefined;
            const number2 = undefined;
            const number3 = undefined;
            const expected = 'Please input a number!';

            const actual = getSumOfNumbers(number1, number2, number3);

            assert.deepEqual(actual, expected);
        });

        it('should return \'\' null, null, null', () => {
            const number1 = null;
            const number2 = null;
            const number3 = null;
            const expected = 'Please input a number!';

            const actual = getSumOfNumbers(number1, number2, number3);

            assert.deepEqual(actual, expected);
        });

        it('should return \'\' ("", "", "")', () => {
            const number1 = "";
            const number2 = "";
            const number3 = "";
            const expected = 'Please input a number!';

            const actual = getSumOfNumbers(number1, number2, number3);

            assert.deepEqual(actual, expected);
        });

        it('should return \'\' (" ", " ", " ")', () => {
            const number1 = " ";
            const number2 = " ";
            const number3 = " ";
            const expected = 'Please input a number!';

            const actual = getSumOfNumbers(number1, number2, number3);

            assert.deepEqual(actual, expected);
        });

        it('should return \'\' ([], [], [])', () => {
            const number1 = [];
            const number2 = [];
            const number3 = [];
            const expected = 'Please input a number!';

            const actual = getSumOfNumbers(number1, number2, number3);

            assert.deepEqual(actual, expected);
        });

        it('should return sumOfNumbers', () => {
            const number1 = 10;
            const number2 = 10;
            const number3 = 10;
            const expected = 30;

            const actual = getSumOfNumbers(number1, number2, number3);

            assert.deepEqual(actual, expected);
        });
    });
// Условные операторы. Найти максимальный результат
    describe('getMaximalResult', () => {
        it('should be defined', () => {
            assert.isDefined(getMaximalResult);
        });

        it('should warning user with zero  undefined, undefined, undefined', () => {
            const number1 = undefined;
            const number2 = undefined;
            const number3 = undefined;
            const expected = 'Please input a number!';

            const actual = getMaximalResult(number1, number2, number3);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with zero null, null, null', () => {
            const number1 = null;
            const number2 = null;
            const number3 = null;
            const expected = 'Please input a number!';

            const actual = getMaximalResult(number1, number2, number3);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with zero ("", "", "")', () => {
            const number1 = "";
            const number2 = "";
            const number3 = "";
            const expected = 'Please input a number!';

            const actual = getMaximalResult(number1, number2, number3);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with zero (" ", " ", " ")', () => {
            const number1 = " ";
            const number2 = " ";
            const number3 = " ";
            const expected = 'Please input a number!';

            const actual = getMaximalResult(number1, number2, number3);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with zero [], [], []', () => {
            const number1 = [];
            const number2 = [];
            const number3 = [];
            const expected = 'Please input a number!';

            const actual = getMaximalResult(number1, number2, number3);

            assert.deepEqual(actual, expected);
        });

        it('should return  product of numbers', () => {
            const number1 = 1;
            const number2 = 2;
            const number3 = 4;
            const expected = 11;

            const actual = getMaximalResult(number1, number2, number3);

            assert.deepEqual(actual, expected);
        });

        it('should return  sum of numbers', () => {
            const number1 = 1;
            const number2 = 1;
            const number3 = 1;
            const expected = 6;

            const actual = getMaximalResult(number1, number2, number3);

            assert.deepEqual(actual, expected);
        });
    });
// Условные операторы. Показать оценку студента
    describe('getAssessment', () => {
        it('should be defined', () => {
            assert.isDefined(getAssessment);
        });

        it('should return \'\' undefined', () => {
            const score = undefined;
            const expected = 'Please input a number!';

            const actual = getAssessment(score);

            assert.deepEqual(actual, expected);
        });

        it('should return \'\' null', () => {
            const score = null;
            const expected = 'Please input a number!';

            const actual = getAssessment(score);

            assert.deepEqual(actual, expected);
        });

        it('should return \'\' ("")', () => {
            const score = "";
            const expected = 'Please input a number!';

            const actual = getAssessment(score);

            assert.deepEqual(actual, expected)
        });

        it('should return \'\' (" ")', () => {
            const score = " ";
            const expected = 'Please input a number!';

            const actual = getAssessment(score);

            assert.deepEqual(actual, expected)
        });

        it('should return \'\' []', () => {
            const score = [];
            const expected = 'Please input a number!';

            const actual = getAssessment(score);

            assert.deepEqual(actual, expected)
        });

        it('should return Оценка студнта равна F', () => {
            const score = 15;
            const expected = 'Оценка студнта равна F'
            
            const actual = getAssessment(score);

            assert.deepEqual(actual, expected);
        });

        it('should return Оценка студнта равна E', () => {
            const score = 25;
            const expected = 'Оценка студнта равна E'
            
            const actual = getAssessment(score);

            assert.deepEqual(actual, expected);
        });

        it('should return Оценка студнта равна D', () => {
            const score = 45;
            const expected = 'Оценка студнта равна D'
            
            const actual = getAssessment(score);

            assert.deepEqual(actual, expected);
        });

        it('should return Оценка студнта равна C', () => {
            const score = 65;
            const expected = 'Оценка студнта равна C'
            
            const actual = getAssessment(score);

            assert.deepEqual(actual, expected);
        });

        it('should return Оценка студнта равна B', () => {
            const score = 85;
            const expected = 'Оценка студнта равна B'
            
            const actual = getAssessment(score);

            assert.deepEqual(actual, expected);
        });

        it('should return Оценка студнта равна A', () => {
            const score = 95;
            const expected = 'Оценка студнта равна A'
            
            const actual = getAssessment(score);

            assert.deepEqual(actual, expected);
        })
    });
// Циклы. Найти сумму чисел и их количество от 1 - 99
    describe('getEvenNumbers', () => {
        it('should be defined', () => {
            assert.isDefined(getEvenNumbers);
        });

        it('should warning user with zero undefined', () => {
            const number = undefined;
            const expected = 'Please input a number!'

            const actual = getEvenNumbers(number);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with zero null', () => {
            const number = null;
            const expected = 'Please input a number!'

            const actual = getEvenNumbers(number);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with zero ("")', () => {
            const number = "";
            const expected = 'Please input a number!'

            const actual = getEvenNumbers(number);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with zero (" ")', () => {
            const number = " ";
            const expected = 'Please input a number!'

            const actual = getEvenNumbers(number);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with zero []', () => {
            const number = [];
            const expected = 'Please input a number!'

            const actual = getEvenNumbers(number);

            assert.deepEqual(actual, expected);
        });

        it('should return sum of even numbers', () => {
            const number = 99;
            const expected = 2450;

            const actual = getEvenNumbers(number);

            assert.deepEqual(actual, expected);
        });
});
// Циклы. Является ли число простым
    describe('getPrimeNumbers', () => {
        it('should be defined', () => {
            assert.isDefined(getPrimeNumbers);
        });

        it('should return warning user with zero undefined', () => {
            const number = undefined;
            const expected = 'Please enter a number!';

            const actual = getPrimeNumbers(number);

            assert.deepEqual(actual, expected);
        });

        it('should return warning user with zero null', () => {
            const number = null;
            const expected = 'Please enter a number!';

            const actual = getPrimeNumbers(number);

            assert.deepEqual(actual, expected);
        });

        it('should return warning user with zero ("")', () => {
            const number = "";
            const expected = 'Please enter a number!';

            const actual = getPrimeNumbers(number);

            assert.deepEqual(actual, expected);
        });

        it('should return warning user with zero []', () => {
            const number = [];
            const expected = 'Please enter a number!';

            const actual = getPrimeNumbers(number);

            assert.deepEqual(actual, expected);
        });

        it('should return warning user with zero (" ")', () => {
            const number = " ";
            const expected = 'Please enter a number!';

            const actual = getPrimeNumbers(number);

            assert.deepEqual(actual, expected);
        });

        it('should return is the number prime?', () => {
            const number = 10;
            const expected = false;
        }); 
    });
// Циклы. Получить факториал введённого числа
    describe('getFactorialOfNumbers', () => {
        it('should be defined', () => {
            assert.isDefined(getFactorialOfNumbers);
        });

        it('should warning user with zero (undefined)', () => {
            const number = undefined;
            const expected = 'Please input a number!';

            const actual = getFactorialOfNumbers(number);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with zero (null)', () => {
            const number = undefined;
            const expected = 'Please input a number!';

            const actual = getFactorialOfNumbers(number);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with zero ("")', () => {
            const number = "";
            const expected = 'Please input a number!';

            const actual = getFactorialOfNumbers(number);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with zero (" ")', () => {
            const number = " ";
            const expected = 'Please input a number!';

            const actual = getFactorialOfNumbers(number);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with zero ([])', () => {
            const number = [];
            const expected = 'Please input a number!';

            const actual = getFactorialOfNumbers(number);

            assert.deepEqual(actual, expected);
        });

        it('should return 0', () => {
            const number = 5;
            const expected = 120;

            const actual = getFactorialOfNumbers(number);

            assert.deepEqual(actual, expected);
        });

        it('should return 0', () => {
            const number = 0;
            const expected = 1;

            const actual = getFactorialOfNumbers(number);

            assert.deepEqual(actual, expected);
        });

    });
// Циклы. Получить сумму вводимого числа
    describe('getSumOfInputNumber', () => {
        it('should be defined', () => {
            assert.isDefined(getSumOfInputNumber);
        });

        it('should warning user with zero (undefined)', () => {
            const number = undefined;
            const expected = 'Please input a number!';

            const actual = getSumOfInputNumber(number);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with zero (null)', () => {
            const number = null;
            const expected = 'Please input a number!';

            const actual = getSumOfInputNumber(number);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with zero ("")', () => {
            const number = "";
            const expected = 'Please input a number!';

            const actual = getSumOfInputNumber(number);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with zero []', () => {
            const number = [];
            const expected = 'Please input a number!';

            const actual = getSumOfInputNumber(number);

            assert.deepEqual(actual, expected);
        });

        it('should return 123', () => {
            const number = 123;
            const expected = 6;

            const actual = getSumOfInputNumber(number);

            assert.deepEqual(actual, expected);
        });

        it('should return 100', () => {
            const number = 100;
            const expected = 1;

            const actual = getSumOfInputNumber(number);

            assert.deepEqual(actual, expected)
        });
    });
// Циклы. Получить зеркальное отражение числа
    describe('getReverseOfNum', () => {
        it('should be defined', () => {
            assert.isDefined(getReverseOfNum);
        });

        it('should warning user with zero (undefined)', () => {
            const number = undefined;
            const expected = 'Please input a number!';

            const actual = getReverseOfNum(number);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with zero (null)', () => {
            const number = null;
            const expected = 'Please input a number!';

            const actual = getReverseOfNum(number);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with zero ("")', () => {
            const number = "";
            const expected = 'Please input a number!';

            const actual = getReverseOfNum(number);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with zero (" ")', () => {
            const number = " ";
            const expected = 'Please input a number!';

            const actual = getReverseOfNum(number);

            assert.deepEqual(actual, expected);
        });

        it('should return Please input a number! ([])', () => {
            const number = [];
            const expected = 'Please input a number!';

            const actual = getReverseOfNum(number);

            assert.deepEqual(actual, expected);
        });

        it('should return 123', () => {
            const number = 123;
            const expected = 321;

            const actual = getReverseOfNum(number);

            assert.deepEqual(actual, expected);
        });

        it('should return 100', () => {
            const number = 100;
            const expected = 001;

            const actual = getReverseOfNum(number);

            assert.deepEqual(actual, expected);
        });
    });

// Массивы. Найти минимальный элемент массива
    describe('findMinOfArray', () => {
        it('should be defined', () => {
            assert.isDefined(findMinOfArray);
        });

        it('should warning user with [] (undefined)', () => {
            const arr = undefined;
            const expected = 'Please input an array!';

            const actual = findMinOfArray(arr);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with [] ("")', () => {
            const  arr = "";
            const expected = 'Please input an array!';

            const actual = findMinOfArray(arr);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with [] 1', () => {
            const arr = 1;
            const expected = 'Please input an array!';

            const actual = findMinOfArray(arr);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with [] (" ") ', () => {
            const arr = " ";
            const expected = 'Please input an array!';

            const actual = findMinOfArray(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return 1', () => {
            const arr = [1,2,3];
            const expected = 1;

            const actual = findMinOfArray(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return 0', () => {
            const arr = [0,2,3];
            const expected = 0;

            const actual = findMinOfArray(arr);

            assert.deepEqual(actual, expected);
        });
    });
    
// Массивы. Найти максимальное значение массива
    describe('findMaxOfArray', () => {
        it('should be defined', () => {
            assert.isDefined(findMaxOfArray);
        });

        it('should warning user with [] (undefined)', () => {
            const arr = undefined;
            const expected = 'Please input an array!';

            const actual = findMaxOfArray(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return Please input an array! empty string "" \'\'', () => {
            const  arr = "";
            const expected = 'Please input an array!';

            const actual = findMaxOfArray(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return Please input an array! 1', () => {
            const arr = 1;
            const expected = 'Please input an array!';

            const actual = findMaxOfArray(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return Please input an array! (" ") ', () => {
            const arr = " ";
            const expected = 'Please input an array!';

            const actual = findMaxOfArray(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return 2', () => {
            const arr = [1,2,3];
            const expected = 3;

            const actual = findMaxOfArray(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return 2', () => {
            const arr = [5, 0, 2];
            const expected = 2;

            const actual = getMaxIndexOfArray(arr);

            assert.deepEqual(actual, expected);
        });
    });

// Массивы. Найти индекс минимальное значение массива
    describe('getMinIndexOfArray', () => {
        it('should be defined', () => {
            assert.isDefined(getMinIndexOfArray);
        });

        it('should warning user with []  (undefined)', () => {
            const arr = undefined;
            const expected = 'Please input an array!';

            const actual = getMinIndexOfArray(arr);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with [] (null)', () => {
            const arr = null;
            const expected = 'Please input an array!';

            const actual = getMinIndexOfArray(arr);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with []', () => {
            const arr = [];
            const expected = 'Please input an array!';

            const actual = getMinIndexOfArray(arr);

            assert.deepEqual(actual, expected);
        });

        it('warning user with [] \'\' empty string "" ', () => {
            const  arr = "";
            const expected = 'Please input an array!';

            const actual = getMinIndexOfArray(arr);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with [] 1', () => {
            const arr = 1;
            const expected = 'Please input an array!';

            const actual = getMinIndexOfArray(arr);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with [] (" ") ', () => {
            const arr = " ";
            const expected = 'Please input an array!';

            const actual = getMinIndexOfArray(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return 0', () => {
            const arr = [0,1,2];
            const expected = 0;

            const actual = getMinIndexOfArray(arr);

            assert.deepEqual(actual, expected);
        });
    });

// Массивы. Найти индекс максимальное значение массива
    describe('getMaxIndexOfArray', () => {
        it('should be defined', () => {
            assert.isDefined(getMaxIndexOfArray);
        });

        it('should warning user with [] (undefined)', () => {
            const arr = undefined;
            const expected = 'Please input an array!';

            const actual = getMaxIndexOfArray(arr);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with [] (null)', () => {
            const arr = null;
            const expected = 'Please input an array!';

            const actual = getMinIndexOfArray(arr);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with []', () => {
            const arr = [];
            const expected = 'Please input an array!';

            const actual = getMinIndexOfArray(arr);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with [] \'\' empty string "" ', () => {
            const  arr = "";
            const expected = 'Please input an array!';

            const actual = getMaxIndexOfArray(arr);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with [] 1', () => {
            const arr = 1;
            const expected = 'Please input an array!';

            const actual = getMaxIndexOfArray(arr);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with [] (" ") ', () => {
            const arr = " ";
            const expected = 'Please input an array!';

            const actual = getMaxIndexOfArray(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return 2', () => {
            const arr = [1,3,5];
            const expected = 2;

            const actual = getMaxIndexOfArray(arr);

            assert.deepEqual(actual, expected);
        });
    });

// Массивы. Найти индекс максимальное значение массива
    describe('getEvenNumSum', () => {
        it('should be defined', () => {
            assert.isDefined(getEvenNumSum);
        });

        it('should warning user with [] (undefined)', () => {
            const arr = undefined;
            const expected = 'Please input an array!';

            const actual = getEvenNumSum(arr);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with [] (null)', () => {
            const arr = null;
            const expected = 'Please input an array!';

            const actual = getMinIndexOfArray(arr);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with []', () => {
            const arr = [];
            const expected = 'Please input an array!';

            const actual = getMinIndexOfArray(arr);

            assert.deepEqual(actual, expected);
        });
        
        it('should warning user with [] \'\' empty string "" ', () => {
            const  arr = "";
            const expected = 'Please input an array!';

            const actual = getEvenNumSum(arr);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with [] 1', () => {
            const arr = 1;
            const expected = 'Please input an array!';

            const actual = getEvenNumSum(arr);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with [] (" ") ', () => {
            const arr = " ";
            const expected = 'Please input an array!';

            const actual = getEvenNumSum(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return 12', () => {
            const arr = [1,2,3,4,5,6];
            const expected = 12;

            const actual = getEvenNumSum(arr);

            assert.deepEqual(actual, expected);
        });


    });

// Массивы. Сделать зеркальное отражение массива
    describe('getReverseOfArr', () => {
        it('should be defined', () => {
            assert.isDefined(getReverseOfArr);
        });

        it('should warning user with [] (undefined)', () => {
            const arr = undefined;
            const expected = 'Please input an array!';

            const actual = getReverseOfArr(arr);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with [] (null)', () => {
            const arr = null;
            const expected = 'Please input an array!';

            const actual = getMinIndexOfArray(arr);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with []', () => {
            const arr = [];
            const expected = 'Please input an array!';

            const actual = getMinIndexOfArray(arr);

            assert.deepEqual(actual, expected);
        });
        
        it('should warning user with [] empty string "" ', () => {
            const  arr = "";
            const expected = 'Please input an array!';

            const actual = getReverseOfArr(arr);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with [] 1', () => {
            const arr = 1;
            const expected = 'Please input an array!';

            const actual = getReverseOfArr(arr);

            assert.deepEqual(actual, expected);
        });

        it('should warning user with [] (" ") ', () => {
            const arr = " ";
            const expected = 'Please input an array!';

            const actual = getReverseOfArr(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return [6,5,4,3,2,1]', () => {
            const arr = [1,2,3,4,5,6];
            const expected = [6,5,4,3,2,1];

            const actual = getReverseOfArr(arr);

            assert.deepEqual(actual, expected);
        });
    });

// Массивы. Посчитать количество нечётных элементов
describe('getOddArrSum', () => {
    it('should be defined', () => {
        assert.isDefined(getOddArrSum);
    });

    it('should warning user with [] (undefined)', () => {
        const arr = undefined;
        const expected = 'Please input an array!';

        const actual = getOddArrSum(arr);

        assert.deepEqual(actual, expected);
    });

    it('should warning user with [] (null)', () => {
        const arr = null;
        const expected = 'Please input an array!';

        const actual = getMinIndexOfArray(arr);

        assert.deepEqual(actual, expected);
    });

    it('should warning user with []', () => {
        const arr = [];
        const expected = 'Please input an array!';

        const actual = getMinIndexOfArray(arr);

        assert.deepEqual(actual, expected);
    });
    
    it('should warning user with [] empty string "" ', () => {
        const  arr = "";
        const expected = 'Please input an array!';

        const actual = getOddArrSum(arr);

        assert.deepEqual(actual, expected);
    });

    it('should warning user with [] 1', () => {
        const arr = 1;
        const expected = 'Please input an array!';

        const actual = getOddArrSum(arr);

        assert.deepEqual(actual, expected);
    });

    it('should warning user with [] (" ") ', () => {
        const arr = " ";
        const expected = 'Please input an array!';

        const actual = getOddArrSum(arr);

        assert.deepEqual(actual, expected);
    });

    it('should return 3', () => {
        const arr = [1,2,3,4,5,6];
        const expected = 3;

        const actual = getOddArrSum(arr);

        assert.deepEqual(actual, expected);
    });
});

//Массивы. Поменять местами половины массива
describe('getReverseOfHalfAnArray', () => {
    it('should be defined', () => {
        assert.isDefined(getReverseOfHalfAnArray);
    });

    it('should warning user with [] (undefined)', () => {
        const arr = undefined;
        const expected = 'Please input an array!';

        const actual = getReverseOfHalfAnArray(arr);

        assert.deepEqual(actual, expected);
    });

    it('should warning user with [] (null)', () => {
        const arr = null;
        const expected = 'Please input an array!';

        const actual = getReverseOfHalfAnArray(arr);

        assert.deepEqual(actual, expected);
    });

    it('should warning user with []', () => {
        const arr = [];
        const expected = 'Please input an array!';

        const actual = getReverseOfHalfAnArray(arr);

        assert.deepEqual(actual, expected);
    });
    
    it('should warning user with [] empty string "" ', () => {
        const  arr = "";
        const expected = 'Please input an array!';

        const actual = getReverseOfHalfAnArray(arr);

        assert.deepEqual(actual, expected);
    });

    it('should warning user with [] 1', () => {
        const arr = 1;
        const expected = 'Please input an array!';

        const actual = getReverseOfHalfAnArray(arr);

        assert.deepEqual(actual, expected);
    });

    it('should warning user with [] (" ") ', () => {
        const arr = " ";
        const expected = 'Please input an array!';

        const actual = getReverseOfHalfAnArray(arr);

        assert.deepEqual(actual, expected);
    });

    it('should return [4,5,6,1,2,3]', () => {
        const arr = [1,2,3,4,5,6];
        const expected = [4,5,6,1,2,3];

        const actual = getReverseOfHalfAnArray(arr);

        assert.deepEqual(actual, expected);
    });
});

// Показать день недели по номеру
    describe('definedWeekDay', () => {
        it('should be defined', () => {
            assert.isDefined(definedWeekDay);
        });

        it('should return \'\' (0)', () => {
            const number = 0;
            const expected = 'Input right data';

            const actual = definedWeekDay(number);

            assert.deepEqual(actual, expected);
        });

        it('should return Input right data (undefined)' , () => {
            const number = undefined;
            const expected = 'Input right data';

            const actual = definedWeekDay(number);

            assert.deepEqual(actual, expected);
        });

        it('should return Please input an array! (null)', () => {
            const arr = null;
            const expected = 'Please input an array!';

            const actual = getMinIndexOfArray(arr);

            assert.deepEqual(actual, expected);
        });

        it('should return Please input an array! []', () => {
            const arr = [];
            const expected = 'Please input an array!';

            const actual = getMinIndexOfArray(arr);

            assert.deepEqual(actual, expected);
        });
        
        it('should return Monday (1)', () => {
            const number = 1;
            const expected = 'Monday';

            const actual = definedWeekDay(number);

            assert.deepEqual(actual, expected);
        });

        it('should return Tuesday (2)', () => {
            const number = 2;
            const expected = 'Tuesday';

            const actual = definedWeekDay(number);

            assert.deepEqual(actual, expected);
        });

        it('should return Wednesday (3)', () => {
            const number = 3;
            const expected = 'Wednesday';

            const actual = definedWeekDay(number);

            assert.deepEqual(actual, expected);
        });

        it('should return Thursday (4)', () => {
            const number = 4;
            const expected = 'Thursday';

            const actual = definedWeekDay(number);

            assert.deepEqual(actual, expected);
        });

        it('should return Friday (5)', () => {
            const number = 5;
            const expected = 'Friday';

            const actual = definedWeekDay(number);

            assert.deepEqual(actual, expected);
        });

        it('should return Saturday (6)', () => {
            const number = 6;
            const expected = 'Saturday';

            const actual = definedWeekDay(number);

            assert.deepEqual(actual, expected);
        });

        it('should return Sunday (7)', () => {
            const number = 7;
            const expected = 'Sunday';

            const actual = definedWeekDay(number);

            assert.deepEqual(actual, expected);
        });

        it('should return input right data (1-7)', () => {
            const number = -1;
            const expected = 'Input right data';

            const actual = definedWeekDay(number);

            assert.deepEqual(actual, expected);
        });

        it('should return input right data (1-7)', () => {
            const number = ' ';
            const expected = 'Input right data';

            const actual = definedWeekDay(number);

            assert.deepEqual(actual, expected);
        });

        it('should return input right data (1-7)', () => {
            const number = [];
            const expected = 'Input right data';

            const actual = definedWeekDay(number);

            assert.deepEqual(actual, expected);
        });

        it('should return input right data (1-7)', () => {
            const number = [1,2];
            const expected = 'Input right data';

            const actual = definedWeekDay(number);

            assert.deepEqual(actual, expected);
        });

    });
});