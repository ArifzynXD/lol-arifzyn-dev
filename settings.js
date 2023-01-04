const fs = require('fs')

global.creator = 'ArifzynDev' 
global.apikey = ["ArifzynDev", "Arifzyn", "Arifzyn19"]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
