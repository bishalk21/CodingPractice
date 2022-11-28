# Axios

What is Axios?

Axios is a promise based HTTP client for the browser and node.js. Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations. It can be used in plain JavaScript or with a library such as Vue or React.

## 1. What is the alternative to Axios?

The alternative to Axios is to use the native fetch API. However, Axios is a more convenient way to make HTTP requests.

## 2. What is the difference between Axios and Fetch?

Axios is a promise based HTTP client for the browser and node.js. Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations. It can be used in plain JavaScript or with a library such as Vue or React.

Fetch is a browser API that allows you to make HTTP requests. It is a more modern alternative to XMLHttpRequest.

## 3. What is the difference between Axios and Ajax?

Ajax is a technique for creating asynchronous web applications. Ajax allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.

Axios is a promise based HTTP client for the browser and node.js. Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations. It can be used in plain JavaScript or with a library such as Vue or React.

## 4. What is the difference between Axios and HTTP?

HTTP is a protocol that allows the fetching of resources, such as HTML documents. It is the foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser. A complete document is reconstructed from the different sub-documents fetched, for instance text, layout description, images, videos, scripts, and more.

Axios is a promise based HTTP client for the browser and node.js. Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations. It can be used in plain JavaScript or with a library such as Vue or React.

## 5. What is the difference between Axios and HTTP Client?

HTTP Client is a software program that allows you to make HTTP requests. It is a more modern alternative to XMLHttpRequest.

Axios is a promise based HTTP client for the browser and node.js. Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations. It can be used in plain JavaScript or with a library such as Vue or React.

## Advantages of Axios

Axios is a promise based HTTP client for the browser and node.js. Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations. It can be used in plain JavaScript or with a library such as Vue or React.

- Make XMLHttpRequests from the browser
- Make http requests from node.js
- Supports the Promise API
- Intercept request and response
- Transform request and response data
- Cancel requests
- Automatic transforms for JSON data
- Client side support for protecting against XSRF

## 2. How to use Axios?

### 2.1. Installation

```bash
npm install axios
```

### 2.2. Usage

```js
import axios from "axios";

axios.get("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
  console.log(res.data);
});
```

## 3. What are the APIs included in Axios?

### 3.1. axios(config)

- `axios(config)` is the primary API in Axios. It accepts a single object argument with the following fields:

  - `url`: the URL to be requested

  - `method`: the request method to be used when making the request

  - `data`: the data to be sent as the request body

  - `params`: the URL parameters to be sent with the request

  - `headers`: the HTTP headers to be sent with the request

  - `auth`: the authentication information to be sent with the request

  - `baseURL`: the base URL to be prepended to `url` unless `url` is absolute

  - `transformRequest`: an array of functions that will be applied to the request data before it is sent

  - `transformResponse`: an array of functions that will be applied to the response data before it is returned

  - `timeout`: the number of milliseconds before the request times out

  - `withCredentials`: indicates whether or not cross-site Access-Control requests should be made using credentials

  - `adapter`: the adapter to be used for making HTTP requests

  - `responseType`: the type of data that the server will respond with

  - `xsrfCookieName`: the name of the cookie to use as a value for xsrf token

  - `xsrfHeaderName`: the name of the http header that carries the xsrf token value

  - `onUploadProgress`: a function that will be called on upload progress

  - `onDownloadProgress`: a function that will be called on download progress

  - `maxContentLength`: the maximum content length in bytes allowed for the response data

  - `validateStatus`: a function that will be called to validate the status code of the response

  - `maxRedirects`: the maximum number of redirects to follow in node.js

  - `httpAgent`: the http agent to be used in node.js

  - `httpsAgent`: the https agent to be used in node.js

  - `proxy`: specifies the proxy server to be used

  - `cancelToken`: specifies a cancel token that can be used to cancel the request

  - `decompress`: indicates whether or not the response data should be decompressed

- `axios(config)` returns a Promise that resolves to the response object.

### 3.2. axios(url[, config])

- `axios(url[, config])` is a shortcut for `axios(config)`.

- `axios(url[, config])` returns a Promise that resolves to the response object.

### 3.3. axios.request(config)

- `axios.request(config)` is a shortcut for `axios(config)`.

- `axios.request(config)` returns a Promise that resolves to the response object.

### 3.4. axios.get(url[, config])

- `axios.get(url[, config])` is a shortcut for `axios(url[, config])` with `method` set to `GET`.

- `axios.get(url[, config])` returns a Promise that resolves to the response object.

### 3.5. axios.delete(url[, config])

- `axios.delete(url[, config])` is a shortcut for `axios(url[, config])` with `method` set to `DELETE`.

- `axios.delete(url[, config])` returns a Promise that resolves to the response object.

### 3.6. axios.head(url[, config])

- `axios.head(url[, config])` is a shortcut for `axios(url[, config])` with `method` set to `HEAD`.

- `axios.head(url[, config])` returns a Promise that resolves to the response object.

### 3.7. axios.post(url[, data[, config]])

- `axios.post(url[, data[, config]])` is a shortcut for `axios(url[, config])` with `method` set to `POST` and `data` set to `data`.

- `axios.post(url[, data[, config]])` returns a Promise that resolves to the response object.

### 3.8. axios.put(url[, data[, config]])

- `axios.put(url[, data[, config]])` is a shortcut for `axios(url[, config])` with `method` set to `PUT` and `data` set to `data`.

- `axios.put(url[, data[, config]])` returns a Promise that resolves to the response object.

### 3.9. axios.patch(url[, data[, config]])

- `axios.patch(url[, data[, config]])` is a shortcut for `axios(url[, config])` with `method` set to `PATCH` and `data` set to `data`.

- `axios.patch(url[, data[, config]])` returns a Promise that resolves to the response object.

## 4. What are the default configurations in Axios?

### 4.1. baseURL

- `baseURL` is the base URL to be prepended to `url` unless `url` is absolute.

- `baseURL` defaults to `''`.

### 4.2. transformRequest

- `transformRequest` is an array of functions that will be applied to the request data before it is sent.

- `transformRequest` defaults to `[(data, headers) => data]`.

### 4.3. transformResponse

- `transformResponse` is an array of functions that will be applied to the response data before it is returned.

- `transformResponse` defaults to `[(data) => data]`.

### 4.4. headers

- `headers` are custom headers to be sent.

- `headers` defaults to `{}`.

### 4.5. params

- `params` are the URL parameters to be sent with the request.

- `params` defaults to `{}`.

### 4.6. paramsSerializer

- `paramsSerializer` is a function that will be used to serialize the `params` before they are sent.

- `paramsSerializer` defaults to `params => Qs.stringify(params, { arrayFormat: 'brackets' })`.

### 4.7. data

- `data` is the data to be sent as the request body.

- `data` defaults to `undefined`.

### 4.8. timeout

- `timeout` is the number of milliseconds before the request times out.

- `timeout` defaults to `0`.

### 4.9. withCredentials

- `withCredentials` indicates whether or not cross-site Access-Control requests should be made using credentials.

- `withCredentials` defaults to `false`.

### 4.10. adapter

- `adapter` is the adapter to be used for making HTTP requests.

- `adapter` defaults to `undefined`.

### 4.11. auth

- `auth` is the authentication information to be sent with the request.

- `auth` defaults to `undefined`.

### 4.12. responseType

- `responseType` is the type of data that the server will respond with.

- `responseType` defaults to `json`.

### 4.13. xsrfCookieName

- `xsrfCookieName` is the name of the cookie to use as a value for xsrf token.

- `xsrfCookieName` defaults to `XSRF-TOKEN`.

### 4.14. xsrfHeaderName

- `xsrfHeaderName` is the name of the http header that carries the xsrf token value.

- `xsrfHeaderName` defaults to `X-XSRF-TOKEN`.

### 4.15. onUploadProgress

- `onUploadProgress` is a function that will be called on upload progress.

- `onUploadProgress` defaults to `undefined`.

### 4.16. onDownloadProgress

- `onDownloadProgress` is a function that will be called on download progress.

- `onDownloadProgress` defaults to `undefined`.

### 4.17. maxContentLength

- `maxContentLength` is the maximum size of the http response content in bytes allowed.

- `maxContentLength` defaults to `2000`.

### 4.18. validateStatus

- `validateStatus` is a function that will be called to validate the status code of the response.

- `validateStatus` defaults to `status => status >= 200 && status < 300`.

### 4.19. maxRedirects

- `maxRedirects` is the maximum number of redirects to follow.

- `maxRedirects` defaults to `5`.

### 4.20. httpAgent

- `httpAgent` is the http agent to be used in node.js.

- `httpAgent` defaults to `undefined`.

### 4.21. httpsAgent

- `httpsAgent` is the https agent to be used in node.js.

- `httpsAgent` defaults to `undefined`.

### 4.22. proxy

- `proxy` is the proxy configuration to be used in node.js.

- `proxy` defaults to `undefined`.

### 4.23. cancelToken

- `cancelToken` is the cancel token to be used in node.js.

- `cancelToken` defaults to `undefined`.
