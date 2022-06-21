export const toHex = (bytes: number[] | Uint8Array) => {
	if (!Array.isArray(bytes) && !ArrayBuffer.isView(bytes)) {
		throw new TypeError(
			'The `bytes` argument must be an array or a view of `ArrayBuffer`',
		);
	}

	return [...bytes]
		.map((byte) => (byte & 0xff).toString(16).padStart(2, '0'))
		.join('');
};

export const toBytes = (hexString: string) => {
	if (typeof hexString !== 'string') {
		throw new TypeError(
			`The \`hexString\` argument must be of type 'string', but it is of type '${typeof hexString}'`,
		);
	}

	const hexStringLength = hexString.length;

	if (hexStringLength % 2) {
		throw new TypeError(
			`The \`hexString\` argument must have an even number of characters, but it has ${hexStringLength}`,
		);
	}

	const output = new Uint8Array(hexStringLength / 2);

	for (let index = 0; index < hexStringLength; index += 2) {
		output.set(
			[Number.parseInt(hexString.slice(index, index + 2), 16)],
			index / 2,
		);
	}

	return output;
};
