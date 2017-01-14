# MEAN Voting App
- **Requirements**
- Node          4.x
- MongoDB   3.x

## Running the App
`npm install`

open up mongodb using `mongod`

`gulp copy:libs`   -   to copy angular into lib folder

`npm start`

- runs nodemon on port 3000.


## Features
- add posts with title, link, description, category
- animate posts
- upvote & downvote
- add comments + expand comments
- log in / sign up
- **SORT**
- Latest / Hot / Category
- **Auth Stuff**
- make sure registered to post
- valid link


## TO DO
- toggle & show comments
- paginate or Infinite Scroll
- Passport local
- Models  =  user, post, comment, category
- animate posts
- dropdown select for categories (Moss + Wahlin)
- forms


## UP NEXT
- controller scaffold
- hook up to frontend  (users, posts, categories)
- ngToast


## DONE
- show description, category on focus
- added shadows to 'add new' box
- **Media queries**
- hide 'add new' box
- for thumbs (margin-left)


### Front Dependencies
- Bootstrap 4 alpha
- font-awesome
- ngToast

### Back Dependencies
- passport / crytpo
- mongoose
- express

### Packaging
- gulp  (copy over libs)
- **To Do**
- minify, concat, deploy  -->  docker, mongoLab, heroku


### Flow for Course
- setup files
- setup gulp
- starting server
- frontend stuff
- basic components + views
- basic Models, Routing
- Passport


### Passport
- passport.js, add to server.js + express.js
- passport-local  +  strategies/local.js
- User model  =  salt, provider + pre(save), authenticate, hash
