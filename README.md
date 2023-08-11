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

- `MONGODB_URI` should be the MongoDB connection string you got from step 1.

## Deploy on Render

This app was deployed on Render App: https://conexa-api-challenge.onrender.com/ and the database is hosted on MongoDB Atlas.
