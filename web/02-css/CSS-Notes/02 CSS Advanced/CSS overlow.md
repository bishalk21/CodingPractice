# CSS Overflow

- **Objective:** The overflow property specifies the behavior that occurs when an element's content overflows (doesn't fit) the element's box.

### Handling Overflowing Content
There may be a situation when the content of an element might be larger than the dimensions of the box itself. For example given width and height properties did not allow enough room to accommodate the content of the element.

CSS overflow property allowing you to specify whether to clip content, render scroll bars or display overflow content of a block-level element.

This property can take one of the following values: `visible` (default), `hidden`, `scroll`, and `auto`. CSS3 also defines the `overflow-x` and `overflow-y` properties which allow for independent control of the vertical and horizontal clipping.

`Example`
```css
div {
    width: 250px;
    height: 150px;
    overflow: scroll;
}
```
| Value     | Description                                                                                                                                               |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  |
| `visible` | The default value. Content is not clipped; it will be rendered outside the element's box, and may thus overlap other content.                             |
| `hidden`  | Content that overflows the element's box is clipped and the rest of the content will be invisible.                                                        |
| `scroll`  | The overflowing content is clipped, just like hidden, but provides a scrolling mechanism to access the overflowed content.                                |
| `auto`    | If content overflows the element's box it will automatically provides the scrollbars to see the rest of the content, otherwise scrollbar will not appear. |

---