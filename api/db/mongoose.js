const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TaskManager',{ 
                        useNewUrlParser: true,
                        // useCreateIndex: true,
                        // useFindAndModify: false
                    }).then(()=>{
    console.log("Connected to MongoDB");
}).catch((e)=>{
    console.log("Failed to connect");
    console.log(e);
});


module.exports = {
    mongoose
};