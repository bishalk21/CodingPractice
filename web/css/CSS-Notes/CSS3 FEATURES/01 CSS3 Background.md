# CSS3 Background
- **Objective:** With CSS3, you can apply multiple backgrounds to elements.

### using CSS3 Backgrounds
The CSS3 provides several new properties to manipulate the background of an element like background clipping, multiple backgrounds, and the option to adjust the background size.

### CSS3 background-size Property
The `background-size` property can be used to specify the size of the background images.  Prior to CSS3, the size of the background images was determined by the actual size of the images. The background image size can be specified using the pixels or percentage values as well as the keywords `auto`, `contain`, and `cover`. Negative values are not allowed.

`Examples`
```css
.box {
    width: 250px;
    height: 150px;
    background: url("images/sky.jpg") no-repeat;
    background-size: contain;
    border: 6px solid #333;
}
```
> **Note:** The `background-size` property is typically used to create full size background images that scale according to the size of viewport or width of the browser.

---
### CSS3 background-clip Property
The `background-clip` property can be used to specify whether an element's background extends into the border or not. The background-clip property can take the three values: `border-box`, `padding-box`, `content-box`

`Example`
```css
.box {
    width: 250px;
    height: 150px;
    padding: 10px;
    border: 6px dashed #333;
    background: orange;
    background-clip: content-box;
}
```
---
### CSS3 background-origin Property
The `background-origin` property can be used to specify the positioning area of the background images. It can take the same values as `background-clip` property: `border-box`, `padding-box`, `content-box`.

`Example`
```css
.box {
    width: 250px;
    height: 150px;
    padding: 10px;
    border: 6px dashed #333;
    background: url("images/sky.jpg") no-repeat;
    background-size: contain;
    background-origin: content-box;
}
```

>**Note:** The `background-origin` property is ignored if the value of background-attachment property is specified as 'fixed'.

---
### CSS3 Multiple Backgrounds
CSS3 gives you ability to add multiple backgrounds to a single element. The backgrounds are layered on the top of one another. The number of layers is determined by the number of comma-separated values in the `background-image` or background shorthand property.

`Example`
```css
.box {
    width: 100%;
    height: 500px;
    background: url("images/birds.png") no-repeat center,  url("images/clouds.png")  no-repeat center, lightblue;
}
```
---