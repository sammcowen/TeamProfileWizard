const Engineer = require('../lib/Engineer');

test('test to see if engineer returns role of engineer', () => {
    const engineer = new Engineer('Mark', 123, 'm@gmail.com','markgithub');
    expect(engineer.role).toEqual('Engineer');
});

test('test to see if getGithub retrieves github', () => {
    const engineer = new Engineer('Mark', 123, 'm@gmail.com','markgithub');
    expect(engineer.getGithub()).toEqual('markgithub');
});