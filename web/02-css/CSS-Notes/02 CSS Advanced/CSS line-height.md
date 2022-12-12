## CSS Line-Height

- **Objective:** The CSS line-height property is used to set the height of a line.

### CSS Line-Height

The CSS line-height property is used to set the height of a line. The line-height property specifies the height of a line box.

The line-height property can have one of the following values:

- A number. The number specifies the height of the line box. The number is multiplied by the current font size to calculate the line height. For example, a value of 2 specifies a line height that is twice the size of the current font.

- A length. The length specifies the height of the line box. For example, a value of 2em specifies a line height that is twice the height of the current font.

- A percentage. The percentage specifies the height of the line box. The percentage is calculated with respect to the current font size. For example, a value of 200% specifies a line height that is twice the size of the current font.

- A normal keyword. The normal keyword specifies the height of the line box. The height of the line box is calculated based on the current font size.

- A none keyword. The none keyword specifies that the line height is not set.

- A inherit keyword. The inherit keyword specifies that the line height should be inherited from the parent element.

> **Note:** The line-height property does not set the height of the text, it sets the height of a line box.

### CSS Line-Height Example

The following example shows how to set the line-height property:

```css
p {
  line-height: 2em;
}
```

### CSS Line-Height Inheritance

The line-height property is inherited by the child elements.

### CSS Line-Height Browser Support

The line-height property is supported in all major browsers.

### CSS Line-Height References

- [W3Schools](https://www.w3schools.com/cssref/pr_dim_line-height.asp)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
