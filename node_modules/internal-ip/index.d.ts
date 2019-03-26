declare namespace internalIp {
	/**
	 * @returns The IPv6 address of the internet-facing interface, as determined from the default gateway. When the address cannot be determined for any reason, `null` will be returned.
	 *
	 * @example
	 *
	 * console.log(await internalIp.v6());
	 * //=> 'fe80::1'
	 */
	export function v6(): Promise<string>;
	export namespace v6 {
		/**
		 * @returns The IPv6 address of the internet-facing interface, as determined from the default gateway. When the address cannot be determined for any reason, `null` will be returned.
		 *
		 * @example
		 *
		 * console.log(internalIp.v6.sync());
		 * //=> 'fe80::1'
		 */
		function sync(): string;
	}

	/**
	 * @returns The IPv4 address of the internet-facing interface, as determined from the default gateway. When the address cannot be determined for any reason, `null` will be returned.
	 *
	 * @example
	 *
	 * console.log(await internalIp.v4())
	 * //=> '10.0.0.79'
	 */
	export function v4(): Promise<string>;
	export namespace v4 {
		/**
		 * @returns The IPv4 address of the internet-facing interface, as determined from the default gateway. When the address cannot be determined for any reason, `null` will be returned.
		 *
		 * @example
		 *
		 * console.log(internalIp.v4.sync())
		 * //=> '10.0.0.79'
		 */
		function sync(): string;
	}
}

export default internalIp;
