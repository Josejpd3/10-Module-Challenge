const Manager = require('../lib/Manager')

test('1 (I) should instantiate Manager Manager instance', () => { 
    const e = new Manager();
    expect(typeof(e)).toBe("object");
 });


// SETTERS

test('2 (S) should set name via contructor arguments', () => { 
    const testValue = "Jose";
    const e = new Manager(testValue, "id", "email");
    expect(e.name).toBe(testValue);
  })

  test('3 (S) should set id via contructor arguments', () => { 
    const testValue = 81;
    const e = new Manager("name", testValue);
    expect(e.id).toBe(testValue);
  })

  test('4 (S) should set email via contructor arguments', () => { 
    const testValue = "josejpd3@gmail.com";
    const e = new Manager("name", "id", testValue, "officeNumber");
    expect(e.email).toBe(testValue);
  })

  test('5 (S) should set officeNumber via contructor arguments', () => { 
    const testValue = "1320";
    const e = new Manager("name", "id", "email", testValue);
    expect(e.officeNumber).toBe(testValue);
  })
