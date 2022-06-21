const { Manager } = require("../lib/Manager");

describe('Manager', () => {
    
    it('Should get Manager\'s office number', () => {
        const testValue = 999;
        const e = new Manager('Foo', 1, 'ron@swanson.com', testValue);
        expect(e.officeNumber).toBe(testValue);
    });

    it('getRole() should return \'Manager\'', () => {
        const testValue = 'Manager';
        const e = new Manager('Foo', 1, 'ron@swanson.com', 999);
        expect(e.getRole()).toBe(testValue);
    });

    it('Should get manager\'s office number with getOfficeNumber()', () => {
        const testValue = 999;
        const e = new Manager('Foo', 1, 'ron@swanson.com', testValue);
        expect(e.getOfficeNumber()).toBe(testValue);
    });
});