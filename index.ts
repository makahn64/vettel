import chalk from 'chalk';
import { getRoute } from './src/api/getRoute';
import { MITCH_HOME, MITCH_WORK } from './src/data/locations';
import { LatLng } from './src/types';
import util from 'util';
import { saveJSON } from './src/utils/saveJSON';
import { TRIPS } from './src/data/locations';
import { arrayOfLocFmWaypoints } from './src/utils/arrayOfLocFmWaypoints';

console.log(chalk.green("Welcome to Driving Synthetic Humans"));

(async () => {

    for (const trip in TRIPS) {
        
    }
    const trip = TRIPS.commuteHomeWithDinner;
    const { data } = await getRoute(arrayOfLocFmWaypoints(trip));
    await saveJSON('test.json', data);
})();