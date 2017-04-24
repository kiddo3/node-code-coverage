const request = require('supertest');
const app = require('./server').app;
const expect = require('expect');


describe('Server', () => {

    describe('Get /', () => {

        //testing http request
        it('should return hello world response', (done) => {

            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found',
                        name: 'Todo App v1.0'
                    })
                })
                .end(done);
        });

    });

    describe('GET /users', () => {
        it('should return array of users with 200 status code', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toEqual([
                        {
                            name: 'Rana Ali',
                            age: 22
                        },
                        {
                            name: 'Bilal Ali',
                            age: 25
                        }
                    ])
                })
                .end(done);
        });
    });

});
