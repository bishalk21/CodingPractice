# CSS Color
- **Objective:** learn the different methods of defining color values in CSS.

### Setting Color Property
The `color` property defines the text color (froeground color in general) of an element.

> **Note:** The color property normally inherits the color value from their parent element, except the case of `anchor` elements. For example, if you specify color for the body element it will automatically be passed down to the headings, paragraphs, etc.
---

### Defining Color Values
Color in CSS most often specified in the following formats.
- a color keyword (example: " red","blue","green",etc.)
- a HEX value (example: "#ff0000", "#000000", etc.)
- an RGB value (example: "rgb(255,0,0)")

CSS3 has introduced several other formats such as HSL,HSLA and RGBA that support alpha transparency. 

---
### Color Keywords
CSS defines the keywords which lets you specify color values in an easy way. The color names are case-insensitive.

`Example`
```css
h1{
    color: red;
}
p{
    color: purple;
}
```
>**Note:** Modern web browsers however practically support many more color names than what are defined in the CSS standard, but to be on the safer side you should use hex color values instead.
---
### HEX Color Values
Hex (short for Hexadecimal) is by far the most commonly used method of defining color on the web.

Hex represents color using a six-digit code, preceded by a hash character, like `#rrggbb`. In which `rr` represents red, `gg` represents green, `bb` represents blue component of the color respectively.

The value of each component can vary from 00 (no color) and FF (full color) in hexadecimal notation, or 0 and 255 in decimal equivalent notation. Thus `#ffffff` represents white color and `#000000` represents black color. 

`Example`
```css
h1{
    color: #ffa500;
}
h2{
    color: #00ff00;
}
```
> **Note:** If hexadecimal code of a color has value pairs, it can also be written in shorthand notation to avoid extra typing, for example, the hex color value #ffffff can be also be written as #fff, #000000 as #000, #00ff00 as #0f0, #ffcc00 as #fc0, and so on.
---
### RGB Color Values 
Colors can be defined in the RGB model (Red,Green and Blue) using the `rgb()` functional notation.

The `rgb()` function accepts three comma-separated values, which specify the amount of red, green, and blue component of the color. These values are commonly specified as integers between 0 to 255, where 0 represent no color and 255 represent full or maximum color.
`Example`
```css
h1{
    color: rgb(255,165,0);
}
p{
    color: rgb(0,255,0);
}
```
> **Note:** You can also specify RGB values inside the `rgb()` function in percentage, where 100% represents full color, and 0% (not simply 0) represents no color. For example, you can specify the red color either as `rgb(255, 0, 0)` or `rgb(100%, 0%, 0%)`.
---
### Affect of Color Property on Borders and Outlines
The `color` property is not just for text content, but for anything in the foreground that takes a color value.
#### CSS Background Color
You can set the background color for HTML elements.

`Examples`
```HTML
<h1 style="background-color:DodgerBlue;">Hello World</h1>
<p style="background-color:Tomato;">Lorem ipsum...</p>
```
#### CSS Border Color
You can set the color of borders.
```html
<h1 style="border:2px solid Tomato;">Hello World</h1>
<h1 style="border:2px solid DodgerBlue;">Hello World</h1>
<h1 style="border:2px solid Violet;">Hello World</h1>
```
---
### CSS3 Color Values
- #### RGBA Colors
    RGBA color values are an extension of RGB color values with an alpha channel - which specifies the opacity for a color.

    An RGBA color value is specified with:

    `rgba(red, green, blue, alpha)`

    The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (not transparent at all)

    [Wanna try out RGBA](https://www.w3schools.com/css/tryit.asp?filename=trycss_color_rgba2)
    
    ---

- #### HSL Colors
    In CSS, a color can be specified using hue, saturation, and lightness (HSL) in the form:

    `hsl(hue, saturation, lightness)`

    - Hue is a degree on the color wheel from 0 to 360. 0 is red, 120 is green, and 240 is blue.

   -  Saturation is a percentage value, 0% means a shade of gray, and 100% is the full color.

    - Lightness is also a percentage, 0% is black, 50% is neither light or dark, 100% is white

    [Wanna try out HSL](https://www.w3schools.com/css/tryit.asp?filename=trycss_color_hsl2
    )
    
    ---
- #### HSLA Colors
    HSLA color values are an extension of HSL color values with an alpha channel - which specifies the opacity for a color.

    An HSLA color value is specified with:

    `hsla(hue, saturation, lightness, alpha)`

    The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (not transparent at all)

    [Wanna try out HSLA](https://www.w3schools.com/css/tryit.asp?filename=trycss_color_hsla2)

---


