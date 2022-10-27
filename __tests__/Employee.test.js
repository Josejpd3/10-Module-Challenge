const Employee = require("../lib/Employee");

test('1 (I) should instantiate Employee instance', () => { 
    const e = new Employee();
    expect(typeof(e)).toBe("object");
 });

// SETTERS

 test('2 (S) should set name via contructor arguments', () => { 
    const testValue = "Jose";
    const e = new Employee(testValue, "id", "email");
    expect(e.name).toBe(testValue);
  })

  test('3 (S) should set id via contructor arguments', () => { 
    const testValue = 81;
    const e = new Employee("name", testValue);
    expect(e.id).toBe(testValue);
  })

  test('4 (S) should set email via contructor arguments', () => { 
    const testValue = "josejpd3@gmail.com";
    const e = new Employee("name", "id", testValue);
    expect(e.email).toBe(testValue);
  })

// GETTERS

test('5 (G) should get name via getName()', () => { 
    const testValue = "Jose";
    const e = new Employee(testValue, "id", "email");
    expect(e.getName()).toBe(testValue);
 });

test('6 (G) should get id via getId()', () => { 
    const testValue = 81;
    const e = new Employee("name", testValue, "email");
    expect(e.getId()).toBe(testValue);
 });

test('7 (G) should get email via getEmail()', () => { 
   const testValue = "josejpd3@gmail.com";
   const e = new Employee("name", "id", testValue);
   expect(e.getEmail()).toBe(testValue);
});

test('8 (G) should get role via getRole()', () => { 
    const testValue = "Employee";
    const e = new Employee(testValue);
    expect(e.getRole()).toBe(testValue);
 });