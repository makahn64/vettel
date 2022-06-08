import { LatLng, TypeOfLocation, Waypoint } from "../types/Waypoints";

export const HOME_SJC_1: LatLng = { lat: 37.30093779476478, long: -121.90859350814958};

export const SJC_32: LatLng = { lat: 37.41058203847942, long: -122.03649431935926 };

export const MITCH_HOME: Waypoint = {
    geolocation: HOME_SJC_1,
    type: TypeOfLocation.home,
    name: 'Mitch House'
}

export const MITCH_WORK: Waypoint = {
    geolocation: SJC_32,
    type: TypeOfLocation.work,
    name: 'Mitch Office'
}