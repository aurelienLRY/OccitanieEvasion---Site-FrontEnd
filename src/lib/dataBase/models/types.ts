/*
* @/lib/models/types
* @aurelienLRY
* This file contains the typescript types for the models
*/

/*
* Interface for the activity model
*/
export interface IActivity {
    _id: string;
    name: string;
    description: string;
    half_day: boolean;
    full_day: boolean;
    price_half_day: number;
    price_full_day: number;
    min_age: number;
    max_OfPeople: number;
    min_OfPeople: number;
}

export type IActivities = Array<IActivity>;

/*
* Interface for the spot model
*/
export interface ISpot {
    _id: string;
    name: string;
    description: string;
    gpsCoordinates: string;
    practicedActivities: Array<{activityName: string, activityId: string}>;
    photos: Map<string,string>;
    half_day: boolean;
    full_day: boolean;
    max_OfPeople: number;
    min_OfPeople: number;
    meetingPoint: string;
    estimatedDuration: string;
}

export type ISpots = Array<ISpot>;

/*
* Interface for the session model
*/
export interface ISession {
    _id: string;
    status: string;
    date: string;
    startTime: string;
    endTime: string;
    activity: string;
    spot: string;
    placesMax: number;
    placesReserved: number;
}

export type ISessions = Array<ISession>;