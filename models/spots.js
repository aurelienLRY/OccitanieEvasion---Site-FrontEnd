import { Schema, model, models } from "mongoose";

const spotSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  gpsCoordinates: {
    type: String,
    required: true
  },
  practicedActivities: [
    {
      activityName: {
        type: String,
        required: false
      },
      activityId: {
        type: Schema.Types.ObjectId,
        required: false
      },
    },
  ],
  photos: {
    type: Map,
    of: String,
  },
  half_day: {
    type: Boolean,
    required: true
  },
  full_day: {
    type: Boolean,
    required: true
  },
  max_OfPeople: {
    type: Number,
    required: true
  },
  min_OfPeople: {
    type: Number,
    required: true
  },
  meetingPoint: {
    type: String,
    required: false
  },
  estimatedDuration: {
    type: String,
    required: false
  },
});
const spots = models.spots || model("spots", spotSchema);
module.exports =  spots;
