import Collections from '../collections';

class DB {

	constructor() {
		this.dbNames = Object.keys(Collections).map((dbName) => {
			this[dbName] = Collections[dbName];
			return dbName;
		});
	}

}

export default new DB();