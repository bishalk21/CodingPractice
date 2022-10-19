# Memory management and how to deal with 4 common memory leaks

> Contributors: [@Troland] (https://github.com/troland/) [@>] (https://github.com/heaven2049)
> Forecast
> For the original text, please refer to [here] (https://blog.sessionStack.com/how-javascript-works-Memory-management--HOW-Handle-4-Memory-Leaks-3F28B94CFBEC) uses [knowledge sharing knowledge sharing Signature 4.0 International License Agreement] (http://creativecommons.org/licenses/by/4.0/) Sharing, by [true] (https://github.com/troland).

** This is the third chapter of JavaScript's working principle. **

We will discuss another important topic that is increasingly ignored in daily use. This is the increasingly mature and complex programming language pot, that is, memory management problems. We will provide when creating [SessionStack] (https://www.sessionStack.com/?utm_source=medium_Medium=blog&utm_Content=post-3-V8-Intro), JavaScript memory leakage, which are followed by. Because we need to ensure that the sessionStack will not cause memory leakage or does not increase the memory consumption of the web application we integrate.

## Overview

Like C language, there is a bottom -layer memory management, such as `malloc () and` free () `. Developers use these primitives to explicitly allocate and release memory from the operating system.

At the same time, when creating things (objects, string, etc.), JavaScript allocates memory and "automatically releases" memory when they are not used. This process is called memory waste recycling. At first glance, the release of resources is essentially "automation release memory", which is the cause of chaos and gives a wrong impression that JavaScript (and other high -level languages) developers can choose to ignore memory management. ** This is a huge error **.

Even when using advanced languages, developers should understand memory management (or at least some foundations). Sometimes there will be some problems with automated memory management (such as the implementation restrictions of BUGS or the implementation of garbage recychers, etc.). You must understand memory management.

## Memory life cycle

No matter which programming language you use, the memory cycle of memory is almost the same:

! [] (https://user- Images.githubuserContent.com/1475173/40289538-89d1a888-5CEB-11E8-98D7-AC6888E59B90.png)

The following is an overview of what happened in each step of life:

- Allocation of memory -memory is allocated by the operating system so that the program can be used. In the underlying language (such as C language), developers can explicitly operate the memory. In high -level languages, the operating system helps you handle.
- Use memory -This is the stage of memory that is actually allocated before the program. When you use the assigned variables in the code, the memory read and write operation will occur.
- Release memory -At this stage, you can release the entire memory you no longer use, and the memory can be released and available. Like memory allocation operations, the underlying language can be explicitly performed.

In order to quickly browse the concept of stack and dynamic memory management, you can read the first [OverView.md).

## What is memory?

Before jumping directly to JavaScript memory management, let's briefly introduce the principle of memory and its working principles.

From the perspective of the hardware level, computer memory is composed of a large number of [Flip Flops] (https://en.wikipedia.org/wiki/flip-flop_%28electronics%29) (probably checked here, that is, a large number of binary binary Each FLIP FLOP is composed of a circuit. One circuit has two stable states that can be used to save status information). Each FLIP FLOP contains a small amount of transistor and can store a comparison. A single FLIP FLOPS can be addressing through a unique identifier, so they can be read and covered. Therefore, in theory, we can think of the entire computer memory as a huge bit array, so that we can read and write.

As apes, we are not good at using the position to perform all logical thinking and arithmetic, so we organize the position into a larger group so that we can use it to represent numbers. 8 bits are called one byte. In addition to bytes (sometimes 16 or sometimes 32 -bit).

There are many things in memory:

- All variables and other data used all programs.
- Program code, including the code of the operating system.

Compilers and operating systems cooperate together to manage memory management, but it is recommended that you know how the bottom layer is realized.

When the compile code is compiled, the compiler checks the basic data type and calculates the memory size required for the program operation in advance. In the so -called stack space, the required memory size will be assigned to the program. The reason why these variables allocate are called stack space because when the function is called, the memory required by the function will be added to the top of the existing memory. When the function is interrupted, they are removed in the order of LIFO (follow -up first). For example, consider the following code statement:

`` ` int n; // 4 bytes int x [4]; // The array of 4 elements, 4 bytes of each array element double m; // 8 bytes `` `

The compiler will immediately calculate the memory required for the code: 4 + 4 x 4 + 8 = 28 bytes.

> The compiler handles the size of the current integer and floating point. About 20 years ago, the integer was generally 2 bytes and the number of floating points was 4 bytes. Code does not need to rely on the byte size of the current basic data type.

The compiler will insert the code, and the code will negotiate with the operating system to obtain the required memory size from the stack to store variables in the stack.

In the above example, compile knowing the accurate memory address of each variable. In fact, when you write variables `n`, it will convert it into a similar" memory address 412763 "internally.

Note that when we try to access the `x [4]`, we may access M's associated data. This is because we visited the array elements that did not exist in the array -it exceeded the last actual array element that was actually allocated to the memory `x [3]` 4 bytes, and may finally read (or rewrite) `M `Position. This can almost determine the consequences that other procedures are expected.

! [] (https://user- Images.githubusercontent.com/1475173/40289556- A8015F9C-5CEB-11E8-8Fe4-bF66403112eb.png)

When the function calls other functions, each function will obtain its stack after being called. The function will save all the local variables that save it, but there will also be a program counter to remember the address of the function in the execution environment. When the function is running, its memory block can be used again as other purposes.

## dynamic memory allocation

Unfortunately, it is not as easy as you want to know how much memory it takes during compilation. Imagine if you want to do the following things:

`` ` int n = Readinput (); // Read information from users Em // Create an array containing n elements `` `

Here, the compiler does not know how much memory is needed for the array time, because this is determined by the value of the array elements entered by the user.

Therefore, the memory space cannot be allocated in the stack. Instead, the program needs to be allocated from the operating system to the correct memory space at runtime. The memory here is allocated by the memory of the hedge. The difference between static and dynamic memory distribution is summarized below:

! [] (https://user-images.githubusercontent.com/1475173/40289567-bff2FC-5CEB-11E8-852A- E393FAC3F.PNG)

<Center>*The difference between static and dynamic allocation of memory*</center>

In order to fully understand the working principle of dynamic memory allocation, we need to spend some time to understand the ** pointer **. This may be a bit of running. ^. ^. If you are interested in pointers, please leave a message, and then we will discuss more content about pointers in the future chapters.

## Memory allocation in JavaScript

Now, we will introduce how to allocate memory in JavaScript ((first step).

JavaScript handles memory allocation without the need to interfere with developers, and at the same time declare variable values.

`` `
var n = 374; // Digital allocation memory
var s = 'sessionStack'; // allocate memory for string

var o = {
A: 1,
B: Null
}; // All the objects and their values ​​allocate memory

var a = [1, null, 'str']; // (similar object) is the distribution memory of the array and its array

function f (a) {
Return a + 3;
} // Allocate a function (one callable object)

// Function expression also assigns an object
SOMEELEMENT.AddeventListener ('Click', Function () {
somelement.style.backGroundcolor = 'Blue';
}, FALSE);
`` `

Some function calls also generate object allocation:

`` `
var d = new date (); // allocate a date object

var e = document.createElement ('div'); // allocate a DOM element
`` `

Methods that can be allocated or objects:

`` ` var s1 = 'sessionstack'; var s2 = s1.substr (0, 3); // S2 is a new string // Because the string is immutable, JavaScript may choose the memory address range of the storage array [0, 3] without allocating memory. var a1 = ['STR1', 'STR2']; var a2 = ['STR3', 'STR4']; var a3 = a1.concat (A2); // The new array containing 4 elements consists of A1 and A2 array elements `` `

Memory use in ## javascript

The allocated memory in JavaScript mainly refers to memory reading and writing.

It can be assigned to variables or object attributes, or uses memory for functions.

## Release the memory that is no longer used

Most memory management problems appear at this stage.

The pain point is to detect when the memory that has been allocated is idle. It often requires developers to determine whether the memory in the program is no longer used, and then release it.

Advanced programming language integrates a software called garbage recychers. The work of the software is to track memory allocation and usage in order to find out and automatically release idle allocation of memory.

Unfortunately, this is an approximate process, because the general problem of determining whether some memory fragments are idle lies in its irreversible (cannot be solved by algorithms).

Most garbage recychers collect those memory that is no longer accessed, such as referenced all variables that reference the memory exceeding the memory range. However, a memory space set below the approximate value can be collected, because under any circumstances, there may still be variables reference the memory within the memory address range, even if the memory is idle.

## Memory waste recycling

Due to finding the unspeakability of "no longer use" memory, for this universal problem, garbage recovery has achieved a limited solution. This section will explain the necessary views to understand the main memory waste recycling algorithms and its limitations.

## memory reference

Quoting is one of the main concepts relying on memory waste recycling algorithms.

In the context of memory management, if object A access to another object B indicates that A references object B (can be hidden or explicit). For a chestnut, a JavaScript object quoted its [prototype] (https://developer.mozilla.org/en-s/Docs/web/javascript/guide/inheritance_and_prototype_chain) and its belonging value (Expressive reference).

In this context, the concept of "object" has been expanded than the general JavaScript object and contains functional scope (or global phylochemical scope).

> Word -based scope defines how to resolve variable names in the nested function. Even if the parent function has returned, the internal function will still contain the scope of the parent function.

## garbage recycling reference count

This is the simplest memory waste recycling algorithm. When a object is referenced by 0, it will be marked as "recyclable memory garbage".

Look at the following code:

`` `
var o1 = {
O2: {
X: 1
}
};

// Create two objects.
// 'O1' Quote Objects 'O2' as its attribute. All are unable to recycle.

// 'O3' is the second variable that references 'O1' object
var o3 = O1;

O1 = 1; // Now, the original object in 'O1' has only one single reference, which is represented by variables 'o3'

// Reference the 'O2' attribute of the object.
// There are two references in this object: one is as a attribute, and the other is 'O4' variable
var o4 = o3.o2;

// 'O1' Object is now only 0 references, and it can be recycled as memory waste.
// However, its 'O2' attribute is still cited by the variable 'O4', so its memory cannot be released.
o3 = '374';

O4 = null;
// 'O1''s' O2' attribute is now only 0 reference. So the 'O1' object can be recycled.
`` `

## cycle reference is a troublesome thing

Cycle reference can cause a limit. In the following examples, two objects of mutual reference are created, which will cause cyclic references. After the function is called, they will exceed the range, so in fact, they are useless and can release their references. However, the reference counting algorithm will believe that because both objects quotate each other at least once, they must not be recovered by garbage.

`` `
function f () {
var o1 = {};
var o2 = {};
O1.p = O2; // O1 quote O2
O2.p = O1; // O2 quote O1. This causes cycle reference
}

f ();
`` `

! [] (https://user-Images.githubuserContent.com/1475173/40289780-F14E6518-5CEC-11E8-93e5-91d59a611809.png)

## Tags-Clear algorithm

To determine whether the reference to the object is required, the algorithm will determine whether the object can be obtained.

Mark-Clear algorithm contains three steps:

- Root: Generally speaking, the root is a global variable cited in the code. Take JavaScript as an example, Window object is a global variable that can be regarded as root. The corresponding variables in Node.js are "global". The garbage recovery device will build a complete list of all root variables.
- Subsequently, the algorithm detects all root variables and their offspring variables and marked them to activate (indicating that they are not recycled). The variables (or objects, etc.) that any root variable cannot reach will be marked as memory garbage.
- Finally, the garbage recovery device releases all non -activated memory fragments and then returns to the operating system.

! [] (https://user-images.githubusercontent.com/1475173/40289792-0436a5Be-5CED-11E8-9471-37F13D00966B.gif)

_Label-Clear the dynamic icon of the algorithm_

This algorithm is better than the previous algorithm, because the zero reference of the object can make the object from obtain. Otherwise, as the cycle references seen before.

Since 2012, all modern browsers have built -in tag -removing garbage recychers. In the past few years, all the optimization of JavaScript memory garbage collection (generation/incremental/concurrency/parallel garbage collection) was optimized for the optimization of the mark-clear algorithm, but it did not improve the garbage recycling algorithm itself, nor did it improve whether the judgment target was improved. Able to get.

You can view this [article] (https://en.wikipedia.org/wiki/tracing_garbage_collection) to understand the details of tracking memory waste recycling and the optimized mark-clear algorithm.

## cycle reference no longer makes people hurt

In the first example of the previous example, when the function returned, the global object no longer quoted these two objects. As a result, memory waste recychers found that they were not available.

! [] (https://user-images.githubusercontent.com/1475173/40289808-197034-5Ced-11E8-8991-04CE5D8C91ad.png))

Even if the two objects are quoted with each other, they cannot get them from root variables.

## Anti -intuitive behavior of memory waste recyclers

Although the memory garbage recovery is convenient, they also have a series of costs. One of them is uncertainty. The meaning of memory waste is unpredictable. You cannot determine the exact timing of memory waste recycling. This means that in some cases, the program uses more memory than the actual needs. Under other circumstances, in specific interactive sensitive procedures, short pauses will attract attention. Although uncertainty means that it cannot be determined when it can be collected by memory garbage, most GC implementation shares a model, that is, garbage recovery during memory distribution. If there is no memory allocation, most memory waste recychers will remain idle. Consider the following:

- Allocate a considerable memory.
- Most elements (or all) are marked as not obtained (assuming that we assign the cache we do not need to be null)
- No longer assign other memory.

In this case, most memory waste recychers will no longer run any memory waste recycling. In other words, even if the unable to reactor the garbage recovery, the garbage collector will not be marked. Although this is not a memory leak in the strict sense, this will lead to higher memory usage.

## What is the memory leak?

As the memory management says, the memory leak means that some programs used in the past but are now idle, but they did not return to the operating system or available memory pool.

! [] (https://user-images.githubusercontent.com/1475173/40289818-2cc8dce0-5CED-11E8-89d5-C2B1032be068.jpeg)

Programming language likes multiple memory management methods. However, whether a memory fragment is used is an uncertain question. In other words, only the developer knows whether a certain memory fragment can return to the operating system.

Some programming languages ​​provide developers with functional functions to solve this problem. Other programming languages ​​rely on which memory fragments of developers are fully controlled. Victoria Encyclopedia is related to [manual] (https://en.wikipedia.org/wiki/manual_memory_management) and [automatic] (https://en.wikipedia.org/garbage_comletIn_%28Compute%29). good article.

## Four common JavaScript memory leakage

### 1: global variable

JavaScript handles unlender variables in an interesting way: when a variable that is not declared is referenced, a new variable will be created on the global object. In the browser, the global object is `Window`, which means the following code:

`` ` FUNCTION FOO (ARG) { bar = "some text"; } `` `

Equivalent to:

`` ` FUNCTION FOO (ARG) { window.bar = "some text"; } `` `

The variable `bar` originally meant that it can only be referenced in the FOO function. But if you do not use the `var` to declare variables, you will create an extra globe. In the above examples, there will be no major accidents. But you can naturally imagine a more destructive scene.

You can also use the `This` keyword to create a global variable inadvertently.

`` `
function foo () {
this.var1 = "POTENTIAL Accidental Global";
}

// Call the FOO function itself, this will point to the global object (Window) instead
`` `

> You can avoid adding all the above problems by adding `Use Strict'` on the top of the javascript file.

The unexpected global variables are indeed a problem. It is more frequent than the size of the code that is not fully explicit. According to the definition of these global variables, it will not be collected by the memory garbage recyrior. You need to pay special attention to storage and processing a lot of information when using global variables. Only when necessary, use global variables to store data. Remember that once you no longer use it, assign it to NULL or allocate it to it.

### 2：Timer and forgotten callback function

Because we often use the `setInterval` in JavaScript, let us take it as an example.

Observer and other instructions are provided in the framework. Once they ensure that when their instances are not available, all references to the callback will become unable to obtain. It is easy to find the following code:

`` ` var serverdata = loaddata (); SetInterval (function () { var renderer = document.GetelementByid ('renderer'); if (renderer) { renderr.innerhtml = json.stringify (serverData); } }, 5000); // This will be executed every 5 seconds every 5 seconds `` `

The above code fragment shows the consequences of nodes or data that uses timers to reference.

The `renderer` object will be replaced or removed at some point, which will cause the code encapsulated by the regular processing program to become redundant. When this happens, no matter whether it is the timing processor handle or its dependence, it will not be recovered by garbage. This is because the timer needs to stop (remember that the timer is still in the activation state). This can be attributed to the `ServerData` variables loaded by preservation and processing data.

When the observer is used, you need to make sure that once you no longer need them, it is explicitly removed (no longer the observer or object becomes not obtained).

Fortunately, most modern browsers will deal with you: when the object of the observer becomes unable to get, even if you forget to remove the event monitoring function, the browser will automatically recycle the observer processing program. In the past, some old toothed browsers could not handle these situations (such as old IE6).

Then, the best practice is to remove the observer processing procedure when the object is abandoned. View the following example:

`` `
varing = document.GetelementByid ('Launch-Button');
var counter = 0;

Function onClick (event) {
counter ++;
element.innerHtml = 'Text' + Countr;
}

Element.addeventListener ('Click', onClick);

// Do stuff
Element.removeEventListener ('Click', onClick);
Element.parentNode.removechild (Element);
// Now when the element exceeds the range
// Even in the browser that cannot handle the cycle reference, it will recover elements and onClick events
`` `

Before you get a DOM node, you no longer need to call the `RemoveeventListener, because the modern browser supports the use of memory waste recychers to detect these cycle references and perform appropriate processing.

If you use the `jquery` API (other libraries and frameworks also supports API), you can remove the event monitoring function before the abandoned node. JQuery also ensures that even in the old browser, there will be no memory leakage.

## Closure

Closure is an important function of JavaScript: nested functions can access variables of external (closed) functions. Given the details of the implementation of JavaScript during running, the following methods may cause memory leakage:

`` `
var thething = null

var replacething = function () {
var Originalthing = Thething;
var unused = function () {
if (Originalthing) // Quote Originalthing
console.log ("hi");
};
thething = {
longstr: new array (1000000). Join ('\*'),
somemethod: function () {
console.log ("Message");
}
};
};
SetInterval (replacething, 1000);
`` `

When calling the `Replacething`, the` Thething` object is composed of a large array and a new closure (`Somethod`). The closure created by the `Originalthing` was cited by the closure created by the variable (that is, reference to execute the` Thething` variable in front of the `replacething` function). What needs to be remembered is that once the closure of the same parent domain creates a closure scope, the closing scope is shared.

Under such circumstances, the closure `someMethod` and` unused` share the same scope. `unused` quotes` Origintalthing`. Even if the `unused` is never used, you can use the` SOMEMETHOD` function outside the domain of the role of `replacething`. Then because the `SOMEMETHOD` and` Unused` shared the same closure scope, `unused` variables reference` Originalthing` will force the activation status (two closing sharing). This prevents memory waste recycling.

In the above examples, the closure `SOMEMETHOD` and` Unused` shared the scope, and the `unused` references` Origintalthing`. You can use the `Somethod` outside the` Replacething` `THETHING`, even if the` unused` is never used. In fact, due to the shared closure scope of `SOMEMETHOD` and` unused`, Unused references `Origintalthing` to require unused to maintain the activation state.

All these behaviors can cause memory leakage. When you continue to run as the above code fragment, you will find soaring memory usage. When the memory garbage recovery is running, these memory usage rates will not decrease. A closing linked list will be created here (under the current situation, its root variables are `thething`), each closure scope indirectly references large array.

The problem was discovered by the METOR group and they wrote a good [article] (https://blog.meteor.com/an-nteresting- know--javascript-almory-leak-8b47d2e7f156) to describe it in detail. This question.

### 4: Remove DOM reference

Sometimes developers store the DOM nodes in the data structure.

Suppose you want to quickly update a few lines of table content. If you save the reference to each table in a dictionary or array, this will cause the same DOM element to repeat the same DOM element: one in the DOM tree and the other in the dictionary. If you want to release the reference to these tables, you need to remember to make these references into uninvited.

`` `
var elements = {
Button: document.GetelementByid ('Button'),
image: document.GetelementByid ('Image')
};

function dostuff () {
elements.image.src = 'http://example.com/image_name.png';
}

function removeImage () {
// Image element is a direct descendant element of body element
document.body.removechild (docume
// At this time, we still quote the #button element in the global object of Elements
// In other words, the button element is still in memory and cannot be collected by the garbage recyler
}
`` `

You also need to consider the additional node or leaf node in the DOM tree. If you save a cither of a cell in the code, at this time when you decide to remove the table from the DOM, it will still maintain a reference to the cell, which will cause a large amount of memory leakage. You can think that memory waste recychers will release memory except the cell. And this is not over yet. Because the cell is a descendant element of the form and the offspring elements preserve the reference to its parent node, the reference to a cell will cause the memory that cannot be released by the entire table \*\*.

# Memory management experience

The following content is personal original sharing. By [March] (https://github.com/heaven2049).

### guiding ideology

Reduce memory occupation as much as possible, and reduce GC as much as possible.

-Recent the number of GC

The browser will recover the garbage memory from time to time, called GC, which is triggered from time to time. Generally, when applying for new memory from the browser, the browser will detect whether to reach a critical value and then trigger. Generally speaking, GC will be more time -consuming, and the GC may cause the page to stuck and lose the frame. Therefore, we must avoid the trigger of GC as much as possible. GC cannot be triggered by code, but some browsers such as Chrome can manually click the CollectgarBage button to trigger the GC on the DEVTools-> Timeline page.

-Ressor memory occupation

Reducing memory occupation can avoid applications/system stuck caused by too much memory occupation, APP flashback, etc., especially on the mobile terminal. When the memory consumption is large, the browser may frequently trigger the GC. As mentioned earlier, when GC occurs when applying for new memory, if you can avoid applying for new memory, GC can be avoided.

### Optimization

#### Use Object Pond

> Object Pond ** (English: Object POOL PATTERN) is a [design mode] (https://zh.wikipedia.org/wiki/%E5%AF%B9%B1%A1%E6%B1%A0 %E6%A8%A1%E5%BC%8F). ** A object pool contains a set of objects that have been initialized and can be used, and can be created and destroyed when there is demand. The users of the pool can obtain the object from the pool, operate it, and return it to the pool instead of destroying it directly when it is not needed. This is a special factory object.

> If the cost of initialization and instantiation is high, and the demand needs to be regularized, but when the number of instantiation is small, the use of the object pool can obtain significant effectiveness improvement. It is predictable to obtain objects from the pool, but the time required for a new instance is uncertain.
> Forecast
> The above is taken from Wikipedia.

The use of object pool technology can significantly optimize the memory consumption when it is necessary to create the object, but it is recommended to do the following fine optimization according to different use scenarios.

1. Create on demand

   Create the empty object pool by default, create objects on demand, and return to the pool.

2. Pre -creation object

   For example, such as rolling events, TouchMove events, Resize events, and for -cycle frequent creation objects may trigger the occurrence of GC. Therefore, under special circumstances, it can be optimized to the pond in advance.

   In the case of high frequency, it is recommended to use [interception/anti-shake] (https://rockjins.js.org/2017/02/21/2017-02-21-debonce-Function/) and task queue related technologies.

3. Time release

   The objects in the object pool will not be recovered by garbage. If a large number of objects are recycled into the pool under extreme cases, it will not be counterproductive.

   Therefore, the pool must be designed for time/quantitative release object mechanism, such as parameters such as the use capacity/maximum capacity/pool use time, etc.

#### Other optimization tips

1. Avoid creating objects as much as possible, and avoid calling methods to create objects when unnecessary situations, such as `array.slice`,` array.map`, `array.filter`, string add,`$ ('div " )`,` Arraybuffer.slice`, etc.

2. Objects that are no longer used, manual feeding is NULL, which can avoid problems such as cycle references.

3. Use [weakmap] (https://developer.mozilla.org/en/docs/Web/javascript/reference/global_objects/weakmap))

4. Do not use the large objects of `console.log`, including DOM, large array, ImageData, ArrayBuffer, etc. Because the object of `console.log` will not be recovered by garbage. For details, see [Will Console.log Prevent Garbage Collection?]

5. Reasonable design page, create objects/rendering pages/loading pictures on demand.

   -So avoid the following problems:

   -In for saving trouble, all data is requested at one time.
   -In for saving trouble, rendering all data at one time, and then hide.
   -In for saving, load all pictures at one time.

   -Ad the use of the same pop -up window for repeated DOM, etc.

   For example, in the Vue-Element framework, Popover/Tooltip and other components will create M \* N instances when they are used in the table, which can be optimized to create only one instance, dynamic settings and data.

6. ImageData object is JS memory killer to avoid repeating the creation of ImageData objects.

7. Reuse ArrayBuffer.

8. Compressed pictures, loading pictures on demand, rendering pictures on demand, and using the appropriate picture size and picture format, such as webp format.

#### Photo processing optimization

Assuming a transparent picture of 100KB, 300X500, can be roughly divided into three processes:

1. Load the picture

   Load the picture dual format to the memory and cache. At this time, the 100KB memory & 100KB cache is consumed.

2. Decoding picture

   Decoding the binary format into a pixel format. At this time, it takes up width _ 24 (transparent to 32 -bit) Bit small memory, that is, 300 _ 500 \* 32, which is about 585 kb. The name is a pixel format memory here. Personally speculate that the browser will recover 100kb memory created when loading pictures at this time.

3. Rendering picture

   Rendering pictures through the CPU or GPU, if it is rendered for GPU, it is necessary to upload to the GPU video memory. This process is more time -consuming. The picture size / video memory bit width. The larger the picture size, the slower the upload time, the more the memory is occupied.

> Among them, the old browser, such as Firefox, recover pixels and the time is late. If a large number of pictures are rendered, the memory will be too high.

PS: The browser will reuse the same picture binary memory and pixel format memory. The browser rendering picture will obtain the data in the following order:

Dynasties >> Pixel Format Memory >> Binary Memory >> Caches >> Get from the server. We need to control and optimize the size and recycling of binary memory and pixel memory.

To sum up, the memory consumed when the browser renders the picture is determined by the size memory, height, transparency, etc. of the picture file, so it is recommended:

1. Use CSS3, SVG, iconfont, Canvas to replace pictures. Display a large number of pictures pages. It is recommended to use Canvas rendering instead of using IMG tags directly. For details, please refer to [Two Three Three Three Three Three Three Three Three Three Three Three Three Threes of Image Rendences and Browsers] (http://www.voidcn.com/article/p-rrwveyhj-dc.html).

2. Appropriate compression of the picture can reduce bandwidth consumption and picture memory occupation.

3. Use the appropriate picture size, that is, the response picture, output different sizes of different sizes for different terminals, do not use the original picture to reduce the ICON, such as some pictures services such as OSS.

4. Use the appropriate picture format, such as using a webp format. Detailed picture format comparison, use scenarios and other suggestions to see [web front-end picture extreme optimization strategy] (http://jixiaanqianduan.com/frontend-weboptimize/2015/11/17/front-ed-optmize.html).

5. Load and render pictures on demand.

6. When pre -loading the picture, remember to give the IMG object to NULL, otherwise it will cause the picture memory to release.

   When rendering pictures, the browser reads again from the cache.

7. Practice the icing IMG object to NULL and SRC to NULL, and urge the browser to recover memory and pixel format memory in time.

8. Remove the image of the non -visual area and renders it again when needed. It is very simple to achieve when combined with on-demand rendering. Switch SRC and V-SRC.

### Reference link:

[Garbage-Collector-friendly- Code/]

[Introduction to mobile web general optimization strategy (2)] (https://imququ.com/post/wpo--mobile-web-2.html)

[H5 front -end performance optimization advanced advanced advancement] (https://blog.csdn.net/u011363981/article/details/50481159))

[JavaScript's IMAGE object, image rendering and browser memory]

[WEB front-end picture extreme optimization strategy] (http://jixianqianduan.com/frontend-eboptimize/2015/11/17/front-ed-optmize.html)

[Mdn weakmap] (https://developer.mozilla.org/en/docs/web/javascript/reference/global_objects/weakmap))

[Function Slotting, Functional Filed Stabilization Implementation Principles] (https://rockjins.js.org/2017/02/21/2017-02-21-debonce-Function/)))))))

[a-tour-v8-garbage-collection] (http://jayconrod.com/posts/55/a-tour-v8-garbage-color)
