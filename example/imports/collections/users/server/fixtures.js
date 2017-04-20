export default function () {
	let newUser = Accounts.createUser({
		password: "b!NP4r.t34m",
		email: "editor@mkmedia.es",
		profile: {
			isEditor: true,
			ownPosters: [],
			collaborationPosters: [],
			fullName: "MK Media",
		}
	});
	Roles.addUsersToRoles(newUser, 'Admin');
}