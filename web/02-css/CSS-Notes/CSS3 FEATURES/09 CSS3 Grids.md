# CSS Grids

- Grids are a layout system that allow you to create complex layouts with ease.
- Grids are a 2 dimensional layout system.

# CSS Grids vs Flexbox

| Flexbox                                | Grids                                     |
| -------------------------------------- | ----------------------------------------- |
| 1 Dimensional                          | 2 Dimensional                             |
| Horizontal or Vertical                 | Horizontal and Vertical                   |
| Rows or Columns                        | Rows and Columns                          |
| can be used for a single row or column | can be used for multiple rows and columns |

## CSS Grids Layout

A grid is a collection of horizontal and vertical lines that divide the page into a series of cells. The grid is used to position elements on the page.

A grid will typically have columns and rows. The columns and rows are used to position elements on the page. The columns and rows are called tracks. The gaps between the columns and rows are called gutters.

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
}
```

### Flexible Grids with the fr unit

The fr unit is a flexible length unit. It is used to create flexible grids. The fr unit is a fraction of the available space in the grid container.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}
```

### Gaps between tracks

Gaps are the spaces between the columns and rows. The gap property is used to set the size of the gaps between the tracks.

Note: grid-gap is a shorthand property for grid-row-gap and grid-column-gap.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px;
  grid-gap: 10px;
}
```

### Repeating tracks with the repeat() function

The repeat() function is used to repeat tracks. The repeat() function takes two arguments. The first argument is the number of times to repeat the tracks. The second argument is the size of the tracks.

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  grid-gap: 10px;
}
```

### implicit and explicit tracks

The tracks that are created by the grid-template-columns and grid-template-rows properties are called explicit tracks.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px;
  grid-gap: 10px;
}
```

The tracks that are created by the repeat() function are called implicit tracks.

    ```css
    .container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
      gap: 10px;
      grid-gap: 10px;
    }
    ```

### Minmax() function

The minmax() function is used to set the minimum and maximum size of a track. The minmax() function takes two arguments. The first argument is the minimum size of the track. The second argument is the maximum size of the track.

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  grid-template-rows: repeat(3, minmax(100px, 1fr));
  gap: 10px;
  grid-gap: 10px;
}
```

### auto-fit and auto-fill

The auto-fit and auto-fill keywords are used to create flexible grids. The auto-fit keyword will create as many tracks as possible. The auto-fill keyword will create as many tracks as needed.

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
  grid-gap: 10px;
}
```

### Grids with named lines or Lines Placement

Lines-based placement is used to position elements on the grid. The grid-template-columns and grid-template-rows properties are used to create named lines. The grid-column and grid-row properties are used to position elements on the grid.

```css
.container {
  display: grid;
  grid-template-columns: [col1-start] 100px [col1-end col2-start] 100px [col2-end col3-start] 100px [col3-end];
  grid-template-rows: [row1-start] 100px [row1-end row2-start] 100px [row2-end row3-start] 100px [row3-end];
}

.item1 {
  grid-column: col1-start / col2-end;
  grid-row: row1-start / row2-end;
}

.item2 {
  grid-column-start: col2-start;
  grid-column-end: col3-end;
  grid-row-start: row2-start;
  grid-row-end: row3-end;
}
```

### Positioning with grid-template-areas

The grid-template-areas property is used to create named areas. The grid-area property is used to position elements on the grid.

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-template-areas:
    "header header header"
    "main main sidebar"
    "footer footer footer";
}

.header {
  grid-area: header;
}

.main {
  grid-area: main;
}

.sidebar {
  grid-area: sidebar;
}

.footer {
  grid-area: footer;
}
```
