const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventsSchema = new Schema({
    eventname: { type: String, required: true },
    eventdis: { type: String, required: true },
    organiser: { type: String, required: true },
    customer: { type: String, required: true,unique :true},
    location: {type:String,required:true},
    date: { type: Date, required: true },
    type: {type:String,required:true},
    prize: {type:String,required:true},
    capacity:{type:Number,required:true},
    duration: { type: Number, required: true },
}, {
    timestamps: true,
});

const Event = mongoose.model('Event', EventsSchema);

module.exports = Event;