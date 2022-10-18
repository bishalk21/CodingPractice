# CSS3 Filters

- **Objective:** The CSS3 filter effects provide an easy way to apply the visual effect to the images.

###  Understanding the CSS3 Filter Functions
With the filter effects introduced in CSS3 you can perform perform visual effect operations like blur, balancing contrast or brightness, color saturation etc. on graphical elements like an image before it is drawn onto the web page.

The filter effects can be applied to the element using the CSS3 filter property, which accept one or more filter function in the order provided.

`filter:	 blur() | brightness() | contrast() | drop-shadow() | grayscale() | hue-rotate() | invert() | opacity() | sepia() | saturate() | url();`

---
### The Blur Effect 
The blur effect can be applied to an element using the `blur()` function. unction. This function accepts CSS length value as parameter which defines the blur radius. A larger value will create more blur. If no parameter is provided, then a value 0 is used.

```css
img {
    -webkit-filter: blur(5px); /* Chrome, Safari, Opera */
    filter: blur(5px);
}
```
An illustration of how blurring effect actually works.

![](https://codetea.com/content/images/2017/09/Loading-Animation-CSS.gif )  

---
### Setting the Image Brightness
The `brightness()` function can be used to set the brightness of an image. A value of 0% will create an image that is completely black. Whereas, a value of 100% or 1 leaves the images unchanged. Other values are linear multipliers on the effect.

```css
img.bright {
    -webkit-filter: brightness(200%); /* Chrome, Safari, Opera */
    filter: brightness(200%);
}
img.dark {
    -webkit-filter: brightness(50%); /* Chrome, Safari, Opera */
    filter: brightness(50%);
}
```
An illustration of how the image brightness 

![](https://i.pinimg.com/originals/14/f3/23/14f3233e803cdb1bb81c8a3eb02e775f.gif)

---
### Adjusting the Image Contrast
The `contrast()` function is used to adjust the contrast on an image. A value of 0% will create an image that is completely black. Whereas, a value of 100% or 1 leaves the image unchanged. Values over 100% are also allowed which provide results with less contrast. If the amount parameter is missing or omitted, a value of 1 is used.

```css
img.bright {
    -webkit-filter: contrast(200%); /* Chrome, Safari, Opera */
    filter: contrast(200%);
}
img.dim {
    -webkit-filter: contrast(50%); /* Chrome, Safari, Opera */
    filter: contrast(50%);
}
```
An illustration of Image Contrast

![](https://i0.wp.com/css-tricks.com/wp-content/uploads/2017/06/select_text_method0.gif?ssl=1)

---
### Adding Drop Shadow to Images
You can use the `drop-shadow` function to apply the drop shadow effect to the images like Photoshop. This function is similar to the box-shadow property.
 
```css
img {
    -webkit-filter: drop-shadow(4px 4px 10px orange); /* Chrome, Safari, Opera */
    filter: drop-shadow(4px 4px 10px orange);
}
```
> **Note:** The first and second parameters of the `drop-shadow()` function specifies the horizontal and vertical offset of the shadow respectively, whereas the third parameter specify the blur radius and the last parameter specifies the shadow color, just like the box-shadow property, with one exception, the 'inset' keyword is not allowed.

![](https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2018/07/Drop-Shadow-Blog-post_Before-After.gif)

---
### Converting an Image to Grayscale
The images can be converted to grayscale using the `grayscale()` function. A value of 100% is completely grayscale. A value of 0% leaves the image unchanged. Values between 0% and 100% are linear multipliers on the effect. If the amount parameter is missing, a value of 0 is used.

```css
img.complete-gray {
    -webkit-filter: grayscale(100%); /* Chrome, Safari, Opera */
    filter: grayscale(100%);
}
img.partial-gray {
    -webkit-filter: grayscale(50%); /* Chrome, Safari, Opera */
    filter: grayscale(50%);
}
```
An illustration of the effect 

![Image to grayscale](https://www.huelish.com/uploads/5/7/9/9/57994927/7-wave-ann_orig.gif)

---
### Applying Hue Rotation on Image
The `hue-rotate()` function applies a hue rotation on the image. The passed parameter defines the number of degrees around the color circle the image samples will be adjusted. A value of 0deg leaves the image unchanged. If the 'angle' parameter is missing, a value of 0deg is used. There is no maximum value, the effect of values above `360deg` wraps around.

```css
img.hue-normal {
    -webkit-filter: hue-rotate(150deg); /* Chrome, Safari, Opera */
    filter: hue-rotate(150deg);
}
img.hue-wrap {
    -webkit-filter: hue-rotate(480deg); /* Chrome, Safari, Opera */
    filter: hue-rotate(480deg);
}
```
An illustration of how this effect works

![Illustration of Hue rotation](https://media0.giphy.com/media/xUPGcmwJKKRmLNkI7e/giphy.gif)

---
### The Invert Effect
The invert effect like Photoshop can be applied to an image with the `invert()` function. A value of `100%` or `1` is completely inverted. A value of `0%` leaves the input unchanged. Values between 0% and `100%` are linear multipliers on the effect. If the 'amount' parameter is missing, a value of 0 is used. Negative values are not allowed.

```css
img.partially-inverted {
    -webkit-filter: invert(80%); /* Chrome, Safari, Opera */
    filter: invert(80%);
}
img.fully-inverted {
    -webkit-filter: invert(100%); /* Chrome, Safari, Opera */
    filter: invert(100%);
}
```
An illustration of the effect

![Invert effect](https://i.pinimg.com/originals/80/8a/89/808a89fe727065db730617c37a77f1e2.gif)

---
### Applying Opacity to Images
The `opacity()` function can be used to apply transparency to the images. A value of 0% is completely transparent. A value of `100%` or 1 leaves the image unchanged. Values between `0%` and `100%` are linear multipliers on the effect. If the 'amount' parameter is missing, a value of 1 is used. This function is similar to the opacity property.

```css
img {
    -webkit-filter: opacity(80%); /* Chrome, Safari, Opera */
    filter: opacity(80%);
}
```
An illustration of the effect 

![](https://thumbs.gfycat.com/SeriousMixedAmericangoldfinch-small.gif)

---
### Applying Sepia Effect to Images
The `sepia()` function converts the image to sepia. A value of `100%` or 1 is completely sepia. A value of `0%` leaves the image unchanged. Values between `0%` and `100%` are linear multipliers on the effect. If the 'amount' parameter is missing, a value of `0` is used.
```css
img.complete-sepia {
    -webkit-filter: sepia(100%); /* Chrome, Safari, Opera */
    filter: sepia(100%);
}
img.partial-sepia {
    -webkit-filter: sepia(30%); /* Chrome, Safari, Opera */
    filter: sepia(30%);
}
```
> **Note:** In photographic terms, sepia toning is a specialized treatment to give a black-and-white photograph a warmer tone (reddish-brown) to enhance its archival quality.

An illustration of the effect
![](https://imgur.com/txdQ1lx.gif)

---
### Adjusting the Saturation of Images
The `saturate()` function can be used to adjust the saturation of an image. A value of 0% is completely un-saturated. A value of 100% leaves the image unchanged. Other values are linear multipliers on the effect. Values of amount over 100% are also allowed, providing super-saturated results. If the 'amount' parameter is missing, a value of 1 is used.

```css
img.un-saturated {
    -webkit-filter: saturate(0%); /* Chrome, Safari, Opera */
    filter: saturate(0%);
}
img.super-saturated {
    -webkit-filter: saturate(200%); /* Chrome, Safari, Opera */
    filter: saturate(200%);
}
```
> **Note:** The `url()` function specifies a filter reference to a specific filter element. For example, url(common-filters.svg#foo). If the filter reference to an element that didn't exist or the referenced element is not a filter element, then the whole filter chain is ignored. No filter is applied to the element.

An illustration of the effect 

![Saturation effect](https://media1.tenor.com/images/9922c8383afc72984f2530e1054d0733/tenor.gif?itemid=13396150)

---
