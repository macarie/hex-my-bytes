/**
 * Convert an array of bytes to a lowercased hexadecimal string.
 *
 * @param {number[]} bytes A list of bytes.
 * @returns {string} The bytes converted to a hexadecimal string.
 * @throws `TypeError` if the argument is not an array or a view of `ArrayBuffer`.
 * @example
 *  import { toHex } from 'hex-my-bytes'
 *
 *  toHex([ 254, 255, 0 ])
 *  // => 'feff00'
 */
export declare const toHex: (bytes: number[]): string

/**
 * Convert a hexadecimal string to a list of bytes, creating a new instance of `Uint8Array`.
 *
 * @param {string} hexString A hexadecimal string representing bytes.
 * @returns {Uint8Array} The bytes generated from the string as an instance of `Uint8Array`.
 * @throws `TypeError` if the argument is not a string or if its length is an odd number.
 * @example
 *  import { toByte } from 'hex-my-bytes'
 *
 *  toByte('feff00')
 *  // => Uint8Array [ 254, 255, 0 ]
 */
export declare const toBytes: (hexString: string): Uint8Array
