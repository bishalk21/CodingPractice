# CSS Outline
- **Objective :** learn how to define outline for an element using CSS.

### CSS Outline Property
The CSS outline properties allow you to define an outline area around an element's box.

An outline is a line that is drawn just outside the border edge of the elements. Outlines are generally used to indicate focus or active states of the elements such as buttons, links, form fields, etc.

### Outline Vs Borders 
An outline looks very similar to the border, but it differs from border in the following ways:

- Outlines do not take up space, because they always placed on top of the box of the element which may cause them to overlap other elements on the page.
- Unlike borders, outlines won't allow us to set each edge to a different width, or set different colors and styles for each edge. An outline is the same on all sides.
- Outlines do not have any impact on surrounding elements apart from overlapping.
- Unlike borders, outlines do not change the size or position of the element.
- Outlines may be non-rectangular, but you cannot create circular outlines.

---
### Understanding the Different Outline Styles

The `outline-style` property sets the style of an element's outline such as: solid, dotted, etc.

The outline-style property can have one of the following values: `none`, `solid`, `dashed`, `dotted`, `double`, `inset`, `outset`, `groove`, and `ridge`. 

An illustration to give a sense of the differences between the outline style types.

![Illustration of Different outline styles](https://www.tutorialrepublic.com/lib/images/css-outline-style.png)

`Example`
```css
h1 {
    outline-style: dotted;
}
p {
    outline-style: ridge;
}
```
---

### Setting the Outline Width 
The `outline-width` property specifies the width of the outline to be added on an element.

`Example`
```css
p {
    outline-style: dashed;
    outline-width: 10px;
}
```
---
### Specifying the Outline Color
The `outline-color` property sets the color of the outline.

This property accepts the same values as those used for the color property.

`Example`
```css
p {
    outline-style: solid;
    outline-color: #0000ff;
}
```
> **Note:** he CSS `outline-width` or `outline-color` property does not work if it is used alone. Use the `outline-style` property to set the style of the outline first.
---
### Outline Shorthand Property
The `outline` CSS property is a shorthand property for setting one or more of the individual outline properties `outline-style`, `outline-width` and outline-color in a single rule.

`Example`
```css
p {
    outline: 5px solid 	#ff00ff;
}
```
If the value for an individual outline property is omitted or not specified while setting the outline shorthand property, the default value for that property will be used instead, if any.

---
### Removing Outline Around Active Links
The `outline` property is widely used to remove the outline around active links.

However, it is recommended to apply some alternative style to indicate that the link has focus.

`Example`
```css
a, a:active, a:focus {
    outline: none;
}
```
---