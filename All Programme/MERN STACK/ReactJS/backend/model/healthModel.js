const mongoose = require('mongoose');

const cowHealthSchema = new mongoose.Schema({
  cowId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'cows',  // Ensure cow model is named "cows"
    required: true 
  },
  cowName: { 
    type: String, 
    required: true 
    
  },
  healthStatus: { 
    type: String, 
    enum: ['healthy', 'fregnecy', 'injured'], 
    required: true 
  },
  symptoms: { type: String },
  diagnosis: { type: String },
  treatment: { type: String },
  medication: [{ 
    medicineName: { type: String }, 
    dosage: { type: String }, 
    duration: { type: String } 
  }],
  temperature: { type: Number },
  pulse: { type: Number },
  respiratoryRate: { type: String },
  description:{
    type:String
  },
  
},{ timestamps: true });

const cowHealthModel = mongoose.model('healths', cowHealthSchema);
module.exports = cowHealthModel;
