'use strict';
const http = require('https');
const url = require('url');
const Module = module.constructor;
const compiled = new Module()

module.exports = (gist, cb) => {
    var gistUrl = url.parse(gist).path.split('/').pop();
    const options = {
        host: 'api.github.com', port: 443,
        method: 'GET', path: `/gists/${gistUrl}`,
        headers: {'User-Agent': 'Mozilla/5.0 (compatible; Gist-require/1.0.0)'}
    }

    let req = http.request(options, (res) => {
        let data = '';
        if (res.statusCode > 200) {
            cb(new Error(`HTTP status is ${res.statusCode}`))
        }
        res.on('data', (chunk) => {
            data += chunk;
        });
        res.on('end', () => {
            let gist = JSON.parse(data)
            for (let file in gist.files) {
                let temp = gist.files[file]
                if (temp.truncated || temp.type !== 'application/javascript') {
                    cb(new Error('File too big or in wrong format'))
                }
                else {
                    compiled._compile(temp.content)
                    cb(null, compiled.exports)
                }
                break;
            }
        });
        res.on('error', (err) => {cb(err)})
    })
    req.end();
}
