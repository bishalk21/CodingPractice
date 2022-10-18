# CSS Text
- **objective:** learn how to style text on your web pages using CSS.
### Formatting Text with CSS
CSS provides several properties that allows you to define various text styles such as color, alignment, spacing, decoration, transformation, etc. very easily and effectively.

The commonly used text properties are: 
* text-align, 
* text-decoration, 
* text-transform, 
* text-indent, 
* line-height, 
* letter-spacing, 
* word-spacing, 

and more. These properties give you precise control over the visual appearance of the _characters_, _words_, _spaces_, and so on.

### Text Color
The color of the text is defined by the CSS `color` property.

`Example`
```css
body {
    color: #434343;
}
```
----
### Text Alignment
The `text-align` property is used to set the horizontal alignment of the text.

Text can be aligned in four ways: to the left, right, centre or justified (straight left and right margins).

`Example`
```css
h1 {
    text-align: center;
}
p {
    text-align: justify;
}
```
> Note: When text-align is set to justify, each line is stretched so that every line has equal width (except the last line), and the left and right margins are straight. This alignment is generally used in publications such as magazines and newspapers.

![An illustration of text align](https://www.tutorialrepublic.com/lib/images/text-align-illustration.png)

---
### Text Decoration
The text-decoration property is used to set or remove decorations from text.

This property typically accepts one of the following values: underline, overline, line-through, and none. You should avoid underline text that is not a link, as it might confuse the visitor.

`Example`
```css
h1 {
    text-decoration: overline;
}
h2 {
    text-decoration: line-through;
}
h3 {
    text-decoration: underline;
}
```
### Removing the Default Underline from Links
 The `text-decoration` property is extensively used to remove the default underline from the HTML hyperlinks. You can further provide some other visual cues to make it stand out from the normal text, for example, using dotted border instead of solid underline.

 `Example`
 ```css
a {
    text-decoration: none;
    border-bottom: 1px dotted;
}
 ```
> **Note:** When you create an HTML link, browser built in style sheet automatically underline it and applies a blue color, so that the readers can clearly see which text is clickable.
---
### Text Transformation
The `text-transform` property is used to set the cases for a text.

Text are often written in mixed case. However, in certain situations you may want to display your text in entirely different case. Using this property you can change an element's text content into uppercase or lowercase letters, or capitalize the first letter of each word without modifying the original text.

`Example`
```css
h1 {
    text-transform: uppercase;
}
h2 {
    text-transform: capitalize;
}
h3 {
    text-transform: lowercase;
}
```
---
### Text Indentation
The `text-indent` property is used to set the indentation of the first line of text within a block of text. It is typically done by inserting the empty space before the first line of text.

The size of the indentation can be specified using percentage (%), length values in pixels, ems, etc.

`Example`
```css
p {
    text-indent: 100px;
}
```
> **Note:** Whether the text is indented _from the left_ or _from the right_ depends on the direction of text inside the element, defined by the CSS direction property.
---
### Letter Spacing
The `letter-spacing` property is used to set extra spacing between the characters of text.

This property can take a length value in pixels, ems, etc. It may also accept negative values. When setting letter spacing, a length value indicates spacing in addition to the default inter-character space.

`Example`
```css
h1 {
    letter-spacing: -3px;
}
p {
    letter-spacing: 10px;
}
```
---
### Word Spacing
The `word-spacing` property is used to specify additional spacing between the words.

This property can accept a length value in pixels, ems, etc. Negative values are also allowed.

`Example`
```css
p.normal {
    word-spacing: 20px;
}
p.justified {
    word-spacing: 20px;
    text-align: justify;
}
p.preformatted {
    word-spacing: 20px;
    white-space: pre;
}
```
> **Note:** Word spacing can be affected by text justification. Also, even though whitespace is preserved, spaces between words are affected by the word-spacing property.
---
### Line Height
The `line-height` property is used to set the height of the text line.

It is also called _leading_ and commonly used to set the distance between lines of text.

The value of this property can be a number, a percentage (%), or a length in pixels, ems, etc.

`Example`
```css
p{
    line-height: 1.2;
}
```
When the value is a number, the line height is calculated by multiplying the element's font size by the number. While, percentage values are relative to the element's font size.

>**Note:** Negative values for the line-height property are not allowed. This property is also a component of the CSS font shorthand property.

If the value of the line-height property is greater than the value of the font-size for an element, this difference (called the "_leading_") is cut in half (called the "_half-leading_") and distributed evenly on the top and bottom of the in-line box. 

`Example`
```css
p {
    font-size: 14px;
    line-height: 20px;
    background-color: #f0e68c;
}
```

---
