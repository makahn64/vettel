import { DrivingStop } from "./Waypoints";

export type User = {
    firstName: string;
    lastName: string;
    accountId: string;
}

export enum UserMood {
    'chilled', 
    'motivated', 
    'sad', 
    'happy', 
    'stressed'
}

export type UserRoute = {
    user: User;
    mood: UserMood;
    stops: DrivingStop[];
}