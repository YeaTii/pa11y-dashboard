'use strict';

module.exports = helper;

function helper(hbs) {

	console.log(hbs);
	// Convert a string to lower-case
	hbs.registerHelper('lowercase', context => {
		console.log(context);
		context.toLowerCase();
	});

}
