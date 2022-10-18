# CSS Opacity
- **Objective:** The opacity CSS property specifies the transparency of an element.

### Cross Browser Opacity
Opacity is now a part of the CSS3 specifications, but it was present for a long time. However, older browsers have different ways of controlling the opacity or transparency.

### CSS Opacity in Firefox, Safari, Chrome, Opera and IE9
the most up to date syntax for CSS opacity in all current browsers.

`Example`
```css
p {
    opacity: 0.7;
}
```
The above style rule will make the paragraph element 70% opaque (or 30% transparent).

The opacity property takes a value a value from 0.0 to 1.0. A setting of `opacity: 1;` would make the element completely opaque (i.e. 0% transparent), whereas `opacity: 0;` would make the element completely transparent (i.e. 100% transparent).

---
### CSS Opacity in Internet Explorer 8 and lower
Internet Explorer 8 and earlier version supports a Microsoft-only property "alpha filter" to control the transparency of an element.

`Example`
```css
p {
    filter: alpha(opacity=50);
    zoom: 1;  /* Fix for IE7 */
}
```
> **Note:** Alpha filters in IE accept values from 0 to 100. The value 0 makes the element completely transparent (i.e. 100% transparent), whereas the value 100 makes the element completely opaque (i.e. 0% transparent).
---
### CSS opacity for All Browser
Combining the both steps above you will get the opacity for all browsers.

`Example`
```css
p {
    opacity: 0.5;  /* Opacity for Modern Browsers */
    filter: alpha(opacity=50);  /* Opacity for IE8 and lower */
    zoom: 1;  /* Fix for IE7 */
}
```
>` **Warning:** Including alpha filter to control transparency in Internet Explorer 8 and lower versions creates invalid code in your style sheet since this is a Microsoft-only property, not a standard CSS property.`
---
### CSS Image Opacity
You can also make transparent images using CSS Opacity.

![CSS Image Opacity](https://www.tutorialbrain.com/wp-content/uploads/2019/05/CSS-Opacity.png)

### Change Image Opacity on Mouse Over

An illustration of Image Opacity on Mouse Over

![Image Opacity on Mouse Over Illustration](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR71lQzRY3pN3kR93SPiuxKkiT6cwclKqdW2Q&usqp=CAU)

`Example`
```html
<!DOCTYPE html>
<html >
<head>
  <style type="text/css">
    .pic{
      width:190px;
      height:190px;
      opacity: 1;
      filter: alpha(opacity=100);
      background: url(http://www.corelangs.com/css/box/img/duck.png) no-repeat;
    }
    .pic:hover
    {
      opacity: 0.3;
      filter: alpha(opacity=30);
    }
  </style>
</head>
<body>
  <div class="pic">
  </div>
</body>
</html>
```
### Text in Transparent Box
When using opacity on an element not only the background of the element that will have transparency, but all of its child elements become transparent as well. It is making the text inside the transparent element hard to read if the value of opacity becomes higher.

![An illustration of Text in Transparent Box](https://www.c-sharpcorner.com/UploadFile/eda428/css-image-opacitytransparency/Images/Text-Tranparent-image-in-HTML.png)

`Example`
```css
div {
    float: left;
    opacity: 0.7;
    border: 1px solid #949781;
}
p {
    float: left;
    position: relative;
    margin-left: -400px;
}
```
---
### CSS Transparency using RGBA
In addition to RGB CSS3 has introduced a new way RGBA to specify a color that includes alpha transparency as part of the color value. RGBA stands for Red Blue Green Alpha.

`Example`
```css
div {
    background: rgba(200, 54, 54, 0.5);
}
p {
    color: rgba(200, 54, 54, 0.25);
}
```
---
### Declaring a Fallback Color
All browsers do not support RGBA colors. However, you can provide an alternative such as solid colors or transparent PNG images for the browsers that don't support it.

`Example`
```css
p {
    /* Fallback for web browsers that doesn't support RGBA */
    background: rgb(0, 0, 0);
    /* RGBa with 0.5 opacity */
    background: rgba(0, 0, 0, 0.5);
}
```
> `**Warning:** Warning: Internet Explorer 8 and earlier versions do not support the RGBA colors. They use the gradient filter to achieve the effect of RGBA, which is deprecated.`
---
