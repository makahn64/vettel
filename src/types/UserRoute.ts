import { DrivingStop } from "./Waypoints";

export type User = {
    firstName: string;
    lastName: string;
    accountId: string;
}

export enum UserMood {
    'chilled' = 'CHILLER', 
    'motivated' = 'MOTIVATED', 
    'sad' = 'SAD', 
    'happy' = 'HAPPY', 
    'stressed' = 'STRESSED'
}

export type UserRoute = {
    user: User;
    mood: UserMood;
    stops: DrivingStop[];
}