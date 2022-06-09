import chalk from 'chalk';
import { getRoute } from './src/api/getRoute';
import { commuteHomeWithGymDinner, MITCH_HOME, MITCH_WORK } from './src/data/locations';
import { saveJSON } from './src/utils/saveJSON';
import { TRIPS } from './src/data/locations';
import { arrayOfLocFmWaypoints } from './src/utils/arrayOfLocFmWaypoints';
import { mapRouteData } from './src/utils/mapRouteData';

console.log(chalk.green("Welcome to Driving Synthetic Humans"));

(async () => {

    const fullMode = process.argv[2] === '--full';
    for (const trip of TRIPS) {
        const { waypoints } = trip;
        const { data } = await getRoute(arrayOfLocFmWaypoints(waypoints!));
        const fullTrip = { ...trip, timestamp: new Date().getTime(), id: `${data.uuid}`, route: mapRouteData(data, fullMode) };
        
        await saveJSON(`./out/trip-${fullTrip.id}.json`, fullTrip);
    }
    
    const trip = commuteHomeWithGymDinner;
   
})();