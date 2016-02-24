import test from 'ava';
import gistr from 'gist-require';

test(t => {
    t.throws(gistr)
})

test.cb(t => {
    let url = 'https://gist.github.com/sohje/73a80333911026a1be25'
    t.plan(3);
    gistr(url, (err, data) => {
        t.ok(data);
        t.notThrows(data);
        t.ifError(err);
        t.end();
    })
})
