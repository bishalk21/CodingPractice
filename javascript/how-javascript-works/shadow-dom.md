# SHADOW DOM internal structure and how to build independent components

> For the original text, please refer to [here] (https://blog.sessionStack.com/how-javascript-works- internals-shadow-how-based-setain-components-244331c4de6e) There is a deletion. This article uses [Knowledge Sharing Copy 4.0 International License Agreement] (http://creativecommons.org/licenses/by/4.0/) sharing, by [trues:/github.com/troland).

** This is the seventeenth chapter of JavaScript's working principle. **

! [] (https://user- Images.githubuserContent.com/1475173/52962049-40d1fe80-33d7-11E9-84dd-089B1565.png)

## Overview

The webpage component refers to allowing developers to use a series of different technologies to create reused custom elements. The functions in the component do not affect other code so that developers can be used in the web program.

There are four web components standard:

- Shadow domom
- HTML template
- Customized element
- Html imports

This chapter mainly discusses ** Shadow Dom **.

Shadow Dom is a tool designed to build a web program based on components (building blocks). It provides solutions for developers may have encountered problems:

**\* isolation DOM **: The DOM of the component is independent (such as `document.queeryselector ()` `Feng F element nodes under the component shadow dom). In this way, the CSS selector in the web program can be simplified, because the DOM component does not affect each other, so that developers can allow developers to use more common ID/class naming without worrying about naming conflicts.
**\* Local style **: The styles defined in Shadow Dom do not pollute elements other than Shadow DOM. Style style rules will not leak and page styles will not pollute the element style in Shadow Dom.
**\* Combination **: Design a statement for developers' components, label -based interfaces.

## Shadow Dom

This article assumes that developers have been familiar with DOM and its APIs. Otherwise, you can read [Detailed Information] (https://developper.mozilla.org/en-s/docs/Web/api/docuct_object_introduction).

Compared with ordinary DOM elements, there are two different places in Shadow DOM:

- Compared with the general creation and use of the DOM, how developers create and use shadow dom and are associated with other elements on the page
- The relationship between its display form and other elements on the page

Under normal circumstances, developers create the DOM node and then mount them as sub -element to other elements. For Shadow DOM, developers create an independent DOM tree mount under the target element, and the elements are separated from its actual descendants. The independent tree tree is called ** shadow tree **. The mount elements of the shadow tree are called ** shadow host **. All labels created under the shadow tree, including ``STYLE>`, only act in the host element. This is how Shadow DOM realizes the principle of local style of CSS.

## Create Shadow DOM

A ** shadow root ** is a document fragments mounted under the element of the "host". The shadow root means that the host element contains Shadow DOM. Call the method of `Element.attachshadow ()` to create shadow dom for elements:

`` `
var header = document.createelement ('header');
var ShadowRoot = Header.attachshadow ({Mode: 'Open'});
var paradraphelement = document.createelement ('p');

paragraphelement.innertext = 'Shadow Dom';
shadowRoot.appendchild (paragraphelement);
`` `

[Specification] (http://w3c.github.io/webcomponents/spec/shadow/#h-methods) defines the list of elements that cannot create shadow trees.

## Shadow Dom Combination Function

The combination element is one of the most important functions of Shadow DOM.

When writing HTML, the combined element builds a web program. Developer combinations and nesting such as `<div>`, <header> `,` <FORM> `and other different construction modules to build the interface required for web programs. Some of them can even be compatible with each other.

The element combination defines why, such as `<select>`, <FORM> `,` <video> `, and other elements are flexible and accepting specific HTML elements as sub -elements for special treatment of these elements.

For example, `<select>` Elements know how to render the `Option>` element into a drop -down box component with a predetermined option.

Shadow Dom introduces the following features that can be used to combine elements.

## Light DOM

This is the writing mark of the component. The DOM exists from the shadow dom of the component. It is the actual sub -element of the element. Suppose developers create a custom component called `<Better-Button>`, expand the native Button tag and want to add a picture and some text inside the component. Probably as follows:

`` ` <EXTENDED-BUTTON> <!-Image and SPAN is the Light Dom of the Extended Button-> <img src = "boot.png" slot = "Image"> <span> launch </span> </extended-button> `` `

"Extended Button" is the developer's custom component, and the HTML of them is Light DOM and is added by users using components.

The Shadow Dom here is the component created by the developer ("Extended Button"). SHADOW DOM is only inside the component and defines its internal structure in it, and the local style and packaging of components to implement details.

## Flat DOM tree

The result of the browser distributed Light DOM is that the HTML content created by the user inside Shadow DOM, these HTML content constitute the structure of a custom component, rendering the final product interface. The flat tree is the final rendering result of the developer in the developer tool and the final rendering of the page.

`` `
<EXTENDED-BUTTON>
#shadow-root

  <Style> ... </style>
  <slot name = "Image">
    <img src = "boot.png" slot = "Image">
  </slot>
  <span ID = "Container">
    <slot>
      <span> launch </span>
    </slot>
  </span>
</extended-button>
`` `

## template

When the developer has to reuse the same tag structure on the webpage, it is best to use some template instead of repeating the same page structure. It can be achieved before, but now you can use <TEMPLE> (Modern browsers are compatible) elements to easily implement this function. This element and its content will not be rendered in the DOM, but JavaScript can be used to quote the content.

Look at a simple example:

`` `
<template ID = "My-Paragraph">

  <p> Paragraph Content. </P>
</template>
`` `

The above content will not be rendered in the page, unless JavaScript is used to quote the content, and then use the following code to mount it into the DOM:

`` ` var template = document.GetelementByid ('My-Paragraph'); var TemplateContent = Template.Content; document.body.appendchild (templateContent); `` `

So far, other technologies can be used to achieve similar functions, but as mentioned earlier, try to use native functions to achieve cooler. In addition, compatibility is pretty good.

! [] (https://user- Images.githubuserContent.com/1475173/52962058-44658580-33d7-11E9-8206-5B897A021540.png)

The template itself is very easy to use, but it will be better if it is used with custom elements. We will introduce custom elements in another article. At present, developers only need to understand the CustomElement interface to allow developers to customize the rendering of tag content.

Let us define a web component using a template as its shadow dom rendering content. And call it `<my-pairagraph>:`

`` `
CUSTOMELEMENTS.Define ('My-Paragraph',
Class Extends htmlelement {
constructor () {
Super ();

     Let template = document.GetelementByid ('My-Paragraph');
     Let templateContent = Template.Content;
     const shadowRoot = this.attachshadow ({mode: 'open'}). Appendchild (templateContent.clonEnde (true));

}
});
`` `

It should be noted here to use [node.clonenode ()] (https://developer.mozilla.org/en-s/docs/web/api/node/clonennet) to copy the content of the template to the shadow root.

In addition, because the contents of the template are mounted to the shadow domom, developers can use the `<STYLE>` `` elements in the template to contain some style information, which will be encapsulated into the custom element. If the template is mounted directly to the standard DOM, it does not work.

For example, the content of the template can be changed as follows:

`` `
<template ID = "My-Paragraph">

  <Style>
    p {
      color: white;
      background-color: #666;
      padding: 5px;
    }
  </style>
  <p> Paragraph Content. </P>
</template>
`` `

You can use the custom component created by the template just using the template as follows:

`<my-payraph> </my-pairagraph>` ``

## slot

There are some shortcomings of the template. The main disadvantage is that static content does not allow developers to render custom variables or data like ordinary standard HTML templates.

At this time, `<Slot>` came in handy.

The slot can be regarded as the function of allowing developers to place custom HTML in the template. In this way, developers can create generic HTML templates and define rendering content by introducing slots.

Let's take a look at the code for the above templates to add a slot as follows:

`` `
<template ID = "My-Paragraph">

  <p>
    <slot name = "My-Text"> Default Text </Slot>
  </p>
</template>
`` `

If the element is not defined in the mark, or the browser does not support the slot, the browser does not support the slot, then `<my-Paragraph>` will only contain the default "default text" content.

If you want to define the content of the slot, the developer must define the element of the element of the element in the `MY-PARAGRAPH>` `Slot] (https://developer.mozilla.org/en/docs/web/global_attributes #Attr-Slot) The attribute value is consistent with the corresponding filling slot name.

As mentioned earlier, developers can write slot content casually:

`` ` <my-payraph> <span slot = "my-text"> Let's have some different text! </span> </My-Paragraph> `` `

All elements that can be inserted into the slot are called [inserted elements] (https://developer.mozilla.org/en-s/docs/web/api/slotable); Essence

Note that the `span>` `element inserted in the above example is the slot element. It has a `slot` attribute, the attribute value and the name of the slot definition in the template are equal.

After the browser rendering, the above code will create the following flat DOM tree:

`` `
<my-payraph>
#shadow-root

  <p>
    <slot name = "My-Text">
      Default text
    </slot>
  </p>
  <span slot = "my-text"> Let's have some different text! </span>
</My-Paragraph>
`` `

** There are errors and changes here. **

Note `#shadow-root` Elements just indicate the existence of Shadow DOM.

## Style

It can be styled on the homepage surface. It can define the component style or provides [css custom attributes] (https://developer.mozilla.org/en-us/web/coming_css_variables) The user covers the default style value.

### Component definition style

** Local style ** is one of the excellent features of Shadow Dom:

- The CSS selector on the homepage does not affect the style of the element of the component.
- The style defined in the component does not affect other elements on the page. They only act on host elements.

The CSS selector in Shadow Dom only affects the elements inside the component. In fact, this means that developers can reuse the universal ID/class name without worrying about conflicting with other styles on the homepage. Simple CSS selectors can improve page performance.

Let's take a look at some of the styles defined in #Shadow-Root:

`` `
#shadow-root

<Style>
  #Container {
    background: white;
  }
  #Container-designms {
    display: Inline-Flex;
  }
</style>

<div ID = "Container"> </DIV>
<div ID = "Container-ITEMS"> </DIV>
`` `

The styles in the above example will only act in the #Shadow-Root.

Developers can also use <link> elements to introduce style tables in #Shadow-Root, which only acts in #Shadow-Root.

##: host pseudo

`: Host` Pseudo -allow developers to choose and style the host element that contains shadow trees:

`` `

<Style>
  : host {
    Display: Block; / * By default, the custom element is the inner association element * /
  }
</style>

`` `

There is only one place that needs to be noted that the priority of the host element style defined on the homepage is higher than that of the element: the host style rules are higher. This allows developers to cover the top style defined by the component from the outside.

That is, the following style is defined on the homepage:

`` `
My-Paragraph {
marbin-bottom: 40px;
}

<template ID = "My-Paragraph">
<Style>
: host {
      Margin-BOTTOM: 30px;/ * will not work, because it will be covered by the style defined by the previous parent page */
}
</style>
  <p>
    <slot name = "My-Text"> Default Text </Slot>
  </p>
</template>
`` `

In the same way, `: Host` only works in the context of the shadow root, so developers cannot be used outside Shadow Dom.

`: Host (<selector>)` `Functional styles allow developers to be stylized only to match the host elements of` <selector> `. This is an excellent way. Developers can encapsulate the application household interaction or status behavior inside the component, and then style internal nodes based on host elements.

`` `

<Style>
  : host {
    opacity: 0.4;
  }
  
  : host (: hover) {
    opacity: 1;
  }
  
  : Host ([Disabled]) { / * host element has the style of Disabled property. * /
    background: GREY;
    pointer-events: None;
    opacity: 0.4;
  }
  
  : host (.pink)> #Tabs {
    color: pink; / * When the host element contains the PINK class tab style. * /
  }
</style>

`` `

## use: host-context (<selector>) pseudo-category to customize element style

`: Host-Context (<selector>)` `Form the pseudo-class finds the host element of the host.

Commonly used for customization. For example, developers are customized by adding classes for `<html>` or `<body>` `

`` `

<body class = "lightheme">
  <custom-Container>
  Mowing
  </Custom-CONTAINER>
</body>
`` `

or

`` ` <custom-Container class = "LightHeme"> Mowing </Custom-CONTAINER> `` `

When the ancestral element of the host element contains the. LightHeme class `: host-context (. LightHeme)` will be stylized `<fancy-tabs>`:

`` ` : Host-Context (. Lightheme) {{ color: black; background: white; } `` `

You can use the `: host-context ()` to customize the theme style, but a better way is to create a style hook by using CSS custom attributes.

## From the external style component host element

Developers can style component host elements by using label names as selectors from the outside, as follows:

`` ` CUSTOM-CONTAINER { color: red; } `` `

** The external style has a higher priority than the style defined in Shadow Dom. **

For example, suppose the user writes the following selector:

`` ` CUSTOM-CONTAINER { width: 500px; } `` `

The following component style rules will be covered:

`` ` : host { width: 300px; } `` `

The component itself can only do so much. But what if you want to style internal attributes? This requires CSS custom attributes.

## Use CSS custom attributes to create style hooks

If the author of the component uses CSS custom attributes to provide style hooks, the user can be used to change the internal style.

This is similar to `Slot>` `I just applied to the style.

Let's see the following example:

`` `
<!-Homepage->

<Style>
  CUSTOM-CONTAINER {
    margin-bottom: 60px;
    --Custom-Container-BG: Black;
  }
</style>

<custom-Container Background>… </Custom-Container>
`` `

Shadow Dom Internal:

`` ` : host ([background]) { background: var (-Custom-Container-BG, #cecece); border-radius: 10px; padding: 10px; } `` `

In this example, because the user provides the background color value, the component will use black as the background color value. Otherwise, the default is `#CECECE`.

As a component author, developers need to know the CSS custom attributes that can be used. Custom attributes can be regarded as public interfaces of components.

## slot javascript interface

Shadow Dom API provides programs that can be used to operate slots.

## Slotchange event

When the distribution element node of a slot changes, the slotchange event is triggered. For example, when users add/delete sub -nodes from Light DOM.

`` ` var slot = this.shadowroot.queeryselector ('#some_slot'); slot.addeventListener ('Slotchange', Function (E) { console.log ('Light Dom Change'); }); `` `

You can create a modification event of Light DOM's other types of Light DOM in the constructing function of the element. In the previous article, the internal structure and usage guidelines of MutationObServer introduced (https://blog.sessionStack.com/how-javascript-tracking-changes-dom- user-86adc7446401).

## AssiGNEDNODES () Method

It is useful to understand which elements are associated with slots. Calling `slot.assignednodes ()` can find out which elements are rendered by slots. `{Flatten: TRUE}` Options will return the default content of the slot (if no node is distributed).

Take a look at the following example:

`<Slot name = 'Slot1'> <p> Default Content </p> </Slot>`

Suppose the above content is included in a component called `MY-Container>`.

Let's check the different usage of the component, and then call the `assignednodes ()` to output different results:

In the first case, we will add content to the slot:

`` ` <my-Container> <span slot = "slot1"> Container text </span> </My-Container> `` `

Calling `assignedNodes ()` will return to [<span slot = "slot1"> Container text </span>]. Note that the result is an array of nodes.

In the second case, the content will not be added:

`<my-Container> </My-Container>`

Calling `assignedNode ()` will return the empty array `[]`.

However, assuming adding `{Flatten: True}` Parameters will return the default content: `[<p> Default Content </p>].

In the same way, in order to find the elements in the slot, developers can call `assignednodes ()` to find out which component slot is mounted in the element.

## event model

The incident in Shadow Dom is worth noting.

The event goal is adjusted to maintain the closure of Shadow Dom. When the incident is re -positioned, it seems to be generated by the component itself rather than the internal element of Shadow Dom as part of the component.

Here is a list of events that spread Shadow DOM (there are also some that can only be spread in Shadow Dom):

**\* Focus event **: Blur, Focus, Focusin, Focusout
**\* mouse event **: click, dblclick, mousedown, mousenter, mousemove, etc.
**\* Rolling Wheel Event **: WHEEL
**\* Enter event **: BeforeInput, input
**\* keyboard event **: Keydown, keyup
**\* Combination event **: CompositionStart, CompositionupDate, CompositionEND
**\* Drag and Dating Event **: Dragstart, DRAG, DRAGEND, Drop, etc.

## Custom event

By default, the custom event will not spread Shadow DOM. If a developer wants to distribute a custom event and wants to spread Shadow DOM, you need to add `Bubbles: True` and` Composed: True` option parameters.

Let's take a look at the event distribution like this:

`` ` var container = this.shadowroot.queryselector ('#Container'); container.dispatchevent (new event ('containerchanged', {bubbles: true, composed: true})););); `` `

## Browser compatibility situation

You can check whether you support the Shadow DOM function by checking the AttachShadow:

`` ` const supportsshadowdomv1 = !! htmlelement.prototype.attachshadow; `` `

! [] (https://user-images.githubusercontent.com/1475173/52962053-4334580-33d7-11E9-9FCD-7199DA3B03CA.PNG)

Reference materials:

- https://developer.mozilla.org/en-s/docs/web/componits/usion_shadow_dom
- https://developeers.google.com/web/fundamentals/web- components/shadowdom
- https://developer.mozilla.org/en-s/docs/web/componits/usion_templates_and_slots
- https://www.html5rocks.com/en/tutorials/webcomponents/shadowdom-201/#toc-style-host
