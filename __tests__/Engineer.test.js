const Engineer = require("../lib/Engineer")

test('1 (I) should instantiate Engineer instance', () => { 
    const e = new Engineer.Engineer();
    expect(typeof(e)).toBe("object");
 });

// SETTERS

test('2 (S) should set name via contructor arguments', () => { 
    const testValue = "Jose";
    const e = new Engineer.Engineer(testValue, "id", "email", "github");
    expect(e.name).toBe(testValue);
  })

  test('3 (S) should set id via contructor arguments', () => { 
    const testValue = 81;
    const e = new Engineer.Engineer("name", testValue, "email", "github");
    expect(e.id).toBe(testValue);
  })

  test('4 (S) should set email via contructor arguments', () => { 
    const testValue = "josejpd3@gmail.com";
    const e = new Engineer.Engineer("name", "id", testValue, "github");
    expect(e.email).toBe(testValue);
  })

  test('5 (S) should set github via contructor arguments', () => { 
    const testValue = "josejpd3";
    const e = new Engineer.Engineer("name", "id", "email", testValue);
    expect(e.github).toBe(testValue);
  })


    // GETTERS

test('6 (G) should get name via getName()', () => { 
    const testValue = "Jose";
    const e = new Engineer.Engineer(testValue, "id", "email", "github");
    expect(e.getName()).toBe(testValue);
 });

test('7 (G) should get id via getId()', () => { 
    const testValue = 81;
    const e = new Engineer.Engineer("name", testValue, "email", "github");
    expect(e.getId()).toBe(testValue);
 });

test('8 (G) should get email via getEmail()', () => { 
   const testValue = "josejpd3@gmail.com";
   const e = new Engineer.Engineer("name", "id", testValue, "github");
   expect(e.getEmail()).toBe(testValue);
});

test('9 (G) should get github via getGithub()', () => { 
    const testValue = "josejpd3";
    const e = new Engineer.Engineer("name", "id", "email", testValue);
    expect(e.getGithub()).toBe(testValue);
 });

test('10 (G) should get role via getRole()', () => { 
    const testValue = "Engineer";
    const e = new Engineer.Engineer(testValue);
    expect(e.getRole()).toBe(testValue);
 });