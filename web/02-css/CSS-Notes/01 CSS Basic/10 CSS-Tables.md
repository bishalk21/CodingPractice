# CSS Tables
- **Objective:** learn how to style HTML tables with CSS

### Styling Tables with CSS
Tables are typically used to display tabular data, such as financial reports.

But when you create an HTML table without any styles or attributes, browsers display them without any border. With CSS you can greatly improve the appearance your tables.

CSS provides several properties that allow you to control the layout and presentation of the table elements.

### Adding Borders to Tables
The CSS `border` property is the best way to define the borders for the tables.

`Examples`
```css
table, th, td {
    border: 1px solid black;
}
```
By default, browser draws a border around the table, as well as around all the cells, with some space in-between, which results in double border. To get rid of this double border problem you can simply collapse the adjoining table cell borders and create clean single line borders.

An illustration of how a border is applied

![Border Property to tables](https://www.tutorialrepublic.com/lib/images/table-border-model-illustration.png)

---
### Collapsing Table Border
There are two distinct models for setting borders on table cells in CSS: _separate_ and _collapse_.

In the separate border model, which is the default, each table cell has its own distinct borders, whereas in the collapsed border model, adjacent table cells share a common border. You can set the border model for an HTML table by using the CSS border-collapse property.

`Example`
```css
table {
    border-collapse: collapse;
}
th, td {
    border: 1px solid black;
}
```
> **Note:** You can also remove the space between the table cell borders through setting the value of CSS `border-spacing` property to 0. However, it only removes the space but do not merge the borders like when you set the `border-collapse` to `collapse`.
---
### Adjusting Space inside Tables
By default, the browser creates the table cells just large enough to contain the data in the cells.

To add more space between the table cell contents and the cell borders, you can simply use the CSS `padding` property.

`Examples`
```css
th, td {
    padding: 15px;
}
```
---
### Setting Table Width and Height
By default, a table will render just wide and tall enough to contain all of its contents.

However, you can also set the `width` and `height` of the table as well as its cells explicitly using the width and height CSS property. 

`Example`
```css
table {
    width: 100%;
}
th {
    height: 40px;
}
```
---
### Controlling the Table Layout

A table expands and contracts to accommodate the data contained inside it. This is the default behavior. As data fills inside the table, it continues to expand as long as there is space.

Sometimes the table layout has to be controlled, which can be done with the CSS `table-layout` property. This property takes one of two values:
* **`auto`**  — Uses an automatic table layout algorithm. With this algorithm, the widths of the table and its cells are adjusted to fit the content. This is the default value.
* **`fixed`** — Uses the fixed table layout algorithm. With this algorithm, the horizontal layout of the table does not depend on the contents of the cells; it only depends on the table's width, the width of the columns, and borders or cell spacing. It is normally faster than auto.  

```css
table {
    width: 300px;
    table-layout: fixed;
}
```
---
### Aligning the Text inside Table Cells
You can align text content inside the table cells either horizontally or vertically.

#### Horizontal Alignment of Cell Contents
For horizontal alignment of text inside the table cells you can use the text-align property in the same way as you use with other elements. You align text to either left, right, center or justify.

```css
th {
    text-align: left;
}
```
> **Note:** Text inside the   `<td>` elements are left-aligned by default, whereas the text inside the `<th>` elements are center-aligned and rendered in bold font by default.

#### Vertical Alignment of Cell Contents
For vertically align the content inside the `<th>` and `<td>` elements to top, bottom, or middle using the CSS vertical-align property. The default vertical alignment is middle.

`Example`
```css
th {
    height: 40px;
    vertical-align: bottom;
}
```
---
### Controlling the Position of Table Captions
You can set the vertical position of a table caption using the CSS `caption-side` property.

`Example`
```css
caption{
    caption-side: bottom;
}
```
> **Note:** To change the horizontal alignment of the table's caption text (e.g. left or right), you can simply use the CSS text-align property, like you do with normal text.
---
### Handling Empty Cells
In tables that uses separate border model, which is default, you can also control the rendering of the cells that have no visible content using the empty-cells CSS property.

This property accepts a value of either show or hide. The default value is show, which renders empty cells like normal cells, but if the value hide is specified no borders or backgrounds are drawn around the empty cells.

`Example`
```css
table {
    border-collapse: separate;
    empty-cells: hide;
}
```
> **Note:** Placing a non-breaking space (`&nbsp;`) inside a table cell make it non-empty. Therefore, even if that cell looks empty the hide value will not hide the borders and backgrounds.

---
### Creating Zebra-striped Tables
Setting different background colors for alternate rows is a popular technique to improve the readability of tables that has large amount of data. This is commonly known as zebra-striping a table.

You can simply achieve this effect by using the CSS `:nth-child()` pseudo-class selector.

`Example`
```css
tbody tr:nth-child(odd) {
    background-color: #f2f2f2;
}
```
Illustration of a zebra-stripped table:
![Zebra-Stripped table](https://www.tutorialrepublic.com/lib/images/zebra-striped-table.png)

> **Note:** The `:nth-child()` pseudo-class select elements based on their position in a group of siblings. It can take a number, a keyword even or odd, or an expression of the form xn+y where x and y are integers (e.g. 1n, 2n, 2n+1, ...) as an argument.

---
### Responsive Tables
Tables are not responsive in nature. To make them responsive wrap your table with a \<div> element and apply the style `overflow-x: auto;`

---