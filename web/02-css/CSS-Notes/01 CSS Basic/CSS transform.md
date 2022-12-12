## CSS Transform

- **Objective:** The CSS transform property is used to transform an element.

### CSS Transform

The CSS transform property is used to transform an element. The transform property allows you to rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.

The transform property can have one of the following values:

- A none keyword. The none keyword specifies that no transformation is applied to the element.

- A transform-function. The transform-function specifies a transformation function. The following table lists the transform-functions:

| Function        | Description                                               |
| --------------- | --------------------------------------------------------- |
| `matrix()`      | Defines a 2D transformation using a matrix of six values. |
| `matrix3d()`    | Defines a 3D transformation using a matrix of 16 values.  |
| `perspective()` | Defines a perspective view for a 3D transformed element.  |
| `rotate()`      | Defines a 2D rotation.                                    |
| `rotate3d()`    | Defines a 3D rotation.                                    |
| `rotateX()`     | Defines a rotation along the X-axis.                      |
| `rotateY()`     | Defines a rotation along the Y-axis.                      |
| `rotateZ()`     | Defines a rotation along the Z-axis.                      |
| `scale()`       | Defines a 2D scale transformation.                        |
| `scale3d()`     | Defines a 3D scale transformation.                        |
| `scaleX()`      | Defines a scale transformation along the X-axis.          |
| `scaleY()`      | Defines a scale transformation along the Y-axis.          |
| `scaleZ()`      | Defines a scale transformation along the Z-axis.          |
| `skew()`        | Defines a 2D skew transformation along the X and Y axes.  |
| `skewX()`       | Defines a 2D skew transformation along the X-axis.        |
| `skewY()`       | Defines a 2D skew transformation along the Y-axis.        |
| `translate()`   | Defines a 2D translation.                                 |
| `translate3d()` | Defines a 3D translation.                                 |
| `translateX()`  | Defines a translation along the X-axis.                   |
| `translateY()`  | Defines a translation along the Y-axis.                   |
| `translateZ()`  | Defines a translation along the Z-axis.                   |

- A transform-list. The transform-list specifies a list of transform-functions. The transform-functions are applied in the order in which they are specified.

- A inherit keyword. The inherit keyword specifies that the transform should be inherited from the parent element.

> **Note:** The transform property does not modify the position of the element. It modifies the coordinate space of the CSS visual formatting model.

### CSS Transform Example

The following example shows how to set the transform property:

```css
p {
  transform: rotate(20deg);
}
```

### CSS Transform Inheritance

The transform property is inherited by the child elements.

### CSS Transform Browser Support

The transform property is supported in all major browsers.

### CSS Transform References

- [W3Schools](https://www.w3schools.com/cssref/css3_pr_transform.asp)
