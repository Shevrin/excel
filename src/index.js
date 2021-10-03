import './scss/index.scss'
import './scss/dashboard.scss'
import { Excel } from '@/components/excel/Excel'
import { Toolbar } from './components/toolbar/Toolbar';
import { Formula } from './components/formula/Formula';
import { Header } from './components/header/Header';
import { Table } from './components/table/Table';

const excel = new Excel('#app', {
	components: [
		Header,
		Toolbar,
		Formula,
		Table
	]
})

excel.render()