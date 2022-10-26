# CSS3 Border
- **objective:** With CSS3, you can apply images to an element's borders.

### using Border - CSS3
he CSS3 provides two new properties for styling the borders of an element in a more elegant way — the `border-image` property for adding the images to borders, and the `border-radius` property for making the rounded corners without using any images.

### Creating CSS3 Rounded Corners
The `border-radius` property can be used to create rounded corners. This property typically defines the shape of the corner of the outer border edge. Prior to CSS3, sliced images are used for creating the rounded corners that was rather bothersome.

`Example`
```css
.box {
    width: 300px;
    height: 150px;
    background: #ffb6c1;
    border: 2px solid #f08080;
    border-radius: 20px;
}
```
---
### Adding CSS3 Border Images
The `border-image` property allows you to specify an image to act as an element's border.
The design of the border is created from the sides and corners of the image specified in `border-image` source URL. The border image may be sliced, repeated, scaled and stretched in various ways to fit the size of the border image area.

`Example`
```css
.box {
    width: 300px;
    height: 150px;
    border: 15px solid transparent;
    -webkit-border-image: url("border.png") 30 30 round; /* Safari 3.1-5 */
    -o-border-image: url("border.png") 30 30 round; /* Opera 11-12.1 */
    border-image: url("border.png") 30 30 round;
}
```
>**Note:** The round option is a variation of the repeat option that distributes the image tiles in such a way that the ends are nicely connected.

An illustration of how CSS3 Border property is used.

![CSS3 Border Property](https://www.wdb.injoystudio.com/wp-content/uploads/screenshot-Visual-CSS-Generator-for-Web-Designers.png)

---