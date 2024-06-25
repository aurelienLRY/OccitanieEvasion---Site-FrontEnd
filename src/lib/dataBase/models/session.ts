// @/lib/models/session.ts
'use server'
/* Models */
import { Schema , model , models } from "mongoose";
/* TypesScript types*/
import {ISession } from "@/lib/dataBase/models/types" ; 

/*
  * Session Schema
  */
const sessionSchema = new Schema({
  status: { type: String, required: true },
  date: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  activity: { type: String, required: true },
  spot: { type: String, required: true },
  placesMax: { type: Number, required: true },
  placesReserved: { type: Number, required: true },

});

const session = models.session || model<ISession>('session', sessionSchema);

export default session;