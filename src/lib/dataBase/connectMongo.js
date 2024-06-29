/*
*@/lib/config/mongodb
*Librairie de connexion à la base de données MongoDB
* Code: @aurelienLRY
*/

import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI; // 

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

/**
 * Global est utilisé pour préserver la connexion en développement
 * et éviter de se reconnecter à chaque changement de code.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) {
    console.log('Using cached MongoDB connection');
    return cached.conn;
  }

  if (!cached.promise) {
    console.log('Creating new MongoDB connection');
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      console.log('MongoDB connected');
      return mongoose;
    }).catch((error) => {
      console.error('MongoDB connection error:', error);
      throw error;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export async function disconnectDB() {
  if (cached.conn) {
    await mongoose.disconnect();
    cached.conn = null;
    cached.promise = null;
    console.log('MongoDB disconnected');
  }
}
