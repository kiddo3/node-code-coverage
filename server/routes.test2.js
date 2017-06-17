const request = require('supertest');
const app = require('./server').app;
const expect = require('expect');


describe('Server', () => {

    describe('Get /tests/other', () => {

        //testing http request
        it('should return other response', (done) => {

            request(app)
                .get('/tests/other')
                .expect(200)
                .expect((res) => {
                    console.log(res.body)
                    expect(res.body).toInclude({name: 'Rana Ali'})
                })
                .end(done);
        });

    });
});