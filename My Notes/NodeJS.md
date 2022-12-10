# Node JS

Q. What is Node js?

Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

Q. What is the difference between Node js and JavaScript?

Node.js is a JavaScript runtime environment that allows you to run JavaScript code outside of a browser. JavaScript is a programming language that conforms to the ECMAScript specification.

Q. What are the features of Node js?

- Asynchronous and Event Driven
- Very Fast
- Single Threaded but Highly Scalable
- No Buffering
- License

Q. What are the advantages of Node js?

- Node.js uses asynchronous programming!
- Node.js is single-threaded but highly scalable!
- Node.js uses non-blocking I/O calls!
- Node.js uses Google's V8 JavaScript engine!
- Node.js is open source!

Q. What are the disadvantages of Node js?

- Node.js is not suitable for CPU-intensive applications!
- Node.js is not suitable for data-intensive real-time applications!
- Node.js is not suitable for complex applications!

Q. What is the difference between Node js and Express js?

Node.js is a JavaScript runtime environment that allows you to run JavaScript code outside of a browser. Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

## Middleware

Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.

## Multer

Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.

Q. Uses of Multer

- Uploading files
- Uploading images
- Uploading videos
- Uploading audio
- Uploading documents

```js
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res) => {
  res.send("File uploaded successfully");
});
```

Q. What are the Properties that Multer js takes?

- dest: The directory for storing files, or a function to determine the destination. If not set, the operating system's default directory for temporary files is used.
- fileFilter: A function to control which files are accepted. The function should call cb with a boolean to indicate if the file should be accepted and an optional error message. If an error occurs when checking the file, the error should be passed as the second argument to cb.
- limits: An object to configure the size limits of the following optional properties. This object is passed to busboy directly, and the details of properties can be found in the busboy documentation.
- storage: An object to configure the storage engine. This object is passed to multer directly, and the details of properties can be found in the Storage Engine documentation.

Q. What are the Methods that Multer js takes?

- array(fieldname[, maxCount]): Accepts an array of files with the name fieldname. All files will be stored in req.files.
- fields(fields): Accepts an array of fields, where each field describes a single file. An object with arrays of files will be stored in req.files.
- none(): Accepts a single file with the name fieldname. The single file will be stored in req.file.
- single(fieldname): Accepts a single file with the name fieldname. The single file will be stored in req.file.

Q. What are the Events that Multer js takes?

- fileFilter: Emitted when a file is skipped.
- limits: Emitted when the limits are reached.
- partsLimit: Emitted when the parts limit is reached.
- filesLimit: Emitted when the files limit is reached.
- fieldsLimit: Emitted when the fields limit is reached.
- fileSize: Emitted when the file size is reached.
- files: Emitted when a file is detected.
- field: Emitted when a field is detected.
- finish: Emitted when the request has been fully parsed.
- parts: Emitted when a part is detected.
- error: Emitted when an error occurs.

Q. What are the Errors that Multer js takes?

- LIMIT_PART_COUNT: Too many parts
- LIMIT_FILE_SIZE: File too large
- LIMIT_FILE_COUNT: Too many files
- LIMIT_FIELD_KEY: Field name too long
- LIMIT_FIELD_VALUE: Field value too long
- LIMIT_FIELD_COUNT: Too many fields
- LIMIT_UNEXPECTED_FILE: Unexpected field

Q. What are the Storage Engines that Multer js takes?

- DiskStorage: DiskStorage engine gives you full control on storing files to disk.
- MemoryStorage: MemoryStorage engine stores the files in memory as Buffer objects.

Q. What is destination function and its arguments in multer.js?

The destination function is used to determine within which folder the uploaded files should be stored. The destination function gets the request object, the file object, and a callback function as parameters.

```js
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
});
```

Q. What is filename function and its arguments in multer.js?

The filename function is used to determine what the file should be named inside the folder. The filename function gets the request object, the file object, and a callback function as parameters.

```js
const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
```

Q. What is the difference between req.body and req.file in multer.js?

req.body is a property on the request object that contains the parsed body of the request. req.file is a property on the request object that contains the file uploaded by the user.

### bcrypt.js

bcrypt.js is a library to help you hash passwords.

Q. What are the methods that bcrypt.js takes?

- hash: Hashes a password using a salt generated with bcrypt.genSalt().
- compare: Compares a password with a hash.
- genSalt: Generates a salt.
- getRounds: Gets the number of rounds used to hash a password.
- compareSync: Synchronous version of bcrypt.compare().
- hashSync: Synchronous version of bcrypt.hash().
- genSaltSync: Synchronous version of bcrypt.genSalt().
- getRoundsSync: Synchronous version of bcrypt.getRounds().
- compareSync: Synchronous version of bcrypt.compare().
- hashSync: Synchronous version of bcrypt.hash().

### body-parser

Node.js body parsing middleware.

Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

Q. What are the methods that body-parser takes?

- json: Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
- raw: Returns middleware that parses all bodies as a Buffer and only looks at requests where the Content-Type header matches the type option.
- text: Returns middleware that parses all bodies as a string and only looks at requests where the Content-Type header matches the type option.
- urlencoded: Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option.

### cors

CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

Q. What are the methods that cors takes?

- cors: Returns a middleware function to be used in your application.

### dotenv

Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.

Q. What are the methods that dotenv takes?

- config: Loads environment variables from .env file into process.env.

### express

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

Q. What are the methods that express takes?

- express: Creates an Express application. The express() function is a top-level function exported by the express module.

### express-validator

An express.js middleware for validator.js.

Q. What are the methods that express-validator takes?

- check: Checks a single parameter.
- checkBody: Checks a single parameter in the body.
- checkCookies: Checks a single parameter in the cookies.
- checkHeaders: Checks a single parameter in the headers.
- checkParams: Checks a single parameter in the params.
- checkQuery: Checks a single parameter in the query.
- validationResult: Returns a middleware that checks the validation result of the previous middleware that used check() or one of the equivalent methods.

### helmet

Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!

Q. What are the methods that helmet takes?

- helmet: Returns a middleware function to be used in your application.

### jsonwebtoken

JSON Web Token implementation for node.js.

Q. What are the methods that jsonwebtoken takes?

- sign: Synchronously sign the given payload into a JSON Web Token string.
- verify: Synchronously verify given token using a secret or a public key to get a decoded token.
- decode: Decode a JSON Web Token string without verifying the signature.
- JsonWebTokenError: Error object for all errors specific to JSON Web Token.
- NotBeforeError: Error object for when a token is used before it's nbf (Not Before) date.
- TokenExpiredError: Error object for when a token is expired.

### mongoose

Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.

Q. What are the methods that mongoose takes?

- connect: Connects to MongoDB server and returns Mongoose instance.
- createConnection: Creates a new MongooseConnection instance.
- disconnect: Disconnects all connections.
- model: Creates a model or retrieves it.
- set: Sets mongoose options.
- get: Gets mongoose options.
- connection: The default connection of the mongoose module.
- connections: Array of all connections used by the mongoose module.
- plugin: Registers a plugin.

### morgan

HTTP request logger middleware for node.js.

Q. What are the methods that morgan takes?

- morgan: Create a new morgan logger middleware function using the given format and options.

### nodemon

Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.

Q. What are the methods that nodemon takes?

- nodemon: Starts the nodemon server.

### passport

Passport is authentication middleware for Node.js.

Q. What are the methods that passport takes?

- authenticate: Authenticate requests.
- authorize: Authorize requests.
- initialize: Initialize Passport.
- session: Restore authentication state from session.
- use: Use the given strategy with optional name, overridding the strategy's default name.
- unuse: Unuse the given strategy by name.
- framework: Framework adapters.
- Strategy: Base class for implementing a strategy.
- strategies: Strategies included with the framework.

### passport-jwt

Passport strategy for authenticating with a JSON Web Token.

Q. What are the methods that passport-jwt takes?

- Strategy: Creates a new JWT authentication strategy.

### passport-local

Passport strategy for authenticating with a username and password.

Q. What are the methods that passport-local takes?

- Strategy: Creates a new LocalStrategy with the given options.

### validator

A library of string validators and sanitizers.

Q. What are the methods that validator takes?

- contains: Check if the string contains the seed.
- equals: Check if the string matches the comparison.
- matches: Check if string matches the pattern.
- isAfter: Check if the string is a date that's after the specified date.
- isAlpha: Check if the string contains only letters (a-zA-Z).
- isAlphanumeric: Check if the string contains only letters and numbers.
- isAscii: Check if the string contains ASCII chars only.
- isBase64: Check if a string is base64 encoded.
- isBefore: Check if the string is a date that's before the specified date.
- isBoolean: Check if a string is a boolean.
- isByteLength: Check if the string's length (in bytes) falls in a range.
- isCreditCard: Check if the string is a credit card.
- isCurrency: Check if the string is a valid currency amount.
- isDataURI: Check if the string is a data uri format.
- isDecimal: Check if the string represents a decimal number.
- isDivisibleBy: Check if the string is a number that's divisible by another.
- isEmail: Check if the string is an email.
- isEmpty: Check if the string has a length of zero.
- isFQDN: Check if the string is a fully qualified domain name (e.g. domain.com).
- isFloat: Check if the string is a float.
- isFullWidth: Check if the string contains any full-width chars.
- isHalfWidth: Check if the string contains any half-width chars.
- isHash: Check if the string is a hash of type algorithm.
- isHexColor: Check if the string is a hexadecimal color.
- isHexadecimal: Check if the string is a hexadecimal number.
- isIP: Check if the string is an IP (version 4 or 6).
- isISBN: Check if the string is an ISBN (version 10 or 13).
- isISIN: Check if the string is an ISIN (stock/security identifier).
- isISO8601: Check if the string is a valid ISO 8601 date.
- isJSON: Check if the string is valid JSON (note: uses JSON.parse).
- isLength: Check if the string's length falls in a range.
- isLowercase: Check if the string is lowercase.
- isMACAddress: Check if the string is a MAC address.
- isMD5: Check if the string is a MD5 hash.

### bcrypt

A library to help you hash passwords.

Q. What are the methods that bcrypt takes?

- genSalt: Generates a salt.
- hash: Hashes the password.
- compare: Compares the password with the hash.

### isRevoked()

A function that checks if the token is revoked.

Q. What are the methods that isRevoked() takes?

- isRevoked: Checks if the token is revoked.

### isRevokedCallback()

A function that checks if the token is revoked.

Q. What are the methods that isRevokedCallback() takes?

- isRevokedCallback: Checks if the token is revoked.

### CORS

CORS stands for Cross-Origin Resource Sharing
CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

Advantage of using cors:

- It can be used as a standalone package or as a part of Express/Connect framework.
- It can be used to enable CORS for a specific route or for an entire application.
- It can be used to enable preflight requests for all the routes or for specific routes.
- It can be used to set the Access-Control-Allow-Origin header to a specific origin or to a wildcard.
- It can be used to set Access-Control-Allow-Credentials header to true so that the server will pass the cookie information along with the request.
- It can be used to set Access-Control-Max-Age header so that the preflight request will not be sent for subsequent requests.
- It can be used to set Access-Control-Allow-Headers header so that the server will accept the specified custom headers.
- It can be used to set Access-Control-Allow-Methods header so that the server will accept the specified methods.

Q. What are the methods that CORS takes?

- cors: Returns a middleware function to be used in your application.

### req.params

req.params is an object containing properties mapped to the named route “parameters”.

req.params is the part you send in the request url parameter or the header parts of requests.

For example, if you have the route /user/:name, then the “name” property is available as req.params.name. This object defaults to {}.

### req.body

req.body is an object containing the parsed body, available under the req.body property. This object defaults to {}.

req.body is the JSON data we are sending in postman so we can access it in the post request body part.

For example, if you have the route /user/:name, then the “name” property is available as req.body.name.
