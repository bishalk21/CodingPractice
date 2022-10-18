# CSS3 Transitions

- **Objective:** The CSS3 transition feature allows the changes in CSS property values to occur smoothly over a specified duration.

## CSS Transitions vs CSS Animations

| CSS Transitions                                                                                                                                        | CSS Animations                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| help to change the appearance and behavior of an element when a state change occurs, such as when it is hovered over, focused on, active, or targeted. | help to animate the appearance and behavior of an element over a specified duration. |

### Understanding CSS3 Transitions

The CSS3 transition feature allows the changes in CSS property values to occur smoothly over a specified duration. The transition feature is a part of the CSS3 module.

CSS transitions allows you to change property values smoothly, over a given duration.

The following CSS properties are required to create a transition effect:

- `transition-property`
- `transition-duration`
- `transition-timing-function`
- `transition-delay`

### Ways to Create CSS3 Transitions

There are two ways to create CSS3 transitions:

- Using the `transition` shorthand property

```css
.box {
  transition: <transition-property> <transition-duration>
    <transition-timing-function> <transition-delay>;
}
```

- Using the `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay` properties

```css
.box {
  transition-property: <transition-property>;
  transition-duration: <transition-duration>;
  transition-timing-function: <transition-timing-function>;
  transition-delay: <transition-delay>;
}
```

`Example`

```css
button {
  background: #fd7c2a;
  /* For Safari 3.0+ */
  -webkit-transition-property: background;
  -webkit-transition-duration: 2s;
  /* Standard syntax */
  transition-property: background;
  transition-duration: 2s;
}
button:hover {
  background: #3cc16e;
}
```

> **Note:** Not all CSS properties are animatable. In general, any CSS property that accepts values that are numbers, lengths, percentages, or colors is animatable.

---

### Preforming Multiple Transitions

Each of the transition properties can take more than one value, separated by commas, which provides an easy way to define multiple transitions at once with different settings.

`Example`

```css
button {
  background: #fd7c2a;
  border: 3px solid #dc5801;
  /* For Safari 3.0+ */
  -webkit-transition-property: background, border;
  -webkit-transition-duration: 1s, 2s;
  /* Standard syntax */
  transition-property: background, border;
  transition-duration: 1s, 2s;
}
button:hover {
  background: #3cc16e;
  border-color: #288049;
}
```

---

### Specify the Speed Curve of the Transition.

| Transition Timing Function | Description                                                                  |
| -------------------------- | ---------------------------------------------------------------------------- |
| ease                       | specifies a transition effect with a slow start, then fast, then end slowly. |
| linear                     | specifies a transition effect with the same speed from start to end.         |
| ease-in                    | specifies a transition effect with a slow start.                             |
| ease-out                   | specifies a transition effect with a slow end.                               |
| ease-in-out                | specifies a transition effect with a slow start and end.                     |
| cubic-bezier(n,n,n,n)      | lets you define your own values in a cubic-bezier function.                  |
| step-start                 | specifies a transition effect with the same speed from start to end.         |
| step-end                   | specifies a transition effect with the same speed from start to end.         |
| steps(n,start/end)         | specifies a transition effect with the same speed from start to end.         |

The transition-timing-function property specifies the speed curve of the transition effect.

The transition-timing-function property can have the following values:

- **`ease`** - specifies a transition effect with a slow start, then fast, then end slowly (this is default)
- **`linear`** - specifies a transition effect with the same speed from start to end
- **`ease-in`** - specifies a transition effect with a slow start
- **`ease-out`** - specifies a transition effect with a slow end
- **`ease-in-out`** - specifies a transition effect with a slow start and end
- **`cubic-bezier(n,n,n,n)`** - lets you define your own values in a cubic-bezier function

`Example`

```css
#div1 {
  transition-timing-function: linear;
}
#div2 {
  transition-timing-function: ease;
}
#div3 {
  transition-timing-function: ease-in;
}
#div4 {
  transition-timing-function: ease-out;
}
#div5 {
  transition-timing-function: ease-in-out;
}
```

---

### Transition Shorthand Property

There are many properties to consider when applying the transitions. However, it is also possible to specify all the transition properties in one single property to shorten the code.

The `transition` property is a shorthand property for setting all the individual transition properties (i.e., `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`) at once in the listed order.

`Example`

```css
button {
  background: #fd7c2a;
  -webkit-transition: background 2s ease-in 0s; /* For Safari 3.0+ */
  transition: background 2s ease-in 0s; /* Standard syntax */
}
button:hover {
  background: #3cc16e;
}
```

> **Note:** If any value is missing or not specified, the default value for that property will be used instead. That means, if the value for `transition-duration` property is missing, no transition will occur, because its default value is 0.

---

### CSS3 Transition Properties

The following table provides a brief overview of all the transition properties.

| Property                                                                                                                  | Description                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| [transition](https://www.tutorialrepublic.com/css-reference/css3-transition-property.php)                                 | A shorthand property for setting all the four individual transition properties in a single declaration.        |
| [transition-delay](https://www.tutorialrepublic.com/css-reference/css3-transition-delay-property.php)                     | Specifies when the transition will start.                                                                      |
| [transition-duration](https://www.tutorialrepublic.com/css-reference/css3-transition-duration-property.php)               | Specifies the number of seconds or milliseconds a transition animation should take to complete.                |
| [transition-property](https://www.tutorialrepublic.com/css-reference/css3-transition-property-property.php)               | Specifies the names of the CSS properties to which a transition effect should be applied.                      |
| [transition-timing-function](https://www.tutorialrepublic.com/css-reference/css3-transition-timing-function-property.php) | Specifies how the intermediate values of the CSS properties being affected by a transition will be calculated. |

---
