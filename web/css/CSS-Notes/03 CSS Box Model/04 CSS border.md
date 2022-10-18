# CSS Border
* **objective:** learn how to define border around an element using CSS.

### CSS Border Properties
The CSS border properties allow you to define the border area of an element's box.

Borders appear directly between the margin and padding of an element. The border can either be a predefined style like, solid line, dotted line, double line, etc. or an image.

### Understanding the Different Border Styles

The `border-style` property sets the style of a box's border such as: solid, dotted, etc. It is a shorthand property for setting the line style for all four sides of the elements border.

The border-style property can have the following values: `none`, `hidden`, `solid`, `dashed`, `dotted`, `double`, `inset`, `outset`, `groove`, and `ridge`.

An illustration of how the border styles would look like:

![Border property illustration](https://www.tutorialrepublic.com/lib/images/css-border-style.png)

The values `none` and `hidden` displays no border, however, there is a slight difference between these two values. In the case of table cell and border collapsing, the `none` value has the lowest priority, whereas the `hidden` value has the highest priority, if any other conflicting border is set.

The values `inset`, `outset`, `groove`, and `ridge` creates a 3D like effect which essentially depends on the `border-color` value.

`Example`
```css
h1 {
    border-style: dotted;
}
p {
    border-style: ridge;
}
```
---
### Setting the Border Width
The `border-width` property specifies the width of the border area. It is a shorthand property for setting the thickness of all the four sides of an element's border at the same time.

`Example`
```css
p {
    border-style: dashed;
    border-width: 10px;
}
```
> **Note:** The border width can be specified using any length value, such as px, em, rem, and so on. In addition to length units, the border width may also be specified using one of three keywords: `thin`, `medium`, and `thick`. Percentage values are not allowed.
---
### Specifying the Border Color
The `border-color` property specifies the color of the border area. This is also a shorthand property for setting the color of all the four sides of an element's border.

`Example`
```css
p {
    border-style: solid;
    border-color: #ff0000;
}

```
>**Note:** The CSS `border-width` or `border-color` property does not work if it is used alone. Use the `border-style` property to set the style of the border first.
---
### Border Shorthand Property
The `border` CSS property is a shorthand property for setting one or more of the individual border properties `border-width`, `border-style` and `border-color` in a single rule.

`Example`
```css
p {
    border: 5px solid #00ff00;
}
```

If the value for an individual border property is omitted or not specified while setting the border shorthand property, the default value for that property will be used instead, if any.

in the case of `border-style`, omitting the value will cause no border to show at all, because the default value for this property is none. 

`Example`
```css
p {
    border: 5px #00ff00;
}
```
---