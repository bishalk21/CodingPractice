# CSS Links
- **objective:** learn how to style different states of a link.

### Styling Links with CSS
Links or hyperlinks are an essential part of a website. It allows visitors to navigate through the site. Therefore styling the links properly is an important aspect of building a user-friendly website.

A link has four different states — `link`, `visited`, `active` and `hover`. These four states of a link can be styled differently through using the following anchor pseudo-class selectors.

* **`a:link`** — define styles for normal or unvisited links.
* **`a:visited`** — define styles for links that the user has already visited.
* **`a:hover`** — define styles for a link when the user place the mouse pointer over it.
* **`a:active `** — define styles for links when they are being clicked.

You can specify any CSS property you'd like e.g. color, font, background, border, etc. to each of these selectors to customize the style of links.

`Example`
```css
a:link {    /* unvisited link */
    color: #ff0000;
    text-decoration: none;
    border-bottom: 1px solid;
}
a:visited {    /* visited link */
    color: #ff00ff;
}
a:hover {    /* mouse over link */
    color: #00ff00;
    border-bottom: none;
}
a:active {    /* active link */
    color: #00ffff;
}
```
> Note: In general, the order of the pseudo classes should be the following — :link, :visited, :hover, :active, :focus in order for these to work properly.
---

### Modifying Standard Link Styles
In all major web browsers such as Chrome, Firefox, Safari, etc. links on the web pages have underlines and uses the browser's default link colors, if you do not set the styles exclusively for them.

By default, text links will appear as follow in most of the browsers:

* An <u style="color: blue;"> unvisited link </u>as underlined blue text.
* A <u style="color: brown; ">visited link</u> as underlined purple text.
* An <u style="color: red;">active link</u> as underlined red text.

### Setting Custom Color of Links
Simply use the CSS `color` property to define the color of your choice for different state of a link. But when choosing colors make sure that user can clearly differentiate between normal text and links.

`Example`
```css
a:link {
    color: #1ebba3;
}
a:visited {
    color: #ff00f4;
}
a:hover {
    color: #a766ff;
}
a:active {
    color: #ff9800;
}
```
### Removing the Default Underline from Links
If you don't like the default underline on links, you can simply use the CSS text-decoration property to get rid of it. Alternatively, you can apply other styling on links like background color, bottom border, bold font, etc. to make it stand out from the normal text a little better.

`Example`
```css
a:link, a:visited {
    text-decoration: none; 
}
a:hover, a:active {
    text-decoration: underline;
}
```
---

### Making Text Links Look Like Buttons
You can also make your ordinary text links look like button using CSS. To do this we need to utilize few more CSS properties such as `background-color`, `border, display`, `padding`, etc.

`Example`
```css
a:link, a:visited {
    color: white;    
    background-color: #1ebba3;    
    display: inline-block;
    padding: 10px 20px;
    border: 2px solid #099983;
    text-decoration: none;
    text-align: center;
    font: 14px Arial, sans-serif;  
}
a:hover, a:active {
    background-color: #9c6ae1;
    border-color: #7443b6;
}
```
---