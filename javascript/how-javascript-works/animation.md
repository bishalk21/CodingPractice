# CSS and JS animation underlying principles and how to optimize their performance

> Please check the original text [here](https://blog.sessionstack.com/how-javascript-works-under-the-hood-of-css-and-js-animations-how-to-optimize-their-performance-db0e79586216)，本文采用[知识共享署名 4.0 国际许可协议](http://creativecommons.org/licenses/by/4.0/)共享，BY [Troland](https://github.com/Troland)。
> ** This is the 13th chapter of JavaScript's working principle. **

## Overview

As you know, animation plays a key role in creating an exciting network application. As users pay more and more attention to user experience, companies are beginning to realize the importance of perfection and pleasant user experience. As a result, network applications have become more and more bloated and have more dynamic interaction functions. This requires the network application to provide more complex animations during the use of users to achieve a smooth state transition. Now, this is common. Users are becoming more and more discerning, and their default permits can experience high response capabilities and good interactive user interfaces.

However, it is not necessary to make the interface mask the animation effect. What kind of animation, the timing of animation, and what kind of animation effects are complicated.

## javascript and CSS animation comparison

JavaScript and CSS are two main ways to create web animation. Two types are not good, depending on the situation.

## css animation

Use CSS animation is the easiest way to move elements on the screen.

We will start with how to let elements move on the X and X migrants 50 pixels as small examples. Mobilize elements by continuing 1 second of CSS transitions.

`` `
.box {
-webkit-transeform: Translate (0, 0);
-Webkit-transe: -webkit-transform 1000ms;

Transform: Translate (0, 0);
Transition: Transform 1000ms;
}

.Box.move {
-Webkit-Transform: Translate (50px, 50px);
Transform: Translate (50px, 50px);
}
`` `

When adding the `Move` class to the element, change the value of the` transform` and then develop the transition effect.

In addition to the transition duration, there is also a ** Easing ** parameter, which is mainly responsible for the animation experience. This parameter will be introduced in detail later.

If the above code fragment can be created to create a separate style class to operate the animation, then JavaScript can also be used to switch each animation.

The following elements:

`` `

<div class = "box">
  Sample content.
</div>
`` `

Then use JavaScript to switch each animation.

`` `
var Boxelements = document.GetelementsByClassName ('Box'),
boxelementSlength = Boxelements.length,
i;

for (i = 0; I <boxelementslength; i ++) {
boxelements [i] .classlist.add ('move');
}
`` `

The above code fragment adds the `Move` class to each element containing the` Box` class to touch the animation.

This can provide a good balance for your network applications. You can focus on the use of JavaScript to operate the application state, and then only set the appropriate class for the target element to let the browser handle the animation. If you choose to deal with it, you can monitor the `Transitionnd` event of the element, but you must give up the support of the old version of the IE.
![](https://user-images.githubusercontent.com/1475173/42127232-1d296300-7cc7-11e8-8842-e9a7b92eb183.png)
As follows, listen to the `Transitioned` event, the incident will be triggered at the end of the animation.

`` `
var Boxelement = Document.quryselector ('. Box'); // Get the first element that contains BOX class
Boxelement.addeventListener ('TransitionEND', OntransitationND, FALSE);

function onTransitationND () {
// handle the transition finish.
}
`` `

In addition to using CSS transitions, you can also use CSS animation. CSS animation allows you to better control the separate animation key frames, duration and cycle times.

> Key frames are used to notify the browser the CSS attribute value at the specified time point, and then fill the blank.

Look at an example:

`` `
/\*\*

- This example is a streamlined version without browser prefix. In addition, it will be more accurate in the future.
- _/
  .box {
  / _ Select the animation name \*/
  animation-name: movingbox;

  / _ Animation time _/
  animation-duration: 2300ms;

  / _ The number of animation cycles _/
  animation-intervice-count: infinite;

  / _ Reverse the animation direction during each strange cycle _/
  animation-direction: Alternate;
  }

@Keyframes MovingBox {
0% {{
Transform: Translate (0, 0);
opacity: 0.4;
}

25% {{
opacity: 0.9;
}

50% {{
Transform: Translate (150px, 200px);
opacity: 0.2;
}

100% {{
Transform: Translate (40px, 30px);
opacity: 0.8;
}
}
`` `

Example -<https://sessionStack.github.io/blog/demos/keyframes/>

By using the CSS animation definition of the animation independent of the target element itself, and then set the Animation-name property of the element to use the desired animation effect.

The CSS animation still needs to be added with a browser prefix, adding `-webkit -` prefixes on Safari, Safari mobile browser and Android. Chrome, Opera, Internet Explorer, and Firefox all do not need to add prefixes. There are many tools that can be used to create a style containing any prefix, so that the style prefix is ​​not required in the source file.

** You can use autoprefixer or cssnext to add prefixes to the style. **

## javascript animation

Compared with CSS transitions or CSS animations, it is more complicated to use JavaScript to create animation, but in general, it will provide developers with eye -catching and powerful functions.

Under normal circumstances, the inner joint JavaScript animation can be used as part of the code. They can also be encapsulated in other objects. The following is the JavaScript code described before the reappearance: the CSS transition:

`` ` var Boxelement = DOCUMENT.QUERYSELECTOR ('. Box'); var animation = boxelement.animate ([[[[[[[[[[[[[[[[[[[[[[[[[[[[ {transform: 'translate (0)'}, {transform: 'translate (150px, 200px)'} ], 500); animation.addeventListener ('Finish', Function () { boxelement.style.transform = 'translate (150px, 200px)'; }); `` `

By default, web animation only modified the display effect of the element. If you want to keep the element at the specified movement position, then you must modify its underlying style at the end of the animation. This is why the above example listened to the `Finish` incident and then set the` box.style.transform` property as the `translate (150px, 200px)`. of.

By using JavaScript animation, developers can fully control the style of each element. This means that you can slow down, suspend, stop, or flip the animation to control the target element. Because the animation behavior can be encapsulated appropriately, it is particularly useful when building a complex, object -oriented application.

## Easing definition

Natural smooth movement will give network applications a better user interaction experience.

Under natural conditions, nothing can be moved from one point to another. In real life, the objects around us will accelerate or decelerate when moving, because we do not live in a vacuum state and have different factors to affect the operation of things. Human brain instinctively feels such movements, so when making animations for online application, it is good to use such knowledge.

This is the term you should understand:

- "Ease in" -The start to move slowly and accelerate
- "Ease Out" -The start to move quickly and slow down

Can be merged with two animations, such as "Ease in Out".

Easing can make the animation more natural.

### Easing Keyword

You can choose any Easing method for CSS transitions and animation. Different keywords will affect the Easing of animation. You can also completely customize the Easing method.

The following is the CSS keyword that can be selected to control Easing:

- `linear`
- `Ease-in`
- `Ease-out`
- `Ease-in-out`

Let us understand and view their effects.

### linear animation

The animation that does not use any Easing method is ** linear **.

The following is a icon of Linear transition effect:

! [] (https://user-images.githubusercontent.com/1475173/42127233-1D6A6-7CC7-11E8-8036C69BC678.png)

Value has increased over time, and the value ratio of value increases. The use of LINEAR will make the animation unnatural. Generally speaking, avoid using LINEAR.

Use the following code to achieve a simple linear animation:

`Transition: Transform 500ms Linear;`

### Ease-OUT animation

As mentioned earlier, compared with LINEAR, Easing Out allows the animation to start quickly, which will slow down at the end. The following is the icon:

! [] (https://user-images.githubusercontent.com/1475173/42127238-1 EECFCE6A-7CC7-11E8-99b9ccece2841.png)

In short, Easing Out is the most suitable for interface experience, because fast starting will give people a feeling of rapid response animation, and at the end, it feels smooth due to inconsistent movement speed.

** Metaphors, for example, those sports cars first start the speed, which is quite fast, which gives people a sense of pleasure. This is more in line with human perception of animation. **

There are many ways to achieve the Ease Out animation effect, and the simplest is the keywords of the `Ease-OUT` in CSS.

`Transition: Transform 500ms Ease-out;`

### Ease-in animation

Contrary to Ease-OUT animation-it starts slowly and then becomes faster at the end. The icon is as follows:

! [] (https://user- Images.githubuserContent.com/1475173/42127234-1DBAC69C69C69c7-11E8-803D-DB8D64109C.png)

Compared with Ease-OUT animation, because they start slowly to give people a sense of reaction stuck, Ease-in makes people feel that the animation is unnatural. At the end of the animation, it was a strange feeling at the end of the animation, because the entire animation was accelerating, and things in the real world suddenly stopped exercise instead of accelerating.

Similar to Ease-OUT and LINEAR animation. Use CSS keywords to implement Ease-in animation:

`Transition: Transform 500ms Ease-in;`

### Ease-in-out animation

The animation is a collection of Ease-in and Ease-OUT. The icon is as follows:

! [] (https://user-images.githubusercontent.com/1475173/42127239-1F1FF1FF37C7-11E8-876E-84d06ccbc88a.png)

Do not set the animation duration for too long, otherwise it will give people a feeling that the interface does not respond.

Use the `Ease-in-OUT` CSS keyword to achieve Ease-IN-OUT animation:

`Transition: Transform 500ms Ease-in-out;`

### Customize Easing

You can customize your Easing curve so that the animation in the project is more effectively controlled.

In fact, the keywords of `Ease-in,` linear`and`Ease` are mapped to the predefined meaning [Bessel curve] (https://en.wikipedia.org/wiki/b%C3%A9Zier_curve) [CSS Transitions Specification] (http://www.w3.org/tr/css3-transitations/) and [Web Animations Specification] (https://w3c.github.io/web-animations/#Scaling-useng-useG-useng-use -USING-Ming- -Cubic-Bezier-Curve) Find more about the Bessel curve.

## Bessel curve

Let's take a look at the operating principle of the Bessel curve. A Bessel curve contains four points, or accurately contains two sets of values. Each pair of x and y coordinates that indicate three Bessel curve control points. The starting point coordinates of the Bessel curve are (0, 0), and the end point coordinates are (1, 1). You can set two sets of value pairs. The X -axis value of each control point must be between [0, 1], and the y -axis value can exceed [0, 1], although the specification does not clearly allow the value to exceed.
Even if the small differences between the x and y values ​​of each control point will output completely different Bessel curves.

View Wikipedia's explanation of [Bessel curve] (https://en.wikipedia.org/wiki/b%C3%A9zier_curve), in general, now, now three times the Bessel curve, this curve, this curve, this curve, this curve, this curve It consists of four points, P0, P1, P2, P3, then P0 and P1 form a pair, P2 and P3 form a pair, P1 and P2 are control points, P0 and P3 are starting and ending nodes. As shown below:

! [] (https://user-images.githubusercontent.com/1475173/42132929-7d8a85e4-7D53-18-85bb-20a96954809c.png)

Look at the two Bessel curve charts with similar but different coordinates.

! [] (https://user- Images.githubuserContent.com/1475173/42127235-1dff5262-7cc7-11E8-9625-40AA3326B9DF.PNG)

and

! [] (https://user- Images.githubuserContent.com/1475173/42127236-1E45015E-7CC7-18-81E9-9FA6728DEA26.png)

As you can see, the two pictures are very different. The difference between the first control point vector is (0.045, 0.183), and the difference between the vector difference between the second control point is (-0.427, -0.054).

The style of the second curve is:

`Transition: Transform 500ms Cubic-Bezier (0.465, 0.183, 0.153, 0.946);`

The first set of values ​​are x and y coordinates of the starting control point and the second set of values ​​are x and y coordinates of the second control point.

## Performance optimization

You have to maintain the number of animation frames 60 frames per second, otherwise it will affect the user experience.

Like other things in the world, animation will have performance expenses. Some attributes of animation performance overhead are less than other attributes. For example, when the element's `width` and` height` can change its geometric structure and may cause other elements on the page to move or change the size. This process is called layout. The previous [article] (https://github.com/troland/how-javascript-works/blob/master/rendering.md) has been described in detail about layout and rendering.

In short, you should try to avoid making animation for the attributes that can cause layout and drawing. For most modern browsers, the animation is limited to `Opacity` and` Transform` attributes.

## Will-change

You can use [Will-Change] (https://dev.w3.org/csswg/css-will-change/) to notify the browser that will change the attributes of a certain element.This will allow the browser to make the most reasonable optimization in advance when changing a certain element attribute.But don't abuse the `Will-Change`, because this will be counterproductive, making the browser waste more resources, causing more performance problems.

Add `Will-Change` code to transforms and opacity as follows:

`` ` .box { Will-Change: Transform, OPACITY; } `` `

This attribute is well compatible in Chrome, Firefox, Opera.

![](https://user-images.githubusercontent.com/1475173/42127237-1e8970a0-7cc7-11e8-9f96-c4b441bdbef3.png)

## How to choose JavaScript and CSS to perform animation

This problem is no solution. Just keep in mind the following principles:

- CSS -based animation and native web animation are generally treated by threads called "synthetic threads". This is different from the main thread of the browser. The main thread is used to perform computing styles, layouts, and drawing and JavaScript code. This means that if the browser takes time to run on the main thread, it will not interrupt the operation of the animation.
- Many times, the synthetic threads can be processed to change the changes in the attribute values ​​of `transforms` and` Opacity`.
- If any animation triggers drawing, layout, or triggering the two at the same time, the "main thread" will have to be handled. The facts are based on CSS and JavaScript animations and layouts or drawing performance overheads that will likely block all work related to CSS or JavaScript operation. The problem of fatal animation becomes meaningless.

## Use animation correctly

A good animation adds a pleasant and interactive user experience to the project. You can use animation at will, whether it is width, debugging, positioning, color or background color, but you must pay attention to potential performance bottlenecks. The bad animation choice will affect the user experience, so the animation must be efficient and reasonable. Use animation as much as possible. Use only animation to let the user experience smooth and naturally not abuse.

## Use animation to interact

Don't use animation because you just use it. On the contrary, some use animation uses animation to strengthen user interaction experience. Avoid using unnecessary animations to interrupt or hinder the use of users.

## Avoid animation for attributes with large performance expenses

The worse use than the bad animation is those animations that can cause pages. Such animations make users feel mournful and unhappy.

## Quote Resources

- <https://developers.google.com/web/fundamentals/design-and-ux/animations/css-vs-javascript>
- <https://developers.google.com/web/fundamentals/design-and-ux/animations/>
- <https://developers.google.com/web/fundamentals/design-and-ux/animations/animations-and-performance>

####

You can read an article on the Internet [Bessel curve] (http://www.html-js.com/article/1628), so how can you use the Bessel curve to make amazing animationsWoolen cloth?
