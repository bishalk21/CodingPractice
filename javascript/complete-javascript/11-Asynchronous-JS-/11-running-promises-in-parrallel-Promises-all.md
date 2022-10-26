# Running Promises in Parallel

`promise.all()` method takes an array of promises and returns a single promise. This single promise will resolve when all the promises in the array have resolved.

If any of the promises in the array reject, the single promise returned by `promise.all()` will immediately reject with the value of the promise that rejected.

```js
const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

const get3Countries = async (c1, c2, c3) => {
  // sequential promises
  //   const [data1] = await getJSON(`https://restcountries.eu/rest/v2/name/${c1}`);
  //   const [data2] = await getJSON(`https://restcountries.eu/rest/v2/name/${c2}`);
  //   const [data3] = await getJSON(`https://restcountries.eu/rest/v2/name/${c3}`);

  // use Promise.all() to run promises in parallel
  Promise.all([
    getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
    getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
    getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
  ])
    .then((data) => console.log(data.map((d) => d[0].capital)))
    .catch((err) => console.error(`${err.message} 💥`))
    .finally(() => console.log("3 countries loaded"));

  console.log([data1.capital, data2.capital, data3.capital]);
};

get3Countries("portugal", "canada", "tanzania");
```
