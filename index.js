var scope = {
	pdfbox : process.env.PDFBOX_BIN || (__dirname + "/bin/pdfbox-app-1.8.10.jar")
};

module.exports.PDFSplit = require('./lib/PDFSplit').bind(scope);
module.exports.PDFMerger = require('./lib/PDFMerger').bind(scope);
module.exports.PDFToImage = require('./lib/PDFToImage').bind(scope);
