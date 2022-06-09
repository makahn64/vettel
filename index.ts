import chalk from 'chalk';
import { getRoute } from './src/api/getRoute';
import { commuteHomeWithGymDinner, MITCH_HOME, MITCH_WORK } from './src/data/locations';
import { LatLng } from './src/types';
import util from 'util';
import { saveJSON } from './src/utils/saveJSON';
import { TRIPS, Trip } from './src/data/locations';
import { arrayOfLocFmWaypoints } from './src/utils/arrayOfLocFmWaypoints';

console.log(chalk.green("Welcome to Driving Synthetic Humans"));

(async () => {

    for (const trip in TRIPS) {

    }
    const trip = commuteHomeWithGymDinner;
    const { waypoints } = trip;
    const { data } = await getRoute(arrayOfLocFmWaypoints(waypoints!));
    const fullTrip = { ...trip, timestamp: new Date().getTime(), id: 'uuid...here'};
    
    await saveJSON('test.json', { trip: fullTrip, routing: data });
})();