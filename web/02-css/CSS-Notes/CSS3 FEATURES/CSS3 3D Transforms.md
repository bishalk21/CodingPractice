# CSS3 Transforms
- **Objective:** The CSS3 3D transform feature allows elements to be transformed in 3D space.

### Elements of 3D Transformation
With CSS3 3D transform feature you can perform basic transform manipulations such as move, rotate, scale and skew on elements in a three-dimensional space.

### the translate3d() Function
Moves the element from its current position to a new position along the X, Y and Z-axis. This can be written as `translate(tx, ty, tz)`. Percentage values are not allowed for third translation-value parameter (i.e. `tz`).

`Example`
```css
.container {
    width: 125px;
    height: 125px;
    perspective: 500px;
    border: 4px solid #e5a043;
    background: #fff2dd;
}
.transformed {
    -webkit-transform: translate3d(25px, 25px, 50px); /* Chrome, Safari, Opera */
    transform: translate3d(25px, 25px, 50px); /* Standard syntax */
}
```
An illustration of the translate3D function

![3d transform function illustration](https://www.tutorialrepublic.com/lib/images/css3-3d-translation-illustration.png)

>**Note:** If you apply 3D transformation to an element without setting the perspective the resulting effect will not appear as three-dimensional.
---
### The rotate3d() Function
The `rotate3d()` function rotates the element in 3D space by the specified angle around the [x,y,z] direction vector. This can be written as `rotate(vx, vy, vz, angle)`.

`Example`
```css
.container{
    width: 125px;
    height: 125px;
    perspective: 300px;
    border: 4px solid #a2b058;
    background: #f0f5d8;
}
.transformed {
    -webkit-transform: rotate3d(0, 1, 0, 60deg); /* Chrome, Safari, Opera */
    transform: rotate3d(0, 1, 0, 60deg); /* Standard syntax */
}
```
An illustration of how the 3d rotate function looks like.

![Rotate 3d function ](https://www.tutorialrepublic.com/lib/images/css3-3d-rotation-illustration.png)

---
### The scale3d() Function
The `scale3d()` function changes the size of an element. It can be written as `scale(sx, sy, sz)`. The effect of this function is not evident unless you use it in combination with other transform functions such as rotate and the perspective.

`Example`
```css
.container{
    width: 125px;
    height: 125px;
    perspective: 300px;
    border: 4px solid #6486ab;
    background: #e9eef3;
}
.transformed {
    -webkit-transform: scale3d(1, 1, 2) rotate3d(1, 0, 0, 60deg); /* Chrome, Safari, Opera */
    transform: scale3d(1, 1, 2) rotate3d(1, 0, 0, 60deg); /* Standard syntax */
}
```
![3d scaling illustration](https://www.tutorialrepublic.com/lib/images/css3-3d-scale-illustration.png)

---
### The matrix3d() Function
The `matrix3d()` function can perform all of the 3D transformations such as translate, rotate, and scale at once. It takes 16 parameters in the form of a 4×4 transformation matrix.

`Example`
```css
.container{
    width: 125px;
    height: 125px;
    perspective: 300px;
    border: 4px solid #d14e46;
    background: #fddddb;
}
.transformed {
    -webkit-transform: matrix3d(0.359127, -0.469472, 0.806613, 0, 0.190951, 0.882948, 0.428884, 0, -0.913545, 0, 0.406737, 0, 0, 0, 0, 1); /* Chrome, Safari, Opera */
    transform: matrix3d(0.359127, -0.469472, 0.806613, 0, 0.190951, 0.882948, 0.428884, 0, -0.913545, 0, 0.406737, 0, 0, 0, 0, 1); /* Standard syntax */
}
```
---
### 3D Transform Functions
The following table provides a brief overview of all the 3D transformation functions.

| Function                                   | Description                                                                                                                                                         |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `translate3d(tx,ty,tz)`                    | Moves the element by the given amount along the X, Y & Z-axis.                                                                                                      |
| `translateX(tx)`                           | Moves the element by the given amount along the X-axis.                                                                                                             |
| `translateY(ty)`                           | Moves the element by the given amount along the Y-axis.                                                                                                             |
| `translateZ(tz)`                           | Moves the element by the given amount along the Z-axis.                                                                                                             |
| `rotate3d(x,y,z, a)`                       | Rotates the element in 3D space by the angle specified in the last parameter, around the \[x,y,z\] direction vector.                                                |
| `rotateX(a)`                               | Rotates the element by the given angle around the X-axis.                                                                                                           |
| `rotateY(a)`                               | Rotates the element by the given angle around the Y-axis.                                                                                                           |
| `rotateZ(a)`                               | Rotates the element by the given angle around the Z-axis.                                                                                                           |
| `scale3d(sx,sy,sz)`                        | Scales the element by the given amount along the X, Y and Z-axis. The function `scale3d(1,1,1)` has no effect.                                                      |
| `scaleX(sx)`                               | Scales the element along the X-axis.                                                                                                                                |
| `scaleY(sy)`                               | Scales the element along the Y-axis.                                                                                                                                |
| `scaleZ(sz)`                               | Scales the element along the Z-axis.                                                                                                                                |
| `matrix(n,n,n,n,n,n, n,n,n,n,n,n,n,n,n,n)` | Specifies a 3D transformation in the form of a 4×4 transformation matrix of 16 values.                                                                              |
| `perspective(length)`                      | Defines a perspective view for a 3D transformed element. In general, as the value of this function increases, the element will appear further away from the viewer. |

---