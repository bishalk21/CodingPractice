# CSS Sprites
- **objective:** CSS sprites technique is a way to reduce the number of HTTP requests made for image resources, by combining images in a single file.

### Sprite ?
Sprites are two-dimensional images which are made up of combining small images into one larger image at defined X and Y coordinates.

To display a single image from the combined image, you could use the CSS background-position property, defining the exact position of the image to be displayed.

### Advantage of Using CSS Image Sprite

A web page with many images, particularly many small images, such as icons, buttons, etc. can take a long time to load and generates multiple server requests.

Using the image sprites instead of separate images will significantly reduce the number of HTTP requests a browser makes to the server, which can be very effective for improving the loading time of web pages and overall site performance.

> **Note:** Reducing the number of HTTP requests has the major impact on reducing response time that makes the web page more responsive for the user.

An illustration of how sprites is used:

![CSS Sprites Illustration](https://image1.slideserve.com/3532144/css-sprites-l.jpg)

---
### Display an Icon from Image Sprite.

Utilizing CSS, we can display just the part of an image sprite we need.

First of all, we will create the class .sprite that will load our sprite image. This is to avoid repetition, because all items share the same background-image.

`Example`
```css
.sprite {
    background: url("images/mySprite.png") no-repeat;
}
/*we must define a class for each item we want to display.*/
.ie {
    width: 50px; /* Icon width */
    height: 50px; /* Icon height */
    display: inline-block; /* Display icon as inline block */
    background-position: 0 -200px; /* Icon background position in sprite */
}
```
---
### Creating a Navigation Menu Using CSS Image Sprite

### Foundation HTML for Navigation 
start by creating our navigation menu with an HTML unordered list.

`Example`
```html
<ul class="menu">
    <li class="firefox"><a href="#">Firefox</a></li>
    <li class="chrome"><a href="#">Chrome</a></li>
    <li class="ie"><a href="#">Explorer</a></li>
    <li class="opera"><a href="#">Opera</a></li>
    <li class="safari"><a href="#">Safari</a></li>
</ul>
```
### Applying CSS on Navigation

#### Step 1: Resetting the List Structure
By default, HTML unordered lists are displayed with bullets. We'll need to remove the default bullets by setting the `list-style-type` attribute to `none`.

`Example`
```css
ul.menu {
    list-style-type: none;
}
ul.menu li {
    padding: 5px;
    font-size: 16px;
    font-family: "Trebuchet MS", Arial, sans-serif;
}
```
#### Step 2: Setting Common Properties for Each Links
In this step we will set all the common CSS properties that all links are going to share.

`Example`
```css
ul.menu li a {
    height: 50px;
    line-height: 50px;
    display: inline-block;
    padding-left: 60px; /* To sift text off the background-image */
    color: #3E789F;
    background: url("images/mySprite.png") no-repeat; /* As all link share the same background-image */
}
```
### Step 3: Setting Default State of Each Links
define a class for each menu item, because every item in the image sprite has different background-position.

`Example`
```css
ul.menu li.firefox a {
    background-position: 0 0;
}
ul.menu li.chrome a {
    background-position: 0 -100px;
}
ul.menu li.ie a {
    background-position: 0 -200px;
}
ul.menu li.safari a {
    background-position: 0 -300px;
}
ul.menu li.opera a {
    background-position: 0 -400px;
}
```
#### Step 4: Adding Hover States of Links
Adding hover states owns the same principle as adding the above links. Just move their upper-left corner to the starting point (i.e. top-left corner) of the image sprite as we have done above.

A small formula has been devised to help with the background position.

`Vertical position of hover state = Vertical position of normal state - 50px` 

`Example`
```css
ul.menu li.firefox a:hover {
    background-position: 0 -50px;
}
ul.menu li.chrome a:hover {
    background-position: 0 -150px;
}
ul.menu li.ie a:hover {
    background-position: 0 -250px;
}
ul.menu li.safari a:hover {
    background-position: 0 -350px;
}
ul.menu li.opera a:hover {
    background-position: 0 -450px;
}
```

The overall Final HTML and CSS code after combining the whole process.

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Example of Sprite Navigation Menu</title>
<style>
    ul.menu {
        list-style-type: none;
    }
    ul.menu li {
        padding: 5px;
        font-size: 16px;
        font-family: "Trebuchet MS", Arial, sans-serif;
    }
    ul.menu li a {
        height: 50px;
        line-height: 50px;
        display: inline-block;
        padding-left: 60px; /* To sift text off the background-image */
        color: #3E789F;
        background: url("images/mySprite.png") no-repeat; /* As all link share the same background-image */
    }
    ul.menu li.firefox a {
        background-position: 0 0;
    }
    ul.menu li.chrome a {
        background-position: 0 -100px;
    }
    ul.menu li.ie a {
        background-position: 0 -200px;
    }
    ul.menu li.safari a {
        background-position: 0 -300px;
    }
    ul.menu li.opera a {
        background-position: 0 -400px;
    }
    ul.menu li.firefox a:hover {
        background-position: 0 -50px;
    }
    ul.menu li.chrome a:hover {
        background-position: 0 -150px;
    }
    ul.menu li.ie a:hover {
        background-position: 0 -250px;
    }
    ul.menu li.safari a:hover {
        background-position: 0 -350px;
    }
    ul.menu li.opera a:hover {
        background-position: 0 -450px;
    }
</style>
</head>
<body>
    <ul class="menu">
        <li class="firefox"><a href="#">Firefox</a></li>
        <li class="chrome"><a href="#">Chrome</a></li>
        <li class="ie"><a href="#">Explorer</a></li>
        <li class="opera"><a href="#">Opera</a></li>
        <li class="safari"><a href="#">Safari</a></li>
    </ul>
</body>
</html>
```
---