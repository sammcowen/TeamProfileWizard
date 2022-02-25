const { TestWatcher } = require('jest');
const Intern = require('../lib/Intern');

test('test to see if school equals schoolname', () => {
    const intern = new Intern('May', 222, 'may@gmail.com', 'Sf State');
    expect(intern.school).toEqual('Sf State');
});

test('see if getSchool gets the school entered', () => {
    const intern = new Intern('May', 222, 'may@gmail.com', 'Sf State');
    expect(intern.getSchool()).toEqual('Sf State');
});

test('test to see if getrole returns Intern', () => {
    const intern = new Intern('May', 222, 'may@gmail.com', 'Sf State');
    expect(intern.getRole()).toEqual('Intern');
});
