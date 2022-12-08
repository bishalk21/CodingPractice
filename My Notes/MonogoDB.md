# Mongo DB

Q. What is MongoDB?

MongoDB is a document database, which means it stores data in JSON-like documents. We call the format JSON-like because the values in MongoDB documents can also include arrays and subdocuments.

Q. What is a Document?

A document is a set of key-value pairs. Documents have dynamic schema. Dynamic schema means that documents in the same collection do not need to have the same set of fields or structure, and common fields in a collection's documents may hold different types of data.

Q. What is a Collection?

A collection is a group of documents stored in MongoDB, and can be thought of as roughly the equivalent of an RDBMS table. A collection exists within a single database. Collections do not enforce a schema. Documents within a collection can have different fields. Typically, all documents in a collection are of a similar or related purpose.

Q: What is a Database?

A database is a set of collections. Each MongoDB database gets its own set of files on the file system. A single MongoDB server typically has multiple databases.

Q: What is a Field?

A field is a key in a document. A field's value can be any of the BSON data types.

Q: What is a Record?

A record is a document (set of key-value pairs) stored in a collection. Records have dynamic schema. Dynamic schema means that documents in the same collection do not need to have the same set of fields or structure, and common fields in a collection's documents may hold different types of data.

Q: What is a Primary Key?

A primary key is the unique identifier for a document. In MongoDB, the primary key is the \_id field by default. The \_id field is indexed by default.

Q: What is a Foreign Key?

A foreign key is the unique identifier for a document in another collection. In MongoDB, there is no concept of a foreign key.

Q: What is a Join?

A join is a MongoDB operation that allows you to query data from two or more collections at the same time. In MongoDB, joins are not necessary because you can embed related data in a single document.

Q. What is Mongoose?

Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.

Q. What is importance of mongoose?

Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.

Q. What is the difference between MongoDB and Mongoose?

MongoDB is a database, while Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.

Q. What is the difference between MongoDB and SQL?

MongoDB is a document database, while SQL is a relational database.

Q. What is a Schema?

A Schema is a JSON object that defines the structure and contents of given data.

A schema is a Mongoose construct that defines the structure of the documents within a given collection. Schemas are used to define the structure of the documents within a given collection. Schemas are used to define the structure of the documents within a given collection.

Q. What is a Model?

A model is a class with which we construct documents. In Mongoose, a model is a class with which we construct documents. All documents created with a given model will be instances of that model. Each document will have the properties and behaviors that are declared in its schema.

Q. What is a Query?

A query is a request for data from a collection or view in a database table. A query can be used to retrieve data from a single table or multiple tables.

### populate method

Q. What is the difference between populate and find?

The populate method is used to populate the referenced documents in the collection. The find method is used to find the documents in the collection.

```javascript
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const User = mongoose.model("User", userSchema);

const Post = mongoose.model("Post", postSchema);

User.findOne({ name: "John" })
  .populate("posts")
  .exec(function (err, user) {
    if (err) {
      console.log(err);
    } else {
      console.log(user);
    }
  });

// Output:
// { _id: 5f9e1b9b9b9b9b9b9b9b9b9b,
//   name: 'John',
//   age: 34,
//   posts:
//    [ { _id: 5f9e1b9b9b9b9b9b9b9b9b9,
//        title: 'Post 1',
//        content: 'Content 1' },
//      { _id: 5f9e1b9b9b9b9b9b9b9b9ba,
//        title: 'Post 2',
//        content: 'Content 2' } ],
//   __v: 0 }
```

### countDocuments

Q. What is the difference between count and countDocuments?

The count method is deprecated. The countDocuments method is used to count the documents in the collection.

```javascript
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

User.countDocuments({ name: "John" }, function (err, count) {
  if (err) {
    console.log(err);
  } else {
    console.log(count);
  }
});

// Output:
// 1
```
