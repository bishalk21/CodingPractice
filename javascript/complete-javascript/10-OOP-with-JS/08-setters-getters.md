# Setters and Getters

## Setters

- Setters are used to set the value of an object's property.

  ```js
  const account = {
    owner: "Bishal",
    movements: [200, 530, 120, 300],

    get latest() {
      return this.movements.slice(-1).pop();
    },

    set latest(mov) {
      this.movements.push(mov);
    },
  };

  console.log(account.latest); // 300

  account.latest = 50;
  console.log(account.movements); // (5) [200, 530, 120, 300, 50]
  ```

## Getters

- Getters are used to get the value of an object's property.

  ```js
  const account = {
    owner: "Bishal",
    movements: [200, 530, 120, 300],

    get latest() {
      return this.movements.slice(-1).pop();
    },

    set latest(mov) {
      this.movements.push(mov);
    },
  };

  console.log(account.latest); // 300

  account.latest = 50;
  console.log(account.movements); // (5) [200, 530, 120, 300, 50]
  ```

  ```js
    const Person = function (firstName, birthYear) {
        // Instance properties
        this.firstName = firstName;
        this.birthYear = birthYear;

        // Never create a method inside a constructor function
        // this.calcAge = function () {
        //   console.log(2037 - this.birthYear);
        // };

        calcAge = function () {
            console.log(2037 - this.birthYear);
        };

        greet = function () {
            console.log(`Hey ${this.firstName}`);
        };

        // getters
        get age() {
            return 2037 - this.birthYear;
        }

        // setters
        set fullName(name) {
            console.log(name);
            if (name.includes(' ')) this._fullName = name;
            else alert(`${name} is not a full name!`);
        }

        get fullName() {
            return this._fullName;
        }
    };

    const bishal = new Person("Bishal", 1991);
    console.log(bishal); // Person {firstName: "Bishal", birthYear: 1991}

    console.log(bishal.__proto__); // Person {}
    console.log(bishal.__proto__ === Person.prototype); // true

    const jay = new Person("Jay dfg", 1990);

    console.log(jay.age); // 47
  ```
