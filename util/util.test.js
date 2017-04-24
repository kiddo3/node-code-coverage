const utils = require('./util');
const expect = require('expect');


//using describe to group the tests
describe('Utitls', () => {

    describe('#add', () => {
        it('it should add two numbers', () => {
            let res = utils.add(33, 11);
            expect(res).toBe(44).toBeA('number');
        });

        //testing asynchronous code
        it('should async add two numbers', (done) => {
            utils.asyncAdd(3, 4, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            });

        });

    });

    describe('#square', () => {

        it('it should multiple two number', () => {
            let res = utils.square(5);
            expect(res).toBe(25).toBeA('number');
        });

//testing asynchronous code
        it('should async square of a number', (done) => {
            utils.asyncSquare(5, (square) => {
                expect(square).toBe(25).toBeA('number');
                done();
            });
        });

    });

});


//comparing objects
it('should be expect some values', () => {
    // expect({name: 'Rana Ali'}).toEqual({name: 'Rana Ali'});
    // expect([2,3,4,5]).toInclude(5);
    expect([2, 3, 4, 5]).toExclude(51);
});


//should verify fist and last name is set
it('should verify firstname and lastname is set properly', () => {

    let user = {
        location: 'lahore',
        age: 22
    };

    let res = utils.setName(user, "Rana Ali");

    expect(res).toInclude({
        firstname: "Rana",
        lastname: "Ali"
    });

});