export default function () {
	console.log('this fixtures', this);
	this.insert({
		propTest: 1,
		name: "Test 1"
	});
}