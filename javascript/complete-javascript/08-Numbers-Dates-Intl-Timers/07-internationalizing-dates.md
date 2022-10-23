# Internationalizing Dates

Internationalizing Dates is a way to format dates in different languages and locales. The `Intl.DateTimeFormat` object is used to format dates and times in different languages and locales.

## Intl.DateTimeFormat

The `Intl.DateTimeFormat` object is used to format dates and times in different languages and locales.

```js
const now = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const locale = navigator.language;
console.log(locale); // en-US

const formattedDate = new Intl.DateTimeFormat(locale, options).format(now);

console.log(formattedDate); // Friday, December 25, 2020
```

## Intl.DateTimeFormat options, parameters, and return values

The `Intl.DateTimeFormat` object has the following options, parameters, and return values:

| Option          | Values                                          | Example                                 |
| --------------- | ----------------------------------------------- | --------------------------------------- |
| `weekday`       | `long`, `short`, `narrow`                       | `Friday`, `Fri`, `F`                    |
| `year`          | `numeric`, `2-digit`                            | `2020`, `20`                            |
| `month`         | `numeric`, `2-digit`, `long`, `short`, `narrow` | `12`, `12`, `December`, `Dec`, `D`      |
| `day`           | `numeric`, `2-digit`                            | `25`, `25`                              |
| `hour`          | `numeric`, `2-digit`                            | `0`, `00`                               |
| `minute`        | `numeric`, `2-digit`                            | `0`, `00`                               |
| `second`        | `numeric`, `2-digit`                            | `0`, `00`                               |
| `timeZone`      | `UTC`, `America/New_York`, `Asia/Tokyo`         | `UTC`, `America/New_York`, `Asia/Tokyo` |
| `hour12`        | `true`, `false`                                 | `true`, `false`                         |
| `formatMatcher` | `basic`, `best fit`                             | `basic`, `best fit`                     |
| `hourCycle`     | `h11`, `h12`, `h23`, `h24`                      | `h11`, `h12`, `h23`, `h24`              |

The `Intl.DateTimeFormat` object has the following parameters:

| Parameter | Values                                                                                                            | Example                                                                                                           |
| --------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `locale`  | `en-US`, `en-GB`, `de-DE`, `ja-JP`, `zh-CN`                                                                       | `en-US`, `en-GB`, `de-DE`, `ja-JP`, `zh-CN`                                                                       |
| `options` | `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second`, `timeZone`, `hour12`, `formatMatcher`, `hourCycle` | `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second`, `timeZone`, `hour12`, `formatMatcher`, `hourCycle` |

The `Intl.DateTimeFormat` object has the following return values:

| Return value | Values                      | Example                     |
| ------------ | --------------------------- | --------------------------- |
| `format`     | `Friday, December 25, 2020` | `Friday, December 25, 2020` |
