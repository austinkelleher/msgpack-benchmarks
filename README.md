msgpack-benchmark
================
Compared:
- msgpack-js
- msgpack
- msgpack5
- msgpack-lite

The following results were collected on the following setup:

- Node.js v4.4.4
- MacBook Pro (Retina, 15-inch, Mid 2015)
- OS: OS X El Capitan v 10.11.5
- Processor: 2.5 GHz Intel Core i7
- Memory: 16 GB 1600 MHz DDR3
- Graphics: AMD Radeon R9 M370X 2048 MB

Results:

```bash
msgpack-js - Pack small string x 656,804 ops/sec ±1.87% (76 runs sampled)
msgpack-js - Pack large string x 2,108 ops/sec ±5.51% (58 runs sampled)
msgpack-js - Pack small object x 54,968 ops/sec ±1.08% (88 runs sampled)
msgpack-js - Pack large object x 65.09 ops/sec ±1.54% (64 runs sampled)
msgpack-js - Unpack small string x 2,355,866 ops/sec ±0.94% (86 runs sampled)
msgpack-js - Unpack large string x 41,148 ops/sec ±1.23% (81 runs sampled)
msgpack-js - Unpack small object x 233,993 ops/sec ±1.00% (87 runs sampled)
msgpack-js - Unpack large object x 150 ops/sec ±0.94% (71 runs sampled)
msgpack - Pack small string x 635,280 ops/sec ±5.51% (71 runs sampled)
msgpack - Pack large string x 6,661 ops/sec ±0.90% (78 runs sampled)
msgpack - Pack small object x 134,706 ops/sec ±7.80% (75 runs sampled)
msgpack - Pack large object x 246 ops/sec ±1.25% (78 runs sampled)
msgpack - Unpack small string x 1,457,549 ops/sec ±1.03% (79 runs sampled)
msgpack - Unpack large string x 41,932 ops/sec ±1.03% (79 runs sampled)
msgpack - Unpack small object x 287,569 ops/sec ±1.11% (77 runs sampled)
msgpack - Unpack large object x 377 ops/sec ±1.40% (82 runs sampled)
msgpack5 - Pack small string x 1,076,499 ops/sec ±1.43% (89 runs sampled)
msgpack5 - Pack large string x 6,379 ops/sec ±5.55% (59 runs sampled)
msgpack5 - Pack small object x 33,351 ops/sec ±2.65% (72 runs sampled)
msgpack5 - Pack large object x 84.43 ops/sec ±2.21% (60 runs sampled)
msgpack5 - Unpack small string x 290,494 ops/sec ±2.68% (71 runs sampled)
msgpack5 - Unpack large string x 32,780 ops/sec ±2.02% (80 runs sampled)
msgpack5 - Unpack small object x 69,170 ops/sec ±6.36% (70 runs sampled)
msgpack5 - Unpack large object x 72.06 ops/sec ±1.56% (71 runs sampled)
msgpack-lite - Pack small string x 603,470 ops/sec ±1.79% (58 runs sampled)
msgpack-lite - Pack large string x 1,748 ops/sec ±0.98% (78 runs sampled)
msgpack-lite - Pack small object x 186,229 ops/sec ±1.06% (75 runs sampled)
msgpack-lite - Pack large object x 316 ops/sec ±2.18% (73 runs sampled)
msgpack-lite - Unpack small string x 5,188,661 ops/sec ±0.97% (81 runs sampled)
msgpack-lite - Unpack large string x 42,163 ops/sec ±1.05% (78 runs sampled)
msgpack-lite - Unpack small object x 558,208 ops/sec ±1.27% (84 runs sampled)
msgpack-lite - Unpack large object x 277 ops/sec ±1.69% (78 runs sampled)
```
