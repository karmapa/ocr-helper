var fs = require('fs');
var glob = require('glob');
var naturalSort = require('javascript-natural-sort');

var routes = glob.sync('./**/*.*(tif|TIF|tiff|TIFF|jpg|jpeg|png|bmp)').sort(naturalSort);

fs.writeFileSync('./savedlist', routes.join('\n'), 'utf8');