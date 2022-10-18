# CSS Syntax 

- **Objective:** learn how to define CSS rules in your stylesheet.

### Understanding CSS Syntax
A CSS stylesheet consists of a set of rules that are interpreted by the web browser and then applied to the corresponding elements in the document.

A CSS rule have two main parts, a selector and one or more declarations:
![CSS-Syntax-declaration](https://www.tutorialrepublic.com/lib/images/css-selector.png "This is how CSS syntax looks like. ")

The selector points to the HTML element you want to style.

The declaration block contains one or more declarations separated by semicolons.

Each declaration includes a CSS property name and a value, separated by a colon.

Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.

> **Note:** A CSS declaration always ends with a semicolon `";"` and the declaration groups are always surrounded by the curly brackets `"{}"`.
---

### Writing Comments in CSS
Comments are usually added with the purpose of making the source code easier to understand. 

Comments are significant to programmers but ignored by browsers.

A CSS comment begins with `/*`, and ends with `*/`
an example would look like this :
```css
 Example : 1       /* this is how you comment in CSS */

 Example : 2   /*
                 p {
                font-size: 18px;
                text-transform: uppercase;  
                }
                */
```

You can also comment out part of your CSS code for debugging purpose.

---
### Case Sensitivity in CSS
CSS property names and many values are not case-sensitive. Whereas, CSS selectors are usually case-sensitive, for instance, the class selector `.maincontent `is not the same as `.mainContent`.

Therefore, to be on safer side, you should assume that all components of CSS rules are case-sensitive.

---