# CSS3 Gradients
- **Objective:** The CSS3 gradient feature allows you to create a gradient from one color to another without using any images.

### Gradients in CSS3
CSS gradients let you display smooth transitions between two or more specified colors.

CSS defines two types of gradients:

- Linear Gradients (goes down/up/left/right/diagonally)
- Radial Gradients (defined by their center)

---
### CSS3 Linear Gradient
To create a linear gradient you must define at least two color stops. However to create more complex gradient effects you can define more color stops. Color stops are the colors you want to render smooth transitions among. You can also set a starting point and a direction (or an angle) along which the gradient effect is applied. The basic syntax of creating the linear gradients using the keywords looks like:

`linear-gradient(direction, color-stop1, color-stop2, ...)`
#### Linear Gradient - Top to Bottom
`Example`
```css
.gradient {
    /* Fallback for browsers that don't support gradients */
    background: red;
    /* For Safari 5.1 to 6.0 */
    background: -webkit-linear-gradient(red, yellow);
    /* For Internet Explorer 10 */
    background: -ms-linear-gradient(red, yellow);
    /* Standard syntax */
    background: linear-gradient(red, yellow);
}
```
#### Linear Gradient - Left to Right
`Example`
```css
.gradient {
    /* Fallback for browsers that don't support gradients */
    background: red;
    /* For Safari 5.1 to 6.0 */
    background: -webkit-linear-gradient(left, red, yellow);
    /* For Internet Explorer 10 */
    background: -ms-linear-gradient(left, red, yellow);
    /* Standard syntax */
    background: linear-gradient(to right, red, yellow);
}
```
#### Linear Gradient - Diagonal
You can also create a gradient along the diagonal direction. 
`Example`
```css
.gradient {
    /* Fallback for browsers that don't support gradients */
    background: red;
    /* For Safari 5.1 to 6.0 */
    background: -webkit-linear-gradient(bottom left, red, yellow);
    /* For Internet Explorer 10 */
    background: -ms-linear-gradient(bottom left, red, yellow);
    /* Standard syntax */
    background: linear-gradient(to top right, red, yellow);
}
```
---
### Setting Direction of Linear Gradients Using Angles
If you want more control over the direction of the gradient, you can set the angle, instead of the predefined keywords. The angle `0deg` creates a bottom to top gradient, and positive angles represent clockwise rotation, that means the angle `90deg` creates a left to right gradient. 

`linear-gradient(angle, color-stop1, color-stop2, ...)`
```css
.gradient {
    /* Fallback for browsers that don't support gradients */
    background: red;
    /* For Safari 5.1 to 6.0 */
    background: -webkit-linear-gradient(0deg, red, yellow);
    /* For Internet Explorer 10 */
    background: -ms-linear-gradient(0deg, red, yellow);
    /* Standard syntax */
    background: linear-gradient(90deg, red, yellow);
}
```
---
### Creating Linear Gradients Using Multiple Color Stops
You can also create gradients for more than two colors

`Example`
```css
.gradient {
    /* Fallback for browsers that don't support gradients */
    background: red;
    /* For Safari 5.1 to 6.0 */
    background: -webkit-linear-gradient(red, yellow, lime);
    /* For Internet Explorer 10 */
    background: -ms-linear-gradient(red, yellow, lime);
    /* Standard syntax */
    background: linear-gradient(red, yellow, lime);
}
```
---
### Setting the Location Color Stops
Color stops are points along the gradient line that will have a specific color at that location. The location of a color stop can be specified either as a percentage, or as an absolute length.

`Example`
```css
.gradient {
    /* Fallback for browsers that don't support gradients */
    background: red;
    /* For Safari 5.1 to 6.0 */
    background: -webkit-linear-gradient(red, yellow 30%, lime 60%);
    /* For Internet Explorer 10 */
    background: -ms-linear-gradient(red, yellow 30%, lime 60%);
    /* Standard syntax */
    background: linear-gradient(red, yellow 30%, lime 60%);
}
```
>**Note:** While setting the color-stops location as a percentage, `0%` represents the starting point, while `100%` represents the ending point. However, you can use values outside of that range i.e. before `0%` or after `100%` to get the effect you want.
---
### Repeating the Linear Gradient 
You can repeat linear gradients using the `repeating-linear-gradient()` function.

`Example`
```css
.gradient {
    /* Fallback for browsers that don't support gradients */
    background: white;
    /* For Safari 5.1 to 6.0 */
    background: -webkit-repeating-linear-gradient(black, white 10%, lime 20%);
    /* For Internet Explorer 10 */
    background: -ms-repeating-linear-gradient(black, white 10%, lime 20%);
    /* Standard syntax */
    background: repeating-linear-gradient(black, white 10%, lime 20%);
}
```
---
### Creating CSS3 Radial Gradients
In a radial gradient color emerge from a single point and smoothly spread outward in a circular or elliptical shape rather than fading from one color to another in a single direction as with linear gradients.

`radial-gradient(shape size at position, color-stop1, color-stop2, ...);`

The arguments of the `radial-gradient()` function has the following meaning:

- position — Specifies the starting point of the gradient, which can be specified in units (px, em, or percentages) or keyword (left, bottom, etc).
- shape — Specifies the shape of the gradient's ending shape. It can be circle or ellipse.
- size — Specifies the size of the gradient's ending shape. The default is farthest-side.

`Example`
```css
.gradient {
    /* Fallback for browsers that don't support gradients */
    background: red;
    /* For Safari 5.1 to 6.0 */
    background: -webkit-radial-gradient(red, yellow, lime);
    /* For Internet Explorer 10 */
    background: -ms-radial-gradient(red, yellow, lime);
    /* Standard syntax */
    background: radial-gradient(red, yellow, lime);
}
```
### Setting the Size of Radial Gradients
The size argument of the `radial-gradient()` function is used to define the size of the gradient's ending shape. Size can be set using units or the keywords: `closest-side`, `farthest-side`, `closest-corner`, `farthest-corner`.

`Example`
```css
.gradient {
    /* Fallback for browsers that don't support gradients */
    background: red;
    /* For Safari 5.1 to 6.0 */
    background: -webkit-radial-gradient(left bottom, circle farthest-side, red, yellow, lime);
    /* For Internet Explorer 10 */
    background: -ms-radial-gradient(left bottom, circle farthest-side, red, yellow, lime);
    /* Standard syntax */
    background: radial-gradient(circle farthest-side at left bottom, red, yellow, lime);
}
```
---
### Repeating the Radial Gradient
You can also repeat radial gradients using the `repeating-radial-gradient()` function.

`Example`
```css
.gradient {
    /* Fallback for browsers that don't support gradients */
    background: white;
    /* For Safari 5.1 to 6.0 */
    background: -webkit-repeating-radial-gradient(black, white 10%, lime 20%);
    /* For Internet Explorer 10 */
    background: -ms-repeating-radial-gradient(black, white 10%, lime 20%);
    /* Standard syntax */
    background: repeating-radial-gradient(black, white 10%, lime 20%);
}
```
---
### CSS3 Transparency and Gradients
CSS3 gradients also support transparency. 

`Example`
```css
.gradient {
    /* Fallback for browsers that don't support gradients */
    background: url("images/sky.jpg");
    /* For Safari 5.1 to 6.0 */
    background: -webkit-linear-gradient(left, rgba(255,255,255,0), rgba(255,255,255,1)), url("images/sky.jpg");
    /* For Internet Explorer 10 */
    background: -ms-linear-gradient(left, rgba(255,255,255,0), rgba(255,255,255,1)), url("images/sky.jpg");
    /* Standard syntax */
    background: linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1)), url("images/sky.jpg");
}
```
---