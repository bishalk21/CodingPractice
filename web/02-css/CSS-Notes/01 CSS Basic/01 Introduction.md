# CSS Introduction

- **Objective:** learn the technology that is used in website design.

**CSS** stands for Cascading Style Sheets

- CSS describes **how HTML elements are displayed on screen or any media.**
- CSS **saves a lot of work** It can control the layout of multiple web pages all at once.
- External stylesheets are stored in **CSS files**

> **Note:** CSS was introduced in 1996 by the World Wide Web Consortium (W3C), which also maintains its standards.
>
> - CSS3 is the latest version of the CSS specification. CSS3 adds several new styling features and improvements to enhance the web presentation capabilities.

## Getting Started

the way to add style and formatting information to the webpages is easiest using CSS

### Including CSS in HTML Documents

CSS can either be attached as a separate document or embedded in the HTML document itself. There are three methods of including CSS in an HTML document:

- **Inline styles:** Using `style` attribute in the HTML start tag.
- **Embedded styles:** Using the `<style>` element in the head section of a document.
- **External style sheets:** Using the `<link>` element, pointing to an external CSS file.

> **Note:** The inline styles have the highest priority, and the external style sheets have the lowest. It means if you specify styles for an element in both _embedded_ and _external_ style sheets, the conflicting style rules in the embedded style sheet would override the external style sheet.

### Inline Styles

Inline styles are used to apply the unique style rules to an element by putting the CSS rules directly into the start tag. It can be attached to an element using the `style` attribute.

The `style` attribute includes a series of CSS property and value pairs. Each `"property: value"` pair is separated by a semicolon (`;`), just as you would write into an embedded or external style sheets. But it needs to be all in one line i.e. no line break after the semicolon.

```html
<!-- Inline Styles -->
<h1 style="color:red; font-size:30px;">This is a heading</h1>
<p style="color:green; font-size:22px;">This is a paragraph.</p>
```

> **Note:** Using _external style sheets_ is the preferred way to add styles to the HTML documents. As with external style sheets, the affected HTML file require minimal changes in the markup.

---

### Embedded Style Sheets

Embedded or internal style sheets only affect the document they are embedded in.

Embedded style sheets are defined in the `<head>` section of an HTML document using the `<style>` element. You can define any number of `<style>` elements in an HTML document but they must appear between the `<head>` and `</head>` tags.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My HTML Document</title>

    <!--Embedded Styles-->
    <style>
      body {
        background-color: YellowGreen;
      }
      p {
        color: #fff;
      }
    </style>
    <!--Embedded Styles end here-->
  </head>
  <body>
    <h1>This is a heading</h1>
    <p>This is a paragraph of text.</p>
  </body>
</html>
```

---

### External Style Sheets

An external style sheet is ideal when the style is applied to many pages of the website.

An external style sheet holds all the style rules in a separate document that you can link from any HTML file on your site. External style sheets are the most flexible because with an external style sheet, you can change the look of an entire website by changing just one file.

You can attach external style sheets in two ways — _linking_ and _importing_.

#### Linking External Style Sheets

An external style sheet can be linked to an HTML document using the `<link>` tag. The `<link>` tag goes inside the `<head>` section.

`External Style Sheet `

```css
body {
  background: #ffffe0;
  font: 18px Arial, sans-serif;
}
h1 {
  color: orange;
}
```

`HTML Document Linked with External Style Sheet`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My HTML Document</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <h1>This is a heading</h1>
    <p>This is a paragraph of text.</p>
  </body>
</html>
```

#### Importing External Style Sheets

The `@`import rule is another way of loading an external style sheet. The @import statement instructs the browser to load an external style sheet and use its styles.

You can use it in two ways:

- The simplest one is within the header of your document. (include in the `<style>` element)
- You can use the `@import` rule to import a style sheet within another style sheet.

`Importing External Style Sheet`

```css
<style>
    @import url("css/style.css");
    p {
        color: #0000ff ;
        font-size: 16px;
    }
</style>
```

`Importing a Style Sheet within another Style Sheet`

```css
@import url("css/layout.css");
@import url("css/color.css");
body {
  color: blue;
  font-size: 14px;
}
```

> **Note:** All `@import` rules must occur at the start of the style sheet. Any style rule defined in the style sheet itself overrides the conflicting rules in the imported style sheets. However, importing a style sheet within another style sheet is not recommended due to performance issue.

---
