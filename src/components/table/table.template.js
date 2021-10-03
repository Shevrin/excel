const CODES = {
	A: 65,
	Z: 90
}
const colsCount = CODES.Z - CODES.A + 1

function toCell() {
	return `
	<div class="cell" contenteditable></div>`
}
function toColumn(content) {
	return `
	<div class="column">${content}</div>`
}
function createRow(rowIndex, content) {
	return `
	<div class="row">
	<div class="row-info">${rowIndex ? rowIndex : ''}</div>
	<div class="row-data">${content}</div>
	</div>`
}
function toChar(_, index) {
	return String.fromCharCode(CODES.A + index)
}
export const createTable = (rowsCount = 15) => {
	const rows = []
	const cols = new Array(colsCount)
		.fill('')
		.map(toChar)
		// .map((el) => {
		// 	return createCol(el)
		.map(toColumn)
		.join('')

	// console.log(null, cols);
	rows.push(createRow(null, cols))

	for (let i = 0; i < rowsCount; i++) {
		const cells = new Array(colsCount)
			.fill('')
			.map(toCell)
			.join('')
		rows.push(createRow(i + 1, cells))

	}
	return rows.join('')
}
