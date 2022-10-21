# Closures in JavaScript

Closures is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone.

Closures gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time.

A Closure makes sure that a function doesn't loose connection to variables that existed at the function's birth place.

A closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the environment where the function was created.

Closures in JavaScript are a way to create private variables and methods. A closure is a function that has access to the parent scope, even after the parent function has closed.

Closures simply allow a function to access variables from an outer function. In JavaScript, closures are created every time a function is created, at function creation time.

We do not have to manually create a closure, they are a natural by-product of how functions are created in JavaScript.

```JavaScript
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker(); // 1 passengers
booker(); // 2 passengers
booker(); // 3 passengers

console.dir(booker);..9999
```

In the example above, the `secureBooking` function returns a function. This returned function has access to the `passengerCount` variable of the parent function, even after the parent function has returned. The `booker` variable holds the returned function. The `booker` function has access to the `passengerCount` variable of the `secureBooking` function, even after the `secureBooking` function has returned. This is called a closure.

booker function is in global scope, but it has access to the `passengerCount` variable of the `secureBooking` function, even after the `secureBooking` function has returned. This is called a closure.

Any function always has access to the variable environment of the execution context in which the function was created, this lexical environment, even after that execution context is gone.

```JavaScript
function sayWord (word) {
    return () => console.log(word);
}
const sayHello = sayWord('hello');
sayHello(); // hello
```

There's `two` interesting point to notice:

> The returned function from sayWord can `access` the word `parameter`

> The returned function maintain the value of word when sayHello is called `outside scope` of word.

## The first point can be explained by **Lexical Scope**:

**`Lexical Scope:`** The returned function can access word before it exists in its order scope.

## The second point becouse of **Closures**:

- A `Closure` is a function combined with references to variables define outside of it.
- `Closure` maintain the variable references, which allow function to access variables outside of their scope.
- They `enclose` the function and variable in its environment.

## Example of Closures in JavaScript

**`Callbacks:`** It is common for a callback to reference a variable declared outside of itself.<br>
E.g.

```JavaScript
const cars = function getCarsByMake(make) {
    return cars.filter(x => x.make == make);
}
```

make is available in callback becase of lexical scoping and make is persisted when filter called because of closure.

**`Storing State:`** We can use closures from functions that store states.
Let's say a function which returns an object that can store and change name.

```JavaScript
function makePerson(name) {
    let _name = name;
    return {
        setName: (newName) => (_name = newName),
        getName: () => _name
    };
}
const me = makePerson ("Bishal");
console.log(me.getName()); // Bishal

me.setName("Bijaya");
console.log(me.getName()); // Bijaya
```

It shows how closure don't freeze values of variables from function's outer scope during creation. Instead they maintain the references throughout closure's lifetime.

## Private Methods

So In oops concept, In a class we have private state and expose getter and setter methods public. <br>
We can extend this oops

```JavaScript
function makePerson(name) {
    let _name = name;
    function privateSetName(newName) {
        _name = newName;
    }
    return {
        setName: (newName) => privateSetName(newName),
        getName: () => _name
    };
}
```

privateSetName is not directly accessible to consumers and it can access the private state variable \_name through closure.

## Closures make it possible for:

- functions to maintain connections with outer variables, even outside scope of the variables.
  (like LinkedIn maybe:)<br>

- There are many uses of closures from creating class like structures that store state and implement private methods to passing callback to event handless.
