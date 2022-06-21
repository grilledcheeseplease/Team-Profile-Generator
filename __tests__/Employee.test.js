// attach to employee class 
const Employee = require('../lib/Employee');

describe('Employee', () => {

  it('Can instantiate Employee instance', () => {
    const e = new Employee();
    expect(typeof (e)).toBe('object');
  });

  it('Should get the employee\'s name', () => {
    const name = 'Ron';
    const e = new Employee(name);
    expect(e.name).toBe(name);
  });

  it('Should get the employee\'s id number', () => {
    const testValue = 800;
    const e = new Employee('Foo', testValue);
    expect(e.id).toBe(testValue);
  });

  it('Should get the employee\'s email', () => {
    const testValue = 'ron@swanson.com';
    const e = new Employee('Foo', 1, testValue);
    expect(e.email).toBe(testValue);
  });

  describe('getName', () => {
    it('Can get name via getName()', () => {
      const testValue = 'Ron';
      const e = new Employee(testValue);
      expect(e.getName()).toBe(testValue);
    });
  });

  describe('getId', () => {
    it('Can get id via getId()', () => {
      const testValue = 800;
      const e = new Employee('Foo', testValue);
      expect(e.getId()).toBe(testValue);
    });
  });

  describe('getEmail', () => {
    it('Can get email via getEmail()', () => {
      const testValue = 'ron@swanson.com';
      const e = new Employee('Foo', 1, testValue);
      expect(e.getEmail()).toBe(testValue);
    });
  });

  describe('getRole', () => {
    it('getRole() should return \'Employee\'', () => {
      const testValue = 'Employee';
      const e = new Employee('Ron', 1, 'ron@swanson.com');
      expect(e.getRole()).toBe(testValue);
    });
  });

});
