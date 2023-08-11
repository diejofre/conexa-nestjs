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

## Deploy on Render

This app was deployed on Render App: https://conexa-api-challenge.onrender.com/ and the database is hosted on MongoDB Atlas.

## API Documentation

This API was documented using Swagger, you can see the documentation on: https://conexa-api-challenge.onrender.com/api-docs/. Also, you can test the API with the collection of request called `Nest - Star Wars - Movies.postman_collection.json` allocated in the root of the project.
