msgpack-benchmark
================
Compared:
- msgpack-js
- msgpack
- msgpack5


Results:

```bash
msgpack-js - Pack small string x 512,636 ops/sec ±2.29% (78 runs sampled)
msgpack-js - Pack large string x 2,120 ops/sec ±4.50% (73 runs sampled)
msgpack-js - Pack small object x 131,841 ops/sec ±0.80% (81 runs sampled)
msgpack-js - Pack large object x 54.18 ops/sec ±1.49% (65 runs sampled)
msgpack-js - Unpack small string x 1,798,227 ops/sec ±1.13% (84 runs sampled)
msgpack-js - Unpack large string x 38,266 ops/sec ±0.73% (79 runs sampled)
msgpack-js - Unpack small object x 561,469 ops/sec ±0.86% (87 runs sampled)
msgpack-js - Unpack large object x 114 ops/sec ±0.93% (76 runs sampled)
msgpack - Pack small string x 424,911 ops/sec ±4.96% (76 runs sampled)
msgpack - Pack large string x 5,516 ops/sec ±7.06% (74 runs sampled)
msgpack - Pack small object x 176,224 ops/sec ±22.07% (71 runs sampled)
msgpack - Pack large object x 228 ops/sec ±1.65% (76 runs sampled)
msgpack - Unpack small string x 760,088 ops/sec ±1.60% (72 runs sampled)
msgpack - Unpack large string x 31,823 ops/sec ±1.23% (74 runs sampled)
msgpack - Unpack small object x 448,427 ops/sec ±1.71% (73 runs sampled)
msgpack - Unpack large object x 370 ops/sec ±1.33% (82 runs sampled)
msgpack5 - Pack small string x 611,126 ops/sec ±1.30% (84 runs sampled)
msgpack5 - Pack large string x 5,890 ops/sec ±5.07% (73 runs sampled)
msgpack5 - Pack small object x 91,571 ops/sec ±3.59% (68 runs sampled)
msgpack5 - Pack large object x 48.52 ops/sec ±3.37% (50 runs sampled)
msgpack5 - Unpack small string x 193,503 ops/sec ±3.28% (72 runs sampled)
msgpack5 - Unpack large string x 29,141 ops/sec ±1.62% (76 runs sampled)
msgpack5 - Unpack small object x 137,508 ops/sec ±2.80% (76 runs sampled)
msgpack5 - Unpack large object x 56.12 ops/sec ±1.59% (56 runs sampled)
Fastest is msgpack-js - Unpack small string
Slowest is msgpack5 - Pack large object
```
