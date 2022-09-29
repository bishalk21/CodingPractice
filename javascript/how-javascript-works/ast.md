# Analysis, 5 tips for abstract grammar trees and minimum resolution time

> Please check the original text [here] (httts://blog.SessionStack.com/how-javascript- Parsing-ABSTRACT-SYNTAX-TREES- 5- TOPS-TO-Minimize-Time-Time-time ABFCF7E8A0C8), this article adopts [Knowledge Sharing Copy 4.0 International License Agreement] (http://creativecommons.org/licenses/by/4.0/) Sharing, by [true] (https://github.com/troland).

** This is Chapter 14 of JavaScript's working principle. **

## Overview

We all know that running a large section of JavaScript code will become bad. The code not only needs to be transmitted in the network, but also needs to be parsed, compiled into bytecode, and finally runs. Previous articles discussed the topics of the V8 engine widely used for Google Chrome and Nodejs. They play an important role in the operation of the entire JavaScript.

The theme talked about today is also very important: I know how most JavaScript engines analyze the text as a code that the text can understand, what happened after the conversion, and how developers use this knowledge.

## Programming language principle

Then, let's review the principles of programming language. No matter what programming language is used, you often need some software to process the source code in order to let the computer do something in practice according to the code. The software can be an interpreter or compiler. Whether it is JavaScript, Python, Ruby), or compilation language (C#, Java, Rust), they all have a common point: the source code is parsed as a data structure of the abstract syntax (AST) as a pure text. AST must not only show the source code with a structured local style, but also plays an important role in semantic analysis. The compiler checks whether the syntax of the verification program and the language element is correct and appropriate. After that, use AST to generate the actual bytecode or machine code.

## AST program

AST is not only used in language interpreters and compilers, but also in the computer world. One of the most common uses is static code analysis. Static code analysis does not run the input code. However, they still need to understand the structure of the code. For example, implement a tool to find a common code structure in order to reintermine duplicate code for code reconstruction. Maybe you can use a string to achieve it, but the tools will be quite simple and limited. Of course, if you are interested in achieving such tools, you don't have to write a parser by yourself. There are many open source projects that are perfectly compatible with ECMAScript specifications. Esprima and Acorn are golden partners. There are other tools to help the parser output code, that is, ASTS.ASTS is widely used in code conversion. For a chestnut, you may want to implement a converter to convert the Python code for JavaScript. The general idea is to generate AST even with the Python code converter, and then use the AST to generate JavaScript code. You may feel incredible. The fact is that ASTS is just a different expression of some languages. Before the analysis, it manifested as a text that follows some grammatical rules that constitute the language. After the analysis, it is manifested as a tree structure, which contains almost the same information as the input text. Therefore, it can also be reversed and then returned to the text.

## javascript analysis

Let's take a look at the structure of AST. Taking the following simple JavaScript function as an example:

`` `
Function Foo (X) {
if (x> 10) {{
var a = 2;
Return a \* x;
}

    Return x + 10;

}
`` `

The parser will produce the following AST.

! [] (https://user- Images.githubuserContent.com/1475173/42731809-9307a628-8847-11E8-86FA-F36610d3a44.png)

Please note that in order to display the simplified version of the analyzer output. The actual AST should be more complicated. However, the meaning here is to understand the first step before running the source code. You can visit [Ast Explorer] (https://astexplorer.net/) to view the actual AST tree. This is an online tool. You can write the JavaScript code above, and then the website will output the target code AST.

Maybe you will ask why I have to learn the working principle of the JavaScript parser. Anyway, the browser will be responsible for running the JavaScript code. You have such a dicing point correct. The following chart shows the time consumption of different stages during the running of JavaScript. Bad eyes, maybe you can find something interesting.

! [] (https://user-images.githubusercontent.com/1475173/42731808-92B9C048-8847-11E8-97a489246843.png)

Did you find it? Under normal circumstances, the browser consumes about 15% to 20% of the total running time to analyze JavaScript. I have not specifically counted these values. These statistics come from various JavaScript in the real world and websites. Perhaps 15% now does not look like a lot, but I believe me, many. A typical single -page program will load about 0.4m of JavaScript code, and then consumes the browser about 370ms for analysis. Maybe you will say that this is not many. It doesn't take much time itself. But remember, this is just the time that the JavaScript code is converted into the time consumed by ASTS. It does not include the time of running itself or the page loading period, such as [CSS and HTML] (https://blog.sessionStack.com/how-javascript-works- rendering-ndine-optimize-ines. -Performance-7b95553baeda) The process of rendering is time-consuming. This is just a problem facing the desktop browser. The situation of mobile browsers will be more complicated. Under normal circumstances, the time for the mobile browser's resolution code is 2-5 times that of the desktop browser.

! [] (https://user- Images.githubuserContent.com/1475173/42731812-93A24-8847-11E8-ED0B3CF021.jpeg)

The above chart shows the time consumed by different mobile and desktop browser analysis 1MB JavaScript code.

In addition, in order to obtain more types of native user experience, more and more business logic has accumulated at the front end, and the webpage program becomes more and more complicated. The webpage program is getting fatter and I can't move. You can easily think of the performance affected by network applications. Just open the browser developer tool, then use the tool to detect and analyze, compile and other time that occurs in the browser until the page is completely loaded.

! [] (https://user-images.githubusercontent.com/1475173/42731813-944806e0-8847-18-8410-4dee15303e3a.jpeg)

Unfortunately, the mobile browser has no developer tool for performance testing. do not worry. Because there are [deviceTiming] (https://github.com/danielmendel/deviceTiming) tool. It can help detect the analysis and running time of scripts in the controlled environment. It encapsulates the local code by implanting the code so that every time you access it from different devices, you can measure the analysis and running time locally.
The good thing is that the JavaScript engine does a lot of work to avoid redundant work and more efficient. The following is the technology used in the mainstream browser.

For example, the V8 realizes SCRIPT stream and code cache technology. When the script stream starts to download when the script starts, the script of Async and DEFERRED is parsed in a separate thread. This means that the analysis will be completed immediately when the script is completed. This will increase the 10% page loading speed.

Whenever you visit the page, the JavaScript code is usually compiled into bytecode. However, when the user accesss another page, the byte code will be invalidated. This is because the compiled code is seriously dependent on the state of the machine and context during the compilation phase. Bring a bytecode cache from Chrome 42. The technology will have a local cache compile code, so that when the user returns to the same page, all steps such as downloading, parsing and compilation will be skipped. This will save about 40% of the code analysis and compilation time for Chrome. In addition, this will also save mobile phone power.

In Opera, [caakan] (https://dev.opera.com/blog/carakan/) engine can reuse the output compiled by another program recently. No code is required to be under the same page or the same domain name. The cache technology is very efficient and can completely skip the compilation steps. It depends on a typical user behavior and browsing scenario: Whenever the user follows a user's browsing habits on the program/website, it will load the same JavaScript code. However, Carakan has long been replaced by the Google V8 engine.

[SpiderMonkey] (https://developer.mozilla.org/en-s/docs/mozilla/proadMonkey) used by Firefox (https://deeveloper.mozilla.org/en- US/docs/mozilla/spiderMonkey) does not use any cache technology. It can transition to the monitoring stage, where the script runs. Based on this calculation, it derives the code part that can be used frequently and can be optimized.

Obviously, some people choose not to do anything. Safari Chief Developer [Maciej Stachowiak] (http://en.wikipedia.org/wiki/maciej_stachowiak) pointed out that Safari did not cache the bytecode. They may have thought of caching technology but not put into work, because the consumption of the production code is less than 2%of the total operating time.

These optimization measures do not directly affect the analysis time of JavaScript source code, but it will be avoided as much as possible. After all, it is better than nothing.

There are many ways to use to reduce the initial loading time of the program. To minimize the number of JavaScript loaded: the less code, the less the analysis time, the less running. To achieve this purpose, you can load the necessary code in a special method instead of loading a large number of codes.比如，[PRPL](https://developers.google.com/web/fundamentals/performance/prpl-pattern/) 模式即表示该种代码传输类型。 Alternatively, you can check the dependence and then check whether there is useless and redundant dependence that causes the swelling of the code library. However, these things require a lot of space to discuss.

The goal of this article is how developers help speed up the resolution of the JavaScript parser. Modern JavaScript parser uses Heuristics to determine whether to run the specified code fragment immediately or delay it at some time in the future. Based on these Heuristics, the parser will perform immediately or lazy. Immediate analysis of functions that need to be compiled immediately. It mainly does three things: build AST, build a domain level, and then check all syntax errors. And lazy analysis is only used to unparalleled functions, it does not build AST and checks any syntax errors. Only the level of the scope is constructed, so that it will save about half of the time compared to the immediately analysis.

** React is an inspiration used to perform AST DIFF, thereby gaining performance. **

Obviously, this is not a new concept. Even old browsers like IE9 have supported the optimized technology, although it is implemented in a humble way compared to the working method of modern parsers.

Take a chestnut. Assuming the following code fragment:

`` `
function foo () {
function bar (x) {
Return x + 10;
}

    function baz (x, y) {
        Return x + y;
    }

    console.log (baz (100, 200));

}
`` `

Similar to the previous code, analyze the syntax input parser and output AST. This is as follows:

State the BAR function to receive the X parameter. There is a return sentence. The function returns the results of the addition of X and 10.

State the BAZ function to receive two parameters (x and y). There is a return sentence. Function function x and y add results.

Call the BAR function to pass 40 and 2.

Call the console.log parameter to the return value of the previous function call.
![](https://user-images.githubusercontent.com/1475173/42731811-93a3a834-8847-11e8-9935-aeee8592ee85.png)
So what happened during this period? The parser discovered the FOO function declaration, the BAZ function declared, calling the BAZ function and the console.log function. However, the parser does a completely unrelated extra use of the BAR function. Why not related? Because the function bar has never been called (or at least not at the corresponding time point). This is just a simple example and may be unusual, but in many procedures in real life, many functional declarations have never been called.

The BAR function is not analyzed here, but the function declared but did not point out its purpose. A real analysis is performed before the function is needed. Lazy analysis still only needs to find the entire function body and declare it for it. It does not need a syntax tree because it will not be processed. In addition, it does not obtain memory from the memory dilence, which usually consumes considerable some system resources. In short, skipping these steps can have huge performance improvement.

So the previous example, the parser will actually analyze it as follows:

! [] (https://user- Images.githubuserContent.com/1475173/42731810-9353F140-8847-18-86ee-934C4129865F.PNG)

Note that it is just a confirmation function bar declaration. Did not enter the BAR function body. In current cases, the function body has only one simple return sentence. However, as most programs in the modern world, the function body may be larger, including multiple returns, conditional statements, cycles, variables, and even nested functions. Since the function has never been called, this is completely wasting time and system resources.

In fact, this is a very simple concept, but its implementation is very difficult. Not limited to the above examples. The entire method can also be applied to functions, cycle, conditional statements, objects, etc. Under normal circumstances, all code needs to be parsed.

For example, the following is a very common mode to implement the JavaScript module.

`` ` var myModule = (function () { // The logic of the entire module // Return the module object }) (). `` `

This mode can be identified by most modern JavaScript parsers and the code in the logo needs to be parsed immediately.

So why don't the parsers use lazy analysis? If you are lazy to analyze some code, and the code must run immediately, this will actually reduce the speed of the code. You need to run a lazy analysis at a time and perform another immediately analysis. Compared with immediately, the operation speed will be reduced by 50%.

Now, we have a rough understanding of the principle of the underlying layer of the parser, and it is time to consider how to help improve the resolution speed of the parser. You can write code in this way so that you can resolve the function at the right time. Here is a mode recognized by most parsers: using bracket packaging functions. This will tell the parser that the function needs to be immediately. If the parser sees a left bracket and later is a function declaration, it will immediately analyze the function. It can help the parser to speed up the resolution by explicitly run the function immediately.

Suppose there is a FOO function

`` ` Function Foo (X) { Return x * 10; } `` `

Because there is no obvious identification that the function needs to be run immediately, the browser will be lazy. However, we are sure that this is wrong, so you can run two steps.

First, store the function as a variable.

`` ` var foo = function foo (x) { Return x * 10; }; `` `

Note that the function name between the left brackets of the functions and functional parameters in the function parameter. This is not necessary, but it is recommended to do it, because when it is thrown out of exception errors, the stack tracking will contain the actual function name instead of <nonymous>.

The parser will still be lazy. You can make a small change to solve this problem: use parentheses to package functions.

`` ` var foo = (function foo (x) { Return x * 10; }); `` `

Now, the left brackets in front of the analyzer see the funch keyword will immediately analyze it.

It is difficult to know how lazy the parser is lazing or immediately parsing the code immediately because the parser is lazy. Similarly, developers need to spend time consider whether the specified function needs to be parsed immediately. No one wants to do so laboriously. In the end, it is also important that this will definitely make the code difficult to read and understand. You can use Optimize.js to deal with this kind of situation. This tool is only used to optimize the initial loading time of JavaScript source code. They run a static analysis of the code, and then the functions that need to be run immediately by using bracket packaging so that the browser can immediately analyze and prepare to run them.

Then, as usual, you can coded and the code is as follows:

`` ` (Function () {) console.log ('hello, world!'); }) (). `` `

Everything looks beautiful, because the left bracket is added before the function declaration. Of course, code compression needs to be performed before entering the production environment. The following is the output of compression tools:

`` ` ! function () {console.log ('hello, world!')} (); `` `

It looks normal. The code runs as scheduled. But it seems that there is something missing. The compression tool removes the brackets of the packaging function to replace a exclamation mark. This means that the parser will skip the code and will run lazy analysis. In short, in order to run the function, the parser will immediately analyze it immediately after laziness analysis. This will cause the code to run slowly. Fortunately, Optimize.js can be used to solve such problems. The code that is passed to Optimize.js will output the following code:

`` ` ! (Function () {console.log ('hello, world!')});  `` `

Now, we make full use of their respective advantages: compressing code and the resolutor that correctly identifies the lazy analysis and immediately analytical functions.

## Precompiled

But why not do these tasks on the server? In short, a better way to repeat the matter than forced various clients is to run only once at the server and output the results on the client. Then, there is an ongoing discussion that the engine needs to provide a function of running a pre -compiled code to save the browser's running time. In essence, even if the server uses the server tool to generate the byte code, it only needs to transmit the byte code and run on the client. After that, you will see some of the main differences in starting time. This sounds very tempting but it will be difficult to achieve. There may be anti -effects because it will be huge and it is likely to be signed and handled due to security reasons. For example, the V8 team has solved the problem of repeated analysis internally, so pre -compilation may actually have no birds.

## Some suggestions to improve network application speed

- Check dependencies. Reduce unnecessary dependencies.
- The division code is a smaller block instead of a whole block. Such as Webpack's Code-Spliting function.
- Delayed the JavaScript code as much as possible. You can only load the code clips required by the current routing. For example, when you click on a certain element, you can introduce a certain code module.
- Use developer tools and deviceTiming to detect performance bottlenecks.
- Use tools like Optimize.js to help the parser select or lazily analyze immediately to speed up the resolution.

## Expansion

Sometimes, especially the mobile phone browser, such as when you click the forward/back button, the browser will cache. But in some scenarios, you may not need this function of the browser. There are the following solutions:

`` ` Window.addeventListener ('PageShow', (Event) => { // Check the forward/backward cache, whether to load the page from the cache if (event.persisisted || window.performance && Window.perFormance.navigation.type === 2) {) { // Perform the corresponding logic processing } }; `` `
