# CSS Dimensions
- **objective:** learn how to set width and height of an element using CSS.

### Setting Element Dimensions
CSS has several dimension properties, such as `width`, `height`, `max-width`, `min-width`, `max-height`, and `min-height` that allows you to control the width and height of an element.

### Setting the Width and Height
The width and height property defines the width and height of the content area of an element.

This width and height does not include paddings, borders, or margins. See the CSS box model to know how the effective width and height of an element's box is calculated.

```css
div {
    width: 300px;
    height: 200px;
}
```
The width and height properties can take the following values:
* _length_ - specifies a width in px, em, rem, pt, cm, etc.
* _%_ - specifies a width in percentage (%) of the width of the containing element.
* _auto_ - the browser calculates a suitable width for the element.
* _initial_ - Sets the width and height to its default value, which is `auto`.
* _inherit_ - specifies that the width should be inherited from the parent element.

You cannot specify negative values to the width and height properties.

---
### Setting Maximum Width and Height
You can use the `max-width` and `max-height` property to specify the maximum width and height of the content area. This maximum width and height does not include paddings, borders, or margins.

An element cannot be wider than the `max-width` value, even if the width property value is set to something larger.

`Example`
```css
div {
    width: 300px;
    max-width: 200px;
}
```
an element to which `min-height` is applied will never be smaller than the value specified, even if the `height` property is set to something lesser.

`Example`
```css
div {
    height: 100px;
    min-height: 200px;
}
```
---
### Setting a Width and Height Range
The `min-width` and `min-height` properties are often used in combination with the `max-width` and `max-height` properties to produce a width and height range for an element.

`Example`
```css
div {
    min-width: 300px;
    max-width: 500px;
}
```
---
