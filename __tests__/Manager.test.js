const Manager = require('../lib/Manager')

test('1 (I) should instantiate Manager Manager instance', () => { 
    const e = new Manager();
    expect(typeof(e)).toBe("object");
 });
