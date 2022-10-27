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

  // GETTERS

test('6 (G) should get name via getName()', () => { 
    const testValue = "Jose";
    const e = new Manager(testValue, "id", "email", "officeNumber");
    expect(e.getName()).toBe(testValue);
 });

test('7 (G) should get id via getId()', () => { 
    const testValue = 81;
    const e = new Manager("name", testValue, "email", "officeNumber");
    expect(e.getId()).toBe(testValue);
 });

test('8 (G) should get email via getEmail()', () => { 
   const testValue = "josejpd3@gmail.com";
   const e = new Manager("name", "id", testValue, "officeNumber");
   expect(e.getEmail()).toBe(testValue);
});

test('9 (G) should get officeNumber via getOfficeNumber()', () => { 
    const testValue = "0910";
    const e = new Manager("name", "id", "email", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
 });

test('10 (G) should get role via getRole()', () => { 
    const testValue = "Manager";
    const e = new Manager(testValue);
    expect(e.getRole()).toBe(testValue);
 });