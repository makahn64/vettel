export enum TypeOfLocation {
    'home' = 'HOME',
    'work' = 'WORK',
    'gym' = 'GYM',
    'park' = 'PARK',
    'friend' = 'FRIEND',
    'food' = 'FOOD',
    'school' = 'SCHOOL'
}

export type LatLng = { lat: number; long: number };

export type Waypoint = {
    geolocation: LatLng;
    name: string;
    type: TypeOfLocation;
}

export type DrivingStop = {
    wayppoint: Waypoint;
    timestamp: number;
}