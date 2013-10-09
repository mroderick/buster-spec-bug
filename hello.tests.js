buster.spec.expose();

describe('hello', function(){
    it('is a function', function(){
        expect(hello).toBeFunction();
    });
});
