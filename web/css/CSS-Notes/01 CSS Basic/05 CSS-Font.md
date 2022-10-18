# CSS Font
- **Objective:** learn how to style fonts on a web page using CSS.

### Styling Fonts with CSS
Choosing the right font and style is very important for readability of text on a webpage.

CSS provide several properties for styling the font of the text, including changing their face, controlling their size and boldness, managing variant, and so on.

The font properties are: 
* `font-family` 
* `font-style`  
* `font-weight`
* `font-size` 
* `font-variant`

### Font Family
The `font-family` property is used to specify the font to be used to render the text.

This property can hold several comma-separated font names as a _fallback system_, so that if the first font is not available on the user's system, browser tries to use the second one, and so on.

`Example`
```css
body {
    font-family: Arial, Helvetica, sans-serif;
}
```
> **Note:** If the name of a font family contains more than one word, it must be placed inside quotation marks, like "Times New Roman", "Courier New", "Segoe UI", etc.

The most common font families used in web design are serif and sans-serif, because they are more suitable for reading.

### Difference Between Serif and Sans-Serif Fonts
Serif fonts have small line or stroke at the extremities of characters, whereas sans-serif fonts are straighter and do not have these small strokes.

![Illustration of how the difference looks like](https://www.tutorialrepublic.com/lib/images/serif-vs-sans-serif.png)

---
### Font Style
The `font-style` property is used to set the font face style for the text content of an element.

This property has three values:

* normal - The text is shown normally
* italic - The text is shown in italics
* oblique - The text is "leaning" (oblique is very similar to italic, but less supported)

`Example`
```css
p.normal {
  font-style: normal;
}
p.italic {
  font-style: italic;
}
p.oblique {
  font-style: oblique;
}

```
>**Note:**  both oblique and italic font styles may  appear to be the same thing, but there is a difference. The `italic` style uses an _italic version_ of the font while oblique style on the other hand is simply a slanted or sloped version of the normal font.
---
### Font Size
The `font-size` property is used to set the size of font for the text content of an element.

There are several ways to specify the font size values e.g. with keywords, percentage, pixels, ems, etc.

> **Note:** you should not use font size adjustments to make paragraphs look like headings, or headings look like paragraphs.  
 Always use the proper HTML tags, like `<h1>` - `<h6>` for headings and `<p>` for paragraphs.

 The font-size value can be an absolute, or relative size.

#### Absolute size:

* Sets the text to a specified size
* Does not allow a user to change the text size in all browsers (bad for accessibility reasons)
* Absolute size is useful when the physical size of the output is known

#### Relative size:

* Sets the size relative to surrounding elements
* Allows a user to change the text size in browsers.

> **Note:** If you do not specify a font size, the default size of normal text, like paragraphs, is 16px (16px = 1em).

###  Setting Font Size with Pixels
Setting the font size in pixel values (e.g. 14px, 16px, etc.) is a good choice when you need the pixel accuracy. Pixel is an absolute unit of measurement which specifies a fixed length.

Defining the font sizes in pixel is not considered very accessible, because the user cannot change the font size from the browser settings. For instance, users with limited or low vision may wish to set the font size much larger than the size specified by you.

> **Note:** The text can also be resized in all browsers using the zoom feature. However, this feature resizes the entire page, not just the text. The W3C recommends using the em or percentage (`%`) values in order to create more robust and scalable layouts.

### Setting Fonts Size with EM
The `em` unit refers to the font size of the parent element. When defining the font-size property, `1em` is equal to the size of the font that applies to the _parent of the element_.

`Example`
```css
h1 {
    font-size: 2em;    /* 32px/16px=2em */
}
p {
    font-size: 0.875em;    /* 14px/16px=0.875em */
}
```
### Using the Combination of Percentage and EM
a popular technique is to set the `font-size` for the body element to `62.5%` (that is 62.5% of the default 16px), which equates to 10px, or 0.625em.

with this the `font-size` for any elements using em units, with an easy-to-remember conversion, by dividing the px value by 10. This way `10px = 1em`, `12px = 1.2em`, `14px = 1.4em`, `16px = 1.6em`, and so on.

`Example`
```css
body {
    font-size: 62.5%;    /* font-size 1em = 10px */
}
p {
    font-size: 1.4em;    /* 1.4em = 14px */
}
p span {
    font-size: 2em;    /* 2em = 28px */
}
```
### Setting Font Size with Root Em
To make things even more simpler CSS3 has introduced `rem` unit (short for "root em") which is always relative to the font-size of the root element (`html`), regardless of where the element lies in the document (unlike `em` which is relative to parent element's font size).

This means that `1rem` is equivalent to the font size of the `html` element, which is `16px` by default in most browsers. 

`Example`
```css
html {
    font-size: 62.5%;    /* font-size 1em = 10px */
}
p {
    font-size: 1.4rem;    /* 1.4rem = 14px */
}
p span {
    font-size: 2rem;    /* 2rem = 20px (not 28px) */
}
```
### Setting Font Size with Keywords
CSS provide several keywords that you can use to define font sizes.

An absolute font size can be specified using one of the following keywords: 
* xx-small, 
* x-small, 
* small, 
* medium, 
* large,
* x-large, 
* xx-large. 

Whereas, a relative font size can be specified using the keywords: `smaller` or `larger`.

`Example`
```css
body {
    font-size: large;
}
h1 {
    font-size: larger;
}
p {
    font-size: smaller;
}
```
>**Note:** The keyword medium is equivalent to the browsers default font-size, which is normally 16px. Likewise, xx-small is the equivalent of 9 pixels, x-small is 10 pixels, small is 13 pixels, large is 18 pixels, x-large is 24 pixels, and xx-large is 32 pixels.

### Setting Font Size with Viewport Units
The font sizes can be specified using viewport units such as `vw` or `vh`.

Viewport units refer to a percentage of the browser's viewport dimensions, where `1vw = 1%` of viewport width, and `1vh = 1%` of viewport height. Hence, if the viewport is 1600px wide, 1vw is 16px.

`Example`
```css
body {
    font-size: 1vw;
}
h1 {
    font-size: 3vw;
}
```
There is a problem with the viewport units. On small screens fonts become so small that they are hardly readable. To prevent this you can utilize CSS `calc()` function.

`Example`
```css
html { 
    font-size: calc(1em + 1vw); 
}
h1 {
    font-size: 3rem;
}
```
---
### Font Weight 
The `font-weight` property specifies the weight or boldness of the font.

This property can take one of the following values: 
* normal 
* bold
* bolder 
* lighter 
* 100 
* 200 
* 300 
* 400 
* 500 
* 600 
* 700 
* 800 
* 900 
* inherit

1. The numeric values `100-900` specific the font weights, where each number represents a weight greater than its predecessor. `400` is same as `normal` & `700` is same as `bold`.
1. The bold and lighter values are relative to the inherited font weight, while the other values such as `normal` and `bold` are absolutely font weights.

`Example`
```css
p {
    font-weight: bold;
}
```

> **Note:** Most of the fonts are only available in a limited number of weights; often they are available only in _normal_ and _bold_. In case, if a font is not available in the specified weight, an alternate will be chosen that is the closest available weight.
---
### Font Variant

The font-variant property allows the text to be displayed in a special small-caps variation.

Small-caps or small capital letters are slightly different to normal capital letters, in which lowercase letters appear as smaller versions of the corresponding uppercase letters.

`Example`
```css
p {
    font-variant: small-caps;
}
```
The value `normal` removes small caps from the text which is already formatted that way.

---
### CSS Google Fonts
If you do not want to use any of the standard fonts in HTML, you can use the Google Fonts API to add hundreds of other fonts to your page.

Just add a stylesheet link and refer to a font family of your choice:

`Example`
```html
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia">
<style>
body {
  font-family: "Sofia";
  font-size: 22px;
}
</style>
</head>
<body>

<h1>Sofia Font</h1>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>

</body>
</html>
```