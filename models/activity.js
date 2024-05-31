import { Schema , model , models } from "mongoose";

const activitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },

  half_day: {
    type: Boolean,
    required: true,
  },
  full_day: {
    type: Boolean,
    required: true,
  },
  price_half_day:{
    type: Number, 
    required: false,
  }, 
  price_full_day:{
    type: Number, 
    required: false,
  }, 

  min_age: {
    type: Number,
    required: true,
  },
  max_OfPeople: {
    type: Number,
    required: true,
  },
  min_OfPeople: {
    type: Number,
    required: true,
  },
});

const activity = models.activity || model("activity", activitySchema);

module.exports = activity;
