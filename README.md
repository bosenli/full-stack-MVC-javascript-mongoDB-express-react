# :metal::musical_keyboard:  super-awesome-final-project :guitar::metal:
Netlify link: https://phenomenal-cat-0906aa.netlify.app/

Heroku link: https://plan-app-1.herokuapp.com/api/plans

Github source code link: https://github.com/bosenli/full-stack-MVC-javascript-mongoDB-express-react

The super-awesome-final-project app, aka Plan App, is a daily planner for anyone who want to keep up with their daily plans.
That's it. It is a very simple app, but it does full CRUD operation and I do plan on adding more features.

## Technologies used :computer:
- Node.js
- MongoDB/Mongoose
- Express
- React
 
## Dependencies
#### Backend
- dotenv
- nodemon
- cors
- morgan
#### Frontend
 - react-router-dom
 - react-bootstrap
 - axios


## Features (MVP)
- React router
- Boostrap (a little)
- Full CRUD operation

## Upcoming Features(Post MVP)
- Authorization
- Plan Date Sorting
- Authorization (signup/login)

## Endpoints for CRUD
1. GET  all plans: https://phenomenal-cat-0906aa.netlify.app/plans
2. GET  plan by ID: https://phenomenal-cat-0906aa.netlify.app/plans/:id
3. POST  Create a plan: https://phenomenal-cat-0906aa.netlify.app/plans
4. PUT  Update plan by ID: https://phenomenal-cat-0906aa.netlify.app/plans/:id
6. DELETE  artist by ID: https://phenomenal-cat-0906aa.netlify.app/plans/:id

## Schema
```
const Plan = new Schema (
    {
        date : {type : String, required: true},
        time: {type: String, required: false },
        plan: {type : String, required: true},
        status: {type: String, required: true},
    },
    {timestamps: true}
)
```
