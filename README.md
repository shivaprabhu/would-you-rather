# Would You Rather
This a React app built as a part of @Udacity's React Nanodegree.
The predefined users can create, view and vote polls. Leaderboard shows the player rankings 

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

The tech stack include:
* Node
* React
* React Router
* Creat React APP

## What You're Getting
```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    |── actions # contains all the actions for the redux store
    |   |── authedUsers.js # actions for setting and getting authenticated user
    |   |── questions.js # actions for answering, getting, saving question/s  
    |   |── shared.js # action that gets the initial data by combining users and questions
    |   └── users.js # 
    |── components
    |   |── Home.js
    |   |── Leaderboard.js
    |   |── login.js
    |   |── Navigation.js
    |   |── NewQuestion.js
    |   |── Question.js
    |   |── QuestionDetail.js
    |   |── QuestionList.js
    |   |── Result.js
    |   └── UserProfile.js
    |── middlewares
    |   |── index.js
    |   └── logger.js
    |── reducers 
    |   |── authedUsers.js
    |   |── questions.js
    |   |── shared.js
    |   └── users.js
    |── utils 
    |   |── _DATA_.js
    |   └── helper.js
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Backend Server

To simplify your development process,the backend server is [`_DATA_.js`](src/utils/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`_getUsers`](#_getUsers)
* [`_getQuestions`](#_getQuestions)
* [`_saveQuestion`](#_saveQuestion)
* [`_saveQuestionAnswer`](#_saveQuestionAnswer)

### `_getUsers`

Method Signature:

```js
_getUsers()
```

* Returns a Promise which resolves to a JSON object containing a collection of users.
* This collection represents the users registered.

### `_getQuestions`

Method Signature:

```js
_getQuestions()
```

* Returns a Promise which resolves to a JSON object containing a collection of questions.
* This collection represents the questions created by the registered users.

### `_saveQuestion`

Method Signature:

```js
_saveQuestion({userId, optionOneText, optionTwoText})
```

* Returns a Promise which resolves to a JSON object containing a newly created poll.

### `_saveQuestionAnswer`

Method Signature:

```js
_saveQuestionAnswer({ authedUser, qid, answer })
```

* Returns a Promise which resolves to a JSON object containing all the questions.

## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
