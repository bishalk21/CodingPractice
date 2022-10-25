# Lazy Loading Images

In this section, we will learn about lazy loading images.

Lazy Loading is one of the most important techniques to improve the performance of your website.

Lazy loading is a technique that defers loading of non-critical resources at page load time. Instead, these non-critical resources are loaded at the moment of need. This technique offers a number of benefits, such as:

- Reduced initial page load time
- Reduced network bandwidth usage
- Improved perceived performance

## The Intersection Observer API in Practice

```javascript
const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));
```
