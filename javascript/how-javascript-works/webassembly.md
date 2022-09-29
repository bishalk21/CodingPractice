# Webassembly compares JavaScript and its usage scenarios

> Please check the original text [here] (httts://blog.sessionStack.com/how-javascript-A-comparison-webassembly-in-in-Cases-Better-to-use-IT- IT- IT- IT- IT- IT- IT- IT- IT- IT- IT- IT- IT- IT- D80945172D79), slightly changed, this article adopts [Knowledge Sharing Copy 4.0 International License Agreement] (http://creativecommons.org/licenses/by/4.0/) Sharing, by [trues://github.com/troland/troland To.

** This is the sixth chapter of JavaScript's working principle. **

Now, we will analyze the working principle of Webassembly, and the most important thing is the comparison of performance with JavaScript: loading time, execution speed, garbage recycling, memory use, platform API access, debugging, multi -threaded and portable transplantability Essence

The way we build a web program are facing reform -this is just a beginning and our way of thinking about network applications is changing.

## first, know webassembly

Webassembly (also known as WASM) is an efficient, underlying bytecode for developing network applications.

WASM allows you to use language other than JavaScript (such as C, C ++, Rust, and others) other than JavaScript to write applications, and then compile into (early) Webassembly.

The built -in network application loading and running speed will be very fast.

## load time

In order to load JavaScript, the browser must load all text format JS files.

The browser will load Webassembly more quickly, because webassembly only transmits the compiled WASM file. And WASM is a underlying class assembly language, which has a very concise binary format.

## execution speed

Today WASM is running only 20%slower than the native code \*\*. In any case, this is a surprising result. It is a format that is compiled into the sandbox environment and runs under a large number of constraints to ensure that there is no security loophole or strengthen it to fight against vulnerabilities. Compared with the real native code, the decline in execution speed is small. In addition, it will be faster in the future.

What is even more pleasant is that it has a good browser compatibility characteristics -all mainstream browser engines support Webassembly and running speed is almost related.

To understand how fast the execution speed of Webassembly is in comparison with JavaScript, you should first read the previous [Javascript engine work principle] (https://github.com/troland/how-javascript-works/blob/v8.md ) Article.

Let us quickly browse the operating mechanism of V8:

! [] (https://user- Images.githubuserContent.com/1475173/40056004-8A3EC756-587C-11E8-87E5-23E4805.png))

<Center> V8 Technology: Lazy Compilation </Center>

On the left is JavaScript source code, including the JavaScript function. First of all, the source code is converted to a mark to facilitate parsing, and then generates a [abstract syntax tree] (https://en.wikipedia.org/wiki/abstract_syntax_tree).

The abstract syntax tree is the icon of the JavaScript program logic in memory. Once the icon is generated, the V8 directly enters the machine code stage. You are basically traversing trees, generate the machine code and then obtain the compiled function. No real attempts are made here to speed up.

Now, let's take a look at the work content of the V8 pipeline in the next stage:

! [] (https://user- Images.githubuserContent.com/1475173/40056005-8A7D6920-587c-11E8-8B0B-2665EFDDDDDDDDDDDDD722A.PNG)

<Center> V8 pipeline design </center>

Now, we have [turbofan] (https://github.com/v8/v8/wiki/turbofan), which is one of the optimized compilation procedures for V8. When JavaScript runs, a large number of code is running inside the V8. Turbofan monitors the slowly operating code, which causes places and hotspots (where the memory is high) to optimize them. It pushes the code obtained above to optimize the latter end of the back end. A better code.

It solves the problem of performance, but the disadvantage is to analyze the code and the process of identifying which code that needs to be optimized. It also consumes CPU resources. This means more power consumption, especially in mobile phone devices.

However, WASM does not require all the above steps -it is inserted into the execution process as shown below:

! [] (https://user-images.githubusercontent.com/1475173/40056008-8B0416DC-587C-11E8-9263AE8A8D53.png))

<Center> V8 pipeline design + WASM </center>

WASM has passed code optimization during the compilation stage. In short, the analysis is not needed. You have the optimized binary code to insert directly to the back end (instant compiler) and generate the machine code. The compiler has completed all code optimization work at the front end.

Because of the many steps in the compilation process, this makes the execution of WASM more efficient.

## Memory model

! [] (https://user-images.githubusercontent.com/1475173/40056007-8ac584b2-587c-11E8-9006-49C5827279F.PNG))

<Center> Webassembly credible and unbelievable state </center>

For a chestnut, the memory of a C ++ program is compiled into Webassembly, which is a continuous continuous no -hollow memory block. There is a function in WASAM that can be used to improve code security, that is, the concept of stack and linear memory isolation. In the C ++ program, you have a heap, allocate from the bottom of the heap, and then increase the size of the execution stack from its top. You can get a pointer and traverse in the stack memory to operate the variables you should not be exposed.

This is a loophole that most suspicious software can use.

Webassembly uses a completely different memory model. The execution stack and the webassembly program itself are isolated, so you cannot modify and modify variables from it. Similarly, the function uses an integer offset instead of pointer. The function points to a indirect function table. After that, these direct calculated numbers enter the functions in the module. This is how it is built so that you can introduce multiple WASM modules at the same time, offset all indexes and each module runs well.

For more articles about JavaScript memory models and management, please refer to [here] (https://blog.sessionStack.com/how-javascript-works-Memory-HOW-Handle-4-Memory-Leaks- 3F28B94CFBEC).

## Memory waste recycling

You already know that the memory management of JavaScript is treated by memory waste recychers.

The situation of Webassembly is a bit different. It supports the language of manual operating memory. You can also built your own memory garbage recovery in the WASM module, but this is a complex task.

At present, Webassembly is designed around C ++ and Rust's use cases. Because WASM is a very low -level language, this means that programming language that is only higher than the assembly language will be easily compiled into Webassembly. C language can use malloc, C ++ can use smart pointers, RUST uses completely different modes (a completely different topic). These languages ​​do not use memory garbage recychers, so they do not need all complicated runtime things to track memory. Webassembly is naturally suitable for these languages.

In addition, these languages ​​cannot be used 100% of the complex JavaScript usage scenarios such as changing the DOM. Writing the entire HTML program with C ++ is meaningless because C ++ is not designed for this. In most cases, engineers use C ++ or Rust to write webgl or highly optimized libraries (such as a large number of mathematical operations).

However, webassembly in the future will support the language without memory waste.

## platform interface access

Relying on the running environment of the execution of JavaScript, you can directly access the interface exposed by the JavaScript program through the JavaScript program. For example, when you run javascript in the browser, network applications can call a series of [web interface] (https://developer.mozilla.org/en-s/docs/web/api) to control the browser/device Visit [DOM] (https://developer.mozilla.org/en-s/docs/web/api/document_object_model), [cssom] (https://developer.mozilla.org/docs/ Web/api/css_object_model), [webgl] (https://developer.mozilla.org/en-s/web/api/webgl_api), [indexeddb] (https://developer.mozilla.org/en-en- US/docs/web/api/indexeddb_api), [Web Audio API] (https://developer.mozilla.org/en/docs/Web/api/web_audio_api).

However, the webassembly module cannot access the interface of any platform. All of this must be coordinated by JavaScript. If you want to access some specific platform interfaces in the Webassembly module, you have to call it via JavaScript.

Take a chestnut, if you want to use the `console.log`, you have to call it via JavaScript instead of C ++ code. These JavaScript calls cause a certain performance loss.

The situation will not be unchanged. Specifications will provide interface access to specific platforms for WASM in the future so that you can write JavaScript in the program.

## Source code mapping

When the JavaScript code is compressed, you need to have a suitable way to debug.

At this time, [Source code mapping] (https://www.html5rocks.com/en/tutorials/develOpertools/sourcemaps/) is used to use it.

Generally, the source code mapping is a way to map the combined / compressed file to the unbound state. When the code is constructed for the production environment, with the compression and merging JavaScript, the source code mapping is generated to save the original file information. When you want to query the specific row and column code in the generated JavaScript code, you can find the original position of the code to obtain the code in the source code mapping.

Because the source code mapping is not regulated, webassembly is not supported, but it will eventually (probably fast).

When a breakpoint is set in the C ++ code, you will see the C ++ code instead of Webassembly. At least, this is the goal of the webassembly source code mapping.

## Multithreading

JavaScript is a single thread. There are many ways to use the incident cycle and use in the previous [articles] (https://github.com/troland/how-javascript-works/blob/master/event-md).

JavaScript also uses Web Workers, but only in a very special case -generally, you can transfer any dense CPU that may block the UI main thread to web worker to perform better performance. However, web worker cannot access the DOM.

Webassembly does not support multi -threading. However, this may be the next webassembly. WASM will be close to the implementation of native threads (for example, a C ++ -style thread). Having real threads will create a lot of new opportunities in the browser. Then, of course, the possibility of abuse is increased.

## Transplantation

Now JavaScript can run almost in any place, from the browser to the server or even in the embedded system.

Webassembly design aims to be safe and portable. Just like JavaScript. It will run in any environment that supports WASM (such as each browser).

Webassembly has the same goals as early as Java using Applets to achieve transplantability.

## webassembly use scene

The original version of Webassembly is mainly to solve a large amount of computing dense computing (such as dealing with mathematical issues). The most mainstream use scenario is the game -handle a large number of pixels.

You can use your familiar OpenGL binding to write the C ++/Rust program and then compile it into WASM. After that, it can run in the browser.

Browse (run in the lonely )- <http://s3.amazonaws.com/mozilla- games/tmp/2017-02-21-suntemple/suntemple.html>. This is in [unreal engine] (https://www.Urealengine.com/en-s/what-s-nreal-engine-4) (this is a development kit that can be used to develop virtual reality).

Another reasonable use of Webassembly (high -performance), that is, to achieve some computing -intensive libraries. For example, some graphics operations.

As mentioned earlier, WASM can effectively reduce the power loss (dependent engine) of mobile devices, which is because most of the processing steps have been completed in advance during the compilation stage.

In the future, you can use the WASM binary database even if you do not write the code that can be compiled into it. You can find some projects that start using this technology on NPM.

For the operation of the operation of the DOM and the frequent use of the platform interface, the use of JavaScript is more reasonable because it does not produce additional performance overhead and has native support interfaces.

In [sessionStack] (https://www.sessionStack.com/?utm_source=Medium_Medium=blog&utm_Content=post- 6-ebassembly-outro, we have continued to improve the performance of JavaScrips. Our solutions must have lightning -like performance because we cannot affect the performance of user programs. Once sessionStack is integrated into the production environment of network applications or websites, it will start to record everything: all DOM changes, user interaction, JavaScript abnormalities, stack tracking, failed network requests and debugging data. All of this is produced in the production environment and does not affect any interaction and performance of the product. We must greatly optimize our code and make it asynchronous as much as possible.

We not only have libraries, but also other functions! When you reinstate user sessions in SessionStack, we must render everything that the user's browser occurs when the problem is generated, and we must reconstruct the entire state to allow you to jump back and forth back and forth on the time line of the session. In order to make it possible, we use asynchronous operations, because JavaScript has no better alternative choice than this.

With Webassembly, we can transfer a large amount of data computing and rendering work to more suitable languages ​​for processing and handling data collection and DOM operations to JavaScript for processing.

## 番 番

Open the official website of [webassembly] (https://webassembly.org/) to see the browser that shows it compatible on the head. They are Fire, Chrome, Safari, IE EDGE. Click Learn More to see that this is an agreement on the launch of the browser preview version of 2017/2/28. Now the various tasks have begun to enter the implementation stage. I believe that it can be used at the production environment at a certain time in the future. The official website introduces a subset [asm.js] (http://asmjs.org/) of JavaScript. In addition, there is a [Test website] (https://takahirox.github.githubs/webassembly- Benchmark/) where webassembly.
