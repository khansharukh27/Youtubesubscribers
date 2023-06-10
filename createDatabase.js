const mongoose = require('mongoose')
const subscriberModel = require('./models/subscribers')
// const data = require('./data')

// Connect to DATABASE
async function dbConnect(){
const DATABASE_URL = "mongodb://127.0.0.1:27017/movie";
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = await mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))
}

const refreshAll = async () => {
    
    dbs = await dbConnect();
    
    //  await subscriberModel.deleteMany({})   //deleteMany
    //  console.log(connection)
    // const result = await subscriberModel.insertMany(data)
    const result1 = await subscriberModel.find({})
    
    console.log(result1)
}
refreshAll()