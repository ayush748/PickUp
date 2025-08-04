const mongoose=require('mongoose');





function connectToDb(){
    mongoose.connect(process.env.DB_CONNECTION
    ).then(() => {
        console.log('Database connected successfully');
    }).catch(err => {
        console.error('Database connection error:', err);
    });
    
}
module.exports=connectToDb;



