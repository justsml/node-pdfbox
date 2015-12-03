var exec = require('child_process').exec;
var DBGPFX = 'PDFToImage';

module.exports = function(opts, cb) {
  var file = opts.file,
    imageType = opts.imageType || 'jpg',
    start = opts.start || '1',
    finish = opts.finish || opts.end || '15';

	var command = [
		'java',
		'-jar',
		this.pdfbox,
		'PDFToImage',
    // '-startPage 1',
    // dont use'-outputPrefix thumb_'
  ];
  command.push('-imageType ' + imageType);
  command.push('-startPage ' + start);
  command.push('-endPage ' + finish);
  command.push('"' + file + '"');

	return exec(command.join(' '), {
		timeout: 10000,
		maxBuffer: (1024 * 368)
	}, function _pdfResult(err, stdout, stderr) {
    if (err !== null) {
      console.log('exec err: ' + err);
      return cb(err);
    }

    // process.stdout.pipe(stdout);

    console.log(DBGPFX+'stdout: ' + stdout);
    var resp = stdout && stdout.toString('utf8');
    var lines = (resp+'').replace(/^.*org\.apache\.pdfbox.*$\n/g, '');
    console.warn(DBGPFX+'lines!!!111', lines);
    lines = resp.replace(/^.*Writing\:\s*/g, '');
    console.warn(DBGPFX+'lines---222', lines);
    console.log(DBGPFX+'stderr: ' + stderr);
    return cb(null, lines.split('\n'). resp);
	});
};
