# How CSS works?

When you write a CSS rule, you are actually writing a rule that will be applied to the HTML document. The browser will read the HTML document and then apply the CSS rules to the HTML document. The browser will read the CSS rules from top to bottom and apply the rules to the HTML document.

A browser will read the HTML document and then apply the CSS rules to the HTML document. The browser will read the CSS rules from top to bottom and apply the rules to the HTML document.

1. Browser loads the HTML document.(HTML is the content of the page)
2. Browser converts the HTML document into a DOM (Document Object Model) tree. (DOM is the structure of the page). The DOM tree is a representation of the HTML document in the form of objects and represents the document in the Computer memory.
3. Browser fetches most of the resources like CSS, images, and JavaScript files that are linked in the HTML document. Then it parses the CSS files and converts them into CSSOM (CSS Object Model) trees. (CSSOM is the style of the page)
4. Browser converts the CSS into a CSSOM (CSS Object Model) tree. (CSSOM is the style of the page). The CSSOM tree is a representation of the CSS in the form of objects and represents the CSS in the Computer memory.
5. Browser parses the fetched CSS and applies the CSS rules to the DOM tree to create a render tree. (Render tree is the combination of DOM and CSSOM).
6. The render tree is laid out in the viewport or structure it should appear in after the rules have been applied to the DOM tree.
7. The render tree is painted on the screen or the visual representation of the render tree is displayed on the screen which is called painting.

Browser ---> Parses HTML ---> Creates DOM ---> fetches and Parses CSS ---> Creates CSSOM ---> Combines DOM and CSSOM ---> Creates Render Tree ---> Lays out Render Tree ---> Paints Render Tree
