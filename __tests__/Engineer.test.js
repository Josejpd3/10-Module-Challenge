const Engineer = require("../lib/Engineer")

test('1 (I) should instantiate Engineer instance', () => { 
    const e = new Engineer();
    expect(typeof(e)).toBe("object");
 });

// SETTERS

test('2 (S) should set name via contructor arguments', () => { 
    const testValue = "Jose";
    const e = new Engineer(testValue, "id", "email", "officeNumber");
    expect(e.name).toBe(testValue);
  })

  test('3 (S) should set id via contructor arguments', () => { 
    const testValue = 81;
    const e = new Engineer("name", testValue, "email", "officeNumber");
    expect(e.id).toBe(testValue);
  })

  test('4 (S) should set email via contructor arguments', () => { 
    const testValue = "josejpd3@gmail.com";
    const e = new Engineer("name", "id", testValue, "officeNumber");
    expect(e.email).toBe(testValue);
  })

  test('5 (S) should set github via contructor arguments', () => { 
    const testValue = "josejpd3";
    const e = new Engineer("name", "id", "email", testValue);
    expect(e.github).toBe(testValue);
  })