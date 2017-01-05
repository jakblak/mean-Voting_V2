## Voting App ##

# Running the App
`npm install`

open up mongodb using *mongod*

`gulp copy:libs`   -   to copy angular into lib folder

`npm start`  

- runs nodemon on port 3000. 

## Features ##
- add posts with title, link and description  
- - only show when title has focus
- animate posts 
- upvote & downvote
- add comments + expand comments
- log in / sign up


**my changes**
- app.component.html

**TO DO**
-- if on smaller devices, put 'new post' in menu, remove from side
-- toggle & show comments
-- paginate or Infinite Scroll
-- auth
-- Models  =  user, post, comment, category
-- animate posts, ngIf for adding post
-- dropdown select for categories       (Moss + Wahlin)

*User Model*
- add bcrypt  (not using passport)