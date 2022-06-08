import { Waypoint } from "../types";

export const arrayOfLocFmWaypoints = (waypoints: Waypoint[]) => waypoints.map((wp)=>wp.geolocation); 