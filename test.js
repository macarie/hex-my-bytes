import test from 'ava';

import {toHex, toBytes} from './dist/index.js';

test('`toHex()` should convert a list of bytes to a hexadecimal string', (t) => {
	const string = toHex([1, 2, 3, 4, 5, 128, 164, 255]);

	t.is(string, '010203040580a4ff');
});

test('`toHex()` should work with whatever type of array', (t) => {
	t.is(toHex(Uint8Array.of(254)), 'fe');
	t.is(toHex(Uint16Array.of(254)), 'fe');
	t.is(toHex(Uint32Array.of(254)), 'fe');
	t.is(toHex(Int8Array.of(254)), 'fe');
	t.is(toHex(Int16Array.of(254)), 'fe');
	t.is(toHex(Int32Array.of(254)), 'fe');
});

test('`toHex()` cannot work with an argument that is not an array or a view of `ArrayBuffer`', (t) => {
	const expectedError = {
		instanceOf: TypeError,
		message: 'The `bytes` argument must be an array or a view of `ArrayBuffer`',
	};

	t.throws(() => {
		toHex('hello');
	}, expectedError);
	t.throws(() => {
		toHex(123);
	}, expectedError);
	t.throws(() => {
		toHex({});
	}, expectedError);
});

test('`toBytes()` should convert a hexadecimal string to a list of bytes', (t) => {
	const bytes = Uint8Array.of(1, 2, 3, 4, 128, 194, 223, 254, 255);
	const hexString = toHex(bytes);

	t.deepEqual(toBytes(hexString), bytes);
});

test('`toBytes()` cannot work with an argument that is not a string', (t) => {
	t.throws(
		() => {
			toBytes(12);
		},
		{
			instanceOf: TypeError,
			message:
				"The `hexString` argument must be of type 'string', but it is of type 'number'",
		},
	);
	t.throws(
		() => {
			toBytes({});
		},
		{
			instanceOf: TypeError,
			message:
				"The `hexString` argument must be of type 'string', but it is of type 'object'",
		},
	);
	t.throws(
		() => {
			toBytes(true);
		},
		{
			instanceOf: TypeError,
			message:
				"The `hexString` argument must be of type 'string', but it is of type 'boolean'",
		},
	);
});

test('`toBytes()` cannot work with a string that has an odd number of characters', (t) => {
	t.throws(
		() => {
			toBytes('fef');
		},
		{
			instanceOf: TypeError,
			message:
				'The `hexString` argument must have an even number of characters, but it has 3',
		},
	);
});
