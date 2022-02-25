const Employee = require('../lib/Employee.js');

test('create an employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
});

test('test employee name', () => {
    const employee = new Employee('Jane');
    expect(employee.name).toEqual('Jane');
    

});
test('test employee id',  () => {
    const employee = new Employee('Jane', 461, 'bip@gmail.com');
    expect(employee.id).toEqual(461);

});
test ('test employee email', () => {
    const employee = new Employee('Jane', 461, 'bip@gmail.com');
    expect(employee.email).toEqual('bip@gmail.com');
});
test('test to see employee role', () => {
    const employee = new Employee('Jane', 461, 'bip@gmail.com');
    expect(employee.role).toEqual('Employee');
});
test('create methods to get employee name', () => {
    const employee = new Employee('Jane', 461, 'bip@gmail.com');
    expect(employee.getName()).toEqual('Jane');
});
test('create method to get employee id ', () => {
    const employee = new Employee('Jane', 461, 'bip@gmail.com');
    expect(employee.getId()).toEqual(461);
});
test('create method to get employee email', () => {
    const employee = new Employee('Jane', 461, 'bip@gmail.com');
    expect(employee.getEmail()).toEqual('bip@gmail.com');
});
test('create a method to return employee role', () => {
    const employee = new Employee('Jane', 461, 'bip@gmail.com');
    expect(employee.getRole()).toEqual('Employee');
})