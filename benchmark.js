var Benchmark = require('benchmark');
var msgpackjs = require('msgpack-js');
var nodemsgpack = require('msgpack');
var msgpack5 = require('msgpack5')();
var SampleUtil = require('./util/sample');

var msgpackTypes = {
    'msgpack-js': {
        encode: msgpackjs.encode,
        decode: msgpackjs.decode
    },
    msgpack: {
        encode: nodemsgpack.pack,
        decode: nodemsgpack.unpack
    },
    msgpack5: {
        encode: msgpack5.encode,
        decode: msgpack5.decode
    }
};

function addUnpackSuite(type, suite, msgpack, sample) {
    suite.add(`${type} - Unpack small string`, function() {
            msgpack.decode(sample.encoded.str.small);
        })
        .add(`${type} - Unpack large string`, function() {
            msgpack.decode(sample.encoded.str.large);
        })
        .add(`${type} - Unpack small object`, function() {
            msgpack.decode(sample.encoded.obj.small);
        })
        .add(`${type} - Unpack large object`, function() {
            msgpack.decode(sample.encoded.obj.large);
        });
    return suite;
}

function addPackSuite(type, suite, msgpack, sample) {
    suite.add(`${type} - Pack small string`, function() {
            msgpack.encode(sample.nonencoded.str.small);
        })
        .add(`${type} - Pack large string`, function() {
            msgpack.encode(sample.nonencoded.str.large);
        })
        .add(`${type} - Pack small object`, function() {
            msgpack.encode(sample.nonencoded.obj.small);
        })
        .add(`${type} - Pack large object`, function() {
            msgpack.encode(sample.nonencoded.obj.large);
        });
    return suite;
}

function suiteGenerator(options) {
    options = options || {};
    var type = options.type;
    var msgpack = options.msgpack;
    var unpack = options.unpack === true;
    var pack = options.pack === true;
    var sample =  SampleUtil.generate(msgpack.encode, msgpack.decode);
    var suite = options.suite || new Benchmark.Suite();

    if (!options || pack) {
        suite = addPackSuite(type, suite, msgpack, sample);
    }

    if (!options || unpack) {
        suite = addUnpackSuite(type, suite, msgpack, sample);
    }

    return suite;
}

var suite;

for (var type in msgpackTypes) {
    var msgpackType = msgpackTypes[type];
    console.log(type);

    suite = suiteGenerator({
        suite: suite,
        type: type,
        msgpack: msgpackType,
        pack: true,
        unpack: true
    });
}

suite.run({
    'async': true
}).on('cycle', function(event) {
    console.log(String(event.target));
})
.on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
    console.log('Slowest is ' + this.filter('slowest').map('name'));
});
