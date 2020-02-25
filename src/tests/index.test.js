// Если первое число чётное найти произведение, иначе сумму.
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

    it('should return multiply (undefined, undefined)', function() {
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

        it('should return \'\' (undefined)', () => {
            const number = undefined;
            const expected = 'Input right data';

            const actual = definedWeekDay(number);

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

})
