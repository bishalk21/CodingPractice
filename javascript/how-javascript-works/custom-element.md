# Customized element exploration and constructing the best practice of reusable components

> For the original text, please refer to [here] (https://blog.sessionStack.com/how-javascript-works-Under-Hood-Custom-Best-Building-Reusable-E118De0c) There is a deletion. This article uses [Knowledge Sharing Copy 4.0 International License Agreement] (http://creativecommons.org/licenses/by/4.0/) sharing, by [trues:/github.com/troland).

** This is the 19th chapter of JavaScript working principle. **

## Overview

In [mentioned above] (https://blog.sessionStack.com/how-javascript-works-nternals-shadow-how-build-core-components-244331c4de6e), we introduced. The Shadow Dom interface and some other concepts are part of the web component. The thought behind the web component is to expand the built -in function of HTML by creating granularized, modular and replicated elements. This is a relatively new W3C standard that has been compatible with all mainstream browsers and can be used in the production environment. Although incompatible browsers need to use compatible libraries (discussions will be discussed in subsequent chapters).

As developers know, the browser provides some important development tools for building websites and web programs. What we call HTML, CSS and JavaScript, developers use HTML to build structures, CSS makes it beautiful, and then use JavaScript to move the page. However, before the emergence of web components, it was not easy to combine the JavaScript script behavior and the HTML structure.

This article will explain the cornerstone of web components-custom elements. In short, developers can use custom element interfaces to create custom elements that contain JavaScript logic and styles (as the literal meaning of name). Many developers confuse the custom elements with Shadow Dom. However, they are completely different concepts and they are complementary rather than replace each other.

Some frameworks (such as Angular, React) are trying to solve the same problems by introducing their own concepts. Developers can compare the custom elements and Angular instructions or reaCT components. However, the custom element is native to the browser and only requires native JavaScript, HTML and CSS. Of course, this does not mean that it can replace a typical JavaScript framework. Modern framework not only provides developers with the ability to imitate custom element behavior. Therefore, the framework and custom elements can be used at the same time.

## interface

Before we understand, let's browse the content of the interface quickly. Global `CustomLements` objects provide developers with some methods:

- `define (tagname, constructor, options)` `` Create a new custom element.

  Contains three parameters: the available label name of the custom element, the custom element class definition and option parameter object. Currently only one option parameter: `extends` specifies the string of the built -in element name of the HTML built -in element that wants to expand. Used to create customized built -in elements.

- `get (tagname)` `` If the element is defined, it returns the constructor of the custom element. There is only one parameter: the valid label name of the custom element.

- `WhenDefined (tagname)` `` Return a promise object, as the definition of custom elements is parsing. If the element is defined, it is immediately parsed. If the name of the custom element label is invalid, Promise is abandoned. There is only one parameter: the valid label name of the custom element.

## How to create custom elements

Creating a custom element is actually a piece of cake. Developers only need to do two things: create a class definition of extension `htmlelement`, and then register elements in the appropriate name.

`` `
class myCustomElement Extends htmlelement {
constructor () {
Super ();
// ...
}

// ...
}

CustomLements.Define ('My-Custom-Element', MyCUSTOMELEMENT);
`` `

Or as you wish, you can use anonymous class to prevent the current scope of messing up

`` `
CustomLements.define ('My-Custom-Element', Class Extends htmlelement {
constructor () {
Super ();
// ...
}

// ...
});
`` `

It can be seen from the above example, using the `CustomLements.define (...)` method to register a custom element.

## solved

In fact, what is the problem? ** nested DIV ** is one of the problems. What is nesting DIV? This is a very common phenomenon in modern web programs. Developers will use multiple noodle elements (DIV nested and the like).

```
<div class="top-container">
  <div class="middle-container">
    <div class="inside-container">
      <div class="inside-inside-container">
        <div class="are-we-really-doing-this">
          <div class="mariana-trench">
            …
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

Because the browser can be rendered normally on the page, such nested structures are used. However, this will make HTML unable to be available and difficult to maintain.

Therefore, for example, assuming the following components:

! [] (https://user- Images.githubuserContent.com/1475173/5354992-A446F380-11E9-9327-69D7B5458E4D.PNG)

Then the traditional HTML structure is similar:

`` `

<div class = "primary-timebar toolbar">
  <div class = "Toolbar">
    <div class = "Toolbar-Button">
      <div class = "Toolbar-Button-Out-BOX">
        <div class = "Toolbar-Button-Inner-BOX">
          <div class = "icon">
            <div class = "icon-not"> & nbsp; </div>
          </div>
        </div>
      </div>
    </div>
    <div class = "Toolbar-Button">
      <div class = "Toolbar-Button-Out-BOX">
        <div class = "Toolbar-Button-Inner-BOX">
          <div class = "icon">
            <div class = "icon-redo"> & nbsp; </div>
          </div>
        </div>
      </div>
    </div>
    <div class = "Toolbar-Button">
      <div class = "Toolbar-Button-Out-BOX">
        <div class = "Toolbar-Button-Inner-BOX">
          <div class = "icon">
            <div class = "icon-print"> & nbsp; </div>
          </div>
        </div>
      </div>
    </div>
    <div class = "Toolbar-Toggle-Button Toolbar-Button">
      <div class = "Toolbar-Button-Out-BOX">
        <div class = "Toolbar-Button-Inner-BOX">
          <div class = "icon">
            <div class = "icon-paint-format"> & nbsp; </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`` `

But imagine that if you can use the following code:

`` ` <primary-timebar> <Toolbar-found> <Toolbar-bitton class = "icon-not"> </Toolbar-Button> <Toolbar-bitton class = "icon-redo"> </Toolbar-Button> <Toolbar-bitton class = "icon-proint"> </Toolbar-Button> <Toolbar-Toggle-Button class = "Icon-Paint-Format"> </Toolbar-Toggle-Button> </Toolbar-found> </Primary-Toolbar> `` `

I want to say that the second example is much refreshing. The second example is more maintenance, readability and more reasonable for browsers and developers. More concise.

Another problem can be reused. As a developer, not only must you write a running code but also have to write a maintainable code. Writing the maintenance code can easily reuse the code fragment instead of repeatedly copying and paste.

I will give a simple example and you will understand. Assuming the following elements:

`` `

<div class = "my-custom-element">
  <input type = "text" class = "email" />
  <button class = "submit"> </button>
</div>
`` `

If you need to use this code elsewhere, developers need to write the same HTML structure again. Now, imagine that these elements need to be modified slightly. Developers need to find out where each code needs to be modified, and then make the same modification over and over again. too disgusting. Essence Essence

Is it better if you use the following code?

`` ` <my-custom-element> </my-custom-element> `` `

Modern web programs are not just static HTML. Developers need to do interaction. This requires JavaScript. Generally speaking, developers need to create some elements and then monitor the incident on it to respond to the user input. Click, drag or suspend the incident, etc.

`` `
var mydiv = document.queryselector ('. My-Custom-Element');

mydiv.addeventListener ('click', () => {
mydiv.innerHtml = '<b> I have ben clicked </b>';
});
`` `

`` `

<div class = "my-custom-element">
  I have not ben cricked yet.
</div>
`` `

Using a custom element interface can encapsulate all logic into the element itself. The following code can achieve the same function as the above code:

`` `
class myCustomElement Extends htmlelement {
constructor () {
Super ();

    var seelf = this;

    Self.addeventListener ('click', () => {
      Self.innerHtml = '<b> I have ben cricked </b>';
    });

}
}

CustomLements.Define ('My-Custom-Element', MyCUSTOMELEMENT);
`` `

`` ` <my-custom-element> I have not ben cricked yet </My-Custom-Element> `` `

At first glance, custom element technology needs to write more JavaScript code. However, in the actual program, it is rare to create a single component that does not need to be reused. The important feature of a typical modern web program is that most elements are created dynamically. Then, developers need to handle the use of JavaScript dynamic adding elements or predetermined content in the HTML structure. Then you can use custom elements to implement these functions.

In short, custom elements make the developer's code easier to understand and maintain, and is divided into small -sized and closed and closed modules.

## Require

Before creating custom elements, developers need to comply with the following special rules:

- The name must contain a fracture number -. In this way, the HTML parser can distinguish the custom elements from the built -in elements. This can ensure that the problem of naming conflict with the built -in elements (whether it is now or in the future when adding other elements). For example, `<My-Custom-Element>` is the right and `myCustomElement` and`<my_custom_element>`
- Repeated registered label names are not allowed. Repeatedly registered label names will cause browser to throw out `domexception` errors. Customized elements cannot be covered.
- Custom elements cannot be closed by itself. HTML parser only allows a handful of built -in elements to be closed by itself (such as `<IMG>`, `<link>`, `<br>`).

## Function

So what are the functions of custom elements? There are many answers.

One of the best functions is the definition of the element to point to the DOM element itself. This means that developers can directly use `this` to monitor the incident directly, access the DOM attributes, access the DOM element node, and so on.

`` `
class myCustomElement Extends htmlelement {
// ...

constructor () {
Super ();

    this.addeventListener ('Mouseover', () => {
      console.log ('I have ben hold');
    });

}

// ...
}
`` `

Of course, developers can use new content to cover the sub -node of the element. But it is generally not recommended, because this may lead to unpredictable behavior. As a user of a custom element, because it was not developed by the user, when the marking in the element was replaced by other content, the user would find it strange.

At a specific stage of the element life cycle, developers can execute code in some life cycle hooks.

`constructor`

Whenever the creation or update element will trigger the constructor (then explain it in detail). Generally, initialization of this stage, listening to incidents, creating Shadow DOM trees, and so on. What needs to be remembered is that the `super ()` must always be called in the constructor.

`connectedcallback`

Whenever the element is added to the DOM, the `ConnectCallback` method is called. It can be used to delay some code until the element is actually displayed on the page (such as obtaining a resource).

`DisconnectCallback`

In contrast to the `ConnectCallback`, call the `DisconnectCallBack` method when the element is deleted from the DOM. Calling is generally used to release resources. It should be noted that if the user closure the tab does not call the `DisconnectCallBack` method. Therefore, first developers need to pay attention to initialization code.

`attributechangedcallback`

When you add, delete, update, or replace the element, call. When the parser creates the element, it is also called. However, please note that only the attributes in the attributes of the attributes of the `Observedattributes`.

`addoptedcallback`

When using the `document.adoptnode (...)` to mobilize the element to another document, it will trigger the `AddoptedCallback` method.

Please note that all the above callbacks are synchronized. For example, when adding the element into the DOM, the connection can only be triggered.

## attribute reflection

The built -in HTML element provides a very convenient feature: attribute reflection. This means that directly modifying certain attribute values ​​will reflect directly into the attributes of the DOM. For example, `ID` attribute:

`mydiv.id = 'new-id';`

Will be updated to DOM to

`<div id =" new-id "> ... </div>`

vice versa. This is very useful because this allows developers to use statement books to write elements.

The custom element itself does not have this function, but there is a way to achieve it. In order to achieve the same functions in the custom element, developers need to define the Getters and Setters methods of attributes.

`` `
class myCustomElement Extends htmlelement {
// ...

get myproperty () {
Return this.hasattribute ('My-PROPERTY');
}

set myproperty (newvalue) {
if (newvalue) {
this.setattribute ('My-PROPERTY', Newvalue);
} else {
this.removeattribute ('My-PROPERTY');
}
}

// ...
}
`` `

## extension element

Developers can not only use custom element interfaces to create new HTML elements, but also can be used to expand existing HTML elements. And the interface works well in built -in elements and other custom elements. Just need to extend the class definition of the element.

`` `
Class MyAWESOMEBUTTON Extends Mybutton {
// ...
}

CUSTOMELEMENTS.DEFINE ('My-AWESOME-BUTTON', MyAWESOMEBUTTON);
`` `

Or when extended the built -in elements, the developer needs to add a third `Extends` to add a third` Extends` function for the `Customlements.define (...) Function. Because many built -in elements share the same DOM interface, the `Extends` parameter tells the browser that needs to be extended. If there is no specified element that needs to be extended, the browser will not know the type of function that needs to be extended.

`` `
class mybutton extends htmlbuttonelement {
// ...
}

CUSTOMELEMENTS.Define ('My-Button', Mybutton, {Extends: 'Button'});
`` `

A scalable primary element is also called customized built -in elements.

The rule of experience that developers need to remember are always expanding the existing HTML elements. Then, the gradual added function. This can retain the previous functions of the element (read only attributes, dynamic attributes, functions).

Please note that only Chrome 67+ now supports customized built -in elements. In the future, other browsers will be implemented, but Safari has not implemented the function at all.

## update element

As mentioned above, you can use the `CustomLements.define (...)` method to register a custom element. But this does not mean that developers must first register elements. It can be postponed to register a custom element at a certain time. It can even be registered after the element has been added to the DOM. This process is called update element. Developers can use `CustomElements.whendefined (...)` method to obtain the definition time of the element. Developers pass in the element label name, return a Promise object, and then analyze it when the element is registered.

`` `
customs.whendefined ('my-condition -Element').. then (\_ => {activity
console.log ('My Custom Element is defined');
});

```
For example, developers may want to delay the execution code until all sub -elements in the element are defined. If you embed the self -defined element, this will be very useful.

Sometimes, parental elements may depend on the realization of their child elements. In this case, developers need to ensure that child elements are defined before their parent elements.

## Shadow Dom

As mentioned earlier, you need to use custom elements with Shadow DOM. The former is used to encapsulate JavaScript logic into elements, while the latter is used to create a small segment of DOM to create an isolation environment that is not an external impact. It is recommended to view the previous introduction of [Shadow Dom] (https://blog.sessionStack.com/how-javascript-works-Internals-shadow-How-Build-Contained-COMPONENTS-244331C4DENTS-244331C4DENTS-244331C4DENTS-24331C4DENENTS-24331C4DENENTS-244331C4DENER4DER4DE6DER4DE6DEN61c4331C4DEN6363 The article can better understand the SHADOW DOM concept.

Just call the `this.attachshadow` to use Shadow DOM in the custom element

`` `
class myCustomElement Extends htmlelement {
  // ...

  constructor () {
    Super ();

    Let shadowRoot = this.attachshadow ({mode: 'open'});
    let elementContent = document.createelement ('div');
    shadowRoot.appendchild (ElementContent);
  }

  // ...
});
`` `

## template

We in the previous [Article] (httts://blog.SessionStack.com/how-javascript-works-Internals-shadow-How-Build-COMPONENTS-244331c4de6e) After introducing the next template, a separate article is required to specifically introduce the template. Here, we will give a simple example to introduce how to use templates in custom elements.

By using the `Template>` to declare a DOM fragment tag, the label content will only be parsed without rendering on the page.

`` `
<template ID = "My-Custom-Element-Template">>
  <div class = "my-custom-element">
    <input type = "text" class = "email" />
    <button class = "submit"> </button>
  </div>
</template>
`` `

`` `
Let myCustomElementtemplate = Document.quelseSelector ('#My-Custom-Element-Template')

class myCustomElement Extends htmlelement {
  // ...

  constructor () {
    Super ();

    Let shadowRoot = this.attachshadow ({mode: 'open'});
    shadowRoot.appendchild (MyCustomElementTemplate.Content.cloneNode (TRUE));
  }

  // ...
});
`` `

So now, we use Shadow Dom and templates in custom elements to create an element that isolate this element scope and other elements and isolate the HTML structure and JavaScript logic perfectly.

## style

Well, we explained HTML and JavaScript, and now there are CSS. Obviously, it is necessary to stylish elements. Developers can add styles to Shadow Dom, but how do users style elements from the outside? The answer is simple -just write styles like ordinary built -in elements.

`` `
my-custom-element {
  border-radius: 5px;
  width: 30%;
  height: 50%;
  // ...
}
`` `

Please note that the external definition style is higher than the internal definition of the element, and the external style will cover the style defined in the element.

Developers need to understand that sometimes page rendering, and then they will find unsatisfactory content flickering at some moment. Developers can use some animation transition effects by defining the style and when the elements start displaying for the unarmed component. Use: DEFINED selector to achieve this effect.

`` `
my-button: not (: defined) {{
  height: 20px;
  width: 50px;
  opacity: 0;
}
`` `

###

The HTML specification is very flexible and allows developers to declare the label at will. If it is not recognized by the browser, it will be parsed as the `htmlunknownelement`.

`` `
varing = document.createelement ('thiselementisunknown');

If (Element Instanceof HTMLUNKNOWNELEMENT) {
  console.log ('The Selected Element is unknown');
}
`` `

But this is not suitable for custom elements. Remember the special naming rules when discussing the definition of custom elements? The reason is that when the browser finds that a custom element name is valid, the browser will analyze it as the `htmlelement`, and then the browser will see it as an unfarmable custom element.

`` `
varing = document.createElement ('this-Element-IS-Undefined');

If (Element Instanceof Htmlelement) {
  console.log ('The Selected Element Is Undefined But Not Unknown');
}
`` `

In appearance, HTMLELEMENT and HTMLUNKNOWNELEMENT may not be different, but you need to pay attention to other places. The parser will treat these two elements differentiation. Elements with valid custom names will be regarded as a custom element implementation. The custom element will be regarded as an empty DIV element before defining details. And an unabated element does not achieve any method or attributes of any built -in elements.

## Browser compatibility

The first edition of Custom Elements was introduced in Chrome 36+. Known as a custom element interface V0, although it is still available, it has been abandoned and considered a bad implementation. If you want to learn the V0 version, you can read this [article] (https://www.html5rocks.com/en/tutorials/webcomponents/customElements/). From Chrome 54 and Safari 10.1 (although only some support), the custom element interface V1 began, Microsoft Edge is still in its prototype design stage and Mozilla has supported from V50, but the default does not support explicitly enabled. Only webkit browsers are fully supported. However, as mentioned above, it can be compatible with all browsers including IE11.

## detection availability

By check whether the `CustomLements` property in the` Window` object can be used to check whether the browser supports custom elements.

`` `
const supportScustomElements = 'CustomElements' in Window;

If (SUPPORTSCUSTELEMENTS) {
  // You can use a custom element interface
}
`` `

Otherwise, you need to use a compatible library:

`` `
function loadScript(src) {
  return new Promise(function(resolve, reject) {
    const script = document.createElement('script');

    script.src = src;
    script.onload = resolve;
    script.onerror = reject;

    document.head.appendChild(script);
  });
}// lazy load the polyfill if necessary.
If (SUPPORTSCUSTELEMENTS) {
  // Browser native support custom elements
} else {
  loadscript ('path/to/confments.mins.im'). then (_ => {{ild
    // Load custom elements compatible
  });
}
`` `

In short, the custom elements in the webpage component standard provide the developer with the following functions:

* Integrate JavaScript and CSS style into a single HTML element
* Allow developers to expand existing HTML elements (built -in and other custom elements)
* No support from other libraries or frameworks. Just need native JavaScript, HTML and CSS, and optional compatible libraries to support the old browser.
* You can seamlessly connect with other web components (Shadow Dom, template, slot, etc.).
* Deeply integrated in the browser developer tool.
* Use the existing access function

In short, the technologies that custom elements and developers have used have been used. It is just another way to make the development of the webpage program more convenient. Therefore, it makes it possible to build a very complicated program faster.

Reference materials:

* <https://developers.google.com/web/fundamentals/web-components/customelements>
* <https://www.html5rocks.com/en/tutorials/webcomponents/customelements/>
* <https://github.com/w3c/webcomponents/>
```
