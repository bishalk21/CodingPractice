# CSS Media Types
- **Objective:** CSS media types allow you to format your documents to be presented correctly on various types of media such as screen, print, an aural browser, etc.

### Introduction
The `@media` rule, introduced in CSS2, made it possible to define different style rules for different media types.

Unfortunately these media types never got a lot of support by devices, other than the print media type.

Media queries in CSS3 extended the CSS2 media types idea: Instead of looking for a type of device, they look at the capability of the device.

Media queries can be used to check many things, such as:

- width and height of the 
- viewport
- width and height of the device
- orientation (is the tablet/phone in landscape or portrait mode?)
- resolution

Using media queries are a popular technique for delivering a tailored style sheet to desktops, laptops, tablets, and mobile phones (such as iPhone and Android phones).

### Media Query Syntax
A media query consists of a media type and can contain one or more expressions, which resolve to either true or false.

`@media not|only media-type and (expressions) {
  CSS-Code;
}`

The result of the query is true if the specified media type matches the type of device the document is being displayed on and all expressions in the media query are true. When a media query is true, the corresponding style sheet or style rules are applied, following the normal cascading rules.

Unless you use the not or only operators, the media type is optional and the all type will be implied.

You can also have different stylesheets for different media:

```html
<link rel="stylesheet" media="mediatype and|not|only (expressions)" href="print.css">
```
---
### Creating Media Dependent Style Sheets
Three methods are commonly used to specify the media dependencies for style sheets:

### Method 1: Using the @media At rules

The `@media` rule is used to define different style rules for different media types in a single style sheet. It is usually followed by a comma-separated list of media types and the CSS declarations block containing the styles rules for target media.

`Example`
```css
@media screen{
    body {
        color: #32cd32;
        font-family: Arial, sans-serif;
        font-size: 14px;
    }
}
@media print {
    body {
        color: #ff6347;
        font-family: Times, serif;
        font-size: 12pt;
    }
}
@media screen, print {
    body {
        line-height: 1.2;
    }
}
```
> **Note:** Style rules outside of @media rules apply to all media types that the style sheet applies to. At-rules inside @media are invalid in CSS2.1.
---
### Method 2: Using the @import At-rules
The `@import` rule is another way of setting style information for a specific target media — Just specify the comma-separated media types after the URL of the imported style sheets.

`Example`
```css
@import url("css/screen.css") screen;
@import url("css/print.css") print;
body {
    background: #f5f5f5;
    line-height: 1.2;
}
```
The print media type in the `@import` statement instructs the browser to load an external style sheet (print.css) and use its styles only for print media.

>**Note:** All `@import` statements must occur at the beginning of a style sheet, before any declarations. Any style rule specified in the style sheet itself override the conflicting style rules in the imported style sheets.
---
### Method 3: Using the \<link> element.
The **media** attribute on the \<link> element is used to specify the target media for an external style sheet within the HTML document.

`Example`
```css
<link rel="stylesheet" media="all" href="css/common.css">
<link rel="stylesheet" media="screen" href="css/screen.css">
<link rel="stylesheet" media="print" href="css/print.css">
```
> **Tip:** You can also specify multiple media types (each separated with comma e.g. media="screen, print") as well as media quires to the \<link> element.
---
### Different Media Types
The following table lists the various media types that may used to target different types of devices such as printers, handheld devices, computer screens etc.

| Media Type   | Description                                                                                                                              |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
|  |
| `all`        | Used for all media type devices.                                                                                                         |
| `aural`      | Used for speech and sound synthesizers.                                                                                                  |
| `braille`    | Used for braille tactile feedback devices.                                                                                               |
| `embossed`   | Used for paged braille printers.                                                                                                         |
| `handheld`   | Used for small or handheld devices — usually small screen devices such as mobile phones or PDAs.                                         |
| `print`      | Used for printers.                                                                                                                       |
| `projection` | Used for projected presentations, for example projectors.                                                                                |
| `screen`     | Used primarily for color computer screens.                                                                                               |
| `tty`        | Used for media using a fixed-pitch character grid — such as teletypes, terminals, or portable devices with limited display capabilities. |
| `tv`         | Used for television-type devices — low resolution, color, limited-scrollability screens, sound available.                                |

---
> `**Warning:** However there are several media types to choose from but most of the browser only support all, screen and print media types.`
---