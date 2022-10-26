# Promises and Fetch API

[Promises](#promises-in-javascript)
[Fetch API](#fetch-api)
[Promisifying setTimeout](#promisifying-settimeout)
[Promisifying the Geolocation API](#promisifying-the-geolocation-api)

# Fetch API

The **Fetch API** provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. <br>

It also provides a global **fetch()** method that provides an easy, logical way to fetch resources asynchronously across the network. <br>

## The Fetch() Method

The **fetch()** method takes one mandatory argument, the path to the resource you want to fetch. <br>

It returns a **promise** that resolves to the **response** to that request, whether it is successful or not. <br>

E.g.

```JavaScript
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => console.log(data));
```

# Promises in JavaScript

A `promises` is a javascript object that allows you to make asynchronous calls. <br>
It produces a value when async operation completes successfully or produces an error if it doesn't complete. <br>

- a object that is used as a placeholder for the future result of an asynchronous operation.
- a container for an asynchronously delivered value.
- a container for future value.
- no longer need to use callbacks and event handlers to handle async operations.
- Instead of nesting callbacks, we can chain promises for sequential async operations and handle errors in a single place. (error handling or escaping callback hell)

### Promise Lifecycle

Pending ------Settled-----> Fulfilled or Rejected

- **Pending** - initial state, neither fulfilled nor rejected.
- **Settled** - the promise has been fulfilled or rejected.
- **Fulfilled** - meaning that the operation was completed successfully.
- **Rejected** - meaning that the operation failed.

We only consume promises when we already have a promise. <br>

Build promise (fetch API) -----------> Consume promise (then, catch, finally)

We can create a promise using the `Promise` constructor. <br>

```JavaScript
const promise = new Promise((resolve, reject) => {
    // do something
    // if success
    resolve();
    // if error
    reject();
});
```

You can create **promise** using **constructor**:

```JavaScript
let promise = new Promise (function(resolve, reject){

})
```

**Executor function takes two arguements:-**

- `resolve` - indicate successful completion
- `reject` - indicates an error

```js
const lotterPromise = new Promise(function (resolve, reject) {

console.log('Lotter draw is happening 🔮');

setTimeout(function () {
    if (Math.random() >= 0.5) {
        resolve('You WIN 💰');
    } else {
        reject(new Error('You lost your money 💩'));
    }
});

lotterPromise.then((res) => console.log(res)).catch((err) => console.log(err));
```

## The Promise Objects and States

The **Promise Object** should be capable of informing consumers when execution has been started, completed in returned with an error.

1. **State**
   - `pending` - when execution function starts
   - `fulfilled` - when promise resolved successfully
   - `rejected` - when the promise rejects
2. **result**
   - `undefined` - initially when state value is pending
   - `value` - when promise is resolved
   - `error` - when the promise is rejected

A **promise** that is either resolved or rejected are settled.

## Handling Promises by Consumer

`json` method is available on the `response` object returned by the `fetch` method. <br>

- returns a promise that resolves to a json object.

**Three important handler methods:**

- `then()`
- `catch()`
- `finally()`

These methods helps us create a link between executor and consumer.

## The .then() Promise Handler

The `then()` method is used to handle the promise when it is resolved or fulfilled. <br>

It is used to let consumer know outcome of promise. It accept two arguements:

- **result**
- **error** <br>

E.g.

```JavaScript
promise.then(
    (result) => {
        console.log(result);
    },
    (error) => {
        console.log(error);
    }
);
```

## The .catch() Promise Handler

To handle error(rejections) from Promises.
It's better syntax to handle error than handling it with **.then()** <br>

E.g.

```JavaScript
promise.catch(function(error){
    console.log(error);
});
```

## The .finally() Promise Handler

The **finally()** handler method performs cleanups like stopping a loader, closing a live connection and so on. <br>
Irrespective of whether promise resolve or rejects, the **finally()** method will run. <br>

E.g.

```JavaScript
promise.finally( () => {
    console.log('Promise Settled');
}).then((result) => {
    console.log({result});
});
```

## Chaining Promises

We can chain multiple promises together. <br>

E.g.

```JavaScript
promise.then((result) => {
    console.log(result);
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});
```

## Throw Error manually

We can throw error manually using `throw` keyword. <br>

E.g.

```JavaScript
promise.then((result) => {
    console.log(result);
    throw new Error('Error Occured');
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});
```

**Important point to note,**

The **finally()** method passes through result or error to the next handler which can call a **.then()** or **.catch()** again.

# Promisifying setTimeout

We can create a promise using the `Promise` constructor. <br>

```JavaScript
const wait = function(seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds * 1000);
    })
}

wait(1).then(() => {
    console.log('I waited for 1 second');
    return wait(1);
}).then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
}).then(() => {
    console.log('I waited for 3 seconds');
    return wait(1);
}).then(() => {
    console.log('I waited for 4 seconds');
    return wait(1);
}).then(() => {
    console.log('I waited for 5 seconds');
    return wait(1);
});

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));

//output
abc
Error: Problem!
    at <anonymous>:1:13
I waited for 1 second
I waited for 2 seconds
I waited for 3 seconds
I waited for 4 seconds
I waited for 5 seconds
```

# Promisifying the Geolocation API

```JavaScript
navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
);
console.log('Getting position');

//output
Getting position

// const getPosition = function() {
//     return new Promise(function(resolve, reject) {
//         navigator.geolocation.getCurrentPosition(position => resolve(position), err => reject(err));
//     });

const getPosition = function() {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

getPosition().then(pos => console.log(pos));

//output
Position {coords: Coordinates, timestamp: 1610000000000}

};
```

```JavaScript
const whereAmI = function() {
    getPosition().then(pos => {
        const {latitude: lat, longitude: lng} = pos.coords;
        return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(res => {
        if(!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
        return res.json();
    })
    .then(data => {
        console.log(`You are in ${data.city}, ${data.country}`);
    })
    .catch(err => console.error(`${err.message}`));
};

whereAmI();

```
