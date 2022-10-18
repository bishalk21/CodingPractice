# CSS Float

- **Objective:** The CSS float property specifies whether a box should float or not.

### Floating Elements with CSS
You can float elements to the left or right, but only applies to the elements that generate boxes that are not absolutely positioned. Any element that follows the floated element will flow around the floated element on the other side.

The `float` property may have one of the three values.

| Value   | Description                                                   |
| ------- | ------------------------------------------------------------- |
|  |
| `left`  | The element floats on the left side of its containing block.  |
| `right` | The element floats on the right side of its containing block. |
| `none`  | Removes the float property from an element.                   |

### Elements Floating ...
A floated element is taken out of the normal flow and shifted to the left or right as far as possible in the space available of the containing element.

Other elements normally flow around the floated items, unless they are prevented from doing so by their `clear` property. Elements are floated horizontally, which means that an element can only be floated left or right, not up or down.

`Example`
```css
img {
    float: left;
}

```
If several floating elements are placed adjacently, they will float next to each other if there is horizontal room. If there is not enough room for the float, it is shifted downward until either it fits or there are no more floating elements present.

`Example`
```css
.thumbnail {
    float: left;
    width: 125px;
    height: 125px;
    margin: 10px;
}
```
---
### Turning off Float Using Clear Property
Elements that comes after the floating element will flow around it. The clear property specifies which sides of an element's box other floating elements are not allowed.

`Example`
```css
.clear {
    clear: left;
}

```
>**Note:** This property can clear an element only from floated boxes within the same block. It doesn't clear the element from floated child boxes within the element itself. 

---