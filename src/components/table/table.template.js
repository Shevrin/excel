const CODES = {
	A: 65,
	Z: 90
}
const colsCount = CODES.Z - CODES.A + 1

function toCell(_, index) {
	// console.log(index);
	return `
	<div class="cell" contenteditable data-col="${index}"></div>`
}
function toColumn(content, index) {
	// console.log(index);
	return `
	<div class="column-info" data-type="resizable" data-col="${index}">${content}
	<div class="column-resize" data-resize="col"></div>
	</div>`
}
function createRow(rowIndex, content) {
	const resizer = rowIndex ? `<div class="row-resize" data-resize="row"></div>` : ''
	return `
	<div class="row" data-type="resizable">
	<div class="row-info">
		${rowIndex ? rowIndex : ''}
	${resizer}
		</div>
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

