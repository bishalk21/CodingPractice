# Use MutationObServer to monitor DOM changes

> For the original text, please refer to [here] (https://blog.sessionStack.com/how-javascript- works-manges-in-the-user-use-86adc7446401). Share Note 4.0 International License Agreement] (http://creativecommons.org/licenses/by/4.0/) Sharing, by [trues://github.com/troland).

** This is the tenth chapter of JavaScript's working principle. **

Network applications are becoming increasingly complicated on the client, which is caused by many factors. For example, a richer interface interaction requires more complicated application functions, real -time calculations, and so on.

The increasingly complicated network application has caused unknown to know the accurate interactive interface status specified in the life cycle.

If you are building some frameworks or a library, it will be more difficult, for example, you cannot respond and perform some specific operations by monitoring the DOM.

## Overview

[MutationObServer] (https://developper.mozilla.org/en-s/docs/web/api/mutationObServer) is a web interface provided by modern browsers to detect DOM changes. You can use this interface to monitor the newly added or deleted nodes, attribute changes, or the content of the text node.

What can I do?

You can handle the MutationObServer interface in the following situations. for example:

- Notify the user's current changes that happened.
- By using some great JavaScript frameworks to dynamically load the JavaScript module based on the changes of the DOM.
- Perhaps when you develop an editor, you use the MutationObServer interface to collect changes on any time point to easily achieve the cancellation/renewal function.

! [] (https://user-images.githubusercontent.com/1475173/41054347-b4ad6ECC-69F0-1CB-DFE18497B393.png)

This is just a few MutationsObserver's usage.

## How to use MutationObserver

It is quite simple to integrate MutationObserver in the application. By passing a function in the constructor `MutationObServer` as a parameter to initialize an MutationObServer instance that calls each time the DOM changes. The first parameter of the function of `MutationObServer's function is the collection of all DOM in a single batch processing. Each change contains the type of change and the changes that occur.

`` ` varature Mutations.Foreach (Function (Mutation) { console.log (Mutation); }); }); `` `

The created instance object has three methods:

- `Observe` -Start the monitoring DOM change. Receive two parameters -the DOM node to be observed and a configuration object.
- `disconnect` -stop monitoring changes.
- `takeRecords` -Trigger the latest batch DOM change before triggering the callback.

The following is the code fragment that starts to listen to:

`` ` // Start listening to the root element HTML changes. MutationObServer.obServe (Document.documentelement, { Attributes: true, Characterdata: true, Childlist: true, subtree: true, AttributeoldValue: true, True, CharacterdataoldValue: true }); `` `

Now, suppose you write a simple `div` element:

`` `

<div ID = "SAMPLE-DIV" class = "test"> Simple div </div>
`` `

You can use jQuery to remove the `class` attribute of DIV:

`` ` $ ("#SAMPLE-DIV"). Removeattr ("class"); `` `

When you call the `MutationObserver.obServe (...)` you can start monitoring DOM changes.

Every time the DOM changes occur, each [MutationRcord] (https://developer.mozilla.org/en-s/docs/web/api/mutationRecord):

! [] (https://user- Images.githubuserContent.com/1475173/41054356-da3c-69F0-11E8-9248-CF5171EFA6F0.png)

This change is caused by the removal of the `class` attribute.

Finally, if you want to stop monitoring DOM changes, you can use the following methods:

`` ` // MutationObServer stops monitoring DOM changes MutationObServer.disconnect (); `` `

Now, the compatibility of the browser `MutationObserver` browser is very good:

! [] (https://user- Images.githubusercontent.com/1475173/41054350-B5BEDB8E-69F0-18-9A134C469AECF.PNG)

## alternative method

However, it was not widely used before. So, when there is no `MutationObServer`, how does developers solve the monitoring DOM changes?

There are several ways of available methods:

**\* round -rotation **
** MutationEvents **
**\* css animation **

## rotation

The simplest and rough method is even inquiries. You can create a timing task with the built -in SetInterVal web interface with the browser to check whether the DOM changes. Of course, this method will significantly weaken the performance of network applications/websites.

In fact, this can be understood as dirty examination. If you have used AngularJS, you should have seen the performance problems caused by his dirty examination. After a slight introduction in another series of my series, you can view [here] (https://github.com/troland/writing-a-javascript-framework/wiki/4.%E6%95%B0%E6 %8d%AE%E7%BB%91%E5%AE%9A%E7%AE%80%E4%BB%8B).

## MutationEvents

As early as 2000, the [MutationEvents API] (https://developer.mozilla.org/en-s/docs/weide/events/mutation_Events) Although it is used very well, each single DOM change will trigger the Mutation event, and the results will cause performance problems. Now, the `MutationEvents` interface has been abandoned. In the near future, modern browsers will stop supporting the interface.

The following is the browser compatibility of `MutationEvents`:

! [] (https://user- Images.githubuserContent.com/1475173/41054352-b63B227A-69F0-18-8208-C009AB04B428.png)

## css animation

Relying on [CSS Animation] (https://developer.mozilla.org/en-s/docs/web/css_animations/usion_css_animations) is a little novel alternative. This sounds confusing. Generally speaking, the realization of ideas is like this. Create an animation. Once you add an element to the DOM, the animation will be triggered. When you start executing CSS animation, you will trigger the `AnimationStart` event: Assuming adding an event monitor to the event, you can accurately know the timing of adding elements in the DOM. The operating time cycle of the animation must be very short, which almost makes users feel that it is better, that is, the experience is better.

First of all, a parent -level element is needed to add an event in the monitoring node:

`` `

<div ID = "Container-Element"> </div>
`` `

In order to handle the addition of nodes, the key frame sequence animation needs to be created. The animation starts when adding nodes:

`` ` @Keyframes nodeinserted { From {OPACITY: 0.99;} to {OPACITY: 1;} } `` `

After creating key frames, animation is applied on the elements that need to be listened. Notice that short duration-the traces of animation on the browser will be very smooth (that is, the user will not feel the animation occurs):

`` ` #Container-Element * { animation-duration: 0.001s; animation-name: nodeinserted; } `` `

This will add animation to all offspring nodes of `Container-Element`. When the animation is over, the INSERTION event is triggered.

We need to create a function as an event monitor. Inside the function, you must use the `event.animationName` code to check to ensure that it is the animation that we monitor.

`` ` var INSERTIONLISTENER = Function (Event) { // Make sure it is an animation that is monitored if (event.animationName === "nodeinserted") {{ console.log ("Node Has Been Inserted:" + Event.target); } } `` `

Binding event listeners for parent elements:

`` ` document.addeventListener ("AnimationStart", InsertionListener, FALSE); // Standard + Firefox document.addeventListener ("msanimationStart", insertionListener, false); // IE document.addeventListener ("WebkitanimationStart", InsertionListener, FALSE); // Chrome + Safari `` `

** The incident commission is used here. **

CSS animation browser support:

! [] (https://user-images.githubusercontent.com/1475173/41054354-b696-69F0-11E8-8782-051C474BCF54.png)

Compared with the above alternatives, there are several advantages. In essence, it monitors each change and better performance that the DOM may occur, because it will trigger the callback event after the batch DOM changes. In short, the compatibility of the `MutationObserver` is very good, and there are some pads. These pads use the bottom layer of` MutationEvents`.
