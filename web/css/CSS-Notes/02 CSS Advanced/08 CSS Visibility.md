# CSS Visibility

- **Objective:** The visibility property determines whether an element is visible or hidden.

### Controlling the Visibility of Elements
You can use the visibility property to control whether an element is visible or not. This property can take one of the following values listed in the table below:

| Value      | Description                                                                                                                                                       |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  |
| `visible`  | Default value. The box and its contents are visible.                                                                                                              |
| `hidden`   | The box and its content are invisible, but still affect the layout of the page.                                                                                   |
| `collapse` | This value causes the entire row or column to be removed from the display. This value is used for row, row group, column, and column group elements.              |
| `inherit`  | Specifies that the value of the visibility property should be inherited from the parent element i.e. takes the same visibility value as specified for its parent. |


The style rule `visibility: collapse;` however removes the internal table elements, but it does not affect the layout of the table in any other way. The space normally occupied by the table elements will be filled by the subsequent siblings.

> **Note:** If the style rule `visibility: collapse;` is specified for other elements rather than the table elements, it causes the same behavior as `hidden`.

---
### CSS Visibility Vs Display
The display and visibility CSS properties appear to be the same thing, but they are in fact quite different and often confuse those new to web development.
- **`visibility: hidden;`** hides the element, but it still takes up space in the layout. Child element of a hidden box will be visible if their visibility is set to visible.
- **`display: none;`** turns off the display and removes the element completely from the document. It does not take up any space, even though the HTML for it is still in the source code. All child elements also have their display turned off, even if their display property is set to something other than none.

An illustration of how the display property works

![Display Property Illustration](https://support.cohesiondx.com/sites/default/files/images/apply-styles/display-diagram-type-as-shape.svg)

---