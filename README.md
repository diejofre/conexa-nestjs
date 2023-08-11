# Conexa API Challenge

This aplicacion is an API with JWT authentication, using Nestjs, MongoDB and Mongoose.

## How to use

```bash
npm install
npm run start:dev
```

Navigate to `http://localhost:3000/`.

## Configuration

### Step 1. Get the connection string of your MongoDB server

In the case of MongoDB Atlas, it should be a string like this:

```
mongodb+srv://<username>:<password>@my-project-abc123.mongodb.net/test?retryWrites=true&w=majority
```

### Step 2. Set up environment variables

Copy the `.env.example` file in this directory to `.env`.

Then set each variable on `.env`:

- `MONGO_URI` should be the MongoDB connection string you got from step 1.

## Deploy on Cyclic

This app was deployed on Cyclic App: https://dull-erin-barnacle-suit.cyclic.app and the database is hosted on MongoDB Atlas.

## API Documentation

This API was documented using Swagger, you can see the documentation on: https://conexa-api-challenge.onrender.com/api-docs/. Also, you can test the local API with the collection of request called `Nest - Star Wars - Movies - Local.postman_collection.json`. The deployed API can be tested with the collection of request called `Nest - Star Wars - Movies - Deploy.postman_collection.json`. Both collections are allocated in the root of the project.
