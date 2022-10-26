# CSS3 Flexible Box Layouts

- **Objective:** CSS3 flexible Box, or flexbox is a new layout model for creating the more flexible user interface design.

### The Flex Layout Model

Flexible box, commonly referred to as flexbox, is a new layout model introduced in CSS3 for creating the flexible user interface design with multiple rows and columns without using the percentage or fixed length values.

The CSS3 flex layout model provides a simple and powerful mechanism for handling the distributing of space and alignment of content automatically through stylesheet without interfering the actual markup.

Flexbox is a one-dimensional layout model, which means it can handle the layout in one direction either in rows or columns at a time. It is a container-based layout model, which means it works on the parent container and its direct children.

Why Flexbox?

- vertical centering of elements
- horizontal centering of elements
- all columns in a multi-column layout should be the same height
- all columns in a multi-column layout should be the same width

```css
.container {
  display: flex;
  flex-direction: row | row-reverse | column | column-reverse; // default is row
  flex-wrap: nowrap | wrap | wrap-reverse; // default is nowrap
  justify-content: flex-start | flex-end | center | space-between | space-around; // default is flex-start
  align-items: flex-start | flex-end | center | baseline | stretch; // default is stretch
  align-content: flex-start | flex-end | center | space-between | space-around |
    stretch; // default is stretch
  flex-flow: <‘flex-direction’> || <‘flex-wrap’>; // default is row nowrap
  flex: none | [ <‘flex-grow’> <‘flex-shrink’>? || <‘flex-basis’> ]; // default is 0 1 auto
  order: <integer>; // default is 0
  align-self: auto | flex-start | flex-end | center | baseline | stretch; // default is auto
  flex-grow: <number>; // default is 0
  flex-shrink: <number>; // default is 1
  flex-basis: <length> | auto; // default is auto
}
```

`Example`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>CSS3 Three Equal Flex Column</title>
    <style>
      .flex-container {
        width: 80%;
        min-height: 300px;
        display: -webkit-flex; /* Safari */
        display: flex; /* Standard syntax */
        border: 1px solid #808080;
      }
      .flex-container div {
        background: #dbdfe5;
        -webkit-flex: 1; /* Safari */
        -ms-flex: 1; /* IE 10 */
        flex: 1; /* Standard syntax */
      }
    </style>
  </head>
  <body>
    <div class="flex-container">
      <div class="item1">Item 1</div>
      <div class="item2">Item 2</div>
      <div class="item3">Item 3</div>
    </div>
  </body>
</html>
```

---

### Flex Layout Works

Flexbox consists of flex containers and flex items. A flex container can be created by setting the `display `property of an element to either flex (generate block-level flex container) or inline-flex (generate an inline flex container similar to inline-block). All child elements of flex container automatically become flex items and are laid out using the flex layout model. The float, clear, and vertical-align properties have no effect on flex items.

Flex items are positioned inside a flex container along a flex line controlled by the flex-direction property. By default, there is only one flex line per flex container which has the same orientation as the inline axis of the current writing mode or text direction.

The following illustration will help you to understand the flex layout terminology.

![illustration](https://www.tutorialrepublic.com/lib/images/flexbox-illustration.png)

---

### Flex Container Properties

The following table lists the most commonly used flex container properties.

| Property        | Description                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------- |
| display         | Specifies the type of flex container.                                                                               |
| flex-direction  | Specifies the direction of the main axis.                                                                           |
| flex-wrap       | Specifies whether the flex items should wrap or not.                                                                |
| flex-flow       | A shorthand property for the flex-direction and flex-wrap properties.                                               |
| justify-content | Specifies the alignment along the main axis.                                                                        |
| align-items     | Specifies the alignment along the cross axis.                                                                       |
| align-content   | Specifies the alignment along the cross axis when there is extra space in the cross-axis.                           |
| order           | Specifies the order of the flex items.                                                                              |
| flex-grow       | Specifies how much the flex item will grow relative to the rest of the flex items inside the same flex container.   |
| flex-shrink     | Specifies how much the flex item will shrink relative to the rest of the flex items inside the same flex container. |
| flex-basis      | Specifies the initial length of a flexible item.                                                                    |
| flex            | A shorthand property for the flex-grow, flex-shrink, and flex-basis properties.                                     |

### Controlling the Dimensions of Flex Items

The most important aspect of the flex layout is the ability of flex items to alter their width or height to fill the available space. This is achieved with the flex property. It is shorthand property for flex-grow, flex-shrink and flex-basis properties.

`Example`

```css
.flex-container {
  width: 80%;
  min-height: 300px;
  display: -webkit-flex; /* Safari */
  display: flex; /* Standard syntax */
}
.flex-container div {
  padding: 10px;
  background: #dbdfe5;
}
.item1,
.item3 {
  -webkit-flex: 1; /* Safari */
  flex: 1; /* Standard syntax */
}
.item2 {
  -webkit-flex: 2; /* Safari */
  flex: 2; /* Standard syntax */
}
```

> **Note:** Note: It is strongly recommended to use the shorthand rather than the individual flex properties because it resets unspecified components correctly.

---

### Aligning Flex Items within Flex Containers

There are four properties justify-content, `align-content`, `align-items` and `align-self` which are designed to control the alignment of flex items within flex container. The first three of them apply to flex containers whereas the last one applies to the individual flex items.

### Align Flex Items along Main Axis

Flex items can be aligned along the main axis (i.e. in the horizontal direction) of the flex container using the `justify-content` property. It is typically used when the flex items do not use all the space available along the main axis.

The justify-content property accepts the following values:

- **`flex-start`** — Default value. Flex items are placed at the start of the main axis.
- **`flex-end`** — Flex items are placed at the end of the main axis.
- **`center`** — Flex items are placed at the center of the main axis with equal amounts of free space at both ends. If the leftover free-space is negative i.e. if the items overflow, then the flex items will overflow equally in both directions.
- **`space-between`** — Flex items are distributed evenly along the main axis, where the first item placed at the main-start edge and the last one placed at the main-end. If items overflow or there's only one item, this value is equal to flex-start.
- **`space-around`** — Flex items are distributed evenly with half-size spaces on either end. If they overflow or there's only one item, this value is identical to center.

```css
.flex-container {
  width: 500px;
  min-height: 300px;
  border: 1px solid #666;
  /* Safari */
  display: -webkit-flex;
  -webkit-justify-content: space-around;
  /* Standard syntax */
  display: flex;
  justify-content: space-around;
}
.item1 {
  width: 75px;
  background: #e84d51;
}
.item2 {
  width: 125px;
  background: #7ed636;
}
.item3 {
  width: 175px;
  background: #2f97ff;
}
```

---

### Align flex Item along Cross Axis

lex items can be aligned along the cross axis (i.e. in the perpendicular direction) of the flex container using the align-items or align-self property. However, where the align-items is applied to the flex container, the align-self property is applied to the individual flex items, and overrides align-items. Both properties accept the following values:

- **`flex-start`** — Flex items are placed at the start of the cross axis.
- **`flex-end`** — Flex items are placed at the end of the cross axis.
- **`center`** — Flex items are placed at the center of the cross axis with equal amounts of free space at both ends. If the leftover free-space is negative i.e. if the items overflow, then the flex items will overflow equally in both directions.
- **`baseline`** — The text baseline (or inline axis) of each flex item is aligned with the baseline of the flex item with the largest font-size.
- **`stretch`** — The flex item stretches to fill the current row or column unless prevented by the minimum and maximum width or height. Default value for align-items property.

```css
.flex-container {
  width: 500px;
  min-height: 300px;
  border: 1px solid #666;
  /* Safari */
  display: -webkit-flex;
  -webkit-align-items: center;
  /* Standard syntax */
  display: flex;
  align-items: center;
}
.item1 {
  width: 75px;
  height: 100px;
  background: #e84d51;
}
.item2 {
  width: 125px;
  height: 200px;
  background: #7ed636;
}
.item3 {
  width: 175px;
  height: 150px;
  background: #2f97ff;
}
```

---

### Reordering Individual Flex Items

his property accepts positive or negative integer as value. By default, all flex items are displayed and laid out in the same order as they appear in the HTML markup as the default value of order is 0.

```css
.flex-container {
  width: 500px;
  min-height: 300px;
  border: 1px solid #666;
  display: -webkit-flex; /* Safari 6.1+ */
  display: flex;
}
.flex-container div {
  padding: 10px;
  width: 130px;
}
.item1 {
  background: #e84d51;
  -webkit-order: 2; /* Safari 6.1+ */
  order: 2;
}
.item2 {
  background: #7ed636;
  -webkit-order: 1; /* Safari 6.1+ */
  order: 1;
}
.item3 {
  background: #2f97ff;
  -webkit-order: -1; /* Safari 6.1+ */
  order: -1;
}
```

> **Note:** Flex item with the lowest order value laid out first, whereas the item with highest order value laid out at the end. Items with the same order value are displayed in the same order a they appear in the source document.

---

### Horizontal and Vertical Center Alignment with Flexbox

Normally vertical alignment of a content block involves the use of JavaScript or some ugly CSS tricks. But with flexbox you can easily do this without any adjustments.

```css
.flex-container {
  width: 500px;
  min-height: 300px;
  border: 1px solid #666;
  display: -webkit-flex; /* Safari 6.1+ */
  display: flex; /* Standard syntax */
}
.item {
  width: 300px;
  padding: 25px;
  margin: auto;
  background: #f0e68c;
}
```

---

### Enable Wrapping of Flex Items

By default, flex containers display only a single row or column of flex items. However, you can use the `flex-wrap` property on the flex container to control whether its flex items will wrap into multiple lines or not, if there is not sufficient space for them on one flex line.

The flex-wrap property accept the following values:

- **`nowrap`** — Default value. The flex items are placed in a single line. It may cause overflow, if there is not enough space on the flex line.
- **`wrap`**— The flex container breaks its flex items across multiple lines, similar to how text is broken onto a new line when it is too wide to fit on the current line.
- **`wrap-reverse`** — The flex items will wrap, if necessary, but in reverse order i.e. the cross-start and cross-end directions are swapped.

```css
.flex-container {
  width: 500px;
  min-height: 300px;
  border: 1px solid #666;
  /* Safari */
  display: -webkit-flex;
  -webkit-flex-wrap: wrap;
  /* Standard syntax */
  display: flex;
  flex-wrap: wrap;
}
.flex-container div {
  width: 130px;
  padding: 10px;
  background: #dbdfe5;
}
```

> **Note:** You can also use the shorthand CSS property flex-flow for setting both the flex-direction and flex-wrap in a single declaration. It accepts the same values as the individual properties and the values can be in any order.

---

An illustration of how flex actually looks like is as follows:

![Flex illustration](https://i.stack.imgur.com/Xritm.gif)

--
