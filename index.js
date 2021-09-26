const fs = require('fs')
const path = require('path')

fs.readFile(process.argv[2], 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }

	const maxpatName = path.dirname(process.argv[2]) + path.sep + path.basename(process.argv[2], '.amxd') + '.maxpat'

	const re = /[^{]+(\{.*}).*/s;
	const maxPatch = data.match(re)
	fs.writeFile(maxpatName, maxPatch[1], err => {
		if (err) {
			console.error(err)
			return
		}
		console.log('OK')
	})
})