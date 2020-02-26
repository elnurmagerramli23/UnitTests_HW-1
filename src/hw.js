//1 operators
//1.1 even numbers
function even(a, b) {
    if(a % 2 == 0) {
        return a * b
    } else {
        return a + b
    }
}
console.log( "Even numbers ", even(10, 2) );

//1.2 coordinate plane
function coordinatePlane(x, y) {
    if ( x > 0 && y > 0){
        console.log( "Точка с координатами Х и У принадлежат 1-ой четверти" )
    }else if ( x < 0 && y > 0) {
        console.log( "Точка с координатами Х и У принадлежат 2-ой четверти" )
    }else if ( x < 0 && y < 0) {
        console.log( "Точка с координатами Х и У принадлежат 3-ой четверти" )
    }else if ( x > 0 && y < 0) {
        console.log( "Точка с координатами Х и У принадлежат 4-ой четверти" )
    }else if ( x === 0 && y === 0) {
        console.log( "Точка с координатамми Х и У находится в центре координат") 
    }
}console.log( coordinatePlane(0, 0) );

//1.3 sum numbers
function sumOfNumbers( num1, num2, num3 ) {
    let result = 0;

    if ( num1 >  0 ) {
        result += num1
    }
    if ( num2 > 0 ) {
        result += num2
    }
    if ( num3 > 0 ) {
        result += num3
    } 
    
    return result
}
console.log( "Сумма положительных чисел", sumOfNumbers(2, -6, 7) );
//1.4 max sum
function maxSum( numb1, numb2, numb3 ) {
    let ints = numb1 + numb2 + numb3;

    let ints2 = numb1 * numb2 * numb3;

    let inst3 = 0;

    if ( ints > ints2 ) {
        inst3 += ints + 3
    } else if ( ints2 > ints ) {
        inst3 += ints2 + 3
    } return inst3
};

console.log( "Максимальное выражение равно", maxSum(1, 1, 2) );

//1.5 assessment
function assessment( abc ){

if ( abc > 0 && abc <= 19){
    console.log("Оценка студнта равна F")
} else if ( abc >= 20 && abc <= 39){
    console.log("Оценка студнта равна E")
}else if ( abc >= 40 && abc <= 59){
    console.log("Оценка студнта равна D")
}else if ( abc >= 60 && abc <= 74){
    console.log("Оценка студнта равна C")
}else if ( abc >= 75 && abc <= 89){
    console.log("Оценка студнта равна B")
}else if ( abc >= 90 && abc <= 100){
    console.log("Оценка студнта равна A")
}
};

console.log( assessment(23) )

//2 loops
//2.1 even numbers with loop
function evenNums(num) {
    let c = 0;
    
    for ( i = 1; i <= num; i++){
        if ( i % 2 === 0) {
            c += i            
        }
    }   return c
};

console.log( "Количество чётных чисел равна", evenNums(99) );



let sum = 0; 

for ( let i = 1; i < 99; i++){
    if ( i % 2 != 0){
        continue;
}
sum++;
};

console.log( "Сумма чётных чисел равна ", sum );


//2.2 prime numbers

function primeNum(num) {

    for ( let i = 2; i < num; i++ ) {
        if ( num % i === 0) {
            return false;
        }else{
            return true;
        }
}
};

console.log( primeNum(10) );


//2.3

//2.4
function factorial( num1 ) {

    let resFactorial = 1;

        for ( let i = 1; i <= num1; i++) {
            resFactorial *= i 
        }return resFactorial
};

console.log("Фактораил вводимого числа равен", factorial(3) );

//2.5


function sumNumbers( num ) {

    let sumOfNum = 0;
    let remainder = 0;

        while ( num >= 0 ) {
            remainder = num % 10;
            num = ( num - remainder)/10;
            sumOfNum += remainder;
            if (!num) {
                return sumOfNum
        }
        
        }
};

console.log("Сумма чисел заданного числа равна", sumNumbers(103) );


function reverse( numb ) {
    let rem = 0;
    let rever = 0;

        while (numb >= 0) {
            rem = numb % 10;
            numb = (numb - rem) / 10;
            rever = (rever * 10) + rem;
            if (!numb) {
                return rever
            }
        }
};

console.log( "Зеркальным отражением числа является", reverse(123) );



//3
//3.1

function findMin( arr ) {
    let minArr = arr[0];

        for ( let i = 1; i < arr.length; i++) {
            if (arr[i] < minArr) {
                minArr = arr[i]
            }
        }
        
        return minArr;

};

console.log("Минимальный элемент массива ", findMin([1,2,3]) );


//3.2

function findMax( arr ) {

    let maxArr = arr[0];

        for ( let i = 1; i < arr.length; i++) {
            if (arr[i] > maxArr) {
                maxArr = arr[i]
            }
        }

        return maxArr
};

console.log("Максимальный элемент массива", findMax([1,2,3]) );


//3.3
function minIndex(arr) {
    let lowest = 0;

        for (let i = 1; i < arr.length; i++) {
            if ( arr[i] < lowest) {
                lowest = i
            }
            
        }
        return lowest
    
};

console.log("Минимальный индекс массива равен", minIndex([1,2,3]) );



//3.4
function maxIndex(arr) {

    let highest = 0;

        for (let i = 1; i < arr.length; i++) {
            if ( arr[i] > highest) {
                highest = i
            }
            
        }return highest
};

console.log("Максимальный индекс массива равен", maxIndex([1,2,3]) );


//3.5
function evenArrIndex(arr) {

    let evens = 0;

        for (let i = 0; i < arr.length; i++) {
            if ( i % 2 !== 0) {
                evens += arr[i]
            }
            
        }
        return evens
};

console.log("Сумма элементов массива с нечётными индексами равен", evenArrIndex([1,2,3,4,5,6]) )

//3.6
function reverseArr(arr) {

    let reverse = [];

        for (let i = arr.length - 1; i >= 0; i--) {
            reverse [reverse.length] = arr[i]            
        }
        return reverse

};

console.log("Зеркальное отражение массива", reverseArr([1,2,3,4]) )





//3.7
function oddArrIndex(arr) {

    let odds = 0;

        for(let i = 0; i < arr.length; i++) {
            if(arr[i] % 2 !== 0) {
                odds++;
            }
        }
        
        return odds;
};

console.log("Количество нечётных элементов массива равна", oddArrIndex([1,2,3,4]) )


//3.8
function partOfReverse(arr) {
    let newArr = [];

        for (let i = 0; i < arr.length; i++) {

            
        
        }
}
console.log("Перевёрнутый массив", partOfReverse([1,2,3,4]) );



//3.9
//3.10



//4
//4.1
function dayOfWeek(num) {
    let weekArr = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    let newArr = "";
    if (num > 0 && num <= 7) {
        for (let i = 0; i < weekArr.length; i++) {
            if (i === num - 1) {
                newArr = weekArr[i]
            }
            
        }

        return `День недели ${newArr}`
    } else return "не найден"
}

console.log(dayOfWeek(9));


//4.2
//4.3
//4.4
//4.5
//4.6
