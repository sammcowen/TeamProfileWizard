const employee = require('../lib/Employee.js');

test('create an employee object', () => {
    const employee = new Employee('Ann, 45, ann@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String)); 
});