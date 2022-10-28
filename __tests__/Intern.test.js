const Intern = require("../lib/Intern")

test('1 (I) should instantiate Intern instance', () => { 
    const e = new Intern.Intern();
    expect(typeof(e)).toBe("object");
 });

 // SETTERS

test('2 (S) should set name via contructor arguments', () => { 
    const testValue = "Jose";
    const e = new Intern.Intern(testValue, "id", "email", "school");
    expect(e.name).toBe(testValue);
  })

  test('3 (S) should set id via contructor arguments', () => { 
    const testValue = 81;
    const e = new Intern.Intern("name", testValue, "email", "school");
    expect(e.id).toBe(testValue);
  })

  test('4 (S) should set email via contructor arguments', () => { 
    const testValue = "josejpd3@gmail.com";
    const e = new Intern.Intern("name", "id", testValue, "school");
    expect(e.email).toBe(testValue);
  })

  test('5 (S) should set school via contructor arguments', () => { 
    const testValue = "Univerity of Central Florida";
    const e = new Intern.Intern("name", "id", "email", testValue);
    expect(e.school).toBe(testValue);
  })


    // GETTERS

    test('6 (G) should get name via getName()', () => { 
        const testValue = "Jose";
        const e = new Intern.Intern(testValue, "id", "email", "school");
        expect(e.getName()).toBe(testValue);
     });
    
    test('7 (G) should get id via getId()', () => { 
        const testValue = 81;
        const e = new Intern.Intern("name", testValue, "email", "school");
        expect(e.getId()).toBe(testValue);
     });
    
    test('8 (G) should get email via getEmail()', () => { 
       const testValue = "josejpd3@gmail.com";
       const e = new Intern.Intern("name", "id", testValue, "school");
       expect(e.getEmail()).toBe(testValue);
    });
    
    test('9 (G) should get school via getSchool()', () => { 
        const testValue = "Univerity of Central Florida";
        const e = new Intern.Intern("name", "id", "email", testValue);
        expect(e.getSchool()).toBe(testValue);
     });
    
    test('10 (G) should get role via getRole()', () => { 
        const testValue = "Intern";
        const e = new Intern.Intern(testValue);
        expect(e.getRole()).toBe(testValue);
     });