# CSS3 2D Transforms
- **Objective:** The CSS3 2D transform feature allows elements to be transformed in 2D space.

### 2D Transformation of Elements
With CSS3 2D transform feature you can perform basic transform manipulations such as move, rotate, scale and skew on elements in a two-dimensional space.

### CSS 2D Transforms Methods
With the CSS transform property you can use the following 2D transformation methods:

- translate()
- rotate()
- scaleX()
- scaleY()
- scale()
- skewX()
- skewY()
- skew()
- matrix()

### The The translate() Method

The `translate()` method moves an element from its current position (according to the parameters given for the X-axis and the Y-axis).

`Example`
```css
div {
  transform: translate(50px, 100px);
}
/*Another example*/
img {
    -webkit-transform: translate(200px, 50px);  /* Chrome, Safari, Opera */
       -moz-transform: translate(200px, 50px);  /* Firefox */
        -ms-transform: translate(200px, 50px);  /* IE 9 */
            transform: translate(200px, 50px);  /* Standard syntax */    
}
```
An illustration of CSS3 translate() function:

![translate function illustration](https://www.tutorialrepublic.com/lib/images/css3-translate-illustration.png)

---
### The rotate() method
The `rotate()` method rotates an element clockwise or counter-clockwise according to a given degree.

`Example`
```css
div {
  transform: rotate(20deg);
}

/*Another example*/

img {
    -webkit-transform: rotate(30deg);  /* Chrome, Safari, Opera */
       -moz-transform: rotate(30deg);  /* Firefox */
        -ms-transform: rotate(30deg);  /* IE 9 */
            transform: rotate(30deg);  /* Standard syntax */    
}
```
An illustration of how the rotate function works.

![Rotate function illustration](https://www.tutorialrepublic.com/lib/images/css3-rotate-illustration.png)

---
### The scale() function
The `scale()` method increases or decreases the size of an element (according to the parameters given for the width and height).

`Example`
```css
div {
  transform: scale(2, 3);
}

/*Another example*/

img {
    -webkit-transform: scale(1.5);  /* Chrome, Safari, Opera */
       -moz-transform: scale(1.5);  /* Firefox */
        -ms-transform: scale(1.5);  /* IE 9 */
            transform: scale(1.5);  /* Modern Browsers */    
}
```
You can even scale the width and height of the scalable object by using the `scaleX()` and `scaleY()` functions.

The `scaleX()` method increases or decreases the width of an element.

`Example`
```css
div {
  transform: scaleX(2);
}
```
The `scaleY()` method increases or decreases the height of an element.

`Example`
```css
div {
  transform: scaleY(3);
}
```


An illustration of the scale() function.

![Scale function illustration](https://www.tutorialrepublic.com/lib/images/css3-scale-illustration.png)

---
### The skew() function
The `skew(`) function skews the element along the X and Y axes by the specified angles. It can be written as `skew(ax, ay)`. If `ay` isn't specified, its value is assumed to be zero.

`Example`
```css
div {
  transform: skew(20deg, 10deg);
}

/*Another example*/
img {
    -webkit-transform: skew(-40deg, 15deg);  /* Chrome, Safari, Opera */
       -moz-transform: skew(-40deg, 15deg);  /* Firefox */
        -ms-transform: skew(-40deg, 15deg);  /* IE 9 */
            transform: skew(-40deg, 15deg);  /* Modern Browsers */    
}
```

An illustration of how the skew function looks like.

![Skew function illustration](https://www.tutorialrepublic.com/lib/images/css3-skew-illustration.png)

---
### The matrix() function
The `matrix()` function can perform all of the 2D transformations such as translate, rotate, scale, and skew at once. It takes six parameters in the form of a matrix which can be written as `matrix(a, b, c, d, e, f)`.

- `translate(tx, ty) = matrix(1, 0, 0, 1, tx, ty);` — where tx and ty are the horizontal and vertical translation values.
- `rotate(a) = matrix(cos(a), sin(a), -sin(a), cos(a), 0, 0);` — where a is the value in deg. You can swap the sin(a) and -sin(a) values to reverse the rotation. The maximum rotation you could perform is 360 degrees.
- `scale(sx, sy) = matrix(sx, 0, 0, sy, 0 ,0);` — where sx and sy are the horizontal and vertical scaling values.
- `skew(ax, ay) = matrix(1, tan(ay), tan(ay), 1, 0 ,0);` — where ax and ay are the horizontal and vertical values in deg.

`Example`
```css
div {
  transform: matrix(1, -0.3, 0, 1, 0, 0);
}

/*Another example*/
img {
    -webkit-transform: matrix(0, -1, 1, 0, 200px, 50px);  /* Chrome, Safari, Opera */
       -moz-transform: matrix(0, -1, 1, 0, 200px, 50px);  /* Firefox */
        -ms-transform: matrix(0, -1, 1, 0, 200px, 50px);  /* IE 9 */
            transform: matrix(0, -1, 1, 0, 200px, 50px);  /* Standard syntax */
}
```
when performing more than one transformation at once, it is more convenient to use the individual transformation function and list them in order.

`Example`
```css
img {
    -webkit-transform: translate(200px, 50px) rotate(180deg) scale(1.5) skew(0, 30deg);  /* Chrome, Safari, Opera */
       -moz-transform: translate(200px, 50px) rotate(180deg) scale(1.5) skew(0, 30deg);  /* Firefox */
        -ms-transform: translate(200px, 50px) rotate(180deg) scale(1.5) skew(0, 30deg);  /* IE 9 */
            transform: translate(200px, 50px) rotate(180deg) scale(1.5) skew(0, 30deg);  /* Standard syntax */    
}
```
---
### 2D Transform Functions
The following table provides a brief overview of all the 2D transformation functions.

| Function              | Description                                                                                                                 |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `translate(tx,ty)`    | Moves the element by the given amount along the X and Y-axis.                                                               |
| `translateX(tx)`      | Moves the the element by the given amount along the X-axis.                                                                 |
| `translateY(ty)`      | Moves the the element by the given amount along the Y-axis.                                                                 |
| `rotate(a)`           | Rotates the element by the specified angle around the origin of the element, as defined by the `transform-origin` property. |
| `scale(sx,sy)`        | Scale the width and height of the element up or down by the given amount. The function `scale(1,1)` has no effect.          |
| `scaleX(sx)`          | Scale the width of the element up or down by the given amount.                                                              |
| `scaleY(sy)`          | Scale the height of the element up or down by the given amount.                                                             |
| `skew(ax,ay)`         | Skews the element by the given angle along the X and Y-axis.                                                                |
| `skewX(ax)`           | Skews the element by the given angle along the X-axis.                                                                      |
| `skewY(ay)`           | Skews the element by the given angle along the Y-axis.                                                                      |
| `matrix(n,n,n,n,n,n)` | Specifies a 2D transformation in the form of a transformation matrix comprised of the six values.                           |

---
