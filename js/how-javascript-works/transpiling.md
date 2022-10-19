# Class and inheritance and Babel and TypeScript code conversion to explore

> For the original text, please refer to [here] (https://blog.sessionStack.com/how-javascript-works- internals-Classes-nHeritance-In-Babel-AD-113612CDC220), which is slightly deleted. Reduce, this article adopts [Knowledge Sharing Signature 4.0 International License Agreement] (http://creativecommons.org/licenses/by/4.0/) sharing, by [trues://github.com/troland).

** This is Chapter 15 of JavaScript's working principle. **

It is the most common method to organize various software engineering code today. This chapter will explore the different methods of implementing the JavaScript class and how to build a class inheritance. We will thoroughly understand the prototype inheritance and analysis of the use of popular library simulation to achieve the method of inheritance -based inheritance. Next, it will introduce how to use converters to add non -native support grammatical functions and how to use the Babel and TypeScript to support the ECMAScript 2015 category. Finally, an example of several V8 native support implementation class.

## Overview

JavaScript has no original type and everything is object. For example, the following string:

`` ` const name = "sessionStack"; `` `

You can immediately call the different methods on the new object:

`` ` console.log (A.Repeat (2)); // Output sessionStackSactor console.log (a.tolowercase ()); // Output sessionStack `` `

JavaScript is different from other languages. It is declared that a string or value will automatically create an object containing an object and providing different methods that can even run on the original data type.

Another interesting fact is that the complex data types of the array are also objects. When using Typeof to check an array instance, the output `Object`. The index value of each element in the array is the attribute of the object. Therefore, when the access element is introduced through the array index, it is actually accessing the attributes of an array object and then obtaining the attribute value. When it comes to the data storage method, the following two definitions are the same:

`` `
let names = ["sessionStack"];

let names = {
"0": "SessionStack",
"LENGTH": 1
}
`` `

Therefore, the speed of access to the array elements and object attributes is the same. I walked a lot of detours to find the fact. For some time, I had to optimize a lot of performance in the most important code in the project. After testing other simple methods, I replaced all the objects into an array. It stands to reason that access elements will be faster than the key value of access to hash tables. However, I was surprised to find that there was no improvement of performance. In JavaScript, the operation of all data elements is implemented by the key in the interview hash table.

## Use prototype simulation class

When it comes to the object, the first category that appears in my mind. Developers are accustomed to organizing procedures with associations between classes and classes. Although everything in JavaScript is the object, it does not use classic class -based inheritance. Instead, use [prototype] (https://developer.mozilla.org/en-s/docs/web/javascript/guide/details_of_the_object_model.

! [] (https://user-images.githubusercontent.com/1475173/43037673-5c0635c2-8D42-11E8-99BC3EC88F1ce.png)

In JavaScript, each object is associated with its prototype object. When a method or attribute of the access object, first search for the object itself. If not found, find it on the object prototype.

Let's take the constructor of the basic class as an example:

`` `
Function Component (Content) {
this.Content = Content;
}

Component.prototype.render = Function () {
console.log (this.Content);
}
`` `

Add the render function to the prototype so that the method of the component can be used. When the method of calling the Component class instance, first query the method on the instance. Then find the rendering method on the prototype.

! [] (https://user- Images.githubuserContent.com/1475173/43037678-5d436ce8-8D42-18-9B8A-005B904FA6C9.png)

Now trying to expand the Component class and introduce new subclasses.

`` ` function inputfield (value) { this.Content = `<input type =" text "value =" $ {value} " />; } `` `

If you want to inputField to extend the component class method and you can call its render method, you need to change its prototype. When the instance method of the subclass is called, you must not want to find it on an empty prototype (_Here all the objects are a common prototype, the original text is not rigorous enough_). The search will continue to the Component class.

`` ` Inputfield.prototype = object.create (new component ()); `` `

In this way, the render method can be found on the prototype of the component class. In order to achieve inheritance, the prototype of InputField needs to be set to instances of the Component class. Most libraries use [Object.SetPrototypeof] (https://developer.mozilla.org/en-s/docs/web/javascript/global_objects/object/Setprototypeof) to implement inheritance.

! [] (https://user-images.githubusercontent.com/1475173/43037674-5c431E74-8D42-18-91df-1772608dc942.png)

However, there are other things to do. Every expansion class, what needs to be done as follows:

- Set the prototype of the sub -class as a parent -class example
- Call the parent class constructor in the construction function of the subclass, so as to perform the initialization logic of the parent class constructor.
- Introduction to visiting the parent class. When rewriting the parent method, you will want to call the original implementation of the parent method.

As you can see, when you want to achieve all the inheritance -based functions, you need to perform such a complex logical steps every time. When so many categories need to be created, it means that these logic needs to be encapsulated into reusable functions. This is the problem of developers to simulate through various types of libraries to solve the problem of inheritance -based inheritance. These solutions are so popular that they are urgently needed to integrate this function. This is why ECMAScript 2015's first important revised version introduced a syntax that supports the creation class based on class inheritance.

## class conversion

When the new function is proposed in ES6 or Ecmascript 2015, the JavaScript developer community can't wait to support the engine and browser. A good implementation method is to transform through code. It allows ECMAScript 2015 to write code writing and then converted to the JavaScript code that can be run by any browser. This includes using a class -based inheritance to write a class and convert it to executable code.

! [] (https://user-images.githubusercontent.com/1475173/43037679-5d819b12-8D42-18-82F4-3443714ced84.png)

Babel is one of the most popular converters. Let's understand the code conversion principle through the Babel conversion of the Component class.

`` `
class component {
constructor (content) {
this.Content = Content;
}

Render () {{
console.log (this.Content)
}
}

const component = new component ('sessionStack');
component.reder ();
`` `

The following is how the Babel is converted to the class definition:

`` `
var component = function () {
Function Component (Content) {
\_ClasscallCheck (this, component);

    this.Content = Content;

}

\_CreateClass (component, [{{
Key: 'Render',
value: function render () {
console.log (this.Content);
}
}]);

Return component;
} ();
`` `

As you can see, the code is converted to ECMAScript 5 code that can run in any environment. In addition, additional functions are introduced. They are part of the Babel standard library. The compiled file introduces the function of `_Classcallcheck` and` _createClass`. The first function guarantees that the constructor will never be called as a normal function. This is implemented by checking whether the context is executed and below an instance of the Component object. Code check whether this refers to such examples. The second function `_CreateClass` creates the attributes of the object (class) by passing into an array containing key and values.

In order to understand the principle of inheritance, let's analyze the InputField subclass inherited from the Component class.

```
class InputField extends Component {
    constructor(value) {
        const content = `<input type="text" value="${value}" />`;
        super(content);
    }
}
```

Here is the use of Babel to process the output of the above example:

`` `

Var inputField = Function (\_Component) {
\_inherits (inputField, \_Component);

function inputfield (value) {
\_ClasscallCheck (this, inputField);

    var content = '<input type = "text" value = "' + value + '" />';
    Return_PossibleConStructorreturn (this, inputField .__LTO__ || Object.getProtoypeof (inputField). Call (this, Content))););); (this, content))););); (this, content))););); (this, content)));

}

Return inputField;
} (Component);
`` `

In this example, inheritance logic is encapsulated in the \_inherits function. It executes the same operation mentioned earlier, that is, the prototype of the sub -class is a parent class.

In order to convert the code, Babel executed several conversion several times. First of all, analyze the ES6 code and convert it to the intermediate display layer called an abstract syntax tree. The abstract syntax tree is previously [article] (https://github.com/troland/how-javascript-works/blob/master/ast .md) I said it. The tree is converted into a different abstract syntax tree, and each node on the tree will be converted to the corresponding ECMAScript 5 nodes. Finally, the abstract syntax tree is converted to ES5 code.

The process is: ES6 code, syntax analysis, etc. => AST, and the AST related operation => convert to ES5 code.

## Babel abstract syntax tree

AST is composed of nodes, and each node has only one parent node. There is a basic type node in Babel. The node contains the content of the node and the information of the location in the code. There are various types of nodes such as literally representing string, value, empty value, and so on. There are also statement nodes of control streams (if) and cycles (for, about). In addition, there is a special type of node. It is a subclass of the basic node class, which stores the reference to the basic class and uses the text of the class as a separate node by adding a field to expand itself.

The following code fragment is an abstract syntax tree:

`` `
class component {
constructor (content) {
this.Content = Content;
}

Render () {{
console.log (this.Content)
}
}
`` `

The following is the approximate situation of the abstract syntax tree of this code fragment:

! [] (https://user- Images.githubuserContent.com/1475173/43037675-5CA41D32-8D42-18-906F-7354DDD19741.png)

After creating an abstract syntax tree, each node is converted into its corresponding ECMAScript 5 nodes and then converted into a code that follows ECMAScript 5 standard specifications. This is to find the farthest node from the root node and then convert it into a code. Then, their parent nodes are converted into code by using code fragments generated for each sub -node, and pushed in order. This process is called [depth-first traversal] (https://en.wikipedia.org/wiki/depth-first_search).

In the above example, the two MethodDefinition nodes are first generated. After that, the code of the text nodes is later, and finally the code of the ClassDeclaration node.

## TypeScript for conversion

TypeScript is another popular framework. It introduces a new syntax to write the JavaScript program, and then converts to an EMCAScript 5 code that can be run by any browser or engine. The following is the code to implement the component class using TypeScript:

`` ` class component { content: string; constructor (content: string) { this.Content = Content; } Render () {{ console.log (this.Content) } } `` `

The following is the intention of abstract grammar tree:

! [] (https://user- Images.githubuserContent.com/1475173/43037672-5b7623F6-8D42-18-82F4-F42810032C4D.PNG)

It also supports inheritance.

`` ` class inputField Extends Component { constructor (value: string) { const content = `<input type =" text "value =" $ {value} "` />; Super (content); } } `` `

The code conversion result is as follows:

`` ` var inputField = / ** @class* / (Function (_super) { __EXTENDS (inputField, _Super); function inputfield (value) { var _this = this; var content = "<input type = \" text \ "value = \" " + value +" \ " />" ""; _This = _super.call (this, content) || This; Return_this; } Return inputField; } (Component); `` `

Similarly, the final result included some library code from TypeScript. `__EXTENDS` is encapsulated with the same inheritance logic as the first part of the previous part.

With the widespread use of Babel and TypeScript, standard classes and class -based inheritance gradually become the standard way to organize the JavaScript program. This promotes the native support class of the browser.

## Native support

In 2014, chrome native support [class] (https://www.chromestatus.com/feature/46337457938432). This can not be used to implement the grammar of the statement without using any library or converter.

! [] (https://user- Images.githubuserContent.com/1475173/43037671-5B3828-8D42-18-9098-93bacea9625b.png)

The process of the native implementation of the class is the process of grammatical sugar. This is just an elegant grammar that can be converted into the same primitives that have long supported language. The use of new and easy -to -use definitions, in the final analysis, is to create constructive functions and prototype assignments.

! [] (https://user- Images.githubuserContent.com/1475173/43037680-5DBE8D1A-8D42-11E8-972A-7505CE1001e5.png)

## v8 engine support situation

Let us know how V8 supports the ES6 category natively. Such as the previous [article] (https://github.com/troland/how-javascript-works/blob/master/ast.md), first analyze the new syntax as the running JavaScript code and add it to the AST tree tree. middle. The result of the class definition is to add a [classliteral] (https://github.com/v8/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blob/blobs.

This node contains some information. First, it regards the constructor as a separate function and contains the class attribute set. These attributes can be a method, a getter, a setter, a public variable or a private field. The node also stores pointer references to the parent class that is expanded, and the constructor, attribute set and parent class, push in order.

Once the new ClassLiteral [convert it to bytecode] (https://github.com/v8/blob/be3a1df9008EE78D1101855d3044a203F515/interpreter/tecode-ccc#l1818) And prototype.
