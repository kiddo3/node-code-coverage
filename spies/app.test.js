const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');

describe('App', () => {

    let db = {
        saveUser: expect.createSpy()
    };

    app.__set__("db",db);

    it('should call the spy correctly ',() => {
      let spy = expect.createSpy();
      spy('Andrew',25);
      expect(spy).toHaveBeenCalledWith('Andrew',25);
    });

    it('should call save user with object', () => {
       let email = 'rana@gmail.com';
       let password = '12345';

         let spy = expect.createSpy();
        //
         spy(email,password);

       app.handleSignup(email,password  );
        expect(spy).toHaveBeenCalledWith(email,password);
    });
});