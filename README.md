
# Recipe Book Server

This is the backend server for the **Recipe Book** web application. It is built using **Node.js**, **Express**, and **MongoDB Atlas**, and supports full CRUD operations on recipe data.

---

## 🚀 Features

- MongoDB Atlas integration
- RESTful API design
- CORS configuration for frontend (Netlify)
- Environment variable-based security
- CRUD operations on recipe collection:
  - `GET` all recipes
  - `POST` new recipe
  - `PUT` update a recipe by ID
  - `PATCH` like count update by ID
  - `DELETE` recipe by ID

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- dotenv
- CORS

---

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following keys:

```env
PORT=3000
DB_USER=yourMongoDBUsername
DB_PASS=yourMongoDBPassword
```

---

## ⚙️ Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/tahmid-khan-hub/Recipe-Book-Server.git
cd Recipe-Book-Server
```

2. **Install dependencies**

```bash
npm install
```

3. **Add your MongoDB credentials to `.env`**

```bash
DB_USER=yourUsername
DB_PASS=yourPassword
```

4. **Start the server**

```bash
node server.js
```

Or with `nodemon` for development:

```bash
npx nodemon server.js
```

---

## 📡 API Endpoints

### Base URL: `https://your-deployed-api.onrender.com` (or `localhost:3000` in development)

| Method | Endpoint            | Description                     |
|--------|---------------------|---------------------------------|
| GET    | `/recipes`          | Get all recipes                 |
| POST   | `/recipes`          | Add a new recipe                |
| PUT    | `/recipes/:id`      | Update full recipe by ID        |
| PATCH  | `/recipes/:id`      | Update `likeCount` only         |
| DELETE | `/recipes/:id`      | Delete a recipe by ID           |
| GET    | `/`                 | Check if server is working      |

---

## 🌐 CORS

Only requests from the following frontend are allowed:

```
https://comforting-pasca-4e92c6.netlify.app
```

---

## 🧪 Ping MongoDB Connection

On successful server start, a ping will be sent to MongoDB to verify the connection:

```
Pinged your deployment. You successfully connected to MongoDB!
```

---

## 📤 Deployment

You can deploy this server on platforms like:

- [Render](https://render.com/)
- [Railway](https://railway.app/)
- [Vercel + Serverless](https://vercel.com/docs/serverless-functions/introduction)

Make sure to set the `.env` variables securely in the platform.

---

## 🙏 Acknowledgements

- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/)
- [Express.js](https://expressjs.com/)
- [Dotenv](https://github.com/motdotla/dotenv)
- [Netlify](https://www.netlify.com/) for frontend hosting
