const { expect } = require('chai');

const { add } = require('../src/add');

describe('Test The Add Function', () => {

	// it('should flag when invalid inputs occur', () => {
	// 	let sum = add();
	// 	sum = add ('1', '5');
	// 	expect(sum).to.equal(undefined);
	// });

	// it('should add 2 numbers', () => {
	// 	let sum = add(1, 3);
	// 	expect(sum).to.equal(4);
	// });

	it('should add any number', () => {
		let sum = add(1, 3, 4, undefined, null, isNaN, 6, 9);
		expect(sum).to.equal(23);
	});
});