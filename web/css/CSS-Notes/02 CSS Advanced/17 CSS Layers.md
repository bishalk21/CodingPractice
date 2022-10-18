# CSS Layers
- **Objective:** The CSS z-index property can be used in conjugation with the position property to create an effect of layers like Photoshop.

### Stacking Elements in Layers Using z-index Property

Usually HTML pages are considered two-dimensional, because text, images and other elements are arranged on the page without overlapping. However, in addition to their horizontal and vertical positions, boxes can be stacked along the z-axis as well i.e. one on top of the other by using the CSS `z-index property`. This property specifies the stack level of a box whose position value is one of `absolute`, `fixed`, or `relative`.

The z-axis position of each layer is expressed as an integer representing the stacking order for rendering. An element with a larger `z-index` overlaps an element with a lower one.

A `z-index` property can help you to create more complex webpage layouts. Following is the example which shows how to create layers in CSS.

`Example`
```css
.box {
    position: absolute;
    left: 10px;
    top: 20px;
    z-index: 2;
}
```

An illustration of the Z-index property of CSS.

![z-index property](https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2014/10/axes.png)

---