var pdfBox  = require('..');
var fs      = require('fs');

describe('can export images', function () {
  it('can export PNG', function _png(done) {
    pdfBox.PDFToImage({
      file:       './sample-pdf__from-jspdf.pdf',
      finish:     2,
      imageType:  'png'
    }, function _results(err, results) {
      console.warn('DONE, saved PNG', err, results);
      done();
    });
  });
  it('can export JPG', function _png(done) {
    pdfBox.PDFToImage({
      file:       './sample-pdf__from-jspdf.pdf',
      finish:     2,
      imageType:  'jpg'
    }, function _results(err, results) {
      console.warn('DONE, saved JPG', err, results);
      done();
    });
  });
});
