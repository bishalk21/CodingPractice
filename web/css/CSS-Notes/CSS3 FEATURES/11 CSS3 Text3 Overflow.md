# CSS3 Text Overflow
- **Objective:** CSS3 new text properties provide more control over the text rendering.

### Handling Overflow Text
Text can overflow, when it is prevented from wrapping, for example, if the value of white-space property is set to nowrap for the containing element or a single word is too long to fit like a long email address. In such situation you can use the CSS3 text-overflow property to determine how the overflowed text content will be displayed.

`Example`
```css
p {
    width: 400px;
    overflow: hidden;
    white-space: nowrap;
    background: #cdcdcd;
}
p.clipped {
    text-overflow: clip; /* clipped the overflowed text */
}
p.ellipses {
    text-overflow: ellipsis; /* display '…' to represent clipped text */
}
```
> **Note:** The string value for the text-overflow property is not supported in most of the web browsers, you should better avoid this.

---
### Breaking Overflow Text
You can also break a long word and force it to wrap onto a new line that overflows the boundaries of containing element using the CSS3 word-wrap property.

`Example`
```css
p {
    width: 200px;
    background: #ffc4ff;
    word-wrap: break-word;
}
```
---
### Specifying Word Breaking Rules
You can also specify the line breaking rules for the text (i.e. how to break lines within words) yourself using the CSS3 word-break property.

`Example`
```css
p {
    width: 150px;
    padding: 10px;
}
p.break {
    background: #bedb8b;
    word-break: break-all;
}
p.keep {
    background: #f09bbb;
    word-break: keep-all;
}
```
---