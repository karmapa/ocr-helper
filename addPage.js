var fs = require('fs');

var imageList = fs.readFileSync('./savedlist', 'utf8').split('\n');
var ocrResult = fs.readFileSync('./OCR-result.txt', 'utf8');
var pageCount = 0;

imageList.push('');
ocrResult = '[page_separator]<pb>' + ocrResult;

ocrResult = ocrResult.replace(/\[page_separator\]<pb>/g, function(m) {
  return imageList[pageCount++] + '\n\n';
});

fs.writeFileSync('./OCR-result.txt', ocrResult, 'utf8');