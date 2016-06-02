const Random = require('./random');

const randomLongStr = Random.randomString(5000);
const randomLongObj = Random.randomObj(5000);

const smallObj = {
    a: 1,
    b: 'Test1',
    c: {
        d: 'Test2'
    },
    e: {
        f: {
            g: 'Test3'
        }
    }
};

exports.generate = function(msgpackEncodeFn, msgpackDecodeFn) {
    return {
        nonencoded: {
            str: {
                small: 'Hello',
                large: randomLongStr
            },
            obj: {
                small: smallObj,
                large: randomLongObj
            }
        },
        encoded: {
            str: {
                small: msgpackEncodeFn('Hello'),
                large: msgpackEncodeFn(randomLongStr)
            },

            obj: {
                small: msgpackEncodeFn(smallObj),
                large: msgpackEncodeFn(randomLongObj)
            }
        }
    };
};
