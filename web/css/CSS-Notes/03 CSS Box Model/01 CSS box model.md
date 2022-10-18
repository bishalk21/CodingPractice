# CSS Box Model
- **objective:** learn how elements are visually laid out on the web pages.
### Box Model ?
Every element that can be displayed on a web page is comprised of one or more rectangular boxes. 

CSS box model typically describes how these rectangular boxes are laid out on a web page. 

These boxes can have different properties and can interact with each other in different ways, but every box has a content area and optional surrounding `padding`, `border`, and `margin areas`.

An illustration of how the box model looks like on a web page.

![Box model](https://www.tutorialrepublic.com/lib/images/css-box-model.png)

Padding is the transparent space between the element's content and its border (or edge of the box, if it has no border), whereas margin is the transparent space around the border.

---
### Width and Height of the Elements
In CSS the width and height of an element in reality is the width and height of the content are a of that element.

There are many features which contribute to the actual width and height of the element.

| **BoxSize** | **CSS Properties** |
|:---:|:---:|
| Total Width | width \+ padding\-left \+ padding\-right \+ border\-left \+ border\-right \+ margin\-left \+ margin\-right |
| Total Height | height \+ padding\-top \+ padding\-bottom \+ border\-top \+ border\-bottom \+ margin\-top \+ margin\-bottom |

`Example`

```css
div {
    width: 300px;
    height: 200px;
    padding: 15px; /* set padding for all four sides */
    border: 10px solid black; /* set border for all four sides */
    margin: 20px auto; /* set top and bottom margin to 20 pixels, and left and right margin to auto */
}
```
---