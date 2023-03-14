const jsonfile = require('jsonfile');
const moment = require('moment');
const FILE_PATH = './data.js';
const simpleGit = require('simple-git');


const DATE = moment().format();

const data = {date : DATE}
jsonfile.writeFile(FILE_PATH, data);

simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE})