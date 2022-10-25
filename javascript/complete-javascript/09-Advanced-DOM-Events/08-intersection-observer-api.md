# Intersection Observer API

In this section, we will learn about the Intersection Observer API.

The Intersection Observer API allows us to observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.

This API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport by using the [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) interface.

## The Intersection Observer API in Practice

```javascript
const obsCallback = function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
  });
};

const obsOptions = {
  root: null,
  threshold: [0, 0.2],
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);
```

The Intersection Observer API is needed for many reasons:

- Lazy loading images or other content as a page is scrolled
- Implementing infinite scrolling web sites
- Implementing "sticky" headers or other UI elements that should be fixed to the viewport as the user scrolls
- Reporting visibility of ads to ad networks
- Deciding whether or not to perform computationally expensive operations based on whether or not the user will see the result

## Creating Intersection Observers API

The [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) interface of the Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.

- call its constructor with a callback function and an optional options object
- calling its constructor and passing it a callback function to be run whenever a threshold is crossed in one direction or the other:

```javascript
let options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  threshold: 1.0,
};

let observer = new IntersectionObserver(callback, options);
```

## Intersection Observer API Options

| Option       | Description                                                                                                                                                                                                                                                                                                                                                                       |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `root`       | The element that is used as the viewport for checking visibility of the target. Must be the ancestor of the target. Defaults to the browser viewport if not specified or if `null`.                                                                                                                                                                                               |
| `rootMargin` | Margin around the root. Can have values similar to the CSS margin property, e.g. "10px 20px 30px 40px" (top, right, bottom, left). The values can be percentages. This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections. Defaults to all zeros.                                                                 |
| `threshold`  | Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. If you only want to detect when visibility passes the 50% mark, you can use a value of 0.5. If you want the callback to run every time visibility passes another 25%, you would specify the array [0, 0.25, 0.5, 0.75, 1]. |

## Intersection Observer API Callback

The callback function is called whenever the target element crosses a threshold, which is a ratio of intersection area to bounding box area.

The callback function is passed an array of [`IntersectionObserverEntry`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry) objects, which are the observed targets.

```javascript
const obsCallback = function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
  });
};
```

## Intersection Observer API Callback Entries and Observer

When the callback function is called, it is passed two arguments:

- `entries`
- `observer`

### Entries

Each entry describes an intersection change for one observed target element:

- `isIntersecting` - `true` if the target element intersects with the root at the time the callback is invoked, otherwise `false`
- `intersectionRatio` - the ratio of the intersection area to the bounding box area of the target element
- `intersectionRect` - the [DOMRectReadOnly](https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly) of the intersection of the target and root
- `boundingClientRect` - the [DOMRectReadOnly](https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly) of the target element
- `rootBounds` - the [DOMRectReadOnly](https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly) of the root element
- `target` - the target element
- `time` - the time at which the intersection was recorded

`entries` is an array of [`IntersectionObserverEntry`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry) objects, each of which describes an intersection change for one observed target element.

### Observer

Each entry describes an intersection change for one observed target element:

`observer` is the [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) instance whose callback is currently being invoked.

## Intersection Observer API Methods

| Method               | Description                                                                                                                                                                                                                                                                                                                                                                                                           |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `observe()`          | Starts observing a given target element for intersection changes based on the thresholds values.                                                                                                                                                                                                                                                                                                                      |
| `unobserve()`        | Stops observing a given target element for intersection changes.                                                                                                                                                                                                                                                                                                                                                      |
| `disconnect()`       | Stops observing all target elements for intersection changes.                                                                                                                                                                                                                                                                                                                                                         |
| `takeRecords()`      | Returns an array of [`IntersectionObserverEntry`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry) objects, each of which describes a transition that has just occurred to the intersection of the observed target element with its root container. This method can be used to get the notification that would have been delivered to the callback, without having to register a callback. |
| `root`               | The element that is used as the viewport for checking visibility of the target. Must be the ancestor of the target. Defaults to the browser viewport if not specified or if `null`.                                                                                                                                                                                                                                   |
| `rootMargin`         | Margin around the root. Can have values similar to the CSS margin property, e.g. "10px 20px 30px 40px" (top, right, bottom, left). The values can be percentages. This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections. Defaults to all zeros.                                                                                                     |
| `threshold`          | Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. If you only want to detect when visibility passes the 50% mark, you can use a value of 0.5. If you want the callback to run every time visibility passes another 25%, you would specify the array [0, 0.25, 0.5, 0.75, 1].                                     |
| `rootBounds`         | The bounding rectangle of the root after being expanded by the values of the `rootMargin` property.                                                                                                                                                                                                                                                                                                                   |
| `boundingClientRect` | The bounding rectangle of the target.                                                                                                                                                                                                                                                                                                                                                                                 |
| `intersectionRect`   | The intersection rectangle of the target and the root after being clipped by the intersection of the two.                                                                                                                                                                                                                                                                                                             |
| `intersectionRatio`  | The ratio of the intersectionRect to the boundingClientRect.                                                                                                                                                                                                                                                                                                                                                          |
| `isIntersecting`     | A boolean value indicating whether or not the target element is intersecting with the root.                                                                                                                                                                                                                                                                                                                           |

## Intersection Observer API Properties

| Property             | Description                                                                                                                                                                                                                                                                                                                                                                       |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `root`               | The element that is used as the viewport for checking visibility of the target. Must be the ancestor of the target. Defaults to the browser viewport if not specified or if `null`.                                                                                                                                                                                               |
| `rootMargin`         | Margin around the root. Can have values similar to the CSS margin property, e.g. "10px 20px 30px 40px" (top, right, bottom, left). The values can be percentages. This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections. Defaults to all zeros.                                                                 |
| `threshold`          | Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. If you only want to detect when visibility passes the 50% mark, you can use a value of 0.5. If you want the callback to run every time visibility passes another 25%, you would specify the array [0, 0.25, 0.5, 0.75, 1]. |
| `rootBounds`         | The bounding rectangle of the root after being expanded by the values of the `rootMargin` property.                                                                                                                                                                                                                                                                               |
| `boundingClientRect` | The bounding rectangle of the target.                                                                                                                                                                                                                                                                                                                                             |
| `intersectionRect`   | The intersection rectangle of the target and the root after being clipped by the intersection of the two.                                                                                                                                                                                                                                                                         |
| `intersectionRatio`  | The ratio of the intersectionRect to the boundingClientRect.                                                                                                                                                                                                                                                                                                                      |
| `isIntersecting`     | A boolean value indicating whether or not the target element is intersecting with the root.                                                                                                                                                                                                                                                                                       |
