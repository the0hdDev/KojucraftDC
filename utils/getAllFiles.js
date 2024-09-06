const path = require('path')
const fs = require('fs')

module.exports = (directory, FoldersOnly = false) => {
    let filenames = []

    const files = fs.readFileSync(directory, {withFileTypes: true})

    for(const file of files ) {
        const filepath = path.join(directory, file.name)

        if (FoldersOnly) {
            if (file.isDirectory()) {
                filenames.push(filepath)
            }             
        } else {
            if (file.isDirectory()) {
                filenames.push(filepath) 
            }
        }

    }

    console.log(filenames)

    return filenames; 
}