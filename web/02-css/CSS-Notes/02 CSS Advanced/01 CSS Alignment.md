# CSS Alignment

- **Objective:** CSS has several properties that can be used to align elements on web pages.

### Text Alignment
Text inside the block-level elements can aligned by setting the text-align properly.

`Example`
```css
h1 {
    text-align: center;
}
p {
    text-align: left;
}
```
---
### Center Alignment Using the margin Property

Center alignment of a block-level element is one of the most important implications of the CSS margin property.

`Example`
```css
div {
    width: 50%;
    margin: 0 auto;
}
```

>**Note:** The value auto for the margin property will not work in Internet Explorer 8 and earlier versions, unless a `<!DOCTYPE>` is specified.

---
### Aligning Elements using the position Property
The CSS position in conjunction with the left, right, top and bottom property can be used to align elements with respect to the document's viewport or containing parent element.

`Example`
```css
.up {
    position: absolute;
    top: 0;
}
.down {
    position: absolute;
    bottom: 0;
}
```
---
### Left and Right Alignment Using the float Property

The float CSS property can be used to align an element to the left or right of its containing block in such a way that other content may flow along its side.

Hence, if an element is floated to the left, content will flow along its right side. Conversely, if the element is floated to the right, content will flow along its left side.

`Example`
```css
div {
    width: 200px;
    float: left;
}
```
---
### Clearing Floats
One of the most confusing things about working with the float-based layouts is the collapsing parent. The parent element doesn't stretch up automatically to accommodate the floated elements. Though, this isn't always obvious if the parent doesn't contain any visually noticeable background or borders, but it is important to be aware of and must dealt with to prevent strange layout and cross-browser problem.

An illustration of clearing float 

![cleared Float](https://www.tutorialrepublic.com/lib/images/collapsed-parent.jpg)

---
### Fixing the Collapsed Parent
There are several ways to fix the CSS collapsing parent issue.

#### Solution 1: Float the Container
The easiest way to fix this problem is to float the containing parent element.

`Example`
```css
.container {
    float: left;
    background: #f2f2f2;
}
```
>`**Warning:** This fix will only work in a limited number of circumstances, since floating the parent may produce unexpected results.`

#### Solution 2: Using the Empty Div
This is an old fashioned way but is an easy solution and works across every browser.

`Example`

```css
.clearfix {
    clear: both;
}
/* html code snippet */
<div class="clearfix"> </div>
```
You could also do this by means of a \<br> tag. But this method is not recommended since it adds non-semantic code to your markup.

#### Section 3: Using the :after Pseudo-Element

The `:after` pseudo-element in conjunction with the `content` property has been used quite extensively to resolve float-clearing issues.

`Example`
```css
.clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}
```
The class `.clearfix` is applied to any container that has floating children.

>`**Warning:** Internet Explorer up IE7 does not support the :after pseudo-element. However IE8 supported, but require a <!DOCTYPE> to be declared.`

---