# Tips for rendering engines and performance optimization

> For the original text, please refer to [here] (https://blog.sessionStack.com/how-javascript- works- rendering-anndine-tips-optimize-iTS-7B95553baeda), which is slightly deleted. This article uses [Knowledge Sharing Copy 4.0 International License Agreement] (http://creativecommons.org/licenses/by/4.0/) sharing, by [trues://github.com/troland).

** This is Chapter 11 of JavaScript's working principle. **

So far, the previous JavaScript working principles series of articles are concentrated in the function of focusing on JavaScript language itself, how to optimize the execution process in the browser, and so on.

However, when building a network application, it is not just a JavaScript code that can run alone. The JavaScript code written is closely related to the operating environment. Understanding the running environment of JavaScript, its operating principles and composition will allow you to build a better application and once the application runs in various environments, making you more likely to deal with potential problems.

! [] (https://user- Images.githubuserContent.com/1475173/41496898-b37e0F3C-717C-11E8-9905-AE2D2839A.png)

So, let's explore the main components of the browser:

**\* User interface: ** includes address bar, back and forward button, bookmark menu, and so on. In essence, it contains every part of the browser outside the web window that the user sees.
**\* Browser engine: ** Treatment of the interaction between the user interface and the rendering engine
**\* rendering engine: ** Responsible for displaying web pages. The rendering engine parsing HTML and CSS and displaying the analysis on the screen.
**\* Network: ** Network calls such as XHR requests such as XHR requests using different implementation of various platforms. These network calls are implemented based on cross -platform interfaces.
**\* UI back end: ** is responsible for drawing core components such as check boxes and windows. It exposes a platform that has nothing to do with a platform. The UI method of the operating system is used at the bottom.
** Javascript engine **: We have introduced it in detail in the previous series [articles://github.com/troland/how-javascript-works/blob/master/v8.md). Basically, this is where the JavaScript code is performed.
**\* Data storage: ** Network applications may require all data to store all data. The types of supporting mechanisms include [LocalStorage] (https://developer.mozilla.org/en-s/Docs/web/api/window/localstorage). -US/DOCS/Web/api/IndexedDB_API), [websql] (https://en.wikipedia.org/wiki/web_sql_dataBase) and [filesystem] (https://developer.mozilla.org/docS /Web/api/filesystem).

This article will focus on the rendering engine because it is used to process the analysis and visualization of HTML and CSS, and these are most of the JavaScript applications that need to be continuously interacting.

## rendering engine overview

The main responsibility of the rendering engine is to display the request page on the browser screen.

The rendering engine can display HTML, XML documents and pictures. If you use additional plugins, you can display different types of documents such as PDF.

## rendering engine

Similar to the JavaScript engine, different browsers also use different rendering engines. The following is a more popular engine:

** Gecko ** -Firefox
**\* webkit ** -Safari
**\* blink ** -chrome, opera (starting from version 15)

## rendering process

The rendering engine obtains the request document content from the network layer.

! [] (https://user-images.githubusercontent.com/1475173/41500213-28CB163E-71C0-18-98-0b28d7760A44.png))

##

The first step of the rendering engine is the actual [DOM] (https://developer.mozilla.org/docs/docume/docuctroduction) node on the actual analysis of the HTML document and the conversion analysis. Essence

Assuming the following text input box:

`` `

<html>
  <head>
    <meta charset = "utf-8">
    <link rel = "styleSheet" type = "text/css" href = "theme.css">
  </head>
  <body>
    <p> Hello, <span> Friend! </span> </p>
    <div>
      <img src = "smiley.gif" alt = "smiley face" height = "42" width = "42">
    </div>
  </body>
</html>
`` `

The DOM tree of html looks like this:

! [] (https://user- Images.githubuserContent.com/1475173/41500209-27148924-71C0-18-99a3-b413FC987442.png)

Basically, each element contains several elements. Then push in order.

## CSSOM tree

Cssom is ** css object model **. When the browser builds the DOM tree, it encounters a LINK label that references the `Head` tag part to reference the external` theme.css` style table. It is hoped that it may need a style table to render the page, so it immediately dispatches a request to get the style table. Suppose the following is the content of the file of `Theme.css`:

`` `
body {
font-size: 16px;
}

p {
FONT-Weight: Bold;
}

span {
color: red;
}

p span {
display: none;
}

img {
Float: Right;
}
`` `

Like HTML, the rendering engine needs to transform the CSS into what the browser can operate -that is, CSSOM. The following is the approximate appearance of CSSOM:

! [] (https://user- Images.githubusercontent.com/1475173/41500210-2774EC9C-71C0-18-90ed-9D7BEC6D30DC.PNG))

Want to know why CSSOM is tree -like structure? When calculating the final style set for any object on the page, the browser first applies the most common style rules to the node (for example, it is the body's sub -node, and it will be applied to all the styles of Body) and then applied through the application of Body) and then applied through the application of Body). More specific style rules are used to recurs the styles of definition calculations.

Let's see the specific examples. Any text style in the `span` tag in` body` is 16 pixel size and red font color. These styles inherit from the `body` elements. The sub -element of the `p` element` SPAN` will not display its content (`Display: None`) because it is applied to a more specific style.

Also, please note that the above CSSOM tree is not complete and only shows the rewriting style specified in the style table. Each browser provides a default style, "User Agent Style" -the default display style when it does not explicitly provide any style. Our style simply rewritten these default styles.

## Build a rendering tree

The visual instructions in HTML combine the style data of the CSSOM tree to create a rendering tree.

What are you might be to ask for the rendering tree? It is a tree that constructs visualized elements in order and is displayed on the screen. It has the corresponding style of HTML visual performance. The tree aims to draw the content in the correct order.

Each node in the tree in the webkit is a renderer or rendering object.

The following is the approximate appearance of the rendering tree co -authored by the above DOM and CSSOM tree:

! [] (https://user- Images.githubuserContent.com/1475173/41500212-286AACD6-71C0-18-808C-AA2dd859bb51.png)

In order to create a rendering tree, the browser has done a few things:

- Starting from the root node of the DOM tree, you traverse each visible node. Some nodes are not visible (for example, Script tags, meta tags, etc.), and then ignore, because they are not displayed in the rendering result. Some nodes are hidden by style and then ignored. For example, the SPAN node in the above example, because it is explicitly set up the style of `Display: None`.
- The browser is the corresponding CSSOM rule for each visible node application and apply these style rules.
- Release the visible node containing content and its calculated styles.

You can browse the source code of renderObject (in webkit): <https://github.com/webkit/webkit/blob/e46b1f8ddde4b2006aaf7e5a0984bcore/mendering/rendering/rendering

Take a look at some of the core components of this class:

`` `
Class RenderObject: Public CacheDimageClient {
// Re -paint the entire object. Call when the border color is changed or the border style is changed.

Node\* node () const {...}

RendersStyle\* style; // Calculated style
const rendersStyle & style () const;

Em
}
`` `

Each rendering object represents a rectangular area usually corresponds to the CSS box model of a node. It includes geometric information such as width, height, and positioning.

## Rendering tree layout

When the renderer was created and added to the rendering tree, it did not have a positioning and size information. Calculating these values ​​is called layout.

HTML uses a streaming layout model, which means that in most cases, the geometric location information of the rendereer can be calculated at one time. The coordinate system is relative to the root renderer. Use TOP and LEFT coordinates here.

The layout is a recursive process -it starts from the root rendering device, and the root rendereer is the `html` element of the HTML document. The layout continues to be recursive through part or or the entire renderer hierarchical structure to provide information for each renderer that needs to calculate the geometric information.

The positioning of the root rendering is `0,0` and the size of the visual part of the browser window (such as ViewPort).

The process of layout is to calculate the accurate location of each node on the screen.

## Draw a rendering tree

At this stage, it traverses the rendering tree and then calls the `Paint () method of the renderer to display its content on the screen.

Drawing can be a global or incremental type (similar to the layout):

**\* Global ** -Reduce the entire tree.
\*\*只 -Froming only some renderers will not affect the entire tree to some extent. The rectangle is invalidated on the screen. This will cause the operating system to see it as a area that needs to be re -painted and generate an `Paint` event. The operating system will intelligently combine several areas into one to improve the rendering performance.

In short, it is important to understand and draw a gradual process. For a better interactive experience, the rendering engine will try to display the content on the screen as soon as possible. It does not wait for all HTML parsing to complete before starting to build and layout rendering trees. It will first analyze and display some of the content, and continue to handle the remaining content items received from the network at the same time.

## Script and style processing order

When the parser encounters the `Script>` tag, it will immediately analyze and execute the code in the tag. The analysis of the entire document stops until the script is executed. It means that the process is synchronized.

_When Script quotes an external resource, you must first obtain the resource (also synchronized). All analysis will stop until the script resource is obtained. _

HTML5 adds an option to load the resource asynchronous, so that another thread can be used to analyze and execute the resource. IE can use the `Defer` attribute, others can use Async attributes. Use the DEFER attribute below IE10, and the Async attribute can also be used above IE10.

There is a place where you need to pay attention, that is, the support of the Defer below IE10, open https://caniuse.com to find to find that the support for IE10 below is Start running, see [here] (https://bugzilla.mozilla.org/show_bug.cgi?id=688580), there will be no trials here. If you are interested COM/Internet-Explorer-Testing) test under IE.

A little extension here, in the jQuery source code, ready.js has a paragraph of code:

`` `
// Catch cases where $ (docume). READY () is Called
// after the browser event has alream occurred.
// Support: IE <= 9-10 only
// Older IE Sometimes Signals "Interactive" Too Soon
if (document.readyState === "Complete" ||
(Document.readyState! == "Loading" &&! Document.documenetElement.doscroll) {) {

// handle it asynchronously to allow scripts the opportunity to delay ready
Window.settimeout (jQuery.ready);

} else {

// use the handy event callback
document.addeventListener ("DomContentLoaded", Completed);

// a fallback to window.onload, that will always work
Window.addeventListener ("load", complete); Completed);
}
`` `

The `Window.Settimeout (jQuery.ready);` is allowed to allow the script to have the opportunity to delay the execution of the Ready event. Probably prepared for the Defer attribute of the IE script tag?

## Optimized rendering performance

If you want to optimize the performance of network applications, you need to pay attention to five main aspects. You can control these aspects:

1. ** javascript ** -The previous article introduced the writing without blocking UI, efficient code, and so on. When it comes to rendering, you need to consider how the JavaScript code interacts with the DOM elements on the page. JavaScript will make a lot of changes on the interface, especially in a single page application.
2. ** Style calculation ** -This process is the application of the style to the element of the matching selector. Once the style rules are defined, they will be applied to the corresponding elements and then calculate the final style of each element.
3. ** layout ** -Once the browser understands the style of element applications, it will start calculating the space occupied by the element and its display position on the browser screen. According to the definition of the layout model of the webpage, the layout of the element can affect other elements. For example, the width of the label of `<body>` will affect the width of its descendants and grandchildren. This means that the layout process is quite time -consuming. The drawing is completed on multiple layers.
4. ** Draw ** -The actual pixels at this stage. This process includes the visible parts of all elements such as drawing text, color, pictures, borders, shadows and other elements.
5. ** Synthetic ** -Because the page part may be drawn into multiple layers, they must be drawn in the correct order, so that the page rendering will be normal. This is crucial, especially for those overlapping elements.

## Optimized JavaScript code

JavaScript often trigger visual changes on the browser. Especially in the process of building a SPA.

Here are some suggestions that optimize some code in JavaScript to improve the efficiency of rendering:

- Avoid using the `settimeout` or` setInterval` for visual changes. These will call the `callback` at a certain point in time, which may be at the end of the frame. This will cause stuttering. Visual changes must be triggered at the start of the frame.

- Time to move the time-consuming JavaScript into the [web work thread] (https://github.com/troland/how-javascript-works/blob/master/Worker.md).

- Use micro -tasks to process DOM changes across multiple frames. This is to prevent the situation that the network work thread cannot do when the task needs to be accessed.

  It is about to divide a large task into multiple small tasks and then perform it in the `RequestanimationFrame`,` settimeout` or `setInterval`.

## Optimization style

Modifying the DOM by adding and removing elements and changing attributes will cause the browser to re -calculate the layout of the element style and most of the cases in most cases.

Use the following methods to optimize rendering:

- Reduce the complexity of the selector. The complexity of the selector will occupy 50% of the computing element style, and the style itself will be constructed.
- The number of elements that must be calculated must be reduced. In essence, the style of a minority element is directly changed instead of the style of the entire page.

## Optimize the layout

Re -calculating the layout is very expensive. Consider the following optimization scheme:

- Reduce the number of layouts as much as possible. When changing the style, the browser check style changes need to be re -calculated. Generally speaking, changing attributes related to geometry such as Width, Height, LEFT, TOP, etc. will require layout. Therefore, avoid modifying them as much as possible.
- Use the `Flexbox` to lay the layout instead of the old -fashioned layout model. It will render faster and greatly improve the performance of network applications.
- Avoid compulsory synchronous layout. What needs to be remembered is that when running JavaScript, the old layout value of the previous frame is known and can be queried. When visiting `Box.offsetheight`, this does not cause performance problems. However, if you change its style before accessing it (such as adding style classes to elements), the browser will have to apply the style to change first and then calculate the layout style. This will be very time -consuming and resources, so try to avoid doing so.

## Optimized drawing

This is often the most time -consuming task, so try to avoid triggering drawing. Optimization:

- In addition to the attributes except Transfroms or OPACITY, the drawing will be triggered. So save some use.
- When a layout is triggered, it will also trigger drawing, because the geometric information of changing elements will change the display effect of the element.
- By promotional layers and animation arrangements, the drawing area is reduced.

## extension

参考谷歌官方关于性能的[文档](https://developers.google.com/web/fundamentals/performance/rendering/stick-to-compositor-only-properties-and-manage-layer-count#use_transform_and_opacity_changes_for_animations)，提升 The element uses the following code:

`` ` .moving-Element { Will-Change: Transform; } `` `

Use [FastDom] (https://github.com/wilsonPage/fastdom) to avoid mandatory synchronous layout and jitter.

In addition, for the optimization of JavaScript code, avoid processing some micro -optimization, such as the use of `Offsettop` with` GetboundingClientRect` faster, but this is based on the created network applications. Assuming the creation of a game is very If there are many places to call these methods, the improvement of performance will be considerable. I still remember that I used to use [jsperf] (https://jsperf.com/) to test the speed of a certain method. Do not drill the horns of the horns. energy.

For rendering, some skeleton maps can be used to enhance the user experience.

## some thoughts

- Regarding the performance experience, in fact, you can imagine it to make a house. If it is the entire renovation, it will be more time -consuming, but if you decorate a certain area, you will improve your performance.
- Then one of the attributes will improve the performance, which may be understood as "the work will be good for good things."
- The division of the task can be understood as the philosophy and tips for building design.

## reference resources

- <https://developers.google.com/web/fundamentals/performance/critical- rendering-path/constructing--bct-model>
- <https://developers.google.com/web/fundamentals/performance/redering/reduce--scope-and--style-calculations>
- <https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/#the_parsing_algorithm>
