import { capitaize } from "./utils";

export class DomListener {
	constructor($root, listeners = []) {
		if (!$root) {
			throw new Error('No $root provided for DomListener!');
		}
		this.$root = $root
		this.listeners = listeners
	}
	initDOMListeners() {
		// console.log(this);
		// console.log(this.listeners)
		this.listeners.forEach(listener => {
			const method = capitaize(listener)
			// console.log(method);
			// console.log(listener, this.$root)
			if (!this[method]) {
				throw new Error(`Method ${method} isn't implemented in ${this.name || ''} Component`)
			}
			this[method] = this[method].bind(this)
			// this.$root.addEventListener(listener, this[method])
			this.$root.on(listener, this[method])
		})
	}
	removeDOMListeners() {
		this.listeners.forEach(listener => {
			const method = capitaize(listener)
			console.log(method);
			this.$root.off(listener, this[method])
		})
	}
}