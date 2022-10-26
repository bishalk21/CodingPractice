# CSS Margin 
- **Objective :**  learn how to adjust space around an element using CSS.

### CSS Margin Properties
The CSS margin properties allow you to set the spacing around the border of an element's box (or the edge of the element's box, if it has no defined border).

An element's margin is not affected by its background-color, it is always transparent. However, if the parent element has the background color it will be visible through its margin area.

### Setting Margins for Individual Sides
You can specify the margins for the individual sides of an element such as top, right, bottom, and left sides using the CSS `margin-top`, `margin-right`, `margin-bottom`, and the `margin-left` properties respectively.

`Example`
```css
h1 {
    margin-top: 50px;
    margin-bottom: 100px;
}
p {
    margin-left: 75px;
    margin-right: 75px;
}
```
The margin properties can be specified using the following values:

- _length_ - specifies a margin in px, em, rem, pt, cm, etc.
- _%_ - specifies a margin in percentage (%) of the width of the containing element.
- _auto_ - the browser calculates a suitable margin to use.
- _inherit_ - specifies that the margin should be inherited from the parent element.

You can also specify negative margins on an element, e.g., `margin: -10px;`, `margin: -5%;`, etc.

---
### Margin Shorthand Property
The `margin` property is a shorthand property to avoid setting margin of each side separately, i.e., `margin-top`, `margin-right`, `margin-bottom` and `margin-left`.

`Example`
```css
h1 {
    margin: 50px; /* apply to all four sides */
}
p {
    margin: 25px 75px; /* vertical | horizontal */
}
div {
    margin: 25px 50px 75px; /* top | horizontal | bottom */
}
hr {
    margin: 25px 50px 75px 100px; /* top | right | bottom | left */
}
```
This shorthand notation can take one, two, three, or four whitespace separated values.

- If one value is specified, it is applied to **all four sides.**
- If two values are specified, the first value is applied to the **top and bottom** side, and the second value is applied to the **right and left** side of the element's box.
- If three values are specified, the first value is applied to the **top**, second value is applied to **right and left** side, and the last value is applied to the **bottom**.
- If four values are specified, they are applied to the **top, right, bottom** and the **left** side of the element's box respectively in the specified order.

It is recommended to use the shorthand properties, it will help you to save some time by avoiding the extra typing and make your CSS code easier to follow and maintain.

---
### Horizontal Centering with Auto Margins
The `auto` value for the margin property tells the web browser to automatically calculate the margin. This is commonly used to center an element horizontally within a larger container.

`Example`
```css
div {
    width: 300px;
    background: gray;
    margin: 0 auto;
}
```
---