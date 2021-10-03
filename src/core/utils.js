//Pure Functions
export function capitaize(string = '') {
	if (typeof string !== 'string') {
		return string

	}
	return 'on' + string.charAt(0).toUpperCase() + string.slice(1)
}