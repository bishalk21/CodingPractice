# DOM

DOM is an acronym for Document Object Model. It is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

- structured representation of an HTML documents.
- allows programs and scripts to dynamically access and update the content, structure and style of a document. (manipulate the DOM)

## How does the browser create a DOM tree?

- The browser loads the HTML document.
- The browser converts the HTML document into a DOM (Document Object Model) tree. (DOM is the structure of the page). The DOM tree is a representation of the HTML document in the form of objects and represents the document in the Computer memory.
- The browser fetches most of the resources like CSS, images, and JavaScript files that are linked in the HTML document. Then it parses the CSS files and converts them into CSSOM (CSS Object Model) trees. (CSSOM is the style of the page)
- The browser converts the CSS into a CSSOM (CSS Object Model) tree. (CSSOM is the style of the page). The CSSOM tree is a representation of the CSS in the form of objects and represents the CSS in the Computer memory.
- The browser parses the fetched CSS and applies the CSS rules to the DOM tree to create a render tree. (Render tree is the combination of DOM and CSSOM).
- The render tree is laid out in the viewport or structure it should appear in after the rules have been applied to the DOM tree.
- The render tree is painted on the screen or the visual representation of the render tree is displayed on the screen which is called painting.

## DOM Tree

The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

![DOM Tree](https://www.w3schools.com/js/pic_htmltree.gif)

## DOM Nodes

In the DOM, all HTML elements are defined as objects.

DOM nodes are objects. There are different types of DOM nodes. The most common types are element nodes and text nodes.

- The programming interface is the properties and methods of each object.
- HTML elements are defined as objects.
- The properties of all HTML elements are standard.
- The methods of all HTML elements are standard.
- All HTML elements can be accessed and changed.

### DOM !== JavaScript

Although the DOM is often accessed with JavaScript, the DOM is not part of JavaScript, and it is not a programming language.

DOM is part of the Web standards, and it is implemented by all major browser vendors and comes built-in with every browser.

DOM methods and properties are a part of WEB APIs. WEB APIs are a set of tools that allow you to interact with the browser and its built-in features such as the DOM, Geolocation, Local Storage, timers, fetch, etc.

API stands for Application Programming Interface. It is a set of tools that allow you to interact with the browser and its built-in features such as the DOM, Geolocation, Local Storage, timers, etc without having to write any low-level code.

All the DOM methods and properties are standard and can be used in all major browsers. However, the JavaScript DOM methods and properties are not standard. They are supported in all major browsers, but some browsers may support additional methods and properties.
