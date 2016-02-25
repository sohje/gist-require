import test from 'ava';
import gistr from './index.js';

test(t => {
    t.throws(gistr)
})

test.cb(t => {
    let url = 'https://gist.github.com/sohje/73a80333911026a1be25'
    gistr(url, (err, data) => {
        if (data)  {
            t.ok(data);
            t.notThrows(data);
        }
        // Github API rate limiting for travis servers...
        if (err) t.ifError(err);
        t.end();
    })
})
