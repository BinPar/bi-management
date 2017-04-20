import SimpleSchema from 'simpl-schema';
import Collection from '../Collection';

class Tests extends Collection {

	constructor() {
		super("tests");
	}

	generateSchema() {
		const userProfile = new SimpleSchema({
			firstName: {
				type: String,
				label: "User's first name"
			},
			lastName: {
				type: String,
				label: "User's last name"
			}
		});

		this._schema = new SimpleSchema({
			emails: {
				type: Array,
				label: "Emails"
			},
			"emails.$": {
				type: Object,
				optional: true
			},
			"emails.$.address": {
				type: String,
				label: "eMail",
				regEx: SimpleSchema.RegEx.Email
			},
			"emails.$.verified": {
				type: Boolean,
				label: "Verified",
				defaultValue: false
			},
			createdDate: {
				type: Date,
				label: "Creation Date",
				optional: true
			},
			updateDate: {
				type: Date,
				label: "Update Date",
				autoValue: function () {
					if (this.isUpdate) {
						return new Date();
					}
				},
				optional: true
			},
			profile: {
				type: userProfile,
				label: "Profile",
				optional: true
			},
			associatedConnectionId: {
				type: String,
				label: "Associated Connection ID",
				optional: true
			},
			services: {
				type: Object,
				optional: true,
				blackbox: true
			},
			roles: {
				type: [String],
				optional: true,
				label: "Roles"
			},
			heartbeat: {
				type: Date,
				optional: true
			},
			selectUser: {
				type: String,
				optional: true
			}
		});

		return this._schema;
	}

	getSchema() {
		if(this._schema) {
			return this._schema;
		}
		return this.generateSchema();
	}
}

export default new Tests();
export const TestsServer = Meteor.isServer ? require('./server').default : {};