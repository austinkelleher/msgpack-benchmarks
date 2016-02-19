msgpack-benchmark
================
Compared:
- msgpack-js
- msgpack
- msgpack5


Results:

```bash
msgpack-js - Pack small string x 508,114 ops/sec ±2.07% (76 runs sampled)
msgpack-js - Pack large string x 1,966 ops/sec ±6.01% (58 runs sampled)
msgpack-js - Pack small object x 134,603 ops/sec ±1.66% (77 runs sampled)
msgpack-js - Pack large object x 42.81 ops/sec ±1.43% (54 runs sampled)
msgpack-js - Unpack small string x 1,538,333 ops/sec ±1.53% (75 runs sampled)
msgpack-js - Unpack large string x 35,225 ops/sec ±1.36% (77 runs sampled)
msgpack-js - Unpack small object x 493,068 ops/sec ±1.48% (84 runs sampled)
msgpack-js - Unpack large object x 98.79 ops/sec ±1.80% (68 runs sampled)
msgpack - Pack small string x 398,342 ops/sec ±3.63% (67 runs sampled)
msgpack - Pack large string x 5,130 ops/sec ±7.14% (69 runs sampled)
msgpack - Pack small object x 211,802 ops/sec ±2.00% (75 runs sampled)
msgpack - Pack large object x 214 ops/sec ±1.54% (72 runs sampled)
msgpack - Unpack small string x 796,255 ops/sec ±1.26% (80 runs sampled)
msgpack - Unpack large string x 33,580 ops/sec ±1.28% (66 runs sampled)
msgpack - Unpack small object x 468,919 ops/sec ±1.41% (78 runs sampled)
msgpack - Unpack large object x 337 ops/sec ±2.32% (73 runs sampled)
msgpack5 - Pack small string x 563,185 ops/sec ±1.62% (79 runs sampled)
msgpack5 - Pack large string x 6,397 ops/sec ±1.38% (72 runs sampled)
msgpack5 - Pack small object x 87,392 ops/sec ±3.62% (69 runs sampled)
msgpack5 - Pack large object x 48.94 ops/sec ±2.97% (58 runs sampled)
msgpack5 - Unpack small string x 182,614 ops/sec ±2.89% (69 runs sampled)
msgpack5 - Unpack large string x 27,255 ops/sec ±1.57% (79 runs sampled)
msgpack5 - Unpack small object x 123,617 ops/sec ±3.22% (72 runs sampled)
msgpack5 - Unpack large object x 53.14 ops/sec ±1.63% (65 runs sampled)
msgpacklite - Pack small string x 524,471 ops/sec ±2.36% (69 runs sampled)
msgpacklite - Pack large string x 1,446 ops/sec ±1.63% (71 runs sampled)
msgpacklite - Pack small object x 229,535 ops/sec ±0.97% (66 runs sampled)
msgpacklite - Pack large object x 270 ops/sec ±1.65% (70 runs sampled)
msgpacklite - Unpack small string x 4,880,829 ops/sec ±0.98% (79 runs sampled)
msgpacklite - Unpack large string x 35,976 ops/sec ±1.43% (82 runs sampled)
msgpacklite - Unpack small object x 885,357 ops/sec ±1.69% (76 runs sampled)
msgpacklite - Unpack large object x 254 ops/sec ±1.68% (75 runs sampled)
Fastest is msgpacklite - Unpack small string
Slowest is msgpack-js - Pack large object
```
