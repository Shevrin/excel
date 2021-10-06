import { $ } from "../../core/dom";

export function resizeHandler($root, event) {

	const $resizer = $(event.target)
	const $parentResizer = $resizer.closest('[data-type="resizable"]')
	const typeOfResizeObj = $resizer.data.resize
	const coords = $parentResizer.getCoords()
	const allCells = $root.findAll(`[data-col="${$parentResizer.data.col}"]`)
	let value
	const sideProp = typeOfResizeObj === 'col' ? 'bottom' : 'right'

	$resizer.css({
		opacity: 1,
		[sideProp]: '-2000px',
	})

	document.onmousemove = (e) => {
		if (typeOfResizeObj === 'col') {
			const delta = e.pageX - coords.right
			value = coords.width + delta
			$resizer.css({
				right: -delta + 'px'
			})
		} else {
			const delta = e.pageY - coords.bottom
			value = coords.height + delta
			$resizer.css({
				bottom: -delta + 'px'
			})
		}
	}

	document.onmouseup = () => {
		document.onmousemove = null
		document.onmouseup = null

		if (typeOfResizeObj === 'col') {
			$parentResizer.css({ width: value + 'px' })
			allCells
				.forEach(elem => elem.style.width = value + 'px'
				)
		} else {
			$parentResizer.css({ height: value + 'px' })
		}
		$resizer.css({
			opacity: 0,
			right: 0,
			bottom: 0
		})
	}
}