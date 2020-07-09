# [hex-my-bytes](https://github.com/macarie/hex-my-bytes) [![Release Version](https://img.shields.io/npm/v/hex-my-bytes.svg?label=&color=0080FF)](https://www.npmjs.com/package/hex-my-bytes)

> Convert a list of bytes to a HEX string, and vice versa

[![Build Status](https://img.shields.io/travis/com/macarie/hex-my-bytes)](https://travis-ci.com/macarie/hex-my-bytes) [![Coverage Status](https://img.shields.io/codecov/c/github/macarie/hex-my-bytes)](https://codecov.io/gh/macarie/hex-my-bytes/)

Can be useful for debugging instances of `TypedArray`.


## Install

```console
$ npm install hex-my-bytes
```

Or if you prefer using Yarn:

```console
$ yarn add hex-my-bytes
```


## Usage

```javascript
import { toHex, toBytes } from 'hex-my-bytes'

toHex([ 155, 56, 172, 62, 195, 70 ])
// => '9b38ac3ec346'

toBytes('9b38ac3ec346')
// => Uint8Array [ 155, 56, 172, 62, 195, 70 ]
```


## API

### toHex(bytes)

Convert an array of bytes to a lowercased hexadecimal string.

#### bytes

Type: `number[]`

A list of bytes.

Notes:
- Only the first 8 bits of the numbers are used while generating the string.

### toBytes(hexString)

Convert a hexadecimal string to a list of bytes, creating a new instance of `Uint8Array`.

#### hexString

Type: `string`

A hexadecimal string representing bytes.

Throws a `TypeError` if the argument is not the correct type or if its length is an odd number.


## Browser support

The latest version of Chrome, Firefox, and Safari.


## Node.js support

hex-my-bytes requires **Node.js 11 or later**, but it indicates Node.js 8 in `package.json` so you can use it with Node.js 8 by polyfilling the globals without having Yarn fail on install.
