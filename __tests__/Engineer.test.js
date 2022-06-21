const { Engineer } = require("../lib/Engineer");

describe('Engineer', () => {

    it('Should get GitHub account username', () => {
        const testValue = 'PawneeGitHub';
        const e = new Engineer('Foo', 1, 'leslie@knope.com', testValue);
        expect(e.github).toBe(testValue);
    });

    it('getRole() should return \'Engineer\'', () => {
        const testValue = 'Engineer';
        const e = new Engineer('Foo', 1, 'leslie@knope.com', 'PawneeGitHub');
        expect(e.getRole()).toBe(testValue);
    });

    it('Should get GitHub username with getGithub()', () => {
        const testValue = 'Engineer';
        const e = new Engineer('Foo', 1, 'leslie@knope.com', testValue);
        expect(e.getGithub()).toBe(testValue);
    });
});