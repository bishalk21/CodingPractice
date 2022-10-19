# Engine, when running, call the stack

> For the original text, please refer to [here] (https://blog.sessionStack.com/how-does-javascript-act-PART-PART-B0bacc073CF). /creativecommons.org/licenses/by/4.0/) Sharing, by [trues://github.com/troland).

** This is the first chapter of JavaScript's working principle. This chapter will call the stack for an overview of the language engine. **

With the increasingly popular JavaScript, the team also uses its support at the front end, back end, mixed APPS, embedded devices, and more devices.

This chapter is the first chapter of the series of articles. This series aims to deeply understand JavaScript and its operating principles: we believe that after understanding the construction module of JavaScript and how they work together, you will write better code and programs Essence 我们将会分享一些创建[SessionStack](https://www.sessionstack.com/?utm_source=medium&utm_medium=source&utm_content=javascript-series-post1-intro) 时候所使用的经验法则，[SessionStack](https:// www.sessionStack.com/?utm_source=Medium&UTM_Medium=source&UTM_CONTENT=javascript-Series-postro) is a lightweight JavaScript program, which has the advantages of strongness and high performance to maintain competition.

Just as [Githut Stats] (http://githut.info/), JavaScript's active library and total push delivery ranked first in GitHub. Other aspects will not fall too much than other languages.

! [] (https://user-images.githubusercontent.com/1475173/40289980-03F75C32-5cee-11E8-88-6920C354C87E.PNG)

([Click to view the latest github language statistics] (https://madnight.github.io/githut/))

If the project depends very much on JavaScript, which means that in order to create amazing software, developers must better understand the internal working mechanism of the JavaScript language to use all functions provided by JavaScript and its ecology.

It turned out that many developers used JavaScript every day but did not understand its underlying principle.

## Overview

Almost everyone has heard the concept of the V8 engine, and many people know that JavaScript is a single thread or uses a callback queue.

In this chapter, I will study these concepts in detail and explain the working principle of JavaScript. It depends on understanding these details and through reasonable use of APIS, you will be able to write better, non -blocking procedures.

If you are a novice, this article will help you understand why JavaScript is weird compared to other languages.

If you are an experienced JavaScript developer, I hope that it will provide you with a fresh perspective of the JavaScript working principle when running.

## javascript engine

Google V8 engine is a popular JavaScript engine. For example, the V8 engine is used inside such as Chrome and Node.js. Here is a simple view to depict its approximate appearance.

! [] (https://user- Images.githubuserContent.com/1475173/40290010-30290030-5cee-11E8-9bb1-3FAAE7359.png))

The engine includes two main components:

- Memory Date -Area of ​​Memory Distribution
- Call the stack -the position of the stack frame when the code is executed

## Runtime

Almost every JavaScript developer has used some browser APIs (such as Settimeout). However, these APIs are not provided by the engine.

So where do they come from?

It turned out that the actual situation was a bit complicated. Essence

! [] (https://user- Images.githubuserContent.com/1475173/40288048-FC615FC2-5CE3-11E8-9F1E- E96489238538.png)

Therefore, in addition to the engine, there are more things. There are things called Web API, which are provided by the browser, such as DOM, Ajax, Settimeout and others.

As a result, there is such a popular incident cycle and callback queue.

# All call stack

JavaScript is just a single -threaded programming language, which means that it has only one call stack. In this way, it can only do one thing at a time.

Calling the stack is a data structure that records our approximate position in the program. When executing into a function, put it on the top of the stack. If you return from the function, remove the function from the top of the stack. This is what to call the stack.

Raise a chestnut. View the following code:

`` `
Function Multiply (x, y) {
Return x \* y;
}

function propsquare (x) {
var s = multiply (x, x);
console.log (s);
}

Printsquare (5);
`` `

When the engine starts to execute this code, the call stack is empty. After that, the following steps are generated:

! [] (https://user- Images.githubuserContent.com/1475173/40290072-74dee8fc-5cee-11E8-97BF-23d11571e8a6.png)

Each entry in the stack is called the stack frame.

When the abnormality is thrown out, it is exactly how the stack tracking is constructed -when an abnormality occurs, this is roughly called the state of the stack. Look at the following code:

`` `
function foo () {
Throw New Error ('SEssionStack Will Help You Resolve Crashes :)');
}

function bar () {
foo ();
}

function start () {
bar ();
}

start ();
`` `

If you execute in Chrome (assuming the code in the file of foo.js), the following stack tracking will be generated:

! [] (https://user- Images.githubuserContent.com/1475173/40290093-8C12A194-5cee-11EFA-C5C0Bee2df74.png)

"Stack overflow" -The occurred when reaching the maximum calling stack. This situation is quite easy to happen, especially when you use recursion without extensive testing. View the following code:

`` `
function foo () {
foo ();
}

foo ();
`` `

When the engine starts to execute this code, it starts calling the FOO function. This function, however, recuble and start calling itself without any end conditions. Therefore, in each step of execution, calling the stack will add the same function repeatedly. The execution process is shown below:

! [] (https://user- Images.githubuserContent.com/1475173/40290111-A126eb12-5cee-11E8-8FF36434C7013.png)

At a certain moment, the number of functions in the calls in the stack exceeded the actual size of the call stack, so that the browser decided to throw an error, as shown below:

! [] (https://user- Images.githubuserContent.com/1475173/40290127-B46B631A-5cee-11E8-8437-9E4248.png)

Running code in a single thread will be quite easy because you do not need to deal with some complex scenes generated in the multi -threaded environment, such as dead locks.

However, there will be considerable restrictions on single -threaded code. Since JavaScript has only one call stack, what will happen if it runs slowly?

## concurrent and event cycle

What will happen when you call a function in the call to complete the operation? For example, imagine that you want to use JavaScript to perform some complex image conversion in the browser.

You may ask -why is this a question? The problem is that such a functional stack has a function that needs to be executed, and the browser cannot actually do anything else -it is blocked. This means that the browser cannot execute rendering, it cannot run other code, it is stuck. If you want to have a cool and smooth UI experience in the app, this will be a problem.

This will not be the only problem. Once the browser starts to perform so many tasks in calling the stack, the browser will stop interaction for a considerable period of time. Most browsers will throw an error and ask if you turn off the webpage.

! [] (https://user- Images.githubuserContent.com/1475173/40287991-b76a14b8-5CE3-11E8-9808-242e1c6501ba.jpeg)

Now, this is not the best user experience, isn't it?

Therefore, how can we execute the time -consuming code when we do not block the UI and prevent the browser from stopping the response? Use asynchronous callback.

This will be explained in detail in the second chapter of "JavaScript Work Principles": "How to write the best code in the V8 engine".
