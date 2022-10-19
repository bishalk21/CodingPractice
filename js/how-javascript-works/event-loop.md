# Event cycle and the emergence of asynchronous programming and 5 better Async/AWAIT programming methods

> For the original text, please refer to [here] (httts://blog.sessionStack.com/how-javascript-works-eop-and-the-rise-asyncramming-5-ways-Better-Coding- With-2F077C4438B5), this article uses [Knowledge Sharing Copy 4.0 International License Agreement] (http://creativecommons.org/licenses/by/4.0/) sharing, by [trues://github.com/troland).

** This is the fourth chapter of JavaScript's working principle. **

Now, we will start the first article by reviewing the disadvantages of programming in a single -threaded environment and how to overcome these difficulties to create the amazing JavaScript interaction interface. Old rules, we will share 5 tips to write more concise code using Async/Await at the end of this chapter.

## The limitations of a single thread

In the first [article] (https://github.com/troland/how-javascript-works/blob/master/overw.md), we considered a problem, that is, when the call stack contains long-term operation, it needs to run for a long time. What happens when the function is called.

For example, imagine that a complex picture conversion algorithm is running in the browser.

At this time, the function in the call stack needs to be executed. At this time, the browser will be blocked and it cannot do anything else. This means that the browser will have no response and cannot rendering and running other code. This will bring a problem -the program interface will no longer be efficient and pleasant.

The program has no response.

In some cases, this may not be a big deal. However, this may cause more serious problems. Once the browser runs too many tasks at the same time in calling the stack, the browser will stop responding for a long time. At that time, most browsers will throw an error and ask if you turn off the webpage.

This is ugly and it completely destroys the user experience of the program.

! [Unlimited response] (https://user-images.githubusercontent.com/1475173/40287991-b76a14b8-5ce3-11E8-9808-242e1c6501ba.jpeg)

## javascript programmed module

You may write the JavaScript program in a single .js file, but the program is composed of multiple code blocks. At present, only one code block is running, and other code blocks will run later. The most common block -shaped unit is a function.

Most JavaScript rookies may need to understand the problem, that is, after **, ** indicates that it is not strict and immediately executed after now. In other words, according to the definition, \*\* The task that can not run now will be completed asynchronous, so that you will not subconsciously expect or want to encounter the UI blocking behavior mentioned above.

Look at the following code:

`` `
// AJAX's any AJAX function provided by a library
var response = ajax ('https://example.com/api');

console.log (response);
// ` Response will not return to the data ``  `

Maybe you already know that the standard AJAX request will not be fully executed simultaneously, which means that during the code running phase, the AJAX (..) function will not return any value to Response variables.

A simple way to get the return value of the asynchronous function is to use the callback function.

`` ` ajax ('https://example.com/api', function (response) { console.log (response); // `response` is worth it now }); `` `

Just pay attention: In fact, you can initiate a synchronous AJAX request. However, never do that. If the synchronous AJAX request is initiated, the UI of the JavaScript program will be blocked -users cannot click, enter data, jump or scroll. This will freeze any user interaction experience. This is a very bad practice.

The following example code, but please do not do this-Do not destroy the webpage:

`` ` // Assume that you use jQuery jquery.ajax ({ url: 'https://api.example.com/endpoint', Success: function (Response) { // Successful callback. }, async: false // synchronization }); `` `

We take AJAX request as an example. You can execute any code block asynchronous.

You can use the `settimeout (callback, milliseconds)` function to perform the code asynchronous. The `settimeout` function will trigger an event (timer) at a certain moment. The following code:

`` ` function first () { console.log ('first'); } function second () { console.log ('second'); } function Third () { console.log ('Third'); } first (); settimeout (sex, 1000); // After 1 second, call the Second function Third (); `` `

The console output is as follows:

`` `
FIRST
Third
sex

```
## Incident loop detailed explanation

We will start with a somewhat strange statement -although the asynchronous JavaScript code is allowed (such as the `settimetout` discussed before), until ES6, in fact, JavaScript itself did not integrate any direct asynchronous programming concepts. The JavaScript engine allows only a single program fragment at any time.

You can view the previous [article] (https://github.com/troland/how-javascript-works/blob/OverView.md) to learn about the working principle of the JavaScript engine.

So, how does the JS engine perform the program fragment? In fact, the JS engine is not an isolation operation -it runs in a host environment. For most developers, it generally refers to the web browser or node.js. In fact, JavaScript is now widely embedded in various devices from machines to electric bulbs. Each device represents different types of JS engine host environments.

All host environments contain a built -in mechanism called ** incident cycle **. Over time, the incident cycle will execute multiple code fragments in the program, and the JS engine will be called each time.

This means that the JS engine is just an arbitrary execution environment for JS code. This is a surrounding environment, scheduling in the event (run JS code).

<b> The surrounding environment here is based on the ECMA specification, which means that the Lexicalenvironment (phrase environment) and VariableEnvironment (variable environment). </b>

So, for example, when the JavaScript program initiates AJAX request to obtain data from the server, you write the "Response" code in the callback function, and the JS engine will tell the host environment:

"Hey, I am going to hang up now. Now when you complete the network request and return the data, please execute the callback function."

After that, the browser will monitor the data returned from the network. When the data is returned, it will scatter the execution by inserting the callback function into the cycle.

Let's take a look at the following icons:

! [Memory icon] (https://user-images.githubusercontent.com/1475173/40288048-fc2-5CE3-11E-9F1E-E96489238538.png)))))))

You can read more information about dynamic memory management and call stack in the previous [Article]

What is a webpage API? In essence, you have no permission to access these threads, and you can only call them. They are part of the browser and introduced concurrent operations. If you are a node.js developer, these are C ++ APIS.

Having said so much, what exactly is the incident cycle?

! [Event Circulation icon] (https://user- Images.githubuserContent.com/1475173/40288117-31e5b440-5CE4-11E8-98FA-D4C10C1723F7.PNG)

There is only one simple work -monitoring call stack and callback queue. If the call stack is empty, it will get the first event from the callback queue and then enter the stack, and effectively execute the event.

The operation of the stack is FIFO, that is, when there are two settimeout executions, then the first one will be executed first, and then the next one.

for example:

`` `
settimeout (function () {

 console.log ('first timeout')

}, 0)

settimeout (function () {

 console.log ('second timeout')

}, 0)

// output
'first timeout'
'Second timeout'
`` `

This traversal in the event cycle is called a tick. Each event is just a callback function.

`` `
console.log ('hi');
settimeout (function cb1 () {
    console.log ('cb1');
}, 5000);
console.log ('bye');
`` `

Let's execute this code and see what will happen:
1. empty state. The browser console is empty, and the call stack is empty.

! [Empty Status Legend] (https://user-images.githubusercontent.com/1475173/40288154-62498904-5CE4-11E8-9395d305b9.png)

2. `Console.log ('Hi') `` into the stack.

! [Entering the stack legend] (https://user-images.githubusercontent.com/1475173/40288182-8845a-5CE4-18A5C-98a5f47a4.png))

3. Execute `console.log ('hi').

! [] (https://user- Images.githubuserContent.com/1475173/40288225-B032E75A-5CE4-18-824C-97df3BC9C73D.PNG)

4. `Console.log ('Hi') `` `` ``

! [] (https://user-images.githubusercontent.com/1475173/40288716-1D16588c-5CE7-11E8-82C9-193086d00bbc.png))

5. `settimeout (function cb1 () {...})` `` `` `` `` ``

! [] (https://user- Images.githubuserContent.com/1475173/40288795-88CA548E-5CE7-11E8-9469-9E01DCA718.png)

6. Execute the `settimeout (function cb1 () {...})` ``, the browser creates a timer as part of the webpage API and will process the countdown for you.

! [] (https://user- Images.githubuserContent.com/1475173/40288812-A1B4DC3A-5CE7-11E8-9556-30dbb52a6aa0.png)

7.'SettimeOut (function cb1 () {...}) `` executes and out of the stack.

  ! [] (https://user-images.githubusercontent.com/1475173/40288835-b9E7CF92-5CE7-11E8-8874-17676a82e.png)

8. `Console.log ('bye') `` `` `` `` `` `` `` `` `` `` `` `` `` `` `` `` `` `` `` `` `` `` `` `` `` `` `` `` `` `` enters the stack.

  ! [] (https://user-images.githubusercontent.com/1475173/40288846-da4959fe-5CE7-11E8-8248-3CC7759A68E8.png)

9. Execute `console.log ('bye').

! [] (https://user-images.githubusercontent.com/1475173/40288872-fcfc690a-5CE7-11E8-83FB-79ED9F560531.png)

10.`console.log('Bye')` 出栈。

! [] (https://user-images.githubusercontent.com/1475173/40288907-2a75d696-5CE8-11E8-94BD-8550da83AAC.png)

11. After at least 5 seconds, the timer runs running and adds the `CB1` to the callback queue. Why do you say at least five seconds?

<b> Because the Timer set by settimeout does not necessarily be executed after 5 seconds. During this period, you need to consider whether there are other tasks. For example, Microtask is executed, such as Promise, etc., you can know according to the official Event loop documentation. </b>

   ! [] (https://user-images.githubusercontent.com/1475173/40288953-57F94C9C-5CE8-11E8-8ADC-2EA2E1F5F5F1.png)

12. The event cycle obtains the `CB1` function from the callback queue and put it into the stack.

! [] (https://user- Images.githubuserContent.com/1475173/40288902-289ba-5CE8-11E8-973B-2AF55F8688E2.png)

13. Run the `cb1` function and put the` console.log ('cb1') `).

! [] (https://user-images.githubusercontent.com/1475173/40288904-297d47ba-5CE8-11E8-86FD-0C3EF759F41C.PNG)

14. Execute `console.log ('cb1').

! [] (https://user- Images.githubusercontent.com/1475173/40288906-2a2B8bfe-5CE8-970A-2419EBF96971.png)

15.`console.log('cb1')` 出栈。

! [] (https://user- Images.githubuserContent.com/1475173/40288901-2850356e-5CE8-11E8-906B-3102b29496c.png)

16.`cb1` out of the stack

! [] (https://user- Images.githubuserContent.com/1475173/40289120-2a506694-5CE9-11E8-8DE6-0518278059.png)

The video quickly played back:

! [] (https://user-images.githubusercontent.com/1475173/40289266- E9affc2-5CE9-11E8-9377-2acafe329F55.gif)

What is interesting is that ES6 stipulates how the incident cycle work, which means that technically, it is within the scope of the JS engine, instead of just playing the role of the host environment. The emergence of Promise in ES6 is one of the main reasons for changing, because ES6 requires the right to directly schedule the operation event cycle queue (will be discussed in depth).

## settimeout (...) working principle

It should be noted that the `settimeout (...)` did not automatically add the callback to the event cycle queue. It creates a timer. When the timer expires, the host environment will add the callback function to the event cycle queue, and then it will be removed and the callback will be taken out in a future tick. View the following code:

`` `
settimeout (mycallback, 1000);
`` `

This does not mean that after 1 second, it will execute the `MyCallback` callback but add it to the callback queue after 1 second. However, the queue may add other events before -so the callback will be blocked.

A considerable part of the articles and tutorials start to recommend that you use the `settimeout (callback, 0)` to write JavaScript asynchronous code. So, now you understand the principle of event cycle and settimeout: Call the `settimeout` to set the second parameter to 0 to indicate the delay execution back until the call stack is empty.

View the following code:

`` `

console.log ('hi');
settimeout (function () {
    console.log ('callback');
}, 0);
console.log ('bye');
`` `

Although the time time is set to 0 milliseconds, the results of the console will be displayed as follows:

`` `
Hi
Bye
callback
`` `

## ES6 Operation Concept

ES6 introduces a concept of "work queue". It is located at the top of the incident cycle queue. You are very likely to contact this concept when processing the asynchronous behavior of Promises (will introduce later).

Now we will be exposed to this concept so that after discussing the asynchronous behavior of Promises, we understand how to schedule and deal with these behaviors.

Imagine like this: The operating queue is a queue at the end of each tick at the end of the event cycle. Some asynchronous operations occurred in a tick in the event cycle will not cause a new event to add a new event to the event cycle queue, but it will add an assignment item (that is, the operation) at the end of the current TICK's operation queue.

This means that you can add delayed running other functions and you can ensure that it executes it immediately before any other functions.

A homework can also add more homework to the end of the same queue. Theoretically, there is the possibility of a job cycle (such as adding other homework assignments).

In order to infinite cycle, the resources required by the hunger program will be tick until the next incident cycles. Conceptual point of view, this is similar to writing long or infinite cycles in the code (similar to `While (TRUE)`).

The homework is similar to `settimeout (callback, 0)`, but it is implemented in this way. They have a clear definition and guaranteed execution order: then executed as soon as possible.
####

As you know, the callback function is the most common method used in the JavaScript program to represent and perform asynchronous operations. Indeed, callback is the most important asynchronous mode in the JavaScript language. Countless JS programs, even very complicated ones, are based on the callback function.

The callback is not without shortcomings. Many developers try to find a better asynchronous mode. However, it is impossible to use any abstract syntax if you don't understand the principles of the underlying level.

In the next chapters, we will explore these abstract syntax and understand the necessity and recommendation of the more complicated asynchronous mode.

## nested callback

View the following example:

`` `
Listen ('CLICK', function (E) {
settimeout (function () {
  ajax ('https://api.example.com/endpoint', function (text) {
    if (text == "hello") {{
dosomething ();
} else if (text == "world") {
dosomethingelse ();
       }
      });
    }, 500);
});
`` `

We have three chain nested functions, each function represents an asynchronous operation.

This type of code is usually called "callback hell". However, in fact, "callback hell" has nothing to do with code nesting and indentation. This is a deeper problem.

First of all, we wait for the incident, then wait for the timer to execute, and finally wait for AJAX to return the data. When AJAX returns the data, this process may be repeatedly executed.

At first glance, you can split the code with the above asynchronous characteristics as the code executed according to the steps, as shown below:

`` `
Listen ('CLICK', function (E) {
// ..
});
`` `

after:

`` `
settimeout (function () {
    // ..
}, 500);
`` `

after that:

`` `
ajax ('https://api.example.com/endpoint', function (text) {
    // ..
});
`` `

at last:

`` `
if (text == "hello") {{
    dosomething ();
}
else if (text == "world") {
    dosomethingelse ();
}
`` `

Therefore, it means that the asynchronous code is done in this way in this way. There should be such a method?
## Promises

View the following code:

`` `
var x = 1;
var y y = 2;
console.log (x + y);
`` `

This is very intuitive: the value of x and y is printed in the console after calculating the value of x and y. But if the initial value of x or y is not existing and uncertain? Assuming that before using X and Y in the expression, we need to get the value of x and y from the server. Imagine, we have the values ​​of X and Y from the server to obtain the value of X and Y from the server. Then, once you get the values ​​of the `x` and` y`, you can use the `SUM` function to calculate the value.

Similar to the following:

`` `
function Sum (getx, gety, callback) {{
    var x, y;
    getx (function (result) {
        x = result;
        if (y! == undefined) {
            callback (x + y);
        }
    });
    gety (function (result) {
        y = result;
        if (x! == Undefined) {
            callback (x + y);
        }
    });
}
// Synchronous or asynchronous acquisition function of the `x` value
function fetchx () {
    // ..
}


// Synchronous or asynchronous acquisition function of the `y` value
function fetchy () {
    // ..
}

Sum (fetchx, fetchy, function (result) {
    console.log (result);
});
`` `

One thing that needs to be remembered here is that in the code fragment, `x` and` y` are the future values. `y` Whether it is worth it immediately.

Of course, there are many places that need to be improved based on this rough callback technology. This is just a small step to understand the future value without worrying about the benefits of returning values.
## Promise value

Let us briefly look at how to use Promises to represent `x+y`:

`` `
function Sum (xpromise, ypromise) {
// `promise.all ([..])` `contains a set of promise,
// Back a new promise to wait for all Promise to be executed
Return Promise.all ([Xpromise, YPROMISE])

// When the new Promise is analyzed, you can get the values ​​of `x` and` y` at the same time.
.then (function (values) {
// `valueS` is a message array returned by PROMISES before
Return value [0] + valueS [1];
});
}

// `fetchx ()` and `fetchy ()` Return to promise to get their respective returns, these values ​​return order is uncertain.
SUM (fetchx (), ftchy ())

// Get a promise that calculates two and values. Now, you can call the chain `then (...) to process the returned promise.
.then (function (sum) {
    console.log (SUM);
});
`` `

The above code fragment contains two layers of Promise.

 `fetchx ()` and `fetchy ()` are directly called, their return values ​​(promises!) are passed into the `SUM (…)` as parameters. Although the return value of these Promises may return now or later, each Promise has the same asynchronous behavior. We can consider the values ​​of `x` and` y` in the way to return the time order. Temporarily call them the future value.

Promise at the second level is created and returned by `Sum (…)` (through promise.all ([...]]), and then wait for the return value of Promise by calling `then (...). When `Sum (…)` runs the end, returns the future value of the SUM and then printed out. We hidden the logic of waiting for the future value `x` and` y` in the inside of `Sum (…).

** Note: ** Inside the `Sum (…)`, `promise.all ([…]]` created a promise (after waiting for the analysis of `promisex` and` promisey`). Chain call `.then (...)` created another promise, which promise will be parsed by the code `values ​​[0] + value [1]` immediately (returns the additional result). Therefore, at the end of the code fragment, the end chain call call `then (…)` `` `` `` `` `` `` `` `` `` `` `` `` `` `` `` `` `` `` `` `` `` `` `` I actually operated the second promise returned instead of the first. ..] `` Create the return of Promise. Similarly, although we did not conduct chain calls after the second `then (...), it also created another Promise, we can choose to observe / use the promise. We will explore the chain calling of Promise in detail in the subsequent content of this chapter.

In Promises, in fact, the function of `then (...)` can be passed into two functions as a parameter. The first function is a successful function and the second is the failure function.

`` `
SUM (fetchx (), ftchy ())
.then (.then (
    // Successful handle
    function (SUM) {
        console.log (SUM);
    },
    // Reject handle
    function (ERR) {
    console.error (err); // bummer!
    }
);
`` `

When you get an error or calculation and value when obtaining the `x` or` y `, the promise returned will fail, and it will be transmitted to` then (…) `as the callback error treatment of the second parameter. The program will receive the return value of Promise.

Because Promise encapsulates the state of time -dependence -waiting for external success or the return value of failure, Promise itself has nothing to do with time, so that promise can be composed of predictable ways without care about timing or underlying results.

In addition, once the PROMISE analysis is completed, it will always remain unchanged and can be observed at will.

Chain calling promise is really in control:

`` `
function delay (time) {
    Return New Promise (function (RESOLVE, Reject) {
        settimeout (resolve, time);
    });
}

delay (1000)
.then (function () {) {
    console.log ("after 1000ms");
    Return delay (2000);
})
.then (function () {) {
    console.log ("After Another 2000ms");
})
.then (function () {) {
    console.log ("Step 4 (next job)");
    Return delay (5000);
})
// ...
`` `

Call the `Delay (2000)` to create a promise that will return to success after 2 seconds, and then return the promise from the successful callback function of the first `then (...), which will lead to the second` then (... ... ) `Returned Promise and waited for 2 seconds to return to the successful Promise.

** Note: ** Because once a promise is parsed, it cannot be changed from the outside. Because its state cannot be modified at will, it can safely distribute the status value to any third party. This is the case when it involves multiple observation of Promise's return. It is impossible to influence the ability of one party to observe Promise's return results. It sounds like a obscure scientific issue, but in fact, this is the most fundamental and important aspect of Promise. You have to study it well.## Promise Time

An important detail of Promise is to determine whether certain values ​​are true promise. In other words, whether this value has a promise behavior.

We know that you can use the `new promise (...) syntax to create a promise. Then, you will think that you use the` PINSTANCEOF Promise` to detect an instance of a Promise class. However, it is not entirely the case.

The main reason is that you can obtain a Promise instance from another browser window (such as iframe). Promise in iframe is different from the current browser window or in the frame. Therefore, it will cause the identifying Promise instance failure.

In addition, the library or framework may choose to use its own Promise instead of primary ES6. In actual work, you can use the promise that comes with the library to compatible with the old version of the browser that does not support Promise.

## abnormal capture

If you are creating a promise or at any moment when you observe and analyze the return results of Promise, you encounter javascript error abnormalities such as JavaScript such as `Typerror` or Referenceerror.

for example:

`` `
var p = New Promise (function (RESOLVE, Reject) {
    foo.bar (); // `foo` is not defined, produce errors!
    Resolve (374); // Never execute: (
});

P.Then (
    function fulfilled () {
        // Never execute:/
    },
    function rejection (ERR) {
        // `Err` will be an abnormal object of` Typerror`
// Since `foo.bar ()` code line.
    }
);
`` `

However, what if Promise has successfully analyzed and is thrown out of JS running errors in the successful analysis monitoring function (`then (...)` registered callback)? You can still capture this exception, but maybe you will find that it is strange to deal with these abnormal methods. Until deep understanding, the principle:

`` `
var p = New Promise (function (resolve, reject) {
Resolve (374);
});

P.Thenction (function FULFILLED (Message) {
    foo.bar ();
    console.log (message); // Never execute
},
    function rejection (ERR) {
        // Never execute
    }
);
`` `

It looks like the error abnormalities thrown out by `foo.bar ()` have been captured. However, in fact, there is no. However, in -depth understanding you will find that we have not monitored some of these errors. `p.then (…)` Call itself back to another Promise, the promise will return an abnormal failure information of the `typeerror` type.

** Expand the above description, which is not available in the original text. **

`` `
var p = New Promise (function (RESOLVE, Reject) {
Resolve (374);
});

P.Thenction (function FULFILLED (Message) {
    foo.bar ();
    console.log (message); // Never execute
},
    function rejection (ERR) {
        // Never execute
    }
) .then (
function () {},
function (err) {console.log ('err', err);}
);
`` `

As shown in the above code, you can truly capture the code error in the recovery function.

## Treatment of unsatisfactory abnormalities

There are many other skills that are said to be better to deal with exceptions.

The general approach is to add `Done (..)` to promises. In essence, the status of the Promise chain will be "Done.". `done (...)` will not create and return to promise, so the callback of the transmission of `done (..)` obviously does not throw an error to an unwanted chain Promise.

Like the error status of unsatisfactory: An exception in the failure processing function in the `Done (..)` will be thrown out as a global unsatisfactory error (basically in the developer console).

`` `
var p = promise.Resolve (374);

P.Thenction (function Fulfilled (MSG) {
    // The number does not have a function of the character class, so I will report an error
    console.log (msg.tolowercase ());
})
.done (null, function () {
    // If an error occurs, the global error will be thrown
});
`` `
## ES8 Async/Await

JavaScript ES8 introduces `Async/Await`, which makes it easier for processing Promises. We will briefly introduce all the possibilities of `Async/Await` and use it to write asynchronous code.

So, let's take a look at the principle of Async/Await.

Use the `async` function to declare an asynchronous function. This function returns [asynchronous function] (https://developer.mozilla.org/en-s/docs/web/javascript/reference/global_objects/asyncFunction) object. `Asyncfunction` Object indicates that it runs its internal code in the asynchronous function.

When the asynchronous function is called, it returns a `Promise`. The asynchronous function return value is not `promise`. During the function process, it will automatically create a` promise` and use the return value of the function to analyze the `promise`. When the `async` function is thrown out of the abnormalities, the failure of the` promise` will get the abnormal value thrown.

The `Async` function can contain a` AWAIT` expression, so that the execution of the function can be suspended to wait for the resolution of the promise to be transmitted, and then restart the execution of the different step function and return the resolution value.

You can think of the `promise` in javascript as a task in java` future` or `c#`.

> ASYNC/AWAIT` originally used to simplify the use of Promises.

Look at the following code:

`` `
// Standard JavaScript function
function getnumber1 () {)
    Return promise.Resolve ('374');
}
// Same as getnumber1
Async function getnumber2 () {
    Return 374;
}
`` `

Similarly, throwing abnormal functions is equivalent to returning to the failure of Promises.

`` `
function f1 () {
    Return promise.reject ('some error');
}
async function f2 () {
    Throw 'some error';
}
`` `

`Await` Keywords can only be used in the` Async` function and allow you to wait for Promise synchronously. If promises are used outside the `Async` function, we still have to use the `d` to call back.

`` `
async function loaddata () {
    // `RP` is a function that initiates promise.
    var promise1 = rp ('https://api.example.com/endpoint1');
    var promise2 = rp ('https://api.example.com/endpoint2');

    // Now, two Promise is requested concurrently, and now we must wait for them to end the operation.
    var response1 = await promise1;
    var response2 = await promise2;
    Return Response1 + '' + Response2;
}
// Because you no longer use the `Async Function`, you must use` Then`.
loaddata (). Then (() => console.log ('do'));
`` `

You can also use asynchronous function expressions to define asynchronous functions. The asynchronous function expression has a syntax similar to the asynchronous function statement. The main difference between the asynchronous function expression and asynchronous function statement is that the function name is that the asynchronous function expression can ignore the function name to create anonymous functions. The asynchronous function expression can be used as an IIFE (executing function expression) and can run immediately after the definition.

like this:

`` `
var loadata = async function () {
    // `RP` is a function that initiates promise.
    var promise1 = rp ('https://api.example.com/endpoint1');
    var promise2 = rp ('https://api.example.com/endpoint2');

    // Now, two Promise is requested concurrently, and now we must wait for them to end the operation.
    var response1 = await promise1;
    var response2 = await promise2;
    Return Response1 + '' + Response2;
}
```

More importantly, all mainstream browsers support Async/Await.

! [] (https://user-images.githubusercontent.com/1475173/40289389-98F3AB96-5CEA-11E81-A8A3C1EC6D3.png)

If this compatibility does not meet your needs, you can use [Babel] (https://babeljs.io/docs/plugins/transform-sync-to-genrator/) and [TypeScript] (https://www. TypeScriptlang.org/docs/handbook/release- notes/typescript-2-3.html) is converted to the degree of compatibility it needs.

The last thing to say is that do not blindly use the latest technology to write asynchronous code. It is very important to understand the internal principle of Async in JavaScript. It is important to learn why the method of choosing in depth. Just like other things in programming, each technology has its advantages and disadvantages.

##, strong asynchronous coding 5 tips

1. Simplicity: Use Async/Await to let you write less code. Each time you write the Async/Await code, you can skip writing some unnecessary steps: for example, you do n’t need to write a `.Then` back -up, create anonymous function to process the return value, and name the return value.

`` ` // `` RP` is a tool function that initiated Promise. RP (‘https://api.example.com/endpoint1 ') .Thenction (function (data) { // ... }); `` `

Compared:

`` ` // `` RP` is a tool function that initiated Promise var response = await RP (‘https://api.example.com/endpoint1 '); `` `

2. Error processing: Async/Await allows the use of daily TRY/CATCH code structures to handle synchronization and asynchronous errors. See how you write with Promise:

`` ` function loadodata () {) TRY {// Capture synchronization error. getjson (). Then (function (response) { var parsed = json.parse (response); console.log (PARED); }). Catch (function (e) {// capture asynchronous errors. console.log (e); }); } catch (e) { console.log (e); } } `` `

Compared:

`` ` async function loaddata () { try { var data = json.parse (await getjson ()); console.log (data); } catch (e) { console.log (e); } } `` `

3. Condition statement: Writing condition statements with `Async/Await` will be more intuitive.

`` ` function loadodata () {) Return getjson () .then (functionse (response) { if (response.needsanotherRequest) { RETURN MAKEANOTHERREQUEST (Response) .then (function (anotherresponse) { console.log (Anotherresponse) Return anotherResponse }) } else { console.log (Response) Return response } }) } `` `

Compared:

`` ` async function loaddata () { var response = await getjson (); if (response.needsanotherRequest) { var anotherResponse = Await MakeanotherRequest (Response); console.log (Anotherresponse) Return anotherResponse } else { console.log (response); Return response; } } `` `

4. Different from `Async/Await`, the error cannot be known in the error stack returned from the chain Promise. Look at the following code:

`` `
function loadodata () {)
Return Callapromise ()
.then (callback1)
.then (callback2)
.then (callback3)
.then (() => {{{{
Throw New Error ("Boom");
})
}
loaddata ()
.cATCH (fuins (e) {
console.log (ERR);

// Error: Boom at Callapromise.then.then.then.then.then (Index.js: 8: 13)
});
`` `

Compared:

`` ` async function loaddata () { await Callapromise1 () await Callapromise2 () await Callapromise3 () await Callapromise4 () await Callapromise5 () Throw New Error ("Boom"); } loaddata () .cATCH (fuins (e) { console.log (ERR); // output // Error: Boom at loaddata (index.js: 7: 9) }); `` `

5. Debug: If you use Promise, you will understand that debugging is a nightmare. For example, if you set a breakpoint in the .then code block and use the debugging shortcut such as "STOP-Over", the debugger will not move to the next. Thenen code block, because the debugger only step by step synchronization code.

Use `Async/AWAIT`, you can call it through AWAIT like a general synchronization function.

Not only the program itself also has libraries, writing asynchronous JavaScript code is very important.

Reference resource:

- <https://github.com/getify/You-Dont-Know-JS/blob/master/async%20%26%20performance/ch2.md>
- <https://github.com/getify/You-Dont-Know-JS/blob/master/async%20%26%20performance/ch3.md>
- <http://nikgrozev.com/2017/10/01/async-await/>
