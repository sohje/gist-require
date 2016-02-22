# gist-require
Require JavaScript module from Gist URL

*NOTE* only 1 file per gist with correct type 'application/javascript'

## Install

```
$ npm install gist-require
```

## Usage

### example gist
```js
// link => https://gist.github.com/sohje/73a80333911026a1be25
module.exports = () => {console.log('Hello from Gist')}
```

### Run example
```js
var gistr = require('gist-require')
var url = 'https://gist.github.com/sohje/73a80333911026a1be25'
gistr(url, function(err, data) {
	data() //=> Hello from Gist
})
```

## License

MIT © [Nikolay Spiridonov](https://github.com/sohje)
