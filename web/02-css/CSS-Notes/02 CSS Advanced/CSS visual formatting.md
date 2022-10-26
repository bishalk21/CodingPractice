# CSS Visual Formatting

- **Objective:** The visual formatting model typically explains how elements in the document tree are processed for visual media such as computer screen.

### CSS Visual Formatting MOdel
The CSS visual formatting model is the algorithm that is used to process the documents for visual media. In the visual formatting model, each element in the document tree generates zero or more boxes according to the box model.

The layout of these boxes is depended on the following factors:

-  box dimensions.
- type of the element (block or inline).
- positioning scheme (normal flow, float, and absolute positioning).
- relationships between elements in the document tree.
- relationships between elements in the document tree.

> **Note:** The document tree is the hierarchy of elements encoded in the source document. Every element in the document tree has exactly one parent, with the exception of the root element, which has none.
---
### Types of Boxes Generated in CSS
Every element displayed on a web page generates a rectangular box. 

#### Block-level Elements and Block Boxes

Block-level elements are those elements that are formatted visually as blocks (i.e. takes up the full width available), with a line break before and after the element. For example, paragraph element (\<p>), headings (\<h1> to \<h6>), divisions (\<div>) etc.

Generally, block-level elements may contain inline elements and other block-level elements.

### Inline - level Elements and Inline Boxes
Inline-level elements are those elements of the source document that do not form new blocks of content; the content is distributed in lines. For example, emphasized pieces of text within a paragraph (\<em>), spans (\<span>), strong element (\<strong>) etc.

> **Note:** Unlike block-level elements, an inline-level element only takes up as much width as necessary, and does not force line breaks.
---

