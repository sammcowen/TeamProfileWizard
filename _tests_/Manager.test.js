const Manager = require("../lib/Manager");



test ('test manager office number', () => {
    const manager = new Manager('Samm', 645, 'sam@gmail.com', 666);
    expect(manager.officeNumber).toEqual(666);
});

test ('to see if get role returns manager', () => {
    const manager = new Manager('Samm', 645, 'sam@gmail.com', 666);
    expect(manager.role).toEqual('Manager');

});