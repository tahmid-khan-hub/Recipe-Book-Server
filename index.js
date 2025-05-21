const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zc7c13h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // collection
    const RecipeCollection = client.db("recipeBookDB").collection("recipes");


    app.get('/recipes', async(req, res) =>{
      const result = await RecipeCollection.find().toArray();
      res.send(result);
    })
    
    app.post('/recipes', async(req, res) =>{
      const newRecipe = req.body;
      const result = await RecipeCollection.insertOne(newRecipe);
      res.send(result);
    })


    app.put('/recipes/:id', async(req, res) =>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const options = {upsert: true};
      const updatedRecipe = req.body;
      const updatedDoc = {
        $set: updatedRecipe
      }

      const result = await RecipeCollection.updateOne(filter, updatedDoc, options);
      res.send(result);
    })

    app.delete('/recipe/:id', async(req, res) =>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await RecipeCollection.deleteOne(query);
      res.send(result);
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Recipe Book App server is working");
});

app.listen(port, () => {
  console.log("Recipe Book App server is working");
});
