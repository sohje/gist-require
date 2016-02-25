import test from 'ava';
import gistr from './index.js';

test(t => {
    t.throws(gistr)
})

test.cb(t => {
    let url = 'https://gist.github.com/sohje/73a80333911026a1be25'
    t.plan(1);
    gistr(url, (err, data) => {
        // t.ok(data);
        // t.notThrows(data);
        // Github API rate limiting for travis servers...
        t.ifError(!err);
        t.end();
    })
})
