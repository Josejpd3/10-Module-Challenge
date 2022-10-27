const Intern = require("../lib/Intern")

test('1 (I) should instantiate Intern instance', () => { 
    const e = new Intern();
    expect(typeof(e)).toBe("object");
 });