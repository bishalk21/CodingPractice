# CSS3 Multi-Column Layouts
- **Objective:** With CSS3, you can split the text content of an element in multiple columns.

### Creating Multi-Column Layouts
CSS3 has introduced the multi-column layout module for creating multiple column layouts in an easy and efficient way. 

With these you can create layouts like you see in magazines and newspapers without using the floating boxes.

`Example`
```css
p {
    -webkit-column-count: 3; /* Chrome, Safari, Opera */
       -moz-column-count: 3; /* Firefox */
            column-count: 3; /* Standard syntax */
}
```
--- 
### Setting Column Count or Width
The CSS properties column-count and column-width control whether and how many columns will appear. The column-count property sets the number of columns inside the multi column element, whereas the column-width property sets the desired width of the columns.

`Example`
```css
p {
    -webkit-column-width: 150px; /* Chrome, Safari, Opera */
       -moz-column-width: 150px; /* Firefox */
            column-width: 150px; /* Standard syntax */
}
```

> **Note:** The column-width describes the optimal width of the column. However, the actual column width may be wider or narrower according to the space available. This property should not be used with the column-count property.

---
### Setting Column Gap
You can control the gap between columns using the column-gap property. The same gap is applied between each column. The default gap is normal which is equivalent to 1em.

`Example`
```css
p {
    /* Chrome, Safari, Opera */
    -webkit-column-count: 3;
    -webkit-column-gap: 100px;
    /* Firefox */
    -moz-column-count: 3;
    -moz-column-gap: 100px;
    /* Standard syntax */
    column-count: 3;
    column-gap: 100px;
}
```
### Setting Column Rules
You can also add a line between the columns i.e. the rule using the column-rule property. It is a shorthand property for setting width, style, and color of the rule in a single declaration. The column-rule property takes the same values as border and outline.

`Example`
```css
p {
    /* Chrome, Safari, Opera */
    -webkit-column-count: 3;
    -webkit-column-gap: 100px;
    -webkit-column-rule: 2px solid red;
    /* Firefox */
    -moz-column-count: 3;
    -moz-column-gap: 100px;
    -moz-column-rule: 2px solid red;
    /* Standard syntax */
    column-count: 3;
    column-gap: 100px;
    column-rule: 2px solid red;
}
```
> **Note:** The width of column rule does not affect the width of column boxes, but if a column rule is wider than the gap, the adjacent column boxes will overlap the rule.

---
### CSS Multi-columns Properties

The following table lists all the multi-columns properties: 

| Property                                                                            | Description                                                        |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
|  |
| [column-count](https://www.w3schools.com/cssref/css3_pr_column-count.asp)           | Specifies the number of columns an element should be divided into  |
| [column-fill](https://www.w3schools.com/cssref/css3_pr_column-fill.asp)             | Specifies how to fill columns                                      |
| [column-gap](https://www.w3schools.com/cssref/css3_pr_column-gap.asp)               | Specifies the gap between the columns                              |
| [column-rule](https://www.w3schools.com/cssref/css3_pr_column-rule.asp)             | A shorthand property for setting all the column-rule-\* properties |
| [column-rule-color](https://www.w3schools.com/cssref/css3_pr_column-rule-color.asp) | Specifies the color of the rule between columns                    |
| [column-rule-style](https://www.w3schools.com/cssref/css3_pr_column-rule-style.asp) | Specifies the style of the rule between columns                    |
| [column-rule-width](https://www.w3schools.com/cssref/css3_pr_column-rule-width.asp) | Specifies the width of the rule between columns                    |
| [column-span](https://www.w3schools.com/cssref/css3_pr_column-span.asp)             | Specifies how many columns an element should span across           |
| [column-width](https://www.w3schools.com/cssref/css3_pr_column-width.asp)           | Specifies a suggested, optimal width for the columns               |
| [columns](https://www.w3schools.com/cssref/css3_pr_columns.asp)                     | A shorthand property for setting column-width and column-count     |

---

An illustration of how the CSS3 Multi Column Layout actually  works.

![CSS3 Multi Column Layout](https://miro.medium.com/max/2546/1*er0fNKLWF5hb8jOh74EXIw.gif)

---