### Style Page Content

In this section, we'll be looking at controlling page and element styling using the following properties and methods:

- `.style.<prop>`
- `.cssText()`
- `.setAttribute()`
- `.className`
- `.classList`

Before we begin, put these in the correct order of CSS specificity. Put the least-specific option at the top and the most-specific option at the bottom.

<table>
    <tr>
        <th>LEVEL OF SPECIFICITY</th>
        <th>CSS RULE</th>
    </tr>
    <tr>
        <td>Least specific</td>
        <td>rules in a stylesheet</td>
    </tr>
        <td>More specific</td>
        <td>rules in a &ltstyle&gt tag</td>
    <tr>
        <td>Most specific</td>
        <td>rules in a tag's style attribute</td>
    </tr>
</table>

> Basically, the closer the style rule is to an element, the more specific it is. For example, a rule in a style attribute on an element will override a style rule for that element in a CSS stylesheet. There is also the specificity of the type of selector being used. An _ID_ is more specific than a class.

#### Modifying an Element's Style Attribute

Let's jump back to your knowledge of CSS. When trying to style an element, the most-specific rules that you can write for an element are written in that element's `style` attribute. Lucky for us, we can access access an element's `style` attribute using the `.style` property!

```js
const mainHeading = document.querySelector("h1");

mainHeading.style.color = "red";
```

Now, I want to point out that when using the `.style` property, you can only modify one CSS style at a time. That's why the previous code has `.style.color = 'red'` and not just `.style = 'red'`.

#### Adding Multiple Styles At Once

We've seen how the `.style.<property>` syntax will let us change just one piece of styling for an element. So if we wanted to set an element's color, background color, and font size, we'd have to use three separate lines of code:

```js
const mainHeading = document.querySelector("h1");

mainHeading.style.color = "blue";
mainHeading.style.backgroundColor = "orange";
mainHeading.style.fontSize = "3.5em";
```

...and that's just for setting three styles. Imagine if we needed 15 or 20 different styles! So the `.style.property` syntax is perfect for setting one style at a time, but it's not great for controlling multiple styles.

Fortunately, we can use the `.style.cssText` property to set multiple CSS styles at once!

```js
const mainHeading = document.querySelector("h1");

mainHeading.style.cssText =
  "color: blue; background-color: orange; font-size: 3.5em";
```

Notice that when using the `.style.cssText` property, you write the CSS styles just as you would in a stylesheet; so you write `font-size` rather than `fontSize`. This is different than using the individual `.style.<property>` way.

#### Setting An Element's Attributes

Another way to set styles for an element is to bypass the `.style.<property>` and `.style.cssText` properties altogether and use the `.setAttribute()` method:

```js
const mainHeading = document.querySelector("h1");

mainHeading.setAttribute(
  "style",
  "color: blue; background-color: orange; font-size: 3.5em;"
);
```

The `setAttribute()` method is not just for styling page elements. You can use this method to set any attribute for an element. If you want to give an element an ID, you can do that!:

```js
const mainHeading = document.querySelector("h1");

// add an ID to the heading's sibling element
mainHeading.nextElementSibling.setAttribute("id", "heading-sibling");

// use the newly added ID to access that element
document.querySelector("#heading-sibling").style.backgroundColor = "red";
```

#### Accessing an Element's Classes

The first element property we'll look at is the `.className` property. This property returns a string of all of the element's classes. If an element has the following HTML:

```html
<h1 id="main-heading" class="ank-student jpk-modal">
  Learn Web Development at Udacity
</h1>
```

We could use .className to access the list of classes:

```js
const mainHeading = document.querySelector("#main-heading");

// store the list of classes in a variable
const listOfClasses = mainHeading.className;

// logs out the string "ank-student jpk-modal"
console.log(listOfClasses);
```

The `.className` property returns a space-separated string of the classes. This isn't the most ideal format, unfortunately. We can, however, convert this space-separated string into an array using the JavaScript string method, `.split()`:

```js
const arrayOfClasses = listOfClasses.split(" ");

// logs out the array of strings ["ank-student", "jpk-modal"]
console.log(arrayOfClasses);
```

Now that we have an array of classes, we can do any data-intensive calculations:

- use a for loop to loop through the list of class names
- use `.push()` to add an item to the list
- use `.pop()` to remove an item from the list

`.className` is a property, so we can set its value just by assigning a string to the property:

```js
mainHeading.className = "im-the-new-class";
```

The above code erases any classes that were originally in the element's `class` attribute and replaces it with the single class `im-the-new-class`.

Since `.className` returns a string, it makes it hard to add or remove individual classes. As I mentioned earlier, we can convert the string to an array and then use different Array Methods to search for a class remove it from the list, and then update the `.className` with the remaining classes. However, we don't want to do all of that work! Let's use the newer `.classList` property.

#### The `.classList` Property

The `.classList` property is newer than the `.className` property, but is much nicer, check it out:

```html
<h1 id="main-heading" class="ank-student jpk-modal">
  Learn Web Development at Udacity
</h1>
```

```js
const mainHeading = document.querySelector("#main-heading");

// store the list of classes in a variable
const listOfClasses = mainHeading.classList;

// logs out ["ank-student", "jpk-modal"]
console.log(listOfClasses);
```

The `.classList` property has a number of properties of its own. Some of the most popularly used ones are:

- `.add()` - to add a class to the list
- `.remove()` - to remove a class from the list
- `.toggle()` - to add the class if it doesn't exists or remove it from the list if it does already exist
- `.contains()` - returns returns a boolean based on if the class exists in the list or not

#### Style Page Content Recap

We learned a ton of content in this section! We looked at:

- modifying individual styles with `.style.<prop>`
- updating multiple styles at once with `.style.cssText`
- getting/setting a list of classes with `.className`
- getting/setting/toggling CSS classes with `.classList`

My recommendation to you is that, out of the list of techniques you learned in this section, to use the `.classList` property more than any other. `.classList` is by far the **most helpful** property of the bunch, and it helps to keep your CSS styling out of your JavaScript code.

<a id="lesson2-lesson-summary"></a>

### Lesson summary

- Update page content
- Add new content
- Remove content
- Style content
