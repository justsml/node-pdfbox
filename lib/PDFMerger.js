/* jshint esnext:true */
var exec = require('child_process').exec;

module.exports = function(opts, callback) {
  var files = opts.files,
      outputFile = opts;

	var command = [
		'java',
		'-jar',
		this.pdfbox,
		'PDFMerger',
	].concat(files.map(function (file) { return '"' + file + '"';}));

  command.push('"' + outputFile + '"');

	return exec(command.join(' '), {
    timeout: 10000,
    maxBuffer: (1024 * 368)
  }, callback);
}
