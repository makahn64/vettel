import { User, UserMood } from "../types";
import { LatLng, TypeOfLocation, Waypoint } from "../types/Waypoints";

export const HOME: LatLng = { lat: 37.30093779476478, long: -121.90859350814958};

export const WORK: LatLng = { lat: 37.41058203847942, long: -122.03649431935926 };

// 37.30207623612828, -121.88059366003176
export const GYM: LatLng = { lat: 37.30207623612828, long: -121.88059366003176};

// 37.28995752849003, -121.89550586629684
export const SCHOOL: LatLng = { lat: 37.28995752849003, long: -121.89550586629684 };

//37.29226552930073, -121.9124985733286
export const PHO_WAGON: LatLng = { lat: 37.29226552930073, long: -121.9124985733286 };

//37.32349826726853, -121.9133151310001
export const MC_DONALDS: LatLng = { lat: 37.32349826726853, long: -121.9133151310001 };

//37.323582275720085, -121.90918466611585
export const SITTER: LatLng = { lat: 37.323582275720085, long: -121.90918466611585};

export const MITCH_HOME: Waypoint = {
    geolocation: HOME,
    type: TypeOfLocation.home,
    name: 'Mitch House'
}

export const MITCH_WORK: Waypoint = {
    geolocation: WORK,
    type: TypeOfLocation.work,
    name: 'Mitch Office'
}

export const FITNESS: Waypoint = {
    geolocation: GYM,
    type: TypeOfLocation.gym,
    name: '24Hr Fitness'
}

export const FOOD_KIDS: Waypoint = {
    geolocation: MC_DONALDS,
    type: TypeOfLocation.food,
    name: 'McDonalds'
}

export const KIDS_SCHOOL: Waypoint = {
    geolocation: SCHOOL,
    type: TypeOfLocation.school,
    name: 'Middle School'
}

export const FOOD_ADULT: Waypoint = {
    geolocation: PHO_WAGON,
    type: TypeOfLocation.food,
    name: 'Pho Wagon'
}

export const BABY_SITTER: Waypoint = {
    geolocation: SITTER,
    type: TypeOfLocation.friend,
    name: 'Babysitter'
}

export type MusicTrack = { artist: string; track: string; genre: string };

export const musicLib: { [key: string]: MusicTrack } = {
    chill: { artist: 'Nbdy Imprt', track: 'Spicy Latin', genre: 'Electronic'},
    stressed: { artist: 'Tool', track: 'Pneuma', genre: 'Progressive Metal'},
    kids: { artist: 'The Wiggles', track: 'The Wheels on the Bus', genre: 'Children'},
    dateNight: { artist: 'Echo and the Bunnymen', track: 'Lips Like Sugar', genre: '80s'},
    getPumped: { artist: 'Lizzo', track: 'Good as Hell', genre: 'Pop'}
}

export type Trip = {
    waypoints: Waypoint[],
    //user: User,
    mood: UserMood,
    songs: MusicTrack[],
    timestamp: number;
    id: string;
}

export const commuteToWork: Partial<Trip> = {
    waypoints: [ MITCH_HOME, MITCH_WORK ],
    mood: UserMood.motivated,
    songs: [ musicLib.getPumped, musicLib.stressed ],
}

export const commuteToHome: Partial<Trip> = {
    waypoints: [ MITCH_WORK, MITCH_HOME ],
    mood: UserMood.stressed,
    songs: [ musicLib.stressed, musicLib.chill ],
}

export const commuteHomeWithGym: Partial<Trip> = {
    waypoints: [ MITCH_WORK, FITNESS, MITCH_HOME ],
    mood: UserMood.stressed,
    songs: [ musicLib.getPumped, musicLib.chill ],
}

export const commuteHomeWithDinner: Partial<Trip> = {
    waypoints: [ MITCH_WORK, FOOD_ADULT, FOOD_KIDS, MITCH_HOME ],
    mood: UserMood.happy,
    songs: [ musicLib.chill, musicLib.getPumped, musicLib.stressed ],
}

export const commuteHomeWithGymDinner: Partial<Trip> = {
    waypoints: [ MITCH_WORK, FITNESS, FOOD_ADULT, FOOD_KIDS, MITCH_HOME ],
    mood: UserMood.happy,
    songs: [ musicLib.getPumped, musicLib.chill ],
}

export const dateNight: Partial<Trip> = {
    waypoints: [ MITCH_HOME, BABY_SITTER, FOOD_ADULT, BABY_SITTER, MITCH_HOME ],
    mood: UserMood.happy,
    songs: [ musicLib.kids, musicLib.chill, musicLib.dateNight, musicLib.kids ],
}

export const dropKidsSchool: Partial<Trip> = {
    waypoints: [ MITCH_HOME, KIDS_SCHOOL, MITCH_WORK ],
    mood: UserMood.stressed,
    songs: [ musicLib.kids, musicLib.chill, musicLib.getPumped ],
}

export const TRIPS = [ commuteHomeWithDinner, commuteHomeWithGym, commuteHomeWithGymDinner, commuteToHome, dropKidsSchool, dateNight ];
