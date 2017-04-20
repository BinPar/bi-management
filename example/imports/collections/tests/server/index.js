import ServerCollectionAPI from '../../server/ServerCollectionAPI';
import runFixtures from './fixtures';

class Tests extends ServerCollectionAPI {
	constructor() {
		super("tests");
	}

	get permissions() {
		return {
			insert: function (userId, doc) {
				return Roles.userIsInRole(userId, ['admin']);
			},
			update: function (userId, doc, fields, modifier) {
				return Roles.userIsInRole(userId, ['admin']);
			},
			remove: function (userId, doc) {
				return Roles.userIsInRole(userId, ['admin']);
			}
		}
	}

	fixturesRequired() {
		return this.collection.find({}).count() === 0;
	}

	createFixtures() {
		runFixtures.call(this);
	}
}

export default new Tests();