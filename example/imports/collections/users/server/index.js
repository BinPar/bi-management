import runFixtures from './fixtures';

export default new class Users {
	constructor() {
		this.collectionName = "users";
		BP.API[this.collectionName] = this;
		this.collection = Meteor.users;
		ServerCollectionAPI.setupAPI(this);
	}

	fixturesRequired() {
		return this.collection.find({}).count() === 0;
	}

	createFixtures() {
		runFixtures.call(this);
	}

	/*met_isOnline(userId, targetUserId) {
	 if (!userId) {
	 throw new Meteor.Error(401, "Usuario no identificado.");
	 }
	 check(targetUserId, String);
	 }*/
}