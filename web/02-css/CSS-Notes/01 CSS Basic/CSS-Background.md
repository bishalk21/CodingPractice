# CSS Background
* **Objective:** learn how to define background styles for an element in CSS.

### Setting Background Properties
Background plays an important role in the visual presentation of a web page.

CSS provide several properties for styling the background of an element, including coloring the background, placing images in the background and managing their positioning, etc.

The background properties are :
* `background-color, `
* `background-image, `
* `background-repeat, `
* `background-attachment ` 
* `background-position.`

### Background Color
The background-color property is used to set the background color of an element.

`Example`
```css
body{
    background-color: #f068ec;
}
```
Color values in CSS are most often specified in the following formats:

- a color name - like "red"
- a HEX value - like "#ff0000"
- an RGB value - like "rgb(255, 0, 0)"
---
### Background Image
The `background-image` property set an image as a background of an HTML element.

`Example`
```css
body{
    background-image: url("images/bg.png")
}
```
> **Note:** When applying the background image to an element, make sure that the image you choose does not affect the readability of the element's text content.
---
### Background Repeat 
The `background-repeat` property allows you to control how a background image is repeated or tiled in the background of an element. You can set a background image to repeat vertically (y-axis), horizontally (x-axis), in both directions, or in neither direction.

`Example`
```css
body {
    background-image: url("images/gradient.png");
    background-repeat: repeat-x;
}
```
A better way of understanding how repeat property actually works.

![Repeat Illustration](https://www.tutorialrepublic.com/lib/images/background-repeat-illustration.png "This is how repeat property works.")

---
### Background Position
The `background-position` property is used to control the position of the background image.

If no background position has been specified, the background image is placed at the default top-left position of the element i.e. at (0,0)

`Example`
```css
body {
    background-image: url("images/robot.png");
    background-repeat: no-repeat;
    background-position: right top;
}
```
> **Note:**  If two values are specified for the `background-position` property, the first value represents the horizontal position, and the second represents the vertical position. If only one value is specified, the second value is assumed to be center.

Besides keywords, you can also use percentage or length values, such as `px` or `em` for this property.

An illustration to better understand how the background property actually works.

![Background Position Illustrations](https://www.tutorialrepublic.com/lib/images/background-position-illustration.png)

---
### Background Attachment
The `background-attachment` property determines whether the background image is fixed with regard to the viewport or scrolls along with the containing block.

` Example`
```css
body {
    background-image: url("images/bell.png");
    background-repeat: no-repeat;
    background-attachment: fixed;
}
```
---
### Background Shorthand Property
The background property is a shorthand property for setting all the individual background properties, i.e., `background-color`, `background-image`, `background-repeat`, `background-attachment` and the `background-position `property at once. 
```css
/*Without using shorthand notation*/
body {
    background-color: #f0e68c;
    background-image: url("images/smiley.png");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: 250px 25px;
}

/*Using shorthand notation*/
body {
    background: #f0e68c url("images/smiley.png") no-repeat fixed 250px 25px;
}
```
When using the background shorthand property the order of the property values should be.

`background: color image repeat attachment position;`

>**Note:** The background properties do not inherit like the color property, but the parent element's background will be visible through by default, because of the initial or default `transparent` value of the `background-color` CSS property.
---

### Summary of the discussion
 **Property**          | **Description**                                                               
:----------------------:|:-----------------------------------------------------------------------------:
 background             | Sets all the background properties in one declaration                         
 background\-attachment | Sets whether a background image is fixed or scrolls with the rest of the page 
 background\-clip       | Specifies the painting area of the background                                 
 background\-color      | Sets the background color of an element                                       
 background\-image      | Sets the background image for an element                                      
 background\-origin     | Specifies where the background image\(s\) is/are positioned                   
 background\-position   | Sets the starting position of a background image                              
 background\-repeat     | Sets how a background image will be repeated                                  
 background\-size       | Specifies the size of the background image\(s\)                               

