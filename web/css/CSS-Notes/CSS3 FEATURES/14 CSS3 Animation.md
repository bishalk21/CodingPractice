# CSS3 Animations

- **Objective:** The CSS3 animations feature allows you to create keyframe animations.

### Animations in CSS3

Animations in CSS3 are a set of keyframes that are used to create animations. Animations are created by using the `@keyframes` rule. The `@keyframes` rule specifies the animation code. The animation is created by gradually changing from one set of CSS styles to another. You can change as many CSS properties you want, as many times you want.

The CSS3 animations takes a step further with keyframe-based animations that allow you to specify the changes in CSS properties over time as a set of key frames, like flash animations.

CSS3 Animations deal with the following properties.

- @keyframes
- animation-name
- animation-duration
- animation-delay
- animation-iteration-count
- animation-direction
- animation-timing-function
- animation-fill-mode
- animation

Creating CSS animations is a two step process.

- The first step of building a CSS animation is to defining individual key frames and naming an animation with a key frames declaration.
- The second step is referencing the key frames by name using the `animation-name` property as well as adding `animation-duration` and other optional animation properties to control the animation's behavior.

`Example`

```css
.box {
  width: 50px;
  height: 50px;
  background: red;
  position: relative;
  /* Chrome, Safari, Opera */
  -webkit-animation-name: moveit;
  -webkit-animation-duration: 2s;
  /* Standard syntax */
  animation-name: moveit;
  animation-duration: 2s;
}

/* Chrome, Safari, Opera */
@-webkit-keyframes moveit {
  from {
    left: 0;
  }
  to {
    left: 50%;
  }
}

/* Standard syntax */
@keyframes moveit {
  from {
    left: 0;
  }
  to {
    left: 50%;
  }
}
```

You must specify at least two properties `animation-name` and the `animation-duration` (greater than 0), to make the animation occur. However, all the other animation properties are optional, as their default values don't prevent an animation from happening.

---

### Defining Keyframes

When you specify CSS styles inside the @keyframes rule, the animation will gradually change from the current style to the new style at certain times.

To get an animation to work, you must bind the animation to an element.

`Example`

```css
/* The animation code */
@keyframes example {
  from {
    background-color: red;
  }
  to {
    background-color: yellow;
  }
}

/* The element to apply the animation to */
div {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
}
```

> **Note:** The `animation-duration` property defines how long time an animation should take to complete. If the `animation-duration` property is not specified, no animation will occur, because the default value is 0s (0 seconds).

---

### Delay an Animation

The `animation-delay` property specifies a delay for the start of an animation.

`Example`

```css
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-delay: 2s;
}
```

Negative values are also allowed. If using negative values, the animation will start as if it had already been playing for N seconds.

`Example`

```css
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-delay: -2s;
}
```

### Animation Run time

The `animation-iteration-count` property specifies the number of times an animation should run.

`Example`

```css
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: 3;
}
```

---

### Run Animation in Reverse Direction or Alternate Cycles

| Animation direction | Description                                                                  |
| ------------------- | ---------------------------------------------------------------------------- |
| normal              | The animation is played as normal (forwards). This is default                |
| reverse             | The animation is played in reverse direction (backwards)                     |
| alternate           | The animation is played forwards first, then backwards                       |
| alternate-reverse   | The animation is played backwards first, then forwards                       |
| initial             | Sets this property to its default value. Read about initial                  |
| inherit             | Inherits this property from its parent element. Read about inherit           |
| unset               | Inherits this property from its parent element, unless undefined. Read about |

The `animation-direction` property specifies whether an animation should be played forwards, backwards or in alternate cycles.

The animation-direction property can have the following values.

- **`normal `** - The animation is played as normal (forwards). This is default
- **`reverse`** - The animation is played in reverse direction (backwards)
- **`alternate `** - The animation is played forwards first, then backwards
- **`alternate-reverse `** - The animation is played backwards first, then forwards.

`Example`

```css
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-direction: reverse;
}
```

---

### Specify the Speed Curve of the Animation

| Animation timing function | Description                                                                  |
| ------------------------- | ---------------------------------------------------------------------------- |
| ease                      | Specifies an animation with a slow start, then fast, then end slowly         |
| linear                    | Specifies an animation with the same speed from start to end                 |
| ease-in                   | Specifies an animation with a slow start                                     |
| ease-out                  | Specifies an animation with a slow end                                       |
| ease-in-out               | Specifies an animation with a slow start and end                             |
| cubic-bezier(n,n,n,n)     | Lets you define your own values in a cubic-bezier function                   |
| initial                   | Sets this property to its default value. Read about initial                  |
| inherit                   | Inherits this property from its parent element. Read about inherit           |
| unset                     | Inherits this property from its parent element, unless undefined. Read about |
| step-start                | Specifies an animation with a jump-start                                     |
| step-end                  | Specifies an animation with a jump-end                                       |

The `animation-timing-function` property specifies the speed curve of the animation.

The `animation-timing-function` property can have the following values:

- **`ease`** - Specifies an animation with a slow start, then fast, then end slowly (this is default)
- **`linear`** - Specifies an animation with the same speed from start to end
- **`ease-in `**- Specifies an animation with a slow start
- **`ease-out `**- Specifies an animation with a slow end
- **`ease-in-out `**- Specifies an animation with a slow start and end
- **`cubic-bezier(n,n,n,n)`** - Lets you define your own values in a cubic-bezier function.

`Example`

```css
#div1 {
  animation-timing-function: linear;
}
#div2 {
  animation-timing-function: ease;
}
#div3 {
  animation-timing-function: ease-in;
}
#div4 {
  animation-timing-function: ease-out;
}
#div5 {
  animation-timing-function: ease-in-out;
}
```

---

### Specifying the fill-mode for an Animation.

| Animation fill mode | Description                                                                                                                                                    |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| none                | Default value. The element will not have a style applied at the end of the animation (it will use the values from before the animation)                        |
| forwards            | The element will retain the style values at the end of the animation                                                                                           |
| backwards           | The element will have the style values at the start of the animation applied before it starts playing                                                          |
| both                | The element will have the style values at the start of the animation applied before it starts playing, and retain the style values at the end of the animation |
| initial             | Sets this property to its default value. Read about initial                                                                                                    |
| inherit             | Inherits this property from its parent element. Read about inherit                                                                                             |
| unset               | Inherits this property from its parent element, unless undefined. Read about                                                                                   |

CSS animations do not affect an element before the first keyframe is played or after the last keyframe is played. The animation-fill-mode property can override this behavior.

The `animation-fill-mode ` property specifies a style for the target element when the animation is not playing (before it starts, after it ends, or both).

The `animation-fill-mode ` property can have the following values:

- **`none`** - Default value. Animation will not apply any styles to the element before or after it is executing
- **`forwards`** - The element will retain the style values that is set by the last keyframe (depends on animation-direction and animation-iteration-count)
- **`backwards`** - The element will get the style values that is set by the first keyframe (depends on animation-direction), and retain this during the animation-delay period
- **`both`** - The animation will follow the rules for both forwards and backwards, extending the animation properties in both directions.

`Example`

```css
div {
  width: 100px;
  height: 100px;
  background: red;
  position: relative;
  animation-name: example;
  animation-duration: 3s;
  animation-fill-mode: forwards;

  /*backwards,none,and both can also be used here.*/
}
```

---

### Animation Shorthand Property

There are many properties to consider when creating the animations. However, it is also possible to specify all the animations properties in one single property to shorten the code.

The `animation` property is a shorthand property for setting all the individual animation properties at once in the listed order.

`Example`

```css
.box {
  width: 50px;
  height: 50px;
  background: red;
  position: relative;
  /* Chrome, Safari, Opera */
  -webkit-animation: repeatit 2s linear 0s infinite alternate;
  /* Standard syntax */
  animation: repeatit 2s linear 0s infinite alternate;
}

/* Chrome, Safari, Opera */
@-webkit-keyframes repeatit {
  from {
    left: 0;
  }
  to {
    left: 50%;
  }
}

/* Standard syntax */
@keyframes repeatit {
  from {
    left: 0;
  }
  to {
    left: 50%;
  }
}
```

---

### CSS3 Animation Properties

The following table provides a brief overview of all the animation-related properties.

| Property                                                                                            | Description                                                                                                    |
| --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
|                                                                                                     |
| [@keyframes](https://www.w3schools.com/cssref/css3_pr_animation-keyframes.asp)                      | Specifies the animation code                                                                                   |
| [animation](https://www.w3schools.com/cssref/css3_pr_animation.asp)                                 | A shorthand property for setting all the animation properties                                                  |
| [animation-delay](https://www.w3schools.com/cssref/css3_pr_animation-delay.asp)                     | Specifies a delay for the start of an animation                                                                |
| [animation-direction](https://www.w3schools.com/cssref/css3_pr_animation-direction.asp)             | Specifies whether an animation should be played forwards, backwards or in alternate cycles                     |
| [animation-duration](https://www.w3schools.com/cssref/css3_pr_animation-duration.asp)               | Specifies how long time an animation should take to complete one cycle                                         |
| [animation-fill-mode](https://www.w3schools.com/cssref/css3_pr_animation-fill-mode.asp)             | Specifies a style for the element when the animation is not playing (before it starts, after it ends, or both) |
| [animation-iteration-count](https://www.w3schools.com/cssref/css3_pr_animation-iteration-count.asp) | Specifies the number of times an animation should be played                                                    |
| [animation-name](https://www.w3schools.com/cssref/css3_pr_animation-name.asp)                       | Specifies the name of the @keyframes animation                                                                 |
| [animation-play-state](https://www.w3schools.com/cssref/css3_pr_animation-play-state.asp)           | Specifies whether the animation is running or paused                                                           |
| [animation-timing-function](https://www.w3schools.com/cssref/css3_pr_animation-timing-function.asp) | Specifies the speed curve of the animation                                                                     |

---

An illustration of the use of CSS3 Animation.

![Illustration of CSS3 Animation](https://i.pinimg.com/originals/34/9f/b6/349fb611022ec7f6176d26321fce0011.gif)
