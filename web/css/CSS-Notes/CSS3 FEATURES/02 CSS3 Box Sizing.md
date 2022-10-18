# CSS3 Box Sizing
- **Objective:** With CSS3 box sizing feature you can control element's effective width.

### Redefining Box Width with Box-Sizing

By default, the actual width or height of an element's box visible/rendered on a web page depends on its width or height, padding and border property. 

`Example`
```css
.box {
    width: 100%;
    padding: 20px;
    border: 5px solid #f08080;
}
```
This is very common problem that web designers are facing for a long time. But, CSS3 introduces the box-sizing property to solve this problem and make the CSS layouts much more simple and intuitive. The box-sizing property alter the default CSS box model in such a way that, any padding or border specified on the element is laid out and drawn inside of the content area, so that the rendered width and height of the element is equal to the specified CSS width and height properties.

`Example`
```css
.box {
    width: 100%;
    padding: 20px;
    border: 5px solid #f08080;
    box-sizing: border-box;
}
```
If you see the output of this example, you will find the scroll bar has disappeared.

>**Note:** When using the CSS box-sizing property the resulting width and height of the content area are calculated by subtracting the border and padding widths of the respective sides from the specified width and height properties.
---
### Creating Layouts with Box-Sizing
With the CSS box-sizing property creating the multiple columns layout using percentages becomes very simple. Now you don't have to worry about the final size of the element's box while adding the padding or border on them.

`Example`
```css
.box {
    width: 50%;
    padding: 20px;
    background: #f2f2f2;
    float: left;
    box-sizing: border-box;
}
```
---
### Illustrations of Box Sizing

An illustration  on:

- The use of box sizing 
![box sizing illustration-1](https://i.ytimg.com/vi/0PcCQZWIqyc/maxresdefault.jpg)

- how box sizing effects the layout.
![Box sizing illustration-2](https://www.r2integrated.com/-/media/feature/news/articles/2013/october/my-new-best-friend-box-sizing/box-sizing-property.jpg?la=en&hash=0618672DA258514D033F305BCB540CBFE371E31D)

---