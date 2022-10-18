# CSS Cursors

- **objective:** CSS cursor property used to define cursor type (i.e. mouse pointer) when the mouse moves over a certain area or, over a link on the webpage.

### Changing the Look of Cursor
The browsers typically display the mouse pointer over any blank part of a web page, the gloved hand over any linked or clickable item and the edit cursor over any text or text field. With CSS you can redefine those properties to display a variety of different cursors.

`Example`
```css
h1 {
    cursor: move;
}
p {
    cursor: text;
}
```
The table below demonstrates the different cursors that most browsers will accept.

| Look                                                                                     |    Values        | Example                                       
| --------------------------------------------------------------------------------------   | ----------- | --------------------------------------------- 
|  |
| ![Default Cursor](https://www.tutorialrepublic.com/lib/images/cursors/default.gif)     | `default`   | `a:hover{cursor:default;}`                   
| ![Pointer Cursor](https://www.tutorialrepublic.com/lib/images/cursors/pointer.gif)     | `pointer`   | `a:hover{cursor:pointer;}`                   
| ![Text Cursor](https://www.tutorialrepublic.com/lib/images/cursors/text.gif)           | `text`      | `a:hover{cursor:text;}`                       
| ![Wait Cursor](https://www.tutorialrepublic.com/lib/images/cursors/wait.gif)           | `wait`      | `a:hover{cursor:wait;}`                       
| ![Help Cursor](https://www.tutorialrepublic.com/lib/images/cursors/help.gif)           | `help`      | `a:hover{cursor:help;}`                       
| ![Progress Cursor](https://www.tutorialrepublic.com/lib/images/cursors/progress.gif)   | `progress`  | `a:hover{cursor:progress;}`                   
| ![Crosshair Cursor](https://www.tutorialrepublic.com/lib/images/cursors/crosshair.gif) | `crosshair` | `a:hover{cursor:crosshair;}`                  
| ![Move Cursor](https://www.tutorialrepublic.com/lib/images/cursors/move.gif)           | `move`      | `a:hover{cursor:move;}`                       
| ![Custom Cursor](https://www.tutorialrepublic.com/lib/images/cursors/custom.gif)       | `url()`     | `a:hover{cursor:url("custom.cur"), default;}` 

---
### Creating Customized Cursor 
The cursor property handles a comma-separated list of user-defined cursors values followed by the generic cursor. If the first cursor is specified incorrectly or can't be found, the next cursor in the comma-separated list will be used, and so on until a usable cursor is found.

> **Note:** The standard format that can be used for cursors is the `.cur` format. However, you can convert images such as `.jpg` and `.gif` into .cur format using the image converter software freely available online.

`Example`
```css
a {
    cursor: url("custom.gif"), url("custom.cur"), default;
}
```

> `**Warning:** If you are declaring a custom cursor, you must define a generic cursor at the end of the list, otherwise the custom cursor will not render correctly.`

---