export enum TypeOfLocation {
    'home',
    'work',
    'gym',
    'park',
    'friend',
    'food',
    'school'
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