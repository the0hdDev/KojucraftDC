const getAllFiles = require("../utils/getAllFiles")
const path = require('path')


module.exports = (client) => {
    const eventFoldes = getAllFiles(path.join(__dirname, '..', 'events'), true)

    console.log(eventFoldes);
}
