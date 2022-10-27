const Engineer = require("../lib/Engineer")

test('1 (I) should instantiate Engineer instance', () => { 
    const e = new Engineer();
    expect(typeof(e)).toBe("object");
 });