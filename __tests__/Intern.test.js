const Intern = require("../lib/Intern")

test('1 (I) should instantiate Intern instance', () => { 
    const e = new Intern();
    expect(typeof(e)).toBe("object");
 });

 // SETTERS

test('2 (S) should set name via contructor arguments', () => { 
    const testValue = "Jose";
    const e = new Intern(testValue, "id", "email", "school");
    expect(e.name).toBe(testValue);
  })

  test('3 (S) should set id via contructor arguments', () => { 
    const testValue = 81;
    const e = new Intern("name", testValue, "email", "school");
    expect(e.id).toBe(testValue);
  })

  test('4 (S) should set email via contructor arguments', () => { 
    const testValue = "josejpd3@gmail.com";
    const e = new Intern("name", "id", testValue, "school");
    expect(e.email).toBe(testValue);
  })

  test('5 (S) should set school via contructor arguments', () => { 
    const testValue = "Univerity of Central Florida";
    const e = new Intern("name", "id", "email", testValue);
    expect(e.school).toBe(testValue);
  })