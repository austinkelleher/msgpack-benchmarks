const Random = require('./random');

const randomLongStr = Random.randomString(5000);
const randomLongObj = Random.randomObj(5000);

exports.generate = function(msgpackEncodeFn, msgpackDecodeFn) {
    return {
        nonencoded: {
            str: {
                small: 'Hello',
                large: randomLongStr
            },
            obj: {
                small: { hello: 'world' },
                large: randomLongObj
            }
        },
        encoded: {
            str: {
                small: msgpackEncodeFn('Hello'),
                large: msgpackEncodeFn(randomLongStr)
            },

            obj: {
                small: msgpackEncodeFn({ hello: 'world' }),
                large: msgpackEncodeFn(randomLongObj)
            }
        }
    };
};
