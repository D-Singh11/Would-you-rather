# Would you rather Project



## Introduction
Would You Rather, is a web app that lets its users play the “Would You Rather?” game. The game asks user a question in the form: “Would you rather [option A] or [option B] ?”.


Project solidify the understanding of React and Redux to improve the predictability of application’s state. It emphasizes on the state management through a central redux store instead of handling state by React components. It is developed by following Redux's rules for getting, listening, and updating the store.


In this application provides following functionality to its users:

 * See questions they answered and haven’t answered
 * Answer questions
 * See how other people have voted
 * Create new questions
 * See the ranking of users on the leaderboard


 
## Installation Instructions


Install all dependency node modules by navigating to myReads directory and using following command in terminal : 
>$ npm install


Next, start the application by running following command in terminal :

>$ npm start


To view application, open a browser and type specified URL in the URL menu : 

>http://localhost:3000



## Database


The `_DATA.js` file represents a fake database and methods that provides  access to the data.

There are two types of objects stored in our database:

* Users
* Questions

### Users

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The user’s unique identifier |
| name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers      | Object         |  The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.


### Questions

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The question’s unique identifier |
| author        | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|


### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes             | Array | A list that contains the id of each user who voted for that option|
| text                | String | The text of the option |



## Backend Server


The provided file [`api.js`](src/utils/api.js) contains the methods to perform necessary operations on the backend:

* [`getInitialData`](#getInitialData)
* [`saveQuestion`](#saveQuestion)
* [`saveAnswer`](#saveAnswer)


### `getInitialData`

Method Signature:

```js
getInitialData()
```
*Description*: Get all of the existing users and questions from the database.  
*Return Value*: 

* Returns a Promise which resolves to a JSON object containing users and questions objects.
* `users` Object where the key is the user’s id and the value is the user object.
* `questions` Object where the key is the question’s id and the value is the question object


### `saveQuestion`

Method Signature:

```js
saveQuestion(question)
```

*Description*: Save the polling question in the database.  
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|


### `saveAnswer`

Method Signature:

```js
saveAnswer(info)
```

*Description*: Save the answer to a particular polling question in the database.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|
