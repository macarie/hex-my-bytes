const toHex = bytes => {
	if (!Array.isArray(bytes) && !ArrayBuffer.isView(bytes)) {
		throw new TypeError(
			'The `bytes` argument must be an array or a view of `ArrayBuffer`'
		)
	}

	let hexString = ''

	const bytesLength = bytes.length

	for (let index = 0; index < bytesLength; index++) {
		hexString += (bytes[index] & 0xff).toString(16).padStart(2, '0')
	}

	return hexString
}

const toBytes = hexString => {
	if (typeof hexString !== 'string') {
		throw new TypeError(
			`The \`hexString\` argument must be of type 'string', but it is of type '${typeof hexString}'`
		)
	}

	const hexStringLength = hexString.length

	if (hexStringLength % 2) {
		throw new TypeError(
			`The \`hexString\` argument must have an even number of characters, but it has ${hexStringLength}`
		)
	}

	const output = new Uint8Array(hexStringLength / 2)

	for (
		let index = 0, outputOffset = 0;
		index < hexStringLength;
		index += 2, outputOffset++
	) {
		output.set([parseInt(hexString.slice(index, index + 2), 16)], outputOffset)
	}

	return output
}

export { toHex, toBytes }
