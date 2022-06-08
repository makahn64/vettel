import chalk from 'chalk';
import { getRoute } from './src/api/getRoute';
import { MITCH_HOME, MITCH_WORK } from './src/data/locations';
import { LatLng } from './src/types';
import util from 'util';
import { saveJSON } from './src/utils/saveJSON';

console.log(chalk.green("Welcome to Driving Synthetic Humans"));

(async () => {
    console.log(util.inspect(MITCH_HOME));
    const { data } = await getRoute([MITCH_HOME.geolocation, MITCH_WORK.geolocation]);
    await saveJSON('test.json', data);
})();