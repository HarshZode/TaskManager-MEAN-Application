const mongoose = require ('mongoose')

mongoose.Promise = global.Promise

const mongo_link =  process.env.MONGO_LINK || "mongodb://127.0.0.1:27017/taskmanager"

mongoose.connect(mongo_link, {useNewUrlParser: true, useUnifiedTopology:true})
    .then(() => console.log('Database Connected'))
    .catch((error) => console.log(error))

module.exports =  mongoose;
