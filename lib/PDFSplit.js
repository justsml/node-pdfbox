// var Promise = require('bluebird');

var exec = require('child_process').exec;

module.exports = function(file) {

	var command = [
		'java',
		'-jar',
		this.pdfbox,
		'PDFSplit',
		file
	];

	return exec(command.join(' '));
}
