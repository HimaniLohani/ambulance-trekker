const mongoose = require("mongoose");

const uri = "mongodb://thanshika1006:anshika1026@ac-ebxl1sa-shard-00-00.eqouio9.mongodb.net:27017,ac-ebxl1sa-shard-00-01.eqouio9.mongodb.net:27017,ac-ebxl1sa-shard-00-02.eqouio9.mongodb.net:27017/ambulanceDB?ssl=true&replicaSet=atlas-xt5f49-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));