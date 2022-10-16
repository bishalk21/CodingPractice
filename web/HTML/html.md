# Internet and HTML

[DNS](#dns) <br>
[IP Addresses](#ip-addresses) <br>
[Understand how the browser works](#understand-how-the-browser-works) <br>
[Rendering](#rendering) <br>
[Browsers](#browser) <br>
[Parsing](#parsing) <br>
[Rendering](#rendering) <br>
[HTML](###html) <br>
[HyperText](#hypertext) <br>
[Markup](#markup) <br>
[SEO](#seo) <br>
[Meta](#meta) <br>
[HTML Elements](#html-elements) <br>
[Semantic HTML](#semantic-html) <br>
[HTML Comment](#html-comment) <br>
[IDS](#ids)<br>
[Favicon](#favicon)<br>
[Resource Hint: dns-prefetch, prefetch, prerender](#resource-hint-dns-prefetch-prefetch-prerender)<br>
[HTML Input Control Elements](#html-input-control-elements)<br>
[SVG](#svg)<br>
[Canvas](#canvas)<br>
[Marking up computer code](#marking-up-computer-code)<br>
[Tabindex](#tabindex)<br>
[Global Attributes](#global-attributes)<br>
[HTML 5 Cache](#html-5-cache)<br>
[HTML Event Attributes](#html-event-attributes)<br>
[HTML Table](#html-table)<br>
[HTML Form](#html-form)<br>
[HTML Form Events](##html-form-events)<br>
[HTML Keyboard Events](##html-keyboard-events)<br>
[ARIA Attributes](#aria)<br>
[12 Column Grid Responsive Design or layout](#12-column-grid-responsive-design-or-layout)<br>
[HTML URL Encode](#html-url-encode)<br>
[HTML URL Decode](#html-url-decode)<br>

Learn the anatomy of HTML syntax to structure your websites. <br>
Understand the HTML boilerplate and HTML doctypes. <br>
How to structure text in HTML. <br>
How to structure HTML lists to create unordered and ordered lists. <br>
How to insert images using HTML and how to use the HTML image tag. <br>
How to create hyperlinks using anchor tags. <br>
Understand how to use HTML tables for content. <br>
How to use tables for layout. <br>
Learn HTML best practices. <br>
Understand about HTML forms and create a simple contact me form. <br>
HTML Divs and how to separate content for CSS styling and JavaScript. <br>

### HTML

- Best Practice - URL=https://htmlcheatsheet.com/
- https://htmlcheatsheet.com/
- https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf
- https://docs.emmet.io/cheat-sheet/
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
- https://codepen.io/
- https://archive.org/web/
- https://www.fileformat.info/info/charset/UTF-8/list.htm
- https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/

# What is HTML?

- stands for HyperText Markup Language
- is a markup language used to create web pages
- describes the structure of a Web page
- is composed of HTML elements
- is not case sensitive

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <p>lorem ipsum</p>
  </body>
</html>
```

# HyperText

- a text that is displayed on a computer or other electronic device with references (hyperlinks) to other text that the reader can immediately access.

```html
<a href="https://www.w3schools.com">This is a link</a>
```

# Markup

- A markup language is a computer language that defines the structure and presentation of raw text.
- Markup languages are used to annotate a document in a way that is syntactically distinguishable from the text, and can assign semantic meaning to the text.

```html
<p>This is a paragraph.</p>
```

# HTML Elements

- a tag and content between the tags is called an HTML element
- a unit of content in an HTML document formed by a start tag, some content, and an end tag
- HTML elements are the building blocks of HTML pages
- HTML elements tell the browser how to display the content

```html
<p>This is a paragraph</p>
```

# Foundation of HTML Elements

- tags
- attributes
- content

# Structure of an HTML Document

- Html is organized as a collection of family tree relationships.
- if an element is inside another element, it is a child of that element. The child element is nested inside of the parent element.
- the relationship between elements and their children is called the DOM (Document Object Model).
- the relationship between elements and their ancestors and descendant elements is known as hierarchical relationships or parent-child relationships.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First HTML Page</title>
  </head>
  <body>
    <h1>This is my first HTML page</h1>
    <p>This is my first paragraph.</p>
  </body>
</html>
```

# HTML Comment - HTML comments are used to add a description to the HTML

code - HTML comments are not displayed on the page, but they are read by the
browser -

<!---->

# Tags - the HTML element name, surrounded by opening and closing angle brackets

- tags are used to create HTML elements - tags are always surrounded by a start
  and end tag

```html
<p>This is a paragraph</p>
```

# Opening Tag

- first html tag used to start an element

```html
<p></p>
```

# Content

- the information between the start and end tag
- content is the text that is displayed within the HTML element

```html
<p>This is a paragraph</p>
```

# Closing Tag

- the second html tag used to end an element
- have a forward slash before the tag name

````html
```html
<p></p>
````

# HTML Attributes

- attributes specify the HTML element's properties
- attributes are specified within the opening tag
- attributes are separated from the tag by an equals sign (=)
- made up of two parts: a name and a value, separated by an equals sign
- the value is placed inside double quotes

```html
<p style="color: red;">This is a paragraph</p>
```

| Attribute | Description                                                                                                 |
| --------- | ----------------------------------------------------------------------------------------------------------- |
| id        | Specifies a unique id for an HTML element (the value must be unique within the HTML document)               |
| class     | Specifies one or more class names for an HTML element (refers to a class in a style sheet)                  |
| style     | Specifies an inline CSS style for an HTML element                                                           |
| title     | Specifies extra information about an element (displayed as a tooltip when the mouse moves over the element) |

# Semantic HTML

- relating to meaning in language or logic
- semantic elements clearly describes its meaning to the developer and browser
- Semantic HTML elements are easy to read and understand
- address element indicates that the content is a contact information

| Semantic Element | Description                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------- |
| address          | Specifies contact information for the author/owner of a document or an article              |
| article          | Specifies independent, self-contained content                                               |
| aside            | Specifies content aside from the page content                                               |
| details          | Specifies additional details that the user can view or hide                                 |
| dialog           | Specifies a dialog box or window                                                            |
| figcaption       | Specifies a caption for a figure element                                                    |
| figure           | Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc. |
| footer           | Specifies a footer for a document or section                                                |
| header           | Specifies a header for a document or section                                                |
| main             | Specifies the main content of a document                                                    |
| mark             | Specifies marked/highlighted text                                                           |
| menuitem         | Defines a command/menu item that the user can invoke from a popup menu                      |
| nav              | Specifies navigation links                                                                  |
| section          | Specifies a section in a document                                                           |
| summary          | Defines a visible heading for a details element                                             |

Q. Why is Semantic HTML important?

- Accessibility: screen readers can use semantic HTML to determine the structure of a page
- SEO: search engines can use semantic HTML to determine the structure of a page
- Readability: semantic HTML is easier to read and understand

* For indexing the structure and content of your web pages, search engines use semantic HTML and HTML elements that are meaningful.

# SEO

# What is SEO?

- Search Engine Optimization
- Search Engine Optimization is the process of making sure that your website is indexed by search engines and that it is displayed on the top of search results.
- process of optimizing the content of a website for search engines

# DOCTYPE - Declaration of the Document Type

- instruction to the web browser what type of document to expect, along with the version of HTML the page is written in.
- is used to inform the browser about the type of document or whether the page is following the HTML5 specification or not
- defines the type of document

# head

- part of HTML metahor
- contains the machine-readable tags that define the structure of the document like the title, the author, the description, the keywords, the stylesheets, the scripts, etc.
- contains meta, link, script, and style elements, and the title element

# meta

- defines metadata about the document (e.g. author, description, keywords)
- meta elements are used to specify the content type of the document
- not displayed on the page, but they are read by the browser, search engines, and other web browsers or services

1. Character sets and encodings

- meta charset="utf-8":
- An HTML attribute that defines the character encoding for your browser to use when displaying the website content.
- UTF-8 is the most common character encoding, which is used in the HTML5 specification

## Why is character encoding important?

- Most websites these days have to display characters that are not traditional ASCII characters.
- When receiving such characters in an HTML source, browsers should be able to handle those properly.

## Various Character Encodings

HTML Standards has listed many encodings along with UTF-8 with reference to "Encoding Standards."

Examples:

❍ UTF-8
❍ ISO-8859-2
❍ windows-1251
❍ windows-1252
❍ GBK
❍ UTF-16BE

Find the full list:
https://encoding.spec.whatwg.org/#names-and-labels

## Why should we use UTF-8?

⬘ The HTML5 specification encourages web developers to use the UTF-8 character set.
⬙ Why? Because it covers almost all of the characters and symbols in the world.

2. keywords for SEO

```html
<meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript" />
```

3. description for SEO

```html
<meta name="description" content="This is my first HTML page" />
```

4. author for SEO

```html
<meta name="author" content="Bishal Karki" />
```

5. viewport for SEO and different devices support or responsive design

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" /> //
width=device-width means that the page will be displayed in the same width as
the device width // initial-scale=1.0 means that the page will be displayed in
100% of the width of the device
```

6. page refresh for SEO after certain time

```html
<meta http-equiv="refresh" content="5;url=http://www.example.com/" /> // 5
```

7. robots for SEO

```html
<meta name="robots" content="index,follow noindex" /> // index,follow
```

| Value/Directive                        | Description                                                                                                                   |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| index                                  | tells search engines to index this page                                                                                       |
| all                                    | default value or tells search engines to index this page                                                                      |
| follow                                 | tells search engines to follow links on this page                                                                             |
| nofollow                               | tells search engines to not follow links on this page                                                                         |
| none                                   | tells search engines to not index this page                                                                                   |
| noindex                                | tells search engines to not follow links on this page                                                                         |
| noarchive                              | tells search engines to not archive this page                                                                                 |
| nosnippet                              | tells search engines to not display a snippet of this page                                                                    |
| noodp                                  | tells search engines to not use the Open Directory Project                                                                    |
| notranslate                            | tells search engines to not translate this page                                                                               |
| nocache                                | tells search engines to not cache this page                                                                                   |
| noimageindex                           | tells search engines to not index images on this page                                                                         |
| unavailabl                             | tells search engines to mark this page as unavailable                                                                         |
| unavailableafter                       | tells search engines to mark this page as unavailable after                                                                   |
| unavailable_after [RFC--850-date/time] | Do not show this page in search results after the specified date/time. The date/time must be specified in the RFC 850 format. |

8. Social Media Meta Tags for SEO

```html
<!-- The style to be used for this article -->
<meta property="fb:article_style" content="myarticlestyle" /> //facebook
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@site_account" />
<meta name="twitter:creator" content="@individual_account" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@site_account" />
<meta name="twitter:creator" content="@individual_account" />
<meta name="twitter:url" content="https://example.com/page.html" />
<meta name="twitter:title" content="Content Title" />
<meta
  name="twitter:description"
  content="Content description less than 200 characters"
/>
<meta name="twitter:image" content="https://example.com/image.jpg" />
<!-- Google+ / Schema.org -->
<link href="https://plus.google.com/+YourPage" rel="publisher" />
<meta itemprop="name" content="Content Title" />
<meta
  itemprop="description"
  content="Content description less than 200 characters"
/>
<meta itemprop="image" content="https://example.com/image.jpg" />
```

3. Mobile Layout for SEO

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

| Attributes    | Description                                                                             |
| ------------- | --------------------------------------------------------------------------------------- |
| width         | The width of the viewport in device-independent pixels.                                 |
| initial-scale | The initial scale of the viewport.                                                      |
| shrink-to-fit | If true, the viewport width is dynamically determined based on the width of the device. |
| user-scalable | If true, the viewport width is dynamically determined based on the width of the device. |
| minimum-scale | The minimum scale of the viewport.                                                      |
| maximum-scale | The maximum scale of the viewport.                                                      |

4. Automatic Refresh for SEO

```html
<meta http-equiv="refresh" content="5;url=http://www.example.com/" /> // 5
```

5. Phone Number for SEO

```html
<meta name="phone" content="+1-800-555-1234" />
```

6. Automatic Redirection for SEO

```html
<meta http-equiv="refresh" content="5;url=http://www.example.com/" /> // 5
```

7. Web App

```html
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta name="apple-mobile-web-app-title" content="Web App Title" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta name="mobile-web-app-capable" content="yes" />
<meta name="theme-color" content="black" />
```

8. content-type for SEO

- Allow the webserver to include the Content-Type header in the response coming to the browser.
- Content-Type: text/html; charset=utf-8

8. http-equiv metadata

- Set content for

```html
<meta http-equiv="Content-Type" in HTML.
```

- When present, it must be inside the head element near the top of the document.
- meta http-equiv="Content-Type"
  content="text/html; charset=utf-8">

  9. BOM

- BOM (Byte-Order-Mark) is the usage of a special Unicode character U+FEFF.
- It should be placed within the first 3 bytes of the document.

10. HTML Entities

- A fallback is that HTML has to display all UTF-8 characters properly by using HTML entities.

# head element

- viewport is used to specify the dimensions of the browser window:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

- link is used to link to other documents:

```html
<link rel="stylesheet" href="style.css" />
```

- title is used to define the title of the document:

```html
<title>My First HTML Page</title>
```

- style is used to define the style of the document:

```html
<style>
  p {
    color: red;
  }
</style>
```

- script is used to define the script of the document:

```html
<script>
  alert("Hello World!");
</script>
```

- base is used to define the base URL of the document or targets for all links or URLs in the document or to define the default target for all links in the document using the target or rel or href attribute:

```html
<base href="http://example.com/" target="_blank" rel="nofollow" />
```

- target blank is used to open the linked document in a new window:

```html
<a href="http://example.com/" target="_blank">Example</a>
```

# body

- defines the content of the document
- contains the main content of the document, that is displayed in the browser window

```html
<body oncontextmenu="return false">
  // oncontextmenu is used to prevent the right click menu from appearing on the
  page
</body>
```

# HTML Headings

- used to describe the content, like the title of the document, the author, the date of creation, etc.
- h1, h2, h3, h4, h5, h6 are used to define the heading of the document
- headings are used mainly to define the content of the document as well as the structure of the document

# Divs

- short for division or a container that divides the document into sections

# whitespace and identation

- whitespace is the space between the tags. It is used to make the HTML code more readable.
- identation is the space between the tags and the content. It makes parent-child relationships more clear.

# Line Breaks

- used to insert a line break in the document
- modifying the spacing between lines of text

# HTML Content Model

- HTML content model is the structure of the document

# block level elements

- render to begin a new line (by default)
- may contain other block level elements and inline elements
- pushes next element to the next line
- block elements group content into a single unit. They are used to create sections of content.
- example:

| Html Block Elements | Description                                                                     |
| ------------------- | ------------------------------------------------------------------------------- |
| address             | Defines contact information for the author or owner of a document or an article |
| article             | Defines an article                                                              |
| aside               | Defines content aside from the page content                                     |
| blockquote          | Defines a section that is quoted from another source                            |
| canvas              | Used to draw graphics, on the fly, via scripting (usually JavaScript)           |
| p                   | Defines a paragraph                                                             |
| div                 | Defines a section in a document                                                 |
| header              | Defines a header for a document or section                                      |
| footer              | Defines a footer for a document or section                                      |
| nav                 | Defines navigation links                                                        |
| section             | Defines a section in a document                                                 |
| details             | Defines additional details that the user can view or hide                       |
| main                | Specifies the main content of a document                                        |
| summary             | Defines a visible heading for a details element                                 |
| figure              | Specifies self-contained content                                                |
| figcaption          | Defines a caption for a figure element                                          |
| hr                  | Defines a thematic change in the content                                        |
| pre                 | Defines preformatted text                                                       |
| time                | Defines a date/time                                                             |

# inline level elements

- render to stay on the same line (by default)
- cannot have block elements
- inline elements are used to group content that is not part of a block element.
- example:

| Html Inline Elements | Description                                                              |
| -------------------- | ------------------------------------------------------------------------ |
| a                    | Defines a hyperlink                                                      |
| abbr                 | Defines an abbreviation or an acronym                                    |
| b                    | Defines bold text                                                        |
| bdi                  | Isolates a part of text that might be formatted in a different direction |
| bdo                  | Overrides the current text direction                                     |
| br                   | Defines a single line break                                              |
| cite                 | Defines the title of a work                                              |
| span                 | Defines a section in a document                                          |
| code                 | Defines a piece of computer code                                         |
| cite                 | Defines the title of a work                                              |
| data                 | Links the given content with a machine-readable translation              |
| dfn                  | Indicates the defining instance of a term                                |
| i                    | Defines a part of text in an alternate voice or mood                     |
| kbd                  | Defines keyboard input                                                   |
| em                   | Defines emphasized text                                                  |
| mark                 | Defines marked/highlighted text                                          |
| small                | Defines smaller text                                                     |
| strong               | Defines important text                                                   |
| sub                  | Defines subscripted text                                                 |
| sup                  | Defines superscripted text                                               |
| u                    | Defines text that should be stylistically different from normal text     |
| big                  | Not supported in HTML5. Use CSS instead.                                 |
| del                  | Defines text that has been deleted from a document                       |
| q                    | Defines a short quotation                                                |

# nested elements

- nested elements are used to group content that is part of a block element.
- example:

| Html Nested Elements | Description                                                                    |
| -------------------- | ------------------------------------------------------------------------------ |
| ul                   | Defines an unordered list                                                      |
| ol                   | Defines an ordered list                                                        |
| li                   | Defines a list item                                                            |
| dl                   | Defines a description list                                                     |
| dt                   | Defines a term/name in a description list                                      |
| dd                   | Defines a description of a term/name in a description list                     |
| table                | Defines a table                                                                |
| tr                   | Defines a row in a table                                                       |
| th                   | Defines a header cell in a table                                               |
| td                   | Defines a cell in a table                                                      |
| caption              | Defines a table caption                                                        |
| col                  | Specifies column properties for each column within a colgroup element          |
| colgroup             | Specifies a group of one or more columns in a table for formatting             |
| thead                | Groups the header content in a table                                           |
| tbody                | Groups the body content in a table                                             |
| tfoot                | Groups the footer content in a table                                           |
| form                 | Defines an HTML form for user input                                            |
| input                | Defines an input control                                                       |
| textarea             | Defines a multiline input control (text area)                                  |
| button               | Defines a clickable button                                                     |
| select               | Defines a drop-down list                                                       |
| optgroup             | Defines a group of related options in a drop-down list                         |
| option               | Defines an option in a drop-down list                                          |
| label                | Defines a label for an input element                                           |
| fieldset             | Groups related elements in a form                                              |
| legend               | Defines a caption for a fieldset element                                       |
| iframe               | Defines an inline frame                                                        |
| img                  | Defines an image                                                               |
| map                  | Defines a client-side image-map                                                |
| area                 | Defines an area inside an image-map                                            |
| audio                | Defines sound content                                                          |
| video                | Defines a video or movie                                                       |
| embed                | Defines a container for an external (non-HTML) application                     |
| object               | Defines an embedded object                                                     |
| param                | Defines a parameter for an object                                              |
| source               | Defines multiple media resources for media elements                            |
| track                | Defines text tracks for media elements                                         |
| canvas               | Used to draw graphics, on the fly, via scripting (usually JavaScript)          |
| script               | Defines a client-side script                                                   |
| noscript             | Defines an alternate content for users that do not support client-side scripts |
| del                  | Defines text that has been deleted from a document                             |
| ins                  | Defines a text that has been inserted into a document                          |
| style                | Defines style information for a document                                       |

# HTML Links or Hyperlinks or anchors

- anchor tag is used to create a link to another document or to another part of the same document
- href is the attribute of anchor tag which is used to specify the link. href stands for hyperlink reference. it is used to link to the path or the address to where the file is located.
- links have two attributes: href and rel:

```html
<a href="http://example.com/" rel="nofollow">Example</a>
```

- links are used to link to other documents

# Links

- target specifies how or where to open the linked document:

```html
<a href="http://example.com/" target="_blank">Example</a>
```

- target is used to define the target of the link. It can be
  - \_blank: open in a new window or tab
  - \_self: open in the same frame as it was clicked
  - \_parent: open in the parent frame
  - \_top: open in the full body of the window
  - framename: open in a named frame

```html
<a href="" target="_self"> </a>
<p>opens the page in same browser window or tab</p>
```

- rel is used to define the relationship of the link. rel defines the relationship between document and external resource.
- noopener is used to prevent the browser from opening a new window when the link is clicked and
- noreferrer is used to prevent the browser from sending a referrer header when the link is clicked.
- mailto is used to create a link to an email address

```html
<a href="mailto:"></a>
<p>to define the email address and the subject of the email message</p>
```

```html
<a href="tel:"></a>
<p>to define a link to a telephone number</p>
```

```html
- <a name=""></a>
<p>to define a bookmark in a page</p>
```

# Absolute Link

- absolute link is a link that contains the full URL of the page you want to link to. it is also called as full link.
- are also called external links and are for links to other websites

```html
<a href="http://example.com/"></a>
<p>to define the absolute link of the documents</p>
```

# Relative Link

- if the files are stored in the same folder, you can use the file name to link to the file
- are also called internal links and are links which are giving local pages from same website

# HTML Images

- images are used to display images
- alt is used to define the alternative text of the image
- the value of src must be a valid URL or Uniform Resource Locator of an image.(absolute or relative)

```html
<img src="image.jpg" alt="Image" />
<p>
  img tag is used to display images. alt attribute is used to define the
  alternative text of the image. src attribute is used to define the source of
  the image.
</p>
```

# URL

- Uniform Resource Locator is a string of characters used to identify a name or a web resource.
- URL is used to define the location of a resource on the Internet.
- is the web address or local address where file is stored.

# Multimedia

| Multimedia | Description                                                 |
| ---------- | ----------------------------------------------------------- |
| audio      | audio tag is used to display audio files.                   |
| video      | video tag is used to display video files.                   |
| track      | track tag is used to define text tracks for media elements. |

# HTML Video

- video is used to display video files

```html
<video src="video.mp4" controls></video>
<p>
  video tag is used to display video files. src attribute is used to define the
  source of the video. controls attribute is used to display the video controls
  such as play, pause, etc.
</p>
```

# Displaying Text

| HTML Element | Description                                                             |
| ------------ | ----------------------------------------------------------------------- |
| p            | paragraph                                                               |
| span         | to group inline elements and separate the smaller parts of the document |

# Text Content

| HTML Element | Description                        | type   |
| ------------ | ---------------------------------- | ------ |
| h1           | heading 1                          | block  |
| blockquote   | blockquote                         | block  |
| q            | to create a short quotation        | inline |
| cite         | to create a citation               | inline |
| dd           | to create a definition description | block  |
| dt           | to create a definition term        | block  |
| figcaption   | to create a figure caption         | block  |
| figure       | to create a figure                 | block  |
| pre          | to create a preformatted text      | block  |
| p            | to create a paragraph              | block  |
| ul           | to create an unordered list        | block  |
| ol           | to create an ordered list          | block  |
| li           | to create a list item              | block  |
| dl           | to create a definition list        | block  |
| div          | to create a division               | block  |

# Inline TextSemantics

| HTML Element | Description                                   |
| ------------ | --------------------------------------------- |
| a            | anchor or to create a link                    |
| abbr         | abbreviation                                  |
| br           | line break                                    |
| cite         | for referencing a citation or a piece of work |
| code         | for displaying computer code                  |
| em           | for emphasizing text                          |
| mark         | for highlighting text                         |
| small        | for displaying side comments                  |
| strong       | for emphasizing text                          |
| span         | for grouping inline elements                  |
| time         | for displaying a date or time                 |

# Styling Text

| HTML Element | Description                                                             |
| ------------ | ----------------------------------------------------------------------- |
| b            | bold                                                                    |
| i            | italic                                                                  |
| u            | underline                                                               |
| s            | strike through                                                          |
| del          | deleted text                                                            |
| ins          | inserted text                                                           |
| sub          | subscript                                                               |
| sup          | superscript                                                             |
| small        | small text                                                              |
| strong       | strong text                                                             |
| em           | emphasized text                                                         |
| mark         | marked text                                                             |
| code         | code sample                                                             |
| q            | quotation mark                                                          |
| cite         | citation mark                                                           |
| abbr         | abbreviation                                                            |
| dfn          | definition                                                              |
| var          | variable                                                                |
| samp         | sample output                                                           |
| kbd          | keyboard input                                                          |
| bdi          | bidirectional isolation                                                 |
| bdo          | bidirectional override                                                  |
| span         | to group inline elements and separate the smaller parts of the document |
| br           | line break                                                              |
| wbr          | line break opportunity                                                  |
| hr           | horizontal rule                                                         |
| a            | link                                                                    |

# formatting the text inside paragraphs or other elements

| HTML Element | Description     |
| ------------ | --------------- |
| b            | bold            |
| i            | italic          |
| u            | underline       |
| s            | strike through  |
| del          | deleted text    |
| ins          | inserted text   |
| sub          | subscript       |
| sup          | superscript     |
| small        | small text      |
| strong       | strong text     |
| em           | emphasized text |
| mark         | marked text     |
| code         | code sample     |
| q            | quotation       |
| mark         | marked text     |
| cite         | citation mark   |
| abbr         | abbreviation    |
| time         | time stamp      |

# Scripting

- script is used to create a script ```html

<script src=""></script>
<p>script tag is used to create a script</p>
OR
<script type="text/javascript" src="./javascript.js"></script>
<p>script tag is used to create a script</p>
````

# Demarcating Edits

- demarcating edits is used to indicate that a change has been made to a document
- <del> is used to create a deleted text // <del> is an inline element
- <ins> is used to create an inserted text // <ins> is an inline element

# HTML Table

| HTML Table | Description                                                                                     |
| ---------- | ----------------------------------------------------------------------------------------------- |
| table      | table tag is used to create a table.                                                            |
| tr         | tr tag is used to create a table row.                                                           |
| th         | th tag is used to create a table header. Table headings clearify the meaning of the table data. |
| td         | td tag is used to create a table data.                                                          |
| caption    | caption tag is used to create a table caption.                                                  |
| thead      | thead tag is used to create a table header.                                                     |
| tbody      | tbody tag is used to create a table body.                                                       |
| tfoot      | tfoot tag is used to create a table footer.                                                     |
| col        | col tag is used to create a table column.                                                       |
| colgroup   | colgroup tag is used to create a table column group.                                            |
| colspan    | colspan attribute is used to define the number of columns a cell should span.                   |
| rowspan    | rowspan attribute is used to define the number of rows a cell should span.                      |

## HTML Table Attributes

| Attribute   | Description                                                                                     |
| ----------- | ----------------------------------------------------------------------------------------------- |
| align       | align attribute is used to align the table.                                                     |
| bgcolor     | bgcolor attribute is used to define the background color of the table.                          |
| border      | border attribute is used to define the width of the border of the table.                        |
| cellpadding | cellpadding attribute is used to define the space between the cell content and the cell border. |
| cellspacing | cellspacing attribute is used to define the space between the cells.                            |
| height      | height attribute is used to define the height of the table.                                     |
| width       | width attribute is used to define the width of the table.                                       |
| scope       | scope attribute is used to define the scope of the header cell.                                 |
| summary     | summary attribute is used to define a summary of the table.                                     |
| valign      | valign attribute is used to define the vertical alignment of the table.                         |
| colspan     | colspan attribute is used to define the number of columns a cell should span.                   |
| rowspan     | rowspan attribute is used to define the number of rows a cell should span.                      |

```html
<table>
  <caption>
    Table Caption
  </caption>
  <thead>
    <tr>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table Data 1</td>
      <td>Table Data 2</td>
      <td>Table Data 3</td>
    </tr>
    <tr>
      <td>Table Data 1</td>
      <td>Table Data 2</td>
      <td>Table Data 3</td>
    </tr>
    <tr>
      <td>Table Data 1</td>
      <td>Table Data 2</td>
      <td>Table Data 3</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Table Footer 1</td>
      <td>Table Footer 2</td>
      <td>Table Footer 3</td>
    </tr>
  </tfoot>
</table>
```

# HTML Form

- form tag is used to create a form
- Forms are used to collect user input and send it to a server.

Q. How Forms work?

- A internet is a network of networks. It is a network of computers that are connected to each other. When you send a form to a server, the form data is sent to the server as name/value pairs. The server processes the form data using a programming language such as PHP, C#, VB.NET, Java, Perl, Python, etc. The server then creates a new page to send back to the browser based on the information received.
- Computer needs an HTTP protocol to send and receive data.

## HTTP (Hyper Text Transfer Protocol)

- HTTP is a protocol that is used to send and receive data over the internet. HTTP is a stateless protocol, which means that the server does not remember anything about the user. The server only remembers the current request. When the server receives a new request, it forgets everything about the previous request. This is why the server needs to know which page to send back to the browser. This is done with the help of HTML forms.

| HTML Form element | Description                                 |
| ----------------- | ------------------------------------------- |
| form              | form tag is used to create a form.          |
| input             | input tag is used to create an input field. |
| textarea          | textarea tag is used to create a text area. |
| select            | select tag is used to create a drop-down.   |
| option            | option tag is used to create a drop-down.   |
| button            | button tag is used to create a button.      |
| label             | label tag is used to create a label.        |
| fieldset          | fieldset tag is used to create a fieldset.  |
| legend            | legend tag is used to create a legend.      |
| datalist          | datalist tag is used to create a datalist.  |
| output            | output tag is used to create a output.      |
| optgroup          | optgroup tag is used to create a optgroup.  |

```html
<form action="https://www.google.com/search" method="GET">
  <input type="text" name="q" />
  <input type="submit" value="Search" />
  <input type="checkbox'" name="q" />
  <input type="radio" name="q" />
  <input type="file" name="q" />
  <input type="password" name="q" />
  <input type="email" name="q" />
  <input type="number" name="q" />
  <input type="date" name="q" />
  <input type="color" name="q" />
  <input type="range" name="q" />
  <input type="tel" name="q" />
  <input type="url" name="q" />
  <input type="search" name="q" />
  <input type="time" name="q" />
  <input type="week" name="q" />
  <input type="month" name="q" />
  <input type="datetime-local" name="q" />
  <input type="hidden" name="q" />
  <input type="image" name="q" />
  <input type="reset" name="q" />
  <input type="button" name="q" />
  <input type="submit" name="q" />
    <button type="submit">Search</button>

  <textarea name="q" cols="30" rows="10"></textarea>
  <select name="q">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>

    <optgroup label="Group 1">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>

      <optgroup label="Group 2">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>

        <datalist id="q">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>

          <output name="q" for="q"></output>
        </datalist>
      </optgroup>
    </optgroup>
  </select>
</form>
```

# HTML Forms Attributes

| Attribute      | Description                                                                                                                                         |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| action         | determines where to send the form-data when a form is submitted.                                                                                    |
| method         | determines how to send the form-data (the form-data is sent to the page specified in the action attribute). is assigned with HTTP verb GET or POST. |
| name           | specifies the name of an element (the name is submitted with the form-data).                                                                        |
| value          | specifies the value of an element (the value is submitted with the form-data).                                                                      |
| type           | specifies the type of an input element.                                                                                                             |
| placeholder    | specifies a short hint that describes the expected value of an input field.                                                                         |
| required       | specifies that an input field must be filled out before submitting the form.                                                                        |
| autofocus      | specifies that an input field should automatically get focus when the page loads.                                                                   |
| disabled       | specifies that an input field should be disabled.                                                                                                   |
| readonly       | specifies that an input field is read-only.                                                                                                         |
| maxlength      | specifies the maximum number of characters allowed in an input field.                                                                               |
| minlength      | specifies the minimum number of characters allowed in an input field.                                                                               |
| pattern        | specifies a regular expression that an input element's value is checked against.                                                                    |
| size           | specifies the width, in characters, of an input field.                                                                                              |
| src            | specifies the URL of the image to use as a submit button.                                                                                           |
| alt            | specifies an alternate text for images, if the image for some reason cannot be displayed.                                                           |
| height         | specifies the height of an image in pixels.                                                                                                         |
| width          | specifies the width of an image in pixels.                                                                                                          |
| checked        | specifies that an option should be pre-selected when the page loads.                                                                                |
| selected       | specifies that an option should be pre-selected when the page loads.                                                                                |
| multiple       | specifies that a user can enter more than one value in an input field.                                                                              |
| rows           | specifies the visible number of lines in a text area.                                                                                               |
| cols           | specifies the visible width of a text area.                                                                                                         |
| wrap           | specifies how the text in a text area is to be wrapped when submitted in a form.                                                                    |
| form           | specifies one or more forms the <input> element belongs to.                                                                                         |
| formaction     | specifies where to send the form-data when a form is submitted.                                                                                     |
| formenctype    | specifies how form-data should be encoded before sending it to a server.                                                                            |
| formmethod     | specifies how to send the form-data (which HTTP method to use).                                                                                     |
| formnovalidate | specifies that the form-data should not be validated on submission.                                                                                 |
| formtarget     | specifies where to display the response that is received after submitting the form.                                                                 |
| list           | specifies a list of pre-defined options for input controls.                                                                                         |
| max            | specifies the maximum value for an input field.                                                                                                     |
| min            | specifies the minimum value for an input field.                                                                                                     |
| minlength      | specifies the minimum number of characters allowed in an input field.                                                                               |
| maxlength      | specifies the maximum number of characters allowed in an input field.                                                                               |
| step           | specifies the legal number intervals for an input field.                                                                                            |
| accept         | specifies the types of files that the server accepts (only for type="file").                                                                        |
| autocomplete   | specifies whether a form should have autocomplete on or off.                                                                                        |
| autofocus      | specifies that a form should automatically get focus when the page loads.                                                                           |
| novalidate     | specifies that the form-data should not be validated on submission.                                                                                 |
| target         | specifies where to display the response that is received after submitting the form.                                                                 |
| enctype        | specifies how the form-data should be encoded when submitting it to the server (only for method="post").                                            |
| method         | specifies how to send form-data (which HTTP method to use).                                                                                         |
| accept-charset | specifies the character encodings that are to be used for the form submission.                                                                      |
| action         | specifies where to send the form-data when a form is submitted.                                                                                     |
| accept         | specifies the types of files that the server accepts (only for type="file").                                                                        |

# HTML Input Types

| Type        | Description                                                                                        |
| ----------- | -------------------------------------------------------------------------------------------------- |
| text        | Defines a single-line text input field                                                             |
| password    | Defines a password field (characters are masked)                                                   |
| radio       | Defines a radio button                                                                             |
| checkbox    | Defines a checkbox                                                                                 |
| submit      | Defines a submit button (for submitting the form)                                                  |
| reset       | Defines a reset button (resets all form values to default)                                         |
| button      | Defines a clickable button (mostly used with a JavaScript to activate a script)                    |
| hidden      | Defines a hidden input field                                                                       |
| image       | Defines an image as the submit button                                                              |
| email       | Defines a field for an e-mail address                                                              |
| url         | Defines a field for an URL                                                                         |
| search      | Defines a text field for entering a search string                                                  |
| tel         | Defines a field for entering a telephone number                                                    |
| number      | Defines a field for entering a number                                                              |
| range       | Defines a control for entering a number whose exact value is not important (like a slider control) |
| color       | Defines a control for entering a color                                                             |
| date        | Defines a control for entering a date                                                              |
| datetime    | Defines a control for entering a date and time                                                     |
| datetime-   | Defines a control for entering a date and time (local date and time)                               |
| month       | Defines a control for entering a month and year                                                    |
| week        | Defines a control for entering a week and year                                                     |
| time        | Defines a control for entering a time (no time zone)                                               |
| file        | Defines a file-select field and a "Browse..." button (for file uploads)                            |
| readonly    | Specifies that an input field is read-only                                                         |
| disabled    | Specifies that an input field should be disabled                                                   |
| required    | Specifies that an input field must be filled out before submitting the form                        |
| autofocus   | Specifies that an input field should automatically get focus when the page loads                   |
| placeholder | Specifies a short hint that describes the expected value of an input field                         |
| multiple    | Specifies that a user can enter more than one value in an input field                              |
| pattern     | Specifies a regular expression that an input element's value is checked against                    |
| min         | Specifies the minimum value for an input field                                                     |
| max         | Specifies the maximum value for an input field                                                     |
| step        | Specifies the legal number intervals for an input field                                            |
| list        | Specifies a list of pre-defined options for input controls                                         |
| list        | Specifies a list of pre-defined options for input controls                                         |
| url         | Specifies that the input field must contain a valid URL                                            |
| id          | Specifies a unique id for an element                                                               |

```html
<form>
  <input type="text" name="username" placeholder="Username" required />
  <input type="password" name="password" placeholder="Password" required />
  <input type="submit" value="Login" />
</form>
```

# HTML Form Validation

- HTML5 form validation is done by the browser, not by JavaScript.
- Validation is the concept of checking user provided data against the required data.

| Server-side validation                                | Client-side validation                                                                   |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| happens when data is sent to another machine (server) | happens if we want to check the data on browser (client) before sending it to the server |
| example: login page                                   | example: registration page                                                               |

# Input Validation

- input validation is used to validate the input of the user.

```html
<input type="text" name="name" value="value" required />
<input type="text" name="name" value="value" required pattern="[0-9]{3}" />
<input
  type="text"
  name="name"
  value="value"
  required
  pattern="[0-9]{3}"
  maxlength="3"
/>
<input
  type="text"
  name="name"
  value="value"
  required
  pattern="[0-9]{3}"
  maxlength="3"
  minlength="3"
/>
<input
  type="text"
  name="name"
  value="value"
  required
  pattern="[0-9]{3}"
  maxlength="3"
  minlength="3"
  autocomplete="off"
/>
<input
  type="text"
  name="name"
  value="value"
  required
  pattern="[a-zA-Z0-9]+{3}"
  maxlength="3"
  minlength="3"
  autocomplete="off"
/>
```

## Regex

- Regular expressions are patterns used to match character combinations in strings.
- Regular expressions are used to perform all types of text search and text replace operations.
- Regular expressions are used to validate form input.

```html
<form>
  <input
    type="text"
    name="username"
    placeholder="Username"
    required
    pattern="[a-z]{5,10}"
  />
  <input
    type="password"
    name="password"
    placeholder="Password"
    required
    minlength="5"
    maxlength="10"
  />
  <input type="submit" value="Login" />
</form>
```

# HTML Lists

- lists are used to create lists

| HTMl List element | Description                                       |
| ----------------- | ------------------------------------------------- |
| ul                | unordered list or outlines list item with bullets |
| ol                | ordered list or outlines list item with numbers   |
| li                | list item                                         |
| dl                | definition list or outlines list item with terms  |
| dt                | definition term or outlines list item term        |
| dd                | definition description or outlines list item      |

# HTML List attributes

| HTML List attribute | Description                                                                             |
| ------------------- | --------------------------------------------------------------------------------------- |
| type                | type is used to define the type of list: type="1" or type="a" or type="A"               |
| start               | start is used to define the starting number of the list: start="number"                 |
| value               | value is used to define the value of the list item: value="value"                       |
| class               | class is used to define the class of the list: class="class"                            |
| id                  | id is used to define the id of the list: id="id"                                        |
| data-\*             | data-_ is used to define custom attributes: data-_="data-\*"                            |
| style               | style is used to define the style of the list: style="style"                            |
| title               | title is used to define the title of the list: title="title"                            |
| lang                | lang is used to define the language of the list: lang="lang"                            |
| dir                 | dir is used to define the direction of the list: dir="dir"                              |
| hidden              | hidden is used to define whether the list is hidden: hidden="hidden"                    |
| onclick             | onclick is used to define the onclick event of the list: onclick="event"                |
| ondblclick          | ondblclick is used to define the ondblclick event of the list: ondblclick="event"       |
| onmousedown         | onmousedown is used to define the onmousedown event of the list: onmousedown="event"    |
| onmouseup           | onmouseup is used to define the onmouseup event of the list: onmouseup="event"          |
| onmouseover         | onmouseover is used to define the onmouseover event of the list: onmouseover="event"    |
| onmousemove         | onmousemove is used to define the onmousemove event of the list: onmousemove="event"    |
| onmouseout          | onmouseout is used to define the onmouseout event of the list: onmouseout="event"       |
| onkeypress          | onkeypress is used to define the onkeypress event of the list: onkeypress="event"       |
| onkeydown           | onkeydown is used to define the onkeydown event of the list: onkeydown="event"          |
| onkeyup             | onkeyup is used to define the onkeyup event of the list: onkeyup="event"                |
| onmouseenter        | onmouseenter is used to define the onmouseenter event of the list: onmouseenter="event" |
| onmouseleave        | onmouseleave is used to define the onmouseleave event of the list: onmouseleave="event" |

# Interactive Elements

- Interactive elements are elements that can be interacted with.
- <details> is used to create a details element
- <summary> is used to create a summary element
- <menu> is used to create a menu element
- <command> is used to create a command element
- <dialog> is used to create a dialog element

# Entity References

- Entity references are used for avoiding the rendering issues.
- provides characters that are not available in keyboard layouts
- safeguard against XSS attacks and more limited character encodings
- symbols that are not available in keyboard layouts
- &larr;: left arrow: &#8592;
- &uarr;: up arrow: &#8593;
- &rarr;: right arrow: &#8594;
- &darr;: down arrow: &#8595;
- &harr;: left right arrow: &#8596;
- &crarr;: carriage return arrow: &#8629;
- &lArr;: left double arrow: &#8656;
- &uArr;: up double arrow: &#8657;
- &rArr;: right double arrow: &#8658;
- &dArr;: down double arrow: &#8659;
- &hArr;: left right double arrow: &#8660;
- &forall;: for all: &#8704;
- &part;: part: &#8706;
- &exist;: exists: &#8707;
- &empty;: empty: &#8709;
- &nabla;: nabla: &#8711;
- &isin;: is a member of: &#8712;
- &notin;: not a member of: &#8713;
- &ni;: contains as member: &#8715;
- &prod;: n-ary product: &#8719;
- &sum;: n-ary summation: &#8721;
- &minus;: minus sign: &#8722;
- &lowast;: asterisk operator: &#8727;
- &radic;: square root: &#8730;
- &prop;: proportional to: &#8733;
- &infin;: infinity: &#8734;
- &ang;: angle: &#8736;
- &and;: logical and: &#8743;
- &or;: logical or: &#8744;
- &cap;: intersection: &#8745;
- &cup;: union: &#8746;
- &int;: integral: &#8747;
- &there4;: therefore: &#8756;
- &sim;: tilde operator: &#8764;
- &cong;: congruent to: &#8773;
- &asymp;: almost equal to: &#8776;
- &ne;: not equal to: &#8800;
- &equiv;: identical to: &#8801;
- &le;: less than or equal to: &#8804;
- &ge;: greater than or equal to: &#8805;
- &sub;: subset of: &#8834;
- &sup;: superset of: &#8835;
- &nsub;: not a subset of: &#8836;
- Greek letters
- &Alpha;: creates an alpha entity reference: symbol &Alpha;
- &Beta;: creates a beta entity reference: symbol &Beta;
- &Gamma;: creates a gamma entity reference: symbol &Gamma;
- &Delta;: creates a delta entity reference: symbol &Delta;
- &Epsilon;: creates an epsilon entity reference: symbol &Epsilon;
- &Zeta;: creates a zeta entity reference: symbol &Zeta;
- &Eta;: creates an eta entity reference: symbol &Eta;
- &Theta;: creates a theta entity reference: symbol &Theta;
- &Iota;: creates an iota entity reference: symbol &Iota;
- &Kappa;: creates a kappa entity reference: symbol &Kappa;
- &Lambda;: creates a lambda entity reference: symbol &Lambda;
- &Mu;: creates a mu entity reference: symbol &Mu;
- &Nu;: creates a nu entity reference: symbol &Nu;
- &Xi;: creates an xi entity reference: symbol &Xi;
- &Omicron;: creates an omicron entity reference: symbol &Omicron;
- &Pi;: creates a pi entity reference: symbol &Pi;
- &Rho;: creates a rho entity reference: symbol &Rho;
- &Sigma;: creates a sigma entity reference: symbol &Sigma;
- &Tau;: creates a tau entity reference: symbol &Tau;
- &Upsilon;: creates an upsilon entity reference: symbol &Upsilon;
- &Phi;: creates a phi entity reference: symbol &Phi;
- &Chi;: creates a chi entity reference: symbol &Chi;
- &Psi;: creates a psi entity reference: symbol &Psi;
- &Omega;: creates an omega entity reference: symbol &Omega;

- &;: creates an entity reference
- &amp;: creates an ampersand: symbol "&"
- &lt;: creates a less-than: symbol "<"
- &gt;: creates a greater-than: symbol ">"
- &quot;: creates a double quote symbol "\"
- &apos;: creates a single quote symbol "'"
- &nbsp;: creates a non-breaking space " "
- &copy;: creates a copyright symbol "©"
- &reg;: creates a registered trademark symbol "®"
- &trade;: creates a trademark symbol "™"
- &euro;: creates a euro symbol "€"
- &pound;: creates a pound symbol "£"
- &yen;: creates a yen symbol "¥"
- &cent;: creates a cent symbol "¢"
- &sect;: creates a section symbol "§"
- &deg;: creates a degree symbol "°"
- &plusmn;: creates a plus-minus symbol "±"
- &micro;: creates a micro symbol "µ"
- &para;: creates a paragraph symbol "¶"
- &middot;: creates a middle dot symbol "·"
- &cedil;: creates a cedilla symbol "¸"
- &sup1;: creates a superscript 1 symbol "¹"
- &sup2;: creates a superscript 2 symbol "²"
- &sup3;: creates a superscript 3 symbol "³"
- &frac14;: creates a fraction 1/4 symbol "¼"
- &frac12;: creates a fraction 1/2 symbol "½"
- &frac34;: creates a fraction 3/4 symbol "¾"
- &ordm;: creates an ordinal indicator symbol "º"
- &raquo;: creates a right-pointing double angle quotation mark symbol "»"
- &laquo;: creates a left-pointing double angle quotation mark symbol "«"
- &not;: creates a not sign symbol "¬"
- &shy;: creates a soft hyphen symbol "­"
- &reg;: creates a registered trademark symbol "®"
- &macr;: creates a macron symbol "¯"
- &deg;: creates a degree symbol "°

- entities are also specified by entity number:
- UTF-8 - character set is default in HTML5.
- It includes all the characters in the Unicode Basic Multilingual Plane (BMP) of the Unicode Standard.
- UTF-8 shares some characters with the ISO-8859-1 character set, to ASCII, ANSI, and Windows-1252.
- utf-8 have different characters from 256 to 65535.

# Responsive Design

- sites layout adapts to the screen size of the user.
- we can use media queries to control the layout of our site.
- different screen sizes have different layout.
- screen modes (mobile, tablet, desktop, portrait, landscape)
- syntax: @media (conditions) and|or (conditions) {
  rules
  }
- conditions are width, height, orientation, and type of device.

# Breakpoint Overlapping

- when conditions of media queries overlap such that it becomes ambiguous to set style overlapping of breakpoints said to happen and it should be avoid carefully.

# Alternative to responsive design

- Server detects the type of browser compatibility and respective loads version of site as there are already many sites that are not compatible with all browsers.
- even mobile devices have a different screen size configuration, hence to fit the page content properly, responsive design is important.

# Abbreviations

- <abbr title="attribute">: creates an abbreviation

# 12 Column Grid Responsive Design or layout

- screen size or screen resolution is the basis of the layout or is divided into 12 columns because of the grid system.
- grid system is a system that divides the screen into 12 columns. Each column has a width of 1/12 of the screen.
  @media (min-width: 768px) {
  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {
  float: left;
  }
  .col-md-12 {
  width: 100%;
  }
  .col-md-11 {
  width: 91.66666667%;
  }
  .col-md-10 {
  width: 83.33333333%;
  }
  .col-md-9 {
  width: 75%;
  }
  .col-md-8 {
  width: 66.66666667%;
  }
  .col-md-7 {
  width: 58.33333333%;
  }
  .col-md-6 {
  width: 50%;
  }
  .col-md-5 {
  width: 41.66666667%;
  }
  .col-md-4 {
  width: 33.33333333%;
  }
  .col-md-3 {
  width: 25%;
  }
  .col-md-2 {
  width: 16.66666667%;
  }
  .col-md-1 {
  width: 8.33333333%;
  }

# Classes

- classes are non-unique and can be used multiple times in the same element.

# IDS

- IDs are unique and can be used only once in the same element.
- it must be unique in the document
- it must not contain any space characters
- it must contain at least one character

# Linking Resources

| Attribute                        | Details                                                                                         |
| -------------------------------- | ----------------------------------------------------------------------------------------------- |
| charset                          | Specifies the character encoding of the linked document                                         |
| href                             | Specifies the URL of the linked document                                                        |
| hreflang                         | Specifies the language of the linked document                                                   |
| media                            | Specifies the media type of the linked document                                                 |
| rel                              | Specifies the relationship between the current document and the linked document                 |
| sizes                            | Specifies the size of the linked document                                                       |
| type                             | Specifies the media type of the linked document                                                 |
| target                           | Specifies where to open the linked document                                                     |
| rev                              | Specifies the relationship between the current document and the linked document                 |
| ping                             | Specifies the URL of the linked document                                                        |
| integrity                        | Specifies a base64 encoded hash (sha256, sha384, or sha512) of the linked resource allowing the |
| browser to verify its legitimacy |

# linking to CSS

- external CSS files are linked to using the <link> element.
- internal CSS files are linked to using the <style> element.
- <link> element is used to link to external CSS files.
- <style> element is used to link to internal CSS files.

# Favicon

- favicon is a small image that is displayed next to the web page's title in the browser's address bar.
- <link rel="icon" type="image/x-icon" href="favicon.ico">

# Resource Hint: dns-prefetch, prefetch, prerender

## Preconnect

- Preconnect: tells the browser to connect to a server before the page is loaded. It will also make the
  TCP handshake, and optional TLS negotiation.
- Preconnect is used to preload resources that are needed for the page to load quickly.
  <link rel="preconnect" href="URL">

## dns-prefetch

- dns-prefetch: tells the browser to preload the DNS records for the domain name of the linked resource.
- Informs browsers to resolve the DNS for a URL, so that all assets from that URL load faster
  <link rel="dns-prefetch" href="URL">

## prefetch

- Informs the browsers that a given resource should be prefetched so it can be loaded more quickly.
- DNS-Prefetch resolves only the domain name whereas prefetch downloads/stores the specified resources.
  s<link rel="prefetch" href="URL">

## Prerender

- Informs browsers to fetch and render the URL in the background, so that they can be delivered to the user
  instantaneously as the user navigates to that URL
  <link rel="prerender" href="URL">

# HTML Images

- <img>: creates an image
- Responsive image using the srcset attribute: <img srcset="URL" sizes="100vw">
  <img src="https://picsum.photos/200/300"
        srcset="https://picsum.photos/400/600 400w, https://picsum.photos/800/1200 800w" alt="This is a image">

# HTML Pictures

- <picture>: creates a picture
  <picture>
    <source srcset="URL" media="(min-width: 600px)">
    <source srcset="URL" media="(min-width: 960px)">
    <img srcset="URL" sizes="100vw">
  </picture>

# HTML Image Maps

- <img usemap="#mapname">: creates an image map
  <img src="URL" usemap="#mapname">
  <map name="mapname">
  <area shape="rect" coords="0,0,100,100" href="URL">
  </map>

- <map name="map">
       <area shape="rect" coords="0,0,100,100" href="https://www.google.com" alt="This is a area">
   </map>

| Attribute | value | Details                                        |
| --------- | ----- | ---------------------------------------------- |
| usemap    | value | Specifies the name of the image map            |
| name      | value | Specifies the name of the image map            |
| shape     | value | Specifies the shape of the area                |
| coords    | value | Specifies the coordinates of the area          |
| href      | value | Specifies the URL of the linked document       |
| alt       | value | Specifies the alternate text for the image map |

# HTML Label Elements

- label elements are used to label form controls.
- <label for="name">This is a label</label>
- <label for="name" class="classname">This is a label</label>

# Selection Menu Controls

- selection menu controls are used to select a value from a list of options.

# HTML Embed

- Embed: embeds an object in the page.
  <embed src="URL" type="type" name="name" width="width" height="height"
         pluginspage="URL">

# HTML iframe

- iframe: embeds a document in the page.

```html
<iframe
  src="URL"
  name="name"
  width="width"
  height="height"
  scrolling="scrolling"
  frameborder="frameborder"
  marginheight="marginheight"
  marginwidth="marginwidth"
  allowfullscreen="allowfullscreen"
  allow="allow"
>
</iframe>
```

| attribute       | value | details                                              |
| --------------- | ----- | ---------------------------------------------------- |
| src             | value | Specifies the URL of the document to embed           |
| srcdoc          | value | Specifies the document to embed                      |
| anchor          | value | Specifies the name of the anchor                     |
| name            | value | Specifies the name of the iframe                     |
| width           | value | Specifies the width of the iframe                    |
| height          | value | Specifies the height of the iframe                   |
| scrolling       | value | Specifies whether the iframe should have scrollbars  |
| frameborder     | value | Specifies whether the iframe should have a border    |
| marginheight    | value | Specifies the margin height of the iframe            |
| marginwidth     | value | Specifies the margin width of the iframe             |
| allowfullscreen | value | Specifies whether the iframe should allow fullscreen |
| allow           | value | Specifies the features allowed in the iframe         |

- sandbox in iframe

  | attribute            | value | details                                               |
  | -------------------- | ----- | ----------------------------------------------------- |
  | allow-forms          | value | Specifies that the iframe should allow forms          |
  | allow-pointer-lock   | value | Specifies that the iframe should allow pointer lock   |
  | allow-popups         | value | Specifies that the iframe should allow popups         |
  | allow-same-origin    | value | Specifies that the iframe should allow same origin    |
  | allow-scripts        | value | Specifies that the iframe should allow scripts        |
  | allow-top-navigation | value | Specifies that the iframe should allow top navigation |

# SVG

- svg is a standard for scalable vector graphics.

```html
<svg
  width="width"
  height="height"
  viewbox="viewbox"
  preserveaspectratio="preserveaspectratio"
  xmlns="xmlns"
  version="version"
></svg>
```

| attribute                   | value | details                                                        |
| --------------------------- | ----- | -------------------------------------------------------------- |
| width                       | value | Specifies the width of the svg                                 |
| height                      | value | Specifies the height of the svg                                |
| viewbox                     | value | Specifies the viewbox of the svg                               |
| preserveaspectratio         | value | Specifies the preserveaspectratio of the svg                   |
| xmlns                       | value | Specifies the xmlns of the svg. xmlns stands for XML Namespace |
| version                     | value | Specifies the version of the svg                               |
| path                        | value | Specifies the path of the svg                                  |
| circle                      | value | Specifies the circle of the svg                                |
| ellipse                     | value | Specifies the ellipse of the svg                               |
| line                        | value | Specifies the line of the svg                                  |
| polygon                     | value | Specifies the polygon of the svg                               |
| polyline                    | value | Specifies the polyline of the svg                              |
| rect                        | value | Specifies the rect of the svg                                  |
| text                        | value | Specifies the text of the svg                                  |
| tspan                       | value | Specifies the tspan of the svg                                 |
| image                       | value | Specifies the image of the svg                                 |
| defs                        | value | Specifies the defs of the svg                                  |
| g                           | value | Specifies the g of the svg                                     |
| mask                        | value | Specifies the mask of the svg                                  |
| pattern                     | value | Specifies the pattern of the svg                               |
| clipPath                    | value | Specifies the clipPath of the svg                              |
| linearGradient              | value | Specifies the linearGradient of the svg                        |
| radialGradient              | value | Specifies the radialGradient of the svg                        |
| stop                        | value | Specifies the stop of the svg                                  |
| symbol                      | value | Specifies the symbol of the svg                                |
| use                         | value | Specifies the use of the svg                                   |
| animate                     | value | Specifies the animate of the svg                               |
| animateMotion               | value | Specifies the animateMotion of the svg                         |
| id                          | value | Specifies the id of the svg                                    |
| class                       | value | Specifies the class of the svg                                 |
| style                       | value | Specifies the style of the svg                                 |
| transform                   | value | Specifies the transform of the svg                             |
| transform-origin            | value | Specifies the transform-origin of the svg                      |
| visibility                  | value | Specifies the visibility of the svg                            |
| display                     | value | Specifies the display of the svg                               |
| overflow                    | value | Specifies the overflow of the svg                              |
| clip                        | value | Specifies the clip of the svg                                  |
| clip-path                   | value | Specifies the clip-path of the svg                             |
| mask                        | value | Specifies the mask of the svg                                  |
| filter                      | value | Specifies the filter of the svg                                |
| opacity                     | value | Specifies the opacity of the svg                               |
| fill                        | value | Specifies the fill of the svg                                  |
| fill-opacity                | value | Specifies the fill-opacity of the svg                          |
| fill-rule                   | value | Specifies the fill-rule of the svg                             |
| stroke                      | value | Specifies the stroke of the svg                                |
| stroke-opacity              | value | Specifies the stroke-opacity of the svg                        |
| stroke-width                | value | Specifies the stroke-width of the svg                          |
| stroke-linecap              | value | Specifies the stroke-linecap of the svg                        |
| stroke-linejoin             | value | Specifies the stroke-linejoin of the svg                       |
| stroke-miterlimit           | value | Specifies the stroke-miterlimit of the svg                     |
| marker                      | value | Specifies the marker of the svg                                |
| marker-start                | value | Specifies the marker-start of the svg                          |
| marker-mid                  | value | Specifies the marker-mid of the svg                            |
| marker-end                  | value | Specifies the marker-end of the svg                            |
| mask                        | value | Specifies the mask of the svg                                  |
| clip-path                   | value | Specifies the clip-path of the svg                             |
| clip-rule                   | value | Specifies the clip-rule of the svg                             |
| color                       | value | Specifies the color of the svg                                 |
| color-interpolation         | value | Specifies the color-interpolation of the svg                   |
| color-interpolation-filters | value | Specifies the color-interpolation-filters of the svg           |
| color-profile               | value | Specifies the color-profile of the svg                         |
| color-rendering             | value | Specifies the color-rendering of the svg                       |
| cursor                      | value | Specifies the cursor of the svg                                |
| direction                   | value | Specifies the direction of the svg                             |
| display                     | value | Specifies the display of the svg                               |
| dominant-baseline           | value | Specifies the dominant-baseline of the svg                     |
| enable-background           | value | Specifies the enable-background of the svg                     |
| fill                        | value | Specifies the fill of the svg                                  |

# Embedding external SVG files in HTML

- using image element
  <img src="attention.svg" width="50" height="50">
- using object element
  <object data="attention.svg" type="image/svg+xml" width="50" height="50">

# Canvas

- canvas is used to draw amazing stuff like shapes, graphs, manipulate images, create engaging
  games etc. with JavaScript.
  <canvas width="width" height="height" id="id" style="style">
  </canvas>
  | attribute | value | details |
  | --------- | ----- | ------- |
  | width | value | Specifies the width of the canvas |

# Marking up computer code

- if e formatting (white space, new lines, indentation) of the code matters, use pre element
  <pre>
 <code>
 x = 42
 if x == 42:
 print "x is … … 42"
 </code>
</pre>

# Inline with <code>

- <p>The <code>a</code> element creates a hyperlink.</p> <br>

# HTML ComputerCode

- <kbd>The <code>a</code> element creates a hyperlink.</kbd> <br>

# Tabindex

- <div tabindex="0">Some button</div>
- Remove an element from the tabbing order by setting the tabindex attribute to -1.
  <button tabindex="-1">This button will not be reachable by tab</button>

# Global Attributes

| attribute       | value | details                                      |
| --------------- | ----- | -------------------------------------------- |
| class           | value | Specifies the class of the element           |
| id              | value | Specifies the id of the element              |
| style           | value | Specifies the style of the element           |
| title           | value | Specifies the title of the element           |
| lang            | value | Specifies the lang of the element            |
| dir             | value | Specifies the dir of the element             |
| accesskey       | value | Specifies the accesskey of the element       |
| tabindex        | value | Specifies the tabindex of the element        |
| onclick         | value | Specifies the onclick of the element         |
| ondblclick      | value | Specifies the ondblclick of the element      |
| contenteditable | value | Specifies the contenteditable of the element |
| contextmenu     | value | Specifies the contextmenu of the element     |
| draggable       | value | Specifies the draggable of the element       |
| dropzone        | value | Specifies the dropzone of the element        |
| hidden          | value | Specifies the hidden of the element          |
| spellcheck      | value | Specifies the spellcheck of the element      |
| autocorrect     | value | Specifies the autocorrect of the element     |
| autocomplete    | value | Specifies the autocomplete of the element    |
| autocapitalize  | value | Specifies the autocapitalize of the element  |
| autofocus       | value | Specifies the autofocus of the element       |
| autoplay        | value | Specifies the autoplay of the element        |
| controls        | value | Specifies the controls of the element        |
| loop            | value | Specifies the loop of the element            |
| transition      | value | Specifies the transition of the element      |
| translate       | value | Specifies the translate of the element       |

# HTML 5 Cache

- Cache is a mechanism for storing data in the browser for later use.
- we will create a cache with the following code:
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" manifest="index.appcache">>
    <title>Document</title>
    </head>
    <body>
    <script>
    var cache = {};
    function getData(url, callback) {
    if (cache[url]) {
    callback(cache[url]);
    } else {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function() {
    cache[url] = JSON.parse(xhr.responseText);
    callback(cache[url]);
    };
    xhr.send();
    }
    }
    </script>
    </body>
    </html>
- then we will create index.appcache file with below codes
- CACHE MANIFEST, index.html
- The two files must be in the same folder in this example

# HTML Event Attributes

## HTML Form Events

| Attributes       | Description                                                             |
| ---------------- | ----------------------------------------------------------------------- |
| onabort          | Fires when the loading of an element is aborted.                        |
| onblur           | Fires when an element loses focus.                                      |
| oncanplay        | Fires when the user can play the media.                                 |
| oncanplaythrough | Fires when the user can play through the media.                         |
| onchange         | Fires when the value of an element is changed.                          |
| onclick          | Fires when an element is clicked.                                       |
| oncontextmenu    | Fires when the user right-clicks an element.                            |
| oncuechange      | Fires when the active cue changes in a text track.                      |
| ondblclick       | Fires when an element is double-clicked.                                |
| ondrag           | Fires when the user drags an element.                                   |
| ondragend        | Fires when the user drags an element and releases it.                   |
| ondragenter      | Fires when the user drags an element onto another element.              |
| ondragleave      | Fires when the user drags an element away from another element.         |
| ondragover       | Fires when the user drags an element and moves it over another element. |
| ondragstart      | Fires when the user starts to drag an element.                          |
| ondrop           | Fires when the user drops an element.                                   |
| ondurationchange | Fires when the duration of the media changes.                           |
| onemptied        | Fires when the media has been emptied.                                  |
| onended          | Fires when the media has reached the end.                               |
| onerror          | Fires when an error occurs.                                             |
| onfocus          | Fires when an element receives focus.                                   |
| oninput          | Fires when the value of an element is changed.                          |
| oninvalid        | Fires when a form is invalid.                                           |
| onkeydown        | Fires when the user presses a key.                                      |
| onkeypress       | Fires when the user presses a key.                                      |
| onreset          | Fires when a form is reset.                                             |
| onscroll         | Fires when the user scrolls.                                            |
| onsubmit         | Fires when a form is submitted.                                         |
| onselect         | Fires when text is selected.                                            |

## HTML Keyboard Events

| Attributes | Description                         |
| ---------- | ----------------------------------- |
| onkeydown  | Fires when the user presses a key.  |
| onkeypress | Fires when the user presses a key.  |
| onkeyup    | Fires when the user releases a key. |

# ARIA

- Accessible Rich Internet Applications (ARIA) is a set of accessibility features that enable web content to be more accessible to people with disabilities or other accessibility needs.
- "role" attribute is used to identify the role of an element.
- "aria-\*" attributes are used to provide additional information about an element to assist in its accessibility.

- ARIA roles

| role = "alert" | A message with important, and usually time-sensitive, information |
| role = "alertdialog" | A dialog box that contains an alert message |
| role = "application" | A container for other content |
| role = "article" | A self-contained composition |
| role = "banner" | A large heading |
| role = "button" | A clickable button |
| role = "checkbox" | A checkbox |
| role = "columnheader" | A header for a column in a table |
| role = "combobox" | A listbox with an editable text field |
| role = "complementary" | Content that is complementary to the main content |
| role = "contentinfo" | Content about the page |
| role = "dialog" | A dialog box |
| role = "directory" | A list of links to other documents |
| role = "grid" | A table with rows and columns |
| role = "gridcell" | A cell in a grid |
| role = "group" | A group of objects |
| role = "heading" | A large, main heading |
| role = "img" | An image |
| role = "link" | A hyperlink |
| role = "list" | A list of items |
| role = "listbox" | A listbox |
| role = "listitem" | An item in a list |
| role = "log" | A system log |
| role = "main" | The main content of the document |
| role = "marquee" | A scrolling text area |
| role = "menu" | A menu of commands |
| role = "menubar" | A menu bar |
| role = "menuitem" | An item in a menu |
| role = "menuitemcheckbox" | A checkbox in a menu |
| role = "menuitemradio" | A radio button in a menu |
| role = "navigation" | Content for navigating the document |
| role = "note" | A note |
| role = "option" | An option in a select list |
| role = "presentation" | Content for presenting the document |
| role = "progressbar" | A progress bar |
| role = "radio" | A radio button |
| role = "radiogroup" | A group of radio buttons |
| role = "region" | A region of the document |
| role = "row" | A row in a table |
| role = "rowgroup" | A group of rows in a table |
| role = "rowheader" | A header for a row in a table |
| role = "scrollbar" | A scroll bar |
| role = "search" | A search field |
| role = "searchbox" | A search field |
| role = "separator" | A separator |
| role = "slider" | A slider |
| role = "spinbutton" | A spin button |
| role = "status" | A status message |
| role = "switch" | A switch |
| role = "tab" | A tab |
| role = "tablist" | A list of tabs |
| role = "tabpanel" | A tab panel |
| role = "term" | A term |
| role = "textbox" | A text box |
| role = "timer" | A timer |
| role = "toolbar" | A toolbar |
| role = "tooltip" | A tooltip |
| role = "tree" | A tree |
| role = "treegrid" | A tree with rows and columns |
| role = "treeitem" | An item in a tree |
| role = "widget" | A generic widget |
| role = "window" | A window
| role = "none" | A generic container |
| role = "math" | A mathematical expression |

# HTML URL Encode

- URL encoding is used to convert special characters into a format that can be transmitted over the Internet.
- URL encoding is also known as percent encoding.
- URL encoding is used to encode a string into a valid URL.

## URL

- Uniform Resource Locator (URL) is a standard for identification of resources on the Internet.
- URL is a text string that identifies a resource on the Internet.
- is used to address a webpage or document on the Internet means our browser requests document from web server using this URL.

- Web address follows the format:
  scheme://prefix.domain:port/path/filename

| scheme   | prefix                               | domain                        | port                        |
| -------- | ------------------------------------ | ----------------------------- | --------------------------- |
| scheme   | type of internet service or protocol | http/https/ftp                | used to access the resource |
| prefix   | prefix of the domain name            | www                           | port                        |
| domain   | domain name                          | example.com                   | port                        |
| port     | port number                          | 80                            | 8080                        |
| path     | path of the resource                 | /index.html or path at server | /images/logo.png            |
| filename | name of the resource                 | index.html                    | logo.png                    |

# HTML URL Decode

- URL decoding is used to convert a URL encoded string into a normal string.
- URL decoding is also known as percent decoding.
- URL decoding is used to decode a URL into a normal string.

- Web address follows the format:
  scheme://prefix.domain:port/path/filename

# DNS

- Domain Name System
- is the phone book of the Internet.
- the translator that translates domain names (that we use) into IP addresses (that browsers use).

# IP addresses

- unique 32-bit numbers assigned to every device connected to the web.

## And how does this whole translation business happens?

1. User types a domain name in the browser and presses enter. (Ex- google . com)
2. This is a request for the files of the homepage of google and is called a query.
3. The browser queries this from a DNS server.
4. The DNS server finds the IP address of the requested domain and returns it to the web browser.
5. The browser makes an HTTP request to the received IP address.
6. The server of that address returns the files (HTML, CSS, Javascript files) to the browser.
7. The browser uses these files to render a page and displays it to the user.

# Understand how the browser works

- DOM Tree, Separation of concerns, request handling by servers, and more!
- HTML, CSS, and Javascript are the three main components of the web.
- HTML, CSS, and Javascript are coded and hosted on the server.
- Now, The job of the server is to listen for requests & 'serve' these files up when requested.
- When we go to a URL like 'google . com' a request is made to the server where the files for the homepage of Google live.
- That server keeps listening for these requests and whoever makes these requests, the server sends back the relevant files to them.
- Browsers are that piece of the puzzle that is used to make these requests.-
- Browser, in addition to making these request, perform so other tasks.

# Other ways to make a request are:

- pressing a button on a page
- refreshing a page
- going to a link
- Once a request is made, the browser 'requests' the server to send relevant files.
- The server sends back those files and that's where the real job of a browser begins.

1. HTML - is used for the content and 'what' will be displayed on a page is decided by it
2. CSS - is used for prettying things up. It is like make-up and decides 'how' things will look on a page
3. Javascript - is used for interactivity. 'What will happen if' is handled by it.

- This separating of files according to their role is called the 'seperation of concerns' approach.

# parsing

- When the browser receives an HTML file, it undergoes what is called parsing.
- Parsing is what enables the browser to take HTML files & make a DOM tree out of it.
- Parsing is itself composed of a process called 'Tokenization' in which the HTML file is broken into several sections.

# Tokenization

- Tokenization essentially enables the browser to go through the entire code file, one section at a time, and make sense of it.
- We get a parsing tree during parsing and that eventually ends up becoming the DOM tree that we see in the browser.

- everything is an Object in Javascript.
- DOM tree or the 'Document Object Model' is basically a map of the entire page, which is made up of objects, nodes and elements and we can use Javascript to manipulate these objects.
- The DOM tree is a representation of the HTML file that the browser receives from the server.
- The Javascript code we write manipulates the nodes in this DOM tree and produces interactivity.
- Nodes are the building blocks of the DOM tree or are the basic units of the DOM tree.
- Nodes such as script tags and head tags are hidden as they don't affect the rendered version of the page.

# Rendering

- rendering is the process of displaying the content of a web page
- rendering in HTML is done by the browser and the browser renders the content of the page in the browser window from top to bottom
- Rendering a webpage is the process of turning HTML, CSS, and JavaScript code into an interactive page that website visitors expect to see when clicking on a link.
- is used to calculate the layout of all the visible elements on a page.
- After this computation, the process of 'painting' starts in which content is put on the screen.

1. Traverse all visible nodes of DOM tree
2. Nodes like script (which don't affect rendered output) and those that are hidden by CSS are skipped
3. Apply relevant CSS rules to each node & compute the final layout.
4. After the Render Tree construction, the process of layout computation takes place.
5. So far, we have each visible node with its relevant CSS rules applied.
6. But we don't know their position in the tree.
7. That is calculated in the layout computation.
8. The process of layout computation is recursive & begins at the root html element.
9. It then recursively goes through the tree hierarchy & calculates geometric information for every renderer.
10. Each renderer has a 'reflow' method & that's what's invoked in this process.
11. Now that the browser knows the structure of the document, the style for each node, & the geometry of the page, it now tries to create a picture of the entire page.
12. This is called 'Painting' & is aptly called so.
13. The browser computes composites of the page in this step.
14. The process of painting takes a lot of time and things like GIFs increase the painting time.
15. After painting the browser knows everything it needs to & only converting what it knows into pixels on the screen is what is left.
16. That happens in 'Composting.'
17. Composting is the final step of the process and in this step, 'rasterising' happens.
18. Rastersing is the process of drawing a picture on the screen using known information.
19. In composting, the browser separates the page into different layers & rasters them individually
20. Since the combined effect of rasterising is that the entire page has been rasterised, when the user scrolls on a page, the new layers are displayed quickly to the user.
21. Chrome uses this technique.
22. And this is how the page is displayed to the user!

# Browser

Browsers functionality can be classified into four major sections and these include:

- Fetch: A major subsystem called network layer plays a vital role in fetching data from subsequent web servers via the internet.
  $ The network layer is responsible for the following:
- Establishing a connection with the web server
- Sending a request to the web server
- Receiving a response from the web server
- Parsing the response
- Rendering the response
- Accepts URLs from the browser user interface and is responsible for making network calls to fetch resources via HTTP/FTP protocols.

- Process
- Display
- Storage
- Security
