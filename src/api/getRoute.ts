import axios from "axios";
import { LatLng } from "../types";
import { BASE_URL, MAPBOX_TOKEN } from "./apiConstants";

const test_url = 'https://api.mapbox.com/directions/v5/mapbox/driving/-121.90859350814958,37.30093779476478;-122.03649431935926,37.41058203847942';

export const getRoute = async (locations: LatLng[]) => {
    if (!locations.length) throw new Error('Try going somewhere, dude');

    const locationSet = locations.reduce((accum, loc) => {
        accum = accum + `${loc.long},${loc.lat};`
        return accum;
    }, '');

    const url = `${BASE_URL}${locationSet.slice(0,-1)}`;

    console.log(url);

    return axios.get(url, {
        params: {
            access_token: MAPBOX_TOKEN,
            steps: true,
            overview: 'full',
            annotations: 'duration',
        }
    })
}