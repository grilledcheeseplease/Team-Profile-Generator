const { Intern } = require("../lib/Intern");

describe('Intern', () => {

    it('Should get Intern\'s school', () => {
        const testValue = 'PCC';
        const e = new Intern('Foo', 1, 'april@ludgate.com', testValue);
        expect(e.school).toBe(testValue);
    });

    it('getRole() should return \'Intern\'', () => {
        const testValue = 'Intern';
        const e = new Intern('Foo', 1, 'april@ludgate.com', 'PCC');
        expect(e.getRole()).toBe(testValue);
    });

    it('Should get school via getSchool()', () => {
        const testValue = 'PCC';
        const e = new Intern('Foo', 1, 'april@ludgate.com', testValue);
        expect(e.getSchool()).toBe(testValue);
    });
});