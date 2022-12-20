# NoSQL Social Network API

## Description

The application shows an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. It uses Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the [Express.js](https://www.npmjs.com/package/express) and [Mongoose](https://www.npmjs.com/package/mongoose) packages, it uses the native JavaScript `Date` object to format timestamps. 


## Functionality

Given a social network API, when a user enters the command to invoke the application the server is started and the Mongoose models are synced to the MongoDB database.

When a user opens API GET routes in Insomnia for users and thoughts, the data for each of these routes is displayed in a formatted JSON.  

When the user tests API POST, PUT and DELETE routes in Insomnia, they are able to create, update and delete users and thoughts in the database.

When the user tests API POST AND DELETE routes in Insomnia, then theare are able to crate and delete reactins to thoughts and add and remove friends to a user's friend list.

### Models

**User**:

* `username`
  * String
  * Unique
  * Required
  * Trimmed

* `email`
  * String
  * Required
  * Unique

* `thoughts`
  * Array of `_id` values referencing the `Thought` model

* `friends`
  * Array of `_id` values referencing the `User` model (self-reference)

**Schema Settings**:

A virtual called `friendCount` retrieves the length of the user's `friends` array field on query.

---

**Thought**:

* `thoughtText`
  * String
  * Required
  * Between 1 and 280 characters

* `createdAt`
  * Date
  * Set default value to the current timestamp
  * UseS a getter method to format the timestamp on query

* `username` (The user that created this thought)
  * String
  * Required

* `reactions` (replies)
  * Array of nested documents created with the `reactionSchema`

**Schema Settings**:

A virtual called `reactionCount` retrieves the length of the thought's `reactions` array field on query.

---

**Reaction** (SCHEMA ONLY)

* `reactionId`
  * Use Mongoose's ObjectId data type
  * Default value is set to a new ObjectId

* `reactionBody`
  * String
  * Required
  * 280 character maximum

* `username`
  * String
  * Required

* `createdAt`
  * Date
  * Set default value to the current timestamp
  * Use a getter method to format the timestamp on query

**Schema Settings**:

---

The `reaction` field's subdocument schema in the `Thought` model.

### API Routes

**`/api/users`**

* `GET` all users

* `GET` a single user by its `_id` and populated thought and friend data

* `POST` a new user:

* `PUT` to update a user by its `_id`

* `DELETE` to remove user by its `_id`

---

**`/api/users/:userId/friends/:friendId`**

* `POST` to add a new friend to a user's friend list

* `DELETE` to remove a friend from a user's friend list

---

**`/api/thoughts`**

* `GET` to get all thoughts

* `GET` to get a single thought by its `_id`

* `POST` to create a new thought (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)

* `PUT` to update a thought by its `_id`

* `DELETE` to remove a thought by its `_id`

---

**`/api/thoughts/:thoughtId/reactions`**

* `POST` to create a reaction stored in a single thought's `reactions` array field

* `DELETE` to pull and remove a reaction by the reaction's `reactionId` value

## Code

  * Uses the [Mongoose package](https://www.npmjs.com/package/mongoose) to connect to a MongoDB database.

  * Includes User and Thought models outlined in the Challenge instructions.

  * Includes schema settings for User and Thought models as outlined in the Challenge instructions.

  * Includes Reactions as the `reaction` field's subdocument schema in the Thought model.

  * Uses functionality to format queried timestamps properly.

  Comments have been applied to the different files in the code to identify each section of code. 

  Included is a package.json file with the required dependencies, as well as gitignore, node_modules and .DS_Store files.

  ## Installation

The code for this project can be found on GitHub at: https://github.com/c-alanwill/no-SQL-Social-Network-API

A link to a video that shows a walkthrough demonstrating how this readme works is available at: 

## Credits

N/A

## License

Please refer to the license in the repo.

## Contributing

N/A