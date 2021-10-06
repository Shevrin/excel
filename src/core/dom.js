class Dom {
	constructor(selector) {
		this.$el = typeof selector === 'string'
			? document.querySelector(selector)
			: selector
	}
	html(html) {
		if (typeof html === 'string') {
			this.$el.innerHTML = html
			return this
		}
		return this.$el.outerHTML.trim()
	}
	clear() {
		this.html()
		return this
	}
	on(eventType, callback) {
		this.$el.addEventListener(eventType, callback)
	}
	off(eventType, callback) {
		this.$el.removeEventListener(eventType, callback)
	}
	append(node) {
		// console.log(node);
		// console.log(node.$el);
		if (node instanceof Dom) {
			node = node.$el

		}

		if (Element.prototype.append) {
			this.$el.append(node)
		} else {

			this.$el.appendChild(node)
		}
		return this
	}

	closest(selector) {
		return $(this.$el.closest(selector))
	}

	getCoords() {
		return this.$el.getBoundingClientRect()
	}

	findAll(selector) {
		return this.$el.querySelectorAll(selector)
	}

	css(styles = {}) {
		Object
			.keys(styles).forEach(key => {
				this.$el.style[key] = styles[key]
			})

	}


	get data() {
		return this.$el.dataset
	}
}
export function $(selector) {
	return new Dom(selector)
}

$.create = (tagName, classes = '') => {
	const element = document.createElement(tagName)
	if (classes) {
		element.classList.add(classes)
	}
	return $(element)
}