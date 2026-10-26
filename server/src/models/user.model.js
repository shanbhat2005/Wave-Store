import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    trim: true,
    minLength:2,
    maxLength:15 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true,
    trim: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  role: { 
    type: String, 
    enum: ['user', 'seller'], 
    default: 'user' 
  },
  refreshToken:{
    type:String
  }
}, { timestamps: true });

const userModel= mongoose.model('User', userSchema);

export default userModel;