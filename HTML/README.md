- [HTML](###html)
- [HyperText](#hypertext)
- [Markup](#markup)
- [SEO](#seo)
- [HTML Elements](#html-elements)
- [HTML Comment](#html-comment)
- [IDS](#ids)
- [Favicon](#favicon)
- [Resource Hint: dns-prefetch, prefetch, prerender](#resource-hint-dns-prefetch-prefetch-prerender)
- [HTML Input Control Elements](#html-input-control-elements)
- [SVG](#svg)
- [Canvas](#canvas)
- [Marking up computer code](#marking-up-computer-code)
- [Tabindex](#tabindex)
- [Global Attributes](#global-attributes)
- [HTML 5 Cache](#html-5-cache)
- [HTML Event Attributes](#html-event-attributes)
- [HTML Form Events](##html-form-events)
- [HTML Keyboard Events](##html-keyboard-events)
- [ARIA Attributes](#aria)
- [12 Column Grid Responsive Design or layout](#12-column-grid-responsive-design-or-layout)
- [HTML URL Encode](#html-url-encode)
- [HTML URL Decode](#html-url-decode)

  • Learn the anatomy of HTML syntax to structure your websites.
  • Understand the HTML boilerplate and HTML doctypes.
  • How to structure text in HTML.
  • How to structure HTML lists to create unordered and ordered lists.
  • How to insert images using HTML
  • How to create hyperlinks using anchor tags.
  • Understand how to use HTML tables for content.
  • How to use tables for layout.
  • Learn HTML best practices.
  • Understand about HTML forms and create a simple contact me form.
  • HTML Divs and how to separate content for CSS styling

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
- is not case sensitive (i.e. <HTML> and <html> are the same)

# HyperText

- text that have links to other text or data

# Markup

- means how to display the text
- is a way to structure the text or annotations to the content like bold, italic, underline, etc.

# HTML Elements

- HTML elements are the building blocks of HTML pages
- HTML elements tell the browser how to display the content

# Foundation of HTML Elements

- tags
- attributes
- content

# HTML Comment

- HTML comments are used to add a description to the HTML code
- HTML comments are not displayed on the page, but they are read by the browser
- <!---->

# Tags

- tags are used to create HTML elements
- tags are always surrounded by a start and end tag

# Attributes

- attributes specify the HTML element's properties
- attributes are specified within the opening tag
- attributes are separated from the tag by an equals sign (=)

# Content

- content is the text that is displayed within the HTML element

# Structure of an HTML Document

    <code>
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
    </code>

# Semantic HTML

- semantic elements clearly describes its meaning to the developer and browser
- Semantic HTML elements are easy to read and understand
- examples: <header>, <footer>, <nav>, <main>, <article>, <section>, <aside>, <figure>, <figcaption>, <time>
- address element indicates that the content is a contact information

* For indexing the structure and content of your web pages, search engines use semantic HTML and HTML elements that are meaningful.

# SEO

# What is SEO?

- Search Engine Optimization
- Search Engine Optimization is the process of making sure that your website is indexed by search engines and that it is displayed on the top of search results.
- process of optimizing the content of a website for search engines

# Rendering

- rendering is the process of displaying the content of a web page
- rendering in HTML is done by the browser and the browser renders the content of the page in the browser window from top to bottom

# DOCTYPE - Declaration of the Document Type

- is used to inform the browser about the type of document or whether the page is following the HTML5 specification or not
- defines the type of document

# head

- contains the machine-readable tags that define the structure of the document like the title, the author, the description, the keywords, the stylesheets, the scripts, etc.
- contains meta, link, script, and style elements, and the title element

# meta

- defines metadata about the document (e.g. author, description, keywords)
- meta elements are used to specify the content type of the document
- not displayed on the page, but they are read by the browser, search engines, and other web browsers or services

1. Character sets and encodings

- <meta charset="utf-8">:
- defines the character encoding of the document
- UTF-8 is the most common character encoding, which is used in the HTML5 specification

2. keywords for SEO

- <meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript">

3. description for SEO

- <meta name="description" content="This is my first HTML page">

4. author for SEO

- <meta name="author" content="Bishal Karki">

5. viewport for SEO and different devices support or responsive design

- <meta name="viewport" content="width=device-width, initial-scale=1.0"> // width=device-width means that the page will be displayed in the same width as the device width // initial-scale=1.0 means that the page will be displayed in 100% of the width of the device

6. page refresh for SEO after certain time

- <meta http-equiv="refresh" content="5;url=http://www.example.com/"> // 5

7. robots for SEO

- <meta name="robots" content="index,follow noindex"> // index,follow

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

- <!-- The style to be used for this article -->
- <meta property="fb:article_style" content="myarticlestyle"> //facebook
- <meta name="twitter:card" content="summary">
- <meta name="twitter:site" content="@site_account">
- <meta name="twitter:creator" content="@individual_account">
   <meta name="twitter:card" content="summary">
   <meta name="twitter:site" content="@site_account">
   <meta name="twitter:creator" content="@individual_account">
   <meta name="twitter:url" content="https://example.com/page.html">
   <meta name="twitter:title" content="Content Title">
   <meta name="twitter:description" content="Content description less than 200 characters">
   <meta name="twitter:image" content="https://example.com/image.jpg">
  <!-- Google+ / Schema.org -->
     <link href="https://plus.google.com/+YourPage" rel="publisher">
     <meta itemprop="name" content="Content Title">
     <meta itemprop="description" content="Content description less than 200 characters">
     <meta itemprop="image" content="https://example.com/image.jpg">

3. Mobile Layout for SEO

- <meta name="viewport" content="width=device-width, initial-scale=1.0">

  | Attributes    | Description                                                                             |
  | ------------- | --------------------------------------------------------------------------------------- |
  | width         | The width of the viewport in device-independent pixels.                                 |
  | initial-scale | The initial scale of the viewport.                                                      |
  | shrink-to-fit | If true, the viewport width is dynamically determined based on the width of the device. |
  | user-scalable | If true, the viewport width is dynamically determined based on the width of the device. |
  | minimum-scale | The minimum scale of the viewport.                                                      |
  | maximum-scale | The maximum scale of the viewport.                                                      |

4. Automatic Refresh for SEO

- <meta http-equiv="refresh" content="5;url=http://www.example.com/"> // 5

5. Phone Number for SEO

- <meta name="phone" content="+1-800-555-1234">

6. Automatic Redirection for SEO

- <meta http-equiv="refresh" content="5;url=http://www.example.com/"> // 5

7. Web App

- <meta name="apple-mobile-web-app-capable" content="yes">
- <meta name="apple-mobile-web-app-status-bar-style" content="black">
- <meta name="apple-mobile-web-app-title" content="Web App Title">
- <meta name="apple-mobile-web-app-status-bar-style" content="black">
- <meta name="mobile-web-app-capable" content="yes">
- <meta name="theme-color" content="black">

# head element

- viewport is used to specify the dimensions of the browser window: <meta name="viewport" content="width=device-width, initial-scale=1.0">
- link is used to link to other documents: <link rel="stylesheet" href="style.css">
- title is used to define the title of the document: <title>My First HTML Page</title>
- style is used to define the style of the document: <style>p {color: red;}</style>
- script is used to define the script of the document: <script>alert("Hello World!");</script>
- base is used to define the base URL of the document or targets for all links or URLs in the document or to define the default target for all links in the document using the target or rel or href attribute: <base href="http://example.com/" target="_blank" rel="nofollow" />
- target blank is used to open the linked document in a new window: <a href="http://example.com/" target="_blank">Example</a>

# body

- defines the content of the document
- contains the main content of the document, that is displayed in the browser window
- <body oncontextmenu="return false"> // oncontextmenu is used to prevent the right click menu from appearing on the page

# HTML Headings

- h1, h2, h3, h4, h5, h6 are used to define the heading of the document
- headings are used mainly to define the content of the document as well as the structure of the document

# HTML Content Model

- HTML content model is the structure of the document

# block level elements

- render to begin a new line (by default)
- may contain other block level elements and inline elements
- pushes next element to the next line
- block elements group content into a single unit. They are used to create sections of content.
- example: <p>, <div>, <header>, <footer>, <nav>, <main>, <article>, <section>, <aside>, <figure>, <figcaption>, <time>

# inline level elements

- render to stay on the same line (by default)
- cannot have block elements
- inline elements are used to group content that is not part of a block element.
- example: <a>, <span>, <b>, <i>, <em>, <strong>, <small>, <big>, <sub>, <sup>, <q>, <cite>, <time>

# nested elements

- nested elements are used to group content that is part of a block element.
- example: <ul>, <ol>, <li>, <dl>, <dt>, <dd>, <table>, <tr>, <th>, <td>, <thead>, <tbody>, <tfoot>, <colgroup>, <col>

# HTML Links or Hyperlinks or anchors

- links have two attributes: href and rel: <a href="http://example.com/" rel="nofollow">Example</a>
- links are used to link to other documents
- <a> is used to create a link
- <a href=""></a> is used to define the link of the documents

# Links

- target specifies where to open the linked document: <a href="http://example.com/" target="_blank">Example</a>
- target is used to define the ta2rget of the link. It can be \_blank, \_self, \_parent, \_top, or a frame name.
- <a href="" target="_self"> </a>: opens the page in same browser window
- rel is used to define the relationship of the link. rel defines the relationship between document and external resource.
- noopener is used to prevent the browser from opening a new window when the link is clicked and
- noreferrer is used to prevent the browser from sending a referrer header when the link is clicked.
- mailto is used to create a link to an email address
- <a href="mailto:"></a> is used to define the email address and the subject of the email
- <a href="tel:"></a> is used to define the phone number of the link
- <a name=""></a> is used to define a name for the link

# Absolute Link

- are also called external links and are for links to other websites
- <a href="http://example.com/"></a> is used to define the absolute link of the documents

# Relative Link

- are also called internal links and are links which are giving local pages from same website

# HTML Images

- images are used to display images
- <img> is used to create an image
- <img src=""> is used to define the image
- alt is used to define the alternative text of the image

# Multimedia

- <audio> is used to create an audio element
- <track> is used to create a track element. It is used to define the track of the audio element.

- <br>,

# Text Content

- blockquote is used to create a blockquote
- <q> is used to create a quotation mark // <q> is an inline element
- <cite> is used to create a citation mark (e.g. "John Doe")
- dd is used to create a definition description
- dt is used to create a definition term
- figcaption is used to create a figure caption // <figcaption> is an inline element
- figure is used to create a figure // <figure> is a block element
- pre is used to create a preformatted text // <pre></pre> helps in solving poetry problems
- p is used to create a paragraph // <p> is a block element
- ul is used to create an unordered list // <ul> is a block element
- ol is used to create an ordered list // <ol> is a block element
- li is used to create a list item // <li> is an inline element
- hr is used to create a horizontal rule // <hr> is a block element

# Inline Text Semantics

- a is used to create a link // <a> is an inline element
- abbr is used to create an abbreviation // <abbr> is an inline element
- br is used to create a line break // <br> is an inline element
- cite is used for refrencing cited creative works // <cite> is an inline element
- code is used to create a code sample //
- em is used to create an emphasized text // <em> is an inline element
- mark is used to create a marked text // <mark> is an inline element
- small is used to create a small text // <small> is an inline element
- span is used to create a span // <span> is an inline element for phrasing content
- strong is used to create a strong text // <strong> is an inline element
- time is used to create a time stamp // <time> is an inline element

# formatting the text inside paragraphs or other elements

- <b>: bold text
- <i>: italic text
- <u>: underlined text
- <code><s></code>: strikethrough text
- <sub>: subscript text
- <sup>: superscript text
- <q>: quotation text
- <cite>: citation text
- <mark>: marked text
- <small>: small text
- <span>: span text
- <strong>: strong text
- <time>: time stamp text
- <em>: emphasized text
- <ins>: inserted text

# Scripting

- script is used to create a script // <script> is a block element
- <script src=""></script> is used to define the script
- <script type="text/javascript" src="./javascript.js"></script> is used to define the script

# Demarcating Edits

- demarcating edits is used to indicate that a change has been made to a document
- <del> is used to create a deleted text // <del> is an inline element
- <ins> is used to create an inserted text // <ins> is an inline element

# HTML Table

- <table> is used to create a table // <table> is a block element
- <caption> is used to create a table caption // <caption> is a block element
- <thead> is used to create a table header // <thead> is a block element
- <tbody> is used to create a table body // <tbody> is a block element
- <tfoot> is used to create a table footer // <tfoot> is a block element
- <tr> is used to create a table row // <tr> is a block element
- <th> is used to create a table header cell // <th> is a block element
- <td> is used to create a table data cell // <td> is a block element
- <col> is used to create a table column // <col> is a block element
- <colgroup> is used to create a table column group // <colgroup> is a block element
- <colspan> is used to create a table column span // <colspan> is an inline element
- <rowspan> is used to create a table row span // <rowspan> is an inline element

# HTML Forms

- Forms are used to collect user input and send it to a server.
- <form> is used to create a form // <form> is a block element
- <input> is used to create an input // <input> is an inline element
- <button> is used to create a button // <button> is an inline element
- <select> is used to create a select // <select> is a block element
- <option> is used to create an option // <option> is an inline element
- <textarea> is used to create a textarea // <textarea> is a block element
- <label> is used to create a label // <label> is an inline element
- <fieldset> is used to create a fieldset // <fieldset> is a block element
- <legend> is used to create a legend // <legend> is an inline element
- <datalist> is used to create a datalist // <datalist> is a block element
- <optgroup> is used to create an optgroup // <optgroup> is a block element

# HTML Forms Attributes

- action is used to define the action of the form: action="".
- method is used to define the method of the form: method="".
- enctype is used to define the encoding type of the form data: enctype="".
- accept-charset is used to define the character sets that the server accepts // accept-charset is used to define the character sets that the server accepts
- accept is used to define the types of files that the server accepts // accept is used to define the types of files that the server accepts
- autocomplete is used to define whether the form is automatically completed // autocomplete is used to define whether the form is automatically completed
- autofocus is used to define whether the form should be automatically focused // autofocus is used to define whether the form should be automatically focused
- novalidate is used to define whether the form should be validated // novalidate is used to define whether the form should be validated

# HTML Input Types

- <input type=""> is used to create an input
- <input type="text"> is used to create a text input
- <input type="password"> is used to create a password input
- <input type="checkbox"> is used to create a checkbox
- <input type="radio"> is used to create a radio button
- <input type="submit"> is used to create a submit button
- <input type="reset"> is used to create a reset button
- <input type="file"> is used to create a file input
- <input type="hidden"> is used to create a hidden input
- <input type="image"> is used to create an image input
- <input type="button"> is used to create a button input
- <input type="search"> is used to create a search input
- <input type="tel"> is used to create a telephone input
- <input type="url"> is used to create a URL input
- <input type="email"> is used to create an email input
- <input type="datetime"> is used to create a date and time input
- <input type="date"> is used to create a date input
- <input type="month"> is used to create a month input
- <input type="week"> is used to create a week input
- <input type="time"> is used to create a time input
- <input type="datetime-local"> is used to create a date and time input
- <input type="number"> is used to create a number input
- <input type="range"> is used to create a range input
- <input type="color"> is used to create a color input
- <input type="readonly"> is used to create a readonly input
- <input type="required"> is used to create a required input
- <input type="autofocus"> is used to create an autofocus input
- <input type="list"> is used to create a list input
- <input type="url"> is used to create a URL input
- <input type="id"> is used to create an ID input

# HTML Lists

- lists are used to create lists
- <ul> is used to create an unordered list
- <ol> is used to create an ordered list
- <li> is used to create a list item
- <dl> is used to create a definition list
- <dt> is used to create a definition term
- <dd> is used to create a definition description

# HTML List attributes

- <li start=""> is used to create a list item with a start attribute
- <li type=""> is used to create a list item with a type
- <li value=""> is used to create a list item with a value
- <li class=""> is used to create a list item with a class
- <li id=""> is used to create a list item with an id
- <li data-*=""> is used to create a list item with a data attribute
- <li style=""> is used to create a list item with a style
- <li title=""> is used to create a list item with a title
- <li lang=""> is used to create a list item with a language
- <li dir=""> is used to create a list item with a direction
- <li onclick=""> is used to create a list item with an onclick event
- <li ondblclick=""> is used to create a list item with an ondblclick event
- <li onmousedown=""> is used to create a list item with an onmousedown event
- <li onmouseup=""> is used to create a list item with an onmouseup event
- <li onmouseover=""> is used to create a list item with an onmouseover event
- <li onmousemove=""> is used to create a list item with an onmousemove event
- <li onmouseout=""> is used to create a list item with an onmouseout event
- <li onmouseenter=""> is used to create a list item with an onmouseenter event

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

- <&;>: creates an entity reference
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

| Attribute | Details |
| charset | Specifies the character encoding of the linked document |
| href | Specifies the URL of the linked document |
| hreflang | Specifies the language of the linked document |
| media | Specifies the media type of the linked document |
| rel | Specifies the relationship between the current document and the linked document |
| sizes | Specifies the size of the linked document |
| type | Specifies the media type of the linked document |
| target | Specifies where to open the linked document |
| rev | Specifies the relationship between the current document and the linked document |
| ping | Specifies the URL of the linked document |
| integrity | Specifies a base64 encoded hash (sha256, sha384, or sha512) of the linked resource allowing the
browser to verify its legitimacy|

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

# HTML Input Control Elements

- input controls are used to collect data from the user.
  | Parameter | value | Details |
  | --------- | ----- | ------- |
  | type | value | Specifies the type of input control |
  | name | value | Specifies the name of the input control |
  | value | value | Specifies the value of the input control |
  | checked | value | Specifies that the input control is checked |
  | disabled | value | Specifies that the input control is disabled |
  | required | value | Specifies that the input control is required |
  | autofocus | value | Specifies that the input control should be focused when the page loads |
  | form | value | Specifies the name of the form |
  | formaction| value | Specifies the action of the form |
  | formmethod| value | Specifies the method of the form |
  | formenctype| value | Specifies the encoding type of the form |
  | formtarget| value | Specifies the target of the form |
  | formnovalidate| value | Specifies that the form should not be validated |
  | formvalidate| value | Specifies that the form should be validated |
  | formenctype| value | Specifies the encoding type of the form |
  | formtarget| value | Specifies the target of the form |
  | formnovalidate| value | Specifies that the form should not be validated |
  | formvalidate| value | Specifies that the form should be validated |
  | multiple | value | Specifies that the input control accepts multiple values |
  | max | value | Specifies the maximum value of the input control |
  | min | value | Specifies the minimum value of the input control |
  | step | value | Specifies the step value of the input control |
  | pattern | value | Specifies the pattern of the input control |
  | placeholder | value | Specifies the placeholder of the input control |
  | readonly | value | Specifies that the input control is read-only |
  | size | value | Specifies the size of the input control |
  | list | value | Specifies the name of the list |
  | maxlength | value | Specifies the maximum length of the input control |
  | minlength | value | Specifies the minimum length of the input control |
  | autocomplete | value | Specifies the autocomplete of the input control |

# Input Validation

- input validation is used to validate the input of the user.
- <input type="text" name="name" value="value" required>
- <input type="text" name="name" value="value" required pattern="[0-9]{3}">
- <input type="text" name="name" value="value" required pattern="[0-9]{3}" maxlength="3">
- <input type="text" name="name" value="value" required pattern="[0-9]{3}" maxlength="3" minlength="3">
- <input type="text" name="name" value="value" required pattern="[0-9]{3}" maxlength="3" minlength="3" autocomplete="off">

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
  <iframe src="URL" name="name" width="width" height="height"
          scrolling="scrolling" frameborder="frameborder"
          marginheight="marginheight" marginwidth="marginwidth"
          allowfullscreen="allowfullscreen" allow="allow">
  </iframe>
| attribute | value | details |
| --------- | ----- | ------- |
| src | value | Specifies the URL of the document to embed |
| srcdoc | value | Specifies the document to embed| anchor | value | Specifies the name of the anchor| name | value | Specifies the name of the iframe| width | value | Specifies the width of the iframe| height | value | Specifies the height of the iframe| scrolling | value | Specifies whether the iframe should have scrollbars| frameborder | value | Specifies whether the iframe should have a border| marginheight | value | Specifies the margin height of the iframe| marginwidth | value | Specifies the margin width of the iframe| allowfullscreen | value | Specifies whether the iframe should allow fullscreen| allow | value | Specifies the features allowed in the iframe |
- sandbox in iframe
  | attribute | value | details |
  | --------- | ----- | ------- |
  | allow-forms | value | Specifies that the iframe should allow forms |
  | allow-pointer-lock | value | Specifies that the iframe should allow pointer lock |
  | allow-popups | value | Specifies that the iframe should allow popups |
  | allow-same-origin | value | Specifies that the iframe should allow same origin |
  | allow-scripts | value | Specifies that the iframe should allow scripts |
  | allow-top-navigation | value | Specifies that the iframe should allow top navigation |

# SVG

- svg is a standard for scalable vector graphics.
  <svg width="width" height="height" viewbox="viewbox" preserveaspectratio="preserveaspectratio" xmlns="xmlns" version="version">
  </svg>
  | attribute | value | details |
  | --------- | ----- | ------- |
  | width | value | Specifies the width of the svg |
  | height | value | Specifies the height of the svg |
  | viewbox | value | Specifies the viewbox of the svg |
  | preserveaspectratio | value | Specifies the preserveaspectratio of the svg |
  | xmlns | value | Specifies the xmlns of the svg | xmlns stands for XML Namespace |
  | version | value | Specifies the version of the svg |
  | path | value | Specifies the path of the svg |
  | circle | value | Specifies the circle of the svg |
  | ellipse | value | Specifies the ellipse of the svg |
  | line | value | Specifies the line of the svg |
  | polygon | value | Specifies the polygon of the svg |
  | polyline | value | Specifies the polyline of the svg |
  | rect | value | Specifies the rect of the svg |
  | text | value | Specifies the text of the svg |
  | tspan | value | Specifies the tspan of the svg |
  | image | value | Specifies the image of the svg |
  | defs | value | Specifies the defs of the svg |
  | g | value | Specifies the g of the svg |
  | mask | value | Specifies the mask of the svg |
  | pattern | value | Specifies the pattern of the svg |
  | clipPath | value | Specifies the clipPath of the svg |
  | linearGradient | value | Specifies the linearGradient of the svg |
  | radialGradient | value | Specifies the radialGradient of the svg |
  | stop | value | Specifies the stop of the svg |
  | symbol | value | Specifies the symbol of the svg |
  | use | value | Specifies the use of the svg |
  | animate | value | Specifies the animate of the svg |
  | animateMotion | value | Specifies the animateMotion of the svg |
  | id | value | Specifies the id of the svg |
  | class | value | Specifies the class of the svg |
  | style | value | Specifies the style of the svg |
  | transform | value | Specifies the transform of the svg |
  | transform-origin | value | Specifies the transform-origin of the svg |
  | visibility | value | Specifies the visibility of the svg |
  | display | value | Specifies the display of the svg |
  | overflow | value | Specifies the overflow of the svg |
  | clip | value | Specifies the clip of the svg |
  | clip-path | value | Specifies the clip-path of the svg |
  | mask | value | Specifies the mask of the svg |
  | filter | value | Specifies the filter of the svg |
  | opacity | value | Specifies the opacity of the svg |
  | fill | value | Specifies the fill of the svg |
  | fill-opacity | value | Specifies the fill-opacity of the svg |
  | fill-rule | value | Specifies the fill-rule of the svg |
  | stroke | value | Specifies the stroke of the svg |
  | stroke-opacity | value | Specifies the stroke-opacity of the svg |
  | stroke-width | value | Specifies the stroke-width of the svg |
  | stroke-linecap | value | Specifies the stroke-linecap of the svg |
  | stroke-linejoin | value | Specifies the stroke-linejoin of the svg |
  | stroke-miterlimit | value | Specifies the stroke-miterlimit of the svg |
  | marker | value | Specifies the marker of the svg |
  | marker-start | value | Specifies the marker-start of the svg |
  | marker-mid | value | Specifies the marker-mid of the svg |
  | marker-end | value | Specifies the marker-end of the svg |
  | mask | value | Specifies the mask of the svg |
  | clip-path | value | Specifies the clip-path of the svg |
  | clip-rule | value | Specifies the clip-rule of the svg |
  | color | value | Specifies the color of the svg |
  | color-interpolation | value | Specifies the color-interpolation of the svg |
  | color-interpolation-filters | value | Specifies the color-interpolation-filters of the svg |
  | color-profile | value | Specifies the color-profile of the svg |
  | color-rendering | value | Specifies the color-rendering of the svg |
  | cursor | value | Specifies the cursor of the svg |
  | direction | value | Specifies the direction of the svg |
  | display | value | Specifies the display of the svg |
  | dominant-baseline | value | Specifies the dominant-baseline of the svg |
  | enable-background | value | Specifies the enable-background of the svg |
  | fill | value | Specifies the fill of the svg |

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
