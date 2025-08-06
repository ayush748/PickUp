const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema =new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength:[3,'First name must be at least 3 characters long'],
        },
        lastname:{
            type: String,
            minlength:[3,'Last name must be at least 3 characters long'],
        }
    },
    
    email:{
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Email must be at least 5 characters long'],
    },
    // we are using jwt for authentication that why we are not using min length to make our work easy 

    password:{
        type:String,
        required:true,
        select:false, // this will not show password in the response
    }, 

    socketId:{
        type:String,
    }
})

userSchema.methods.generateAuthToken = function(){
    const token= jwt.sign({ _id: this._id }, process.env.JWT_SECRET)
    return token;
}

userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model('user',userSchema);

module.exports = userModel;