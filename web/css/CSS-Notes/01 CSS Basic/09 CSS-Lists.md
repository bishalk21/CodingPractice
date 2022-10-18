# CSS Lists
- **Objective:** learn how to format HTML lists using CSS.
### Types of HTML Lists
There are three different types of list in HTML:
* **Unordered lists** — A list of items, where every list items are marked with bullets.
* **Ordered lists** — A list of items, where each list items are marked with numbers.
* **Definition list** — A list of items, with a description of each item.

### Styling Lists with CSS
CSS provides several properties for styling and formatting the most commonly used unordered and ordered lists. These CSS list properties typically allow you to:

* Control the shape or appearance of the marker.
* Specify an image for the marker rather than a bullet point or number.
* Set the distance between a marker and the text in the list.
* Specify whether the marker would appear inside or outside of the box containing the list items.

### Changing the Marker Type of Lists
By default, items in an ordered list are numbered with Arabic numerals (1, 2, 3, 5, and so on), whereas in an unordered list, items are marked with round bullets (•).

But, you can change this default list marker type to any other type such as roman numerals, latin letters, circle, square, and so on using the `list-style-type` property

`Example`
```css
ul {
    list-style-type: square;
}
ol {
    list-style-type: upper-roman;
}
```
---
### Changing the Position of List Markers
By default, markers of each list items are positioned `outside` of their display boxes.

However, you can also position these markers or bullet points inside of the list item's display boxes using the `list-style-position` property along with the value inside. In this case the lines will wrap under the marker instead of being indented.

`Example`
```css
ol.in li {
    list-style-position: inside;
}
ol.out li {
    list-style-position: outside;
}
```
An illustration of changing the position of List would look like:
![Change Position of List](https://www.tutorialrepublic.com/lib/images/list-style-position-illustration.png)

---
### Using Images as List Markers
You can also set an image as a list marker using the list-style-image property.

The style rule in the following example assigns a transparent PNG image "arrow.png" as the list marker for all the items in the unordered list.

`Example`
```css
ul li {
    list-style-image: url("images/bullet.png");
}
```
---
### Setting All list properties at Once.
The list-style property is a shorthand property for defining all the three properties `list-style-type`, `list-style-image`, and `list-style-position` of a list in one place.

`Example`
```css
ul {
    list-style: square inside url("images/bullet.png");
}
```
> **Note:** When using the list-style shorthand property, the orders of the values are: `list-style-type` /`list-style-position` / `list-style-image`. It does not matter if one of the values above is missing as long as the rest are in the specified order.
---
### Creating Navigation Menus using Lists
HTML lists are frequently used to create horizontal navigation bar or menu that typically appear at the top of a website. But since the list items are block elements, so to display them inline we need to use the CSS `display` property.

`Example`
```css
ul {
    padding: 0;
    list-style: none;
    background: #f2f2f2;
}
ul li {
    display: inline-block;
}
ul li a {
    display: block;
    padding: 10px 25px;
    color: #333;
    text-decoration: none;
}
ul li a:hover {
    color: #fff;
    background: #939393;
}
```
---